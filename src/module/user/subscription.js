import { USER_LOGIN, pubsub } from '../../subscription';
import { withFilter } from 'graphql-subscriptions';
const Subscription = {
  userLogin: {
    subscribe: withFilter(() => pubsub.asyncIterator([USER_LOGIN]), (payload, variables, context, info) => {
      const { traineeCreate: { data: { originalId } } } = payload;
      return authentication(payload.token, context.Authorization, originalId)
    }),
  },
};
export default Subscription;
