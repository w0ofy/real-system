# `@realsystem/box`

## Usage

### Installation

```bash
# install peer dependencies

# npm
$ npm install --save @realsystem/styling react react-dom
# yarn
$ yarn add @realsystem/styling react react-dom

# install icon

# npm
$ npm install --save @realsystem/icon
# yarn
$ yarn add @realsystem/icon
```

### Code Example

```jsx
import { ThemeProvider } from '@realsystem/theme`;
import { Box, BoxAs } from '@realsystem/box`;

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
