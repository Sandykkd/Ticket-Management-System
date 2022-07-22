var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

mongoClient.connect(url, (err, db) => {
    if (err)
        throw err;

    console.log("Database created")
})