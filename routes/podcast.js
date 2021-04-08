const express = require('express');
const router  = express.Router();

const podcastControllers = require('../controllers/podcast-controllers');

router.get('/', podcastControllers.index);
router.get('/podcastList', (req, res) => {
    console.log('giving podcast List');
    var files = fs.readdirSync('./public/podcasts');
    res.json(files)
})
module.exports = router;