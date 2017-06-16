var express = require('express');
var crypto = require('crypto');
var app = express();
app.put('/message/:id',function (req,res){
   var id = req.params.id;
   var str = crypto.createHash('sha1').update(new Date().toDateString()+id).digest('hex');
   res.send(str);
});
app.listen(Number(process.argv[2]));
