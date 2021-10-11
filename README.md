# `@realsystem`

An easily themeable, extendable "**Real**" component "**System**" for responsive web applications.

<br />

## Local Dev

Some super detailed notes before you begin development.

- The project uses [Github Issues/Projects](https://github.com/bigwoof91/realsystem/issues) to track work to be completed.
- The project uses [Yarn Workspaces](https://yarnpkg.com/features/workspaces)
- The project lints commit messages and uses commitizen to assist with this effort.
- [WIP - not ready yet] Every component is its own package. This is to help support a superior DX. Imagine an engineering team simply wants to use the Real System `Button`; we don't want teams to have to install the **_entire_** library, which delays automation pipelines and local development, only to use 1 component.
- [WIP - not ready yet] The entire library can be installed `@realsystem/core` but every component is importing by accessing subfolders e.g. `@realsystem/core/button`. This resolves the need to treeshake `@realsystem/core` at build time.

<br />

### Setup and Local Dev

```bash
# bootstrap project dependencies
$ yarn bootstrap

# develop components locally w/ yarn workspaces and storybook
$ yarn dev

# develop the documentation website
$ yarn website
```

### Contributing

```bash
$ git checkout -b <branch_name>
$ git add .
# the next step will throw an error if the commit message does follow these [conventions](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)
$ git commit -m "<your_commit_message>"
# or to be prompted via commitizen :) (this way is preferred and much easier)
$ yarn commit
$ git push origin <branch_name>
# then raise a PR
```

## Tools, Dependencies, Resources

### Primitive Layer

- [theme ui](https://theme-ui.com/)

### Development and Tools API

- [esbuild](https://esbuild.github.io/)
- [playroom]()
- [storybook](https://storybook.js.org/)
- [yarn workspaces](https://yarnpkg.com/features/workspaces)

### Documentation

- [coming soon] [docusaurus]()
