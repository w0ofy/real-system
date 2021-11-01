# `@realsystem/utils`

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
$ npm install @realsystem/utils
# yarn
$ yarn add @realsystem/utils
```

### Code Example

```javascript
import { ValueOf } from '@realsystem/utils`;

const obj = {
  keyOne: 'one',
  keyTwo: 'two,
}
type Values = ValueOf<typeof obj>;
// output: type Values = 'one' | 'two';
```
