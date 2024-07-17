/* ДЗ 5.3. Пошук потрібних чисел

Дано ціле число N (ввести через prompt). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N */


const questioPrompt = prompt("Введите число от 1 до 100")
const promptToNumber = Number(questioPrompt)

for (let firstValue = 1; firstValue <= promptToNumber; firstValue++) {
  console.log(firstValue)
}