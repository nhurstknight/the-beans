const Beans = require('../models/beans')
const { notFound, forbidden } = require('../lib/errorMessage')


// * Index GET /beans
async function beanIndex(req, res, next) {
  try {
    const beans = await Beans.find(req.query)
    if (!beans) throw new Error(notFound)
    res.status(200).json(beans)
  } catch (err) {
    next(err)
  }
}

// * Show single bean GET /beans/id
async function beanShow(req, res, next) {
  try {
    const bean = await Beans.findById(req.params.id).populate('owner').populate('comments.owner')
    if (!bean) throw new Error(notFound)
    res.status(200).json(bean)
  } catch (err) {
    next(err)
  }
}


// * Create POST /beans
async function beansCreate(req, res, next) {
  try {
    const newBeans = await Beans.create(req.body)
    if (!newBeans) throw new Error(notFound)
    res.status(201).json(newBeans)
  } catch (err) {
    next(err)
  }
}

// * POST /beans/beansId/comments
async function beansCommentCreate(req, res, next) {
  try {
    const bean = await Beans.findById(req.params.id)
    if (!bean) throw new Error(notFound)
    const comment = { ...req.body, owner: req.currentUser._id }
    bean.comments.push(comment)
    await bean.save()
    res.status(201).json(bean)
  } catch (err) {
    next(err)
  }
}

// * DELETE /beans/beansId/comments/commentId
async function beansCommentDelete(req, res, next) {
  try {
    const bean = await Beans.findById(req.params.id)
    if (!bean) throw new Error(notFound)
    const commentToDelete = bean.comments.id(req.params.commentId)
    if (!commentToDelete) throw new Error(notFound)
    if (!commentToDelete.owner.equals(req.currentUser._id)) throw new Error(forbidden)
    await commentToDelete.remove()
    await bean.save()
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}


module.exports = {
  index: beanIndex,
  show: beanShow,
  create: beansCreate,

  commentCreate: beansCommentCreate,
  commentDelete: beansCommentDelete
}