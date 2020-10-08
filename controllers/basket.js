const User = require('../models/user')
const { notFound } = require('../lib/errorMessage')
// GET get basket items  /basket
async function basketIndex(req, res, next) {
  try {
    const userBasket = await User.findById(req.currentUser._id)
      .populate('basket.product')
    // console.log(userBasket)
    if (!userBasket) throw new Error(notFound)
    res.status(200).json(userBasket)
  } catch (err) {
    next(err)
  }
}
// POST add item  /basket
async function basketCreate(req, res, next) {
  try {
    const userBasket = await User.findById(req.currentUser._id)
    console.log('user was ->', userBasket)
    const basketItem = { ...req.body }
    if (!userBasket) throw new Error(notFound)
    console.log('req params are', req.params)
    // if req.body._id ===
    userBasket.basket.push(basketItem)
    console.log('item was', basketItem)
    await userBasket.save()
    console.log('Saved')
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
// // PUT remmove item  /basket/basketItemId
// async function basketUpdate(req, res, next) {
//   try {
//     const userBasket = await User.findById(req.currentUser._id)
//     console.log('user was ->', userBasket)
//     const basketItem = { ...req.body }
//     if (!userBasket) throw new Error(notFound)
//     console.log('req params are', req.params)
//     // const removeBasketItem = userBasket.basket.id(req.params.id)
//     // console.log('item was', removeBasketItem)
//     // if (!removeBasketItem) throw new Error(notFound)
//     // console.log('This happened')
//     await userBasket.basket.remove(basketItem)
//     console.log('Removed item was', basketItem)
//     await userBasket.save()
//     console.log('Saved')
//     res.sendStatus(204)
//   } catch (err) {
//     next(err)
//   }
// }
// DELETE clear basket  /basket
async function basketDelete(req, res, next) {
  try {
    const userBasket = await User.findById(req.currentUser._id)
    if (!userBasket) throw new Error(notFound)
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