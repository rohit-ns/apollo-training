import express from 'express';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import { createServer } from 'http';
import { config } from './config';
import schema from './index';
import { UserAPI, TraineeAPI } from './services';

export const server = new ApolloServer({
  schema: makeExecutableSchema(schema),
  dataSources: () => ({
    userApi: new UserAPI(),
    traineeApi: new TraineeAPI(),
  }),
  context: async ({ req, connection }) => {
    if (connection) {
      // check connection for metadata
      return connection.context;
    }
    // check from req
    const token = req.headers.authorization || '';
   // console.log('token>>>>>',token);
    return { token };
  },
});
const app = express();
const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);
server.applyMiddleware({ app });
httpServer.listen({ port: config.port }, () => {
  console.log(`🚀 Server ready at http://localhost:${config.port}${server.graphqlPath}`);
  // console.log(`🚀 Subscriptions ready at ws://localhost:${config.port}${server.subscriptionsPath}`);
});
