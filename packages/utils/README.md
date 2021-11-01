# `@real-system/utils`


<p align="center">
<p>Real System's series of javascript and typescript helpers.</p>
<a href="https://badge.fury.io/js/@real-system%2Futils"><img src="https://badge.fury.io/js/@real-system%2Futils.svg" alt="npm version" height="18"/></a>
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
import { ValueOf } from '@real-system/utils`;

const obj = {
  keyOne: 'one',
  keyTwo: 'two,
}
type Values = ValueOf<typeof obj>;
// output: type Values = 'one' | 'two';
```
