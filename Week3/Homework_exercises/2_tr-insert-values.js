/*
Exercise 2 : Transactions

5- Insert some sample data in these tables. (write tr-insert-values.js file)

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
    console.log('MySQL Insert-values connected...'); 
});

//account table should have following fields: account_number, balance.
const sql = "INSERT IGNORE INTO account(account_number, balance) VALUES ?";

const accountValues = [
    [101, 1500.0],
    [102, 500.0],
    [103, 4000.0],
];

const query = db.query(sql, [accountValues], function(err, result) {
    if (err) throw err;
    console.log(result);
}); 


//account_changes table should have the following fields: change_number, account_number, amount, changed_date, remark.
const sqlAccountChanges = "INSERT IGNORE INTO account_changes(change_number, account_number, amount, changed_date, remark) VALUES ?";

const accountChanges = [
    [401, 101, 0, '2020-11-1', 'Euro Bank Transaction'],
    [402, 102, 0, '2020-11-5', 'Euro Bank Transaction'],
    [403, 103, 0, '2020-10-28', 'Euro Bank Transaction'],
];

const queryAccountChanges = db.query(sqlAccountChanges, [accountChanges], function(err, result) {
    if (err) throw err;
    console.log(result);
});

db.end();