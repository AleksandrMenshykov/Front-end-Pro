/*
Homework 5.1

Вивести в консоль числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5 ....)
*/

for (let a = 20; a <= 30; a += 0.5) {
  console.log(a, 'for')
}

let b = 20
while (b <= 30) {
  console.log(b, 'while');
  b += 0.5;
}

let c = 20
do {
  console.log(c, 'do while');
  c += 0.5;
}
while (c <= 30);