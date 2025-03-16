const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

// Define TaskType
const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString }
  }
});

// Define RootQuery
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    task: {
      type: TaskType,
      args: { id: { type: GraphQLString } }, // Accepts an ID as an argument
      resolve(parent, args) {
        // Placeholder function: replace this with actual database logic
        return {
          id: args.id,
          title: 'Sample Task',
          weight: 5,
          description: 'This is a sample task'
        };
      }
    }
  }
});

// Export GraphQL schema
module.exports = new GraphQLSchema({
  query: RootQuery
});
