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
