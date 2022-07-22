var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

mongoClient.connect(url, (err, db) => {
    if (err)
        throw err;
    var dbCreated = db.db("mydb");
    dbCreated.createCollection("testing", (err, res) => {
        if (err)
            throw err;
        console.log("collection created");
    })
    db.close();
})