fs = require('fs');
var fltr = process.argv[3];
var dir = process.argv[2];
fs.readdir(dir,function callback(err,list){
	for(var i=0;i<list.length;i++){
	   if(list[i].indexOf("."+fltr) !=-1) {
	     console.log(list[i]);
	   }
	}
})
