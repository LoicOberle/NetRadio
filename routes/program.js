const express = require('express');
const router  = express.Router();

const programControllers = require('../controllers/program-controllers');

router.get('/', programControllers.index);

module.exports = router;