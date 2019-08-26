"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TraineeAPI", {
  enumerable: true,
  get: function () {
    return _trainee.default;
  }
});
Object.defineProperty(exports, "UserAPI", {
  enumerable: true,
  get: function () {
    return _user.default;
  }
});

var _trainee = _interopRequireDefault(require("./trainee/trainee"));

var _user = _interopRequireDefault(require("./user/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }