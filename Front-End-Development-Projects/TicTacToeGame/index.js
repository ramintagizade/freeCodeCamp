$(".choose1").hide();
$(".choose2").hide();
$(".game-cells").hide();
$(".your-turn").hide();
$(".computer-turn").hide();
$(".message").hide();
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
var idsx  = ["cell1","cell2","cell3","cell4","cell5","cell6","cell7","cell8","cell9"];
var board = [["","",""],["","",""],["","",""]];
var id = ["","","","","","","","",""];
var b  = [[".cell1",".cell2",".cell3"],[".cell4",".cell5",".cell6"],[".cell7",".cell8",".cell9"]];
var turns = 0;
var loops = 0;
var nextTurn = 1;
var x , y;
var Won = false;
var player1Score = 0;
var player2Score = 0;
var isRunning1 = false;
var isRunning2 = false;
var player1X = false;
var player1O = false;
var player1Val = "";
var player2Val = "";
var firstMove = false;
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
  $(".computer-turn").text("Computer's turn ");
  $(".your-turn").text("Your turn");
  $(".game-cells").show();
  clearCells();
  console.log("Game 1 started ");
  setTimeout(initialize,100);
  var timer = setTimeout(run,100);
  firstMove = false;
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
        fillUp1();
    }
  }
}
function playGame2(){
  $(".computer-text").hide();
  $(".computer-text").text("player 2").show();
  $(".computer-turn").text("Go Player 2");
  $(".your-turn").text("Go Player 1");
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
        fillUp2();
    }
  }
}
function AIWithMinMax(board){
  var player = player1Val;
  var opponent = player2Val;
  function isLeft(){
    for(var i=0;i<3;i++){
      for(var j=0;j<3;j++){
        if(board[i][j]==""){
          return true;
        }
      }
    }
    return false;
  }
  function check(b){
    //checking rows
    for(var r=0;r<3;r++){
      if(b[r][0]==b[r][1] && b[r][1]==b[r][2]){
        if(b[r][0]==player)
          return 10;
        else if(b[r][0]==opponent)
          return -10;
      }
    }
    //checking columns
    for(var c=0;c<3;c++){
      if(b[0][c]==b[1][c] && b[1][c]==b[2][c]){
        if(b[0][c]==player)
          return 10;
        else if(b[0][c]==opponent)
          return -10;
      }
    }
    //checking diagonals
    if(b[0][0]==b[1][1] && b[1][1]==b[2][2]) {
      if(b[0][0]==player)
        return 10;
      else if(b[0][0]==opponent)
        return -10;
     }
     if(b[0][2]==b[1][1] && b[1][1]==b[2][0]){
       if(b[0][2]==player)
          return 10;
        else if(b[0][2]==opponent)
          return -10;
     }
     return 0;
  }
  function max(a, b){
    if(a > b ) return a;
    else return b;
  }
  function min(a, b){
    if(a >  b) return b;
    else return a;
  }
  function minimax(board,depth,isMax){
    var score = check(board);
    if(score == 10)
      return 10-depth;
    if(score==-10)
      return -10+depth;
    if(!isLeft(board))
      return 0;
    //if it maximises
    if(isMax){
      var best = -1000;
      for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
          if(board[i][j]==""){
            board[i][j] = opponent;
            best = max(best,minimax(board,depth+1,!isMax));
            board[i][j] = "";
          }
        }
      }
      return best;
    }
    //if it minimises
    else {
      var best = 1000;
      for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
          if(board[i][j]==""){
            board[i][j] = player;
            best = min(best,minimax(board,depth+1,!isMax));
            board[i][j] = "";
          }
        }
      }
      return best;
    }
  }
  var bestMove = {
    row : 0,
    col : 0
  };
  var tp = [];
  function searchBestMove(board){
    var best = -500;
    for(var i=0;i<3;i++){
      for(var j=0;j<3;j++){
        if(board[i][j]==""){
          board[i][j] = player;
          var curVal  = minimax(board,0,false);
          board[i][j] = "";
          if(curVal > best ){
            bestMove.row = i;
            bestMove.col = j;
            best = curVal;
          }
        }
      }
    }
    x = bestMove.row;
    y = bestMove.col;
    tp.push(x);
    tp.push(y);
    return tp;
  }
  return searchBestMove(board);
}

var clicked = false;
function clickCells(fn){
  var temp = [];
  for(var i=0;i<ids.length;i++){
    if($(ids[i]).text()=="") {
      temp.push(ids[i]);
    }
  }
  function response(i){
    $(temp[i]).text(player1Val);
    id[i] = player1Val;
    for(var r=0;r<3;r++){
      for(var c=0;c<3;c++){
        if(b[r][c]==temp[i]){
          board[r][c] = player1Val;
          console.log("r c"+ r+ " "+c);
          return ;
        }
      }
    }
  }
  var listeners = {};
  var clicked = false;
  for(var i=0;i<temp.length;i++){
    (function outer(ind){
      var listener = function (e){
        response(ind);
        clicked = true;
      }
      $(temp[ind]).on("click",listener);
      listeners[temp[ind]] = listener;
    })(i);
  }
  function checkForClick(){
    if(!clicked){
      setTimeout(checkForClick,0);
      return ;
    }
    for(var i=0;i<temp.length;i++){
      $(temp[i]).off("click",listeners[temp[i]]);
    }
    fn(clicked);
  }
  checkForClick();
}
var cnt = 0;
var trick = false;
function fillUp1(){
  if($(".choose1").val()){
      if(!firstMove){
        console.log("STARTED ");
        clearBoard();
        cnt++;
        var randomTurn = Math.floor(Math.random()*2);
        if(randomTurn==1){
          turns = 1;
          $(".computer-turn").show();
          $(".your-turn").hide();
          //generateRandom();
          //AI();
          tt = AIWithMinMax(board);
          x = tt[0];
          y = tt[1];
          board[x][y] = player2Val;
          $(b[x][y]).text(player2Val);
          console.log(x + " x y "+ y);
          setTimeout(function(){
            $(".computer-turn").hide();
            $(".your-turn").show();
            turns++;
          },200);
          nextTurn = 1;
        }
        if(randomTurn==0){
          turns = 0;
          nextTurn = 1;
          $(".computer-turn").hide();
          $(".your-turn").show();
          trick = false;
        }
        firstMove = true;
      }
      else {
        if(nextTurn == 2){
          $(".computer-turn").show();
          $(".your-turn").hide();
          setTimeout(function(){
            //generateRandom();
            //AI();
            tt = AIWithMinMax(board);
            x = tt[0];
            y = tt[1];
            board[x][y] = player2Val;
            console.log(x + " x y "+ y);
            $(b[x][y]).text(player2Val);
          },2000);
          nextTurn = 1;
        }
        if(nextTurn == 1){
          setTimeout(function (){
            $(".computer-turn").hide();
            $(".your-turn").show();
          },2000);
        }
      }
      var once = false;
      clickCells(function(value){
        if(whoWins1(player1Val)==1){
          nextTurn = 1;
          player1Score++;
          $(".player1 > .score").text(player1Score);
          clearBoard();
          setTimeout(fillUp1,2000);
          return false;
        }
        $(".computer-turn").show();
        $(".your-turn").hide();
        //if(!once){
           //generateRandom();
           //AI();
           //if(!trick){
            // $(b[1][1]).text(player2Val);
            // board[1][1] = player2Val;
            // trick = true;
           //}
           //else {
            var tt = [];
            tt = AIWithMinMax(board);
            x = tt[0];
            y = tt[1];
            board[x][y] = player2Val;
            console.log(x + " x y "+ y);
            $(b[x][y]).text(player2Val);
            //}
        //}
        if(whoWins1(player1Val)==-1){
          nextTurn = 2;
          player2Score++;
          $(".computer > .score").text(player2Score);
          clearBoard();
          setTimeout(fillUp1,2000);
          return false;
        }
        if(isFull()){
          onDraw();
          setTimeout(function(){
             firstMove = false;
            clearBoard();
             fillUp1();
          },2000);
        }
        setTimeout(fillUp1,0);
      });
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
  for(var i=0;i<ids.length;i++){
    $(ids[i]).off();
  }
  clearCells();
  firstMove = false;
}
function whoWins1(first){
  var ok = -1;
  if(first=="X") ok = 1;
  if(first=="O") ok = -1;
  function colorWinningCells(i, j , k){
    $(ids[i]).attr('style', 'background-color: black !important');
    $(ids[j]).attr('style', 'background-color: black !important');
    $(ids[k]).attr('style', 'background-color: black !important');
    function fun1(){
      setTimeout(function(){
        backUpColor(i,j,k);
      },200);
    }
    function fun2(){
      setTimeout(function(){
        drawAllBlack ();
      },300);
    }
    fun2();
    function fun3(){
      setTimeout(function(){
        restoreColor();
      },2000);
    }
    fun3();
    fun1();
  }
  function getInfo(){
    setTimeout(get,0);
    function get(){
      if(won()==1 && $(".choose2").val())
        $(".message").text("Player 1 wins .");
      else if(won()==-1 && $(".choose2").val())
        $(".message").text("Player 2 wins .");
      else if($(".choose1").val())
        $(".message").text("Oh , you lost .");
      $(".message").show();
    }
    setTimeout(disable,1000);
    function disable(){
      disableInfo();
    }
  }
  function disableInfo(){
    $(".message").hide();
  }
  function backUpColor(i,j,k){
      $(ids[i]).attr('style', 'background-color: "#808000" !important');
      $(ids[j]).attr('style', 'background-color: "#808000" !important');
      $(ids[k]).attr('style', 'background-color: "#808000" !important');
  }
  function drawAllBlack(){
    $(".board").attr('style', 'background-color: black !important');
    getInfo();
  }
  function restoreColor(){
    $(".board").attr('style', 'background-color: "#808000" !important');
    clearCells();
  }
  function won() {
    if( $(ids[0]).text()=="X" && $(ids[3]).text()=="X" && $(ids[6]).text()=="X"){
      colorWinningCells(0,3,6);
      return 1*ok;
    }
    else if( $(ids[1]).text()=="X" && $(ids[4]).text()=="X" && $(ids[7]).text()=="X") {
      colorWinningCells(1,4,7);
      return 1*ok;
    }
    else if($(ids[2]).text()=="X" && $(ids[5]).text()=="X" && $(ids[8]).text()=="X"){
      colorWinningCells(2,5,8);
      return 1*ok;
    }
     else if($(ids[0]).text()=="X" && $(ids[1]).text()=="X" && $(ids[2]).text()=="X") {
       colorWinningCells(0,1,2);
       return 1*ok;
     }
    else if($(ids[3]).text()=="X" && $(ids[4]).text()=="X" && $(ids[5]).text()=="X"){
      colorWinningCells(3,4,5);
      return 1*ok;
    }
    else if($(ids[6]).text()=="X" && $(ids[7]).text()=="X" && $(ids[8]).text()=="X") {
      colorWinningCells(6,7,8);
      return 1*ok;
    }
    else if($(ids[0]).text()=="X" && $(ids[4]).text()=="X" && $(ids[8]).text()=="X") {
      colorWinningCells(0,4,8);
      return 1*ok;
    }
    else if($(ids[2]).text()=="X" && $(ids[4]).text()=="X" && $(ids[6]).text()=="X"){
      colorWinningCells(2,4,6);
      return 1*ok;
    }
    else if($(ids[0]).text()=="O" && $(ids[3]).text()=="O" && $(ids[6]).text()=="O") {
      colorWinningCells(0,3,6);
      return -1*ok;
    }
    else if($(ids[1]).text()=="O" && $(ids[4]).text()=="O" && $(ids[7]).text()=="O") {
      colorWinningCells(1,4,7);
      return -1*ok;
    }
    else if($(ids[2]).text()=="O" && $(ids[5]).text()=="O" && $(ids[8]).text()=="O") {
      colorWinningCells(2,5,8);
      return -1*ok;
    }
    else if($(ids[0]).text()=="O" && $(ids[1]).text()=="O" && $(ids[2]).text()=="O"){
      colorWinningCells(0,1,2);
      return -1*ok;
    }
    else if($(ids[3]).text()=="O" && $(ids[4]).text()=="O" && $(ids[5]).text()=="O"){
      colorWinningCells(3,4,5);
      return -1*ok;
    }
    else if($(ids[6]).text()=="O" && $(ids[7]).text()=="O" && $(ids[8]).text()=="O") {
      colorWinningCells(6,7,8);
      return -1*ok;
    }
    else if($(ids[0]).text()=="O" && $(ids[4]).text()=="O" && $(ids[8]).text()=="O") {
      colorWinningCells(0,4,8);
      return -1*ok;
    }
    else if($(ids[2]).text()=="O" && $(ids[4]).text()=="O" && $(ids[6]).text()=="O"){
      colorWinningCells(2,4,6);
      return -1*ok;
    }
  }
  return won();

}

function onDraw(){
  firstMove = false;
  $(".board").css({"background-color":"black"});
  getInfo();
  setTimeout(function(){
    $(".board").css({"background-color":"#808000"});
    clearCells();
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
                $(".computer-turn").show();
                $(".your-turn").hide();
              }
              if(whoWins1(player1Val)==1) {
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
               $(".your-turn").show();
               $(".computer-turn").hide();
             }
             if(whoWins1(player1Val)==-1) {
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
function clearBoard(){
  for(var i=0;i<3;i++){
    for(var j=0;j<3;j++){
      board[i][j] = "";
    }
  }
}
