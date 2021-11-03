/**
 * @description get the typeof value of an object
 */
export type ValueOf<O> = O[keyof O];

/**
 * @description add a prefix to a string type
 */
export type AddPrefix<TKey, TPrefix extends string> = TKey extends string
  ? `${TPrefix}${TKey}`
  : never;
/**
 * @description add a prefix to a string type
 */
export type RemovePrefix<
  TPrefixedKey,
  TPrefix extends string
> = TPrefixedKey extends AddPrefix<infer TKey, TPrefix> ? TKey : '';
/**
 * @description get the prefixed value in a string type
 */
export type GetPrefix<
  // eslint-disable-next-line @typescript-eslint/ban-types
  TObject extends object,
  TPrefixedKey extends string,
  TPrefix extends string
> = TObject extends { [K in RemovePrefix<TPrefixedKey, TPrefix>]: infer TValue }
  ? TValue
  : never;
/**
 * @description add a prefix to keys in an object type
 */
export type AddPrefixToObject<
  // eslint-disable-next-line @typescript-eslint/ban-types
  TObject extends object,
  TPrefix extends string
> = {
  [K in AddPrefix<keyof TObject, TPrefix>]: GetPrefix<TObject, K, TPrefix>;
};
