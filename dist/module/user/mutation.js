"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Error = _interopRequireDefault(require("../../lib/Error"));

var _subscription = require("../../subscription");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Mutation = {
  loginUser: async (parent, args, {
    dataSources
  }) => {
    const {
      input: {
        email,
        password
      }
    } = args;
    const result = await dataSources.userApi.loginUser(email, password);

    if (result.error) {
      throw new _Error.default(result);
    }

    _subscription.pubsub.publish(_subscription.USER_LOGIN, {
      userLogin: result
    });

    return result;
  }
};
var _default = Mutation;
exports.default = _default;