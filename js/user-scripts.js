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
    $("#screen").show();
    $("#name").text(player1.name);
  });
});
