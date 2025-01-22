import { getCurrentDate } from '../../functions/getCurrentDate.js'

describe('getCurrentDate function', () => {
	let originalDate

	beforeAll(() => {
		// сохраняем оригинальный Date перед запуском тестов
		originalDate = global.Date
	})

	afterAll(() => {
		// восстанавливаем оригинальный Date после выполнения всех тестов
		global.Date = originalDate
	})

	test('returns current date in the format DD / MM / YYYY', () => {
		const mockDate = {
			getDate: jest.fn().mockReturnValue(22),
			getMonth: jest.fn().mockReturnValue(0),
			getFullYear: jest.fn().mockReturnValue(2025), // 22.01.2025
		}

		global.Date = jest.fn(() => mockDate)

		const result = getCurrentDate()
		expect(result).toBe('22 / 01 / 2025') // проверяем что дата форматируется как нужно
	})

	test('formats single-digit day and month with leading zero', () => {
		const mockDate = {
			getDate: jest.fn().mockReturnValue(3),
			getMonth: jest.fn().mockReturnValue(8),
			getFullYear: jest.fn().mockReturnValue(2025), // 03.09.2025
		}

		global.Date = jest.fn(() => mockDate)

		const result = getCurrentDate()
		expect(result).toBe('03 / 09 / 2025') // проверяем добавление ведущих нулей к дате
	})

	test('returns correct date when day and month are double digits', () => {
		const mockDate = {
			getDate: jest.fn().mockReturnValue(15),
			getMonth: jest.fn().mockReturnValue(11),
			getFullYear: jest.fn().mockReturnValue(2025), // 15.12.2025
		}

		global.Date = jest.fn(() => mockDate)

		const result = getCurrentDate()
		expect(result).toBe('15 / 12 / 2025') // проверяем работу с двузначными числами
	})
})
