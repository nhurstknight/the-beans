const User = require('../models/user')

async function getAllUsers(req, res) {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (err) {
    res.status(404).json({ message: 'Not Found' })
  }
}

module.exports = {
  index: getAllUsers
}
