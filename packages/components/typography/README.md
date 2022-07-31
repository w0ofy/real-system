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
      <Text.Heading as="h1">Heading 1</Text.Heading>
      <Text.Heading as="h2">Heading 2</Text.Heading>
      <Text.Heading as="h3">Heading 3</Text.Heading>
      <Text.Heading as="h4">Heading 4</Text.Heading>
      <Text.Heading as="h5">Heading 5</Text.Heading>
      <Text.Heading as="56">Heading 6</Text.Heading>
      
      <Text>Body text...</Text>

      <Text.Label>Label</Text.Label>

      <Text.HelperText>Helper text</Text.HelperText>

      <Text.HelperText
        invalid={{
          status: true,
          message: 'error text',
          hideIcon: true
        }}>
        Error Text
      </Text.HelperText>

      <Text.Code>Code</Text.Code>
    </ThemeProvider>
  )
}

```
