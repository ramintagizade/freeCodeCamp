var http = require('http');
var urls  = [];
var res  = [];
urls.push(process.argv[2]);
urls.push(process.argv[3]);
urls.push(process.argv[4]);
var cnt = 0;
for(var i=0;i<=2;i++) getData(urls[i],i); 
function getData(url,i) {
   var str = "";
   http.get(url,function callback(response){
	response.on('data',function (data){
	    str+=data;
	}).setEncoding('utf8');
	response.on('end',function(){
           cnt++;
           res[i] = str;
	   if(cnt==urls.length){
              res.forEach(function(d){
                 console.log(d);
	      });
	   }
	});
   });
}
