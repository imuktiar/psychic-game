var won = 0;
var lost = 0;
var attempts = 10;
var GuessedArray = [];
var rightLetter = rightLetter;
var letters = "qwertyuiopasdfghjklzxcvbnm"

rightLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(rightLetter);

function Guess() {
      rightLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log(rightLetter);

}

document.onkeyup = function (event) {
      var playerGuess = event.key;

      if (playerGuess === rightLetter) {
            won++;
            attempts = 10;
            GuessedArray = [];

      }

      Guess();
      if (playerGuess !== rightLetter) {
            attempts--;

      }
      if (attempts == 0) {
            lost++;
            GuessedArray = []
            attempts = 10;
      }
      if (GuessedArray.indexOf(playerGuess) >= 0) {

      } else {
            GuessedArray.push(playerGuess);
            document.getElementById('playerGuess').innerHTML = GuessedArray;
            console.log(GuessedArray);

      }
      document.getElementById('won').innerHTML = won;
      document.getElementById('lost').innerHTML = lost;
      document.getElementById('attempts').innerHTML = attempts;

}