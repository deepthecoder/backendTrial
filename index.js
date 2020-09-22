const { ApolloServer, gql } = require('apollo-server');

const {resolvers}=require("./resolvers");

const typeDefs = gql`

  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book],
    name:String
  }
`;


const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
