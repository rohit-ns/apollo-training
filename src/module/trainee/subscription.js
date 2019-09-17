// eslint-disable-next-line object-curly-newline
import { withFilter } from 'graphql-subscriptions';
import { TRAINEE_CREATE, TRAINEE_DELETE, TRAINEE_UPDATE, pubsub } from '../../subscription';
import authentication from '../../lib/authentication';

const Subscription = {
  traineeCreate: {
    subscribe: withFilter(() => pubsub.asyncIterator([TRAINEE_CREATE]), (payload, variables, context, info) => {
      const { traineeCreate: { data: { originalId } } } = payload;
      return authentication(payload.token, context.Authorization, originalId)
    }),
  },
  traineeUpdate: {
    subscribe: withFilter(() => pubsub.asyncIterator([TRAINEE_UPDATE]), (payload, variables, context, info) => {
      const { traineeCreate: { data: { originalId } } } = payload;
      return authentication(payload.token, context.Authorization, originalId)
    }),
  },
  traineeDelete: {
    subscribe: withFilter(() => pubsub.asyncIterator([TRAINEE_UPDATE]), (payload, variables, context, info) => {
      const { traineeCreate: { data: { originalId } } } = payload;
      return authentication(payload.token, context.Authorization, originalId)
    }),
  },
};
export default Subscription;
