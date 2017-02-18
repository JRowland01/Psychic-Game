//Letter choices placed an array.
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Initialize  variables.
var wins = 0;
var losses = 0;
var guesses = 12;
var guessesLeft = 12;
var guessedLetters = [];
var letterToGuess = null;



//Allows the computer to select a random letter, which was defined in the array above. 
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// A function is called that allows the user to have 12 guesses.
var updateGuessesLeft = function() {

// The HTML element is retrieved and set equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
  document.querySelector('#guessLeft').innerHTML = guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

var updateGuessesSoFar = function() {
  //Display the user's guesses separated by commas.
  document.querySelector('#let').innerHTML = guessedLetters.join(', ');
};

// A function that allows the game to be reset.
var reset = function() {
  totalGuesses = 12;
  guessesLeft = 12;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();


//When a key is released it becomes the user's guess.
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = wins;
                alert("Yes, you are psychic!");
                reset();
            }
        }else if(guessesLeft == 0){
            // The user loses and the html will be updated to display the loss.
            losses++;
            document.querySelector('#losses').innerHTML = losses;
            alert("Sorry, you're not psychic. Try again.");
            // The reset function is called.
            reset();
        }
};

