$(".choose1").hide();
$(".choose2").hide();
$(".game-cells").hide();
$(".your-turn").hide();
$(".computer-turn").hide();
$(".message").hide();
// matrix
var c1 = document.getElementById('cell1');
var c2 = document.getElementById('cell2');
var c3 = document.getElementById('cell3');
var c4 = document.getElementById('cell4');
var c5 = document.getElementById('cell5');
var c6 = document.getElementById('cell6');
var c7 = document.getElementById('cell7');
var c8 = document.getElementById('cell8');
var c9 = document.getElementById('cell9');
var cell = [[document.getElementById('cell1'),document.getElementById('cell2'),document.getElementById('cell3')],
[document.getElementById('cell4'),document.getElementById('cell5'),document.getElementById('cell6')],
[document.getElementById('cell7'),document.getElementById('cell8'),document.getElementById('cell9')]];
var ids  = [".cell1",".cell2",".cell3",".cell4",".cell5",".cell6",".cell7",".cell8",".cell9"];
var id = ["","","","","","","","",""];
var turns = 0;
var loops = 0;
var nextTurn = 1;
var Won = false;
var player1Score = 0;
var player2Score = 0;
var isRunning1 = false;
var isRunning2 = false;
var player1X = false;
var player1O = false;
var player1Val = "";
var player2Val = "";
var el2x = document.getElementById('x');
el2x.addEventListener("click", function(){
  el2x.value = true;
  isRunning2 = true;
}, false);
var el2o = document.getElementById('o');
el2o.addEventListener("click",function(){
  el2o.value = true;
  isRunning2 = true;
},false);
var el1x = document.getElementById('x1');
el1x.addEventListener("click", function(){
  el1x.value = true;
  isRunning1 = true;
}, false);
var el1o = document.getElementById('o1');
el1o.addEventListener("click",function(){
  el1o.value = true;
  isRunning1 = true;
},false);
function displayOptions1(){
  $(".menu").hide();
  $(".choose1").show();
  $(".choose1").click(function(){
    $(".choose1").val(true);
  });
  $(".choose2").val(false);
}
function displayOptions2(){
  $(".menu").hide();
  $(".choose2").show();
  $(".choose2").click(function(){
    $(".choose2").val(true);
  });
  $(".choose1").val(false);
}
function returnToMenu(){
  $(".choose1").hide();
  $(".choose2").hide();
  $(".menu").show();
}
function playGame1(){
  $(".choose1").hide();
  $(".computer-text").text("computer").show();
  $(".game-cells").show();
  clearCells();
  console.log("Game 1 started ");
  setTimeout(initialize,100);
  var timer = setTimeout(run,100);
  function initialize(){
    if($(".choose1 > .x").val()==true){
      player1Val= $(".choose1 > .x").text();
      player2Val = 'O';
    }
    if($(".choose1 > .o").val()==true){
      player1Val = $(".choose1 > .o").text();
      player2Val = 'X';
    }
  }
  function run(){
    console.log(player1Val + " "+ player2Val);
    if(!isFull() &&  isRunning1){
        //setTimeout(run,100);
        //console.log("val 1 "+player1Val + " val 2 "+player2Val);
        fillUp1();
    }
  }
}
var cnt = 0;
function generateRandom(){
  var temp = [];
  cnt++;
  for(var i=0;i<ids.length;i++){
    if($(ids[i]).text()==""){
      temp.push(ids[i]);
    }
  }
  var id = Math.floor(Math.random()*temp.length);
  console.log("random " + Math.floor(Math.random()*temp.length) + " times "+cnt);
  if(temp.length>0 && turns%2==1){
     $(temp[id]).text(player2Val);
     turns++;
  }
  return id;
}
function clickCells(){
  var map = [];
  var temp = [];
  for(var i=0;i<ids.length;i++){
    if($(ids[i]).text()=="") temp.push(ids[i]);
  }
  var once = false;
  for(var i=0;i<temp.length;i++){
    (function (index,on){
      if(!on) {
      $(temp[index]).on("click",function(e){
        if($(temp[index]).text()=="" ){
          $(temp[index]).text(player1Val);
          console.log("first player clicked ");
          once = true;
          turns++;
          //e.stopPropagation();
          //setTimeout(clickCells,1000);
          //return;
        }
      });
    }
    else $(temp[index]).off();

    //} //if
    //else {
    //  console.log("break out ");
    //  return false;
    //}
  })(i,once);
  }
  console.log("finished");
}
function fillUp1(){
  if($(".choose1").val()){
    if(turns%2==0){
      clickCells();
    }
    if(turns%2==1) {
      console.log("here ");
      generateRandom();
    }
  }
}
function fillUp12(){
  if($(".choose1").val()){
    nextTurn = 1;
    Won = false;
    loops = 0;
    id = ['','','','','','','','',''];
    clearCells();
    for(var i=0;i<ids.length;i++){
      (function(index) {
        if(turns%2==0){
          $(".computer-turn").hide();
          $(".your-turn").show();
        }
        if(turns%2==1){
          $(".your-turn").hide();
          $(".computer-turn").show();
        }
        $(ids[index]).on('click',function(e){
         if((turns%2==0) && $(this).text()=="" && $(".choose1").val()) {
           $(this).text(player1Val);
           turns++;
           loops++;
           id[index] = player1Val;
            if(turns%2==1){
              $(".computer-turn").hide();
              $(".your-turn").show();
            }
            if(whoWins(player1Val)==1) {
              console.log("First wins ");
              player1Score++;
              $(".player1 > .score").text(player1Score);
              nextTurn = 1;
              turns = 0;
              setTimeout(fillUp1,1200);
              Won = true;
            }
            else nextTurn = 2;
            if(loops==9 && !Won) {
              onDraw();
              setTimeout(fillUp1,1000);
            }
         }
         else if(turns%2==1 && $(this).text()=="" && $(".choose1").val()) {
           console.log("Turns "+turns);
           //$(ids[index]).text(player2Val);
           //id[index] = player2Val;
           var t = generateRandom();
           id[t] = player2Val;
           turns++;
           loops++;
           if(turns%2==0){
             $(".your-turn").hide();
             $(".computer-turn").show();
           }
           if(whoWins(player1Val)==-1) {
             console.log("Second wins ");
             player2Score++;
             $(".computer > .score").text(player2Score);
             nextTurn = 2;
             turns = 1;
             setTimeout(fillUp1,1000);
             Won = true;
           }
           else nextTurn = 1;
           if(loops==9 && !Won) {
             onDraw();
             setTimeout(fillUp1,1000);
           }
         }
      });
    })(i);
   }
 }
}
function reset(){
  isRunning1 = false;
  isRunning2 = false;
  turns = 0;
  player2Score = 0;
  player1Score = 0;
  player1Val = "";
  player2Val = "";
  $(".choose1").val(false);
  $(".choose2").val(false);
  $(".game-cells").hide();
  $(".menu").show();
  $(".computer-turn").hide();
  $(".your-turn").hide();
  $(".choose2 > .x").val(false);
  $(".choose2 > .o").val(false)
  $(".player1 .score").text(0);
  $(".computer .score").text(0);
}
function playGame2(){
  console.log("Game 2 started ");
  $(".computer-text").hide();
  $(".computer-text").text("player 2").show();
  $(".choose2").hide();
  $(".game-cells").show();
  clearCells();
  var timer = setTimeout(run,100);
  setTimeout(initialize,100);
  function initialize(){
    if($(".choose2 > .x").val()==true){
      player1Val= $(".choose2 > .x").text();
      player2Val = 'O';
    }
    if($(".choose2 > .o").val()==true){
      player1Val = $(".choose2 > .o").text();
      player2Val = 'X';
    }
  }
  function run(){

    if(!isFull() &&  isRunning2){
        //setTimeout(run,100);
        //console.log("val 1 "+player1Val + " val 2 "+player2Val);
        fillUp2();
    }
  }
}
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
function onDraw(){
  $(".board").css({"background-color":"black"});
  getInfo();
  setTimeout(function(){
    $(".board").css({"background-color":"#808000"});
  },1000);
  function getInfo(){
    setTimeout(get,300);
    function get(){
      $(".message").text("It was a draw ");
      $(".message").show();
    }
    setTimeout(disable,1000);
    function disable(){
      $(".message").hide();
    }
  }
}
function fillUp2(){
    if($(".choose2").val()){
      nextTurn = 1;
      Won = false;
      loops = 0;
      id = ['','','','','','','','',''];
      clearCells();
      for(var i=0;i<ids.length;i++){
        (function(index) {
          if(turns%2==0){
            $(".computer-turn").hide();
            $(".your-turn").show();
          }
          if(turns%2==1){
            $(".your-turn").hide();
            $(".computer-turn").show();
          }
          $(ids[index]).on('click',function(e){
           if((turns%2==0) && $(this).text()=="" && $(".choose2").val()) {
             $(this).text(player1Val);
             turns++;
             loops++;
             id[index] = player1Val;
              if(turns%2==1){
                $(".computer-turn").hide();
                $(".your-turn").show();
              }
              if(whoWins(player1Val)==1) {
                console.log("First wins ");
                player1Score++;
                $(".player1 > .score").text(player1Score);
                nextTurn = 1;
                turns = 0;
                setTimeout(fillUp2,1200);
                Won = true;
              }
              else nextTurn = 2;
              if(loops==9 && !Won) {
                onDraw();
                setTimeout(fillUp2,1000);
              }
           }
           else if(turns%2==1 && $(this).text()=="" && $(".choose2").val()) {
             $(ids[index]).text(player2Val);
             id[index] = player2Val;
             turns++;
             loops++;
             if(turns%2==0){
               $(".your-turn").hide();
               $(".computer-turn").show();
             }
             if(whoWins(player1Val)==-1) {
               console.log("Second wins ");
               player2Score++;
               $(".computer > .score").text(player2Score);
               nextTurn = 2;
               turns = 1;
               setTimeout(fillUp2,1000);
               Won = true;
             }
             else nextTurn = 1;
             if(loops==9 && !Won) {
               onDraw();
               setTimeout(fillUp2,1000);
             }
           }
        });
      })(i);
     }
   }
}
function isFull(){
  console.log("why check for that ");
  var cnt = 0;
  for(var i=0;i<ids.length;i++){
    if($(ids[i]).text()=="X" || $(ids[i]).text()=="O") cnt++;
  }
  if(cnt===9) isRunning = false;
  return cnt===9;
}
function clearCells(){
  for(var i=0;i<ids.length;i++){
    $(ids[i]).text("");
  }
}
