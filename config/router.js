const router = require('express').Router()
const beans = require('../controllers/beans')
const basket = require('../controllers/basket')
const roasters = require('../controllers/roasters')
const auth = require('../controllers/auth')
const users = require('../controllers/users')
const secureRoute = require('../lib/secureRoute')


// PRODUCTS/BEANS
router.route('/beans')
  .post(secureRoute, beans.create) // UnusedFunction on the frontend
  .get(beans.index)

router.route('/beans/:id')
  .get(beans.show)

router.route('/beans/filter')
  .get(beans.index)

//BUSINESSES/ROASTERS
router.route('/roasters')
  .post(roasters.create)
  .get(roasters.index)

router.route('/roasters/:id')
  .get(roasters.show)

// BASKET
router.route('/basket')
  .get(secureRoute, basket.index)

router.route('/basket')
  .post(secureRoute, basket.create)

router.route('/basket/:basketItemId')
  .put(secureRoute, basket.update)

router.route('/basket')
  .delete(secureRoute, basket.delete)

// USERS 
router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

router.route('/users')
  .get(users.index)

router.route('/users/:id')
  .get(users.show)

module.exports = router