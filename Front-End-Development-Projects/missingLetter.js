
function fearNotLetter(str) {
  var missing = "";
  for(var i=0;i<str.length-1;i++){
    var ch = str.charCodeAt(i);
    var ch1 = str.charCodeAt(i+1);
    if(ch+1!==ch1){
      missing+=String.fromCharCode(ch+1);
    }
    console.log(String.fromCharCode(ch));
  }
  if(missing=="") return undefined;
  return missing;
}

fearNotLetter("abce");
