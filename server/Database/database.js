const mysql = require('mysql2');

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "1234",
    database: "docapp",
    multipleStatements: true,
    dateStrings: true
});

module.exports = db;