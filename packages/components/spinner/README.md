<h1 align="center">@real-system/spinner</h1>
<p align="center">Real System's Spinner components.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/spinner"><img src="https://badgen.net/npm/v/@real-system/spinner?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
<a href="https://www.npmjs.com/package/@real-system/spinner"><img src="https://badgen.net/bundlephobia/min/@real-system/spinner" alt="minified size" height="18"/></a>
</p>

## Usage

```bash
# install peer dependencies

# npm
$ npm install @real-system/styling @real-system/box @real-system/utils react react-dom
# yarn
$ yarn add @real-system/styling @real-system/box @real-system/utils react react-dom

# install spinner

# npm
$ npm install @real-system/spinner
# yarn
$ yarn add @real-system/spinner
```

### Code Example

```jsx
import { ThemeProvider } from '@real-system/theme';
import { Spinner } from '@real-system/spinner';

const MyComponent = () => {
  return (
    <ThemeProvider>
      <Spinner />
    </ThemeProvider>
  )
}
```
