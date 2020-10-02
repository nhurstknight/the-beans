const User = require('../models/user')
// const jwt = require('jsonwebtoken')

//Register User  --/-- POST 
async function register(req, res) {
  try {
    const user = await User.create(req.body)
    res.status(201).json({ message: `Welcome ${user.username}` })
  } catch (err) {
    res.status(422).json(err)
  }
}

//Login User  --/-- POST 
async function login(req, res) {
  try {
    const user = await User.findOne({  email: req.body.email })
    if (!user || !user.validatePassword(req.body.password)) {
      throw new Error()
    }
    res.status(202).json({
      message: `Welcome back ${user.username}`
    })

  } catch (err) {
    res.status(401).json({ message: 'Unauthorized' })
  }

  

}





module.exports = {
  register,
  login
}