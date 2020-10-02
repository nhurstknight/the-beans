const mongoose = require('mongoose')

const beanSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  price: [{ type: Number, required: true }],
  weight: [{ type: Number, required: true }],
  origin: { type: String, required: true },
  roast: { type: String, required: true },
  tastingNotes: [{ type: String, required: true }],
  fairTrade: { type: Boolean, required: true },
  roaster: { type: String, required: true }
})



module.exports = mongoose.model('Beans', beanSchema)