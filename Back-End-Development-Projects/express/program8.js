var express = require('express');
var fs = require('fs');
var app = express();
var file = "";
fs.readFile(process.argv[3],function callback(err,data){
   file+=data;  
});
app.get('/books',function(req,res){
  var object = JSON.parse(file);
  res.json(object);
});
app.listen(Number(process.argv[2]));
