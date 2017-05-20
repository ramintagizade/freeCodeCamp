
function permAlone(str) {
  var permutations = [];
  var arr = str.split('');

  var regex = /(.)\1+/g;
  console.log(arr);
  function swap(i, j ){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  function permute(n ){
    if(n==1){
      console.log(arr);
      permutations.push(arr.join(''));
      return ;
    }
    else {
      for(var i=0;i<n-1;i++){
        permute(n-1);
        if(n%2==0){
          swap(i,n-1);
        }
        else {
          swap(0,n-1);
        }
      }
      permute(n-1);
    }
  }
  permute(arr.length);
  var res = permutations.filter(function(string){
    return !string.match(regex);
  });
  console.log(res);
  return res.length;
}
permAlone('aab');
