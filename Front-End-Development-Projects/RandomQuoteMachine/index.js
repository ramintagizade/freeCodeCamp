var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
var  getRandomQuote = function(data){
  var quote = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' Author ' + data.quoteAuthor;
  $(".quote").html(data.quoteText);
  $(".author").html(data.quoteAuthor);
  $(".twitter-txt").attr("href",quote);
}
$(document).ready(function() {
  $.getJSON(url, getRandomQuote, 'jsonp');
});

$(".mybutton").click(function(){
  $.getJSON(url,getRandomQuote,'jsonp');
});
