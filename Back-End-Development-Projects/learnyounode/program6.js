var http = require('http');
http.get(process.argv[2],function callback(response){
	response.on("data",function (data){
	   console.log(data);
	}).setEncoding('utf8');
});
