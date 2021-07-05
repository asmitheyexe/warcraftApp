import React from "react";
import { Grid } from "@material-ui/core";

import ReportCard from "./ReportCard/ReportCard";
import {
  fetchReportLogs,
  fetchToken,
} from "../../../services/warcraftLogsService";

const ReportContainer = () => {
  const [logs, setLogs] = React.useState([]);

  React.useEffect(() => {
    const getLogs = async () => {
      const data = await fetchReportLogs("Blitz Empire", "Area-52", "US");
      setLogs(data);
    };

    const getToken = () => {
      return fetchToken();
    };
    getToken().then((res) => getLogs());
  }, []);

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
