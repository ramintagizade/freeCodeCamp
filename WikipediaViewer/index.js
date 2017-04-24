$(".input").hide();
function clicked(){

  $(".input").show();
}
$('.input[type=search]::-webkit-search-cancel-button').on("click", function(el) {
  $(".input").hide(300);

});
function disappear(){
    $(".input").hide(300);
}
function openNewPage(url){
  console.log("page link "+url);
  window.open(url, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
}
function getData(data){
  $(".art").click(function(){

  });
  console.log(JSON.stringify(data));
  var n = 10;

  //data[1] // title
  //data[2] //text
  //data[3] // links

  for(var i =0;i<n;i++){
    $(".art"+i.toString()+"-head").html(data[1][i]);
    console.log(data[1][i]);
  }
  for(var i =0;i<n;i++){
    $(".art"+i.toString()+"-body").html(data[2][i]);
    console.log(data[2][i]);
  }

  for(var i=0;i<n;i++){
    $(".art"+i.toString()).val(data[3][i]);
  }
    $(".art").on("click",function(){
      openNewPage($(this).val());
      //console.log("links val"+$(this).val());
    });
}
var isTop = false;
var isCenter = true;
$(document).ready(function(){

$("#your-input").keyup(function(event){
    if(event.keyCode == 13){
        if(isCenter){
          $(".text-area").animate({
            top: "-=200px",
            }, 500 );
            isCenter = false;
            $(".articles").show();
         }
          var res  = document.getElementById("your-input").value;
          executeQuery(res);
          isTop = true;

    }
});
});
$('.clearable-input > [data-clear-input]').click(function(){
  $("#your-input").val("");
  $(".clearable-input").hide(50);
  $(".articles").hide();
  if(isTop){
    $(".text-area").animate({
      top: "+=200px",
    }, 500 );
    isTop = false;
    isCenter = true;
  }
  $(".search-input").show();
});
var titles ="";
function executeQuery(query){
$(document).ready(function(){

  var url ="https://en.wikipedia.org/w/api.php?action=opensearch&search="+query+"&limit=10&format=json";
  $.getJSON(url,getData,'jsonp');
});
}
