var psychicLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 var youWin = 0;
 var youLose = 0;
 var guessesLeft = 13;
 var guessedLetters = []; //Array for letter input
 var numbers = 1;

 document.onkeyup = function(event) {
   var yourGuess = event.key; // user's guess
   guessedLetters.push(yourGuess); 
   var psychicAns = psychicLetters[Math.floor(Math.random() *    psychicLetters.length)];

   //If your guess = psychic's guess,
   //a point is added to the "Wins" tally and the guesses tally restarts.
   if (yourGuess === psychicAns) {
     youWin++;
     guessesLeft = 12;
   }
   //If your does not not match your number of  guesses remaining are deducted.
   else {
     guessesLeft--;
   }

   //If the guesses remaining equals 0, you lose, an increment is added to  the losses tally and the points restart.
   if (guessesLeft === 0){
     youLose++;
     guessesLeft = 12;

}
   
   

   var html = "<p>Guess what letter I'm thinking of:</p>" + "<p>Wins: " + youWin + "</p>" + "<p>Loses: "+ youLose + "<p>Guesses Remaining: " + guessesLeft + "<p>Guessed Letter: " +  guessedLetters.join(', '); 
   document.querySelector("#psychicAct").innerHTML = html;
 }