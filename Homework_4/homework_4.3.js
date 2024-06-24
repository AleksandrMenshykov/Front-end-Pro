let userAgePrompt = prompt("Укажите год вашего рождения:")
let userAddressPrompt = prompt("В каком городе вы живете:")
let userFavoriteSportPrompt = prompt("Какой ваш любимый вид спорта:")
let yearNow = 2024
let userAgeToNumber = Number(userAgePrompt)
let yearNowResult = (yearNow - userAgeToNumber)
let capitalUa = 'Киев'
let capitalUsa = 'Вашингтон'
let capitalBritan = 'Лондон'

if (userAddressPrompt == capitalUa) {
  alert(`Ваш возраст ${yearNowResult} лет. Вы живете в столице Украины.`)
} else if (userAddressPrompt == capitalBritan) {
  alert(`Ваш возраст ${yearNowResult} лет. Вы живете в столице Великобритании.`)
} else if (userAddressPrompt == capitalUsa) {
  alert(`Ваш возраст ${yearNowResult} лет. Вы живете в столице США.`)
} else {
  alert(`Ваш возраст ${yearNowResult} лет. Вы живете в городе ${userAddressPrompt}.`)
}