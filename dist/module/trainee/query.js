"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const TraineeQuery = {
  trainee: async (parent, args, {
    dataSources
  }) => {
    const result = await dataSources.traineeApi.getTrainee();
    console.log('@@@@@@@@@@@@@@@@@@@@', result);
    return result;
  }
};
var _default = TraineeQuery;
exports.default = _default;