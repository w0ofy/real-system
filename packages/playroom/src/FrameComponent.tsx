import React from 'react';
import { ThemeProvider, deep } from '@realsystem/primitive';

export default ({ children }) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={deep}>{children}</ThemeProvider>
    </React.Fragment>
  );
};
