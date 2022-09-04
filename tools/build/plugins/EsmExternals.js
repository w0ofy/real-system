/**
 * https://github.com/sindresorhus/escape-string-regexp
 * But it's esm and our node scripts can't handle importing them, so copy pasted here as it doesn't seem like a big deal.
 */
function escapeStringRegexp(string) {
  if (typeof string !== 'string') {
    throw new TypeError('Expected a string');
  }

  // Escape characters with special meaning either inside or outside character sets.
  // Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
  return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}

function makeFilter(externals) {
  return new RegExp(
    '^(' + externals.map(escapeStringRegexp).join('|') + ')(\\/.*)?$'
  );
}

const NAME = 'esm-externals';
const NAMESPACE = NAME;

// modified version of https://github.com/remorses/esbuild-plugins/tree/master/esm-externals
function EsmExternalsPlugin({ externals }) {
  return {
    name: NAME,
    setup(build) {
      const filter = makeFilter(externals);
      build.onResolve({ filter: /.*/, namespace: NAMESPACE }, (args) => {
        return {
          path: args.path,
          external: true,
        };
      });
      build.onResolve({ filter }, (args) => {
        if (args.kind !== 'import-statement') {
          return {
            path: args.path,
            namespace: NAMESPACE,
          };
        }
      });
      build.onLoad({ filter: /.*/, namespace: NAMESPACE }, (args) => {
        return {
          contents: `export * as default from ${JSON.stringify(
            args.path
          )}; export * from ${JSON.stringify(args.path)};`,
        };
      });
    },
  };
}

module.exports = { EsmExternalsPlugin };
