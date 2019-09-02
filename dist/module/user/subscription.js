"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _subscription = require("../../subscription");

/* eslint-disable import/named */
const Subscription = {
  userLogin: {
    subscribe: () => _subscription.pubsub.asyncIterator([_subscription.USER_LOGIN])
  }
};
var _default = Subscription;
exports.default = _default;