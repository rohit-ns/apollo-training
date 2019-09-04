"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Error = _interopRequireDefault(require("../../lib/Error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TraineeQuery = {
  trainee: async (parent, args, {
    dataSources
  }) => {
    try {
      // const { skip, limit } = args;
      const result = await dataSources.traineeApi.getTrainee();

      if (result.error) {
        throw new _Error.default(result);
      }

      console.log('>>>>>>>>', result);
      return result;
    } catch (error) {
      return error;
    }
  }
};
var _default = TraineeQuery;
exports.default = _default;