const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

var app = express();
var port = 3003;

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/items',(req, res) => {
  res.status(200).send(JSON.stringify({name: "jonathan"})).end();
});

app.listen(port,(err) => {
  if(err){
    console.log(err);
    return;
  }
  console.log(`Listening on port ${port}:`);
});