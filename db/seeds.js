const mongoose = require('mongoose')

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

      console.log(` ☕️ ${beans.length} products created ☕️`)
      console.log(` ☕️ ${roasters.length} roasters created ☕️`)
      console.log(` ☕️ ${users.length} users created ☕️`)

    } catch (err) {
      console.log(err) // Any error? Log it
    }
    console.log('Goodbye')
    await mongoose.connection.close()
  })