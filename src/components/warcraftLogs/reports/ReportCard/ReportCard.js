import React from "react";
import { Grid, CardActionArea, Button, makeStyles } from "@material-ui/core";

import Card from "@material-ui/core/Card";
import { CardHeader } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CharacterCard from "../../CharacterView/CharacterCard";
import { useQuery, gql } from "@apollo/client";
import CharactersContainer from "../../CharacterView/CharacterContainer";
import LoadingWheel from "../../../../util/LoadingWheel";
import BossContainer from "../../Boss/BossContainer";

const useStyles = makeStyles(() => ({
  showCharactersBtn: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  charactersContainer: {
    marginTop: "2em",
  },
  title: {
    textAlign: "center",
  },
}));

const REPORT_QUERY = gql`
  query ($code: String!) {
    reportData {
      report(code: $code) {
        endTime
        masterData {
          gameVersion
          actors(type: "Player") {
            gameID
            name
            server
            type
            subType
          }
        }
        fights(killType: Encounters) {
          averageItemLevel
          difficulty
          encounterID
          fightPercentage
          id
          kill
          name
          size
        }
      }
    }
  }
`;

const ReportCard = ({ log, removeIfEmpty }) => {
  const { loading, error, data } = useQuery(REPORT_QUERY, {
    variables: {
      code: log.code,
    },
  });
  if (error) console.error(error);
  const [selected, setSelected] = React.useState(false);
  const [showCharacters, setShowCharacters] = React.useState(false);
  const classes = useStyles();

  const handleSelect = () => {
    setSelected(!selected);
  };

  return loading ? (
    <LoadingWheel />
  ) : (
    <Grid item xs={12}>
      <Card variant="outlined">
        <CardActionArea onClick={() => handleSelect()}>
          <CardHeader
            title={log.title}
            className={classes.title}
            subheader={new Date(
              data.reportData.report.endTime
            ).toLocaleString()}
          />
        </CardActionArea>
        {selected && (
          <CardContent>
            <Grid container justify="center" align="center" spacing={4}>
              <Grid item xs={12}>
                <FightsView
                  fights={data.reportData.report.fights}
                  logCode={log.code}
                />
              </Grid>
              <Grid item>
                <CharactersView
                  classes={classes}
                  setShowCharacters={() => setShowCharacters(!showCharacters)}
                  isSelected={showCharacters}
                  characters={data.reportData.report.masterData.actors}
                />
              </Grid>
            </Grid>
          </CardContent>
        )}
      </Card>
    </Grid>
  );
};

export const CharactersView = ({
  classes,
  setShowCharacters,
  isSelected,
  characters,
}) => {
  return (
    <>
      <Button
        variant="outlined"
        className={classes.showCharactersBtn}
        onClick={setShowCharacters}
      >
        Show Characters
      </Button>
      {isSelected && (
        <Grid container item className={classes.charactersContainer}>
          <CharactersContainer characters={characters} />
        </Grid>
      )}
    </>
  );
};

export const FightsView = ({ fights, logCode }) => {
  return <BossContainer fights={fights} logCode={logCode} />;
};
export default ReportCard;
