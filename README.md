# `@realsystem`

An easily themeable, extendable "**Real**" component "**System**" for responsive web applications.

<br />

## Local Dev

Some super detailed notes before you begin development.

- The project uses [Github Issues](https://github.com/bigwoof91/realsystem/issues) to track work to be completed.
- The project uses [NPM Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) which requires `npm@v7.x`. Workspaces is still a little buggy, but in the interest of future proofing the project, it will be maintained as such.
- Every component is its own package. This is to help support a superior DX. Imagine an engineering team simply wants to use the Real System `Button`; we don't want teams to have to install the **_entire_** library, which delays automation pipelines and local development, only to use 1 component.
- The entire library can be installed `@realsystem/core` but every component is importing by accessing subfolders e.g. `@realsystem/core/button`. This resolves the need to treeshake `@realsystem/core` at build time.

<br />

### Setup and Local Dev

```bash
# install deps in root (this will install all deps and link them between packages)
$ npm install

# bootstrap package
$ npm run bootstrap

# develop components locally (with playroom)
$ npm run dev

# develop the documentation website
$ npm run website
```

## Tools, Dependencies, Resources

### Primitive Layer

- [theme ui](https://theme-ui.com/)

### Development and Tools API

- [esbuild](https://esbuild.github.io/)
- [playroom]()
- [coming soon] [storybook]()
- [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)

### Documentation

- [docusaurus]()
