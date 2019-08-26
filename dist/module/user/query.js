"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const UserQuery = {
  me: async (parent, args, {
    dataSources
  }) => {
    const result = await dataSources.userApi.getMe();
    return result;
  }
};
var _default = UserQuery;
exports.default = _default;