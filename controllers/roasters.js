const Roasters = require('../models/roaster')

// * Index GET /roasters
async function roasterIndex (_req, res) {
  try {
    const roasters = await Roasters.find()
    if (!roasters) throw new Error()
    res.status(200).json(roasters)
  } catch (err) {
    res.status(404).json('Roasters not found')
  }
}

// * Show single roaster GET /roasters/id
async function roasterShow (req, res) {
  try {
    const roaster = await Roasters.findById(req.params.id)
    if (!roaster) throw new Error()
    res.status(200).json(roaster)
  } catch (err) {
    res.status(404).json('Roasters not found')
  }
}

// * Create POST /roasters
async function roastersCreate(req, res) {
  try {
    const newRoaster = await Roasters.create(req.body)
    if (!newRoaster) throw new Error()
    res.status(201).json(newRoaster)
  } catch (err) {
    res.status(404).json('Roasters not found')
  }
}


module.exports = {
  index: roasterIndex,
  show: roasterShow,
  create: roastersCreate
}
