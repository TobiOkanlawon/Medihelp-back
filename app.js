const express = require('express');

const {ApolloServer} = require('apollo-server-express');
const {Doctor, Student, Pharmacist} = require('./models');

const typeDefs = require('./schema')

const {sequelize} = require('./db')



const resolvers = {
    Query: {
            student: (parent, {clinicID}) => {
                console.log(clinicID)
                return [{name: 'Praise Adebayo', clinicID: clinicID}]
            }
    },
    Mutation: {
        createDoctor: async function (parent, {name, email}){
                await sequelize.sync();
                const doctor = await Doctor.create({
                  name, email
                });
                return doctor.toJSON();
        },
        createStudent: async function (parent, {clinicID, name}){
            await sequelize.sync();
            const student = await Student.create({
                name, clinicID
            })
            return student.toJSON()
        },
        createPharmacist: async function (parent, {name, email}){
            await sequelize.sync();
            const pharmacist = await Pharmacist.create({
                name, email
            })
            return pharmacist.toJSON()
        }
    },
    Student: {
        name: (parent) => parent.name,
        clinicID: (parent) => parent.clinicID,
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const app = express();
server.applyMiddleware({app})

app.listen({port: 4000}, ()=>{
    console.log(`Server is running!${server.graphqlPath}`)
})

async function testDB(){

    try {
        await sequelize.authenticate();
        console.log('Connection established successfully');
    } catch(error) {
        console.error('Unable to connect to db:', error)
    }
}

testDB()