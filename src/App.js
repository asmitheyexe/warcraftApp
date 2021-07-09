import React from "react";
import ReportContainer from "./components/warcraftLogs/reports/ReportContainer";
import NavBar from "./components/Navbar/Navbar";
import { Grid, Typography, Link, ThemeProvider } from "@material-ui/core";
import {
  BrowserRouter,
  Switch,
  Route,
  Link as RouterLink,
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components/Home/home";
import theme from "./customTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Grid container justify="center">
          <BrowserRouter>
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
    </ThemeProvider>
  );
}

export default App;
