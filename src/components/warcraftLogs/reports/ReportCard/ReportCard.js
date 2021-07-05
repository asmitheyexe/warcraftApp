import React from "react";
import { Grid, CardActionArea } from "@material-ui/core";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { CardHeader } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CharacterCard from "../../CharacterView/CharacterCard";

import { fetchReport } from "../../../../services/warcraftLogsService";

const useStyles = makeStyles(() => {});

const ReportCard = ({ log, removeIfEmpty }) => {
  const [characters, setCharacters] = React.useState(null);
  const [selected, setSelected] = React.useState(false);
  const handleOnClick = async (code) => {
    if (!selected && characters === null) {
      const reportData = await fetchReport(code);

      console.log(reportData);
      if (reportData.exportedCharacters.length === 0) {
        removeIfEmpty(log.id);
      }
      const names = reportData.exportedCharacters.map((i) => i.name);
      const characters = reportData.friendlies.filter(
        (elm) => names.indexOf(elm.name) > -1
      );
      setCharacters(characters);
    }
    setSelected(!selected);
  };
  const detialedContainer = characters && (
    <Grid container spacing={2}>
      {characters.map((i) => {
        return (
          <CharacterCard
            person={i}
            key={i.id}
            reportData={{
              id: log.id,
              timeFrame: {
                startTime: log.start,
                endTime: log.end,
              },
            }}
          />
        );
      })}
    </Grid>
  );

  return (
    <Grid item xs={12}>
      <Card variant="outlined">
        <CardActionArea onClick={() => handleOnClick(log.id)}>
          <CardHeader title={log.title} />
        </CardActionArea>
        {selected && characters && (
          <CardContent>{detialedContainer}</CardContent>
        )}
      </Card>
    </Grid>
  );
};

export default ReportCard;
