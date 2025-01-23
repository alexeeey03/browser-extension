import { getLoginUserName } from '../../functions/getLoginUserName.js'

// мокаем chrome и fetch
global.chrome = {
	scripting: {
		executeScript: jest.fn(),
	},
}

global.fetch = jest.fn()

describe('getLoginUserName function', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})

	// тест ошибки в execute script если не можем найти ссылку на профиль, например если пользователь не login
	test('returns error if profile link is not found', async () => {
		chrome.scripting.executeScript.mockResolvedValue([{ result: undefined }]) // мокируем ошибку в execute script

		const result = await getLoginUserName({ id: 123 })
		expect(result).toEqual({
			userError: 'Some kind of error has occurred, the profile has not been found',
		})
		expect(chrome.scripting.executeScript).toHaveBeenCalledWith({
			target: { tabId: 123 },
			func: expect.any(Function),
		})
	})

	// тест когда ссылку получили, но не можем найти имя пользователя на странице профиля
	test('returns error if username element is not found', async () => {
		chrome.scripting.executeScript.mockResolvedValue([
			{
				result:
					'https://devpost.com/leha-geraskin-80?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav',
			},
		])
		fetch.mockResolvedValue({
			text: jest.fn().mockResolvedValue(`\
        <h1 id="portfolio-user-name">
          <small></small>
        </</h1>`),
		})

		const result = await getLoginUserName({ id: 123 })
		expect(result).toEqual({ userError: 'User name not found' })
		expect(fetch).toHaveBeenCalledWith(
			'https://devpost.com/leha-geraskin-80?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav'
		)
	})

	// тест успешного получения
	test('returns user name in lowercase', async () => {
		chrome.scripting.executeScript.mockResolvedValue([
			{
				result:
					'https://devpost.com/leha-geraskin-80?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav',
			},
		])
		fetch.mockResolvedValue({
			text: jest.fn().mockResolvedValue(`
        <h1 id="portfolio-user-name">
          Eddie  Lynch
          <small>
            (leha-geraskin-80)
          </small>
        </h1>`),
		})

		const result = await getLoginUserName({ id: 123 })
		expect(result).toEqual({ userName: 'eddie lynch', userError: null })
	})
})
