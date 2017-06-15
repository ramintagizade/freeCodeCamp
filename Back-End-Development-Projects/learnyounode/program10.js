var http = require('http');
var fs = require('fs');
var port = Number(process.argv[2]);
var fl = process.argv[3];
var server = http.createServer(function(req,res){
        res.writeHead(200, { 'content-type': 'text/plain' })
	var ob = fs.createReadStream(fl);
        ob.pipe(res);
});

server.listen(port);
