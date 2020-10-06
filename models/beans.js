const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 325 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
},{
  timestamps: true
})

const beanSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  price: [{ type: Number, required: true }],
  weight: [{ type: Number, required: true }],
  origin: { type: String, required: true },
  roast: { type: String, required: true },
  tastingNotes: [{ type: String, required: true }],
  fairTrade: { type: Boolean, required: true },
  roaster: { type: String, required: true },
  comments: [commentSchema]
})

beanSchema 
  .virtual('avgRating')
  .get(function (){
    if (!this.comments.length) return 'Not yet rated'

    return Math.round(this.comments.reduce((sum, curr) => {
      return sum + curr.rating
    }, 0) / this.comments.length)
  })

beanSchema.set('toJSON', { virtuals: true })


module.exports = mongoose.model('Beans', beanSchema)