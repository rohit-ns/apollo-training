import express from 'express';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import { configuration } from './config';
import schema from './index';
import { UserAPI, TraineeAPI } from './services';


const server = new ApolloServer({
  schema: makeExecutableSchema(schema),
  dataSources: () => ({
    userApi: new UserAPI(),
    traineeApi: new TraineeAPI(),
  }),
  context: ({ req }) => {
    console.log('$$$$$$$$$$$$', req.headers.authorization);
    return { token: req.headers.authorization };
  },
});
const app = express();

server.applyMiddleware({ app });

app.listen({ port: configuration.port }, () => console.log(`🚀 Server ready at http://localhost:${configuration.port}${server.graphqlPath}`));
