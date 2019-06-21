require('newrelic');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./database/postgresqlDB.js');


var app = express();
var port = process.env.PORT || 3003;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(express.static('public'));


/******------------------------*******/
app.get('/items', db.fetch);
/******------------------------*******/


app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

var server = app.listen(port,(err) => {
  if(err){
    console.log(err);
    return;
  }
  console.log(`Listening on port ${port}:`);
});

module.exports = server;