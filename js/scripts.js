function Combat(hp, attack) {
  this.hp = hp;
  this.attack= attack;
}

Combat.prototype.atkIt= function (hp, attack) {
  goblin.hp = goblin.hp - this.attack;

}

var player1 = new Combat(10, 3);
var goblin = new Combat(9, 2);


$(document).ready(function() {
  $("button#attack").click(function(event){
    event.preventDefault();

    alert(goblin.hp);
    player1.atkIt();
    alert(goblin.hp);
    if (goblin.hp === 0) {
      alert("The player has slain the goblin!")
      goblin.hp = 12;
      alert("The goblin has comeback from the dead, and disarmed you!")
    }


    });
});
