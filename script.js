// ========== 03 - Cria paleta ========== //
const getColorPalette = document.getElementById('color-palette');

// ========== 04 - Cria Grid de pixels ========== //
const getPixelBoard = document.getElementById('pixel-board');

function generatePixelBoard(tamanho) {
  for (let index = 0; index < tamanho; index += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'linha';
    getPixelBoard.appendChild(pixelLine);
    for (let linha = 0; linha < tamanho; linha += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      getPixelBoard.appendChild(pixel);
    }
  }
}

// ========== 10 - input e btn para gerar o grid de pixels ========== //
const getBoardSize = document.getElementById('board-size');
const getBtnGenerateBoard = document.getElementById('generate-board');

// ========== remove o grid ========== //
function clearSize() {
  while (getPixelBoard.hasChildNodes()) {
    getPixelBoard.removeChild(getPixelBoard.lastChild);
  }
}

// ========== alerta board invalido ========== //
function alertMsg() {
  const boardSize = getBoardSize.value;
  if (!boardSize) {
    alert('Board inválido!');
  }
}
// ========== 11 - verifica o tamanho do board  ========== //
function pixelsBoard() {
  let boardSize = getBoardSize.value;
  if (boardSize < 5) {
    boardSize = 5;
  } else if (boardSize > 50) {
    boardSize = 50;
  }
  // ========== - remove o grid, e gera novamente o grid ========== //
  clearSize();
  generatePixelBoard(boardSize);
}

getBtnGenerateBoard.addEventListener('click', pixelsBoard);
getBtnGenerateBoard.addEventListener('click', alertMsg);

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
    event.target.style.backgroundColor = getCSSprop();
  }
});

// ========== 09 - Preenche o Quadro de pixels com Branco ========== //
const getBtnClearBoard = document.querySelector('#clear-board');
getBtnClearBoard.addEventListener('click', pixelsBoard);

window.onload = () => {
  generatePixelBoard(5);
};
