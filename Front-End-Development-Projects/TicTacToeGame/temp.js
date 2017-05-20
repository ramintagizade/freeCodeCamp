function whoWins(first){
  var ok = -1;
  if(first=="X") ok = 1;
  if(first=="O") ok = -1;
  function drawBlack(i,j,k){
    setTimeout(colorBlack,1000);
    //backUpColor(i,j,k);
    function colorBlack(){
      $(".board").css({"background-color":"black"});
      var temp = setTimeout(function(){
      $(".board").css({"background-color":"#808000"});
      },1000);
    }
    backUpColor(i,j,k);
    $(".board").css({"background-color":"#808000"});
  }
  function getInfo(id){
    setTimeout(get,1000);
    function get(){
      $(".message").text(id+" wins !");
      $(".message").show();
    }
    setTimeout(disable,2000);
    function disable(){
      disableInfo();
    }
  }
  function disableInfo(){
    $(".message").hide();
  }
  function backUpColor(i,j,k){
    setTimeout(backColor,2000);
    function backColor(){
      $(ids[i]).css({"background-color":"#808000"});
      $(ids[j]).css({"background-color":"#808000"});
      $(ids[k]).css({"background-color":"#808000"});
    }
  }
  function colorWinningCells(i, j , k){
    $(ids[i]).css({"background-color":"black"});
    $(ids[j]).css({"background-color":"black"});
    $(ids[k]).css({"background-color":"black"});
    //backUpColor(i,j,k);
  }
  if( id[0]=="X" && id[3]=="X" && id[6]=="X"){
    colorWinningCells(0,3,6);
    drawBlack(0,3,6);
    if(1*ok==1)
      getInfo("Player 1 ");
    else
      getInfo("Player 2 ");
    return 1*ok;
  }
  else if( id[1]=="X" && id[4]=="X" && id[7]=="X") {
    colorWinningCells(1,4,7);
    drawBlack(1,4,7);
    if(1*ok==1)
      getInfo("Player 1 ");
    else
      getInfo("Player 2 ");
    return 1*ok;
  }
  else if(id[2]=="X" && id[5]=="X" && id[8]=="X"){
    colorWinningCells(2,5,8);
    drawBlack(2,5,8)
    if(1*ok==1)
      getInfo("Player 1 ");
    else
      getInfo("Player 2 ");
    return 1*ok;
  }
   else if(id[0]=="X" && id[1]=="X" && id[2]=="X") {
     colorWinningCells(0,1,2);
     drawBlack(0,1,2);
     if(1*ok==1)
       getInfo("Player 1 ");
     else
       getInfo("Player 2 ");
     return 1*ok;
   }
  else if(id[3]=="X" && id[4]=="X" && id[5]=="X"){
    colorWinningCells(3,4,5);
    drawBlack(3,4,5);
    if(1*ok==1)
      getInfo("Player 1 ");
    else
      getInfo("Player 2 ");
    return 1*ok;
  }
  else if(id[6]=="X" && id[7]=="X" && id[8]=="X") {
    colorWinningCells(6,7,8);
    drawBlack(6,7,8);
    if(1*ok==1)
      getInfo("Player 1 ");
    else
      getInfo("Player 2 ");
    return 1*ok;
  }
  else if(id[0]=="X" && id[4]=="X" && id[8]=="X") {
    colorWinningCells(0,4,8);
    drawBlack(0,4,8);
    if(1*ok==1)
      getInfo("Player 1 ");
    else
      getInfo("Player 2 ");
    return 1*ok;
  }
  else if(id[2]=="X" && id[4]=="X" && id[6]=="X"){
    colorWinningCells(2,4,6);
    drawBlack(2,4,6);
    if(1*ok==1)
      getInfo("Player 1 ");
    else
      getInfo("Player 2 ");
    return 1*ok;
  }
  else if(id[0]=="O" && id[3]=="O" && id[6]=="O") {
    colorWinningCells(0,3,6);
    drawBlack(0,3,6);
    if(-1*ok==1)
      getInfo("Player 1 ");
    else
      getInfo("Player 2 ");
    return -1*ok;
  }
  else if(id[1]=="O" && id[4]=="O" && id[7]=="O") {
    colorWinningCells(1,4,7);
    drawBlack(1,4,7);
    if(-1*ok==1)
      getInfo("Player 1 ");
    else
      getInfo("Player 2 ");
    return -1*ok;
  }
  else if(id[2]=="O" && id[5]=="O" && id[8]=="O") {
    colorWinningCells(2,5,8);
    drawBlack(2,5,8);
    if(-1*ok==1)
      getInfo("Player 1 ");
    else
      getInfo("Player 2 ");
    return -1*ok;
  }
  else if(id[0]=="O" && id[1]=="O" && id[2]=="O"){
    colorWinningCells(0,1,2);
    drawBlack(0,1,2);
    if(-1*ok==1)
      getInfo("Player 1 ");
    else
      getInfo("Player 2 ");
    return -1*ok;
  }
  else if(id[3]=="O" && id[4]=="O" && id[5]=="O"){
    colorWinningCells(3,4,5);
    drawBlack(3,4,5);
    if(-1*ok==1)
      getInfo("Player 1 ");
    else
      getInfo("Player 2 ");
    return -1*ok;
  }
  else if(id[6]=="O" && id[7]=="O" && id[8]=="O") {
    colorWinningCells(6,7,8);
    drawBlack(6,7,8);
    if(-1*ok==1)
      getInfo("Player 1 ");
    else
      getInfo("Player 2 ");
    return -1*ok;
  }
  else if(id[0]=="O" && id[4]=="O" && id[8]=="O") {
    colorWinningCells(0,4,8);
    drawBlack(0,4,8);
    if(-1*ok==1)
      getInfo("Player 1 ");
    else
      getInfo("Player 2 ");
    return -1*ok;
  }
  else if(id[2]=="O" && id[4]=="O" && id[6]=="O"){
    colorWinningCells(2,4,6);
    drawBlack(2,4,6);
    if(-1*ok==1)
      getInfo("Player 1 ");
    else
      getInfo("Player 2 ");
    return -1*ok;
  }
}
