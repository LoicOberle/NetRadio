const express = require('express');
const router  = express.Router();

const userControllers = require('../controllers/user-controllers');

router.get('/', userControllers.register);

router.post('/valid', userControllers.validRegister);



module.exports = router;