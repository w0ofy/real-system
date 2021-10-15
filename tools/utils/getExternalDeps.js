const getExternalDeps = (packageJson = {}) => {
  const externalDeps = Object.keys({
    ...packageJson.peerDependencies,
    ...packageJson.devDependencies,
  });
  const wildcardedExternalDeps = externalDeps.map((dep) => `${dep}/*`);
  return [...externalDeps, ...wildcardedExternalDeps];
};

module.exports = {
  getExternalDeps,
};
