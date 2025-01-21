export const customDrawText = (page, content, x_coord, y_coord, fontSize, font, color) => {
	page.drawText(content, {
		x: x_coord,
		y: y_coord,
		size: fontSize,
		font: font,
		color: color,
	})
}
