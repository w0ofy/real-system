<h1 align="center">@real-system/button</h1>
<p align="center">Real System's Button component.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/button"><img src="https://badgen.net/npm/v/@real-system/button?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
</p>

## Installation

```bash
# install peer dependencies

# npm
$ npm install @real-system/styled-library @real-system/elements-primitive @real-system/utils-library react react-dom
# yarn
$ yarn add @real-system/styled-library @real-system/elements-primitive @real-system/utils-library react react-dom

# install button

# npm
$ npm install @real-system/button
# yarn
$ yarn add @real-system/button
```

### Code Example

```jsx
import { ThemeProvider } from '@real-system/styled-library';
import { Button } from '@real-system/button';

const MyComponent = () => {
  return (
    <ThemeProvider>
      <Button>Button</Button>
    </ThemeProvider>
  );
};

```
