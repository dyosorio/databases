/*
Exercise 4 : MongoDB CRUD
Write the following queries using MongoDB syntax in the JavaScript files.

Create a new record (document) for a new city (your home town, say)
Update that record with a new population
Read the document that you just updated in two ways : finding by the city name, and then by the country code
Delete the city
Submit the javascript files for these queries.

documentation: https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb--how-to-get-connected-to-your-database

*/

//npm i mongodb

//Import Mongo client
const {MongoClient} = require('mongodb');

async function main() {
    const uri = "mongodb+srv://dannyOs:password@<your-cluster-url>/test?retryWrites=true&w=majority";

    //Create instance of Mongo client
    const client = new MongoClient(uri, { useUnifiedTopology: true } );

    //interact with the database in a try/catch statement
    try {
        await client.connect();

        await listDatabases(client);

        //Create a new record (document)
        const cityDocument = { 
            Name : "Managua", 
            CountryCode: "NIC", 
            District: "Managua", 
            Population : 1262978
        };

        const newDocument = await client.db('world').collection('city').insertOne(cityDocument);
        console.log(newDocument);

        //Update that record with a new population
        const filter = {
            Name : 'Managua'
        };

        const updateRecord = {
            $set : { Population : 2200100 }
        };

        const updatedPopulation = await client.db('world').collection('city').updateOne(filter, updateRecord);
        console.log(updatedPopulation);

        //Read the document by the city name, and then by the country code
        const findCityName = await client.db('world').collection('city').findOne({ Name : 'Managua' });
        
        const findCountryCode = await client.db('world').collection('city').findOne({ CountryCode : 'NIC' });

        console.log(findCityName, findCountryCode);

        //Delete city
        const deleteCity = await client.db('world').collection('city').deleteOne({ Name : 'Managua' });

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

//retrieve databases in the cluster and print the results in the console.
async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
       