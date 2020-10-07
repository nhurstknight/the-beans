const User = require('../models/user')
const { notFound } = require('../lib/errorMessage')

// GET
async function basketIndex(req, res, next) {
  try {
    const userBasket = await User.findById(req.currentUser._id)
    console.log(userBasket)
    if (!userBasket) throw new Error(notFound)
    res.status(200).json(userBasket)
  } catch (err) {
    next(err)
  }
}

// POST
async function basketCreate(req, res, next) {
  try {
    const userBasket = await User.findById(req.currentUser._id)
    const basketItem = { ...req.body }
    if (!userBasket) throw new Error(notFound)

    // if req.body._id ===
    userBasket.basket.push(basketItem)
    await userBasket.save()
    res.status(201).json(userBasket)

  } catch (err) {
    next(err)
  }
}

// PUT /basket/basketItemId
async function basketUpdate(req, res, next) {
  try {
    const userBasket = await User.findById(req.currentUser._id)
    if (!userBasket) throw new Error(notFound)

    const removeBasketItem = userBasket.basket.id(req.params.basketItemId)
    if (!removeBasketItem) throw new Error(notFound)

    await removeBasketItem.remove()
    await userBasket.save()
    res.sendStatus(204)

  } catch (err) {
    next(err)
  }
}

// DELETE /basket
async function basketDelete(req, res, next) {
  try {
    const userBasket = await User.findById(req.currentUser._id)
    console.log('user was ->', userBasket)
    if (!userBasket) throw new Error(notFound)
    console.log('req params are', req.params)

    userBasket.basket = []

    await userBasket.save()
    console.log('Saved')
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  index: basketIndex,
  create: basketCreate,
  update: basketUpdate,
  delete: basketDelete
}