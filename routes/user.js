const express = require('express');
const router  = express.Router();

const userControllers = require('../controllers/user-controllers');

router.get('/:username/live', userControllers.userLive);

router.get('/:username/profil', userControllers.profil);

//router.post('/:username/profil/valid', userControllers.profilValid);

module.exports = router;