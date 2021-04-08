const express  = require('express');


DOMParser = require('xmldom').DOMParser;

exports.index = async(req, res, next) => {
    let sql = "SELECT Broadcast.title, Slot.date_start, Slot.date_start FROM Slot INNER JOIN Broadcast ON Slot.id_broadcast = Broadcast.idBroadcast;"
    let data = await bdd.query(sql)

    res.render('containers/programs', {
        tab_data: data
    })
}