/*
1. Create a database called meetup
2. Make a connection to your database, using your MySQL hyfuser login credentials
3. Create a table called Invitee with the following fields (invitee_no, invitee_name and invited_by).
4. Create a table called Room with the following fields (room_no, room_name and floor_number)
5. Create a table called Meeting with the following fields (meeting_no, meeting_title, starting_time, ending_time,room_no)
6. Insert 5 rows into each table with relevant fields. Find a way to create the data for those fields
Test your code by executing node <FILE_NAME> in the terminal. Then check your MySQL database and see if everything has been created as expected. Please, be sure your file can be run more than once. You can drop and create the database every time the file is run.

*/

const express =  require('express');
const mysql = require('mysql');


//Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'hyfuser',
    password : 'Password123^&(',
    database : 'meetup'
});

//Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySQL connected...'); 
});

const app = express();

//Create database
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE IF NOT EXISTS meetup';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

app.listen('3500', () => {
    console.log('Server started on port 3500');
});

