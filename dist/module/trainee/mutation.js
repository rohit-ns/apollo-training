"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Error = _interopRequireDefault(require("../../lib/Error"));

var _subscription = require("../../subscription");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Mutation = {
  createTrainee: async (parent, args, {
    dataSources
  }) => {
    try {
      const {
        input: {
          email,
          password,
          name
        }
      } = args;
      const result = await dataSources.traineeApi.createTrainee(name, email, password);
      console.log('***********', result);
      console.log('^^^^^^^^^', result.error);

      if (result.error) {
        throw new _Error.default(result);
      }

      _subscription.pubsub.publish(_subscription.TRAINEE_CREATE, {
        traineeCreate: result
      });

      return result;
    } catch (error) {
      return error;
    }
  },
  updateTrainee: async (parent, args, {
    dataSources
  }) => {
    try {
      const {
        input: {
          id,
          dataToUpdate
        }
      } = args;
      const result = await dataSources.traineeApi.updateTrainee(id, dataToUpdate);

      if (result.error) {
        throw new _Error.default(result);
      }

      _subscription.pubsub.publish(_subscription.TRAINEE_UPDATE, {
        traineeUpdate: result
      });

      return result;
    } catch (error) {
      return error;
    }
  },
  deleteTrainee: async (parent, args, {
    dataSources
  }) => {
    try {
      const {
        input: {
          id
        }
      } = args;
      const result = await dataSources.traineeApi.deleteTrainee(id);

      if (result.error) {
        throw new _Error.default(result);
      }

      _subscription.pubsub.publish(_subscription.TRAINEE_DELETE, {
        traineeDelete: result
      });

      return result;
    } catch (error) {
      return error;
    }
  }
};
var _default = Mutation;
exports.default = _default;