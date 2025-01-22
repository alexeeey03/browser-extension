import { parsePageContent } from '../../functions/parsePageContent.js'

// мокаем chrome
global.chrome = {
	scripting: {
		executeScript: jest.fn(),
	},
}

describe('parsePageContent function', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})

	// тест ошибки при отсутствии данных (например, если элементы не найдены на странице)
	test('returns error if title or date is not found', () => {
		document.body.innerHTML = `
      <div class="row">
        <div class="small-12 large-6 columns challenge_judge">
          <div class="row">
            <div class="small-8 large-9 columns">
              <p>
                <strong>Adam Seligman</strong><br>
                <i>VP of Developer Experience, AWS</i>
              </p>
            </div>
          </div>
        </div>
        <div class="small-12 large-6 columns challenge_judge">
          <div class="row">
            <div class="small-8 large-9 columns">
              <p>
                <strong>David Nalley</strong><br>
                <i>Director Open Source Marketing, AWS</i>
              </p>
            </div>
          </div>
        </div>
    </div>
    ` // title и date отсутствуют

		const result = parsePageContent()

		expect(result.titleHackathon).toBeNull()
		expect(result.dateHackathon).toBeNull()
		expect(result.judges).toEqual(['adam seligman', 'david nalley'])
	})

	// тест, когда дата или заголовок есть, но судьи отсутствуют
	test('returns empty judges array if no judges are found', () => {
		document.body.innerHTML = `
    <div id="introduction" class="mb-4 py-6">
      <div class="row">
        <div class="large-8 columns content">
          <h1>AWS Game Builder Challenge </h1>
          <h3 class="mb-6">Create a game with AWS services of your choosing: all skill levels welcome!</h3>
      </div>
    </div>
    <strong data-dates-text="">Feb 5, 2025</strong>
  ` // дата и название присутствует, но судьи отсутствуют

		const result = parsePageContent()

		expect(result.titleHackathon).toBe('AWS Game Builder Challenge')
		expect(result.dateHackathon).toBe('Feb 5, 2025')
		expect(result.judges).toEqual([])
	})

	// тест успешного выполнения, когда все данные присутствуют
	test('returns parsed data when title, date, and judges are found', () => {
		document.body.innerHTML = `
    <div id="introduction" class="mb-4 py-6">
      <div class="row">
        <div class="large-8 columns content">
          <h1>AWS Game Builder Challenge </h1>
          <h3 class="mb-6">Create a game with AWS services of your choosing: all skill levels welcome!</h3>
      </div>
    </div>
    <strong data-dates-text="">Feb 5, 2025</strong>
    <div class="row">
        <div class="small-12 large-6 columns challenge_judge">
          <div class="row">
            <div class="small-8 large-9 columns">
              <p>
                <strong>Adam Seligman</strong><br>
                <i>VP of Developer Experience, AWS</i>
              </p>
            </div>
          </div>
        </div>
        <div class="small-12 large-6 columns challenge_judge">
          <div class="row">
            <div class="small-8 large-9 columns">
              <p>
                <strong>David Nalley</strong><br>
                <i>Director Open Source Marketing, AWS</i>
              </p>
            </div>
          </div>
        </div>
    </div>
    ` // все элементы присутствуют

		const result = parsePageContent()

		expect(result.titleHackathon).toBe('AWS Game Builder Challenge')
		expect(result.dateHackathon).toBe('Feb 5, 2025')
		expect(result.judges).toEqual(['adam seligman', 'david nalley'])
	})
})
