import React from "react";
import {
  Grid,
  CardActionArea,
  CircularProgress,
  Button,
  makeStyles,
} from "@material-ui/core";

import Card from "@material-ui/core/Card";
import { CardHeader } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CharacterCard from "../../CharacterView/CharacterCard";
import { useQuery, gql } from "@apollo/client";
import CharactersContainer from "../../CharacterView/CharacterContainer";

const useStyles = makeStyles(() => ({
  showCharactersBtn: {
    marginLeft: "auto",
  },
}));

const ReportCard = ({ log, removeIfEmpty }) => {
  const [selected, setSelected] = React.useState(false);
  const [showCharacters, setShowCharacters] = React.useState(false);
  const classes = useStyles();
  const handleSelect = () => {
    setSelected(!selected);
  };
  return (
    <Grid item xs={12}>
      <Card variant='outlined'>
        <CardActionArea onClick={() => handleSelect()}>
          <CardHeader title={log.title} />
        </CardActionArea>
        {selected && (
          <CardContent>
            <Button
              variant='outlined'
              className={classes.showCharactersBtn}
              onClick={() => setShowCharacters(!showCharacters)}
            >
              Show Characters
            </Button>
            {showCharacters && <CharactersContainer code={log.code} />}
          </CardContent>
        )}
      </Card>
    </Grid>
  );
};

export default ReportCard;
