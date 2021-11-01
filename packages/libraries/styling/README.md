<h1 align="center">@real-system/styling</h1>
<p align="center">Real System's styling library.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/styling"><img src="https://badgen.net/npm/v/@real-system/styling?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
<a href="https://www.npmjs.com/package/@real-system/styling"><img src="https://badgen.net/bundlephobia/min/@real-system/styling" alt="minified size" height="18"/></a>
</p>

## Usage

### Installation

```bash
# install peer dependencies

# npm
$ npm install react react-dom
# yarn
$ yarn add react react-dom

# install styling

# npm
$ npm install @real-system/styling
# yarn
$ yarn add @real-system/styling
```

### Code Example

```jsx
import styled from '@real-system/styling';

const Flex = styled.div`
  display: flex;
`;

const MyComponent = () => {
  return (
    <Flex>
      ...
    </Flex>
  );
};

```
