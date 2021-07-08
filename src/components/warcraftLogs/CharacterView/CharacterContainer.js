import React from "react";

import { useQuery, gql } from "@apollo/client";
import CharacterCard from "./CharacterCard";
import { CircularProgress, Grid } from "@material-ui/core";

const REPORT_QUERY = gql`
  query ($code: String!) {
    reportData {
      report(code: $code) {
        masterData {
          gameVersion
          actors(type: "Player") {
            id
            name
            server
            type
            subType
          }
        }
        fights(killType: Kills) {
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

const CharactersContainer = ({ code }) => {
  const { loading, error, data } = useQuery(REPORT_QUERY, {
    variables: {
      code,
    },
  });
  console.log(loading, error, data);

  const charactersInvolved =
    data &&
    data.reportData.report.masterData.actors.map((i) => {
      return i.subType !== "Unknown" && <CharacterCard person={i} key={i.id} />;
    });

  return loading ? (
    <CircularProgress />
  ) : (
    <Grid container spacing={2}>
      {charactersInvolved}
    </Grid>
  );
};

export default CharactersContainer;
