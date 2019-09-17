import { makeExecutableSchema, mockServer, addMockFunctionsToSchema } from 'graphql-tools'
import { graphql } from 'graphql'
import mockTraineeApi from './mockTraineeApi';
import schema from '../index';

const dataSources = {
  traineeApi: mockTraineeApi,
}
const traineeGetTestCase = {
  id: 'Fetch All Trainee cases',
  query: ` query{
    trainee{
      message
      status
      data{
        count
        records{
          _id
          createdBy
          UpdatedBy
          password
          email
          name
          role
          originalId
        }
      }
    }
    }`,
  variables: {},
  context: { dataSources },
  // expected result 
  expected: {
    "message": "Successfully fetched Trainees",
    "status": "200",
    "data": {
      "count": "2",
      "records": [
        {
          "_id": "5d7f365039c07f10c41e402a",
          "createdBy": "5d7b3c37fa10e63fe5abc2cc",
          "UpdatedBy": null,
          "password": null,
          "email": "ram@successive.tech",
          "name": "ram",
          "role": "trainee",
          "originalId": "5d7f365039c07f10c41e402a"
        },
        {
          "_id": "5d7f366439c07f10c41e402b",
          "createdBy": "5d7b3c37fa10e63fe5abc2cc",
          "UpdatedBy": null,
          "password": null,
          "email": "rohan@successive.tech",
          "name": "rohan",
          "role": "trainee",
          "originalId": "5d7f366439c07f10c41e402b"
        }
      ]
    }
  },
  queryName: 'trainee',
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