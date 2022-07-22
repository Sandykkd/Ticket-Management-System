var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect(url, (err, db) => {
    if (err)
        throw err;
    var dbCreated = db.db("mydb");
    var user = {
        name: "kavi",
        password: "kavi@123"
    }
    dbCreated.collection("users").insertOne(user, (err, res) => {
        if (err)
            throw err;

        console.log("1 document inserted");

        db.close();
    })
})