import { configuration } from './config';
import * as  express from 'express';
// const express = require('express');
// const { ApolloServer, gql } = require('apollo-server-express');
import  { ApolloServer, gql } from 'apollo-server-express';
export default class Server {
 constructor(){
// Construct a schema, using GraphQL schema language
const typeDefs = gql
  `type Query {
    hello: String
  }`;
 // Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};
const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });
app.listen({ port: configuration.port }, () =>
console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
// console.log('SERVER IS READY');
);
 }
}
