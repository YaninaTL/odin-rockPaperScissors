const animals = ["rabbit", "fox", "grass"];
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let gameStarted = false; // Flag to track if the game has started

function computerAnimal() {
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
}

function determineResult(userAnimal, compAnimal) {
  if (userAnimal === compAnimal) return "It's a tie!";

  if (
    (userAnimal === "rabbit" && compAnimal === "grass") ||
    (userAnimal === "fox" && compAnimal === "rabbit") ||
    (userAnimal === "grass" && compAnimal === "fox")
  ) {
    computerScore++;
    return `${capitalizeFirstLetter(
      userAnimal
    )} wins against ${capitalizeFirstLetter(compAnimal)}.`;
  } else {
    playerScore++;
    return `${capitalizeFirstLetter(
      compAnimal
    )} wins against ${capitalizeFirstLetter(userAnimal)}.`;
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function updateScores() {
  const roundDisplay = document.getElementById("roundNumber");
  const scoreDisplay = document.getElementById("score");

  roundDisplay.innerText = `${rounds}`;
  scoreDisplay.innerText = `Player - ${playerScore}, Computer - ${computerScore}`;

  if (rounds === 5) {
    document.querySelector(
      ".result"
    ).innerText = `Player: ${playerScore} - Computer: ${computerScore}`;
  }
}

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function () {
    if (!gameStarted) {
      gameStarted = true;
      rounds = 1; // Start the game
      updateScores();
    } else if (rounds < 5) {
      const userAnimal = this.id;
      const compAnimal = computerAnimal();
      const result = determineResult(userAnimal, compAnimal);

      document.querySelector(".result").innerText = `${result}`;

      rounds++;
      updateScores();
    }
  });
});
