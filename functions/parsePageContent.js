// запускает парсинг страницы с devpost.com
export function parsePageContent() {
	// НАЗВАНИЕ
	const titleElement = document.querySelector('#introduction h1') // ищем название хакатона
	const titleText = titleElement ? titleElement.textContent.trim() : null

	// ДАТА
	const dateElement = document.querySelector('[data-dates-text]') // ищем дату
	const dateText = dateElement ? dateElement.textContent.trim() : null

	// СПИСОК СУДЕЙ
	const judgeElements = document.querySelectorAll('div.challenge_judge strong')
	const judgesArray = Array.from(judgeElements).map(el => el.textContent.trim().toLowerCase())

	return {
		dateHackathon: dateText,
		titleHackathon: titleText,
		judges: judgesArray,
	}
}
