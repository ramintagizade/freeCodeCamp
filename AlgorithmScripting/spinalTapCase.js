
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var temp ="";
  var nextIsWord = false;
  for(var i = 0;i<str.length;i++){
    if(str[i]==" " && str.charAt(i+1).match(/[a-z]/i) && str.charAt(i+1)==str.charAt(i+1).toLowerCase() ){
      nextIsWord = true;
    }
    if(str.charAt(i)===str.charAt(i).toUpperCase() && str.charAt(i).match(/[a-z]/i)){
      temp+="-";
      temp+=str.charAt(i).toLowerCase();
    }
    else if(str.charAt(i).match(/[a-z]/i) && nextIsWord){
      temp+="-"+str[i];
      nextIsWord = false;
    }
    else if(str.charAt(i).match(/[a-z]/i)){
      temp+=str[i];
    }
    else if(str.charAt(i)=="-")
      temp+=str[i];
    else
      continue;
  }
  if(temp[0]=="-")
  temp = temp.substr(1);
  console.log(temp);
  return temp;
}

spinalCase('This Is Spinal Tap');
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");
