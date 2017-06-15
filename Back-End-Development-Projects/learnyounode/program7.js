var http = require('http');
var temp = "";
http.get(process.argv[2],function callback(response){
	response.on('data',function(data){
	     temp+=data;	
	}).setEncoding('utf8');
	response.on('end',function(){
	     console.log(temp.length);
	     console.log(temp);
	});
});
