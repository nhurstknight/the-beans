const Beans = require('../models/beans')


// // * Index GET /beans
// async function beanIndex (_req, res) {
//   try {
//     const beans = await Beans.find()
//     if (!beans) throw new Error()
//     res.status(200).json(beans)
//   } catch (err) {
//     res.status(404).json('Beans not found')
//   }
// }


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
  create: beansCreate
}