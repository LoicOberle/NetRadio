const express  = require('express');
const bdd = require("../utils/DBclients");

DOMParser = require('xmldom').DOMParser;

exports.index = async(req, res, next) => {
    let sql = "SELECT Broadcast.title, Slot.date_start, Slot.date_end FROM Slot INNER JOIN Broadcast ON Slot.id_broadcast = Broadcast.idBroadcast;"
    let data = await bdd.all(sql)

    console.log(data)

    res.render('containers/programs', {
        tab_data: data
    })
}