const express = require('express');
const router  = express.Router();

const userControllers = require('../controllers/user-controllers');

router.get('/:username/live', userControllers.userLive);


module.exports = router;