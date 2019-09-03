"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloServerCore = require("apollo-server-core");

class Error {
  constructor(error) {
    switch (error.status) {
      case 422:
        this.UserInputError(error);
        break;

      case 401:
        this.AuthenticationError(error);
        break;

      case 403:
        this.ForbiddenError(error);
        break;

      default:
        this.ApolloError(error);
    }
  }

  UserInputError(error) {
    throw new _apolloServerCore.UserInputError(error.message);
  }

  ForbiddenError(error) {
    throw new _apolloServerCore.ForbiddenError(error.message);
  }

  AuthenticationError(error) {
    throw new _apolloServerCore.AuthenticationError(error.message);
  }

  ApolloError(error) {
    throw new _apolloServerCore.ApolloError(error.message);
  }

}

var _default = Error;
exports.default = _default;