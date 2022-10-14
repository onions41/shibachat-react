import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';

// Apollo HTTP Link
const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_SERVER_URL });

// Creates client out of links
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default apolloClient;