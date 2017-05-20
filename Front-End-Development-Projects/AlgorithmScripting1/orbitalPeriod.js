
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for(var i=0;i<arr.length;i++){
    var radius = arr[i]["avgAlt"];
    var t = 2*Math.PI*Math.sqrt(Math.pow(earthRadius+radius,3)/GM);
    t = Math.round(t);
    console.log("seconds " + t);
    delete arr[i]["avgAlt"];
    arr[i]["orbitalPeriod"] = t;
  }
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
