import { makeExecutableSchema } from 'graphql-tools'
import { graphql } from 'graphql'
import mockTraineeApi from './mockTraineeApi';
import schema from '../index';

const dataSources = {
  traineeApi: mockTraineeApi,
}
const traineeCreateTestCase = [{
  id: 'should trainee Create Successfully',
  query: ` mutation($traineeCreate:createInput){
    createTrainee(input:$traineeCreate){
      message
      status
      data{
        id
        name
        email
        role
        createdBy
        UpdatedBy
        originalId
      }
    }
  }`,
  variables: {
     "traineeCreate": {
      "name": "rohan",
      "email": "rohan@successive.tech",
      "password": "1234"
     }
  },
  context: { dataSources },
  // expected result 
  expected: {
    "message": "Trainee Created Successfully",
    "status": "200",
    "data": {
      "id": "5d7f245b566e401bc4584390",
      "name": "rohan",
      "email": "rohan@successive.tech",
      "role": "trainee",
      "createdBy": "5d7b3c37fa10e63fe5abc2cc",
      "UpdatedBy": null,
      "originalId": "5d7f245b566e401bc4584390"
    }
  },
  queryName: 'createTrainee',
},



{
  id: 'create with null name',
  query: ` mutation($traineeCreate:createInput){
    createTrainee(input:$traineeCreate){
      message
      status
      data{
        id
        name
        email
        role
        createdBy
        UpdatedBy
        originalId
      }
    }
  }`,
  variables: {
    "traineeCreate": {
      "name": "",
      "email": "rohan@successive.tech",
      "password": "1234"
    }
  },
  context: { dataSources },
  // expected result 
  expected: {
    "error":"Name cannot be empty"
  },
  queryName: 'errors',
}
]
describe('My Test Cases', () => {
  // array of all test cases
  const cases = traineeCreateTestCase
  // running the test for each case in the cases array
  cases.forEach(({ id, query, variables, context, expected, queryName }) => {
    const executableSchema = makeExecutableSchema(schema);
    test(`query: ${id}`, async () => {
      const result = await graphql(executableSchema, query, null, context, variables)
      console.log('>>>>>>>>>>>>>', result.data);
      if(result.errors){
        return expect(result.data.message[queryName]).toEqual(expected.error)
      }
     else{
      return expect(result.data[queryName]).toEqual(expected)
     }
    })
  })
})