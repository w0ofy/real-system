<h1 align="center">@real-system/checkbox</h1>
<p align="center">Checkbox.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/checkbox"><img src="https://badgen.net/npm/v/@real-system/checkbox?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
</p>

## Installation

```bash
# install peer dependencies

# npm
$ npm install react react-dom @real-system/a11y-library @real-system/state-library @real-system/styled-library @real-system/typography @real-system/utils-library @real-system/elements-primitive
# yarn
$ yarn add react react-dom @real-system/a11y-library @real-system/state-library @real-system/styled-library @real-system/typography @real-system/utils-library @real-system/elements-primitive

# install checkbox

# npm
$ npm install @real-system/checkbox
# yarn
$ yarn add @real-system/checkbox
```

### Code Example

```jsx
import { Checkbox, CheckboxGroup } from '@real-system/checkbox';

const MyCheckbox = (args) => (
  <Checkbox
    helpText="Determines if the user has permission to add, edit and delete other users"
    {...args}
  />
);

const MyCheckboxGroup = () => {
  return (
    <CheckboxGroup
      label="What engineering level is the new team member?"
      defaultValue={['associate']}
      helpText="Select at least 1 level for the new engineer"
      {...args}>
      <CheckboxGroup.Item value="architect">Architect</CheckboxGroup.Item>
      <CheckboxGroup.Item value="principle">Principle</CheckboxGroup.Item>
      <CheckboxGroup.Item value="staff">Staff</CheckboxGroup.Item>
      <CheckboxGroup.Item value="senior" disabled>
        Senior
      </CheckboxGroup.Item>
      <CheckboxGroup.Item value="mid" disabled>
        Mid
      </CheckboxGroup.Item>
      <CheckboxGroup.Item value="associate" disabled>
        Associate
      </CheckboxGroup.Item>
    </CheckboxGroup>
  );
};
```
