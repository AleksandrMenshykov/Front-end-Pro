/*
ДЗ 11.1. Таблиця піфагора

Вивести таблицю Піфагора (10×10), проте цього разу таблиця повинна бути створена динамічно
*/

const table = document.createElement('table')
document.body.appendChild(table)
table.style.padding = '10px'

const tbody = document.createElement('tbody')
table.appendChild(tbody)

for (let i = 1; i <= 10; i++) {
  const tr = document.createElement('tr')
  tbody.appendChild(tr)

  for (let j = 1; j <= 10; j++) {
    const td = document.createElement('td')
    tr.appendChild(td)
    td.textContent = i * j
    td.style.cssText = `
      padding: 5px;
      border: 1px solid black;
    `
  }
}

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

/*
ДЗ 11.3. Отримання випадкового зображення

Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
Вивести зображення, отримане випадковим чином (Math.random)
*/


const container = document.createElement('div')
container.className = 'container'
document.body.appendChild(container)

const inner = document.createElement('div')
container.appendChild(inner)
inner.className = 'inner'

const img = document.createElement('img')
img.className = 'img'
inner.appendChild(img)

const button = document.createElement('button')
button.setAttribute('type', 'button')
button.textContent = 'Change item'
button.className = 'button'
container.appendChild(button)

button.addEventListener('click', showRandomValue)

const names = ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg', './img/5.jpg', './img/6.jpg', './img/7.jpg']

function showRandomValue(arr) {

  const arrIndex = Math.floor((Math.random()) * names.length);
  img.setAttribute('src', names[arrIndex]);

}