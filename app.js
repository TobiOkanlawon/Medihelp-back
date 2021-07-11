const express = require('express');

const {ApolloServer} = require('apollo-server-express');

const typeDefs = require('./schema')



const resolvers = {
    Query: {
            student: (parent, {clinicID}, context) => {
                console.log(clinicID)
                return [{name: 'Praise Adebayo', clinicID: clinicID}]
            }
    },
    Mutation: {
        createDoctor: async function (parent, {firstName, lastName, email}, context){
        },
        createStudent: async function (parent, {clinicID, firstName, lastName}, context){
        },
        createPharmacist: async function (parent, {firstName, lastName, email}, context){
        }
    },
    Student: {
        firstName: (parent) => parent.firstName,
        lastName: (parent) => parent.lastName,
        clinicID: (parent) => parent.clinicID,
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
    }
});

const app = express();
server.applyMiddleware({app})

app.listen({port: 4000}, ()=>{
    console.log(`Server is running!${server.graphqlPath}`)
})