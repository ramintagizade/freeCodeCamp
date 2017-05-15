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
  if(resumeSession){
    $(".timer").html($(".stimer").text());
  }
}
function decreaseSession(){
  var res = 0;
  res = parseInt($(".stime").text());
  if(res>1)
    res--;
  $(".stime").text(res);
  if(resumeSession){
    $(".timer").html($(".stimer").text());
  }
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
  var counter =setInterval(timer, 1000); // every second
  count=$(".stime").text();
  var seconds = 60;
  var minutes = count-1;
  var per = 0;
  function timer() {
    if(!resumeSession)
      seconds = seconds - 1;
    if(resumeSession){
      var temp =$(".stime").text();
      // value changes
      if(temp!=count){
        count = temp;
        per = 0;
        seconds = 60;
        minutes = count-1;
        $('.circle').css({background: "linear-gradient(to top, green "+0+"%,transparent "+0+"%,transparent 100%)"});
        $(".timer").text($(".stime").text());
      }
    }
    else
      $(".timer").text(minutes +" : "+ seconds);
    // increase drawing percentage
    if(per <= 100 && !resumeSession){
      per = per + 100/(count*60);
      $('.circle').css({background: "linear-gradient(to top, green "+per+"%,transparent "+per+"%,transparent 100%)"});
    }

    if(minutes==0 && seconds==0){
      clearInterval(counter);
      var audio = new Audio('beep-05.mp3');
      audio.play();
      startBreak();
      return;
    }
    if(seconds==0){
      seconds = 60;
      minutes = minutes - 1;
    }
  }
}

function startBreak(){
  $(".circle-text").text("Break!");
  var count=$(".btime").text();
  var counter=setInterval(timer, 1000); // every second
  var seconds = 60;
  var minutes = count-1;
  var per = 0;
  function timer() {
    if(!resumeBreak)
      seconds = seconds - 1;
    if(resumeBreak){
        var temp =$(".btime").text();
        // value changes
        if(temp!=count){
          count = temp;
          per = 0;
          seconds = 60;
          minutes = count-1;
          $('.circle').css({background: "linear-gradient(to top, red "+0+"%,transparent "+0+"%,transparent 100%)"});
          $(".timer").text($(".btime").text());
        }
    }
    else
      $(".timer").text(minutes +" : "+ seconds);
    // increase drawing percentage
    if(per <= 100 && !resumeBreak){
      per = per + 100/(count*60);
      $('.circle').css({background: "linear-gradient(to top, red "+per+"%,transparent "+per+"%,transparent 100%)"});
    }
    if(minutes==0 && seconds==0){
      clearInterval(counter);
      var audio = new Audio('beep-05.mp3');
      audio.play();
      startSession();
      return;
    }
    if(seconds==0){
      seconds = 60;
      minutes = minutes - 1;
    }
  }
}
startSession();
