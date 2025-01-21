export async function generateQrCode(pdfDoc, url) {
	const qrCodeCanvas = document.createElement('canvas') // создаем canvas элемент
	await QRCode.toCanvas(qrCodeCanvas, url, {
		width: 160,
	}) // рисует QRCode на canvas элементе
	const qrCodeDataUrl = qrCodeCanvas.toDataURL() // конвертируем в base64
	const qrImage = await pdfDoc.embedPng(qrCodeDataUrl) // возвращает объект который можно встроить в PDF
	return qrImage
}
