import Error from '../../lib/Error';
import { TRAINEE_CREATE, TRAINEE_DELETE, TRAINEE_UPDATE, pubsub } from '../../subscription';

const Mutation = {
  createTrainee: async (parent, args, { dataSources }) => {
    try {
      const { input: { email, password, name } } = args;
      const result = await dataSources.traineeApi.createTrainee(name, email, password);
      if (result.error) {
        throw new Error(result);
      }
      pubsub.publish(TRAINEE_CREATE, { traineeCreate: result });
      return result;
    } catch (error) {
      return error;
    }
  },

  updateTrainee: async (parent, args, { dataSources }) => {
    try {
      const { input: { id, dataToUpdate } } = args;
      const result = await dataSources.traineeApi.updateTrainee(id, dataToUpdate);
      if (result.error) {
        throw new Error(result);
      }
      pubsub.publish(TRAINEE_UPDATE, { traineeUpdate: result });
      return result;
    } catch (error) {
      return error;
    }
  },
  deleteTrainee: async (parent, args, { dataSources }) => {
    try {
      const { input: { id } } = args;
      const result = await dataSources.traineeApi.deleteTrainee(id);
      if (result.error) {
        throw new Error(result);
      }
      pubsub.publish(TRAINEE_DELETE, { traineeDelete: result });
      return result;
    } catch (error) {
      return error;
    }
  },
};

export default Mutation;
