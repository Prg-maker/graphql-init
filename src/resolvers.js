const {prismaClient} = require('./prisma/index')



module.exports = {
  Query:{
    users: () => prismaClient.user.findMany()
  },

  Mutation: {
    createUser:async ( _ , {name , email }) => await prismaClient.user.create({
      data:{
        name,
        email
      }
    })
  }
}