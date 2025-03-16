const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const TaskType = require('./schema/schema'); // Import the schema

// Define a RootQuery for GraphQL
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    task: {
      type: TaskType,
      resolve() {
        return {
          id: '1',
          title: 'Sample Task',
          weight: 5,
          description: 'This is a sample task'
        };
      }
    }
  }
});

// Create a GraphQL Schema
const schema = new GraphQLSchema({
  query: RootQuery
});

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema, // Pass the schema here
  graphiql: true  // Enable GraphiQL for testing
}));

app.listen(4000, () => {
  console.log('Now listening for requests on port 4000');
});
