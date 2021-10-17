const getExternalDeps = (packageJson = {}) => {
  const externalDeps = Object.keys({
    ...packageJson.peerDependencies,
  });
  const wildcardedExternalDeps = externalDeps.map((dep) => `${dep}/*`);
  return [...externalDeps, ...wildcardedExternalDeps];
};

module.exports = {
  getExternalDeps,
};
