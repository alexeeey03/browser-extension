import { getSelectedColor, setupColorSelection } from '../../functions/setupColorSelection.js'

describe('setupColorSelection function', () => {
	beforeEach(() => {
		document.body.innerHTML = `
      <div class="color_preview" data-color="blue"></div>
      <div class="color_preview" data-color="black"></div>
      <div class="color_preview" data-color="red"></div>
      <div class="color_preview" data-color="green"></div>
    `
		setupColorSelection()
	})

	test('should not add active class before any selection', () => {
		const previews = document.querySelectorAll('.color_preview')

		// проверяем, что изначально у всех элементов нет класса active
		previews.forEach(preview => {
			expect(preview.classList.contains('active')).toBe(false)
		})
	})

	test('should select color and add active class on click', () => {
		const bluePreview = document.querySelector('.color_preview[data-color="blue"]')
		const blackPreview = document.querySelector('.color_preview[data-color="black"]')
		const redPreview = document.querySelector('.color_preview[data-color="red"]')
		const greenPreview = document.querySelector('.color_preview[data-color="green"]')

		// кликаем по цвету и проверяем что класс active был добавлен
		redPreview.click()
		expect(redPreview.classList.contains('active')).toBe(true)
		// Проверяем, что выбранный цвет теперь красный
		expect(getSelectedColor()).toBe('red')

		greenPreview.click()
		// Проверяем, что класс active был удален у красного и добавлен к зеленому
		expect(redPreview.classList.contains('active')).toBe(false)
		expect(greenPreview.classList.contains('active')).toBe(true)
		expect(getSelectedColor()).toBe('green')

		bluePreview.click()
		expect(greenPreview.classList.contains('active')).toBe(false)
		expect(bluePreview.classList.contains('active')).toBe(true)
		expect(getSelectedColor()).toBe('blue')

		blackPreview.click()
		expect(bluePreview.classList.contains('active')).toBe(false)
		expect(blackPreview.classList.contains('active')).toBe(true)
		expect(getSelectedColor()).toBe('black')
	})
})
