const mongoose = require('mongoose')

const roasterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String, required: true },
  bio: { type: String, required: true },
  hasCoffeeShop: { type: Boolean, required: true },
  coffeeShopLocation: [{ type: String, required: false }]
})




module.exports = mongoose.model('Roasters', roasterSchema)