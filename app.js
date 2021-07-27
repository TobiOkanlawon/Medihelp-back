const express = require('express');

const {ApolloServer} = require('apollo-server-express');

const { getUserId } = require('./utils')

const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')

const typeDefs = require('./schema')
const models = require('./models')


const resolvers = {
    Mutation,
    Query
}


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        return {
            ...req,
            models,
            userId: req && req.headers.authorization 
                    ? getUserId(req)
                    : null
        }
    }
});

const app = express();
server.applyMiddleware({app})

app.listen({port: 4000}, ()=>{
    console.log(`Server is running!${server.graphqlPath}`)
})