import { sentryWebpackPlugin } from '@sentry/webpack-plugin'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
	mode: 'development',
	entry: './popup.js',
	devtool: 'source-map',
	plugins: [
		// Put the Sentry Webpack plugin after all other plugins
		sentryWebpackPlugin({
			authToken: process.env.SENTRY_AUTH_TOKEN,
			org: 'itmo-7x',
			project: 'javascript',
		}),
	],
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
}
