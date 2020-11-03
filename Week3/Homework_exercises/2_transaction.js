/*
Exercise 2 : Transactions

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
    console.log('MySQL Transaction connected...'); 
});

const sqlTransaction = "START TRANSACTION";
const queryTransaction = db.query(sqlTransaction, function(err, result) {
    if (err) throw err;
    console.log('Start Transaction');
});

const sqlUpdateSenderAcc = `
UPDATE account 
SET balance = 500
WHERE account_number = 101 
`;
const queryUpdateSenderAcc = db.query(sqlUpdateSenderAcc, function(err, result) {
    if (err) throw err;
    console.log('Sends transfer');
});

const sqlUpdateReceiverAcc = `
UPDATE account 
SET balance = 1500
WHERE account_number = 102
`;
const queryUpdateReceiverAcc = db.query(sqlUpdateReceiverAcc, function(err, result) {
    if (err) throw err;
    console.log('Receives transfer');
});

const sqlSenderAccChange = `
UPDATE account_changes
SET amount = 1000, changed_date = '2020-11-03', remark = 'Send Money Transfer'
WHERE change_number = 401
`;
const querySenderAccChange = db.query(sqlSenderAccChange, function(err, result) {
    if (err) throw err;
    console.log(result);
});

const sqlReceiverAccChange = `
UPDATE account_changes
SET amount = 1000, changed_date = '2020-11-03', remark = 'Received Money Transfer'
WHERE change_number = 402
`;
const queryReceiverAccChange = db.query(sqlReceiverAccChange, function(err, result) {
    if (err) throw err;
    console.log(result);
});

const sqlCommit = "COMMIT";
const queryCommit = db.query(sqlCommit, function(err, result) {
    if (err) throw err;
    console.log('Commit');
});

db.end();