"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _subscription = require("../../subscription");

// eslint-disable-next-line object-curly-newline
const Subscription = {
  traineeCreate: {
    subscribe: () => _subscription.pubsub.asyncIterator([_subscription.TRAINEE_CREATE])
  },
  traineeUpdate: {
    subscribe: () => _subscription.pubsub.asyncIterator([_subscription.TRAINEE_UPDATE])
  },
  traineeDelete: {
    subscribe: () => _subscription.pubsub.asyncIterator([_subscription.TRAINEE_DELETE])
  }
};
var _default = Subscription;
exports.default = _default;