import React from "react";
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles';
import App from './App';


const Root = (props) => {

  const usetheme = useTheme();
  const matches = useMediaQuery(usetheme.breakpoints.up('sm'));

  return (
    <React.Fragment>
      <App mobileView={!matches} />
    </React.Fragment>
  );
}

export default Root;
