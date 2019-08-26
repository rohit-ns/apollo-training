import { RESTDataSource } from 'apollo-datasource-rest';
import { configuration } from '../../config';

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = configuration.SERVICE_URL;
  }

  willSendRequest(req) {
    req.headers.set('Authorization', this.context.token);
    // console.log('token *************', req.header.authorization);
  }

  async getMe() {
    const result = await this.get('user/me');
    return result;
  }
  // async login(email, password) {
  //     return this.post('/user/login', { email, password });
  // }
}
export default UserAPI;
