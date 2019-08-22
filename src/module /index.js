// export { default as UserQuery } from './user';
// export { default as TraineeQuery } from './trainee';
import { me } from './user';
import { Trainee } from './trainee';


const resolvers = {
    Query: {
        me,
        Trainee
    }
}
export default resolvers;