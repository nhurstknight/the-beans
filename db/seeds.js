const mongoose = require('mongoose')

const { dbURI } = require('../config/environment')
const Beans = require('../models/beans')
const beansData = require('./data/beans')

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

      console.log(` ☕️ ${beans.length} products created ☕️`)

    } catch (err) {
      console.log(err) // Any error? Log it
    }
    console.log('goodbye')
    await mongoose.connection.close()
  })