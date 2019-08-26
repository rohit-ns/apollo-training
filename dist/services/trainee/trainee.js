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
    console.log('###############', this.context.token);
    request.headers.set('Authorization', this.context.token);
  }

  async getTrainee() {
    const result = await this.get('trainee');
    return result;
  } // async createTrainee(name,email, password) {
  //    const result= this.post('/trainee', { name,email, password });
  //    return result;
  // }
  // async updateTrainee(id,name,email, password) {
  //     return this.update('/trainee', { id,name,email, password });
  // }
  // async deleteTrainee(id,name,email, password) {
  //     return this.delete('/trainee/${id}', { id,name,email, password });
  // }


}

var _default = TraineeAPI;
exports.default = _default;