const REACT_TEXT = {
  string: true,
  number: true,
};

const isReactText = (value: any) => !!REACT_TEXT[typeof value];

export { isReactText };
