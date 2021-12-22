const prefix = 'real-system-';

const makeTestId = <T extends string>(
  componentName: T
): `${typeof prefix}${T}` => {
  return (prefix + componentName) as `${typeof prefix}${T}`;
};

export { makeTestId };
