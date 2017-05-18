var off = true;
var strictLamp = false;
var ids = [".red-area",".blue-area",".yellow-area",".green-area"];
var audio = {};
audio[ids[0]]= new Audio();
audio[ids[0]].src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3";
audio[ids[1]] = new Audio();
audio[ids[1]].src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3";
audio[ids[2]] = new Audio();
audio[ids[2]].src = "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3";
audio[ids[3]] = new Audio();
audio[ids[3]].src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3";
audio["error"] = new Audio();
audio["error"].src = "https://rawgit.com/ramintagizade/freeCodeCamp/master/SimonGame/error.mp3";
var list = [];
var wrongGuess = false;
var level = 0;
var startTime  = new Date();
var strictMode = false;
$(".offbtn").on("click",function(){
   off=!off;
   if(!off){
    $(".offbtn").animate({"margin-left": '+=19'});
    $(".level").text("- -");
    $(".level").animate({ opacity: 1 });
   }
  else {
    strictMode = false;
    level = 1;
    list = [];
    $(".offbtn").animate({"margin-left": '-=19'});
    $(".level").text("- -");
    $(".level").animate({ opacity: 0.3 });
    $(".strict-lamp").css({"background-color":"black"});
  }
});
function start(){
  if(!off){
    //start the game
    blink();
    level = 1;
    list = [];
    $(".level").text(level);
    generateClick();
  }
  function blink() {
        for(var i=0;i<2;i++)
          $(".level").fadeTo(100, 0.1).fadeTo(200, 1.0);
    }
}
function generateClick(){
  console.log("started generating ");
  var cnt = 1;
  var rnd = Math.floor(Math.random()*ids.length);
  if(!wrongGuess ){
    list.push(ids[rnd]);
  }
  if(wrongGuess && list.length==0){
    list.push(ids[rnd]);
  }
  for(var i=0;i<list.length;i++){
    (function(index){
      setTimeout(function(){
        cnt++;
        $(list[index]).fadeTo(100, 0.2, function() { $(this).fadeTo(500, 1.0); });
        audio[list[index]].play();
        startTime = new Date();
      },i*1000);

    })(i);
  }
  function wait(){
    if(cnt<list.length){
       setTimeout(wait,0);
       return false;
    }
    console.log("finished waiting ...");
    followClicks();
  }
  wait();
  console.log(list.length);
}
function followClicks(){
  console.log("LIST "+list);
  startTime = new Date();
  var j = 0;
  for(var i=0;i<ids.length;i++){
    $(ids[i]).off();
  }
  $(document).ready(function(){
  for(var i=0;i<ids.length;i++){
      var  current = ids[i];
      $(current).click((function(value){
        return function(){
          startTime = new Date();
          if(list[j]==value){
            $(list[j]).fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });
            audio[value].play();
            j++;
            console.log("correct guess");
            //increase the level of game
            if(j==list.length){
              level++;
              $(".level").text(level);
              wrongGuess = false;
              setTimeout(generateClick,1000);
            }
          }
          else {
            console.log("wrong ");
            audio["error"].play();
            $(".level").text("! !");
            setTimeout(function(){
              if(strictMode){
                start();
              }
              else {
                $(".level").text(level);
                wrongGuess = true;
                generateClick();
              }
            },1000);
            j = 0;
          }
        };
      })(current));
  }
});
  function check(){
    console.log("checking ...");
    if((get()-startTime)/1000 > 5 && !off) {
      console.log("oops ");
      audio["error"].play();
      $(".level").text("! !");
      setTimeout(function(){
        $(".level").text(level);
        wrongGuess = true;
        startTime = new Date();
        generateClick();
      },1000);
      j = 0;
    }
    else if(!off)
      setTimeout(check,100);
  }
  check();
  function get(){
    return (new Date());
  }
}
function strict(){
  strictLamp = !strictLamp;
  if(strictLamp && !off){
    strictMode = true;
    $(".strict-lamp").css({"background-color":"red"});
  }
  else {
    strictMode = false;
    $(".strict-lamp").css({"background-color":"black"});
  }
}
