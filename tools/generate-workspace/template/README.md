<h1 align="center">@real-system/{{pkg}}</h1>
<p align="center">Real System's {{pkg}}.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/button"><img src="https://badgen.net/npm/v/@real-system/button?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
<a href="https://www.npmjs.com/package/@real-system/button"><img src="https://badgen.net/bundlephobia/min/@real-system/button" alt="minified size" height="18"/></a>
</p>

## Usage

```bash
# install peer dependencies

# npm
$ npm install {{peer-deps}} react react-dom
# yarn
$ yarn add {{peer-deps}} react react-dom

# install {{pkg}}

# npm
$ npm install @real-system/{{pkg}}
# yarn
$ yarn add @real-system/{{pkg}}
```

### Code Example

```jsx
import { ThemeProvider } from '@real-system/theme';
import { {{component}} } from '@real-system/{{pkg}}';

const MyComponent = () => {
  return (
    <ThemeProvider>
      <{{component}}>{{component}}</{{component}}>
    </ThemeProvider>
  );
};

```
