var mongo = require('mongodb').MongoClient();
var url = 'mongodb://localhost:27017/learnyoumongo';
var Size = (process.argv[2]);
mongo.connect(url,function(err,db){
   if (err ) throw err;
   var collection = db.collection('prices');
   collection.aggregate([ 
      { $match: { 
        size:Size }}
      , { $group: { 
        _id: 'average'
      , average: { 
        $avg:'$price'
       }
       }}
      ]).toArray(function(err,results){
      if(err) throw err;
      if(!results.length) throw new Error("No results found");
      console.log(results[0].average.toFixed(2));
      db.close();
   });
});

