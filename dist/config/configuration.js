"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
const envVars = process.env; // protecting config object against any modifications after the declaration.

const configuration = Object.freeze({
  SERVICE_URL: envVars.SERVICE_URL,
  port: envVars.PORT
});
console.log('config is::::', configuration);
var _default = configuration;
exports.default = _default;