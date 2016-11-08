//business logic

function Player() {
  this.name;
  this.input = [];
}

Player.prototype.findDoor = function() {
  if (this.input === "cd door") {
    alert ("this text");
  } else if (this.input === "ls -a") {
    alert ("all files listed here");
  } else {
    alert ("find the door and 3 files that belong inside");
  };
};

//user logic
$(document).ready(function(){
  var player1 = new Player();
  $("form#username").submit(function(event){
    event.preventDefault();
    player1.name = $("#inputname").val();
    $("#screen").show();
    $("#name").text(player1.name);
  });
<<<<<<< HEAD

  $("form#terminal").submit(function(event){
    event.preventDefault();
    $("#intro").show();
    $(".name").text(player1.name);
  });

  $("#back1").click(function(event){
    event.preventDefault();
    var welcome = document.getElementById("welcome");
    welcome.scrollIntoView();

>>>>>>> master
  });

});
