import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";

import ReportCard from "./ReportCard/ReportCard";
import {
  ApolloProvider,
} from "@apollo/client";
import {warcraftLogsApolloClient} from '../../../util/ApolloClients/ApolloClinets';
import {
  gql, useQuery
} from "@apollo/client";

const ReportContainer = () => {
  const [apolloClient , setApolloClient ] = React.useState(null);


  React.useEffect(() => {
    const getClient = async () => {
        const c =  await warcraftLogsApolloClient();
        setApolloClient(c);
    }
    getClient();
  },[])

  return (
    !apolloClient?<CircularProgress /> :
      <ApolloProvider client={apolloClient}>
        <Grid container direction="row" justify="center">
          <Grid container item xs={11} style={{ marginTop: "1em" }} spacing={2}>
            <Reports />
          </Grid>
        </Grid>
      </ApolloProvider>

  );
};


const REPORTS_QUERY = gql`
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
          title
        }
      }
    }
  }
`;

const Reports = () => {
  const { loading, error, data } = useQuery(REPORTS_QUERY);
  const removeFromList = (id) => {
    // TODO
  };
  console.log(loading, error, data)
  //console.log(data && data.reportData.reports.data)
  const reports = !data? <div></div> : data.reportData.reports.data.map((i) => {
    return <ReportCard log={i} key={i.code} removeIfEmpty={removeFromList} />;
  });
  return loading? <CircularProgress /> : reports;
  

}
export default ReportContainer;
