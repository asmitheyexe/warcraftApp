import React from "react";
import { Grid } from "@material-ui/core";

import ReportCard from "./ReportCard/ReportCard";

import {
  gql, useQuery
} from "@apollo/client";

const REPORTS = gql`
  query {
    reportData{
      reports(guildName: "Blitz Empire", guildServerSlug: "Area-52", guildServerRegion:"US") {
        data{
          code
          guild{
            name
          }
          owner{
            name
            id
          }
        }
      }
    }
  }
`;


const ReportContainer = () => {
  const [logs, setLogs] = React.useState([]);
  const { loading, error, data } = useQuery(REPORTS,{
    variables: {
      id : 66985125
    }
  });
  console.log(loading,error,data)
  const removeFromList = (id) => {
    console.log(id);
    const newList = logs.filter((log) => log.id !== id);
    setLogs(newList);
  };

  const reports = logs.map((i) => {
    return <ReportCard log={i} key={i.id} removeIfEmpty={removeFromList} />;
  });

  return (
    <Grid container direction="row" justify="center">
      <Grid container item xs={11} style={{ marginTop: "1em" }} spacing={2}>
        {reports}
      </Grid>
    </Grid>
  );
};

export default ReportContainer;
