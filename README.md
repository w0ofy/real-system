# `@realsystem`

An easily themeable, extendable "**Real**" component "**System**" for responsive web applications.

<br />

Some nice consumer-friendly features and patterns we follow

- **Every component is its own package.** This supports a superior DX. Imagine an engineering team simply wants to use the Real System `Box`; we don't want teams to have to install the **_entire_** library, which delays automation pipelines and local development, only to use 1 component. Additionally, if you have `core` installed and only want to upgrade 1 component versus the entire `core`, you can independently install the package you want to upgrade.
- **The entire library can be installed** via `@realsystem/core` but every component is importing by accessing subfolders e.g. `@realsystem/core/button`. This resolves the need to treeshake `@realsystem/core` at build time.

<br />

## Local Dev

Some notes before you begin.

- [Github Issues/Projects](https://github.com/bigwoof91/realsystem/issues) are used to track work to be completed.
- [Yarn Workspaces](https://yarnpkg.com/features/workspaces) is used to manage the monorepo
- Commit messages are linted and uses [commitlint](https://commitlint.js.org/#/) with [commitizen](https://commitizen-tools.github.io/commitizen/) to assist with this effort.

### Setup

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

# the next step will throw an error if the commit message does follow these conventions: https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional

$ git commit -m "<your_commit_message>"

# or to be prompted by commitizen :)
$ yarn commit
$ git push origin <branch_name>

# then raise a PR
```

## Tools, Dependencies, Resources

### Primitive API

- [styled system](https://styled-system.com/)
- [styled components](https://styled-components.com/)

### Development and Tools

- [yarn workspaces](https://yarnpkg.com/features/workspaces)
- [esbuild](https://esbuild.github.io/)
- [rollupjs](https://rollupjs.org/guide/en/)
- [babel](https://babeljs.io/)
- [storybook](https://storybook.js.org/)
- [playroom]()
- (coming soon) [docusaurus](https://docusaurus.io/)
