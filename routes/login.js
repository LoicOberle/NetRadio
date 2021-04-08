const express = require('express');

const router  = express.Router();
const bodyparser = require("body-parser");
const userControllers = require('../controllers/user-controllers');
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extend: false}));
router.get('/', userControllers.login);

router.post('/valid', userControllers.validLogin);


module.exports = router;