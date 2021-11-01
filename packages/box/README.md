<h1 align="center">@realsystem/box</h1>
<p align="center">Real System's primitive Box component.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/box"><img src="https://badgen.net/npm/v/@real-system/box?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
<a href="https://www.npmjs.com/package/@real-system/box"><img src="https://badgen.net/bundlephobia/min/@real-system/box" alt="minified size" height="18"/></a>
</p>

## Usage

### Installation

```bash
# install peer dependencies

# npm
$ npm install --save @real-system/styling react react-dom
# yarn
$ yarn add @real-system/styling react react-dom

# install icon

# npm
$ npm install --save @real-system/icon
# yarn
$ yarn add @real-system/icon
```

### Code Example

```jsx
import { ThemeProvider } from '@real-system/theme';
import { Box, BoxAs } from '@real-system/box';

const Aside = BoxAs('aside');

const MyComponent = () => {
  return (
    <ThemeProvider>
      <Aside background="color-background" display="flex" flexDirection="column">
        <Box display="flex">...</Box>
      </Aside>
    </ThemeProvider>
  );
};

```
