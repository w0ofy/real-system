<h1 align="center">@real-system/typography</h1>
<p align="center">Real System's Typography components.</p>
<p align="center">
<a href="https://badge.fury.io/js/@real-system%2Ftypography"><img src="https://badge.fury.io/js/@real-system%2Ftypography.svg" alt="npm version" height="18"/></a>
</p>

## Usage

```bash
# install peer dependencies

# npm
$ npm install @real-system/styling @real-system/box @real-system/utils react react-dom
# yarn
$ yarn add @real-system/styling @real-system/box @real-system/utils react react-dom

# install typography

# npm
$ npm install @real-system/typography
# yarn
$ yarn add @real-system/typography
```

### Code Example

```jsx
import { ThemeProvider } from '@real-system/theme';
import { Typography } from '@real-system/typography';

/** can also import Heading separately like this
 * import { Heading } from '@real-system/typography';
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
