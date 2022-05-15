<h1 align="center">@real-system/popover</h1>
<p align="center">Popover component for real system.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/popover"><img src="https://badgen.net/npm/v/@real-system/popover?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
</p>

## Usage

```bash
# install peer dependencies

# npm
$ npm install react react-dom @real-system/ariakit-library @real-system/animation-library @real-system/elements-primitive @real-system/button @real-system/styling-library @real-system/theme-library @real-system/flex @real-system/typography @real-system/utils-library
# yarn
$ yarn add react react-dom @real-system/ariakit-library @real-system/animation-library @real-system/elements-primitive @real-system/button @real-system/styling-library @real-system/theme-library @real-system/flex @real-system/typography @real-system/utils-library

# install popover

# npm
$ npm install @real-system/popover
# yarn
$ yarn add @real-system/popover
```

### Code Example

```typescript
import { Popover } from '@real-system/popover';

/** or import each component
import {
  PopoverButton,
  PopoverContainer,
  PopoverDescription,
  PopoverDismiss,
  PopoverHeading,
} from '@real-system/popover';
**/

const MyComponent = (args) => {
  return (
    <Popover.Container placement="auto">
      <Popover.Button>Open Popover</Popover.Button>
      <Popover hideCloseButton={true}>
        <Popover.Heading mb={6}>Meet Popover</Popover.Heading>
        <Popover.Description mb={8}>
          Hello there. I am a popover! Use me as a non-modal dialog to display
          additional rich content above your UI.
        </Popover.Description>
        <Popover.Dismiss variant="primary">Confirm</Popover.Dismiss>
      </Popover>
    </Popover.Container>
  );
};

export const Default = Template.bind({});


```
