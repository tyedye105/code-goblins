//Object used to keep track of player and enemy stats.
function Combat(hp, attack, defense, roll) {
  this.hp = hp;
  this.attack= attack;
  this.defense= defense;
  this.roll = roll;
}

//Used to determine hit and misses in the comat methods blelow.
Combat.prototype.diceRoll = function (roll) {
  this.roll = Math.floor(Math.random() * (20 - 1)) +1;
}
// When the player chooses to attack
Combat.prototype.playerAtk = function (hp, attack, roll) {
  if (this.roll > 18)  {
    goblin.hp = goblin.hp - (this.attack * 2);
    alert("a critical hit!");
  } else if (this.roll <= 19 &&  this.roll >= 4) {
    goblin.hp = goblin.hp - this.attack;
  } else if (this.roll <= 3) {
  alert("your attack misses");
  }
}
//The enemy will fight back
Combat.prototype.enemyAtk = function (hp, attack, roll) {
  if (goblin.hp <= 0) {
  } else if (this.roll > 18) {
      player1.hp = player1.hp - (this.attack * 2);
        alert(" The goblin scorese a critical hit!")
  } else if (this.roll <= 18 &&  this.roll >= 4) {
      player1.hp = player1.hp - this.attack;
  }  else if (this.roll <= 3) {
  alert("the goblin's attack misses");
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
var victoryOrDeath = function(hp) {
  if (goblin.hp <= 0) {
    alert("The player has slain the goblin!");
  } else if (player1.hp <= 0) {
    alert("The goblin has slain the player!");
  }
  $("span#currentEhp").text(goblin.hp);
  $("span#currentPlhp").text(player1.hp);
  };






//for the sake of the test these are global objects.
var player1 = new Combat(10, 3, 2);
var goblin = new Combat(9, 3, 2);

$(document).ready(function() {
  $("span#currentEhp").text(goblin.hp);
  $("span#currentPlhp").text(player1.hp);
  $("button#attack").click(function(event){
    event.preventDefault();
    player1.diceRoll();
    alert("p " + player1.roll)
    goblin.diceRoll();
    alert("g " +goblin.roll);
    player1.playerAtk();
    goblin.enemyAtk();
    victoryOrDeath();
  });
    $("button#defend").click(function(event){
      event.preventDefault();
      player1.diceRoll();
      alert("p " + player1.roll)
      goblin.diceRoll();
      alert("g " +goblin.roll);
      goblin.playerDefend();
      victoryOrDeath();

  });
});
