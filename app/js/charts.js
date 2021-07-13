'use strict';

const chartsWrapper = document.querySelector('.charts-wrapper');

if (chartsWrapper) {
  const chartsField = document.createElement('div'),
        array = [5, 8, 2, 1, 15, 2, 3, 5, 9, 11, 10, 4, 3, 14, 1, 7, 10, 3, 2, 13],
        gridFactor = getGridFactor(array),
        amount = array.length;

  chartsField.classList.add('charts-field');

  chartsField.innerHTML = `
  <div class="horizontal-line">
      <span class="horizontal-line__text">${gridFactor*4}</span>
  </div>
  <div class="horizontal-line">
      <span class="horizontal-line__text">${(gridFactor-1)*4}</span>
  </div>
  <div class="horizontal-line">
      <span class="horizontal-line__text">${(gridFactor-2)*4}</span>
  </div>
  <div class="horizontal-line">
      <span class="horizontal-line__text">${(gridFactor-3)*4}</span>
  </div>
  <div class="horizontal-line">
      <span class="horizontal-line__text">0</span>
  </div>
  `;
  
  chartsWrapper.append(chartsField);

  const widthItem = chartsField.clientWidth/amount,
        heightItem = chartsField.clientHeight/(gridFactor*4);

  array.forEach((elem, i) => {
    const item = document.createElement('div'),
          label = document.createElement('span');

    label.textContent = `${i+1}`;
    label.style.width = widthItem+'px';
    label.classList.add('charts-field__item-text');

    item.classList.add('charts-field__item');
    item.style.cssText = `
      width: ${widthItem}px;
      height: ${elem*heightItem}px;
      left: ${i*widthItem}px;
     /*  background: linear-gradient(to top, green 0, yellow ${heightItem*5}px, red ${heightItem*10}px); */
      background:${getColor(elem)};
    `;
    item.setAttribute('data-value', elem);
    item.append(label);
    chartsField.append(item);
  });
}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

function getGridFactor(numArray) {
  const max = getMaxOfArray(numArray),
        maxCeil = Math.ceil(max/4);
  let gridFactor;

  if (maxCeil === max/4) {
    gridFactor = maxCeil + 1;
  } else {
    gridFactor = maxCeil;
  }
  return gridFactor;
}

function getColor(height) {
  let color;
  if (height > 10) {
    color = 'red';
  } else if (height > 5) {
    color = 'yellow';
  } else {
    color = 'green';
  }
  return color;
}