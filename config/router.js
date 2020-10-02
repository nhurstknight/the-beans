const router = require('express').Router()
const beans = require('../controllers/beans')
const roasters = require('../controllers/roasters')
const auth = require('../controllers/auth')

router.route('/beans')
  .post(beans.create)
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