let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 100;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    //document.querySelector(".message").textContent = "⛔️ No number!";
    displayMessage("⛔️ No number!");
  } else if (guess === secretNumber) {
    //document.querySelector(".message").textContent = "🎉 Correct Number!";
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //NEW VERSION
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "TOO HIGH!" : "TOO LOW!";
      displayMessage(guess > secretNumber ? "TOO HIGH!" : "TOO LOW!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "YOU LOST THE GAME";
      displayMessage("YOU LOST THE GAME");
      document.querySelector(".score").textContent = 0;
    }
  }
  //OLD VERSION
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "TOO HIGH!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "YOU LOST THE GAME";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "TOO LOW!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "YOU LOST THE GAME";
  //     document.querySelector(".score").textContent = 0;
  //   }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 100;
  secretNumber = Math.trunc(Math.random() * 100) + 1;

  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
