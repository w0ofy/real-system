const makeMdxParameters = (customParams = {}) => ({
  viewMode: 'docs',
  previewTabs: {
    canvas: { hidden: true },
  },
  ...customParams,
});

export { makeMdxParameters };
