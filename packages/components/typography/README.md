<h1 align="center">@real-system/typography</h1>
<p align="center">Real System's Typography components.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/typography"><img src="https://badgen.net/npm/v/@real-system/typography?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
</p>

## Installation

```bash
# install peer dependencies

# npm
$ npm install @real-system/styled-library @real-system/elements-primitive @real-system/utils-library react react-dom
# yarn
$ yarn add @real-system/styled-library @real-system/elements-primitive @real-system/utils-library react react-dom

# install typography

# npm
$ npm install @real-system/typography
# yarn
$ yarn add @real-system/typography
```

### Code Example

```jsx
import { ThemeProvider } from '@real-system/styled-library';
import { Text } from '@real-system/typography';

const MyComponent = () => {
  return (
    <ThemeProvider>
      <Text>Body text</Text>
      <Text.Base>Base (low-level) text</Text.Base>
      <Text.Code>Code text</Text.Code>
      <Text.Heading as="h2" size="h1">
        Heading text
      </Text.Heading>
      <Text.Help>Help text</Text.Help>
      <Text.Help variant="danger">Danger text</Text.Help>
      <Text.Help variant="warning">Warning text</Text.Help>
      <Text.Label>Label text</Text.Label>
      <Text width="50px">
        <Text.Truncate as="h1">
          Truncate long text to fit container
        </Text.Truncate>
      </Text>
    </ThemeProvider>
  );
};
```
