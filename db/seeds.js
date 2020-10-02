const mongoose = require('mongoose')

const { dbURI } = require('../config/environment')
const Beans = require('../models/beans')
const Roasters = require('../models/roaster')
const beansData = require('./data/beans')
const roasterData = require('./data/roasters')

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

      console.log(` ☕️ ${beans.length} products created ☕️`)

      console.log(` ☕️ ${roasters.length} roasters created ☕️`)

    } catch (err) {
      console.log(err) // Any error? Log it
    }
    console.log('Goodbye')
    await mongoose.connection.close()
  })