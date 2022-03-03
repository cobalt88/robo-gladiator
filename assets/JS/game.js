window.alert("welcome to robot gladiators!");

var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

// var enemyName = ["Roborto", "BuzzKill", "BoltCutter", "Lary"]
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
var playerMoney = 10;

var fight = function() {

  var promptFight = window.prompt('To fight or not to fight? What shall it be... Enter "FIGHT" or "SKIP" to continue.')

  if (promptFight === "fight" || promptFight === "FIGHT") {
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + "attacked" + enemyName + ". " + enemyName + " now has " + enemyHealth + "health remaining."
      );
  } else  if(promptFight === "skip" || promptFight === "SKIP") {
  var confirmSkip = window.prompt("Are you sure? Yes to continue, No to return to the fight!");
  } else {
    window.alert("That is not an option.");
  } 

  

  if (confirmSkip === "yes" || confirmSkip === "YES") {
    playerMoney = playerMoney - 10;
    window.alert("You have lost 10 money. You have" + playerMoney + " remaining.")
  } else{
    promptFight;
  }

  //  else {
  //   window.alert("Invalid entry. Try again.")
  // }

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
}