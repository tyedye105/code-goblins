function Combat(hp, attack, defense) {
  this.hp = hp;
  this.attack= attack;
  this.defense= defense;
}



Combat.prototype.playerAtk= function (hp, attack) {
  goblin.hp = goblin.hp - this.attack;
}
Combat.prototype.enemyAtk= function (hp, attack) {
  player1.hp = player1.hp - this.attack;
}
Combat.prototype.playerDefend= function (hp, attack, defense) {
    player1.hp = player1.hp - (this.attack - player1.defense);
}
Combat.prototype.enemyDefend= function (hp, attack, defense) {
  goblin.hp = goblin.hp - (this.attack - goblin.defense)
}

var victoryOrDeath = function(hp) {
  if (goblin.hp === 0) {
    alert("The player has slain the goblin!");
  } else if (player1.hp == 0) {
    alert("The goblin has slain the player!");
  }
  $("span#currentEhp").text(goblin.hp);
  $("span#currentPlhp").text(player1.hp);
  };




var player1 = new Combat(10, 3, 2);
var goblin = new Combat(9, 3, 2);


$(document).ready(function() {
  $("button#attack").click(function(event){
    event.preventDefault();
    player1.playerAtk();
    goblin.enemyAtk();
    victoryOrDeath();
  });




    $("button#defend").click(function(event){
      event.preventDefault();
      alert(player1.hp);
      goblin.playerDefend();
      victoryOrDeath();

    });
  });
