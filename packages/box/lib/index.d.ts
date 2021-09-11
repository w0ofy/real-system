declare module '@realsystem/box/lib/index' {
  export {};

}
declare module '@realsystem/box/lib/index.esm' {
  export { dd as Box };
  function dd(e: any): i.CElement<any, i.Component<any, any, any>>;
  import * as i from "react";

}
declare module '@realsystem/box/src/Box' {
  /// <reference types="react" />
  import { BoxProps as UIBoxProps } from 'ui-box';
  export type BoxProps<T = any> = UIBoxProps<any>;
  const Box: (props: BoxProps<any>) => JSX.Element;
  export { Box };

}
declare module '@realsystem/box/src/index' {
  export * from '@realsystem/box/src/Box';

}
declare module '@realsystem/box' {
  import main = require('@realsystem/box/src/index');
  export = main;
}