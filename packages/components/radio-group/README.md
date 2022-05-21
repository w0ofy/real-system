<h1 align="center">@real-system/radio-group</h1>
<p align="center">Radio button components for real system.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/radio-group"><img src="https://badgen.net/npm/v/@real-system/radio-group?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
</p>

## Usage

```bash
# install peer dependencies

# npm
$ npm install react react-dom @real-system/elements-primitive @real-system/flex @real-system/a11y-library @real-system/state-library @real-system/styled-library @real-system/utils-library @real-system/visually-hidden
# yarn
$ yarn add react react-dom @real-system/elements-primitive @real-system/flex @real-system/a11y-library @real-system/state-library @real-system/styled-library @real-system/utils-library @real-system/visually-hidden

# install radio

# npm
$ npm install @real-system/radio-group
# yarn
$ yarn add @real-system/radio-group
```

### Code Example

```typescript
import { RadioGroup } from '@real-system/radio-group';
// or
// import { RadioGroup, Radio } from '@real-system/radio-group';

const MyComponent = () => {

  return (
    <RadioGroup label="Favorite pet" {...args}>
      <RadioGroup.Radio value="dog">Dog</RadioGroup.Radio>
      <RadioGroup.Radio value="cat">Cat</RadioGroup.Radio>
      <RadioGroup.Radio value="fish">Fish</RadioGroup.Radio>
      <RadioGroup.Radio value="hamster" disabled>
        Hamster
      </RadioGroup.Radio>
    </RadioGroup>
  )
}
...

```
