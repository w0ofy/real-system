<h1 align="center">@real-system/truncate</h1>
<p align="center">Truncate component for real system.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/truncate"><img src="https://badgen.net/npm/v/@real-system/truncate?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
</p>

## Usage

```bash
# install peer dependencies

# npm
$ npm install react react-dom @real-system/box-primitive @real-system/styling-library @real-system/theme-library
# yarn
$ yarn add react react-dom @real-system/box-primitive @real-system/styling-library @real-system/theme-library

# install truncate

# npm
$ npm install @real-system/truncate
# yarn
$ yarn add @real-system/truncate
```

### Code Example

```javascript
import { Box } from '@real-system/box-primitive';
import { Truncate } from '@real-system/truncate';
import { Typography } from '@real-system/typography';

const MyComponent = (args) => (
  <Box maxWidth="8rem">
    <Typography>
      <Truncate title="Some extremely long text to truncate">
        Some extremely long text to truncate
      </Truncate>
    </Typography>
  </Box>
);
```
