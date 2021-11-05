import React, { useEffect } from 'react';
import { ThemeProvider } from '@real-system/theme';
import { Box } from '@real-system/box';

export default ({ children }) => {
  return (
    <React.Fragment>
      <ThemeProvider>
        <Box padding={4} height="100vh" width="100vw">
          {children}
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
};
