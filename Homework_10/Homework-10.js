/*
ДЗ 10.1. Картка користувача

Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо. 
Створіть метод об'єкту для отримання та відображення цих даних.
*/

const user = {
  name: 'Anton',
  age: 26,
  city: 'Odessa',
  showInfo() {
    return `Name: ${this.name}. Age: ${this.age} years old. Lives in ${this.city}`
  },
}

const userMessage = user.showInfo()

console.log(userMessage)

/*
ДЗ 10.2. Отримання парних чисел з масиву

Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву,
в якому лише парні числа з оригінального масиву.
*/

const arr = [1, 2, 6, 8, 9, 12, 43, 23, 65, 44, 32, 4]

const newArr = []

for (const key of arr) {
  if (key % 2 === 0) {
    newArr.push(key)
  }
}

console.log('newArr', newArr)
console.log('arr', arr)

