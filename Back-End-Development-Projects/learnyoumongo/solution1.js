var mongo = require('mongodb').MongoClient();
mongo.connect('mongodb://localhost:27017/learnyoumongo',function(err,db){
   var collection = db.collection('parrots');
   collection.find({"age": { $gt: Number(process.argv[2])}}).toArray(function (err,documents){
     console.log(documents);
   });
   db.close() 
});
