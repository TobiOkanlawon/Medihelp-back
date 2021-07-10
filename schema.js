const {gql} = require('apollo-server-express');


const typeDefs = gql`
type Query {
    student(clinicID: String!): [Student!]!
}

type Mutation {
    createDoctor(email: String!, name: String!): Doctor!
    createStudent(name: String!, clinicID: String!): Student!
    createPharmacist(email: String!, name: String!): Pharmacist!
}

type Student {
    name: String,
    clinicID: String,
},

type Doctor {
    email: String!,
    name: String!,
}

type Pharmacist {
    email: String!,
    name: String!,
}
`

module.exports = typeDefs