var express = require('express');
var app = express();
const bp = require('body-parser');
const userRouter = require('./routes/users');
const FsRouter = require('./routes/readFs')
const pageMeta = require('./routes/pageMeta');
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
  
var server = app.listen(8080, function() {
    console.log('Listening on port %d', server.address().port);
});

app.use('/users', userRouter);
app.use('/pageMeta', pageMeta);
app.use('/',FsRouter)