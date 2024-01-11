// Constants
const animals = ["rabbit", "fox", "grass"];
let playerScore = 0;
let computerScore = 0;
let gameStarted = false; // Flag to track if the game has started

// Function to generate computer's choice
function computerAnimal() {
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
}

// Function to determine the result of each round
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

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to reset the game state
// Function to reset the game state
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  gameStarted = false;
  document.querySelector(".result").innerText = "Make your choice!";

  // Reset the final result display
  const finalResult = document.getElementById("finalResult");
  finalResult.innerText = "";

  // Update the round display to show the reset scores
  const roundDisplay = document.getElementById("roundNumber");
  roundDisplay.innerText = `You: ${playerScore}, Nature: ${computerScore}`;
}

// Function to update scores and round display
function updateScores() {
  const roundDisplay = document.getElementById("roundNumber");
  roundDisplay.innerText = `You: ${playerScore}, Nature: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    const modal = document.getElementById("myModal");
    const finalResult = document.getElementById("finalResult");
    if (playerScore > computerScore) {
      finalResult.innerText = "You won!";
    } else if (playerScore < computerScore) {
      finalResult.innerText = "Sorry, nature won.";
    } else {
      finalResult.innerText = "It's a tie!";
    }

    modal.style.display = "block";

    // Close the modal and reset the game when the close button is clicked
    const closeBtn = document.querySelector(".close");
    closeBtn.onclick = function () {
      modal.style.display = "none";
      resetGame();
    };
    // Event listener for the Esc key
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
        resetGame();
      }
    });
  }
}

// Event listener for the first button click
let firstButtonClick = true;
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function () {
    if (firstButtonClick) {
      firstButtonClick = false;
      gameStarted = true;
    }
    const userAnimal = this.id;
    const compAnimal = computerAnimal();
    const result = determineResult(userAnimal, compAnimal);

    document.querySelector(".result").innerText = result;
    updateScores();
  });
});
