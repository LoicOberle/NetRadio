const express = require('express');
const router  = express.Router();

const userControllers = require('../controllers/user-controllers');

router.get('/:username/live', userControllers.userLive);

router.get('/:username/profil', userControllers.profil);

//router.post('/:username/profil/valid', userControllers.profilValid);

router.get('/:username/makelive', userControllers.makeLive);

//router.post('/:username/makelive/valid', userControllers.makeLiveValid);



module.exports = router;