//business logic

function Player() {
  this.name;
  this.input = [];
}

Player.prototype.findDoor = function() {
  if (this.input === "cd door") {
    return ("The giant box labeled door unfurls in front of you revealing a message: The door by ######### When ### user opens the html file, the ##### will be revealed. ####.html, door.###, and d####.#s. go ahead a take a look at the list of directories")
  } else if (this.input === "ls") {
    return ("Suddenly all of the directories floating above you sort themselves out revealing 5 directories. The directories a, junk mail, secrets(timed trap), my pictures, and resources. You are curious about the pictures")
  } else if (this.input === "cd my pictures") {
    return ("You open the directory titled my pictures, revealing what appears to be a picture of a hilly landscape covered in grass, like the famous windows desktop picture. You start to close the picture, but there is something moving on it, a pair of two shapes. Your curiosity is peaked, perhaps it was a trick being played by the emoji. Your pulse quickens as objects come into view. A code goblin, riding atop a vicious looking worm. Definitely not the emoji you expected. You close the directory as quickly as you can, hoping the act of closing the directory will keep the two of them trapped. The troublesome pair bursts forth from the directory falling down from the ceiling on to the ground. You hold your hands out ready for battle, and are curious about directory: a.")
  } else if (this.input === "cd a") {
    return ("door.html")
  } else if (this.input === "gt door.html") {
    return ("door.html was added to your directory. now you are curious about directory: junk mail")
  } else if (this.input === "cd junk mail") {
    return ("You see an impossible long list of junk mail, everything from sexy singles in your area, to a Nigerian prince looking for a loan. If only you had a way to sort it.")
  } else if (this.input === "ls") {
    return ("A single message is all that remains: Jim, could you please whitelist my email so it stops ending up in your junk mail. We have important work to do! I have the code file attached. 1 attachment: door.js")
  } else if (this.input === "gt door.js") {
    return ("door.js was added to your directory. there are still a couple of unopened directories..")
  } else if (this.input === "cd secrets") {
    return ("You open the secrets directory hoping it would reveal the secret way out of this digital nightmare. Instead of you are greeting by a suspicious ticking sound.")
  } else if (this.input === "cd ..") {
    return ("relying on your instincts, and paranoia of ticking sounds you release the secret directory back up into the ceiling before it explodes.")
  } else if (this.input === "cd resources") {
    return ("The resources directory appears to be empty directory like the door.html, nothing in it at all. perhaps there is something hidden from your gaze.")
  } else if (this.input === "ls -a") {
    return ("The command reveals a secret directory with dot at the beginning of its name, hiding it from plain sight: .secretfolder")
  } else if (this.input === "cd .secretfolder") {
    return ("You open the directory to find one of the missing files: door.css")
  } else if (this.input === "gt door.css") {
    return ("door.css was added to your inventory. you now have all three files in the door directory and can move into your next destination: CGlair. You take a deep breath before you hit the enter button, with no sign of Unexpected Token you push onwards into the Code Goblin castle.")
  } else if (this.input === "cd CGlair") {
    return ("Welcome to the Code Goblin castle")
  };

  resetFields();

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
    event.preventDefault();
    player1.input = $("input#terminal-input").val();
    alert(player1.input);
    var outPut = player1.findDoor();
    $("p#terminal-output").text(outPut);
  });

});
