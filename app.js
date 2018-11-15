// scoring
const userScore = 0;
const compScore = 0;
const options = ["r", "p", "s", "l", "sp"];

// update html
document.getElementById("user-score").innerHTML = userScore;
document.getElementById("comp-score").innerHTML = compScore;

// rules - basis for our logic
// r=rock, p=paper, s=scissors, l=lizard, sp=spock
// s>p p>r r>l sp>s s>l l>p p>sp sp>r r>s

// get random computer guess
function startGame() {
    choice = options[Math.floor(Math.random() * options.length)];
    console.log(choice);
}

startGame();

// get user guess
function getUserGuess() {
    //    switch case here?
    let userChoice = "";

    function rock() {
        userChoice = "rock";
        document.getElementById("results").innerHTML = "You Chose Rock!"
    }
    function paper() {
        userChoice = "paper";
        document.getElementById("results").innerHTML = "You Chose Paper!"
    }
    function scissors() {
        userChoice = "scissors";
        document.getElementById("results").innerHTML = "You Chose Scissors!"
    }
    function lizard() {
        userChoice = "lizard";
        document.getElementById("results").innerHTML = "You Chose Lizard!"
    }
    function spock() {
        userChoice = "spock";
        document.getElementById("results").innerHTML = "You Chose Spock!"
    }


    if (userChoice === "rock"){
        rock();
    } else if (userChoice === "paper"){
        paper();
    } else if (userChoice === "scissors"){
        scissors();
    } else if (userChoice === "lizard"){
        lizard();
    } else if (userChoice === "spock"){
        spock();
    }

}
