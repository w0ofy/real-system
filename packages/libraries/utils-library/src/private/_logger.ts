/* eslint-disable no-console */
import chalk from 'chalk';

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
} & {
  [key in keyof typeof chalk]?: any;
};

/**
 * @const _logger a light wrapper around console.log with chalk for real system logging
 */
/** @ts-ignore */
const _logger: _Logger = (origin, ...args) =>
  console.log(`real-system[${origin}]`, ...args);

Object.assign(_logger, {
  ...chalk,
  table: (origin: string, ...args: any[]) =>
    console.table(chalk.gray(`real-system[${origin}]`, ...args)),
  info: (origin: string, ...args: any[]) =>
    console.info(chalk.blue(`real-system[${origin}]`, ...args)),
  warn: (origin: string, ...args: any[]) =>
    console.warn(chalk.yellow(`real-system[${origin}]`, ...args)),
  error: (origin: string, ...args: any[]) =>
    console.error(chalk.red.bold.underline(`real-system[${origin}]`, ...args)),
  debug: (origin: string, ...args: any[]) =>
    console.debug(chalk.gray(`real-system[${origin}]`, ...args)),
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
