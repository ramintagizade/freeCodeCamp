
function binaryAgent(str) {
  var temp = str.split(" ");
  var s = "";
  for(var i=0;i<temp.length;i++){
    s+=convertToDecimal(temp[i]);
  }
  console.log(s);
  convertToDecimal("01000001");
  return s;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
function convertToDecimal(str){
  //var temp = str.split(" ");
  var dec = 0;
  var p = 1;
  for(var i =str.length-1;i>=0;i--){
      dec+=p * parseInt(str[i]);
      p*=2;
  }
  //console.log(String.fromCharCode(dec));
  return String.fromCharCode(dec);
}
