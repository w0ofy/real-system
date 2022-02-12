<h1 align="center">@real-system/popover</h1>
<p align="center">Popover component for real system.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/popover"><img src="https://badgen.net/npm/v/@real-system/popover?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
<a href="https://www.npmjs.com/package/@real-system/popover"><img src="https://badgen.net/bundlephobia/min/@real-system/popover" alt="minified size" height="18"/></a>
</p>

## Usage

```bash
# install peer dependencies

# npm
$ npm install react react-dom @real-system/ariakit-library @real-system/animation-library @real-system/box-primitive @real-system/button @real-system/styling-library @real-system/theme-library @real-system/types-library @real-system/flex @real-system/typography @real-system/utils-library
# yarn
$ yarn add react react-dom @real-system/ariakit-library @real-system/animation-library @real-system/box-primitive @real-system/button @real-system/styling-library @real-system/theme-library @real-system/types-library @real-system/flex @real-system/typography @real-system/utils-library

# install popover

# npm
$ npm install @real-system/popover
# yarn
$ yarn add @real-system/popover
```

### Code Example

```javascript
import {
  Popover,
  PopoverButton,
  PopoverContainer,
  PopoverDescription,
  PopoverDismiss,
  PopoverHeading,
} from '@real-system/popover';

const MyComponent = (args) => {
  return (
    <PopoverContainer placement="right-start">
      <PopoverButton>Open Popover</PopoverButton>
      <Popover hideCloseButton={true}>
        <PopoverHeading mb={8}>Meet Popover</PopoverHeading>
        <PopoverDescription mb={8}>
          Hello there. I am a popover! Use me as a non-modal dialog to display
          additional rich content above your UI.
        </PopoverDescription>
        <PopoverDismiss variant="primary">Confirm</PopoverDismiss>
      </Popover>
    </PopoverContainer>
  );
};

export const Default = Template.bind({});


```
