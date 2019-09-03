import { RESTDataSource } from 'apollo-datasource-rest';
import { configuration } from '../../config';

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = configuration.SERVICE_URL;
  }

  willSendRequest(req) {
    req.headers.set('Authorization', this.context.token);
  }

  async getMe() {
    const result = await this.get('user/me');
    return result;
  }

  async loginUser(email, password) {
    const result = await this.post('user/login', { email, password });
    return result;
  }
}
export default UserAPI;
