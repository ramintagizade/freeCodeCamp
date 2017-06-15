var map = require('through2-map');
var http = require('http');
var server = http.createServer(function(req,res){
	res.writeHead(200, { 'content-type': 'text/plain' });
	req.pipe(map(function (chunk) {  
       		return chunk.toString().toUpperCase();  
     	})).pipe(res);
});
server.listen(Number(process.argv[2]));
