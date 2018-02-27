//variable list for clairity
var winCount; //counter for wins, starts at 0
var lossCount; //counter for losses, starts at 0
var guessesRemaining; //counter for Guesses, starts at 7
var currentWord;
var hangSteps; //counter for steps until a loss
var lettersGuessed; 
var Availwords = ['shark','squid','octopus'];


document.onkeyup = function(event) {
    var userKey = event.key;
    //reduce guesses remaining, add guess to list of letters guessed

    //If the key guessed is in the word

    if (userKey == "h") { 
    // display letter in current word

    alert("h has been clicked")
        }
    else {
    // increment "hangSteps" counter to change image
        guessesRemaing - 1}

  }



//change the image each time "hangSteps" counter increments
onclick=document.getElementById('diverGuy').src='pic_bulbon.gif';