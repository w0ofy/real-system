# `@real-system/button`

<p align="center">
<p>Real System's Button component.</p>
<a href="https://badge.fury.io/js/@real-system%2Fbutton"><img src="https://badge.fury.io/js/@real-system%2Fbutton.svg" alt="npm version" height="18"/></a>
</p>

## Usage

```bash
# install peer dependencies

# npm
$ npm install @real-system/styling @real-system/box @real-system/utils react react-dom
# yarn
$ yarn add @real-system/styling @real-system/box @real-system/utils react react-dom

# install icon

# npm
$ npm install @real-system/icon
# yarn
$ yarn add @real-system/icon
```

### Code Example

```jsx
import { ThemeProvider } from '@real-system/theme`;
import { Button } from '@real-system/button`;

const MyComponent = () => {
  return (
    <ThemeProvider>
      <Button>Button</Button>
    </ThemeProvider>
  );
};

```
