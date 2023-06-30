const weapons = document.getElementById("weapons").children;
const roundElem = document.getElementById("round");
const choicesElem = document.getElementById("choices");
const yourChoiceElem = document.getElementById("yourChoice");
const oppChoiceElem = document.getElementById("oppChoice");
const resultElem = document.getElementById("result");
const scoresElem = document.getElementById("scores");
const historyContainerElem = document.getElementById("historyContainer");
const lastFiveTextElem = document.getElementById("lastFiveText");

let round = 0;
let yourScore = 0;
let oppScore = 0;
let history = 0;

Array.from(weapons).forEach((child) => {
  child.addEventListener("click", (event) => {
    game(event.target.id);
    roundElem.textContent = `round ${++round}`;
    choicesElem.style.display = "block";
    historyContainerElem.style.display = "block";
    lastFiveTextElem.style.display = "block"
  });
});

function game(choice) {
  const options = ["rock", "paper", "scissors"];
  const oppChoice = options[Math.floor(Math.random() * options.length)];
  const result = choice === oppChoice ? "Tie" : doYouWin(choice, oppChoice);

  yourChoiceElem.textContent = choice;
  oppChoiceElem.textContent = oppChoice;

  resultElem.textContent = getResult(result);

  scoresElem.textContent = `${yourScore} : ${oppScore}`;

  createHistory(result)
  history++

}


function createHistory(result) {
    if (history >= 5) {
        historyContainerElem.removeChild(historyContainerElem.firstElementChild)
    }

    if (result === "Tie") {
        historyContainerElem.innerHTML += `<div class="history">
                                                <div style="background-color: #0D2743;">Tie</div>
                                                <div style="background-color: #0D2743;">Tie</div>
                                            </div>`;
    } else if (result) {
        historyContainerElem.innerHTML += `<div class="history">
                                                <div style="background-color: #0E480F;">Won</div>
                                                <div style="background-color: #48190E;">Lost</div>
                                            </div>`;
    } else {
        historyContainerElem.innerHTML += `<div class="history">
                                                <div style="background-color: #48190E;">Lost</div>
                                                <div style="background-color: #0E480F;">Won</div>
                                            </div>`;
    }
}

function getResult(result) {
  if (result === "Tie") {
    return "It's a Tie!";
  } else if (result) {
    yourScore++;
    return "You win!";
  } else {
    oppScore++;
    return "You Lose!";
  }
}

function doYouWin(choice, oppChoice) {
  if (choice === "rock" && oppChoice === "scissors") {
    return true;
  } else if (choice === "paper" && oppChoice === "rock") {
    return true;
  } else if (choice === "scissors" && oppChoice === "paper") {
    return true;
  } else {
    return false;
  }
}
