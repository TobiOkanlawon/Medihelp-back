const {gql} = require('apollo-server-express');


const typeDefs = gql`
type Query {
    student(clinicID: String!): [Student!]!
}

type Mutation {
    createDoctor(email: String!, firstName: String!, lastName: String!): Doctor!
    createStudent(firstName: String!, clinicID: String!): Student!
    createPharmacist(email: String!, firstName: String!, lastName: String!): Pharmacist!
}

type Student {
    firstName: String!,
    lastName: String!,
    clinicID: String!,
},

type Doctor {
    email: String!,
    firstName: String!,
    lastName: String!
}

type Pharmacist {
    email: String!,
    firstName: String!,
    lastName: String!,
}

type Receptionist {
    email: String!,
    firstName: String!,
    lastName: String!,
}
`

module.exports = typeDefs