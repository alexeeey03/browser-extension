export async function getLoginUserName(activeTab) {
	// получаем ссылку на профиль из аватарки в правом верхнем углу страницы, также через executeScript
	const [result] = await chrome.scripting.executeScript({
		target: { tabId: activeTab.id },
		func: () => {
			const profileLink = document.querySelector('#global-nav-screen-name')?.getAttribute('href')
			return profileLink || null
		},
	})

	if (!result.result) {
		return { userError: 'Some kind of error has occurred, the profile has not been found' }
	}

	const profileLink = result.result // деструктуризируем результат
	const response = await fetch(profileLink) // запрашиваем html страницы профиля по ссылке на профиль
	const htmlText = await response.text() // получаем страницу в виде текста

	const parser = new DOMParser() // создаём временный парсер HTML который позволит разобрать строку в HTML
	const dom = parser.parseFromString(htmlText, 'text/html') // получаем HTML в виде DOM

	const nameElement = dom.querySelector('#portfolio-user-name') // ищем имя login пользователя

	if (!nameElement) {
		return { userError: 'User name not found' }
	}

	// получаем текст внутри тега, игнорируя <small>, так как сайт имеет вот такую структуру
	// <h1 id="portfolio-user-name">Winston Esposito<small>(leha-geraskin-80)</small></h1>
	const fullName = nameElement.childNodes[0].textContent.trim().replace(/\s+/g, ' ')

	return { userName: fullName.toLowerCase(), userError: null } // возвращаем в нижнем регистре
}
