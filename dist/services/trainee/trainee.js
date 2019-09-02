"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloDatasourceRest = require("apollo-datasource-rest");

var _config = require("../../config");

class TraineeAPI extends _apolloDatasourceRest.RESTDataSource {
  constructor() {
    super();
    this.baseURL = _config.configuration.SERVICE_URL;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  async getTrainee() {
    const result = await this.get('trainee');
    return result;
  }

  async createTrainee(name, email, password) {
    const result = await this.post('trainee', {
      name,
      email,
      password
    });
    return result;
  }

  async updateTrainee(id, dataToUpdate) {
    const result = await this.put('trainee', {
      id,
      dataToUpdate
    });
    return result;
  }

  async deleteTrainee(id) {
    // eslint-disable-next-line no-template-curly-in-string
    const result = await this.delete(`trainee/del/${id}`, {
      id
    });
    return result;
  }

}

var _default = TraineeAPI;
exports.default = _default;