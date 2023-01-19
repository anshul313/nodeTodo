const express = require('express');
const router = express.Router();
const homecontroller = require('../controllers/homeController')

router.get('/',homecontroller.home)
router.use('/user',require('./users'));

console.log('router loaded')

module.exports = router;