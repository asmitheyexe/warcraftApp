import React from "react";

import AppBar from "@material-ui/core/AppBar";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  linkColor: {
    color: "white",
  },
}));
const NavBar = () => {
  const styles = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Link component={RouterLink} to="/logs">
          <Typography className={styles.linkColor} variant="h6">
            Logs
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
