/* eslint-disable object-curly-spacing */
// eslint-disable-next-line import/named
import { UserQuery, userMutation, userSubscription } from './user';
import { TraineeQuery, traineeMutation, traineeSubscription} from './trainee';

const resolvers = {
  Query: {
    ...UserQuery,
    ...TraineeQuery,
  },
  Mutation: {
    ...userMutation,
    ...traineeMutation,
  },
  Subscription: {
    ...userSubscription,
    ...traineeSubscription,
  },
};
export default resolvers;
