const router = require('express').Router()
const beans = require('../controllers/beans')

router.route('/beans')
  .post(beans.create)


  

module.exports = router