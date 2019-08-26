"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _mergeGraphqlSchemas = require("merge-graphql-schemas");

var _module = _interopRequireDefault(require("./module"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// return all .graphql schema in the form of array
const typesArray = (0, _mergeGraphqlSchemas.fileLoader)(_path.default.join(__dirname, './**/*.graphql')); // above files converted in the form of schema

const typeDefs = (0, _mergeGraphqlSchemas.mergeTypes)(typesArray, {
  all: true
});
var _default = {
  typeDefs,
  resolvers: _module.default
};
exports.default = _default;