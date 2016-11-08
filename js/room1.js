//business logic

function Player() {
  this.name = name;
  this.input = [];
};

/*function Door() {
  this.door;
};*/

Player.prototype.findDoor = function() {
  if (this.input === "cd door") {
    alert ("this text");
  } else if (this.input ==== "ls -a") {
    alert ("all files listed here");
  } else {
    alert ("find the door and 3 files that belong inside");
  };
};


var player1 = new Player();

//user logic

$(document).ready(function() {
  $("form#terminal").submit(function(event){
    event.preventDefault();

    var player1 = New Player()
    player1.name = $("form#terminal").val();
    alert(player1.name);
    player1.input = $("input#terminal-input").val();
    alert(player1.input);
    player1.findDoor();

  });
});
