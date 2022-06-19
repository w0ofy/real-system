<h1 align="center">@real-system/alert-primitive</h1>
<p align="center">Alert primitive component for real system.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/alert-primitive"><img src="https://badgen.net/npm/v/@real-system/alert-primitive?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
</p>

## Installation

```bash
# install peer dependencies

# npm
$ npm install react react-dom 
# yarn
$ yarn add react react-dom 

# install alert-primitive

# npm
$ npm install @real-system/alert-primitive
# yarn
$ yarn add @real-system/alert-primitive
```

### Code Example

```typescript
import { AlertPrimitive } from '@real-system/alert-primitive';

const PoliteAlert = () => <AlertPrimitive>Alert primitive Content</AlertPrimitive>;
const AssertiveAlert = () => <AlertPrimitive type="assertive">Alert primitive Content</AlertPrimitive>;
```
