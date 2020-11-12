/*
Exercise 3 : SQL injection

You are given the below function which returns the population of a specific country from the world database.

function getPopulation(Country, name, code, cb) {
  // assuming that connection to the database is established and stored as conn
  conn.query(
    `SELECT Population FROM ${Country} WHERE Name = '${name}' and code = ${code}`,
    function(err, result) {
      if (err) cb(err);
      if (result.length == 0) cb(new Error("Not found"));
      cb(null, result[0].name);
    }
  );
}

Give an example of a value that can be passed as name and code that would take advantage of SQL-injection and (fetch all the records in the database)

The naive way of passing the parameters to the query puts the database at risk of being destroyed or hacked by malicious users.

An example of values that could harm the database are the ones based on 1=1 is Always True. 
    `SELECT Population FROM ${Country} 
    WHERE Name = whatever' OR 'x'='x and code = 103 OR 1=1;
*/

//Rewrite the function so that it is no longer vulnerable to SQL injection
//Comment: How can you escape the table name ?
//Answer: with ? 
function getPopulation(Country, name, code, cb) {
    // assuming that connection to the database is established and stored as conn
    conn.query(
      `SELECT Population FROM ? WHERE Name = ? and code = ?`,
      function(err, result) {
        if (err) cb(err);
        if (result.length == 0) cb(new Error("Not found"));
        cb(null, result[0].name);
      }
    );
  }