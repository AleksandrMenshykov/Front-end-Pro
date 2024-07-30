/*
ДЗ 6.1. Написати функцію видалення масиву символів

Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
Вихідний рядок та символи для видалення задає користувач.
*/

function func(string, [value1, value2]) {
  const strToArr = string.split('')
  const filter = strToArr.filter((symbol) => symbol !== value1 && symbol !== value2)
  const arrToString = filter.join('')
  console.log(arrToString)
}


func('hello world', ['l', 'w'])

/*
ДЗ 6.2. Визначення середнього арифметичного.

Дано масив з елементами різних типів. 
Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
*/

function culcSumm() {
  let result = 0

  const arr = [1, 3, 'apple', 'hello', 6, 8, 'world', 12, 'fruits', 32, 5]
  const filtered = arr.filter((value) => typeof value === "number")

  for (const number of filtered)
    result = result + number / filtered.length

  return result
}

const summ = culcSumm()

console.log(summ)

/* 
ДЗ 6.3. Функція видалення елементу

Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

Наприклад:

const array = [1, 3, 4, 6, 2, 5, 7];

removeElement(array,4);

console.log(array); // Результат: [1, 3, 6, 2, 5, 7] */

const array = [1, 3, 4, 6, 2, 5, 7];


function removeElement(array, item) {

  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      array.splice(i, 1)
    }
  } console.log(array)

}

removeElement(array, 7)