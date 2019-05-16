const express = require('express');
var app = express();
var port = 3003;

app.use(express.static('public'));

app.listen(port,(err) => {
  if(err){
    console.log(err);
    return;
  }
  console.log(`Listening on port ${port}. This is awesome.`);
});