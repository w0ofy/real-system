# `@realsystem/typography`

Real System's Typography component.

## Usage

```bash
# install peer dependencies

# npm
$ npm install @realsystem/styling @realsystem/box @realsystem/utils react react-dom
# yarn
$ yarn add @realsystem/styling @realsystem/box @realsystem/utils react react-dom

# install typography

# npm
$ npm install @realsystem/typography
# yarn
$ yarn add @realsystem/typography
```

### Code Example

```jsx
import { ThemeProvider } from '@realsystem/theme`;
import { Typography } from '@realsystem/typography`;

/** can also import Heading separately like this
 * import { Heading } from '@realsystem/typography`;
 */
const MyComponent = () => {
  return (
    <ThemeProvider>
      <Typography.Heading as="h1" variant="heading1">Heading 1</Typography>
      <Typography>Body text...</Typography>
    </ThemeProvider>
  )
}

```
