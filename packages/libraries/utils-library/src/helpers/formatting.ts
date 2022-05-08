import { _logger } from '../private/_logger';
import type { KebabCase } from '../types/kebabCase';

const capitalize = <T extends string = string>(str: string): T => {
  if (!str || typeof str !== 'string') {
    _logger.warn('utils/capitalize', 'capitalize requires a string argument');
    return '' as T;
  }
  const lower = str.toLowerCase();
  return (str.charAt(0).toUpperCase() + lower.slice(1)) as T;
};

const kebabCase = <S extends string>(str: S): KebabCase<S> => {
  if (!str || typeof str !== 'string') {
    /** @todo find better way of typing for this */
    _logger.throw.type(
      'utils-library.kebabCase',
      'kebabCase util requires a string type argument.'
    );
    return '' as KebabCase<S>;
  }

  return str
    .replace(/([a-z]|[A-Z])([A-Z])/g, '$1-$2')
    .toLowerCase() as KebabCase<S>;
};

export { capitalize, kebabCase };
