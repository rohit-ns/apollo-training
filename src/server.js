// import * as express from 'express';
// import { ApolloServer, gql } from 'apollo-server-express';
// import { configuration } from './config';
// // const app = express();
// export default class Server {
//   constructor() {
//   }
//     // Construct a schema, using GraphQL schema language
//   //   const typeDefs = gql`type Query {
//   //   hello: String
//   // }`;
//   //   // Provide resolver functions for your schema fields
//   //   const resolvers = {
//   //     Query: {
//   //       hello: () => 'Hello world!',
//   //     },
//   //   };
//     const server = new ApolloServer({ typeDefs, resolvers });
//     server.applyMiddleware({ app });
//     app.listen({ port: configuration.port }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));

//}
import { config, configuration } from './config';
import resolvers from './module ';
import typeDefs from './index';

const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // get the user token from the headers
    const token = req.headers.authorization || '';

    return { token }
  },
});
const app = express();
server.applyMiddleware({ app });

app.listen({ port: configuration.port }, () =>
  console.log(`🚀 Server ready at http://localhost:${configuration.port}${server.graphqlPath}`)
);
