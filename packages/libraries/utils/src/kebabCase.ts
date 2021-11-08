import { KebabCase } from 'type-fest';

const kebabCase = <S extends string>(str: string): KebabCase<S> => {
  if (!str || typeof str !== 'string') {
    /** @todo find better way of typing for this */
    return '' as KebabCase<S>;
  }

  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() as KebabCase<S>;
};

export { kebabCase };
