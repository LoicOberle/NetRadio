const express  = require('express');

DOMParser = require('xmldom').DOMParser;

exports.live = async(req, res, next) => {

    res.render('containers/directLive', {
        announcer: 'KEDUMA',
        liveTitle: 'Overwatch un dead Game ?',
        LivePresentation : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dolor ac massa lobortis dignissim. Duis dictum tristique est non varius. Proin sodales aliquet felis, eu tempus dolor faucibus id. Vivamus vitae dui ut eros posuere gravida. Quisque arcu sem, luctus sit amet eros et, placerat iaculis tortor. Duis sed nunc nec justo posuere eleifend vel viverra turpis. Morbi arcu dolor, maximus euismod mi sit amet, accumsan congue est. Sed malesuada hendrerit magna, a pulvinar sem dapibus in. Pellentesque fermentum arcu id est posuere, sit amet consequat purus pulvinar. Donec non ligula tristique, ullamcorper enim non, vestibulum dui.',
        horaire: '14h00 - 20h00'
    })
}