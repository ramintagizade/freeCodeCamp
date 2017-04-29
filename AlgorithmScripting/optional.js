
function addTogether() {
  var args = Array.prototype.slice.call(arguments);
  if(typeof (args[0])!=="number") return undefined;
   if(typeof (args[1])!=="number") {
     if(args[1]!==undefined) return undefined;
    return function (y){
      if(typeof (y)!=="number") return undefined;
      return args[0] + y;
    };
   }
  return args[0] + args[1];
}


addTogether(2,3);
addTogether("http://bit.ly/IqT6zt");
addTogether(2, "3");
