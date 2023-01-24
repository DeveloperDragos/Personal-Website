const userScore = document.getElementById("userScore");
const userChoice = document.getElementById("userChoice");

const userRock = document.getElementById("userRock");
const userPaper = document.getElementById("userPaper");
const userScissors = document.getElementById("userScissors");

const computerScore = document.getElementById("computerScore");
const computerChoice = document.getElementById("computerChoice");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");

const allGameIcons = document.querySelectorAll(".fa-regular");
const resultText = document.getElementById("resultText");

const choices = {
  rock: { name: "rock", defeats: "scissors" },
  paper: { name: "paper", defeats: "rock" },
  scissors: { name: "scissors", defeats: "paper" },
};

let computerChoiceVariable = "";
let userScoreNumber = 0;
let computerScoreNumber = 0;

function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.3) {
    computerChoiceVariable = "rock";
  } else if (computerChoiceNumber <= 0.6) {
    computerChoiceVariable = "paper";
  } else {
    computerChoiceVariable = "scissors";
  }
}

function displayComputerChoice() {
  switch (computerChoiceVariable) {
    case "rock":
      computerRock.classList.add("selected");
      computerChoice.textContent = " --- Rock";
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerChoice.textContent = " --- Paper";
      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerChoice.textContent = " --- Scissors";
      break;
    default:
      break;
  }
}

// reset selected icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
}

// reset the game (scores and choices)
function resetGame() {
  userScore.textContent = 0;
  computerScore.textContent = 0;
  userChoice.textContent = "";
  computerChoice.textContent = "";
  resultText.textContent = "";
  resetSelected();
}

function updateScore(userChoiceOnclick) {
  if (userChoiceOnclick === computerChoiceVariable) {
    resultText.textContent = "It's a draw.";
  } else {
    const choice = choices[userChoiceOnclick];

    if (choice.defeats.indexOf(computerChoiceVariable) > -1) {
      // indexOf returns "0" if it finds computerChoiceVariable == defeats from choices object
      resultText.textContent = "You won!🥳";
      userScoreNumber++;
      userScore.textContent = userScoreNumber;
    } else {
      resultText.textContent = "You lost!";
      computerScoreNumber++;
      computerScore.textContent = computerScoreNumber;
    }
  }
}

function checkResult(userChoiceOnclick) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(userChoiceOnclick);
}

// changing icon color and passing user selection value
function select(userChoiceOnclick) {
  checkResult(userChoiceOnclick);
  switch (userChoiceOnclick) {
    case "rock":
      userRock.classList.add("selected");
      userChoice.textContent = " --- Rock";
      break;
    case "paper":
      userPaper.classList.add("selected");
      userChoice.textContent = " --- Paper";
      break;
    case "scissors":
      userScissors.classList.add("selected");
      userChoice.textContent = " --- Scissors";
      break;
    default:
      break;
  }
}
// calling the function when we refresh the page
resetGame();
