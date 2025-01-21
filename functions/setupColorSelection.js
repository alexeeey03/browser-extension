let selectedColor = ''

// функция для визуального отображения выбора цвета (рамка)
export function setupColorSelection() {
	const previews = document.querySelectorAll('.color_preview') // получаем 'кнопки' с цветами

	// на каждую 'кнопку' вешаем слушатель клика
	previews.forEach(preview => {
		preview.addEventListener('click', () => {
			// убираем предыдущую активную рамку если она есть
			document.querySelector('.color_preview.active')?.classList.remove('active')
			preview.classList.add('active') // добавляем рамку выбранному цвету
			selectedColor = preview.getAttribute('data-color') // обновляем выбранный цвет
		})
	})
}

// геттер для получения выбранного цвета
export function getSelectedColor() {
	return selectedColor
}
