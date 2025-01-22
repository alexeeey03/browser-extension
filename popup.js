import { checkErrors } from './functions/checkErrors.js'
import { customDrawImage } from './functions/customDrawImage.js'
import { customDrawText } from './functions/customDrawText.js'
import { generateQrCode } from './functions/generateQrCode.js'
import { getCurrentDate } from './functions/getCurrentDate.js'
import { getLoginUserName } from './functions/getLoginUserName.js'
import { hexToRgb } from './functions/hexToRgb.js'
import { parsePageContent } from './functions/parsePageContent.js'
import { getSelectedColor, setupColorSelection } from './functions/setupColorSelection.js'
import { switchInterface } from './functions/switchInterface.js'

const { PDFDocument } = PDFLib // получаем доступ к pdf-lib

// эта функция срабатывает при нажатии на кнопку 'Create'
async function generatePDF() {
	const selectedColor = getSelectedColor()

	const [activeTab] = await chrome.tabs.query({
		active: true,
		currentWindow: true,
	}) // получаем активную вкладку пользователя

	// если пользователь не находится на странице devpost.com выводим alert
	if (!activeTab || !activeTab.url.includes('devpost.com')) {
		alert('Please open the hackathon page on the website devpost.com')
		return
	}

	// показываем loader на время создания сертификата и скрываем result если он есть
	switchInterface('openLoader')

	// выполняем парсинг
	const [result] = await chrome.scripting.executeScript({
		target: { tabId: activeTab.id },
		func: parsePageContent,
	})

	const { dateHackathon, titleHackathon, judges } = result.result // деструктуризиация результата

	// получаем имя пользователя
	const { userName, userError } = await getLoginUserName(activeTab)

	// перед началом создания сертификата проверяем введенные данные
	const error = checkErrors(userName, userError, selectedColor, judges)

	if (error) {
		alert(error)
		switchInterface('closeLoader')
		return
	}

	// загружаем шаблон PDF из папки templates и преобразовываем его в формат ArrayBuffer
	const existingPdfBytes = await fetch(`public/templates/${selectedColor}.pdf`).then(res =>
		res.arrayBuffer()
	)
	const pdfDoc = await PDFDocument.load(existingPdfBytes) // загружаем PDF документ из ArrayBuffer
	const page = pdfDoc.getPages()[0] // получаем первую страницу документа

	const certificateColors = {
		black: '#000000',
		blue: '#0d2562',
		red: '#ab0909',
		green: '#0d742c',
	} // цвета сертификата

	const { r, g, b } = hexToRgb(certificateColors[selectedColor]) // конвертируем выбранный цвет из hex в RGB
	const textColor = PDFLib.rgb(r, g, b) // передаем цвет в библиотеку
	const customFont = await pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold) // загружаем шрифт из шрифтов PDFLib
	const width = 1123 // ширина страницы сертификата

	// ДОБАВЛЯЕМ НА СТРАНИЦУ ШАБЛОНА НУЖНЫЕ ДАННЫЕ
	// ИМЯ
	const nameText = userName.toUpperCase() // переводим текст в upper case
	const nameX = width / 2 - customFont.widthOfTextAtSize(nameText, 72) / 2 // Позиция по оси X
	customDrawText(page, nameText, nameX, 400, 72, customFont, textColor) // добавляем на страницу

	// НАЗВАНИЕ XАКАТОНА
	const titleX = width / 2 - customFont.widthOfTextAtSize(titleHackathon, 25) / 2
	customDrawText(page, titleHackathon, titleX, 295, 25, customFont, textColor)

	// ДАТЫ ПРОВЕДЕНИЯ
	const dateHackathonX = width / 2 - customFont.widthOfTextAtSize(dateHackathon, 20) / 2
	customDrawText(page, dateHackathon, dateHackathonX, 270, 20, customFont, textColor)

	// ТЕКУЩАЯ ДАТА ДЛЯ ПОЛЯ date of issue
	const currentDate = getCurrentDate() // получаем текущую дату
	customDrawText(page, currentDate, 885, 108, 19, customFont, textColor)

	// QR CODE
	const qrImage = await generateQrCode(pdfDoc, activeTab.url)
	customDrawImage(page, qrImage, 50, 50, 160, 160)

	const pdfBytes = await pdfDoc.save() // сохраняем изменения
	const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' }) // создаем Blob для просмотра и скачивания
	const pdfUrl = URL.createObjectURL(pdfBlob) // создаем URL для просмотра Blob

	const viewLink = document.getElementById('certificateLink') // создание ссылки для просмотра
	viewLink.href = pdfUrl

	const formattedName = userName.replace(/\s+/g, '_') // форматируем имя для правильного имени файла
	const downloadButton = document.getElementById('downloadButton') // создание кнопки для скачивания
	downloadButton.addEventListener('click', () => {
		const downloadLink = document.createElement('a') // создаем элемент ссылку
		downloadLink.href = pdfUrl // адрес ссылки на
		downloadLink.download = `${formattedName}_certificate.pdf` // имя файла
		downloadLink.click() // эмулирует нажатие
	})

	// скрываем loader и отображаем result
	switchInterface('result')
}

// добавляем слушатели событий на кнопки 'create' и выбор цвета
document.getElementById('generateButton').addEventListener('click', generatePDF)
document.addEventListener('DOMContentLoaded', setupColorSelection)
