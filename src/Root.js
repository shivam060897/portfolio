import React from "react";
import { ThemeProvider } from "styled-components";
// import { MuiThemeProvider, StylesProvider } from '@mui/material/styles'
import { getTheme } from './theme'
import App from './App';

const Root = (props) => {

  const themeType = localStorage.getItem('themetype')
  const theme = getTheme(themeType)

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Root;
