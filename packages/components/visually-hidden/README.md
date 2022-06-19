<h1 align="center">@real-system/visually-hidden</h1>
<p align="center">Real System's screen-reader-only component.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/theme-library"><img src="https://badgen.net/npm/v/@real-system/visually-hidden?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
</p>

## Installation

### Installation

```bash
# install peer dependencies

# npm
$ npm install --save @real-system/styled-library @real-system/elements-primitive react react-dom
# yarn
$ yarn add @real-system/styled-library @real-system/elements-primitive react react-dom

# install visually-hidden

# npm
$ npm install --save @real-system/visually-hidden
# yarn
$ yarn add @real-system/visually-hidden
```

### Code Example

```jsx
import { ThemeProvider } from '@real-system/styled-library';
import { VisuallyHidden } from '@real-system/visually-hidden';

const MyComponent = () => {
  return (
    <ThemeProvider>
      <VisuallyHidden>Screen reader only text</VisuallyHidden>
    </ThemeProvider>
  );
};

```
