<h1 align="center">@real-system/toaster</h1>
<p align="center">Toast components for real system.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/toaster"><img src="https://badgen.net/npm/v/@real-system/toaster?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
</p>

## Usage

```bash
# install peer dependencies

# npm
$ npm install react react-dom @real-system/alert @real-system/animation-library @real-system/box-primitive @real-system/styling-library @real-system/theme-library @real-system/utils-library
# yarn
$ yarn add react react-dom @real-system/alert @real-system/animation-library @real-system/box-primitive @real-system/styling-library @real-system/theme-library @real-system/utils-library

# install toaster

# npm
$ npm install @real-system/toaster
# yarn
$ yarn add @real-system/toaster
```

### Code Example

```typescript
import { Toaster, useToast } from '@real-system/toaster';

export const MyComponent = (args) => {
  const toaster = useToaster();
  return (
    <Flex vertical>
      <Button
        mb={4}
        onClick={() => toaster.notify('12 new messages')}>
        Push Toast
      </Button>
      <Toaster {...toaster} />
    </Flex>
  );
};

```
