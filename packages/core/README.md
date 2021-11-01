# @realsystem/core

One bundle containing every package within `realsystem`

[bundlephobia](https://bundlephobia.com/package/@realsystem/core@1.7.5)

## Usage

### Installation

```bash
# npm
$ npm install --save @realsystem/core react react-dom

# yarn
$ yarn add @realsystem/core react react-dom
```

### Code Example

```jsx
import { ThemeProvider } from '@realsystem/core/theme`;
import { Box } from '@realsystem/core/box`;
import { Button } from '@realsystem/core/button`;

const MyComponent = () => {
  return (
    <ThemeProvider>
      <Box>
        <Button>Button</Button>
      </Box>
    </ThemeProvider>
  )
}

```

## How bundling works

### Build Procedure (see `prebuild` and `build` npm scripts)

1. Fetch all the packages with yarn workspaces
2. Filter out all packages that aren't productionized or not in core `packageJson.status === 'production'`
3. Update core's package.json dependencies
4. Generate
   1. core index bundle
   2. unbarreled export bundles
   3. core's .gitignore to include unbarreled exprots
   4. each package's package.json
