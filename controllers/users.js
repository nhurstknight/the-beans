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

async function accountEdit (req, res, next) {
  try {
    const accountToEdit = await User.findById(req.currentUser._id)
    // if (!accountToEdit) throw new Error(notFound)
    // if (!accountToEdit.Owner.equals(req.accountToEdit._id)) throw new Error(forbidden)
    Object.assign(accountToEdit, req.body)
    await accountToEdit.save()
    res.status(202).json(accountToEdit)
  } catch (err) {
    next(err)
  }
}

// POST - ADD ADDRESS DETAILS 
async function checkOutEdit(req, res, next) {
  try {
    const addressToEdit = await User.findById(req.currentUser._id)
    console.log('user was ->', addressToEdit)
    const addressDetails = { ...req.body }
    if (!addressToEdit) throw new Error(notFound)
    console.log('req params are', req.params)
    addressToEdit.addressDetails.push(addressDetails)
    console.log('item was', addressDetails)
    await addressToEdit.save()
    console.log('Saved')
    res.status(201).json(addressToEdit)

  } catch (err) {
    next(err)
  }
}

//GET - ADDRESS DETAILS
async function addressDetails(req, res, next) {
  try {
    const userAddress = await User.findById(req.currentUser._id)
      .populate('addressDetails') // returns null
    console.log(userAddress)
    if (!userAddress) throw new Error(notFound)
    res.status(200).json(userAddress)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  index: getAllUsers,
  show: getSingleUser,
  update1: accountEdit,
  update2: checkOutEdit,
  addressDetails: addressDetails
}
// editAddress: editAddress
