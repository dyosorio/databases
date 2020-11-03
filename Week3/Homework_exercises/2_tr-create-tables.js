/*
Exercise 2 : Transactions

1- Create two tables account and account_changes (write tr-create-tables.js file)
2- account table should have following fields : account_number, balance.
3- account_changes table should the the following fields : change_number, account_number, amount, changed_date, remark.
4- Choose the appropriate data types, keys for these tables.

    5- Insert some sample data in these tables. (write tr-insert-values.js file)
    6- Transfer the amount of 1000 from account number 101 to account number 102 and log the changes in the table account_changes. Do this in a single transaction (Write transaction.js file)
    7- Submit all three files (tr-create-tables.js, tr-insert-values.js and transaction.js).

*/

const mysql = require('mysql');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'hyfuser',
    password : 'Password123^&(',
    database : 'W3'
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySQL connected...'); 
});

db.query(`CREATE TABLE IF NOT EXISTS account(account_number INT PRIMARY KEY, balance FLOAT)`, (err, result) => {
    if(err) throw err;
    console.log('table account created...');
});

db.query(`CREATE TABLE IF NOT EXISTS account_changes(change_number INT PRIMARY KEY, account_number INT, amount FLOAT, changed_date DATE, remark VARCHAR(200), FOREIGN KEY (account_number) REFERENCES account (account_number))`, (err, result) => {
    if(err) throw err;
    console.log('table account_changes created...');
});

db.end();

