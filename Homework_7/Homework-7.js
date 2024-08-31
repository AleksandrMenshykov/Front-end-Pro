/* Написати функцію, яка приймає 1 параметр. Та скадае значення з тим, що передали перший раз і т. д. 
Все це із замиканнями, наприклад:

console.log(sum(4)); // 4

console.log(sum(6)); // 10

console.log(sum(10)); // 20

console.log(sum(7)); // 27 */


function calculateSum() {
  let sum = 0;
  return function (value) {
    sum = sum + value;
    return sum
  }
}

const sum = calculateSum()

console.log(sum(4))
console.log(sum(6))
console.log(sum(10))
console.log(sum(7))

/*
ДЗ 7.2. Добуток через карування

Створити функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2). 
Функція повинна повертати результат (у середині функції не має бути консоль лога!)
*/

// 1-й вариант
function carring(a) {
  return function (b) {
    return a * b;
  }
}

const result = carring(5)(2);
console.log(result);


// 2-вариант 
const carring1 = a => b => a * b;

const result1 = carring1(5)(2);
console.log(result1);


/*
ДЗ 7.3. Функція з циклом

Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу).
Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше.
Якщо користувач вводить більше ста, текст або цикл закінчує всі ітерації, то
функція виводить в консоль останній введення користувача і завершує функцію.

*/

function enterNumber() {

  const minNumber = 100;
  let numb = Number(prompt("Введите число больше 100"))

  if (numb < minNumber || isNaN(numb) || numb === null) {
    for (let i = 1; i <= 10; i++) {
      numb = Number(prompt("Еще раз попробуйте ввести число больше 100"))

      if (numb > minNumber) {
        console.log(`Вы ввели число ${numb}`)
        break;
      }
    }
  } else {
    console.log(`Вы ввели число ${numb}`)
  }
}
  

enterNumber()
