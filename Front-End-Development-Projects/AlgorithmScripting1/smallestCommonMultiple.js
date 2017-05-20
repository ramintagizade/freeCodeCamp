
function smallestCommons(arr) {
  var lc = 1;
  for(var i=Math.min(arr[0],arr[1]);i<=Math.max(arr[0],arr[1]);i++){
    lc =lcm(lc,i);
    console.log(i);
  }
  console.log(lc);
  return lc;
}
function gcd(a , b ) {
    if(b===0) return a;
    return gcd(b,a%b);
}

function lcm(a , b ){
  return a*b/gcd(a,b);
}
smallestCommons([1,5]);
smallestCommons([1, 13]);
