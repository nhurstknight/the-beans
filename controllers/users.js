const User = require('../models/user')
const { notFound, forbidden } = require('../lib/errorMessage')

async function getAllUsers(req, res) {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (err) {
    res.status(404).json({ message: 'Not Found' })
  }
}

async function getSingleUser(req, res) {
  try {
    const users = await User.findById(req.params.id)
    if (!users) throw new Error()
    res.status(200).json(users)
  } catch (err) {
    res.status(404).json({ message: 'Not Found' })
  }
}


// async function editAddress(req, res, next) {
//   try {
//     const addressToEdit = await User.findById(req.params.id)
//     console.log(addressToEdit)
//     if (!addressToEdit) throw new Error(notFound)
//     if (!addressToEdit.owner.equals(req.currentUser.id)) throw new Error(forbidden)
//     Object.profileSettings.assign(addressToEdit, req.body)
//     await addressToEdit.save()
//     res.status(202).json(addressToEdit)
//   } catch (err) {
//     next(err)
//   }
// }



module.exports = {
  index: getAllUsers,
  show: getSingleUser
}
// editAddress: editAddress
