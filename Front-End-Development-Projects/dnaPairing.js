
function pairElement(str) {
  var temp = [];
  for(var i=0;i<str.length;i++){
    if(str[i]=="A"){
      temp.push(["A","T"]);
    }
    else if(str[i]=="T"){
      temp.push(["T","A"]);
    }
    else if(str[i]=="C"){
      temp.push(["C","G"]);
    }
    else if(str[i]=="G"){
      temp.push(["G","C"]);
    }
  }

  return temp;
}

pairElement("GCG");
