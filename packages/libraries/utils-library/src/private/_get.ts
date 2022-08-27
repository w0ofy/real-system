import lodashGet from 'lodash.get';

import { Dict } from '../types';

type Get<T = any> = {
  (obj: Record<any, any>, path: string[] | string, fallback?: T): T;
  oneOf: typeof _getOneOf;
};

const _get: Get = lodashGet;

const _getOneOf = <S extends Record<any, any> = Dict, F = any>(
  obj: S,
  accessors: string[],
  fallback?: F
): F => {
  let value = fallback;

  for (let i = 0; i < accessors.length; i++) {
    const possibleValue = _get(obj, accessors[i], undefined);
    if (possibleValue) {
      value = possibleValue;
      break;
    }
  }

  return value as F;
};

_get.oneOf = _getOneOf;

export { _get, _getOneOf };
