<h1 align="center">@real-system/styling-library</h1>
<p align="center">Real System's styling library.</p>
<p align="center">
<a href="https://www.npmjs.com/package/@real-system/styling-library"><img src="https://badgen.net/npm/v/@real-system/styling-library?label=&icon=npm&color=blue" alt="npm version" height="18"/></a>
<a href="https://www.npmjs.com/package/@real-system/styling-library"><img src="https://badgen.net/bundlephobia/min/@real-system/styling-library" alt="minified size" height="18"/></a>
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
$ npm install @real-system/styling-library
# yarn
$ yarn add @real-system/styling-library
```

### Code Example

```jsx
import styled from '@real-system/styling-library';

const Block = styled.div`
  display: block;
`;

const MyComponent = () => {
  return (
    <Block>
      ...
    </Block>
  );
};

```
