/*
Exercise 2 : Transactions

6- Transfer the amount of 1000 from account number 101 to account number 102 and log the changes in the table account_changes. Do this in a single transaction (Write transaction.js file)
7- Submit all three files (tr-create-tables.js, tr-insert-values.js and transaction.js).
*/

//Comment: What do you do if something goes wrong?
//Answer: ROLLBACK 

const mysql = require('mysql');
const util = require('util');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'hyfuser',  
    password : 'Password123^&(',
    database : 'W3'
});

const execQuery = util.promisify(db.query.bind(db));

const sqlTransaction = "START TRANSACTION";

const sqlUpdateSenderAcc = `
UPDATE account 
SET balance = 500
WHERE account_number = 101 
`;

const sqlUpdateReceiverAcc = `
UPDATE account 
SET balance = 1500
WHERE account_number = 102
`;


const sqlSenderAccChange = `
UPDATE account_changes
SET amount = 1000, changed_date = '2020-11-03', remark = 'Send Money Transfer'
WHERE change_number = 401
`;

const sqlReceiverAccChange = `
UPDATE account_changes
SET amount = 1000, changed_date = '2020-11-03', remark = 'Received Money Transfer'
WHERE change_number = 402
`;

const sqlCommit = "COMMIT";
const sqlRollback = "ROLLBACK";

async function seedDatabase() {
    try {
        await execQuery(sqlTransaction);
        await execQuery(sqlUpdateSenderAcc);
        await execQuery(sqlUpdateReceiverAcc);
        await execQuery(sqlSenderAccChange);
        await execQuery(sqlReceiverAccChange);
        await execQuery(sqlCommit);
    
        connection.end();
        
    } catch (error) {
        await execQuery(sqlRollback); //rollback in case of error
    }
}

seedDatabase();