// конвертирует цвет из формата hex в формат RGB
export function hexToRgb(hex) {
	const r = parseInt(hex.slice(1, 3), 16) / 255
	const g = parseInt(hex.slice(3, 5), 16) / 255
	const b = parseInt(hex.slice(5, 7), 16) / 255
	return PDFLib.rgb(r, g, b)
}
