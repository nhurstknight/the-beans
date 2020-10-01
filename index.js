const express = require('express')
const mongoose = require('mongoose')
const app = express()
const logger = require('./lib/logger')
const { dbURI, port } = require('./config/environment')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('Mongo is Connected 🐘')
  }
)

app.use(logger)

app.listen(port, () => console.log(`Listening on localhost:${port} 🤖`))