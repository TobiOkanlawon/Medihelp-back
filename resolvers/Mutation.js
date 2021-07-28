const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET } = require('../utils')


const createDoctor = async function (parent, {firstName, lastName, email, password}, {models}){
    const doctor = await models.Doctor.create({
        firstName, lastName, email, password: await bcrypt.hash(password, 10)
    })

    const token = jwt.sign({userId: doctor.id}, APP_SECRET)
    return {token, user: doctor}
}

const createStudent = async function (parent, {clinicID, firstName, lastName, email, password, gender, DOB}, {models}){
    const student = await models.Student.create({
        firstName, lastName, clinicID, gender, DOB, email,
        password: await bcrypt.hash(password, 10)
    })

    console.log(student)

    const token = jwt.sign({userId: student.id}, APP_SECRET)
    return {token, user: student}
}

const createPharmacist = async function (parent, {firstName, lastName, email, password}, {models}){
    const pharmacist =  models.Pharmacist.create({
        firstName, lastName, email, password: bcrypt.hash(password, 10)
    })
    const token = jwt.sign({userId: pharmacist.id}, APP_SECRET)
    return {token, user: pharmacist}
}

const createReceptionist = async function (parent, {firstName, lastName, email, password}, {models}){
    const receptionist = models.Reception.create({
        firstName, lastName, email, password: bcrypt.hash(password, 10)
    })

    const token = jwt.sign({userId: receptionist.id}, APP_SECRET)
    return {token, user: receptionist}
}

const createRecord = async function (parent, {doctorEmail, date, clinicID}, {models}){
    const record = await models.Record.create({
        doctorEmail, date, clinicID
    })

    return record
}

const createAppointment = function (parent, args, context){
    return {status: 'DONE'}
}

const loginDoctor = async function(parent, {email, password}, {models}){
    const doctor = await models.Doctor.findOne({
        where: {
            email: email
        }
    })

    if(!doctor){
        throw new Error('No such error found')
    }

    const valid = await bcrypt.compare(password, doctor.password)
    if(!valid){
        throw new Error('Invalid Password')
    }

    const token = jwt.sign({userId: doctor.id}, APP_SECRET)

    return {token, user:doctor}
}


const loginStudent = async function(parent, {clinicID, password}, {models}){
    const student = await models.Student.findOne({
        where: {
            clinicID: clinicID
        }
    })

    if(!student){
        throw new Error('No such error found')
    }

    const valid = await bcrypt.compare(password, student.password)
    if(!valid){
        throw new Error('Invalid Password')
    }

    const token = jwt.sign({userId: student.id}, APP_SECRET)

    return {token, user:student}
}


const loginPharmacist = async function(parent, {email, password}, {models}){
    const pharmacist = await models.Pharmacist.findOne({
        where: {
            email: email
        }
    })

    if(!pharmacist){
        throw new Error('No such error found')
    }

    const valid = await bcrypt.compare(password, pharmacist.password)
    if(!valid){
        throw new Error('Invalid Password')
    }

    const token = jwt.sign({userId: pharmacist.id}, APP_SECRET)

    return {token, user:pharmacist}
}


const loginReceptionist = async function(parent, {email, password}, {models}){
    const receptionist = await models.Receptionist.findOne({
        where: {
            email: email
        }
    })

    if(!receptionist){
        throw new Error('No such error found')
    }

    const valid = await bcrypt.compare(password, receptionist.password)
    if(!valid){
        throw new Error('Invalid Password')
    }

    const token = jwt.sign({userId: receptionist.id}, APP_SECRET)

    return {token, user:receptionist}
}

module.exports = {
    createDoctor,
    createStudent,
    createPharmacist,
    createReceptionist,
    createRecord,
    createAppointment,
    loginDoctor,
    loginStudent,
    loginPharmacist,
    loginReceptionist
}