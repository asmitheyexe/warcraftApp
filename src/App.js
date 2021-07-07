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

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  createHttpLink
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';



function App({warcraftLogsToken}) {

  const httpLink = createHttpLink({
    uri: 'https://www.warcraftlogs.com/api/v2/client',
  });
  
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = warcraftLogsToken;
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

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
              <ApolloProvider client={client}>
                  <ReportContainer />
              </ApolloProvider>
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
