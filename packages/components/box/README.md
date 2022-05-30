<h1 align="center">@real-system/box</h1>
<p align="center">Real System's primitive Box component.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/box"><img src="https://badgen.net/npm/v/@real-system/box?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
</p>

## Usage

### Installation

```bash
# install peer dependencies

# npm
$ npm install --save @real-system/styled-library react react-dom
# yarn
$ yarn add @real-system/styled-library react react-dom

# install box

# npm
$ npm install --save @real-system/box
# yarn
$ yarn add @real-system/box
```

### Code Example

```jsx
import { ThemeProvider } from '@real-system/styled-library';
import { Box } from '@real-system/box';


const MyComponent = () => {
  return (
    <ThemeProvider>
      <Box as="aside" bgColor="white" display="flex" flexDirection="column">
        <Box display="flex">...</Box>
      </Box>
    </ThemeProvider>
  );
};

```
