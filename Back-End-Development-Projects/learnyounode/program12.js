var http = require('http');
var url = require('url');
function parseTime(time){
	return {
 	    hour:time.getHours(),
            minute:time.getMinutes(),
            second:time.getSeconds()
	};
}
function unixTime(time){
	return {unixtime:time.getTime()};
}

var server = http.createServer(function(req,res){
   res.writeHead(200, { 'Content-Type': 'application/json' });
   var obj = url.parse(req.url, true);
   var time = new Date(obj.query.iso);
   var json = "";
   if(obj.pathname==='/api/parsetime'){
     var date  = new Date(obj.query.iso);
     json = JSON.stringify(parseTime(date));
   } 
   if(obj.pathname==='/api/unixtime'){
     var date = new Date(obj.query.iso);
     json = JSON.stringify(unixTime(date));
   }
   res.end(json);
});
server.listen(Number(process.argv[2]));
