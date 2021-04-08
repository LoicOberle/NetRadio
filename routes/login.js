const express = require('express');

const router  = express.Router();

const userControllers = require('../controllers/user-controllers');

router.get('/', userControllers.login);

router.post('/valid/:username', userControllers.validLogin);


module.exports = router;