"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _subscription = require("../../subscription");

const Mutation = {
  createTrainee: async (parent, args, {
    dataSources
  }) => {
    const {
      input: {
        email,
        password,
        name
      }
    } = args;
    const result = await dataSources.traineeApi.createTrainee(email, password, name);

    _subscription.pubsub.publish(_subscription.TRAINEE_CREATE, {
      traineeCreate: result
    });

    return result;
  },
  updateTrainee: async (parent, args, {
    dataSources
  }) => {
    const {
      input: {
        id,
        dataToUpdate
      }
    } = args;
    const result = await dataSources.traineeApi.updateTrainee(id, dataToUpdate);

    _subscription.pubsub.publish(_subscription.TRAINEE_UPDATE, {
      traineeUpdate: result
    });

    return result;
  },
  deleteTrainee: async (parent, args, {
    dataSources
  }) => {
    const {
      input: {
        id
      }
    } = args;
    const result = await dataSources.traineeApi.deleteTrainee(id);

    _subscription.pubsub.publish(_subscription.TRAINEE_DELETE, {
      traineeDelete: result
    });

    return result;
  }
};
var _default = Mutation;
exports.default = _default;