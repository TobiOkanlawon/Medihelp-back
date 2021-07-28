const {gql} = require('apollo-server-express');

const typeDefs = gql`
type Query {
    student(clinicID: String!): Student
    allStudents: [Student]
    getDrugList: [Prescription!]!
}

type Mutation {
    createDoctor(email: String!, firstName: String!, lastName: String!, password:String!): AuthPayloadStaff
    createStudent(firstName: String!, lastName: String!, clinicID: String!, email: String!, password:String!, gender:GenderInput, DOB:DOBInput): AuthPayloadStudent
    createPharmacist(email: String!, firstName: String!, lastName: String!, password:String!): AuthPayloadStaff
    createReceptionist(email: String!, firstName: String!, lastName: String!, password:String!): AuthPayloadStaff
    createAppointment(clinicID: String!): Status!
    createRecord(clinicID: String!, doctorEmail: String, date: DOBInput): Record!
    setAppointment(clinicID: String!, day: Int!, month: Int!, year: Int!, hour: Int!, minute: Int!): Status!
    loginDoctor(email: String!, password: String!): AuthPayloadStaff
    loginPharmacist(email: String!, password: String!): AuthPayloadStaff
    loginReceptionist(email: String!, password: String!): AuthPayloadStaff
    loginStudent(clinicID: String!, password: String): AuthPayloadStudent
}

type Student {
    firstName: String,
    lastName: String,
    clinicID: String,
    email: String,
    gender: Gender,
    DOB: Date,
},

type Staff {
    email: String,
    firstName: String,
    lastName: String
}

type Doctor {
    email: String,
    firstName: String,
    lastName: String
}

type Pharmacist {
    email: String,
    firstName: String,
    lastName: String,
}

type Receptionist {
    email: String,
    firstName: String,
    lastName: String,
}

type Status {
    status: Statuses,
}

type Appointment {
    student: Student,
    date: Date,
    time: Time
}

type Record {
    fiels: [Field],
    date: Date!,
    doctorEmail: String, 
}

type Field {
    name: String,
    information: String,
}

type Date {
    day: Int!,
    month: Int!,
    year: Int!
}

type Time {
    hour: Int!,
    minute: Int!
}

type AuthPayloadStaff {
    token: String,
    user: Staff
}

type AuthPayloadStudent {
    token: String,
    user: Student
}

type Prescription {
    id: String,
    student: Student
    drug: Drug
}

type Drug {
    name: String
    instructions: String 
}

enum Gender {
    MALE
    FEMALE
}

enum Statuses {
    DONE
    FAILED
}

input GenderInput {
    gender: Gender
}

input DOBInput{
    day: Int!,
    month: Int!,
    year: Int!
}
`

module.exports = typeDefs