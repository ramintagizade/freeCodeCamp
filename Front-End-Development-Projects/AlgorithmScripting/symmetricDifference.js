
function sym(args) {
  var arr = Array.prototype.slice.call(arguments);
  var cur = [];
  for(var i=0;i<arr.length;i++){
    var temp = [];
    for(var j=0;j<arr[i].length;j++){
      if(!temp.contains(arr[i][j])) temp.push(arr[i][j]);
    }
    arr[i] = temp;
  }
  cur = arr[0];
  for(var i =1;i<arr.length;i++){
    console.log("arr " + arr[i]);
    for(var j =0;j<arr[i].length;j++){
      if(cur.contains(arr[i][j])){
        cur = cur.filter(function(item) {
          return item !== arr[i][j];
        });
      }
      else {
        cur.push(arr[i][j]);
      }
    }
  }
  console.log("current " + cur);
  return cur;
}
Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] == obj) {
            return true;
        }
    }
    return false;
};
sym([1, 2, 3], [5, 2, 1, 4]);
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]); // [1, 4, 5]
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
