import {ApolloClient, InMemoryCache, split, HttpLink } from '@apollo/client'
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from 'apollo-utilities';

// Create an http link:
const httpLink = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URI
  });

  // Create a WebSocket link:
  const wsLink = new WebSocketLink({
    uri: REACT_APP_GRAPHQL_WEBSOCKET,
    options: {
      reconnect: true,
      lazy: true,
      inactivityTimeout: 30000,
    }
  });

  // using the ability to split links, you can send data to each link
  // depending on what kind of operation is being sent
  const link = split(
    // split based on operation type
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    httpLink,
  );

const client = new ApolloClient({
    cache: new InMemoryCache,
    link: link
})

export default client