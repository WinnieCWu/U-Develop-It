const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
//Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your MySQL username,
        user: 'myusername',
        //Your MySQL pw
        password: 'mypassword',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

//GET a single candidate
db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
    if (err) {
        console.log(err);
    }
    console.log(row);
});

//Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
})

//Delete a candidate
db.query(`DELETE FROM  candidates WHERE id = ?`, 1, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

//Default/catch-all response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

//place at the bottom, to start Express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});