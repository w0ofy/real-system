type RemoveSuffix<
  T extends string,
  S extends string,
> = T extends `${infer Prefix}${S}` ? Prefix : never;

/**
 * @description add a prefix to a string type
 */
type AddPrefix<TKey, TPrefix extends string> = TKey extends string
  ? `${TPrefix}${TKey}`
  : never;

/**
 * @description add a suffix to a string type
 */
type AddSuffix<TKey, TSuffix extends string> = TKey extends string
  ? `${TKey}${TSuffix}`
  : never;

/**
 * @description remove a prefix to a string type
 */
type RemovePrefix<TPrefixedKey, TPrefix extends string> =
  TPrefixedKey extends AddPrefix<infer TKey, TPrefix> ? TKey : '';
/**
 * @description get the prefixed value in a string type
 */
type GetPrefix<
  // eslint-disable-next-line @typescript-eslint/ban-types
  TObject extends object,
  TPrefixedKey extends string,
  TPrefix extends string,
> = TObject extends { [K in RemovePrefix<TPrefixedKey, TPrefix>]: infer TValue }
  ? TValue
  : never;
/**
 * @description add a prefix to keys in an object type
 */
type AddPrefixToObject<
  // eslint-disable-next-line @typescript-eslint/ban-types
  TObject extends object,
  TPrefix extends string,
> = {
  [K in AddPrefix<keyof TObject, TPrefix>]: GetPrefix<TObject, K, TPrefix>;
};

export type {
  AddPrefix,
  AddPrefixToObject,
  AddSuffix,
  GetPrefix,
  RemovePrefix,
  RemoveSuffix,
};
