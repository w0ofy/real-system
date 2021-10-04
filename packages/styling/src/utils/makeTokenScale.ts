const makeTokenScale = <T = Record<string, any>>(
  scale: T
): (string | number)[] => {
  const values = Object.values(scale);
  Object.keys(scale).forEach((key, i) => {
    values[key] = values[i];
  });
  return values;
};

export { makeTokenScale };
