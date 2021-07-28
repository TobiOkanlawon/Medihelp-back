const express = require('express');
const path = require('path')

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
app.use(express.static(path.join(__dirname, '/SPA/static/SPA')))
server.applyMiddleware({app})

app.get('/', function(req, res){
    const options = {
      root: path.join(__dirname)
    }
      res.sendFile('./templates/index.html', options, function(err){
        if(err){
          next(err);
        } else {
          console.log('/')
        }
      })
  })

app.listen({port: process.env.PORT || 4000}, ()=>{
    console.log(`Server is running!${server.graphqlPath}`)
})