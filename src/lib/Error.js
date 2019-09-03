import { AuthenticationError, UserInputError, ForbiddenError, ApolloError } from 'apollo-server-core';

class Error {
  constructor(error) {
    switch (error.status) {
      case 422: this.UserInputError(error);
        break;
      case 401: this.AuthenticationError(error);
        break;
      case 403: this.ForbiddenError(error);
        break;
      default: this.ApolloError(error);
    }
  }

  UserInputError(error) {
    throw new UserInputError(error.message);
  }


  ForbiddenError(error) {
    throw new ForbiddenError(error.message);
  }


  AuthenticationError(error) {
    throw new AuthenticationError(error.message);
  }

  ApolloError(error) {
    throw new ApolloError(error.message);
  }
}

export default Error;
