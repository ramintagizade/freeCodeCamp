var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var cnt = str.split('\n');
console.log(cnt.length-1);
