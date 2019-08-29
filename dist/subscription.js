"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USER_LOGIN = exports.TRAINEE_DELETE = exports.TRAINEE_UPDATE = exports.TRAINEE_CREATE = exports.pubsub = void 0;

var _apolloServerExpress = require("apollo-server-express");

const pubsub = new _apolloServerExpress.PubSub();
exports.pubsub = pubsub;
const TRAINEE_CREATE = 'TRAINEE_CREATE';
exports.TRAINEE_CREATE = TRAINEE_CREATE;
const TRAINEE_UPDATE = 'TRAINEE_UPDATE';
exports.TRAINEE_UPDATE = TRAINEE_UPDATE;
const TRAINEE_DELETE = 'TRAINEE_DELETE';
exports.TRAINEE_DELETE = TRAINEE_DELETE;
const USER_LOGIN = 'USER_LOGIN';
exports.USER_LOGIN = USER_LOGIN;