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