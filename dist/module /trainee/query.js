"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trainee = [
    {
        name: 'trainee1',
        email: 'trainee1@successive.tech',
    },
    {
        name: 'trainee2',
        email: 'trainee2@successive.tech',
    },
    {
        name: 'trainee3',
        email: 'trainee3@successive.tech',
    },
    {
        name: 'trainee4',
        email: 'trainee4@successive.tech',
    },
];
const Trainee = (parent, args, context, input) => {
    console.log('inside trainee resolvers::');
    return trainee;
};
exports.default = Trainee;
// const traineeQuery = {
//   me: async (parent, args, { dataSource }) => {
//     const result = await dataSource.traineeAPI.getTrainee;
//     return result;
//   },
// };
// export default traineeQuery;
//# sourceMappingURL=query.js.map