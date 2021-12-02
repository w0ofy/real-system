import { uid, useUID, useUIDSeed } from 'react-uid';

import { capitalize } from './captialize';
import { get, getOneOf } from './get';
import { merge } from './merge';
import { makeTestId } from './testId';

const fns = {
  capitalize,
  get,
  getOneOf,
  makeTestId,
  merge,
  uid,
};

const hooks = {
  useUID,
  useUIDSeed,
};

/** fn utils */
export { fns, hooks };

/** type utils */
export * from './kebabCase';
export * from './typeUtils';
export type { Get, KebabCase, KebabCasedProperties } from 'type-fest';
