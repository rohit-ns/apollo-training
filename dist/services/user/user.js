"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloDatasourceRest = require("apollo-datasource-rest");

var _config = require("../../config");

class UserAPI extends _apolloDatasourceRest.RESTDataSource {
  constructor() {
    super();
    this.baseURL = _config.configuration.SERVICE_URL;
  }

  willSendRequest(req) {
    req.headers.set('Authorization', this.context.token); // console.log('token *************', req.header.authorization);
  }

  async getMe() {
    const result = await this.get('user/me');
    return result;
  } // async login(email, password) {
  //     return this.post('/user/login', { email, password });
  // }


}

var _default = UserAPI;
exports.default = _default;