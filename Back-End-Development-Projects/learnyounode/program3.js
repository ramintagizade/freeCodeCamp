var fs = require('fs');
fs.readFile(process.argv[2],'utf8',function callback(err,data){
	var cnt = data.split('\n');
	console.log(cnt.length-1);
});

