/* eslint-disable no-console */

const _makeNewLine = (condition = false) => (condition ? '\n' : '');
_makeNewLine.ifLast = (list = [], index = list.length - 1) =>
  index + 1 === list.length ? _makeNewLine(true) : _makeNewLine(false);

type _Logger = {
  (origin: string, ...any: any[]): ReturnType<typeof console.log>;
  error: (origin: string, ...any: any[]) => ReturnType<typeof console.error>;
  warn: (origin: string, ...any: any[]) => ReturnType<typeof console.warn>;
  info: (origin: string, ...any: any[]) => ReturnType<typeof console.info>;
  table: (origin: string, ...any: any[]) => ReturnType<typeof console.table>;
  debug: (origin: string, ...any: any[]) => ReturnType<typeof console.debug>;
  throw: {
    type: (origin: string, ...any: any[]) => ReturnType<typeof TypeError>;
    error: (origin: string, ...any: any[]) => ReturnType<typeof Error>;
    syntax: (origin: string, ...any: any[]) => ReturnType<typeof SyntaxError>;
  };
  br: typeof _makeNewLine;
};
/**
 * @const _logger a light wrapper around console.log for real system logging
 */
/** @ts-ignore */
const _logger: _Logger = (origin, ...args) =>
  console.log(`real-system[${origin}]`, ...args);

Object.assign(_logger, {
  table: (origin: string, ...args: any[]) =>
    console.table(`real-system[${origin}]`, ...args),
  info: (origin: string, ...args: any[]) =>
    console.info(`real-system[${origin}]`, ...args),
  warn: (origin: string, ...args: any[]) =>
    console.warn(`real-system[${origin}]`, ...args),
  error: (origin: string, ...args: any[]) =>
    console.error(`real-system[${origin}]`, ...args),
  debug: (origin: string, ...args: any[]) =>
    console.debug(`real-system[${origin}]`, ...args),
  br: _makeNewLine,
  throw: {
    error: (origin: string, message: string) => {
      if (origin) {
        throw new Error(`real-system[${origin}] ${message}`);
      }
    },
    type: (origin: string, message: string) => {
      if (origin) {
        throw new TypeError(`real-system[${origin}] ${message}`);
      }
    },
  },
});

export type { _Logger };
export { _logger };
