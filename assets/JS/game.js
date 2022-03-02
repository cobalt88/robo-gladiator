var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
var playerMoney = 10;

var fight = function() {
  window.alert("welcome to robot gladiators!");
}

var promptFight = window.prompt('To fight or not to fight? What shall it be... Enter "FIGHT" or "SKIP" to continue.')

if (promptFight === "fight" || promptFight === "FIGHT") {
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + "attacked" +enemyName + ". " + enemyName + " now has " + enemyHealth + "health remaining."
    );
} else {
  window.alert("Invalid entry. Try again.")
}

if (enemyHealth <= 0) {
  window.alert(enemyName + "Has DIED!");
} else {
  window.alert(enemyName + " has " + enemyHealth + "HP remaining");
}

playerHealth = playerHealth - enemyAttack;
console.log(
  enemyName + " has attacked " + playerName + ". " + playerName + " has " + playerHealth + "HP remaining." 
);

if (playerHealth <= 0) {
  window.alert(playerName + "Has Died!")
}

fight();