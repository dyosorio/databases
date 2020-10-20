//Exercise 2 : Select queries on the "world" database

const express =  require('express');
const mysql = require('mysql');

//Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'hyfuser',
    password : 'Password123^&(',
    database : 'new_world'
});

//Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySQL connected...'); 

    function queryData(query, question){
        db.query(query, function (err, result, fields) {
            if (err) throw err;
            console.log(question);
            console.log(result);
        });
    }

    //1
    queryData("SELECT Name FROM country WHERE Population > 8000000", "What are the names of countries with population greater than 8 million?");

    //2
    queryData("SELECT Name FROM country WHERE Name LIKE '%land%' ", "What are the names of countries that have “land” in their names");

    //3
    queryData("SELECT Name FROM city WHERE population BETWEEN 500000 AND 1000000", "What are the names of the cities with population in between 500,000 and 1 million?");

    //4
    queryData("SELECT Name FROM country WHERE continent = 'Europe' ", "What's the name of all the countries on the continent ‘Europe’ ");

    //5
    queryData("SELECT Name FROM country ORDER BY SurfaceArea DESC", "List all the countries in the descending order of their surface areas.");

    //6. 
    queryData("SELECT Name FROM city WHERE CountryCode = 'NLD' ", "What are the names of all the cities in the Netherlands?");

    //7. 
    queryData("SELECT Population,Name FROM city WHERE Name = 'Rotterdam' ", "What is the population of Rotterdam?");

    //8. 
    queryData("SELECT Name FROM country ORDER BY SurfaceArea DESC LIMIT 10", "What's the top 10 countries by Surface Area?");

    //9. 
    queryData("Select Name FROM city ORDER BY Population DESC LIMIT 10", "What's the top 10 most populated cities?");

    //10. 
    queryData("SELECT SUM (Population) from country", "What is the population number of the world?");
});

//source: https://www.w3schools.com/nodejs/nodejs_mysql_select.asp

//---
const app = express();

app.listen('4000', () => {
    console.log('Server started on port 4000');
});

