---
sidebar_position: 1
---

# Getting Started

Let's discover **Real System in less than 5ish minutes**.

## What is Real System?

Real System is a design system built by engineers, for engineers. The contributors are "Authors": writers and story tellers - in fact, they don't believe any engineer is _just_ an engineer. Engineers design experiences by writing stories. The stories they write are often referred to as code 😜 and what that code looks like, often makes a very big impact (i.e. tech debt)

## Under the Hood

Real System's foundation is simple: [React](https://reactjs.org/) and [Typescript](https://www.typescriptlang.org/) - mainly for DX and error tolerance reasons. It also uses many foundational `a11y`-compliant components and libraries under the hood like [Reach UI](https://reach.tech/). And not to worry, it exports generic `types` for customizing component props and things, but we'll get to that later.

Real System Authors believe other folks have invented great tools and feel as though its unnecessary to reinvent the wheel - for as long as it doesn't compromise its consumer's experience.

## Installation

### Core Library

Everything Real System has to offer

```shell
npm i --save @realsystem/core
```

### Child Libraries

A single component or module

```shell
npm i --save @realsystem/box
```

## Example Usage

Importing modules always looks the same

```jsx
// importing from a child library
import { Box } from '@realsystem/box';

// importing from the core library
import { Box } from '@realsystem/core';
```

Importing modules, from any Real System library, always looks the same. There aren't any default exports and everything is named. Authors of Real System love trying to tell good stories and so, naming things is awfully important to us. Always tell us if things can be changed to make more sense! We thrive on feedback.

We hope you enjoy using Real System and hope that whoever you're building it for enjoys it even more!
