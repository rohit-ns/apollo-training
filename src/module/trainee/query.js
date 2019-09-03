import Error from '../../lib/Error';

const TraineeQuery = {
  trainee: async (parent, args, { dataSources }) => {
    // const { skip, limit } = args;
    const result = await dataSources.traineeApi.getTrainee();
    if (result.error) {
      throw new Error(result);
    }
    console.log('>>>>>>>>', result);
    return result;
  },
};
export default TraineeQuery;
