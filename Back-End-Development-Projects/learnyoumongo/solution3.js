var mongo = require('mongodb').MongoClient();
var host = 'mongodb://localhost:27017/learnyoumongo';
var firstname =process.argv[2];
var lastname = process.argv[3]; 
mongo.connect(host,function(err,db){
   var collection = db.collection('docs');
   var json = {"firstName":firstname,"lastName":lastname};
   collection.insert(json,function(err,data){
     console.log(JSON.stringify(json));
   });
   db.close() 
});

