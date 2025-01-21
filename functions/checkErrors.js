// проверка некоторых ошибок
export function checkErrors(userName, userError, selectedColor, judgesArray) {
	if (userError) {
		return userError
	} else if (!selectedColor) {
		return 'Please, select the color'
	} else if (!judgesArray.includes(userName.toLowerCase())) {
		return 'The user was not a judge of this Hackathon'
	}
}
