window.onload = function() { //Loads up the JavaScript after the page finishes loading

    //variable list for clairity
    var wCount = 0 // number of wins
    var lCount = 0 // number of losses
    var gCount = 8 // number of guesses upon start
    var currentLetter;
    var badLettersGuessed = [];
    var goodLettersGuessed = [];
    var AvailWords = ['shark','squid','octopus','scubadiver'];
    var randWord;
    
    //writes intial guesses left value on the DOM
    document.getElementById('winCount').innerHTML = wCount;
    //writes intial Losses value on the DOM
    document.getElementById('lossCount').innerHTML = lCount;
    //writes intial Wins value on the DOM
    document.getElementById('guessesRemaining').innerHTML = gCount;
    
    //Logic to Pick a Random Word
    function pickWord() {
        randWord = AvailWords[Math.floor(Math.random() * AvailWords.length)];
        console.log(randWord);
        // return randWord; 
        }
 
    pickWord();   //Picks a word to start
    
    //write length of word as Dashes on Screen to Start
    function writeBlank ()  {
        for (i = 0; i < randWord.length; i++) { 
            document.getElementById('currentWord').innerHTML = '_ '
        }
    }
    
    //Listening for KeyStrokes
    document.onkeyup = function(write) {
        var userKey = write.key;
    
        //correct letter Guess Behavior... 
        if (randWord.indexOf(userKey) >= 0) {
            for (i = 0; i < randWord.length; i++) {
            goodLettersGuessed.push(userKey)
            console.log("Good Letters Guessed " + goodLettersGuessed)
            alert("you picked a correct letter")
            }
         }


        } //closes listening fuction

    } // closes JavaScript









    //     if (userKey == randLetter) { 
    //     alert("You Picked the Correct Letter, " + randLetter + " !")
    //     gCount = 7;
    //     wCount++;
    //     lettersGuessed = [];
    //     document.getElementById('guessesRemaining').innerHTML = gCount;
    //     document.getElementById('winCount').innerHTML = wCount;
    //     document.getElementById('lettersGuessed').innerHTML = lettersGuessed;
    //     createLetter();
    //     }
    
    //     //Incorrect Guesses Behavior 
    //     else if (lettersGuessed.includes(userKey)) {} // ensures that letters are only used once
    //     else if (possibleLetters.includes(userKey)) //ensures only valid characters (from array) are counted
    //     {
    //         gCount--;
    //         document.getElementById('guessesRemaining').innerHTML = gCount;
    //         lettersGuessed.push(userKey);
    //         document.getElementById('lettersGuessed').innerHTML = lettersGuessed;
    //      }
    
    //      // Reset Upon Loss
    //      if (gCount === 0){
    //         lCount++;
    //         document.getElementById('lossCount').innerHTML = lCount;
    //         alert("You Lost a Round");
    //         gCount = 7;
    //         document.getElementById('guessesRemaining').innerHTML = gCount;
    //         lettersGuessed = []
    //         document.getElementById('lettersGuessed').innerHTML = lettersGuessed
    //         createLetter();
    //     }
    //   }
    
    
    
   // } //Closing Window









































// window.onload = function() {
// //hangman
// //variable list for clairity
// var winCount; //counter for wins, starts at 0
// var lossCount; //counter for losses, starts at 0
// var guessesRemaining; //counter for Guesses, starts at 7
// var currentWord;
// var hangSteps; //counter for steps until a loss
// var lettersGuessed = []
// var Availwords = ['shark','squid','octopus'];

// document.onkeyup = function(event) {
//     var userKey = event.key;
//     //reduce guesses remaining, add guess to list of letters guessed

//     //If the key guessed is in the word

//     if (userKey == "h") { 
//     // display letter in current word

//     alert("h has been clicked")
//         }
//     else {
//     // increment "hangSteps" counter to change image
//         guessesRemaing - 1}
//   }

// //change the image each time "hangSteps" counter increments
// onclick=document.getElementById('diverGuy').src='pic_bulbon.gif';
// }