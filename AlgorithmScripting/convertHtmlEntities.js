
function convertHTML(str) {
  // &colon;&rpar;
  var temp = "";
  for(var i =0;i<str.length;i++){
    if(str[i]=="&"){
      temp+="&amp;";
    }
    else if(str[i]=="<"){
      temp+="&lt;";
    }
    else if(str[i]==">"){
      temp+="&gt;";
    }
    else if(str[i]=='"'){
      temp+="&quot;";
    }
    else if(str[i]=="'"){
      temp+="&apos;";
    }
    else {
      temp+=str[i];
    }
  }
  return temp;
}

convertHTML("Dolce & Gabbana");
