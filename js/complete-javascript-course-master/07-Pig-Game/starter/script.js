'use strict';

const player1Section = document.querySelector('.player--0');
const player2Section = document.querySelector('.player--1');

let activePlayer = 0;
let currentScore = 0;
let scores = [0, 0];
const scoreGoal = 50;

const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

dice.classList.add('hidden');
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdPoints);
btnNew.addEventListener('click', resetGame);

function getRollResult() {
  return Math.trunc(Math.random() * 6) + 1;
}

function rollDice() {
  const roll = getRollResult();

  dice.classList.remove('hidden');
  dice.src = `dice-${roll}.png`;

  if (roll !== 1) {
    currentScore += roll;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    turnover();
  }
}

function turnover() {
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1Section.classList.toggle('player--active');
  player2Section.classList.toggle('player--active');

  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
}

function holdPoints() {
  scores[activePlayer] += currentScore;

  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= scoreGoal) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');

    document.getElementById(`name--${activePlayer}`).textContent = `Player ${
      activePlayer + 1
    } wins!`;

    btnRoll.classList.add('hidden');
    btnHold.classList.add('hidden');
    dice.classList.add('hidden');
  } else {
    turnover();
  }
}

function resetGame() {
  location.reload();
}
