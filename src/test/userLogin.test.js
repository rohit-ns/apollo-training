import { makeExecutableSchema, mockServer, addMockFunctionsToSchema } from 'graphql-tools'
import { graphql } from 'graphql'
import mockUserApi from './mockUserApi';
import schema from '../index';

const dataSources = {
  userApi: mockUserApi,
}
const userLoginTestCase = {
  id: 'Login',
  query: ` mutation ($loginUser: loginInput) {
    loginUser (input: $loginUser) {
      message
      status
      data
    }
  }`,
  variables: {
    "loginUser": {
      "email": "rohit@successive.tech",
      "password": "Training@123"
    }
  },
  context: { dataSources },
  // expected result 
  expected: {
    "message": "Login Successfully",
    "status": "200",
    "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDdiM2MzN2ZhMTBlNjNmZTVhYmMyY2MiLCJlbWFpbCI6InJvaGl0QHN1Y2Nlc3NpdmUudGVjaCIsIm5hbWUiOiJSb2hpdCIsInBhc3N3b3JkIjoiJDJiJDEwJHQyVU0vQnR3dGx5eExXOFlNM1FDRi5hQS5HTFYzOENCWmNESEJ0RVNwbmNBMk5YYjNUSzVlIiwicm9sZSI6ImhlYWQtdHJhaW5lciIsImNyZWF0ZWRCeSI6IjVkN2IzYzM3ZmExMGU2M2ZlNWFiYzJjYyIsIm9yaWdpbmFsSWQiOiI1ZDdiM2MzN2ZhMTBlNjNmZTVhYmMyY2MiLCJjcmVhdGVkQXQiOiIyMDE5LTA5LTEzVDA2OjUwOjMxLjE3NVoiLCJ1cGRhdGVkQXQiOiIyMDE5LTA5LTEzVDA2OjUwOjMxLjE3NVoiLCJfX3YiOjAsImlhdCI6MTU2ODM2MjQyNiwiZXhwIjoxNTY4MzYzMzI2fQ.aARUEu2WCOxiCXnXUesGzfzvXEh9ndPVHu72Fdmcd2s"
  },
  queryName: 'loginUser',
}
describe('My Test Cases', () => {
  const cases = [userLoginTestCase]
  cases.forEach(({ id, query, variables, context, expected, queryName }) => {
    const executableSchema = makeExecutableSchema(schema);
    test(`query: ${id}`, async () => {
      const result = await graphql(executableSchema, query, null, context, variables)
      console.log('>>>>>>>>>>>>>', result.data);
      return expect(result.data[queryName]).toEqual(expected)
    })
  })
})