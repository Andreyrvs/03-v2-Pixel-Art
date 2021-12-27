// ========== 03 - Cria paleta ========== //
const getPaletteContainer = document.getElementById('color-palette');

function generatePaltteColor(cores) {
  const color = document.createElement('div');
  color.id = cores;
  color.className = 'color';
  color.style.backgroundColor = cores;
  getPaletteContainer.appendChild(color);
}
generatePaltteColor('black');
generatePaltteColor('red');
generatePaltteColor('green');
generatePaltteColor('blue');

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

// ========== 04 - Cria Grid de pixels ========== //
