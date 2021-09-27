import React from 'react';
import { ThemeProvider, defaultTheme } from '@realsystem/primitive';

export default ({ children }) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </React.Fragment>
  );
};
