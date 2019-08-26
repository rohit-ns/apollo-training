/* eslint-disable object-curly-spacing */
import { UserQuery } from './user';
import { TraineeQuery } from './trainee';

// console.log('>>>>>>>>>>>>>>>>>', UserQuery, TraineeQuery);
const resolvers = {
  Query: {
    ...UserQuery,
    ...TraineeQuery,
  },
};
export default resolvers;
