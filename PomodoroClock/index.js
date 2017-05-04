var resumeBreak = false;
var resumeSession = false;
function resume(){
  if($(".circle-text").text()=="Session" ){
    resumeSession = ~resumeSession;
    console.log("session stopped");
  }
  else if($(".circle-text").text()=="Break!"){
    resumeBreak = ~resumeBreak;
    console.log("break stopped");
  }
}
function increaseSession(){
  var res = 0;
  res = parseInt($(".stime").text());
  res++;
  $(".stime").text(res);
}
function decreaseSession(){
  var res = 0;
  res = parseInt($(".stime").text());
  if(res>1)
    res--;
  $(".stime").text(res);
}
function increaseBreak(){
  var res = 0;
  res = parseInt($(".btime").text());
  res++;
  $(".btime").text(res);
}
function decreaseBreak(){
  var res = 0;
  res = parseInt($(".btime").text());
  if(res>1)
    res--;
  $(".btime").text(res);
}
function startSession(){
  $(".circle-text").text("Session");
  var count=$(".stime").text();
  var counter =setInterval(timer, 1000); // every second
  var seconds = 60;
  var minutes = count-1;
  var per = 0;
  function timer() {
    seconds = seconds - 1;
    $(".timer").text(minutes +" : "+ seconds);
    if(minutes==0 && seconds==0){
      clearInterval(counter);
      startBreak();
      return;
    }
    if(seconds==0){
      seconds = 60;
      minutes = minutes - 1;
    }
  }
  var time = (count*60/100)*1000;
  setInterval(function(){
    per++;
    if(per <= 100){
      $('.circle').css({background: "linear-gradient(to top, green "+per+"%,transparent "+per+"%,transparent 100%)"});
    }
  },time);
}

function startBreak(){
  $(".circle-text").text("Break!");
  var count=$(".btime").text();
  var counter=setInterval(timer, 1000); // every second
  var seconds = 60;
  var minutes = count-1;
  var per = 0;
  function timer() {
    seconds = seconds - 1;
    $(".timer").text(minutes +" : "+ seconds);
    if(minutes==0 && seconds==0){
      clearInterval(counter);
      startSession();
      return;
    }
    if(seconds==0){
      seconds = 60;
      minutes = minutes - 1;
    }
  }
  var time = (count*60/100)*1000;
  setInterval(function(){
    per++;
    if(per <= 100){
      $('.circle').css({background: "linear-gradient(to top, red "+per+"%,transparent "+per+"%,transparent 100%)"});
    }
  },time);
}
startSession();
