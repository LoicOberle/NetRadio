const express = require('express');
const router  = express.Router();

const userControllers = require('../controllers/user-controllers');

router.get('/', userControllers.login);

router.get('/valid', userControllers.validLogin);


module.exports = router;