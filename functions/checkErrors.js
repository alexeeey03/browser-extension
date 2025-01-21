// проверка некоторых ошибок
export function checkErrors(inputField, selectedColor, judgesArray) {
	if (!inputField) {
		return 'Please, enter your name'
	}

	if (!selectedColor) {
		return 'Please, select the color'
	}

	if (!judgesArray.includes(inputField.toLowerCase())) {
		return 'The user was not a judge of this Hackathon'
	}
}
