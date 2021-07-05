import React from 'react'
import ReportContainer from './components/warcraftLogs/reports/ReportContainer';

import {Grid} from '@material-ui/core';
function App() {
  return (
    <div className="App">
      <h1>Warcraft Logs test</h1>
      <Grid container justify='center' >
        <Grid item xs={10}>
          <ReportContainer />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
