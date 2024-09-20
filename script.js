let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 100;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const checkGuess = function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("⛔️ No number!");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "TOO HIGH!" : "TOO LOW!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("YOU LOST THE GAME");
      document.querySelector(".score").textContent = 0;
    }
  }
};

// Event listener for the 'Check' button
document.querySelector(".check").addEventListener("click", checkGuess);

// New event listener for the 'Enter' key on the input field
document.querySelector(".guess").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 100;
  secretNumber = Math.trunc(Math.random() * 100) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
