const router = require('express').Router()
const beans = require('../controllers/beans')
const roasters = require('../controllers/roasters')
const auth = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

router.route('/beans')
  .post(secureRoute, beans.create) // UnusedFunction on the frontend
  .get(beans.index)

router.route('/beans/:id')
  .get(beans.show)

router.route('/roasters')
  .post(roasters.create)
  .get(roasters.index)

router.route('/roasters/:id')
  .get(roasters.show)

router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

  

module.exports = router