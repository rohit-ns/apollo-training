import path from 'path';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import resolvers from './module';
// return all .graphql schema in the form of array
const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'));
// above files converted in the form of schema
const typeDefs = mergeTypes(typesArray, { all: true });
export default {
  typeDefs,
  resolvers,
};
