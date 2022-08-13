const { ApolloServer } = require('apollo-server');

const { Query, Product, Category, Review, Mutation } = require('./lib/resolvers');
const typeDefs = require('./lib/schema');
const db = require('./lib/mocks');

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query, Product, Category, Review, Mutation 
  },
  context: {
    db
  }
});

server.listen().then(({ url }) => {
  console.log(`server running at ${url}`)
})