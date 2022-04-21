const startGameBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const DEFAULST_USER_CHOISE = "ROCK";

const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_PC_WINS = "PC_WINS";

let gameIsRunning = false;

const getPlayerChoise = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSOR}`, "").toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSOR) {
    alert(
      `You made INVALID choise! We have selected ${DEFAULST_USER_CHOISE} for you`
    );
    return DEFAULST_USER_CHOISE;
  }
  return selection;
};

const getComputerChoise = () => {
  let randomValue = Math.random();
  if (randomValue <= 0.34) {
    return ROCK;
  } else if (randomValue <= 0.68) {
    return PAPER;
  } else {
    return SCISSOR;
  }
};

const getWiner = (cChoise, pChoise) => {
  if (cChoise === pChoise) {
    return RESULT_DRAW;
  } else if (
    (cChoise === ROCK && pChoise === PAPER) ||
    (cChoise === PAPER && pChoise === SCISSOR) ||
    (cChoise === SCISSOR && pChoise === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_PC_WINS;
  }
};

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  const playerSellection = getPlayerChoise();
  const computerSellection = getComputerChoise();
  const winner = getWiner(computerSellection,playerSellection);
  console.log("Game is starting");
//   console.log(playerSellection);
//   console.log(computerSellection);
//   console.log(winner);
  let message = `PC chose ${computerSellection} and you chose ${playerSellection}.You have `
  if (winner === RESULT_DRAW) {
      message = message + 'DRAW';
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + "WON";
  } else if (winner === RESULT_PC_WINS) {
    message = message + "LOSE"
  }
  alert(message);
  gameIsRunning = false;
});
