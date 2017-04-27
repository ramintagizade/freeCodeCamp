//find by city name
//var url = "http://api.openweathermap.org/data/2.5/weather?q=Manchester&APPID=61580f968a4fa95e2ba03521748b9dad";
//find by coordinates
var lat="";
var lon="";
var url;
getLocation();
//var url = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&APPID=61580f968a4fa95e2ba03521748b9dad";
//clear sky
document.body.style.backgroundImage = "url('https://www.davestravelcorner.com/wp-blog/wp-content/uploads/2016/10/maho-beach-2.jpg')";
function getLocation(){

}
var  getWhether = function(data){
  $(".wheather").html(data["weather"][0]["description"]);
  $(".country").html(data["sys"]["country"]+"," + data["name"]);
  $(".speed").html(convertSpeed(data["wind"]["speed"])+" knots");
  $(".temperature").html(convertTemperature(parseFloat(data["main"]["temp"]))+"&#8451;");
  var text = data["weather"][0]["description"];
  if(text.match(/clear sky/gi)){
    document.getElementsByClassName("icon")[0].style.backgroundImage = "url('http://openweathermap.org/img/w/01d.png')";
  }
  else if(text.match(/few clouds/gi)){
    document.getElementsByClassName("icon")[0].style.backgroundImage = "url('http://openweathermap.org/img/w/02d.png')";
  }
  else if(text.match(/scattered clouds/gi)){
    document.getElementsByClassName("icon")[0].style.backgroundImage = "url('http://openweathermap.org/img/w/03d.png')";
  }
  else if(text.match(/broken clouds/gi)){
    document.getElementsByClassName("icon")[0].style.backgroundImage = "url('http://openweathermap.org/img/w/04d.png')";
  }
  else if(text.match(/clouds/gi)){
    document.getElementsByClassName("icon")[0].style.backgroundImage = "url('http://openweathermap.org/img/w/03d.png')";
  }
  else if(text.match(/shower rain/gi)){
    document.getElementsByClassName("icon")[0].style.backgroundImage = "url('http://openweathermap.org/img/w/09d.png')";
  }
  else if(text.match(/rain/gi)){
    document.getElementsByClassName("icon")[0].style.backgroundImage = "url('http://openweathermap.org/img/w/10d.png')";
  }
  else if(text.match(/thunderstorm/gi)){
    document.getElementsByClassName("icon")[0].style.backgroundImage = "url('http://openweathermap.org/img/w/11d.png')";
  }
  else if(text.match(/snow/gi)){
    document.getElementsByClassName("icon")[0].style.backgroundImage = "url('http://openweathermap.org/img/w/13d.png')";
  }
  else if(text.match(/mist/gi)){
    document.getElementsByClassName("icon")[0].style.backgroundImage = "url('http://openweathermap.org/img/w/50d.png')";
  }
}
function convertTemperature(x){
  var x;
  //from kelvin to celcius
  x = (x - 273.15);
  x = Math.round(x);
  return x;
}
function convertSpeed(speed){
  speed = parseFloat(speed);
  return parseFloat(speed*1.609344).toFixed(2);
}

  function updateCoordinate(callback) {
    if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var returnValue = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
        var serializeCookie = serialize(returnValue);
        callback(serializeCookie);
      }
    )
    }
    else {
      alert("error ");
    }
}
function serialize(val){
  console.log("lat "+val.latitude);
  console.log("lon "+val.longitude);
  lat = val.latitude;
  lon = val.longitude;
  url = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&APPID=61580f968a4fa95e2ba03521748b9dad";
}
function getLocation(){
  $.get("https://ipinfo.io", function(response) {
      console.log(response.city, response.country,response.loc.split(",")[0]);
      lon = response.loc.split(",")[0];
      lat = response.loc.split(",")[1];
      lon = parseFloat(lon).toFixed(2);
      lat = parseFloat(lat).toFixed(2);
      return response;
  }, "jsonp").then(function(response){
      url = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat="+response.loc.split(",")[0]+"&lon="+response.loc.split(",")[1]+"&APPID=61580f968a4fa95e2ba03521748b9dad";
      $(document).ready(function(){
        $.getJSON(url, getWhether,'jsonp');
      });
  });
}
getLocation();
