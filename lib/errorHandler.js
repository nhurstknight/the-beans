const {
  validationError,
  castError, 
  notFound,
  unauthorized,
  forbidden
} = require('./errorMessage')

function errorHandler(err, _req, res, next) {
  console.log('errorHandler message ====>', err.message)
  if (err.name === validationError) {
    const customErrors = {}

    for (const key in err.errors) {
      customErrors[key] = err.errors[key].message
    }
    return res.status(422).json({
      message: 'Form Validation Error',
      errors: customErrors
    })
  }
  if (err.message === notFound || err.name === castError) {
    return res.status(404).json({ message: 'Not found' })
  }
  if (err.message === unauthorized) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  if (err.message === forbidden) {
    return res.status(403).json({ message: 'Forbidden' })
  }
  res.sendStatus(500)
  next(err)
}

module.exports = errorHandler