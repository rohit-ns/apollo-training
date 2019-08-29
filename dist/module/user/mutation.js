"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _subscription = require("../../subscription");

// eslint-disable-next-line import/named
const Mutation = {
  loginUser: async (parent, args, {
    dataSources
  }) => {
    console.log('>>>>>>>>>>>>', args);
    const {
      input: {
        email,
        password
      }
    } = args;
    const result = await dataSources.userApi.loginUser(email, password);

    _subscription.pubsub.publish(_subscription.USER_LOGIN, {
      userLogin: result
    });

    return result;
  }
};
var _default = Mutation;
exports.default = _default;