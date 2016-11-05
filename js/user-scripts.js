//business logic

function Player() {
  this.name;
}

//user logic

// create player when document is ready
$(document).ready(function(){
  var player1 = new Player();

// when name form submitted, set player name to input, show room1, input name next to $
  $("form#username").submit(function(event){
    event.preventDefault();
    player1.name = $("#inputname").val();
    $("#room1").show();
    $("#name").text(player1.name);
// when "start" button pressed, screen scroll into view
    var room1 = document.getElementById("room1");
    room1.scrollIntoView({behavior: "smooth"});
  });

  $("#back1").click(function(event){
    event.preventDefault();
    var welcome = document.getElementById("welcome");
    welcome.scrollIntoView();
  });





  /*this code can be used to find the position of an element
  var elemRect = $("#room1").position();
      offset   = elemRect.top - bodyRect.top;

     console.log('Element is ' + elemRect.top + elemRect.bottom + elemRect.left +' vertical pixels from <body>');*/


});
