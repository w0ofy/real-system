<h1 align="center">@real-system/box-primitive</h1>
<p align="center">Real System's primitive Box component.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/box-primitive"><img src="https://badgen.net/npm/v/@real-system/box-primitive?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
</p>

## Usage

### Installation

```bash
# install peer dependencies

# npm
$ npm install --save @real-system/styling-library react react-dom
# yarn
$ yarn add @real-system/styling-library react react-dom

# install box

# npm
$ npm install --save @real-system/box-primitive
# yarn
$ yarn add @real-system/box-primitive
```

### Code Example

```jsx
import { ThemeProvider } from '@real-system/theme-library';
import { Box, BoxAs } from '@real-system/box-primitive';

const Aside = BoxAs('aside');

const MyComponent = () => {
  return (
    <ThemeProvider>
      <Aside background="white" display="flex" flexDirection="column">
        <Box display="flex">...</Box>
      </Aside>
    </ThemeProvider>
  );
};

```
