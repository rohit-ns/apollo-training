import { RESTDataSource } from 'apollo-datasource-rest';
import { configuration } from '../../config';

class TraineeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = configuration.SERVICE_URL;
  }

  willSendRequest(request) {
    console.log('###############', this.context.token);
    request.headers.set('Authorization', this.context.token);
  }

  async getTrainee() {
    const result = await this.get('trainee');
    return result;
  }
  // async createTrainee(name,email, password) {
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
export default TraineeAPI;
