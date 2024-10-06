let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg-txt");
const userScoreTxt = document.querySelector("#user-score");
const compScoreTxt = document.querySelector("#comp-score");

const getCompChoice = () => {
  let options = ["rock", "paper", "scissor"];
  let rndIdx = Math.floor(Math.random() * 3);
  return options[rndIdx];
};

const drawGame = () => {
  console.log("draw Game");
  msg.innerText = "game drawn";
  msg.style.backgroundColor = "#081b31";
};

// show Winner

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScoreTxt.innerText = userScore;
    console.log("you win");
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScoreTxt.innerText = compScore;
    console.log("you lose");
    msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice ", userChoice);
  //getting comp choice
  compChoice = getCompChoice();

  console.log("comp Choice", compChoice);

  if (userChoice === compChoice) {
    // draw
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors , paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock , scissore
      userWin = compChoice === "scissor" ? false : true;
    } else {
      // scissors
      // rock , paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id"); // getting arrtibute by id
    playGame(userChoice);
  });
});
