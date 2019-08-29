
// eslint-disable-next-line import/named
import { USER_LOGIN, pubsub } from '../../subscription';

const Mutation = {
  loginUser: async (parent, args, { dataSources }) => {
    console.log('>>>>>>>>>>>>', args);
    const { input: { email, password } } = args;
    const result = await dataSources.userApi.loginUser(email, password);
    pubsub.publish(USER_LOGIN, { userLogin: result });
    return result;
  },
};
export default Mutation;
