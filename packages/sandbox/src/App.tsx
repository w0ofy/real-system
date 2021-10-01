import React from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { Button } from '@realsystem/button';
import { ThemeProvider, defaultTheme, useTheme } from '@realsystem/styles';
import theme from 'prism-react-renderer/themes/dracula';
const scope = { Button, ThemeProvider, defaultTheme, useTheme };

const code = `
<ThemeProvider theme={defaultTheme}>
  <Button>Button</Button>
</ThemeProvider>
`;

const App = () => {
  return (
    <LiveProvider code={code} scope={scope} theme={theme}>
      <ThemeProvider theme={defaultTheme}>
        <React.Fragment>
          <LiveEditor />
          <LivePreview />
          <LiveError />
        </React.Fragment>
      </ThemeProvider>
    </LiveProvider>
  );
};

export { App };
