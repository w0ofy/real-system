const makeTokenScale = <T = Record<string, unknown>>(
  scale: T
): Record<string, unknown> => {
  const tokenScale = {};
  Object.keys(scale).forEach((key, i) => {
    tokenScale[key] = scale[key];
    tokenScale[i] = scale[key];
  });
  return tokenScale;
};

export { makeTokenScale };
