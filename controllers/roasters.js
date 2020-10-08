const Roasters = require('../models/roaster')
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

module.exports = {
  index: roasterIndex,
  show: roasterShow,
  create: roastersCreate
}
