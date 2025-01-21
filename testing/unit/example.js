console.log('Running unit test: example.unit.test.js')

function sum(a, b) {
	return a + b
}

// Моковый тест
if (sum(2, 3) === 5) {
	console.log('✅ Unit test passed')
} else {
	console.log('❌ Unit test failed')
}
