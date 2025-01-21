export function getCurrentDate() {
	const currentDate = new Date()

	const day = currentDate.getDate()
	const month = currentDate.getMonth() + 1 // getMonth возвращает от 0 до 11, поэтому прибавляем 1
	const year = currentDate.getFullYear()

	const dayFormatted = day < 10 ? '0' + day : day // Если день меньше 10, добавляем ведущий 0
	const monthFormatted = month < 10 ? '0' + month : month // Если месяц меньше 10, добавляем ведущий 0

	const formattedDate = `${dayFormatted} / ${monthFormatted} / ${year}` // нужный формат 'DD / MM / YYYY'
	return formattedDate
}
