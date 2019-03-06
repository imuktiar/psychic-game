const psychicLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 const youWin = 0;
 const youLose = 0;
 const guessesLeft = 13;
 const guessedLetters = []; 
 const numbers = 1;

 document.onkeyup = function(event) {
   const yourGuess = event.key; 
   guessedLetters.push(yourGuess); 
   const psychicAnswers = psychicLetters[Math.floor(Math.random() *    psychicLetters.length)];

   if (yourGuess === psychicAnswers) {
     youWin++;
     guessesLeft = 12;
   }

   else {
     guessesLeft--;
   }

   if (guessesLeft === 0){
     youLose++;
     guessesLeft = 12;

}
   
   

   const html = "<p>Guess what letter I'm thinking of:</p>" + "<p>Wins: " 
   + youWin + "</p>" + "<p>Loses: "+ youLose + "<p>Guesses Remaining: " + guessesLeft + "<p>Guessed Letter: " +  guessedLetters.join(', '); 
   document.querySelector("#psychicAct").innerHTML = html;
 }