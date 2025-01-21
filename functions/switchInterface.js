export const switchInterface = state => {
	switch (state) {
		case 'openLoader':
			document.getElementById('result').style.display = 'none'
			document.getElementById('loader').style.display = 'block'
			document.getElementById('generateButton').disabled = true
			break
		case 'closeLoader':
			document.getElementById('result').style.display = 'none'
			document.getElementById('loader').style.display = 'none'
			document.getElementById('generateButton').disabled = false
			break
		case 'result':
			document.getElementById('loader').style.display = 'none'
			document.getElementById('generateButton').disabled = false
			document.getElementById('result').style.display = 'block'
			break
	}
}
