/**
 * Kudos to chakra-ui https://github.com/chakra-ui/chakra-ui/tree/next/packages/descendant
 * This code is a slightly-modified version of that package source code.
 */
import { _logger } from '@real-system/utils-library';

/**
 * Sort an array of DOM nodes according to the HTML tree order
 * @see http://www.w3.org/TR/html5/infrastructure.html#tree-order
 */
const sortNodes = (nodes: Node[]) => {
  return nodes.sort((a, b) => {
    const compare = a.compareDocumentPosition(b);

    if (
      compare & Node.DOCUMENT_POSITION_FOLLOWING ||
      compare & Node.DOCUMENT_POSITION_CONTAINED_BY
    ) {
      // a < b
      return -1;
    }

    if (
      compare & Node.DOCUMENT_POSITION_PRECEDING ||
      compare & Node.DOCUMENT_POSITION_CONTAINS
    ) {
      // a > b
      return 1;
    }

    if (
      compare & Node.DOCUMENT_POSITION_DISCONNECTED ||
      compare & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
    ) {
      _logger.throw.error(
        'descendants-library',
        'Cannot sort the given nodes.'
      );
    }
    return 0;
  });
};

const getNextIndex = (current: number, max: number, loop: boolean) => {
  let next = current + 1;
  if (loop && next >= max) next = 0;
  return next;
};

const getPrevIndex = (current: number, max: number, loop: boolean) => {
  let next = current - 1;
  if (loop && next < 0) next = max;
  return next;
};

export { getNextIndex, getPrevIndex, sortNodes };
