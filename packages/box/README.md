# `@real-system/box`

<p align="center">
<p>Real System's primitive Box component.</p>
<a href="https://badge.fury.io/js/@real-system%2Fbox"><img src="https://badge.fury.io/js/@real-system%2Fbox.svg" alt="npm version" height="18"/></a>
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
import { ThemeProvider } from '@real-system/theme`;
import { Box, BoxAs } from '@real-system/box`;

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
