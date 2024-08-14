/*
ДЗ 12.2. Використання подій

Створіть HTML-сторінку з декількома кнопками. Ваше завдання - створити обробник подій для батьківського елементу, який відслідковуватиме кліки на всіх кнопках.

Покроковий план:

1. Створіть HTML-елементи: батьківський контейнер з декількома вкладеними кнопками.
2. Додайте обробник подій до батьківського контейнера, який відслідковуватиме кліки.
3. Після кліку на будь-якій кнопці, виведіть повідомлення про те, яка саме кнопка була клікнута.
*/

const parent = document.querySelector('.parent');

parent.addEventListener('click', getButtonMessage);

function getButtonMessage(event) {

  if (event.target.textContent === 'Кнопка 1') {
    alert('Нажата кнопка 1')
  } else if (event.target.textContent === 'Кнопка 2') {
    alert('Нажата кнопка 2')
  } else if (event.target.textContent === 'Кнопка 3') {
    alert('Нажата кнопка 3')
  }

}

/*
ДЗ 12.3. TODO лист

Створіть HTML-сторінку, яка містить список завдань (to-do list) з можливістю додавання нових завдань. Ваше ціль - використовуючи делегування подій, створити обробник подій для списку завдань, який дозволить видаляти завдання при кліку на них.

Покроковий план:

Створіть HTML-елементи: список завдань ul, текстове поле для вводу нових завдань та кнопку для додавання.
Додайте обробник подій до списку завдань ul, використовуючи делегування.
При кліку на будь-якій кнопці видалення, видаліть цей пункт.
Додайте можливість вводити нові завдання у текстове поле і додавати їх до списку за допомогою кнопки.
*/

const wrapper = document.createElement('div')
document.body.appendChild(wrapper)

const list = document.createElement('ul')
wrapper.appendChild(list)

const bottomWrapper = document.createElement('div')
document.body.appendChild(bottomWrapper)

const input = document.createElement('input')
bottomWrapper.appendChild(input)
input.setAttribute('type', 'text')
input.setAttribute('placeholder', 'Добавить новое задание')

const btn = document.createElement('button')
bottomWrapper.appendChild(btn)
btn.textContent = 'Добавить'
btn.setAttribute('type', 'button')

btn.addEventListener('click', addEvent)

function addEvent() {
  if (input.value === '') {
    const error = document.createElement('p')
    bottomWrapper.appendChild(error)
    error.textContent = 'Введите корректное значение'
    error.style.cssText = 'color: red; font-size: 12px'

    setTimeout(function () {
      error.remove()
    }, 2000)

  } else {
    const item = document.createElement('li')
    list.appendChild(item)
    item.textContent = input.value
    input.value = ''

    const delBtn = document.createElement('button')
    item.appendChild(delBtn)
    delBtn.textContent = 'Удалить'

    delBtn.addEventListener('click', (event) => {
      item.remove()
    })
  }
}