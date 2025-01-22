export default {
	testEnvironment: 'jest-environment-jsdom',
	transform: { '^.+\\.js$': 'babel-jest' },
	collectCoverage: true,
	coverageDirectory: 'coverage',
}
