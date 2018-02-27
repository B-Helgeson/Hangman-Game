# Hangman-Game Psuedo-Code Plan

#Style
H1 with name of game (and theme)

Image Box in left column - Builds out the character in steps as the wrong guesses are picked
    Hanging Post
    Legs
    Arms 
    Body
    Head

Interactivity in Right column - 
    Press any key to get started!
    Scoreboard: Number of Wins & Losses 
    Current Word ______
    Number of Guesses Remaining
    Letters Already Guessed

#Overall Logic

Queue of available words
    Logic to randomly pick from available words (no repeating)
    Ability to identify all letters in the word
    Change number of ______ based on length of word

Keystrokes
    Check keystroke against letters in the selected word
        If the letter exists, identify it in the _____
        If the letter does not exist, increment the hang man
    Mark each picked letter as a reduction in guesses
    Mark each picked letter as a "Letter Guessed already"
    
Hang Man
    Each time a bad guess is incremented, add another step to the hang man

Win
    Increment win Counter
    Alert the win
    Reset the word

Loss
    Complete the hang man, Increment the Loss Counter
    Alert the loss
    Reset the word

#Logical Components

Counters
    Wins
    Losses
    Guesses Remaining
    Hanging the Man

Variables
    Keystrokes
    LettersGuessed
    Word List




