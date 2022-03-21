const mysql = require('mysql2');

//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your MySQL username,
        user: 'root',
        //Your MySQL pw
        password: 'password',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

//since it's an independent module now, must export it
module.exports = db;