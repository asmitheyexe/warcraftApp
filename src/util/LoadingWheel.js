import { Grid, CircularProgress } from "@material-ui/core";
import React from "react";

const LoadingWheel = () => {
  return (
    <Grid container justify="center">
      <CircularProgress />
    </Grid>
  );
};

export default LoadingWheel;
