function generateRandom(){
  var temp = [];
  cnt++;
  for(var i=0;i<ids.length;i++){
    if($(ids[i]).text()==""){
      temp.push(ids[i]);
    }
  }
  var j = Math.floor(Math.random()*temp.length);
  console.log("random " + Math.floor(Math.random()*temp.length) + " times "+cnt);
  if(temp.length>0){
     $(temp[j]).text(player2Val);
  }
  return j;
}
function AI(){
  var temp = [];
  var positions = [];
  for(var i=0;i<ids.length;i++){
    if($(ids[i]).text()==""){
      temp.push(ids[i]);
      positions.push(i);
    }
  }
  if(temp.length==9){
    var j = Math.floor(Math.random()*temp.length);
    $(temp[j]).text(player2Val);
  }
  else {
    if($(ids[4]).text()==""){
      $(ids[4]).text(player2Val);
    }
    else if(temp.length==8){
      var j = Math.floor(Math.random()*temp.length);
      $(temp[j]).text(player2Val);
    }
    else {
      var done = false;
      // look for important cell .
      // if you can win
      var check = checkForImportantPosition(temp,positions,player2Val);
      // avoid losing
      if(check==false)
        check = checkForImportantPosition(temp,positions,player1Val,done);
      if(check==false){
        // look for intersection
        check = lookForIntersection(positions);
        if(check==false){
          var j = Math.floor(Math.random()*temp.length);
          $(temp[j]).text(player2Val);
          //return false;
        }
      }
    }
  }
}
function lookForIntersection(positions){
  for(var i=0;i<positions.length;i++){
    if(positions[i]==0){
      if( ($(ids[1]).text()==player1Val || $(ids[2]).text()==player1Val) && ($(ids[3]).text()==player1Val ||
        $(ids[6]).text()==player1Val)){
          $(ids[0]).text(player2Val);
          return true;
        }
    }
    else if(positions[i]==2){
      if( ($(ids[0]).text()==player1Val || $(ids[1]).text()==player1Val) && ($(ids[5]).text()==player1Val ||
        $(ids[8]).text()==player1Val)){
          $(ids[2]).text(player2Val);
          return true;
        }
    }
    else if(positions[i]==6){
      if( ($(ids[0]).text()==player1Val || $(ids[3]).text()==player1Val) && ($(ids[7]).text()==player1Val ||
        $(ids[8]).text()==player1Val)){
          $(ids[6]).text(player2Val);
          return true;
        }
    }
    else if(positions[i]==8){
      if( ($(ids[2]).text()==player1Val || $(ids[5]).text()==player1Val) && ($(ids[6]).text()==player1Val ||
        $(ids[7]).text()==player1Val)){
          $(ids[8]).text(player2Val);
          return true;
        }
    }
  }
  return false;
}

function checkForImportantPosition(temp , positions, value  ){
  console.log("CHECKING ");
  for(var i=0;i<positions.length;i++){
    if(positions[i]==0){
      if($(ids[1]).text()==value && $(ids[2]).text()==value){
        $(temp[i]).text(player2Val);
        return true;
      }
      else if($(ids[4]).text()==value && $(ids[8]).text()==value){
        $(temp[i]).text(player2Val);
        return true;
      }
      else if($(ids[3]).text()==value && $(ids[6]).text()==value){
        $(temp[i]).text(player2Val);
        return true;
      }
    }
    else if(positions[i]==1){
      if($(ids[0]).text()==value && $(ids[2]).text()==value){
        $(temp[i]).text(player2Val);
        return true;
      }
      else if($(ids[4]).text()==value && $(ids[7]).text()==value){
        $(temp[i]).text(player2Val);
        return true;
      }
    }
    else if(positions[i]==2){
      if($(ids[0]).text()==value && $(ids[1]).text()==value){
        $(temp[i]).text(player2Val);
        return true;
      }
      else if($(ids[4]).text()==value && $(ids[6]).text()==value){
        $(temp[i]).text(player2Val);
        return true;
      }
      else if($(ids[5]).text()==value && $(ids[8]).text()==value){
        $(temp[i]).text(player2Val);
        return true;
      }
    }
    else if(positions[i]==3){
      if($(ids[0]).text()==value && $(ids[6]).text()==value){
        $(temp[i]).text(player2Val);
        return true;
      }
      else if($(ids[4]).text()==value && $(ids[5]).text()==value){
        $(temp[i]).text(player2Val);
        return true;
      }
    }
    else if(positions[i]==4){
      if($(ids[2]).text()==value && $(ids[7]).text()==value){
        $(temp[i]).text(player2Val);
        return true;
      }
      else if($(ids[3]).text()==value && $(ids[5]).text()==value){
        $(temp[i]).text(player2Val);
        return true;
      }
      else if($(ids[2]).text()==value && $(ids[6]).text()==value){
        $(temp[i]).text(player2Val);
        return true;
      }
    }
    else if(positions[i]==5){
      if($(ids[2]).text()==value && $(ids[8]).text()==value){
        $(temp[i]).text(player2Val);
        return true;
      }
      else if($(ids[3]).text()==value && $(ids[4]).text()==value){
        $(temp[i]).text(player2Val);
        return true;
      }
    }
    else if(positions[i]==6){
      if($(ids[0]).text()==value && $(ids[3]).text()==value){
        $(temp[i]).text(player2Val);
        return true;
      }
      else if($(ids[2]).text()==value && $(ids[4]).text()==value){
        $(temp[i]).text(player2Val);
        return true;
      }
      else if($(ids[7]).text()==value && $(ids[8]).text()==value){
        $(temp[i]).text(player2Val);
        return true;
      }
    }
    else if(positions[i]==7){
      if($(ids[2]).text()==value && $(ids[4]).text()==value){
        $(temp[i]).text(player2Val);
        console.log("WHY   ...");
        return true;
      }
      else if($(ids[6]).text()==value && $(ids[8]).text()==value){
        $(temp[i]).text(player2Val);
        console.log("WHY   ...");
        return true;
      }
    }
    else if(positions[i]==8){
      if($(ids[2]).text()==value && $(ids[5]).text()==value){
        $(temp[i]).text(player2Val);
        return true;
      }
      else if($(ids[0]).text()==value && $(ids[4]).text()==value){
        $(temp[i]).text(player2Val);
        return true;
      }
      else if($(ids[6]).text()==value && $(ids[7]).text()==value){
        $(temp[i]).text(player2Val);
        return true;
      }
    }
  }
  return false;
}
