import * as React from 'react';
import { RealSystemProvider } from '../../packages/libraries/styled-library/src/index';
import { real } from '../../packages/primitives/elements-primitive/src/index';

export default ({ children }) => {
  return (
    <React.Fragment>
      <RealSystemProvider>
        <real.div padding={4} height="100vh" width="100vw">
          {children}
        </real.div>
      </RealSystemProvider>
    </React.Fragment>
  );
};
