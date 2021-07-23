import { gql, useQuery } from "@apollo/client";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import LoadingWheel from "../../../util/LoadingWheel";
import BossCard from "./BossCard/BossCard";

const useStyles = makeStyles(() => ({
  title: {
    textAlign: "left",
  },
  noKills: {
    textAlign: "center",
  },
}));

const BossContainer = ({ fights, logCode }) => {
  const classes = useStyles();
  const content =fights.map((i) => {
        return <BossCard fight={i} key={i.id} />;
      });
  return (
    <>
      <Typography variant="h6" className={classes.title}>
        Reported Kills
      </Typography>
      <Grid container justify="space-between" spacing={1}>
        {content}
      </Grid>
    </>
  );
};

export default BossContainer;
