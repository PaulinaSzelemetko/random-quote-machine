
$(document).ready(function() {
  getQuote();
  
  $("#new_quote").on("click", function() {
    getQuote();
    });
});

var getQuote = function () {
   $.getJSON("https://talaikis.com/api/quotes/random/", function(a) {
       $("#quote").html(a.quote);
       $("#author").html(a.author);
    });
  
}


function tweetIt () {
  var phrase = document.getElementById('quote').innerText + document.getElementById('author').innerText;

  var tweetUrl = 'https://twitter.com/share?text=' +
    encodeURIComponent(phrase) +
    '.' +
    '&url=';

        
  window.open(tweetUrl);
}
