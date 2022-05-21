<h1 align="center">@real-system/truncate</h1>
<p align="center">Truncate component for real system.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/truncate"><img src="https://badgen.net/npm/v/@real-system/truncate?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
</p>

## Usage

```bash
# install peer dependencies

# npm
$ npm install react react-dom @real-system/elements-primitive @real-system/styled-library
# yarn
$ yarn add react react-dom @real-system/elements-primitive @real-system/styled-library

# install truncate

# npm
$ npm install @real-system/truncate
# yarn
$ yarn add @real-system/truncate
```

### Code Example

```typescript
import { real } from '@real-system/elements-primitive';
import { Truncate } from '@real-system/truncate';
import { Text } from '@real-system/typography';

const MyComponent = (args) => (
  <real.div maxWidth="8rem">
    <Text>
      <Truncate title="Some extremely long text to truncate">
        Some extremely long text to truncate
      </Truncate>
    </Text>
  </real.div>
);
```
