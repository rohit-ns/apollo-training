import Error from '../../lib/Error';

const TraineeQuery = {
  trainee: async (parent, args, { dataSources }) => {
    try {
      // const { skip, limit } = args;
      const result = await dataSources.traineeApi.getTrainee();
      if (result.error) {
        throw new Error(result);
      }
      console.log('>>>>>>>>', result);
      return result;
    } catch (error) {
      return error;
    }
  },
};
export default TraineeQuery;