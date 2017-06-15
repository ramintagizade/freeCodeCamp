var net = require('net');
function pad(n){
    return (n<10 ? '0' : '') + n;
}
var server = net.createServer(function listener(socket){
	var d = new Date();
        var tm = d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())+' '+pad(d.getHours())+':'+pad(d.getMinutes());
        socket.end(tm+'\n');
});
server.listen(Number(process.argv[2]));
