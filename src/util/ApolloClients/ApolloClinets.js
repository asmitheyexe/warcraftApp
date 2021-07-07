import {
    ApolloClient,
    InMemoryCache,
    createHttpLink
  } from "@apollo/client";

import { setContext } from '@apollo/client/link/context';

import WarcraftLogsAPI from '../WarcraftLogsAPI';

export const warcraftLogsApolloClient = async () => {
    const httpLink = createHttpLink({
        uri: 'https://www.warcraftlogs.com/api/v2/client',
      });
      

      const token = await WarcraftLogsAPI.initToken();
      const authLink = setContext((_, { headers }) => {
        // get the authentication token from local storage if it exists
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

      return client;

}