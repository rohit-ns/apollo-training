import Error from '../../lib/Error';

const UserQuery = {
  me: async (parent, args, { dataSources }) => {
    try {
      const result = await dataSources.userApi.getMe();
      if (result.error) {
        throw new Error(result);
      }
      return result;
    } catch (error) {
      return error;
    }
  },
};
export default UserQuery;
