# Introduction
>GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015.

# what is GraphQL
> GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.

A GraphQL service is created by defining types and fields on those types, then providing functions for each field on each type. For example, a GraphQL service that tells us who the logged in user is (me) as well as that user's name might look something like this.

>type Query {
  me: User
}
>type User {
  id: ID
  name: String
}

![graphQl](image/graphql-execution-engine.png)

### Why GraphQL
RESTful APIs follow clear and well-structured resource-oriented approach. However, when the data gets more complex, the routes get longer. Sometimes it is not possible to fetch data with a single request. This is where GraphQL comes handy. GraphQL structures data in the form of a graph with its powerful query syntax for traversing, retrieving, and modifying data. 


###GraphQL Schema

A GraphQL schema is at the core of any GraphQL server implementation. It describes the functionality available to the client applications that connect to it. We can use any programming language to create a GraphQL schema and build an interface around it.

The GraphQL runtime defines a generic graph-based schema to publish the capabilities of the data service it represents. Client applications can query the schema within its capabilities. This approach decouples clients from servers and allows both to evolve and scale independently.

To know More  *[GraphQL Schema Guide](https://graphql.org/learn/schema/)*



###### Type system 
 GraphQL query language is basically about selecting fields on objects. So, for example, in the following query:

>{
  hero {
    name
    appearsIn
  }
}
1. We start with a special "root" object
2. We select the hero field on that
3. For the object returned by hero, we select the name and appearsIn fields

###### Object types and fields
The most basic components of a GraphQL schema are object types, which just represent a kind of object you can fetch from your service, and what fields it has. In the GraphQL schema language, we might represent it like this:

>type Character {
  name: String!
  appearsIn: [Episode!]!
}

### Resolver
Resolver is a collection of functions that generate response for a GraphQL query. In simple terms, a resolver acts as a GraphQL query handler. Every resolver function in a GraphQL schema accepts four positional arguments as given below −
>fieldName:(root, args, context, info) => { result }