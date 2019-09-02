const TraineeQuery = {
  trainee: async (parent, args, { dataSources }) => {
    const result = await dataSources.traineeApi.getTrainee();
    console.log('>>>>>>>>', result);
    return result;
  },
};
export default TraineeQuery;
