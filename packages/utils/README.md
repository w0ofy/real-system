# `@real-system/utils`

A series of javascript and typescript helpers for Real System.

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
