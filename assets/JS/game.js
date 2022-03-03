

var playerHealth = 100;
var playerAttack = Math.floor(Math.random() * 10);

console.log(playerName, playerAttack, playerHealth);

// var enemyName = ["Roborto", "BuzzKill", "BoltCutter", "Lary"]
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = Math.floor(Math.random() * 12);
var playerMoney = 10;
// do {fight} while (fight = true);

window.alert("Welcome to Robot Gladiators!");

var playerName = window.prompt("What is your robots name?");

var promptFight = window.prompt('To fight or not to fight? What shall it be... Enter "FIGHT" or "SKIP" to continue.');

var fight = function() {

    if (promptFight === "fight" || promptFight === "FIGHT") {
      console.log(enemyHealth = enemyHealth - playerAttack);
      window.alert(playerName + "attacked" + enemyName + ". " + enemyName + " now has " + enemyHealth + "health remaining. Prepare to be attacked!");

      console.log(playerHealth = playerHealth - enemyAttack);
      window.alert(enemyName + " has attacked your robot! " + playerName + " now has " + playerHealth + "remaining. Would you like to attack again?");
      var promptContinue = window.prompt("Time For Round 2!, select OK to continue or CANCEL to exit.")

        if(promptContinue = true) {
          do {promptFight} while (playerHealth > 0 && enemyHealth > 0);
        } else if(playerHealth <= 0) {
          window.alert("Your robot has been destroyed!")
        }



  } else  if(promptFight === "skip" || promptFight === "SKIP") {
  var confirmSkip = window.prompt("Are you sure? Yes to continue, No to return to the fight!");

      if(confirmSkip === "yes" || confirmSkip === "YES")

  

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
  }

  if (playerHealth <= 0) {
    window.alert(playerName + "Has Died!")
  }
}
