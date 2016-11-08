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
  $("form#terminal").submit(function(event) {
    player1.name = $("form#terminal").val();
    alert(player1.name);
    player1.input = $("input#terminal-input").val();
    alert(player1.input);
    player1.findDoor();
  });

});
