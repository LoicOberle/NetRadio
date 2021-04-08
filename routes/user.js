const express = require('express');
const router  = express.Router();

var fs = require('fs');
const userControllers = require('../controllers/user-controllers');

router.get('/:username/live', userControllers.userLive);


router.get('/songList', (req, res) => {
    console.log('giving soundList');
    var files = fs.readdirSync('./public/sounds');
    res.json(files)
})

router.get('/:username/profil', userControllers.profil);

//router.post('/:username/profil/valid', userControllers.profilValid);

router.get('/:username/makelive', userControllers.makeLive);

router.post('/:username/makelive/valid', userControllers.makeLiveValid);




router.get("/podcastList", (req, res) => {
     console.log('giving podcast List');
    var files = fs.readdirSync('./public/podcasts');
    res.json(files)
})
module.exports = router;