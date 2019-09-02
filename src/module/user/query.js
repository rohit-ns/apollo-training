import Error from '../../lib/Error';

const UserQuery = {
  me: async (parent, args, { dataSources }) => {
    const result = await dataSources.userApi.getMe();
    if (result.error) {
      throw new Error(result);
    }
    return result;
  },
};
export default UserQuery;
