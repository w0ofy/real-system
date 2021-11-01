<h1 align="center">@real-system/utils</h1>
<p align="center">Real System's series of javascript and typescript helpers.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/utils"><img src="https://badgen.net/npm/v/@real-system/utils?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
<a href="https://www.npmjs.com/package/@real-system/utils"><img src="https://badgen.net/bundlephobia/min/@real-system/utils" alt="minified size" height="18"/></a>
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
$ npm install @real-system/utils
# yarn
$ yarn add @real-system/utils
```

### Code Example

```javascript
import { ValueOf } from '@real-system/utils';

const obj = {
  keyOne: 'one',
  keyTwo: 'two,
}
type Values = ValueOf<typeof obj>;
// output: type Values = 'one' | 'two';
```
