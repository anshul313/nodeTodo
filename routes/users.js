const express = require('express');
const router = express.Router();
const userscontroller = require('../controllers/userscontroller');
router.post('/add',userscontroller.addtask);
router.post('/delete',userscontroller.delete);



console.log('profile loaded');

module.exports = router;