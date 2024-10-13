/* 
ДЗ 17.1. Клас "Калькулятор"

Створіть клас Calculator, який буде мати методи для виконання базових математичних операцій: додавання, віднімання, множення та ділення.
*/

class Calculator {

  constructor() {
    this.value = 0;
  }

  add(a, b) {
    return this.value = a + b
  }

  subtract(a, b) {
    return this.value = a - b
  }

  multiply(a, b) {
    return this.value = a * b
  }

  divide(a, b) {
    return this.value = a / b
  }
}

const calc = new Calculator();



console.log(calc.add(5, 3)); // 8

console.log(calc.subtract(10, 4)); // 6

console.log(calc.multiply(3, 6)); // 18

console.log(calc.divide(8, 2)); // 4

