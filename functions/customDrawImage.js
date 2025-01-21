export const customDrawImage = (page, content, x_coord, y_coord, width, height) => {
	page.drawImage(content, {
		x: x_coord,
		y: y_coord,
		width: width,
		height: height,
	})
}
