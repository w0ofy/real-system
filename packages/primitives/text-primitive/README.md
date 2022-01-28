<h1 align="center">@real-system/text-primitive</h1>
<p align="center">Text primitive for real system.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/text-primitive"><img src="https://badgen.net/npm/v/@real-system/text-primitive?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
<a href="https://www.npmjs.com/package/@real-system/text-primitive"><img src="https://badgen.net/bundlephobia/min/@real-system/text-primitive" alt="minified size" height="18"/></a>
</p>

## Usage

```bash
# install peer dependencies

# npm
$ npm install react react-dom @real-system/box-primitive @real-system/styling-library @real-system/theme-library @real-system/utils
# yarn
$ yarn add react react-dom @real-system/box-primitive @real-system/styling-library @real-system/theme-library @real-system/utils

# install text

# npm
$ npm install @real-system/text-primitive
# yarn
$ yarn add @real-system/text-primitive
```

### Code Example

```typescript
import { Text, TextPrimitiveProps, safelySpreadTextProps } from '@real-system/text-primitive';

const H1 = (props: TextPrimitiveProps) => (
  <Text as="h1" fontSize={10} {...safelySpreadTextProps(props)}>
    The quick brown fox jumped over the lazy dog.
  </Text>
);

```
