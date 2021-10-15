const fs = require('fs');

const readPackageJson = () => {
  let packageJson = fs.readFileSync('package.json');
  return (packageJson = JSON.parse(packageJson));
};

module.exports = {
  readPackageJson,
};
