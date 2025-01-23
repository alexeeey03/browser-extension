import { checkErrors } from '../../functions/checkErrors.js'

describe('checkErrors function', () => {
	const judgesArray = ['patrick culmer', 'eddie lynch']

	test('returns error when userError is provided', () => {
		const result = checkErrors('eddie lynch', 'User name not found', 'black', judgesArray)
		expect(result).toBe('User name not found')
	})

	test('returns error when no color is selected', () => {
		const result = checkErrors('eddie lynch', null, undefined, judgesArray)
		expect(result).toBe('Please, select the color')
	})

	test('returns error when user is not a judge', () => {
		const result = checkErrors('eddie lynch', null, 'green', ['patrick culmer'])
		expect(result).toBe('The user was not a judge of this Hackathon')
	})

	test('returns undefined when no errors are present', () => {
		const result = checkErrors('eddie lynch', null, 'red', judgesArray)
		expect(result).toBeUndefined()
	})
})
