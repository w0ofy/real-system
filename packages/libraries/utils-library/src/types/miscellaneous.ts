type Merge<T, P> = P & Omit<T, keyof P>;

type UnionStringArray<T extends Readonly<string[]>> = T[number];

type Func<T = any> = (...args: T[]) => any;

type FuncArguments<T extends Func> = T extends (...args: infer R) => any
  ? R
  : never;

type Dict<T = any> = Record<PropertyKey, T>;

type Booleanish = boolean | 'true' | 'false';

type StringOrNumber = string | number;

// eslint-disable-next-line @typescript-eslint/ban-types
type StringUnion<T> = T | (string & {});

// eslint-disable-next-line @typescript-eslint/ban-types
type StringUnionWithString<T> = T | (string & {});

type AnyObj<T = any> = Record<PropertyKey, T>;

type ObjUnion<T> = T & AnyObj;

type PropUnion<T> = ObjUnion<T>;

type RequireSome<T extends AnyObj, S extends keyof T> = Omit<T, S> &
  Required<Pick<T, S>>;

export type {
  AnyObj,
  Booleanish,
  Dict,
  Func,
  FuncArguments,
  Merge,
  ObjUnion,
  PropUnion,
  RequireSome,
  StringOrNumber,
  StringUnion,
  StringUnionWithString,
  UnionStringArray,
};
