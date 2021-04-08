const express  = require('express');
const bdd = require("../utils/DBclients");
DOMParser = require('xmldom').DOMParser;

exports.live = async(req, res, next) => {
    let query = "SELECT * from Broadcast INNER JOIN User On Broadcast.id_presenter=User.idUser INNER JOIN Slot On Broadcast.idBroadcast=Slot.id_broadcast WHERE idBroadcast=(SELECT max(idBroadcast) FROM Broadcast);"
    let data = await bdd.query(query)
    console.log(data);
    res.render('containers/directLive', {
        announcer: data[0].pseudo,
        liveTitle: data[0].title,
        LivePresentation: data[0].description,
        horaire: data[0].date_start.substring(11)+" - "+data[0].date_end.substring(11)
    })
}