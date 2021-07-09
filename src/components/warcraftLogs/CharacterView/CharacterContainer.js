import React from "react";

import CharacterCard from "./CharacterCard";
import { Grid } from "@material-ui/core";

const CharactersContainer = ({ code, characters }) => {
  const charactersInvolved = characters.map((i) => {
    return i.subType !== "Unknown" && <CharacterCard person={i} key={i.id} />;
  });

  return (
    <Grid container spacing={2} direction="row">
      {charactersInvolved}
    </Grid>
  );
};

export default CharactersContainer;
