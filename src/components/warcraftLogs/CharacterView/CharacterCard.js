import React from "react";
import { Grid, Avatar, CardActionArea } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { CardHeader } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import { getSmallIconOnClassName } from "../../../util/iconSrc";
import { fetchParses } from "../../../services/warcraftLogsService";

import ParseCard from "./CharacterParseCard/CharacterParseCard";

const CharacterCard = ({ person, reportData }) => {
  const [parses, setParses] = React.useState(null);

  const handleOnClick = async () => {
    const data = await fetchParses(person, reportData.timeFrame);
    console.log(data);
    const releventData = data.filter((i) => i.reportID === reportData.id);
    setParses(releventData);
  };

  return (
    <Grid item xs={12}>
      <Card>
        <CardActionArea onClick={handleOnClick}>
          <CardHeader
            title={person.name}
            avatar={
              <Avatar
                src={
                  process.env.PUBLIC_URL +
                  "/resources/wow_class_icons/" +
                  getSmallIconOnClassName(person.type)
                }
                alt="class icon"
              />
            }
          />
        </CardActionArea>
        {parses && (
          <CardContent>
            {parses.map((i) => (
              <ParseCard parse={i} />
            ))}
          </CardContent>
        )}
      </Card>
    </Grid>
  );
};

export default CharacterCard;
