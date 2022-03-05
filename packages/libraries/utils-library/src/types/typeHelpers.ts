export type Merge<T, P> = P & Omit<T, keyof P>;

export type UnionStringArray<T extends Readonly<string[]>> = T[number];

export type AnyFunction<T = any> = (...args: T[]) => any;

export type Dict<T = any> = Record<string, T>;

export type Booleanish = boolean | 'true' | 'false';

export type StringOrNumber = string | number;

// eslint-disable-next-line @typescript-eslint/ban-types
export type StringUnion<T> = T | (string | {});

// eslint-disable-next-line @typescript-eslint/ban-types
export type AnyPropUnion<T> = T | (any | {});

// eslint-disable-next-line @typescript-eslint/ban-types
export type StringUnionWithString<T> = T | (string | {});
