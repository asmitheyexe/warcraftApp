import React from "react";

import AppBar from "@material-ui/core/AppBar";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { Toolbar, Typography, makeStyles } from "@material-ui/core";
import { fade } from '@material-ui/core/styles/colorManipulator';
const useStyles = makeStyles(() => ({
  link: {
    flexGrow : '1',
    color: "white", 
    marginRight : '4em',
    '&:hover' : {
      backgroundColor : fade('#7a7b85', .5),
      borderRadius : '.5em',
      opacity: '.9'
    }
  },
}));
const NavBar = () => {
  const styles = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
      <Link underline='none' component={RouterLink} to="/">
        <Typography className={styles.link} variant="h5">
          Blitz Empire
        </Typography>
        </Link>
        <Link underline='none' component={RouterLink} to="/logs">
          <Typography className={styles.link} variant="h6">
            Logs
          </Typography>
        </Link>
        <Link underline='none' component={RouterLink} to="/Members">
        <Typography className={styles.link} variant="h6">
          Guild Members
        </Typography>
      </Link>

      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
