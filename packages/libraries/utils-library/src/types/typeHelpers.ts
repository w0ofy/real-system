export type Merge<T, P> = P & Omit<T, keyof P>;

export type UnionStringArray<T extends Readonly<string[]>> = T[number];

export type Func<T = any> = (...args: T[]) => any;

export type FuncArguments<T extends Func> = T extends (...args: infer R) => any
  ? R
  : never;

export type Dict<T = any> = Record<PropertyKey, T>;

export type Booleanish = boolean | 'true' | 'false';

export type StringOrNumber = string | number;

// eslint-disable-next-line @typescript-eslint/ban-types
export type StringUnion<T> = T | (string & {});

// eslint-disable-next-line @typescript-eslint/ban-types
export type AnyPropUnion<T> = T | (any & {});

// eslint-disable-next-line @typescript-eslint/ban-types
export type StringUnionWithString<T> = T | (string & {});

export type Obj<T = any> = Record<PropertyKey, T>;

export type ObjUnion<T> = T & { [key: PropertyKey]: any };

export type RequireSome<T extends Obj, S extends keyof T> = Omit<T, S> &
  Required<Pick<T, S>>;
