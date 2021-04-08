const express  = require('express');
const bdd = require("../utils/DBclients");
DOMParser = require('xmldom').DOMParser;

exports.index = async (req, res, next) => {

     let query = "SELECT * from Broadcast INNER JOIN User On Broadcast.id_presenter=User.idUser WHERE idBroadcast=(SELECT max(idBroadcast) FROM Broadcast);"
    let data = await bdd.query(query)
    console.log(req.session);
    res.render('containers/index', {
        username:req.session.username?req.session.username:"",
        presentator: data[0].pseudo, 
        liveTitle: data[0].title,
        LivePresentation : data[0].description
    })
}