"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Error = _interopRequireDefault(require("../../lib/Error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UserQuery = {
  me: async (parent, args, {
    dataSources
  }) => {
    try {
      const result = await dataSources.userApi.getMe();

      if (result.error) {
        throw new _Error.default(result);
      }

      return result;
    } catch (error) {
      return error;
    }
  }
};
var _default = UserQuery;
exports.default = _default;