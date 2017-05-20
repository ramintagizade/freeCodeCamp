
function sumFibs(num) {
  var sum  = 0;
  var arr = [];
  arr[0] = 1;
  arr[1] = 1;

  for(var i=2;i<num;i++){
    arr[i] = arr[i-1] + arr[i-2];
    if(arr[i]%2==1 && arr[i]<=num) sum+=arr[i];
  }
  if(num==1) return 1;
  else if(num==2) return 2;
  else sum+=2;
  console.log(sum);
  return sum;
}

sumFibs(1000);
//1 1 2 3
