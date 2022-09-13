var express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

router.post('/add', (req, res, next) => { 
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("pageMeta");
        console.log(req.body)
        dbo.collection("pageMeta").insertOne(req.body,function(err, result) { 
            if (err) throw err;
            res.send(result);
            db.close();
        });
    });
})

module.exports = router;