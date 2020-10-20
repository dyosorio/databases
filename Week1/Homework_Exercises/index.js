/*
Exercise 1: Create and insert queries

Test your code by executing node <FILE_NAME> in the terminal. Then check your MySQL database and see if everything has been created as expected. Please, be sure your file can be run more than once. You can drop and create the database every time the file is run.
*/

const express =  require('express');
const mysql = require('mysql');

//2. Make a connection to your database, using your MySQL hyfuser login credentials
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

function createInsertQuery(query){
    db.query(query, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
}

//1. Create a database called meetup
createInsertQuery("CREATE DATABASE IF NOT EXISTS meetup");
createInsertQuery("USE meetup");

//3.Create a table called Invitee with the following fields (invitee_no, invitee_name and invited_by).
createInsertQuery("CREATE TABLE IF NOT EXISTS Invitee (invitee_no INT, invitee_name VARCHAR(20), invited_by VARCHAR(20))");

//4. Create a table called Room with the following fields (room_no, room_name and floor_number)
createInsertQuery("CREATE TABLE IF NOT EXISTS Room (room_no INT, room_name VARCHAR(20), floor_number INT)");

//5. Create a table called Meeting with the following fields (meeting_no, meeting_title, starting_time, ending_time,room_no)
createInsertQuery("CREATE TABLE IF NOT EXISTS Meeting (meeting_no INT, meeting_title VARCHAR(20), starting_time DATETIME, ending_time DATETIME, room_no INT)");

//6. Insert 5 rows into each table with relevant fields. Find a way to create the data for those fields
createInsertQuery("INSERT INTO Invitee (invitee_no, invitee_name, invited_by) VALUES(1, 'Al Pacino', 'Local Library'), (2, 'Angelina Jolie', 'Local Theater'), (3, 'Salma Hayek', 'Local Theater'), (4, 'Leonardo DiCaprio', 'Local Theater'), (5, 'Quentin Tarantino', 'University of Arts')");

createInsertQuery("INSERT INTO Room (room_no, room_name, floor_number) VALUES(1, 'Big Fish', 1), (2, 'Pulp Fiction', 1), (3, 'Casablanca', 1), (4, 'Star Wars', 1), (5, 'Orange Clockwork', 1)");

createInsertQuery("INSERT INTO Meeting (meeting_no, meeting_title, starting_time, ending_time, room_no) VALUES (1, 'Production', '2020-12-01 10:00:00', '2020-12-01 12:00:00', 1), (2, 'Managers', '2020-12-01 10:00:00', '2020-12-01 12:00:00', 2), (3, 'Make up Artists', '2020-12-01 10:00:00', '2020-12-01 12:00:00', 3), (4, 'Security Staff', '2020-12-01 10:00:00', '2020-12-01 12:00:00', 4), (5, 'Social Media', '2020-12-01 10:00:00', '2020-12-01 12:00:00', 5)");

const app = express();

app.listen('3500', () => {
    console.log('Server started on port 3500');
});

