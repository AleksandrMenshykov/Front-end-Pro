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
