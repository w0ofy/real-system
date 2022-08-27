const canUseDOM = (): boolean =>
  !!(
    typeof window !== 'undefined' &&
    window?.document &&
    window?.document?.createElement
  );

const isHTMLElement = (el: any): el is HTMLElement => {
  if (!isElement(el)) {
    return false;
  }

  const win = el.ownerDocument.defaultView ?? window;
  return el instanceof win.HTMLElement;
};

const isElement = (el: any): el is HTMLElement =>
  el != null &&
  typeof el == 'object' &&
  'nodeType' in el &&
  el.nodeType === Node.ELEMENT_NODE;

const getOwnerDocument = (node?: Element | null): Document =>
  isElement(node) ? node.ownerDocument ?? document : document;

type EventKeys =
  | 'ArrowDown'
  | 'ArrowUp'
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'Enter'
  | 'Space'
  | 'Tab'
  | 'Backspace'
  | 'Control'
  | 'Meta'
  | 'Home'
  | 'End'
  | 'PageDown'
  | 'PageUp'
  | 'Delete'
  | 'Escape'
  | ' '
  | 'Shift';

/**
 * Get the normalized event key across all browsers
 */
function normalizeEventKey(event: Pick<KeyboardEvent, 'key' | 'keyCode'>) {
  const { key, keyCode } = event;

  const isArrowKey =
    keyCode >= 37 && keyCode <= 40 && key.indexOf('Arrow') !== 0;

  const eventKey = isArrowKey ? `Arrow${key}` : key;

  return eventKey as EventKeys;
}

export type { EventKeys };
export {
  canUseDOM,
  getOwnerDocument,
  isElement,
  isHTMLElement,
  normalizeEventKey,
};
