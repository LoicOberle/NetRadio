const express = require('express');
const router  = express.Router();

const liveControllers = require('../controllers/live-controllers');

router.get('/', liveControllers.live);


module.exports = router;