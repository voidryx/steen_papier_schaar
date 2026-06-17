
const humenoutput = document.querySelector("#human");
const computeroutput = document.querySelector("#computer");
const resultoutput = document.querySelector("#result");

humenoutput.innerHTML = "jouw keuze komt hier";

const steenbtn = document.querySelector("#steen");
const papierbtn = document.querySelector("#papier");
const schaarbtn = document.querySelector("#schaar");

let humenchoice = "";
let computerchoice = "";


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

    resultoutput.innerHTML = getResult(humenchoice, computerchoice);
}


steenbtn.addEventListener("click", playGame);
papierbtn.addEventListener("click", playGame);
schaarbtn.addEventListener("click", playGame);

//zodat de uitslag kan besluiten woorden
function getResult(humenchoice, computerchoice) {
    if (humenchoice === computerchoice) {
        return "Gelijkspel ";
    }

    if (
        (humenchoice === "steen" && computerchoice === "schaar") ||
        (humenchoice === "papier" && computerchoice === "steen") ||
        (humenchoice === "schaar" && computerchoice === "papier")
    ) {
        return "Jij wint ";
    }

    return "Computer wint ";    
}