const getFieldsFromPkgJson = (pkgJson) => {
  return {
    ...pkgJson,
    outfile: {
      cjs: pkgJson['main'],
      esm: pkgJson['module'],
    },
  };
};

module.exports = {
  getFieldsFromPkgJson,
};
