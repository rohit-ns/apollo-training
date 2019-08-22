const user={
  name:'user',
}
const me = (parent, args,context,input) => {
console.log('inside user resolvers::');
console.log("Token is >>>>>>>>>>>>>>>>>>>>>> ",context.token);
return user;
}
export default me;
// const UserQuery = {
//   me: async (parent, args, { dataSource }) => {
//     const result = await dataSource.userAPI.getme;
//     return result;
//   },
// };
// export default UserQuery;
