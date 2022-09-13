var express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

router.get('/info', (req, res, next) => { 
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("Test");
        console.log('')
        dbo.collection("CollectionTest").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    });
})

router.post('/add', (req, res, next) => {
    MongoClient.connect(url, function (err, db) {
                if (err) throw err;
                var dbo = db.db("Test");
                dbo.collection("CollectionTest").insertOne(req.body,function(err, result) { 
                    if (err) throw err;
                    res.send(result);
                    db.close();
                });
            });
})

module.exports = router;