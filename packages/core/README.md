<h1 align="center">@real-system/core</h1>
<p align="center">One bundle containing every package within Real System.</p>
<p align="center">
<a href="https://badge.fury.io/js/@real-system%2Fcore"><img src="https://badge.fury.io/js/@real-system%2Fcore.svg" alt="npm version" height="18"/></a>
</p>

[bundlephobia](https://bundlephobia.com/package/@real-system/core@1.7.5)

## Usage

### Installation

```bash
# npm
$ npm install --save @real-system/core react react-dom

# yarn
$ yarn add @real-system/core react react-dom
```

### Code Example

```jsx
import { ThemeProvider } from '@real-system/core/theme';
import { Box } from '@real-system/core/box';
import { Button } from '@real-system/core/button';

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
