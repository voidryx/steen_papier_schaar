//variabelen maken//
const humenoutput = document.querySelector("#human");
const computeroutput = document.querySelector("#computer");
const resultoutput = document.querySelector("#result");

const playerWinsOutput = document.querySelector("#playerWins");
const botWinsOutput = document.querySelector("#botWins");
const winStreakOutput = document.querySelector("#winStreak");
const highScoreOutput = document.querySelector("#highScore");

const winSound = document.querySelector("#winSound");
const loseSound = document.querySelector("#loseSound");

humenoutput.innerHTML = "jouw keuze komt hier";

const steenbtn = document.querySelector("#steen");
const papierbtn = document.querySelector("#papier");
const schaarbtn = document.querySelector("#schaar");

//houdt de score bij//
let playerWins = 0;
let botWins = 0;
let winStreak = 0;
let highScore = 0;

function getComputerChoice() {
    const randomnumber = Math.floor(Math.random() * 3) + 1; //pakt 0-1 daarna zet het om in 0-3 uiteindelijk maakt hij er een heel nummer van//

    if (randomnumber === 1) return "steen";
    if (randomnumber === 2) return "papier";
    return "schaar";
}

function playGame(event) {
    const humenchoice = event.target.id;
    humenoutput.innerHTML = humenchoice;

    const computerchoice = getComputerChoice();
    computeroutput.innerHTML = computerchoice;

    const result = getResult(humenchoice, computerchoice);
    resultoutput.innerHTML = result;

    if (result === "Jij wint") {
        playerWins++;
        winStreak++;

        winSound.currentTime = 0;
        winSound.play();

        if (winStreak > highScore) {
            highScore = winStreak;
        }

    } else if (result === "Computer wint") {
        botWins++;
        winStreak = 0;

        loseSound.currentTime = 0;
        loseSound.play();
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