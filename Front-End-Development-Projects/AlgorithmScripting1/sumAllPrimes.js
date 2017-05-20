
function sumPrimes(num) {
  var primes = [];
  var sum = 0;
  for(var i =2;i<=Math.sqrt(num);i++){
    if(!primes[i]){
      for(var j=i*2;j<=(num);j+=i){
        primes[j] = 1;
      }
    }
  }
  for(i=2;i<=num;i++){
    if(!primes[i]) sum+=i;
  }
  console.log(sum);
  return sum;
}

sumPrimes(10);
sumPrimes(977);
