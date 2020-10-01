const Beans = require('../models/beans')


// * Index GET /beans
async function beanIndex (_req, res) {
  try {
    const beans = await Beans.find()
    if (!beans) throw new Error()
    res.status(200).json(beans)
  } catch (err) {
    res.status(404).json('Beans not found')
  }
}

// * Show single bean GET /beans/id
async function beanShow (req, res) {
  try {
    const bean = await Beans.findById(req.params.id)
    if (!bean) throw new Error()
    res.status(200).json(bean)
  } catch (err) {
    res.status(404).json('Bean not found')
  }
}


// * Create POST /beans
async function beansCreate(req, res) {
  try {
    const newBeans = await Beans.create(req.body)
    if (!newBeans) throw new Error()
    res.status(201).json(newBeans)
  } catch (err) {
    res.status(404).json('Beans not found')
  }
}

module.exports = {
  index: beanIndex,
  show: beanShow,
  create: beansCreate
}