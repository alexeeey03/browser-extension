import CopyWebpackPlugin from 'copy-webpack-plugin'
import path from 'path'
import { fileURLToPath } from 'url'
import WebpackObfuscator from 'webpack-obfuscator'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
	mode: 'production',
	entry: './popup.js',
	devtool: 'source-map',
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'public/icons', to: 'icons' }, // Копирование иконок
				{ from: 'public/templates', to: 'templates' }, // Копирование шаблонов
			],
		}),
		new WebpackObfuscator(
			{
				rotateStringArray: true,
			},
			['production_bundle.js']
		), // Обфускация для продакшн-сборки
	],
	output: {
		filename: 'prod.js',
		path: path.resolve(__dirname, 'dist/prod_build'),
	},
}
