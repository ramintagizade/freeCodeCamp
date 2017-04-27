var isAll = true;
var isOnline =false;
var isOffline = false;
function allPressed(){
  ListAll();
  isAll = true;
  isOffline = false;
  isOnline = false;
}
function onlinePressed(){
  ListOnlineUsers();
  isAll = false;
  isOffline = false;
  isOnline = true;
}
function offlinePressed(){
  ListOfflineUsers();
  isAll = false;
  isOffline = true;
  isOnline = false;
}
var url = "https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/streams/";
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "C9Sneaky", "habathcx", "RobotCaleb", "noobs2ninjas"];
var online = [];
var offline = [];
function ListAll(){
  $(function () {
  var html = "";
  var twitchChannelURL = 'https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/channels/';
  var twitchStreamsURL = 'https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/streams/';
    var subs = [
      'ESL_SC2',
      'OgamingSC2',
      'cretetion',
      'freecodecamp',
      'C9Sneaky',
      'habathcx',
      'RobotCaleb',
      'noobs2ninjas'
    ];
      subs.forEach(function(sub){

        $.getJSON(twitchChannelURL + sub, function (user) {
        return {
          id: user._id,
          name: user.display_name,
          logo: user.logo,
          url: user.url
        };
      }).then(function (user) {
        $.getJSON(twitchStreamsURL + user.name , function (streamData) {
          if (streamData.stream !== null) {
            console.log("ONLINE ++++++++++++++++++++++++ "+streamData.stream.channel.display_name);
            html+= '<div  style="background-color:blue !important" id="'+streamData.stream.channel.display_name+'" class="itemall"> <a target="_blank" href="'+streamData.stream.channel.url+'" > <img src='+streamData.stream.channel.profile_banner+' width=15% height=15% > '+'<h style="color:red">'+streamData.stream.channel.display_name+' </h> '+'<p style="font-size:10px" >'+streamData.stream.channel.status +'</p></div>';
          }
          else {
            console.log("OFFLINE ------------------ "+user.name);
              html+= '<div  id="'+user.display_name+'" class="itemall"> <a target="_blank" href="'+user.url+'"> <img src='+user.logo+' width=15% height=15% > '+'<h style="color:red">'+user.name+' </h> ' +'</p></div>';
          }
          $(".users").html(html);
        });

        return user;
      });
    });

  /*  return $.when(subsPromises).then(function (users) {
      var target = $('#result');
      users.forEach(function (user) {
        target.prepend('<div id="' + user.id + '" class="item"> <a target="_blank" href="' + user.url + '"> <img class="logo" src="' + user.logo + '"/> <span class="name">' + user.name + '</span> </a> </div>');
      });
      $('.loader').hide();
    });
    */
  //});
  $(".offline-users").hide();
  $(".online-users").hide();
  $(".users").show();
});
}
ListAll();
function ListOnlineUsers(){
  var html = "";
  channels.forEach(function(channel,i){
    $.getJSON(url+channel,function(streamData){
      if(streamData["stream"]!=null){
        html+= '<div id="'+streamData.stream.channel.display_name+'" class="itemon"> <a target="_blank" href="'+streamData.stream.channel.url+'" > <img src='+streamData.stream.channel.profile_banner+' width=15% height=15% > '+'<h style="color:red">'+streamData.stream.channel.display_name+' </h> '+'<p style="font-size:10px" >'+streamData.stream.channel.status +'</p></div>';
        $(".online-users").html(html);
      }
    });
  });
  $(".offline-users").hide();
  $(".users").hide();
  $(".online-users").show();
}
function ListOfflineUsers(){
  var html = "";
  channels.forEach(function(channel,i){
    $.getJSON(url+channel,function(streams){
      if(streams["stream"]==null){
        $.getJSON("https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/channels/"+channel+"/", function(data) {
          var logo = data["logo"];
          var name = data["display_name"];
          var status = data["status"];
          var link = data["url"];
          html+='<div  id="'+name+'" class="itemoff"> <a target="_blank" href="'+link+'"> <img src='+logo+' width=15% height=15% > '+'<h style="color:red">'+name+' </h> ' +'</p></div>';
          $(".offline-users").html(html);

        });
      }
    });
  });
  $(".users").hide();
  $(".online-users").hide();
  $(".offline-users").show();
}

var search = document.getElementById('inp');
search.onkeyup = function(){
  getElementByNameStart(search.value);
}
function getElementByNameStart(str){
  console.log("Str is "+str);
  var cnt = 0;
  if(str==null || str==""){
    if(isAll){
      $("#txt").empty();
      $("#txt").hide();
      $(".users").show();
    }
    else if(isOnline){
      $("#txt").empty();
      $("#txt").hide();
      $(".online-users").show();
    }
    else if(isOffline){
      $("#txt").empty();
      $("#txt").hide();
      $(".offline-users").show();
    }
  }
  else {
    str = str.toLowerCase();
    var x;
    if(isAll)
      x=document.getElementsByClassName('itemall');
    else if(isOnline)
      x=document.getElementsByClassName('itemon');
    else if(isOffline)
      x=document.getElementsByClassName('itemoff');
    var res  = "";
    var ok = false;
    var hash = [];
    for(var i=0;i<x.length;i++){
      x[i].id = x[i].id.toLowerCase();
      if(x[i].id.indexOf(str)==0 && str!=null && str!="" && !hash[x[i].id]){
        hash[x[i].id] = true;
        cnt++;
        res+=document.getElementById(x[i].id).innerHTML;
        ok = true;
        //console.log("INDEX " + x[i].id.indexOf(str) + " CNT " + cnt);
      }
    }
    // matches
    if(ok){
      if(isAll){
        $(".users").hide();
        $("#txt").html(res);
        $("#txt").show();
      }
      else if(isOnline){
        $(".online-users").hide();
        $("#txt").html(res);
        $("#txt").show();
      }
      else if(isOffline){
        $(".offline-users").hide();
        $("#txt").html(res);
        $("#txt").show();
      }

    }
    //does not match
    else {
      if(isAll){
        $("#txt").empty();
        $("#txt").hide();
        $(".users").hide();
      }
      else if(isOnline){
        $("#txt").empty();
        $("#txt").hide();
        $(".online-users").hide();
      }
      else if(isOffline){
        $("#txt").empty();
        $("#txt").hide();
        $(".offline-users").hide();
      }

    }
  }
}
