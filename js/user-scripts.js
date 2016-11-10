//business logic

function Player() {
  this.name;
  this.input = [];
}



//user logic
$(document).ready(function(){
  var player1 = new Player();
  $("form#username").submit(function(event){
    event.preventDefault();
    player1.name = $("#inputname").val();
    $("#screen").show();
    $(".name").text(player1.name);
    var room1 = document.getElementById("room1");
    room1.scrollIntoView();
  });

  $("form#terminal").submit(function(event){
    event.preventDefault();
    $(".name").text(player1.name);
    $("#intro").show();

    player1.input = $("input#terminal-input").val();
    alert(player1.input);
    console.log(player1);

  });

  $("#back1").click(function(event){
    event.preventDefault();
    var welcome = document.getElementById("welcome");
    welcome.scrollIntoView();

  });

});
