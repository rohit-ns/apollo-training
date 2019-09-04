import Error from '../../lib/Error';
import { USER_LOGIN, pubsub } from '../../subscription';

const Mutation = {
  loginUser: async (parent, args, { dataSources }) => {
    try {
      const { input: { email, password } } = args;
      const result = await dataSources.userApi.loginUser(email, password);
      if (result.error) {
        throw new Error(result);
      }
      pubsub.publish(USER_LOGIN, { userLogin: result });
      return result;
    } catch (error) {
      return error;
    }
  },
};
export default Mutation;
