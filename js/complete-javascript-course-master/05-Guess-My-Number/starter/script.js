'use strict';
//
let score;
let secretNumber;
let highscore = 0;
//
let messageElement = document.querySelector('.message');
let numberElement = document.querySelector('.number');
let scoreElement = document.querySelector('.score');
let guessElement = document.querySelector('.guess');

function pickNumber() {
  secretNumber = Math.round(Math.random() * 20) + 1;
}

function decreaseScore() {
  score--;
  scoreElement.textContent = score;
}

function chechGameState() {
  if (score === 0) {
    displayMessage('You lost');
  }
}

function startGame() {
  score = 20;
  pickNumber();
}

function restartGame() {
  guessElement.value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  scoreElement.textContent = score;
  numberElement.style.width = '15rem';
  numberElement.textContent = '?';
  startGame();
}

function displayMessage(message) {
  messageElement.textContent = message;
}

function checkHandler() {
  const guess = Number(guessElement.value);

  //using falsy value here`
  if (!guess) {
    displayMessage('👀 No input.');
  } else if (guess === secretNumber) {
    displayMessage('✔ Yeah correct');
    document.querySelector('body').style.backgroundColor = '#60b347';
    numberElement.style.width = '30rem';
    numberElement.textContent = secretNumber;
    updateHighscore(score);
  } else if (guess > secretNumber) {
    let message =
      guess > secretNumber ? '🤔 Guess is too high' : '🤔 Guess is too low';
    displayMessage(message);
    decreaseScore();
  }
  chechGameState();
}

function updateHighscore(score) {
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
}

var checkElement = document.querySelector('.check');
checkElement.addEventListener('click', checkHandler);

document.querySelector('.again').addEventListener('click', restartGame);
startGame();
