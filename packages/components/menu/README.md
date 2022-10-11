<h1 align="center">@real-system/menu</h1>
<p align="center">Menu component for real system.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/menu"><img src="https://badgen.net/npm/v/@real-system/menu?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
</p>

## Installation

```bash
# install peer dependencies

# npm
$ npm install react react-dom @real-system/animation-library @real-system/ariakit-library @real-system/elements-primitive @real-system/state-library @real-system/styled-library @real-system/utils-library
# yarn
$ yarn add react react-dom @real-system/animation-library @real-system/ariakit-library @real-system/elements-primitive @real-system/state-library @real-system/styled-library @real-system/utils-library

# install menu

# npm
$ npm install @real-system/menu
# yarn
$ yarn add @real-system/menu
```

### Code Example

```jsx
import { Menu, MenuProps } from '@real-system/menu';

/**
 * const { Button, Group, Item, List, Separator } = Menu;
 * const { Label } = Group
 * const { Checkbox,  Command, Icon, Link, Radio } = Item
 * */

const MyComponent = () => {
  return (
    <Menu values={values} onSelect={setValues}>
      <Menu.Button
        size="sm"
        variant="outline"
        leadingIcon={<Icon icon="eye" size="xs" />}>
        Watch
      </Menu.Button>
      <Menu.List>
        <Menu.Item>My Account</Menu.Item>
        <Menu.Item>
          <Menu.Item.Icon icon="pencil-alt" />
          Edit
          <Menu.Item.Command>E</Menu.Item.Command>
        </Menu.Item>
        <Menu.Item.Radio name="watching" value="issues">
          Issues
        </Menu.Item.Radio>
        <Menu.Item.Checkbox name="watching" value="pull-requests">
          Pull requests
        </Menu.Item.Checkbox>
        <Menu.Separator />
        <Menu.Group>
          <Menu.Group.Label>Help</Menu.Group.Label>
          <Menu.Item>Docs</Menu.Item>
          <Menu.Item.Link
            href="https://system.themikewolf.com"
            external
            showExternal>
            FAQ
          </Menu.Item.Link>
        </Menu.Group>
      </Menu.List>
    </Menu>
  );
};
```
