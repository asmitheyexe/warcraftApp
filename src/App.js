import React from "react";
import ReportContainer from "./components/warcraftLogs/reports/ReportContainer";
import NavBar from "./components/Navbar/Navbar";
import { Grid, Typography, Link } from "@material-ui/core";
import {
  BrowserRouter,
  Switch,
  Route,
  Link as RouterLink,
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components/Home/home";

function App() {
  return (
    <>
      <div className="App">
        <Grid container justify="center">
          <BrowserRouter>
            <Link component={RouterLink} to="/">
              <Typography style={{ color: "black" }} variant="h6">
                Blitz Empire Elites
              </Typography>
            </Link>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/logs">
                <ReportContainer />
              </Route>
            </Switch>
          </BrowserRouter>
        </Grid>
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
