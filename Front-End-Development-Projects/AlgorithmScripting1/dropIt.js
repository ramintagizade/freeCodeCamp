
function dropElements(arr, func) {
  // Drop them elements.
  var temp = [];
  var id = 0;
  for(var i=0;i<arr.length;i++){
    if(!func(arr[i])){
      id = i+1;
    }
    else break;
  }
  temp = arr.slice(id,arr.length);
  return temp;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
//dropElements([0, 1, 0, 1], function(n) {return n === 1;});
