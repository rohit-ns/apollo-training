import { RESTDataSource } from 'apollo-datasource-rest';
import { config } from '../../config';

class TraineeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = config.SERVICE_URL;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  async getTrainee() {
    const result = await this.get('trainee');
    return result;
  }

  async createTrainee(name, email, password) {
    
    const result = await this.post('trainee', { name, email, password });
    return result;
  }

  async updateTrainee(id, dataToUpdate) {
    const result = await this.put('trainee', { id, dataToUpdate });
    return result;
  }

  async deleteTrainee(id) {
    // eslint-disable-next-line no-template-curly-in-string
    const result = await this.delete(`trainee/${id}`, { id });
    return result;
  }
}
export default TraineeAPI;
