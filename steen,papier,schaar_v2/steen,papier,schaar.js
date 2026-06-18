const humenoutput = document.querySelector("#human");
const computeroutput = document.querySelector("#computer");
const resultoutput = document.querySelector("#result");

const playerWinsOutput = document.querySelector("#playerWins");
const botWinsOutput = document.querySelector("#botWins");
const winStreakOutput = document.querySelector("#winStreak");
const highScoreOutput = document.querySelector("#highScore");

humenoutput.innerHTML = "jouw keuze komt hier";

const steenbtn = document.querySelector("#steen");
const papierbtn = document.querySelector("#papier");
const schaarbtn = document.querySelector("#schaar");

let humenchoice = "";
let computerchoice = "";

// Scores
let playerWins = 0;
let botWins = 0;
let winStreak = 0;
let highScore = 0;

function getComputerChoice() {
    const randomnumber = Math.floor(Math.random() * 3) + 1;

    if (randomnumber === 1) return "steen";
    if (randomnumber === 2) return "papier";
    return "schaar";
}

function playGame(event) {
    humenchoice = event.target.id;
    humenoutput.innerHTML = humenchoice;

    computerchoice = getComputerChoice();
    computeroutput.innerHTML = computerchoice;

    const result = getResult(humenchoice, computerchoice);
    resultoutput.innerHTML = result;

    if (result === "Jij wint") {
        playerWins++;
        winStreak++;

        if (winStreak > highScore) {
            highScore = winStreak;
        }
    }
    else if (result === "Computer wint") {
        botWins++;
        winStreak = 0;
    }

    playerWinsOutput.innerHTML = playerWins;
    botWinsOutput.innerHTML = botWins;
    winStreakOutput.innerHTML = winStreak;
    highScoreOutput.innerHTML = highScore;
}

steenbtn.addEventListener("click", playGame);
papierbtn.addEventListener("click", playGame);
schaarbtn.addEventListener("click", playGame);

function getResult(humenchoice, computerchoice) {
    if (humenchoice === computerchoice) {
        return "Gelijkspel";
    }

    if (
        (humenchoice === "steen" && computerchoice === "schaar") ||
        (humenchoice === "papier" && computerchoice === "steen") ||
        (humenchoice === "schaar" && computerchoice === "papier")
    ) {
        return "Jij wint";
    }

    return "Computer wint";
}