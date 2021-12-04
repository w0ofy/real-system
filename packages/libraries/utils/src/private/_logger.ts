/* eslint-disable no-console */
import chalk from 'chalk';

const _makeNewLine = (condition = false) => (condition ? '\n' : '');
_makeNewLine.ifLast = (list = [], index = list.length - 1) =>
  index + 1 === list.length ? _makeNewLine(true) : _makeNewLine(false);

type _Logger = {
  (origin, any): ReturnType<typeof console.log>;
  error: (origin, any) => ReturnType<typeof console.error>;
  warn: (origin, any) => ReturnType<typeof console.warn>;
  info: (origin, any) => ReturnType<typeof console.info>;
  table: (origin, any) => ReturnType<typeof console.table>;
  debug: (origin, any) => ReturnType<typeof console.debug>;
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
  table: (origin, ...args) =>
    console.table(chalk.gray(`real-system[${origin}]`, ...args)),
  info: (origin, ...args) =>
    console.info(chalk.blue(`real-system[${origin}]`, ...args)),
  warn: (origin, ...args) =>
    console.warn(chalk.yellow(`real-system[${origin}]`, ...args)),
  error: (origin, ...args) =>
    console.error(chalk.red.bold.underline(`real-system[${origin}]`, ...args)),
  debug: (origin, ...args) =>
    console.debug(chalk.gray(`real-system[${origin}]`, ...args)),
  br: _makeNewLine,
});

export type { _Logger };
export { _logger };
