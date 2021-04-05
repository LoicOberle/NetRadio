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