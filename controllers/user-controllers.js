const express  = require('express');

DOMParser = require('xmldom').DOMParser;

exports.login = async(req, res, next) => {
    res.render('containers/login')
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

    res.json({
        username: username,
        password: password,
        passwordConfirm: passwordConfirm,
        mail: mail
    }).location('/login');
}