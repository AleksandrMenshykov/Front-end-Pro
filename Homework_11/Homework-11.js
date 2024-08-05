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