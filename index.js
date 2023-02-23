const board = document.querySelector('#board');
const SQUARES_NUMBER = 990;
const colors = [
  '#FFC0CB',
  '#FFA07A',
  '#FF00FF',
  '#9370DB',
  '#8A2BE2',
  '#1E90FF',
  '#00FF7F',
];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColor(square);
  });
  square.addEventListener('mouseleave', () => {
    removeColor(square);
  });

  board.append(square);
}

function setColor(elem) {
  const color = getRandomColor();
  elem.style.backgroundColor = color;
  elem.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`;
}
function removeColor(elem) {
  elem.style.backgroundColor = '#1d1d1d';
  elem.style.boxShadow = `0 0 2px black`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
