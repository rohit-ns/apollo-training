import express from 'express';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import { createServer } from 'http';
import { configuration } from './config';
import schema from './index';
import { UserAPI, TraineeAPI } from './services';

const server = new ApolloServer({
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
    return { token };
  },
});
const app = express();
const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);
server.applyMiddleware({ app });
httpServer.listen({ port: configuration.port }, () => {
  console.log(`🚀 Server ready at http://localhost:${configuration.port}${server.graphqlPath}`);
  // console.log(`🚀 Subscriptions ready at ws://localhost:${configuration.port}${server.subscriptionsPath}`);
});

// app.listen({ port: configuration.port }, () => console.log(`🚀 Server ready at http://localhost:${configuration.port}${server.graphqlPath}`));
// app.listen({ port: configuration.port }, () => console.log(`🚀 Subscriptions ready at ws://localhost:${configuration.port}${server.subscriptionsPath}`));
