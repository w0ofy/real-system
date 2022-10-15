<h1 align="center">@real-system/spinner</h1>
<p align="center">Real System's Spinner components.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/spinner"><img src="https://badgen.net/npm/v/@real-system/spinner?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
</p>

## Installation

```bash
# install peer dependencies

# npm
$ npm install @real-system/styled-library @real-system/elements-primitive @real-system/utils-library react react-dom
# yarn
$ yarn add @real-system/styled-library @real-system/elements-primitive @real-system/utils-library react react-dom

# install spinner

# npm
$ npm install @real-system/spinner
# yarn
$ yarn add @real-system/spinner
```

### Code Example

```jsx
import { RealSystemProvider } from '@real-system/styled-library';
import { Spinner } from '@real-system/spinner';

const MyComponent = () => {
  return (
    <RealSystemProvider>
      <Spinner />
    </RealSystemProvider>
  );
};
```
