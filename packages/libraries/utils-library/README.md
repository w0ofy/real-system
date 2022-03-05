<h1 align="center">@real-system/utils-library</h1>
<p align="center">Real System's series of javascript and typescript helpers.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/utils-library"><img src="https://badgen.net/npm/v/@real-system/utils-library?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
</p>

## Usage

```bash
# install peer dependencies

# npm
$ npm install react react-dom
# yarn
$ yarn add react react-dom

# install utils

# npm
$ npm install @real-system/utils-library
# yarn
$ yarn add @real-system/utils-library
```

### Code Example

```javascript
import { kebabCase } from '@real-system/utils-library';

const formatString = (name: Names) =>
  kebabCase(name);

formatString('JimSlim') // output: 'jim-slim'
```
