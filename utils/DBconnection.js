const mysql = require('mysql2');

const ENV = process.env.ENV;

const DB_HOST = process.env.MYSQL_HOST;
const DB_USER = process.env.MYSQL_USER;
const DB_PASSWD = process.env.MYSQL_PASSWORD;
const DB_DATABASE = process.env.MYSQL_DATABASE;

const db = mysql.createConnection({
    host    : DB_HOST,
    user    : DB_USER,
    password: DB_PASSWD,
    database: DB_DATABASE
});

db.connect(function (err) {

    if (err) throw err;

    console.log(`Connection to DB "${DB_DATABASE}"`);

});

module.exports = db;