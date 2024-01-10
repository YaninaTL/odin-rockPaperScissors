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

// Function to update scores and round display
function updateScores() {
  const roundDisplay = document.getElementById("roundNumber");
  roundDisplay.innerText = `You: ${playerScore}, Nature: ${computerScore}`;

  if (playerScore + computerScore === 5) {
    const modal = document.getElementById("myModal");
    const finalResult = document.getElementById("finalResult");
    finalResult.innerText =
      playerScore > computerScore ? "You win!" : "Sorry, nature wins.";

    modal.style.display = "block";

    // Close the modal when the close button is clicked
    const closeBtn = document.querySelector(".close");
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
  }
}

// Event listeners for button clicks
// document.querySelectorAll(".btn").forEach((button) => {
//   button.addEventListener("click", function () {
//     console.log("Button clicked");
//     if (!gameStarted) {
//       gameStarted = true;
//       updateScores();
//     } else {
//       const userAnimal = this.id;
//       const compAnimal = computerAnimal();
//       const result = determineResult(userAnimal, compAnimal);

//       document.querySelector(".result").innerText = result;
//       updateScores();
//     }
//   });
// });
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
