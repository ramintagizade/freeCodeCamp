
function sumAll(arr) {
  var len = arr.length;
  var sum = 0;
  for(var i=min(arr)[0];i<=min(arr)[1];i++){
    sum+=i;
  }
  return sum;
}
function min(arr){
  var mn=arr[0], mx=arr[0];
  for(var i =0;i<arr.length;i++){
    if(mx< arr[i]) mx = arr[i];
    if(mn>arr[i])  mn = arr[i];
  }
  return [mn,mx];
}
sumAll([1, 4]);
