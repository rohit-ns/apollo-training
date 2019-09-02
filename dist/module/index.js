"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = require("./user");

var _trainee = require("./trainee");

/* eslint-disable object-curly-spacing */
// eslint-disable-next-line import/named
const resolvers = {
  Query: { ..._user.UserQuery,
    ..._trainee.TraineeQuery
  },
  Mutation: { ..._user.userMutation,
    ..._trainee.traineeMutation
  },
  Subscription: { ..._user.userSubscription,
    ..._trainee.traineeSubscription
  }
};
var _default = resolvers;
exports.default = _default;