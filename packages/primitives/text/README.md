<h1 align="center">@real-system/text</h1>
<p align="center">Text primitive for real system.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/text"><img src="https://badgen.net/npm/v/@real-system/text?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
<a href="https://www.npmjs.com/package/@real-system/text"><img src="https://badgen.net/bundlephobia/min/@real-system/text" alt="minified size" height="18"/></a>
</p>

## Usage

```bash
# install peer dependencies

# npm
$ npm install react react-dom @real-system/box @real-system/styling @real-system/theme @real-system/utils
# yarn
$ yarn add react react-dom @real-system/box @real-system/styling @real-system/theme @real-system/utils

# install text

# npm
$ npm install @real-system/text
# yarn
$ yarn add @real-system/text
```

### Code Example

```typescript
import { Text, TextProps, safelySpreadTextProps } from '@real-system/text';

const H1 = (props: TextProps) => (
  <Text as="h1" fontSize={10} {...safelySpreadTextProps(props)}>
    The quick brown fox jumped over the lazy dog.
  </Text>
);

```
