const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

function handleClick(e) {
  const square = e.target;
  if (square.textContent === '') {
    square.textContent = currentPlayer;
    swapTurns();
  }
}

function swapTurns() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

squares.forEach(square => {
  square.addEventListener('click', handleClick);
});
