<h1 align="center"><img src="assets/rs-icon.png" width="22px"  /> Real System</h1>

<p align="center"><strong>A react component system that is easily extendable and ready-to-theme.</strong></p>

<p align="center">
<a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" /></a> <a href="https://www.npmjs.com/package/@real-system/core"><img src="https://badgen.net/npm/v/@real-system/core?label=@realsystem/core&color=blue" alt="npm version" height="18"/></a>
</p>

---

<h2 align="center">⚠️ CONSUMER CAUTION ⚠️</h2>

<p align="center">Real System is under heavy development. API breaking changes will likely occur upon every release until a major release cut.</p>

---

## Getting Started

### **The entire library can be installed via [@real-system/core](packages/core)**

- It is recommended that every component be imported by accessing subfolders e.g. `@real-system/core/button`. This resolves the need to treeshake `@real-system/core` at compile time. Real System's `libraries` can only be exported from core subfolders e.g. `@real-system/core/styling-library`. This is intentional - libraries have many exports which have ambiguous name clashes with many component-module exports.

### **Every component is its own package via `@real-system/<name-of-pkg>`** ([components](packages/components), [libraries](packages/libraries), [primitives](packages/primitives))

- This supports a superior DX. Imagine a product team simply wants to use the Real System `Button`... we don't want teams to have to install the **_entire_** library, which delays automation pipelines and local development, only to use 1 component. Additionally, if you have `core` installed and only want to upgrade 1 component versus the entire `core`, you can independently install the package you want to upgrade.

<hr />

## Installation

```sh
# 1. Install peer dependencies

$ npm install react react-dom

# or
$ yarn add react react-dom

# 2. Install core package

$ npm install @real-system/core

# or
$ yarn add @real-system/core

# or install individual packages (remember, some packages peer-depend on other real system packages)

$ npm install @real-system/styled-library @real-system/utils-library @real-system/button

# or
$ yarn add @real-system/styled-library @real-system/utils-library @real-system/button
```

## Usage

```jsx
import { RealSystemProvider } from '@real-system/core/styled-library';
import { Flex } from '@real-system/core/flex';
import { Button } from '@real-system/core/button';

const MyComponent = () => {
  return (
    <RealSystemProvider>
      <Flex vertical>
        <Button mb={8}>Default Button</Button>
        <Button mb={8} variant="fill">
          Primary Button
        </Button>
        <Button variant="minimal">Minimal Button</Button>
        <Button variant="floating">Floating Button</Button>
      </Flex>
    </RealSystemProvider>
  );
};
```

## Local Dev

Some notes before you begin.

- [Github Issues/Projects](https://github.com/bigwoof91/real-system/issues) are used to track work.
- [Yarn Workspaces](https://yarnpkg.com/features/workspaces) is used to manage the monorepo.
- Commit messages are linted with [commitlint](https://commitlint.js.org/#/) & [commitizen](https://commitizen-tools.github.io/commitizen/).

## Setup

```bash
# bootstrap project dependencies and husky
$ yarn bootstrap

# develop components locally with storybook
$ yarn dev
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

Real System uses the following projects which drive the majority of component composition patterns.

- [ariakit](https://github.com/ariakit/ariakit)
- [@emotion/react](https://emotion.sh/docs/@emotion/react)
- [@emotion/styled](https://emotion.sh/docs/@emotion/styled)

## Development and Tools

- [yarn workspaces](https://yarnpkg.com/features/workspaces)
- [esbuild](https://esbuild.github.io/)
- [rollupjs](https://rollupjs.org/guide/en/)
- [babel](https://babeljs.io/)
- [storybook](https://storybook.js.org/)
