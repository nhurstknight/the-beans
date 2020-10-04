const Roasters = require('../models/roaster')
const Beans = require('../models/beans')
const { notFound } = require('../lib/errorMessage')

// * Index GET /roasters
async function roasterIndex (_req, res, next) {
  try {
    const roasters = await Roasters.find()
    if (!roasters) throw new Error()
    res.status(200).json(roasters)
  } catch (err) {
    next(err)
  }
}

// * Show single roaster GET /roasters/id
async function roasterShow (req, res, next) {
  try {
    const roaster = await Roasters.findById(req.params.id)
    if (!roaster) throw new Error(notFound)
    res.status(200).json(roaster)
  } catch (err) {
    next(err)
  }
}

// * Create POST /roasters
async function roastersCreate(req, res, next) {
  try {
    const newRoaster = await Roasters.create(req.body)
    if (!newRoaster) throw new Error(notFound)
    res.status(201).json(newRoaster)
  } catch (err) {
    next(err)
  }
}

// * Index FILTER (ROASTER PRODUCTS) GET /beans/filter
async function beansFilter (req, res, next) {
  try {
    console.log('here')
    const beans = await Beans.find(req.query)
    if (!beans) throw new Error(notFound)
    res.status(200).json(beans)
  } catch (err) {
    next(err)
  }
}


module.exports = {
  index: roasterIndex,
  show: roasterShow,
  create: roastersCreate,
  filter: beansFilter
}
