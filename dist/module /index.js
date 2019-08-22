"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export { default as UserQuery } from './user';
// export { default as TraineeQuery } from './trainee';
const user_1 = require("./user");
const trainee_1 = require("./trainee");
const resolvers = {
    Query: {
        me: user_1.me,
        Trainee: trainee_1.Trainee
    }
};
exports.default = resolvers;
//# sourceMappingURL=index.js.map