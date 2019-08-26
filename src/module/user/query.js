const UserQuery = {
  me: async (parent, args, { dataSources }) => {
    const result = await dataSources.userApi.getMe();
    return result;
  },
};
export default UserQuery;
