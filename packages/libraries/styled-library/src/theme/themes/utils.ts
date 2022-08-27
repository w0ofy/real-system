import { Dict } from '@real-system/utils-library';

const makeTokenScale = <T extends Dict = Dict<unknown>>(
  scale: T
): Dict<unknown> => {
  const tokenScale = {};
  Object.keys(scale).forEach((key, i) => {
    tokenScale[key] = scale[key];
    tokenScale[i] = scale[key];
  });
  return tokenScale;
};

export { makeTokenScale };
