
function translatePigLatin(str) {
  var temp = str.split("");
  if(isVowel(str[0])){
    temp.push("way");
    str = temp.join("");
  }
  else {
    var first = "";
    for(var i=0;i<temp.length;i++){
      if(!isVowel(temp[i])){
        first+=temp[i];
        temp.shift();
        i--;
      }
      else break;
    }
    temp.push(first+"ay");
    str = temp.join("");
  }
  return str;
}
function isVowel(letter){
 if(letter==='a'|| letter==='A' || letter==="I" || letter==="i" ||      letter==="o"||letter==="O" || letter==="u" || letter ==="U" || letter==="e"||letter==="E") {
     return true;
 }
  return false;
}
translatePigLatin("aonsonant");
translatePigLatin("california")
