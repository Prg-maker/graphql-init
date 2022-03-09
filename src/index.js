const {GraphQLServer} = require('graphql-yoga')
const resolvers = require('./resolvers')
const path = require('path')


const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schemas' , 'schemas.graphql'),
  resolvers
})



server.start().then(() => console.log('server is running'))
