/* eslint-disable import/named */
import { USER_LOGIN, pubsub } from '../../subscription';

const Subscription = {
  userLogin: {
    subscribe: () => pubsub.asyncIterator([USER_LOGIN]),
  },
};
export default Subscription;
