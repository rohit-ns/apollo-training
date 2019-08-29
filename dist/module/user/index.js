"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "UserQuery", {
  enumerable: true,
  get: function () {
    return _query.default;
  }
});
Object.defineProperty(exports, "userMutation", {
  enumerable: true,
  get: function () {
    return _mutation.default;
  }
});
Object.defineProperty(exports, "userSubscription", {
  enumerable: true,
  get: function () {
    return _subscription.default;
  }
});

var _query = _interopRequireDefault(require("./query"));

var _mutation = _interopRequireDefault(require("./mutation"));

var _subscription = _interopRequireDefault(require("./subscription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }