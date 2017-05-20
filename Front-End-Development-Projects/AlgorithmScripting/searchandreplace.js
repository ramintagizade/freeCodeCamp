
function myReplace(str, before, after) {
  var ind = str.indexOf(before);
  var temp = "";
  str = str.replace(before,after);
  for(var i =0;i<str.length;i++){
    if(i==ind && before[0]===before[0].toUpperCase()){
      temp+=str.charAt(i).toUpperCase();
    }
    else if(i==ind && before[0]===before[0].toLowerCase()){
      temp+=str.charAt(i).toLowerCase();
    }
    else
      temp+=str[i];
  }
  console.log(temp);
  return temp;

}
myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped");
myReplace("His name is Tom", "Tom", "john");
