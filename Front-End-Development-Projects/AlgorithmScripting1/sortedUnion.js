
function uniteUnique(arr) {
  var hash = [];
  var temp = [];
  var args = Array.from(arguments);
  for(var i=0;i<args.length;i++){
    for(var j =0;j<args[i].length;j++){
      if(hash[args[i][j]]!==1){
        hash[args[i][j]] = 1;
        temp.push(args[i][j]);
        //console.log(arr[i]);
      }
    }
  }
  console.log(temp);
  return temp;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
