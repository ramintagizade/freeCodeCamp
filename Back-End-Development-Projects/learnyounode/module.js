fs = require('fs');
module.exports = function (dir,ext,callback){
    var temp = [];
    fs.readdir(dir,function foo(err,list){
        if(err) return callback(err);
        for(var i=0;i<list.length;i++){
            if(list[i].indexOf("."+ext) !=-1) {	
	       temp.push(list[i]);
            }
        }
        callback(null,temp);
    });
}
