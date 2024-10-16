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

/*
ДЗ 17.2. Клас "Тренер"

Створіть клас Coach, який буде представляти тренера. Додайте властивості, такі як ім'я, спеціалізація та рейтинг.
Також реалізуйте метод для виведення інформації про тренера та його рейтинг.
*/

class Coach {

  constructor(name, specialization, rating) {
    this.name = name;
    this.specialization = specialization;
    this.rating = rating;
  }

  displayInfo() {
    console.log(`Coach: ${this.name}, Specialization: ${this.specialization}, Rating: ${this.rating}`)
  }
}

const coach1 = new Coach('John Doe', 'Fitness', 4.7);

console.log(coach1)
coach1.displayInfo()

/*
ДЗ 17.3. Клас "Банківський рахунок"

Створіть клас BankAccount, який буде представляти банківський рахунок. Додайте властивість балансу та методи для внесення та зняття грошей.
*/

class BankAccount {

  #balance;

  constructor(summ = 0) {
    this.#balance = summ;
  }

  getBalance() {
    return this.#balance
  }

  deposit(summ) {
    return this.#balance += summ
  }

  withdraw(summ) {
    if (summ > this.#balance) {
      console.log(`У вас недостаточно денег на счету`)
    } else if (summ <= this.#balance) {
      return this.#balance -= summ
    }
  }

}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300