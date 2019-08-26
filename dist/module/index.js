"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = require("./user");

var _trainee = require("./trainee");

/* eslint-disable object-curly-spacing */
// console.log('>>>>>>>>>>>>>>>>>', UserQuery, TraineeQuery);
const resolvers = {
  Query: { ..._user.UserQuery,
    ..._trainee.TraineeQuery
  }
};
var _default = resolvers;
exports.default = _default;