import path from 'path'

export default {
	mode: 'development',
	entry: './popup.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
}
