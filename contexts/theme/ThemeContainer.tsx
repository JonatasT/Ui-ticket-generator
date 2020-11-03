import React from "react";

import { ThemeProvider } from "@material-ui/core";
import CssBaseLine from "@material-ui/core/CssBaseline";

import theme from "../../src/styles/theme";

const ThemeContainer = ({ children }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      {children}
    </ThemeProvider>
  );
};

export default ThemeContainer;