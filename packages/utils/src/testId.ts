const prefix = 'real-system-';

const makeTestId = (componentName: string): string => {
  return prefix + componentName;
};

export { makeTestId };
