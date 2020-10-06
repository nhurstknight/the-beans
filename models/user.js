const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const basketItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.ObjectId, ref: 'Beans', required: true },
  quantity: { type: Number, default: 1, min: 1 }
})

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, maxlength: 50, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  profileImage: { type: String, required: false },
  password: { type: String, required: true },
  basket: [basketItemSchema]
})




//// PASSWORD CONFIRMATION/ENCRYPTION ////

// Delete JSON Version of Password
userSchema
  .set('toJSON', {
    virtuals: true,
    transform(doc, json) {
      delete json.password
      return json
    }
  })

//Create Virtual Section in userSchema
userSchema 
  .virtual('passwordConfirmation')
  .set(function (passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

//Compare Virtual password against real inputted password
userSchema
  .pre('validate', function(next) {
    if (this.isModified('password') && this.password !== this._passwordConfirmation) {
      this.invalidate('passwordConfirmation', 'does not match')
    }
    next()
  })

//Encrypt Password
userSchema
  .pre('save', function(next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
    }
    next()
  })

// LOGIN VALIDATE PASSWORD
userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

//------------------------------------------------//




userSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('User', userSchema)