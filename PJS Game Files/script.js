const btnRoll = document.getElementById('btn--roll');
const btnHold = document.getElementById('btnHold');
const restartBtn = document.getElementById('restart');

const dice = document.getElementById('dice');
const winner = document.getElementById('winner--img');
const score0 = document.getElementById('score--0');

let currentScore = 0;
let totalScore = [0,0];


let currentPlayer = 0;

btnRoll.addEventListener('click', () => {
  // console.log(Math.trunc((Math.random()*6)+1))

  let randomNumber = Math.trunc(Math.random() * 6 + 1);
  console.log(randomNumber);

  if (randomNumber == 1) {
    // if (currentPlayer == 0) {

    //   currentPlayer = 1;

    // }

    // else {
    //   currentPlayer = 0;
    // }

    // currentPlayer == 0 ? currentPlayer = 1 : currentPlayer = 0;

    dice.src = `dice-${randomNumber}.png`;

    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.remove('player--active');

    currentScore = 0;

    document.getElementById(`current--${currentPlayer}`).innerText =
      currentScore;

    currentPlayer = currentPlayer == 0 ? 1 : 0;

    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.add('player--active');
  } else {
    dice.classList.remove('hidden');
    dice.src = `dice-${randomNumber}.png`;

    // console.log((Math.random()*6)+1)

    currentScore = currentScore + randomNumber;
    document.getElementById(`current--${currentPlayer}`).innerText =
      currentScore;
  }
});

btnHold.addEventListener('click', () => {

  totalScore[currentPlayer] = totalScore[currentPlayer] + currentScore;
  document.getElementById(`score--${currentPlayer}`).innerText = totalScore[currentPlayer];

  if(totalScore[currentPlayer] >= 25){

    
    console.log(totalScore[currentPlayer]);
    dice.classList.add('hidden');
    winner.style.display='block';

    document
    .querySelector(`.player--${currentPlayer}`)
    .classList.add('player--winner');

    document.getElementById(`winner--text`).innerText = `Player ${currentPlayer} wins the game`
    
  }
  else
  {
  currentScore = 0;
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove('player--active');

  document.getElementById(`current--${currentPlayer}`).innerText = currentScore;

  currentPlayer = currentPlayer == 0 ? 1 : 0;
  document
  .querySelector(`.player--${currentPlayer}`)
  .classList.add('player--active');

}
});
