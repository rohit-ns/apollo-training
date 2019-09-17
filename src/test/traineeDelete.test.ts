import { makeExecutableSchema, mockServer, addMockFunctionsToSchema } from 'graphql-tools'
import { graphql } from 'graphql'
import mockTraineeApi from './mockTraineeApi';
import schema from '../index';

const dataSources = {
  traineeApi: mockTraineeApi,
}
const traineeDeleteTestCase = {
  id: 'All Delete Trainee cases',
  query: ` mutation($traineeDelete:deleteInput){
    deleteTrainee(input:$traineeDelete){
      message
      status
      data{
        id
      }
    }
  }`,
  variables: {
    "traineeDelete": {
      "id": "5d7f245b566e401bc4584390"
    }
  },
  context: { dataSources },
  // expected result 
  expected: {
    "message": "Trainee deleted successfully",
    "status": "200",
    "data": {
      "id": "5d7f245b566e401bc4584390"
    }
  },
  queryName: 'deleteTrainee',
}
describe('My Test Cases', () => {
  // array of all test cases, just 1 for now
  const cases = [traineeDeleteTestCase]
  // running the test for each case in the cases array
  cases.forEach(({ id, query, variables, context, expected, queryName }) => {
    const executableSchema = makeExecutableSchema(schema);
    test(`query: ${id}`, async () => {
      const result = await graphql(executableSchema, query, null, context, variables)
      console.log('>>>>>>>>>>>>>', result.data);
      return expect(result.data[queryName]).toEqual(expected)
    })
  })
})