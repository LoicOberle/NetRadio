const express  = require('express');


DOMParser = require('xmldom').DOMParser;

exports.index = async(req, res, next) => {
    res.render('containers/programs')
}