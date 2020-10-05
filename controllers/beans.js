const Beans = require('../models/beans')
const { notFound } = require('../lib/errorMessage')


// * Index GET /beans
async function beanIndex (req, res, next) {
  try {
    const beans = await Beans.find(req.query)
    if (!beans) throw new Error(notFound)
    res.status(200).json(beans)
  } catch (err) {
    next(err)
  }
}

// * Show single bean GET /beans/id
async function beanShow (req, res, next) {
  try {
    const bean = await Beans.findById(req.params.id)
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

module.exports = {
  index: beanIndex,
  show: beanShow,
  create: beansCreate
}