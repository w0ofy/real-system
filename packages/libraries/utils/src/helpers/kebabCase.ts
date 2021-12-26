import { KebabCase } from 'type-fest';

import { _logger } from '../private';

const kebabCase = <S extends string>(str: string): KebabCase<S> => {
  if (!str || typeof str !== 'string') {
    /** @todo find better way of typing for this */
    _logger.throw.type(
      'utils.kebabCase',
      'kebabCase util requires a string type argument.'
    );
    return '' as KebabCase<S>;
  }

  return str
    .replace(/([a-z]|[A-Z])([A-Z])/g, '$1-$2')
    .toLowerCase() as KebabCase<S>;
};

export { kebabCase };
