const express = require('express');
const router  = express.Router();

const userControllers = require('../controllers/user-controllers');

router.get('/:username/live', userControllers.userLive);

router.get('/songList', (req, res) => {
    console.log('giving soundList');
    var files = fs.readdirSync('./public/sounds');
    res.json(files)
})

router.get("/podcastList", (req, res) => {
     console.log('giving podcast List');
    var files = fs.readdirSync('./public/podcasts');
    res.json(files)
})
module.exports = router;