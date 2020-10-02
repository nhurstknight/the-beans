const mongoose = require('mongoose')
const faker = require('faker')

const { dbURI } = require('../config/environment')
const Beans = require('../models/beans')
const Roasters = require('../models/roaster')
const Users = require('../models/user')
const beansData = require('./data/beans')
const roasterData = require('./data/roasters')
const userData = require('./data/users')


mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  async (err) => {
    if (err) { // Any Error? Log it
      console.log(err)
      return
    }
    try {
      await mongoose.connection.db.dropDatabase()//Delete Prior Database

      console.log('Database Dropped 💧')

      const beans = await Beans.create(beansData)
      const roasters = await Roasters.create(roasterData)
      const users = await Users.create(userData)

      for (let index = 0; index < 100; index++) { // ! looping to created 300 users
        const username = faker.internet.userName() // ! generating a fake username
        const firstName = faker.name.firstName() // ! A fake first name
        const lastName = faker.name.lastName() // ! A fake last name
        const email = `${firstName}${lastName}@email.com` // ! concatening them together to make the email
        const profileImage = faker.image.avatar() // ! and a fake profile image
        users.push({
          username,
          firstName,
          lastName,
          email,
          profileImage,
          password: 'pass', // ! setting all the passwords the same
          passwordConfirmation: 'pass'
        })
      }

      const createdUsers = await Users.create(users)
  

      console.log(` ☕️ ${beans.length} products created ☕️`)
      console.log(` ☕️ ${roasters.length} roasters created ☕️`)
      console.log(` ☕️ ${createdUsers.length} users created ☕️`)

    } catch (err) {
      console.log(err) // Any error? Log it
    }
    console.log('Goodbye')
    await mongoose.connection.close()
  })