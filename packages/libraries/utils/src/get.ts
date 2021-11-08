import _get from 'lodash.get';

type Get<T = any> = {
  (obj: Record<any, any>, path: string[] | string, fallback?: T): T;
  oneOf: typeof getOneOf;
};

const get: Get = _get;

const getOneOf = <S = Record<string, any>, F = any>(
  obj: S,
  accessors: string[],
  fallback?: F
): F => {
  let value = fallback;

  for (let i = 0; i < accessors.length; i++) {
    const possibleValue = get(obj, accessors[i], undefined);
    if (possibleValue) {
      value = possibleValue;
      break;
    }
  }

  return value as F;
};

get.oneOf = getOneOf;

export { get, getOneOf };
