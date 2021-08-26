const express = require('express');
const router = express.Router();
const fs = require('fs')
router.get('*', function (req, res, next) {
    var url = req.url==='/'?'/index.html':req.url
    fs.readFile(`./dist${url}`, function (err, data) { 
        if (!err) { 
            res.end(data);
        }
    })
})

module.exports = router