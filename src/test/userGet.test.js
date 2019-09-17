import { makeExecutableSchema, mockServer, addMockFunctionsToSchema } from 'graphql-tools'
import { graphql } from 'graphql'
import mockUserApi from './mockUserApi';
import schema from '../index';

const dataSources = {
  userApi: mockUserApi,
}
const userGetTestCase = {
  id: 'All Test Case',
  query: ` query{me{
    message
    status
  data{
    _id
    email
    name
    role
  }
  }
}`,
  variables: {},
  context: { dataSources },
  // expected result 
  expected: {
    "message": "User get Successfully",
    "status": "200",
    "data": {
      "_id": "5d7b3c37fa10e63fe5abc2cc",
      "email": "rohit@successive.tech",
      "name": "Rohit",
      "role": "head-trainer",
    }
  },
  queryName: 'me',
}
describe('My Test Cases', () => {
  // array of all test cases, just 1 for now
  const cases = [userGetTestCase]
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