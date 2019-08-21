"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const express = require("express");
// const express = require('express');
// const { ApolloServer, gql } = require('apollo-server-express');
const apollo_server_express_1 = require("apollo-server-express");
class Server {
    constructor() {
        // Construct a schema, using GraphQL schema language
        const typeDefs = apollo_server_express_1.gql `type Query {
    hello: String
  }`;
        // Provide resolver functions for your schema fields
        const resolvers = {
            Query: {
                hello: () => 'Hello world!',
            },
        };
        const server = new apollo_server_express_1.ApolloServer({ typeDefs, resolvers });
        const app = express();
        server.applyMiddleware({ app });
        app.listen({ port: config_1.configuration.port }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
        // console.log('SERVER IS READY');
        );
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map