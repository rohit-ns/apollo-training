"use strict";

var _express = _interopRequireDefault(require("express"));

var _apolloServerExpress = require("apollo-server-express");

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
  context: ({
    req
  }) => {
    console.log('$$$$$$$$$$$$', req.headers.authorization);
    return {
      token: req.headers.authorization
    };
  }
});
const app = (0, _express.default)();
server.applyMiddleware({
  app
});
app.listen({
  port: _config.configuration.port
}, () => console.log(`🚀 Server ready at http://localhost:${_config.configuration.port}${server.graphqlPath}`));