const animals = ["rabbit", "fox", "grass"];

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
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function () {
    const userAnimal = this.id;
    const compAnimal = computerAnimal();
    const result = determineResult(userAnimal, compAnimal);
    let message = "";

    if (result === "You win!") {
      switch (userAnimal) {
        case "rabbit":
          message = "Rabbit wins against Grass.";
          break;
        case "fox":
          message = "Fox wins against Rabbit.";
          break;
        case "grass":
          message = "Grass wins against Fox.";
          break;
        default:
          message = "Invalid selection.";
      }
    } else if (result === "Computer wins!") {
      switch (compAnimal) {
        case "rabbit":
          message = "Rabbit wins against Grass.";
          break;
        case "fox":
          message = "Fox wins against Rabbit.";
          break;
        case "grass":
          message = "Grass wins against Fox.";
          break;
        default:
          message = "Invalid selection.";
      }
    } else {
      switch (userAnimal) {
        case "rabbit":
          message = "Rabbit and Rabbit!";
          break;
        case "fox":
          message = "Fox and Fox!";
          break;
        case "grass":
          message = "Grass and Grass!";
          break;
        default:
          message = "It's a tie!";
      }
    }

    document.querySelector(".result").innerText = `${result}\n${message}`;
  });
});
