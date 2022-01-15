<p align="center">
<img src="assets/animated-logo.gif" width="350px"  />
</p>
<p align="center">A react component system that is easily extendable and ready-to-theme.</p>
<p align="center">
<a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" /></a>
<a href="https://www.npmjs.com/package/@real-system/core"><img src="https://badgen.net/npm/v/@real-system/core?label=@realsystem/core&color=blue" alt="npm version" height="18"/></a>
<a href="https://www.npmjs.com/package/@real-system/core"><img src="https://badgen.net/bundlephobia/min/@real-system/core" alt="minified size" height="18"/></a>
</p>

#### **The entire library can be installed via [@real-system/core](packages/core)**

- It is recommended that every component be imported by accessing subfolders e.g. `@real-system/core/button`. This resolves the need to treeshake `@real-system/core` at compile time. Real System `libraries` can only be exported from core subfolders e.g. `@real-system/core/styling`. This is intentional - libraries have many exports which have ambiguous name clashes with many component-module exports.

#### **Every component is its own package via `@real-system/<name-of-pkg>`** ([components](packages/components), [libraries](packages/libraries), [primitives](packages/primitives))

- This supports a superior DX. Imagine a product team simply wants to use the Real System `Button`... we don't want teams to have to install the **_entire_** library, which delays automation pipelines and local development, only to use 1 component. Additionally, if you have `core` installed and only want to upgrade 1 component versus the entire `core`, you can independently install the package you want to upgrade.

<hr />

# Installation

```bash
# install peer dependencies

# npm
$ npm install react react-dom
# yarn
$ yarn add react react-dom

# install core

# npm
$ npm install @real-system/core
# yarn
$ yarn add @real-system/core

# or install individual packages (remember, some packages peer-depend on other real system packages)

# npm
$ npm install @real-system/styling-library @real-system/theme-library @real-system/utils-library @real-system/button
# yarn
$ yarn add @real-system/styling-library @real-system/theme-library @real-system/utils-library @real-system/button
```

# Usage

```jsx
import { ThemeProvider } from '@real-system/core/theme';
import { Flex } from '@real-system/core/flex';
import { Button } from '@real-system/core/button';

const MyComponent = () => {
  return (
    <ThemeProvider>
      <Flex vertical>
        <Button mb={8}>Default Button</Button>
        <Button mb={8} variant="primary">
          Primary Button
        </Button>
        <Button variant="minimal">Minimal Button</Button>
        <Button variant="floating">Floating Button</Button>
      </Flex>
    </ThemeProvider>
  );
};
```

# Local Dev

Some notes before you begin.

- [Github Issues/Projects](https://github.com/bigwoof91/real-system/issues) are used to track work to be completed.
- [Yarn Workspaces](https://yarnpkg.com/features/workspaces) is used to manage the monorepo.
- Commit messages are linted with [commitlint](https://commitlint.js.org/#/) + [commitizen](https://commitizen-tools.github.io/commitizen/).

## Setup

```bash
# bootstrap project dependencies and husky
$ yarn bootstrap

# develop components locally with storybook
$ yarn dev

# develop the documentation website
$ yarn website
```

## Contributing

```bash
$ git checkout -b <branch_name>
$ git add .

# the next step will throw an error if the commit message doesn't follow conventional-changelog standards: https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional

$ git commit -m "<your_commit_message>"

# or to be prompted by commitizen :)
$ yarn commit
$ git push origin <branch_name>

# then raise a PR
```

# Tools, Dependencies, Resources

## Under the hood

Real System uses the following projects which compose the majority of component patterns.

- [styled system](https://styled-system.com/)
- [@emotion/react](https://emotion.sh/docs/@emotion/react)
- [@emotion/styled](https://emotion.sh/docs/@emotion/styled)

## Development and Tools

- [yarn workspaces](https://yarnpkg.com/features/workspaces)
- [esbuild](https://esbuild.github.io/)
- [rollupjs](https://rollupjs.org/guide/en/)
- [babel](https://babeljs.io/)
- [storybook](https://storybook.js.org/)
- [playroom](https://github.com/seek-oss/playroom)
