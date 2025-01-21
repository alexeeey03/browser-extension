import js from '@eslint/js'
import globals from 'globals'

export default [
	js.configs.recommended,
	{
		ignores: ['libs', 'dist', 'node_modules', '*.config.js', '.git*'],
		rules: {
			'no-unused-vars': 'warn', // предупреждение на неиспользуемые переменные
			'no-console': 'off', // разрешить console.log
			'no-undef': 'warn',
		},
		languageOptions: {
			globals: {
				...globals.browser,
				QRCode: 'readonly',
				PDFLib: 'readonly',
				chrome: 'readonly',
				document: 'readonly',
			},
		},
	},
]
