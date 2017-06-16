var express = require('express');
var jade = require('jade');
var path = require('path');
var app = express();
app.set('view engine','jade');
app.set('views',process.argv[3]);
app.get('/home',function(req,res){
   res.render('index',{date:new Date().toDateString()});
});
app.listen(Number(process.argv[2]));
