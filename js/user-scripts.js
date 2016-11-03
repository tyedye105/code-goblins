//business logic

function Player() {
  this.name;
}

//user logic
$(document).ready(function(){
  var player1 = new Player();
  $("form#username").submit(function(event){
    event.preventDefault();
    player1.name = $("#inputname").val();
    $("#room1").show();


    $("#name").text(player1.name);

    /*this code can be used to find the position of an element*/
    var elemRect = $("#room1").position();
        offset   = elemRect.top - bodyRect.top;

       console.log('Element is ' + elemRect.top + elemRect.bottom + elemRect.left +' vertical pixels from <body>');
  });


});
