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
    return ("this text");
  } else if (this.input ==== "ls -a") {
    return ("all files listed here");
  } else {
    return ("find the door and 3 files that belong inside");
  };
};


var player1 = new Player();

//user logic

$(document).ready(function() {
  $("form#terminal").submit(function(event){
    event.preventDefault();

    var playerInput = new Input();
    playerInput.push()

  });
});
