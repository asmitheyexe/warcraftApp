import React from "react";

import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActionArea,
  makeStyles,
} from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  kill :{
    backgroundColor : green[500]
  },
  wipe : {
    backgroundColor : red[600]
  }
}));
// fightPercentage
const BossCard = ({ fight }) => {
  const [isSelected, setIsSelected] = React.useState(false);
  const classes = useStyles();
  return (
    <Grid item xs={3}>
      <Card>
        <CardActionArea onClick={() => setIsSelected(!isSelected)}>
          <CardHeader title={fight.name} className={fight.kill?classes.kill : classes.wipe} />
        </CardActionArea>
        {isSelected && (
          <CardContent>
            <LabelData
              label={"Average ILvl:"}
              data={Math.round(fight.averageItemLevel * 100) / 100}
            />
            <LabelData
              label={"Difficulty:"}
              data={getDifficulty(fight.difficulty)}
            />
            <LabelData label={"Participants:"} data={fight.size} />
            {!fight.kill && <LabelData label={"Health %:"} data={fight.fightPercentage} />}
          </CardContent>
        )}
      </Card>
    </Grid>
  );
};

function getDifficulty(level) {
  switch (level) {
    case 4:
      return "Heroic";
    case 3:
      return "Normal";
    case 2:
      return "LFR";
    default:
      return "idk";
  }
}
const LabelData = ({ label, data }) => {
  return (
    <Grid container>
      <Grid container item xs={6} justify="flex-end">
        <Typography variant="caption">{label}</Typography>
      </Grid>{" "}
      <Grid container item xs={6} justify="flex-start">
        <Typography variant="caption">{data}</Typography>
      </Grid>
    </Grid>
  );
};

export default BossCard;
