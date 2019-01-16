// scoring
let userScore = 0;
let compScore = 0;
const options = ["r", "p", "s", "l", "sp"];

// update html
document.getElementById("user-score").innerHTML = userScore;
document.getElementById("comp-score").innerHTML = compScore;

// get random computer guess
function startGame() {
    choice = options[Math.floor(Math.random() * options.length)];
    console.log(choice);
}

startGame();

// get user guess
// dry this up ... maybe a switch case?
let userChoice = "";     
    function rock() {
        userChoice = "r";
        document.getElementById("results").innerHTML = "You Chose Rock!"
        startGame();
        score();
    }
    function paper() {
        userChoice = "p";
        document.getElementById("results").innerHTML = "You Chose Paper!"
        startGame();
        score();
    }
    function scissors() {
        userChoice = "s";
        document.getElementById("results").innerHTML = "You Chose Scissors!"
        startGame();
        score();
    }
    function lizard() {
        userChoice = "l";
        document.getElementById("results").innerHTML = "You Chose Lizard!"
        startGame();
        score();
    }
    function spock() {
        userChoice = "sp";
        document.getElementById("results").innerHTML = "You Chose Spock!"
        startGame();
        score();
    }

// scoring
// rules - basis for our logic
// r=rock, p=paper, s=scissors, l=lizard, sp=spock
// s>p p>r r>l sp>s s>l l>p p>sp sp>r r>s

// !!!! IN PROGRESS
function score(){
    console.log("You picked " + userChoice + ", but computer chose " + choice);

    if (choice === userChoice){
        document.getElementById("results").innerHTML = "Tie!"
    }
    if (choice === "l" && userChoice === "r"){
        document.getElementById("results").innerHTML = "You win!";
        userScore++;
        document.getElementById("user-score").innerHTML(userScore);
    }
}