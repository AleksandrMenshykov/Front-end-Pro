/*
ДЗ 11.2. Кнопка зміни кольору

Є блок із текстом на сторінці та кнопку. При натисканні на кнопку текст змінює колір.
При повторному натисканні – повертається попередній колір
*/

const paragraph = document.querySelector('#paragraph');
const btn = document.querySelector('#button');

btn.addEventListener('click', changeColor);

let btnColor = true;


function changeColor() {

  if (btnColor) {
    paragraph.style.color = 'red'
  } else {
    paragraph.style.color = ''
  }

  btnColor = !btnColor
}