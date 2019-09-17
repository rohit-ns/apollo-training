import { makeExecutableSchema, mockServer, addMockFunctionsToSchema } from 'graphql-tools'
import { graphql } from 'graphql'
import mockTraineeApi from './mockTraineeApi';
import schema from '../index';

const dataSources = {
  traineeApi: mockTraineeApi,
}
const traineeGetTestCase = {
  id: 'All Test Case',
  query: ` mutation($traineeUpdate:updateInput){
    updateTrainee(input:$traineeUpdate){
      message
      status
      data{
        id
      }
    }
  }`,
  variables: {
    "traineeUpdate": {
      "id": "5d7f245b566e401bc4584390",
      "dataToUpdate": {
        "name": "rohit"
      }
    }
  },
  context: { dataSources },
  // expected result 
  expected: {
    "message": "Trainee update successfully",
    "status": "200",
    "data": {
      "id": "5d7f245b566e401bc4584390"
    }
  },
  queryName: 'updateTrainee',
}
describe('My Test Cases', () => {
  // array of all test cases, just 1 for now
  const cases = [traineeGetTestCase]
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