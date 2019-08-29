"use strict";

var _express = _interopRequireDefault(require("express"));

var _apolloServerExpress = require("apollo-server-express");

var _http = require("http");

var _config = require("./config");

var _index = _interopRequireDefault(require("./index"));

var _services = require("./services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = new _apolloServerExpress.ApolloServer({
  schema: (0, _apolloServerExpress.makeExecutableSchema)(_index.default),
  dataSources: () => ({
    userApi: new _services.UserAPI(),
    traineeApi: new _services.TraineeAPI()
  }),
  context: async ({
    req,
    connection
  }) => {
    if (connection) {
      // check connection for metadata
      return connection.context;
    } // check from req


    const token = req.headers.authorization || '';
    return {
      token
    };
  }
});
const app = (0, _express.default)();
const httpServer = (0, _http.createServer)(app);
server.installSubscriptionHandlers(httpServer);
server.applyMiddleware({
  app
});
httpServer.listen({
  port: _config.configuration.port
}, () => {
  console.log(`🚀 Server ready at http://localhost:${_config.configuration.port}${server.graphqlPath}`); // console.log(`🚀 Subscriptions ready at ws://localhost:${configuration.port}${server.subscriptionsPath}`);
}); // app.listen({ port: configuration.port }, () => console.log(`🚀 Server ready at http://localhost:${configuration.port}${server.graphqlPath}`));
// app.listen({ port: configuration.port }, () => console.log(`🚀 Subscriptions ready at ws://localhost:${configuration.port}${server.subscriptionsPath}`));