<h1 align="center">@real-system/input</h1>
<p align="center">Real System's Input components.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/input"><img src="https://badgen.net/npm/v/@real-system/input?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
</p>

## Usage

```bash
# install peer dependencies

# npm
$ npm install @real-system/styling-library @real-system/elements-primitive @real-system/utils-library react react-dom
# yarn
$ yarn add @real-system/styling-library @real-system/elements-primitive @real-system/utils-library react react-dom

# install input

# npm
$ npm install @real-system/input
# yarn
$ yarn add @real-system/input
```

### Code Example

```jsx
import { ThemeProvider } from '@real-system/theme-library';
import { Input } from '@real-system/core/input';

const MyComponent = () => {
  return (
    <ThemeProvider>
      <Input>Body text...</Input>
    </ThemeProvider>
  )
}

```
