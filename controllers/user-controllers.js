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

    var sql = "INSERT INTO User (pseudo, mail, password, ban, id_status) VALUES ('"
        + username + "', '"
        + mail + "', '"
        + password + "', "
        + "0 , 3);";
    
    if(password != passwordConfirm){
        return res.status(201).json("Erreur les deux mots de passe sont différents");
    }else{
        try {
            let createUser = await bdd.query(sql);
    
            const response = {
                "username": username,
                "mail": mail,
                "password": password,
            }
            res.redirect('/login');
            return res.status(201).json(response);
        } catch(err) {
            console.log(err);
        }
    }
}

exports.userLive = async (req, res, next) => {
    let username = req.params.username;
 let query = "SELECT * from Broadcast INNER JOIN User On Broadcast.id_presenter=User.idUser WHERE idBroadcast=(SELECT max(idBroadcast) FROM Broadcast);"
    let data = await bdd.query(query)
    res.render('containers/announcerLive', {
        presentator: username, 
        liveTitle: data[0].title,
        LivePresentation: data[0].description,
        jsFile: "../../js"
    })
}

exports.profil = async(req, res, next) => {
    let query = 'SELECT * FROM User WHERE pseudo="' + req.session.username + '"'
    let data= await bdd.query(query)
    res.render('containers/updateAuditor', {
        username:req.session.username?req.session.username:"",
        pseudo: data[0].pseudo, 
        mail: data[0].mail,
        password : data[0].password
    });
}

exports.makeLive = async(req, res, next) => {
    
    res.render('containers/createLive', {
        username:req.session.username
    });
}

exports.makeLiveValid = async (req, res, next) => {
    console.log(req.body);
   
    let query = "INSERT INTO Broadcast(title,description,id_presenter) VALUES('" + req.body.title + "','" + req.body.description + "',(SELECT idUser FROM User WHERE pseudo='" + req.session.username + "'))"
    console.log(query);
    let query2 = "INSERT INTO Slot(date_start,date_end,id_broadcast) VALUES('"+req.body.date_start+"','"+req.body.date_end+"',(SELECT max(idBroadcast) FROM Broadcast))"
    try {
        await bdd.query(query)
        await bdd.query(query2)
    } catch (err) {
        console.log(err)
         res.redirect("/")
    }
     res.redirect("/user/" + req.session.username + "/live")
}