// ========== 03 - Cria paleta ========== //
const getColorPalette = document.getElementById('color-palette');

// function generatePaltteColor() {
//   const color = document.createElement('div');
//   color.className = 'color';
//   getColorPalette.appendChild(color);
// }

// ========== 04 - Cria Grid de pixels ========== //
const getPixelBoard = document.getElementById('pixel-board');

function generatePixelBoard() {
  for (let index = 0; index < 5; index += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'linha';
    getPixelBoard.appendChild(pixelLine);
    for (let linha = 0; linha < 5; linha += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      getPixelBoard.appendChild(pixel);
    }
  }
}
generatePixelBoard();

// ========== 07 - 08 ========== //

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

// ========== ========== //
