/* ДЗ 5.3. Пошук потрібних чисел

Дано ціле число N (ввести через prompt). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N */


const questioPrompt = prompt("Введите число от 1 до 100")
const promptToString = Number(questioPrompt)

for (let a = 1; a <= promptToString; a++) {
  console.log(a)
}