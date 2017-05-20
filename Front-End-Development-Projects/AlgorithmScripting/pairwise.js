
function pairwise(arr, arg) {
  var map = arr;
  var sum = 0;
  for(var i =0;i<map.length;i++){
    for(var j=i+1;j<map.length;j++){
      if(map[i]+map[j]==arg){
        sum+=i+j;
        map[i] = -100;
        map[j] = -100;
      }
    }
  }
  console.log(sum);
  return sum;
}

pairwise([1,4,2,3,0,5], 7);
