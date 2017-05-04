var cur = "0";
var oper = "0";
var res = 0;
var sum = 0;
var ok = false;
var begin = false;
var isDiv = false;
var isMul = false;
var isAdd = false;
var isSub = false;
var isClear = false;
$(".currentValue").html(cur);
function clearAll(){   //AC
  cur = "0";
  oper = "0";
  res = 0;
  begin = false;
  $(".currentValue").html(cur);
}
function clearPartial(){  // CE
  oper = "";
  isClear = true;
  isAdd = false;
  isMul = false;
  isDiv = false;
  isSub = false;
  var cnt = 0;
  var operand = false;
  for(var i = cur.length-1;i>=0;i--){
    if(cur[i]==="+" || cur[i]==="-" || cur[i]==="x" || cur==="/"){
      cur=cur.slice(0,-1);
      console.log(cur);
      operand = true;
      break;
    }
    else break;
  }
  if(!operand){
    for(i=cur.length-1;i>=0;i--){
      if(cur[i]!="+" && cur[i]!="-" && cur[i]!="/" && cur[i]!="x"){
        cnt++;
      }
      else {
        cnt++;
        break;
      }
    }
  }
  if(cnt>0){
    cur = cur.slice(0,-1*(cnt));
  }

  var curstring = "";
  var firstTimes = true;
  var temp = "";
  var s = false;
  var m = false;
  var d = false;
  var a = false;
  for(var i=0;i<cur.length;i++){
      if(firstTimes && cur[i]!="+" && cur[i]!="-" && cur[i]!="/" && cur[i]!="x"){
        temp+=cur[i];
      }
      if(!firstTimes && cur[i]!="+" && cur[i]!="-" && cur[i]!="/" && cur[i]!="x"){
        curstring+=cur[i];
        if(cur[i+1]==="+" || cur[i+1]==="-" || cur[i+1]==="/" || cur[i+1]=="x" || i==cur.length-1){
          if(s){
            temp = parseFloat(temp) - parseFloat(curstring);
            s = false;
            curstring = "";
          }
          if(d){
            temp = parseFloat(temp) / parseFloat(curstring);
            d = false;
            curstring = "";
          }
          if(a){
            temp = parseFloat(temp) + parseFloat(curstring);
            a = false;
            curstring = "";
          }
          if(m){
            temp = parseFloat(temp) * parseFloat(curstring);
            m = false;
            curstring = "";
          }
        }
      }
      if(cur[i]==="+"){
        firstTimes = false;
        a = true;
      }
      if(cur[i]==="x"){
        firstTimes = false;
        m = true;
      }
      if(cur[i]=="/"){
        firstTimes = false;
        d = true;
      }
      if(cur[i]==="-"){
        firstTimes = false;
        s = true;
      }
  }
  //}
  if(temp==""){
    res = 0;
    $(".currentValue").html(res);
    cur = "";
  }
  else {
    res = temp;
    $(".currentValue").html(cur);
  }
}
function divide(){
  if(isAdd){
    res = (parseFloat(res) + parseFloat(oper));
    oper = "";
    isAdd = false;
  }
  if(isMul){
    res = (parseFloat(res) * parseFloat(oper));
    oper = "";
    isMul = false;
  }
  if(isSub){
    res = (parseFloat(res) - parseFloat(oper));
    oper = "";
    isSub = false;
  }
  if(oper.length > 0 ){  // calculate
    res = (parseFloat(res) / parseFloat(oper));
    oper = "";
  }
  ok = true;
  isDiv = true;
  if(!begin){
    res = parseFloat($(".currentValue").text());
    begin = true;
  }
  cur+="/";
  $(".currentValue").html(cur);
}

function multiply(){
  if(isAdd){
    res = (parseFloat(res) + parseFloat(oper));
    oper = "";
    isAdd = false;
  }
  if(isDiv){
    res = (parseFloat(res) / parseFloat(oper));
    oper = "";
    isDiv = false;
  }
  if(isSub){
    res = (parseFloat(res) - parseFloat(oper));
    oper = "";
    isSub = false;
  }
  if(oper.length > 0 ){  // calculate
    res = (parseFloat(res) * parseFloat(oper));
    oper = "";
  }
  isMul = true;
  ok = true;
  if(!begin){
    res = parseFloat($(".currentValue").text());
    begin = true;
  }
  cur+="x";
  $(".currentValue").html(cur);
}

function seven(){
  if(cur=="0") cur = "";
  cur+=7;
  if(oper=="0") oper = "";
      oper+=7;
  $('.currentValue').html(cur);
}

function eight(){
  if(cur=="0") cur = "";
  cur+=8;
  if(oper=="0") oper = "";
  oper+=8;
  $('.currentValue').html(cur);
}

function nine(){
  if(cur=="0") cur = "";
  cur+=9;
  if(oper=="0") oper = "";
  oper+=9;
  $('.currentValue').html(cur);
}

function subtract(){
  if(isAdd){
    res = (parseFloat(res) + parseFloat(oper));
    oper = "";
    isAdd = false;
  }
  if(isDiv){
    res = (parseFloat(res) / parseFloat(oper));
    oper = "";
    isDiv = false;
  }
  if(isMul){
    res = (parseFloat(res) * parseFloat(oper));
    oper = "";
    isMul = false;
  }
  if(oper.length > 0 ){  // calculate
    res = (parseFloat(res) - parseFloat(oper));
    oper = "";
  }
  isSub = true;
  ok = true;
  if(!begin){
    res = parseFloat($(".currentValue").text());
    begin = true;
  }
  cur+="-";
  $(".currentValue").html(cur);
}

function four(){
  if(cur=="0") cur = "";
  cur+=4;
  if(oper=="0") oper = "";
  oper+=4;
  $('.currentValue').html(cur);
}

function five(){
  if(cur=="0") cur = "";
  cur+=5;
  if(oper=="0") oper = "";
  oper+=5;
  $('.currentValue').html(cur);
}

function six(){
  if(cur=="0") cur = "";
  cur+=6;
  if(oper=="0") oper = "";
  oper+=6;
  $('.currentValue').html(cur);
}

function add(){

  if(isMul){
    res = (parseFloat(res) * parseFloat(oper));
    oper = "";
    isMul = false;
  }
  if(isDiv){
    res = (parseFloat(res) / parseFloat(oper));
    oper = "";
    isDiv = false;
  }
  if(isSub){
    res = (parseFloat(res) - parseFloat(oper));
    oper = "";
    isSub = false;
  }
  if(oper.length > 0 ){  // calculate
    res = (parseFloat(res) + parseFloat(oper));
    oper = "";
  }
  isAdd = true;
  ok = true;
  if(!begin){
    res = parseFloat($(".currentValue").text());
    begin = true;
  }
  cur+="+";
  $(".currentValue").html(cur);
}

function one(){
  if(cur=="0") cur = "";
  cur+=1;
  if(oper=="0") oper = "";
  oper+=1;
  $('.currentValue').html(cur);
}

function two(){
  if(cur=="0") cur = "";
  cur+=2;
  if(oper=="0") oper = "";
  oper+=2;
  $('.currentValue').html(cur);
}

function three(){
  if(cur=="0") cur = "";
  cur+=3;
  if(oper=="0") oper = "";
  oper+=3;
  $('.currentValue').html(cur);
}

function equal(){
  if(isMul){
    res = ((res) * parseFloat(oper));
    oper = "";
    isMul = false;
  }
  if(isDiv){
    res = ((res) / parseFloat(oper));
    oper = "";
    isDiv = false;
  }
  if(isSub){
    res = ((res) - parseFloat(oper));
    oper = "";
    isSub = false;
  }
  if(isAdd){
    res = ((res) + parseFloat(oper));
    oper = "";
    isAdd = false;
  }
  $(".currentValue").text(parseFloat(res).toString());
  oper = "";
  cur =res;
}

function zero(){
  if(cur=="0") cur = "";
  cur+=0;
  if(oper=="0") oper = "";
  oper+=0;
  $('.currentValue').html(cur);
}

function dot(){
  if(oper.indexOf(".")==-1){
    cur+=".";
    oper+=".";
  }
  $('.currentValue').html(cur);
}
