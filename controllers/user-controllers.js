const express  = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const bdd = require("../utils/DBclients");

DOMParser = require('xmldom').DOMParser;

exports.login = async(req, res, next) => {
    res.render('containers/login')
}

exports.validLogin = async (req, res, next) => {
    const { username, password } = req.body;
    console.log(req.body);
    let existingUser;
    try {
        existingUser = await bdd.query("SELECT * FROM User WHERE pseudo = '" + username + "';");
    } catch(err) {
        /*const error = new HttpError(
            'Loggin in failed, please try again later.',
            500
        );*/
        return res.status(500).send({message:'Loggin in failed, please try again later.'});
    }

    if(!existingUser) {
       /* const error = new HttpError(
            'Invalid credentials, could not log you in.',
            403
        );
        */
        return res.status(403).send({ message: 'Invalid credentials, could not log you in.' })
    };
   // console.log(existingUser[0]);
    let isValidPassword;
    try {
        //isValidPassword = await bcrypt.compare(password, existingUser[0].password);
        isValidPassword=password==existingUser[0].password
    } catch (err) {
        console.log(err);
      //const error = new HttpError('Could not log you in', 500);
        //return res.send(error)
        return res.status(500).send({message:'Could not log you in'});
    }

    if (!isValidPassword) {
     /* const error = new HttpError(
        'Invalid credentials, could not log you in.',
        403
      );*/
      return res.status(403).send({message:'Invalid credentials, could not log you in.'});
    }
   
    let token;
    try {
        token = jwt.sign(
            {userId: existingUser[0].id, email: existingUser[0].email},
            process.env.JWT_KEY,
            {expiresIn: '1h'}
        );
    } catch (err) {
       
       /* const error = new HttpError(
        'Logging in failed, please try again later.',
        500
        );
        return next(error);
        */
        return next.status(500).send({message:'Loggin in failed, please try again later.'});
    }

  /*  res.json({
        userId: existingUser[0].id,
        email: existingUser[0].email,
        token: token,
        redirecturl: '/user/' + username
    });*/
    if (!req.session.username) {
        req.session.username = username
        console.log(req.session);
        req.session.save((err) => {
        console.log(err);
    })
   }
    res.redirect("/")
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