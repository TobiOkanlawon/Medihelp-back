const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main(){ 
    const allStudents = await prisma.student.findMany()
    console.log(allStudents) 
}

main()
    .catch((e) => {
        throw e
    })
    .finally( async () =>{
        await prisma.$disconnect()
    })