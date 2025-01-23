import { hexToRgb } from '../../functions/hexToRgb.js'

const certificateColors = {
	black: '#000000',
	blue: '#0d2562',
	red: '#ab0909',
	green: '#0d742c',
}

describe('hexToRgb function', () => {
	Object.entries(certificateColors).forEach(([colorName, hexValue]) => {
		test(`converts ${colorName} (${hexValue}) to RGB`, () => {
			const result = hexToRgb(hexValue)
			// ожидаемые значения для каждого цвета
			const expected = {
				black: { r: 0, g: 0, b: 0 },
				blue: { r: 0.05098, g: 0.145098, b: 0.384314 },
				red: { r: 0.670588, g: 0.035294, b: 0.035294 },
				green: { r: 0.05098, g: 0.454902, b: 0.172549 },
			}

			// округляем результат до 6 знаков после запятой для точности
			const roundedResult = {
				r: parseFloat(result.r.toFixed(6)),
				g: parseFloat(result.g.toFixed(6)),
				b: parseFloat(result.b.toFixed(6)),
			}

			expect(roundedResult).toEqual(expected[colorName])
		})
	})
})
