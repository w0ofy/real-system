import React from 'react';

export type Merge<T, P> = P & Omit<T, keyof P>;

export type UnionStringArray<T extends Readonly<string[]>> = T[number];

export type AnyFunction<T = any> = (...args: T[]) => any;

export type Dict<T = any> = Record<string | number | symbol, T>;

export type Booleanish = boolean | 'true' | 'false';

export type StringOrNumber = string | number;

// eslint-disable-next-line @typescript-eslint/ban-types
export type StringUnion<T> = T | (string | {});

// eslint-disable-next-line @typescript-eslint/ban-types
export type AnyPropUnion<T> = T | (any | {});

// eslint-disable-next-line @typescript-eslint/ban-types
export type StringUnionWithString<T> = T | (string | {});

type AcceptableKey = string | number | symbol;

export type Obj<T = any> = Record<AcceptableKey, T>;

export type RequireSome<T extends Obj, S extends keyof T> = Omit<T, S> &
  Required<Pick<T, S>>;
