const student = async (parent, {clinicID}, {models}) => {
    const student = await models.Student.findOne({
        where: {
            clinicID: clinicID
        }
    })
    return student;
}

const allStudents = async (parent, args, {models}) => {
    const allStudents = await models.Student.findAll()
    return allStudents;
}

const getDrugList = async (parent, args, {models}) => {
    // const drugList = await models.Drugs.findAll()
    // return drugList;

    return [{
        id: '1',
        student: {
            firstName: 'Praise',
            lastName: 'Adebayo',
            clinicID: '12345',
        },
        drug: {
            name: 'Panadol',
            instructions: 'Just don\'t overdose' 
        }
    }]
}

module.exports = {
    student,
    allStudents,
    getDrugList
}