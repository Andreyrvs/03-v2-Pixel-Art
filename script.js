// ========== 03 - Cria paleta ========== //
const getColorPalette = document.getElementById('color-palette');

// ========== 04 - Cria Grid de pixels ========== //
const getPixelBoard = document.getElementById('pixel-board');

const gridSize = 5;
function generatePixelBoard() {
  for (let index = 0; index < gridSize; index += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'linha';
    getPixelBoard.appendChild(pixelLine);
    for (let linha = 0; linha < gridSize; linha += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      getPixelBoard.appendChild(pixel);
    }
  }
}
generatePixelBoard();

// ========== 07 - pega a cor da paleta ========== //

function getCSSprop() {
  const selectedClass = document.querySelector('.selected');
  const cssObj = window.getComputedStyle(selectedClass, null).getPropertyValue('background-color');
  console.log(cssObj);
  return cssObj;
}

getColorPalette.addEventListener('click', (event) => {
  if (event.target.id !== 'color-palette') {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
    getCSSprop();
  }
});

// ========== 08 - Passa a cor para os pixels ========== //
getPixelBoard.addEventListener('click', (event) => {
  if (event.target.id !== 'pixel-board') {
    // event.target.classList.remove('selected');
    // event.target.classList.add('selected');
    event.target.style.backgroundColor = getCSSprop();
  }
});
