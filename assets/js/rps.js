/*
* Global HTML Variables
*/
var rpsJumbotron = document.getElementById("rps-jumbotron");
var rpsCardGroup = document.getElementById("rps-card-group");
var winText = document.getElementById("win-count");
var lossText = document.getElementById("loss-count");
var tieText = document.getElementById("tie-count");
var resetButton = document.getElementById("reset-button");
var userImg = document.getElementById("user-image");
var compImg = document.getElementById("computer-image");

/*
* Other Global Variables
*/
var wins = 0;
var losses = 0;
var ties = 0;

/*
* Check if the user presses either 'r', 'p', or 's' key
* If they do we'll log the key and hide the jumbotron and show the game board
* Call computerPicker function and store the value it returns in
* computerGuess variable is recorded and logged to console
* then Call the updatePicture function
*/

function gameStart(e) {
    if (e.key === 'r' || e.key === 'p' || e.key === 's') {
        rpsJumbotron.style.display = "none";
        rpsCardGroup.style.display = "flex";
        var computerGuess = computerPicker();
        var computerPicture = updatePicture(computerGuess);
        compImg.src = computerPicture;
        userImg.src = updatePicture(e.key);
        updateScore(computerGuess, e.key);

    } else if (e.key === 'q') {
        rpsJumbotron.style.display = "block";
        rpsCardGroup.style.display = "none";
        initializeScores();
    }
}

/*
* Function that sets the win, loss and tie values to zero
*/

function initializeScores() {
    wins = 0;
    losses= 0;
    ties = 0;
    displayScores();
}
// Function will update HTML values of the scores to the values in the javascript file
function displayScores() {
    winText.textContent = wins;
    lossText.textContent = losses;
    tieText.textContent = ties;
}

// This function will pick a guess for the computer from the available options
// Options it can pick from will be set in an array as r, p, or s
// We will call Math.random() to pick a number for us bettwen 0 and 1
// It is INCLUSIVE of 0 but not of 1 = 0 to 0.9999
// We then call Math.Floor() on the response from Math.Random() which will give us a whole number
// Which will be the largest integer less than or equal to a given number


function computerPicker() {
    var computerOptions = ['r', 'p', 's'];
    var computerChoice = computerOptions[Math.floor(Math.random() * 3)];
    return computerChoice;
}

//This new function will receive a character and then assign a photograph 
//Will check if character is a r p or s and then set the appropriate image source

function updatePicture(char) {
    console.log("In updatePicture function " + char);
    if (char === 'r'){
        return "assets/images/rock.png";
    }
    else if (char ==='p'){
        return "assets/images/paper.png";
    }
    else if (char ==='s'){
        return "assets/images/scissors.png";

    }
}

// We will receive two arguments. First argument is computer guess, second argument is user guess
// Will compare values, if user guess beats computer -- increase wins
// If user guess loses copmuter -- increase losses
// If user is a tie with computer -- increase ties
function updateScore(comp, user){
    if ((user === 'r' && comp === 's') || 
        (user === 'p' && comp === 'r') || 
        (user === 's' && comp === 'p')) {
            wins ++;
        }
    else if (comp === user){
        ties ++;
    }
    else {
        losses ++;
    }
    displayScores();
}



// This will add an event listener the gameStart function whenver a user presses a key //
document.onkeyup = gameStart;

// This will add an event listener to our reset button when the user clicks it
resetButton.addEventListener("click", initializeScores);

// This function will call when browser loads webpage
initializeScores();