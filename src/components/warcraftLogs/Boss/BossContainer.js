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
  console.log(fights);
  const classes = useStyles();
  const [showWipes, setShowWipes] = React.useState(false);
  const content =
    fights.length > 0 ? (
      fights.map((i) => {
        return <BossCard fight={i} key={i.id} />;
      })
    ) : (
      <Grid item className={classes.noKills} xs={12}>
        <Typography variant="h6">No Kills Completed</Typography>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setShowWipes(!showWipes)}
        >
          Show Wipes
        </Button>
        {showWipes && (
          <Grid container justify="space-between" spacing={1}>
            <BossWipes code={logCode} />
          </Grid>
        )}
      </Grid>
    );
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

const REPORT_QUERY = gql`
  query ($code: String!) {
    reportData {
      report(code: $code) {
        fights(killType: Wipes) {
          averageItemLevel
          difficulty
          encounterID
          id
          kill
          name
          size
        }
      }
    }
  }
`;
const BossWipes = ({ code }) => {
  const { loading, error, data } = useQuery(REPORT_QUERY, {
    variables: {
      code,
    },
  });
  if (error) console.error(error);
  console.log(code);
  return loading ? (
    <LoadingWheel />
  ) : (
    data.reportData.report.fights.map((i) => {
      return <BossCard fight={i} key={i.id} />;
    })
  );
};

export default BossContainer;
