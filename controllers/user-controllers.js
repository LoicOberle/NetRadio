const express  = require('express');

const bdd = require("../utils/DBclients");

DOMParser = require('xmldom').DOMParser;

exports.login = async(req, res, next) => {
    res.render('containers/login')
}

exports.validLogin = async (req, res, next) => {
    const username = req.query.username;
    const password = req.query.password;

    console.log("ValidLogin + ", username);
    console.log("ValidLogin + ", password);

    try {
        // let sqlSignIn = await bdd.query("SELECT * FROM ")
    } catch(err) {
        res.send(err);
    }

    res.redirect('/');
}

exports.register = async(req, res, next) => {
    res.render('containers/register')
}

exports.validRegister = async(req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    const passwordConfirm = req.body.passwordConfirm;
    const mail = req.body.mail;

    console.log(username);
    console.log(password);
    console.log(passwordConfirm);
    console.log(mail);

    res.redirect('/login');
}

exports.userLive = async (req, res, next) => {
    let username = req.params.username;

    res.render('containers/announcerLive', {
        presentator: username, 
        liveTitle: 'Overwatch un dead game ?',
        LivePresentation : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dolor ac massa lobortis dignissim. Duis dictum tristique est non varius. Proin sodales aliquet felis, eu tempus dolor faucibus id. Vivamus vitae dui ut eros posuere gravida. Quisque arcu sem, luctus sit amet eros et, placerat iaculis tortor. Duis sed nunc nec justo posuere eleifend vel viverra turpis. Morbi arcu dolor, maximus euismod mi sit amet, accumsan congue est. Sed malesuada hendrerit magna, a pulvinar sem dapibus in. Pellentesque fermentum arcu id est posuere, sit amet consequat purus pulvinar. Donec non ligula tristique, ullamcorper enim non, vestibulum dui.',
        jsFile: "../../js"
    })
}

exports.profil = async(req, res, next) => {
    
    res.render('containers/updateAuditor', {
        pseudo: "Keduma", 
        mail: "Keduma@gmail.com",
        password : "keduma123"
    });
}

exports.makeLive = async(req, res, next) => {
    
    res.render('containers/createLive');
}