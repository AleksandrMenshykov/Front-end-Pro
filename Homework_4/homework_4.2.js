let value = prompt("Введіть тризначне число:");

let digit1 = Math.floor(value / 100);
let digit2 = Math.floor((value % 100) / 10);
let digit3 = value % 10;
let allDigitsSame = (digit1 === digit2) && (digit2 === digit3);

let anyDigitSame = (digit1 === digit2) || (digit2 === digit3) || (digit1 === digit3);

if (allDigitsSame) {
  console.log("Усі цифри числа однакові.");
} else {
  console.log("Усі цифри числа не однакові.");
}

if (anyDigitSame) {
  console.log("Серед цифр є хоча б одна однакова.");
} else {
  console.log("Усі цифри числа різні між собою.");
}