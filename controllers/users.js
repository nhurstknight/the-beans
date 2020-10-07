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

async function accountEdit (req, res, next) {
  try {
    const accountToEdit = await User.findById(req.params.id)
    console.log(accountToEdit)
    // if (!accountToEdit) throw new Error(notFound)
    // if (!accountToEdit.owner.equals(req.accountToEdit._id)) throw new Error(forbidden)
    console.log('here')
    Object.assign(accountToEdit, req.body)
    await accountToEdit.save()
    res.status(202).json(accountToEdit)
  } catch (err) {
    next(err)
  }
}


module.exports = {
  index: getAllUsers,
  show: getSingleUser,
  update: accountEdit
}
// editAddress: editAddress
