import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";

import ReportCard from "./ReportCard/ReportCard";
import { ApolloProvider } from "@apollo/client";
import { warcraftLogsApolloClient } from "../../../util/ApolloClients/ApolloClinets";
import { gql, useQuery } from "@apollo/client";

import LoadingWheel from "../../../util/LoadingWheel";

const ReportContainer = () => {
  const [apolloClient, setApolloClient] = React.useState(null);
  const [zoneId, setZoneId] = React.useState(null);

  React.useEffect(() => {
    const getClient = async () => {
      const c = await warcraftLogsApolloClient();
      setApolloClient(c);
    };
    getClient();
  }, []);

  const renderedComponent = !zoneId ? (
    <SelectZone setZone={setZoneId} />
  ) : (
    <Reports zoneId={zoneId}>
      <Button onClick={() => setZoneId(null)} variant="outlined">
        Select New Zone
      </Button>
    </Reports>
  );
  return !apolloClient ? (
    <LoadingWheel />
  ) : (
    <ApolloProvider client={apolloClient}>
      <Typography variant="h4">Warcraftlogs</Typography>
      <Grid container direction="row" justify="center">
        <Grid container item xs={11} style={{ marginTop: "1em" }} spacing={2}>
          {renderedComponent}
        </Grid>
      </Grid>
    </ApolloProvider>
  );
};

const SelectZone = ({ setZone }) => {
  return (
    <Grid container item align="center" spacing={2} direction="row">
      <Grid item xs={12}>
        <Button variant="outlined" onClick={() => setZone(26)}>
          Castle Nathria
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="outlined" onClick={() => setZone(27)}>
          Sanctum of Domination
        </Button>
      </Grid>
    </Grid>
  );
};

const REPORTS_QUERY = gql`
  query ($zoneId: Int!) {
    reportData {
      reports(
        guildName: "Blitz Empire"
        guildServerSlug: "Area-52"
        guildServerRegion: "US"
        zoneID: $zoneId
      ) {
        data {
          code
          guild {
            name
          }
          owner {
            name
            id
          }
          title
        }
      }
    }
  }
`;

const Reports = ({ zoneId, children }) => {
  const { loading, error, data } = useQuery(REPORTS_QUERY, {
    variables: {
      zoneId,
    },
  });
  const removeFromList = (id) => {
    // TODO
  };
  console.log(loading, error, data);
  //console.log(data && data.reportData.reports.data)
  const reports = !data ? (
    <div></div>
  ) : (
    data.reportData.reports.data.map((i) => {
      return <ReportCard log={i} key={i.code} removeIfEmpty={removeFromList} />;
    })
  );

  const returnComponent = (
    <>
      {reports.length > 0 ? (
        reports
      ) : (
        <Grid container item justify="center">
          <Typography variant="caption1">No Logs to Display</Typography>
        </Grid>
      )}

      <Grid container item justify="center">
        {children}
      </Grid>
    </>
  );

  return loading ? <LoadingWheel /> : returnComponent;
};
export default ReportContainer;
