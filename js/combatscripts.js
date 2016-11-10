

//Object used to keep track of player and enemy stats.
function Combat(hp, attack, defense, roll, inCombat, input) {
  this.hp = hp;
  this.attack= attack;
  this.defense= defense;
  this.roll = roll;
  this.inCombat = false;
  this.input = "";
}

//Used to determine hit and misses in the comat methods blelow.
Combat.prototype.diceRoll = function (roll) {
  this.roll = Math.floor(Math.random() * (20 - 1)) +1;
}

battleOver = function(inCombat) {
  if (player1.inCombat === true) {
    return false;
  } else {
    return true;
  }

}

// When the player chooses to attack the goblin
Combat.prototype.goblinAtk = function (hp, attack, roll) {
  if (this.roll > 18)  {
    goblin.hp = goblin.hp - (this.attack * 2);
    alert("a critical hit!");
  } else if (this.roll <= 19 &&  this.roll >= 4) {
    goblin.hp = goblin.hp - this.attack;
  } else if (this.roll <= 3) {
  alert("your attack misses");
  }
}
// When the player chooses to attack the worm
Combat.prototype.wormAtk = function (hp, attack, roll) {
  if (this.roll > 18)  {
    worm.hp = worm.hp - (this.attack * 2);
    alert("a critical hit!");
  } else if (this.roll <= 19 &&  this.roll >= 4) {
    worm.hp = worm.hp - this.attack;
  } else if (this.roll <= 3) {
  alert("your attack misses");
  }
}
//The enemy will fight back
Combat.prototype.enemyAtk = function (hp, attack, roll) {
  if (this.hp <= 0) {
  } else if (this.roll > 18) {
      player1.hp = player1.hp - (this.attack * 2);
        (" The enemy scorese a critical hit!")
  } else if (this.roll <= 18 &&  this.roll >= 4) {
      player1.hp = player1.hp - this.attack;
  }  else if (this.roll <= 3) {
  alert("the enemy's attack misses");
  }
}
//Instead of attacking, they could choose to defend and take reduced damage, enemy will still attack.
Combat.prototype.playerDefend = function (hp, attack, defense, roll) {
  if (this.roll > 18) {
      player1.hp = player1.hp - ((this.attack * 2) - player1.defense);
        alert(" The goblin scorese a critical hit!")
  } else if (this.roll <= 18 &&  this.roll >= 4) {
      player1.hp = player1.hp - ((this.attack - player1.defense));
  }  else if (this.roll <= 3) {
  alert("the goblin's attack misses");
  }
}
//  Don't have a use for this one yet, will most likely will be used for the Code Goblin King.
// Combat.prototype.enemyDefend = function (hp, attack, defense, roll) {
//   goblin.hp = goblin.hp - (this.attack - goblin.defense)
// }
//Combat ends when either the player, or enemy has 0, or negative hp.
var victoryOrDeath = function(hp, inCombat) {
  if (worm.hp <= 0 && goblin.hp <= 0) {
    player1.inCombat = false;
    alert("both enemies have been slain")
  } if (goblin.hp <= 0) {
    alert("You have slain the goblin!");
  } else if (worm.hp <= 0) {
    alert("You have slain the worm!")
  } else if (player1.hp <= 0) {
    alert("The player has been slain!");
    alert("game over!")
  }
  $("span#currentPlhp").text(player1.hp);
  alert(goblin.hp);
  alert(worm.hp);
  };






//for the sake of the test these are global objects.
var player1 = new Combat(30, 3, 3);
var goblin = new Combat(9, 3, 2)
var worm = new Combat(4, 2, 1)
// <!-- place for player to input text - refer to in user-scripts -->
//         <div id="term">
//           <form id ="terminal">
//            <label for="terminal"><span class= "name"></span>$</label>
//            <input id="terminal-input" class="form-control enter-style" type="text">
//           </form>
//         </div>



$(document).ready(function() {
    $("span#currentPlhp").text(player1.hp);
  $("form#terminal").submit(function(event){
    event.preventDefault();
    player1.input = $("input#terminal-input").val();
      if (player1.input === "cd my pictures") {
        $("p#c1").show()
        player1.inCombat = true;
        $("#player-stats").show();
      } else if (player1.input === "atk goblin" || player1.input === "atk worm"){

      } else if (player1.input === "dfnd self") {

      } else {
        alert("invalid command")
  }
  });
  $("form#terminal").submit(function(event){
    event.preventDefault();
      if (player1.inCombat === true) {
        player1.input = $("input#terminal-input").val();
      if (player1.input === "atk goblin") {
        player1.diceRoll();
        goblin.diceRoll();
        worm.diceRoll();
        player1.goblinAtk();
        goblin.enemyAtk();
        worm.enemyAtk();
        victoryOrDeath();
      } else if (player1.input === "atk worm") {
        player1.diceRoll();
        goblin.diceRoll();
        worm.diceRoll();
        player1.wormAtk();
        goblin.enemyAtk();
        worm.enemyAtk();
        victoryOrDeath();
      } else if (player1.input === "dfnd self") {
        goblin.diceRoll();
        worm.diceRoll();
        goblin.enemyAtk();
        worm.enemyAtk();
        victoryOrDeath;
      }
    } else if (player1.inCombat === false) {
      alert("you are not in combat")
  } else {
    alert('you must fight')
  }
  var combatDone = battleOver();
  if (combatDone === true ) {
    $("#player-stats").hide();
    $("p#c2").append("The two foes defeated you relax.  The bodies disappearing in a cloud of ones and zeros, leaving behind a small box  labeled worm.exe. you pick it up and save it for later.")
  }
  $("form#terminal").submit(function(event){
    event.preventDefault();
      if (player1.inCombat === true) {
        player1.input = $("input#terminal-input").val();
      if (player1.input === "dfnd self") {
        worm.diecRoll();
        goblin.diceRoll();
        goblin.playerDefend();
        worm.playerDefend();
        victoryOrDeath();
      }
    } else if (player1.inCombat === false) {
      alert("you are not in combat")
  } else {
    alert('you must fight')
  }

});

//
//   $("button#defend").click(function(event){
//       event.preventDefault();
//       player1.diceRoll();
//       alert("p " + player1.roll)
//       goblin.diceRoll();
//       alert("g " +goblin.roll);
//       goblin.playerDefend();
//       victoryOrDeath();
//
  });
});
