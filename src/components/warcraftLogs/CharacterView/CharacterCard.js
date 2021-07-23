import React from "react";
import { Grid, Avatar, CardActionArea, CardHeader } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { getSmallIconOnClassName } from "../../../util/iconSrc";

import ParseCard from "./CharacterParseCard/CharacterParseCard";
import { gql, useQuery } from "@apollo/client";

// const Query = gql`
// query ($id: String!, $encounterID : Int!) {
//   CharacterData {
//     CharacterData(id: $id) {
//     }
//   }
// }


const CharacterCard = ({ person, reportData }) => {  
  // const { loading, error, data } = useQuery(Query, {
  //   variables: {
  //     id: person.gameID,
  //   },
  // });
  console.log(person);
  return (
    <Grid item xs={3}>
      <Card>
        <CardActionArea>
          <CardHeader
            title={person.name}
            avatar={
              <Avatar
                src={
                  process.env.PUBLIC_URL +
                  "/resources/wow_class_icons/" +
                  getSmallIconOnClassName(person.subType)
                }
                alt="class icon"
              />
            }
          />
        </CardActionArea>

      </Card>
    </Grid>
  );
};

export default CharacterCard;
