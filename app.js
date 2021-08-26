var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var app = express();
const bp = require('body-parser');
const userRouter = require('./routes/users');
const FsRouter = require('./routes/readFs')
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
  
var server = app.listen(8080, function() {
    console.log('Listening on port %d', server.address().port);
});

// app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/',FsRouter)