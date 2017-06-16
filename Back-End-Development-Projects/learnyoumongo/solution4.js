var mongo = require('mongodb').MongoClient();
var host = 'mongodb://localhost:27017/'+process.argv[2];
mongo.connect(host,function(err,db){
   var collection = db.collection('users');
   collection.update({"username": "tinatime"},{$set: {age: 40}},function(err){
	if(err) throw err;
        db.close();
   });
});


