/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./functions/checkErrors.js":
/*!**********************************!*\
  !*** ./functions/checkErrors.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkErrors: () => (/* binding */ checkErrors)
/* harmony export */ });
// проверка некоторых ошибок
function checkErrors(userName, userError, selectedColor, judgesArray) {
	if (userError) {
		return userError
	} else if (!selectedColor) {
		return 'Please, select the color'
	} else if (!judgesArray.includes(userName.toLowerCase())) {
		return 'The user was not a judge of this Hackathon'
	}
}


/***/ }),

/***/ "./functions/customDrawImage.js":
/*!**************************************!*\
  !*** ./functions/customDrawImage.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customDrawImage: () => (/* binding */ customDrawImage)
/* harmony export */ });
const customDrawImage = (page, content, x_coord, y_coord, width, height) => {
	page.drawImage(content, {
		x: x_coord,
		y: y_coord,
		width: width,
		height: height,
	})
}


/***/ }),

/***/ "./functions/customDrawText.js":
/*!*************************************!*\
  !*** ./functions/customDrawText.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customDrawText: () => (/* binding */ customDrawText)
/* harmony export */ });
const customDrawText = (page, content, x_coord, y_coord, fontSize, font, color) => {
	page.drawText(content, {
		x: x_coord,
		y: y_coord,
		size: fontSize,
		font: font,
		color: color,
	})
}


/***/ }),

/***/ "./functions/generateQRCode.js":
/*!*************************************!*\
  !*** ./functions/generateQRCode.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateQrCode: () => (/* binding */ generateQrCode)
/* harmony export */ });
async function generateQrCode(pdfDoc, url) {
	const qrCodeCanvas = document.createElement('canvas') // создаем canvas элемент
	await QRCode.toCanvas(qrCodeCanvas, url, {
		width: 160,
	}) // рисует QRCode на canvas элементе
	const qrCodeDataUrl = qrCodeCanvas.toDataURL() // конвертируем в base64
	const qrImage = await pdfDoc.embedPng(qrCodeDataUrl) // возвращает объект который можно встроить в PDF
	return qrImage
}


/***/ }),

/***/ "./functions/getCurrentDate.js":
/*!*************************************!*\
  !*** ./functions/getCurrentDate.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentDate: () => (/* binding */ getCurrentDate)
/* harmony export */ });
function getCurrentDate() {
	const currentDate = new Date()

	const day = currentDate.getDate()
	const month = currentDate.getMonth() + 1 // getMonth возвращает от 0 до 11, поэтому прибавляем 1
	const year = currentDate.getFullYear()

	const dayFormatted = day < 10 ? '0' + day : day // Если день меньше 10, добавляем ведущий 0
	const monthFormatted = month < 10 ? '0' + month : month // Если месяц меньше 10, добавляем ведущий 0

	const formattedDate = `${dayFormatted} / ${monthFormatted} / ${year}` // нужный формат 'DD / MM / YYYY'
	return formattedDate
}


/***/ }),

/***/ "./functions/getLoginUserName.js":
/*!***************************************!*\
  !*** ./functions/getLoginUserName.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoginUserName: () => (/* binding */ getLoginUserName)
/* harmony export */ });
async function getLoginUserName(activeTab) {
	// получаем ссылку на профиль из аватарки в правом верхнем углу страницы, также через executeScript
	const [result] = await chrome.scripting.executeScript({
		target: { tabId: activeTab.id },
		func: () => {
			const profileLink = document.querySelector('#global-nav-screen-name')?.getAttribute('href')
			return profileLink || null
		},
	})

	if (!result.result) {
		return { userError: 'Some kind of error has occurred, the profile has not been found' }
	}

	const profileLink = result.result // деструктуризируем результат
	const response = await fetch(profileLink) // запрашиваем html страницы профиля по ссылке на профиль
	const htmlText = await response.text() // получаем страницу в виде текста

	const parser = new DOMParser() // создаём временный парсер HTML который позволит разобрать строку в HTML
	const dom = parser.parseFromString(htmlText, 'text/html') // получаем HTML в виде DOM

	const nameElement = dom.querySelector('#portfolio-user-name') // ищем имя login пользователя

	if (!nameElement) {
		return { userError: 'User name not found' }
	}

	// получаем текст внутри тега, игнорируя <small>, так как сайт имеет вот такую структуру
	// <h1 id="portfolio-user-name">Winston Esposito<small>(leha-geraskin-80)</small></h1>
	const fullName = nameElement.childNodes[0].textContent.trim().replace(/\s+/g, ' ')

	return { userName: fullName.toLowerCase(), userError: null } // возвращаем в нижнем регистре
}


/***/ }),

/***/ "./functions/hexToRgb.js":
/*!*******************************!*\
  !*** ./functions/hexToRgb.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hexToRgb: () => (/* binding */ hexToRgb)
/* harmony export */ });
// конвертирует цвет из формата hex в формат RGB
function hexToRgb(hex) {
	const r = parseInt(hex.slice(1, 3), 16) / 255
	const g = parseInt(hex.slice(3, 5), 16) / 255
	const b = parseInt(hex.slice(5, 7), 16) / 255
	return PDFLib.rgb(r, g, b)
}


/***/ }),

/***/ "./functions/parsePageContent.js":
/*!***************************************!*\
  !*** ./functions/parsePageContent.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parsePageContent: () => (/* binding */ parsePageContent)
/* harmony export */ });
// запускает парсинг страницы с devpost.com
function parsePageContent() {
	// НАЗВАНИЕ
	const titleElement = document.querySelector('#introduction h1') // ищем название хакатона
	const titleText = titleElement ? titleElement.textContent.trim() : null

	// ДАТА
	const dateElement = document.querySelector('[data-dates-text]') // ищем дату
	const dateText = dateElement ? dateElement.textContent.trim() : null

	// СПИСОК СУДЕЙ
	const judgeElements = document.querySelectorAll('div.challenge_judge strong')
	const judgesArray = Array.from(judgeElements).map(el => el.textContent.trim().toLowerCase())

	return {
		dateHackathon: dateText,
		titleHackathon: titleText,
		judges: judgesArray,
	}
}


/***/ }),

/***/ "./functions/setupColorSelection.js":
/*!******************************************!*\
  !*** ./functions/setupColorSelection.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSelectedColor: () => (/* binding */ getSelectedColor),
/* harmony export */   setupColorSelection: () => (/* binding */ setupColorSelection)
/* harmony export */ });
let selectedColor = ''

// функция для визуального отображения выбора цвета (рамка)
function setupColorSelection() {
	const previews = document.querySelectorAll('.color_preview') // получаем 'кнопки' с цветами

	// на каждую 'кнопку' вешаем слушатель клика
	previews.forEach(preview => {
		preview.addEventListener('click', () => {
			// убираем предыдущую активную рамку если она есть
			document.querySelector('.color_preview.active')?.classList.remove('active')
			preview.classList.add('active') // добавляем рамку выбранному цвету
			selectedColor = preview.getAttribute('data-color') // обновляем выбранный цвет
		})
	})
}

// геттер для получения выбранного цвета
function getSelectedColor() {
	return selectedColor
}


/***/ }),

/***/ "./functions/switchInterface.js":
/*!**************************************!*\
  !*** ./functions/switchInterface.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   switchInterface: () => (/* binding */ switchInterface)
/* harmony export */ });
const switchInterface = state => {
	switch (state) {
		case 'openLoader':
			document.getElementById('result').style.display = 'none'
			document.getElementById('loader').style.display = 'block'
			document.getElementById('generateButton').disabled = true
			break
		case 'closeLoader':
			document.getElementById('result').style.display = 'none'
			document.getElementById('loader').style.display = 'none'
			document.getElementById('generateButton').disabled = false
			break
		case 'result':
			document.getElementById('loader').style.display = 'none'
			document.getElementById('generateButton').disabled = false
			document.getElementById('result').style.display = 'block'
			break
	}
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./popup.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_checkErrors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/checkErrors.js */ "./functions/checkErrors.js");
/* harmony import */ var _functions_customDrawImage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/customDrawImage.js */ "./functions/customDrawImage.js");
/* harmony import */ var _functions_customDrawText_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/customDrawText.js */ "./functions/customDrawText.js");
/* harmony import */ var _functions_generateQRCode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/generateQRCode.js */ "./functions/generateQRCode.js");
/* harmony import */ var _functions_getCurrentDate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/getCurrentDate.js */ "./functions/getCurrentDate.js");
/* harmony import */ var _functions_getLoginUserName_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/getLoginUserName.js */ "./functions/getLoginUserName.js");
/* harmony import */ var _functions_hexToRgb_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/hexToRgb.js */ "./functions/hexToRgb.js");
/* harmony import */ var _functions_parsePageContent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functions/parsePageContent.js */ "./functions/parsePageContent.js");
/* harmony import */ var _functions_setupColorSelection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functions/setupColorSelection.js */ "./functions/setupColorSelection.js");
/* harmony import */ var _functions_switchInterface_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./functions/switchInterface.js */ "./functions/switchInterface.js");











const { PDFDocument } = PDFLib // получаем доступ к pdf-lib

// эта функция срабатывает при нажатии на кнопку 'Create'
async function generatePDF() {
	const selectedColor = (0,_functions_setupColorSelection_js__WEBPACK_IMPORTED_MODULE_8__.getSelectedColor)()

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
	(0,_functions_switchInterface_js__WEBPACK_IMPORTED_MODULE_9__.switchInterface)('openLoader')

	// выполняем парсинг
	const [result] = await chrome.scripting.executeScript({
		target: { tabId: activeTab.id },
		func: _functions_parsePageContent_js__WEBPACK_IMPORTED_MODULE_7__.parsePageContent,
	})

	const { dateHackathon, titleHackathon, judges } = result.result // деструктуризиация результата

	// получаем имя пользователя
	const { userName, userError } = await (0,_functions_getLoginUserName_js__WEBPACK_IMPORTED_MODULE_5__.getLoginUserName)(activeTab)

	// перед началом создания сертификата проверяем введенные данные
	const error = (0,_functions_checkErrors_js__WEBPACK_IMPORTED_MODULE_0__.checkErrors)(userName, userError, selectedColor, judges)

	if (error) {
		alert(error)
		;(0,_functions_switchInterface_js__WEBPACK_IMPORTED_MODULE_9__.switchInterface)('closeLoader')
		return
	}

	// загружаем шаблон PDF из папки templates и преобразовываем его в формат ArrayBuffer
	const existingPdfBytes = await fetch(`public/templates/${selectedColor}.pdf`).then(res =>
		res.arrayBuffer()
	)
	const pdfDoc = await PDFDocument.load(existingPdfBytes) // загружаем PDF документ из ArrayBuffer

	const certificateColors = {
		black: '#000000',
		blue: '#0d2562',
		red: '#ab0909',
		green: '#0d742c',
	}

	const page = pdfDoc.getPages()[0] // получаем первую страницу документа

	const textColor = (0,_functions_hexToRgb_js__WEBPACK_IMPORTED_MODULE_6__.hexToRgb)(certificateColors[selectedColor]) // цвет текста в зависимости от цвета сертификата
	const customFont = await pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold) // загружаем шрифт из шрифтов PDFLib
	const width = 1123 // ширина страницы сертификата

	// ДОБАВЛЯЕМ НА СТРАНИЦУ ШАБЛОНА НУЖНЫЕ ДАННЫЕ
	// ИМЯ
	const nameText = userName.toUpperCase() // переводим текст в upper case
	const nameX = width / 2 - customFont.widthOfTextAtSize(nameText, 72) / 2 // Позиция по оси X
	;(0,_functions_customDrawText_js__WEBPACK_IMPORTED_MODULE_2__.customDrawText)(page, nameText, nameX, 400, 72, customFont, textColor) // добавляем на страницу

	// НАЗВАНИЕ XАКАТОНА
	const titleX = width / 2 - customFont.widthOfTextAtSize(titleHackathon, 25) / 2
	;(0,_functions_customDrawText_js__WEBPACK_IMPORTED_MODULE_2__.customDrawText)(page, titleHackathon, titleX, 295, 25, customFont, textColor)

	// ДАТЫ ПРОВЕДЕНИЯ
	const dateHackathonX = width / 2 - customFont.widthOfTextAtSize(dateHackathon, 20) / 2
	;(0,_functions_customDrawText_js__WEBPACK_IMPORTED_MODULE_2__.customDrawText)(page, dateHackathon, dateHackathonX, 270, 20, customFont, textColor)

	// ТЕКУЩАЯ ДАТА ДЛЯ ПОЛЯ date of issue
	const currentDate = (0,_functions_getCurrentDate_js__WEBPACK_IMPORTED_MODULE_4__.getCurrentDate)() // получаем текущую дату
	;(0,_functions_customDrawText_js__WEBPACK_IMPORTED_MODULE_2__.customDrawText)(page, currentDate, 885, 108, 19, customFont, textColor)

	// QR CODE
	const qrImage = await (0,_functions_generateQRCode_js__WEBPACK_IMPORTED_MODULE_3__.generateQrCode)(pdfDoc, activeTab.url)
	;(0,_functions_customDrawImage_js__WEBPACK_IMPORTED_MODULE_1__.customDrawImage)(page, qrImage, 50, 50, 160, 160)

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
	;(0,_functions_switchInterface_js__WEBPACK_IMPORTED_MODULE_9__.switchInterface)('result')
}

// добавляем слушатели событий на кнопки 'create' и выбор цвета
document.getElementById('generateButton').addEventListener('click', generatePDF)
document.addEventListener('DOMContentLoaded', _functions_setupColorSelection_js__WEBPACK_IMPORTED_MODULE_8__.setupColorSelection)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsbUJBQW1CLGdFQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw2RUFBYztBQUNmO0FBQ0E7QUFDQTtBQUNBLENBQUMsNkVBQWM7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDQUFDLDZFQUFjO0FBQ2Y7QUFDQTtBQUNBLHFCQUFxQiw0RUFBYztBQUNuQyxDQUFDLDZFQUFjO0FBQ2Y7QUFDQTtBQUNBLHVCQUF1Qiw0RUFBYztBQUNyQyxDQUFDLCtFQUFlO0FBQ2hCO0FBQ0E7QUFDQSx3Q0FBd0MseUJBQXlCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0M7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLENBQUMsK0VBQWU7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsa0ZBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi8uL2Z1bmN0aW9ucy9jaGVja0Vycm9ycy5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLy4vZnVuY3Rpb25zL2N1c3RvbURyYXdJbWFnZS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLy4vZnVuY3Rpb25zL2N1c3RvbURyYXdUZXh0LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24vLi9mdW5jdGlvbnMvZ2VuZXJhdGVRUkNvZGUuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi8uL2Z1bmN0aW9ucy9nZXRDdXJyZW50RGF0ZS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLy4vZnVuY3Rpb25zL2dldExvZ2luVXNlck5hbWUuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi8uL2Z1bmN0aW9ucy9oZXhUb1JnYi5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLy4vZnVuY3Rpb25zL3BhcnNlUGFnZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi8uL2Z1bmN0aW9ucy9zZXR1cENvbG9yU2VsZWN0aW9uLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24vLi9mdW5jdGlvbnMvc3dpdGNoSW50ZXJmYWNlLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLy4vcG9wdXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8g0L/RgNC+0LLQtdGA0LrQsCDQvdC10LrQvtGC0L7RgNGL0YUg0L7RiNC40LHQvtC6XHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0Vycm9ycyh1c2VyTmFtZSwgdXNlckVycm9yLCBzZWxlY3RlZENvbG9yLCBqdWRnZXNBcnJheSkge1xyXG5cdGlmICh1c2VyRXJyb3IpIHtcclxuXHRcdHJldHVybiB1c2VyRXJyb3JcclxuXHR9IGVsc2UgaWYgKCFzZWxlY3RlZENvbG9yKSB7XHJcblx0XHRyZXR1cm4gJ1BsZWFzZSwgc2VsZWN0IHRoZSBjb2xvcidcclxuXHR9IGVsc2UgaWYgKCFqdWRnZXNBcnJheS5pbmNsdWRlcyh1c2VyTmFtZS50b0xvd2VyQ2FzZSgpKSkge1xyXG5cdFx0cmV0dXJuICdUaGUgdXNlciB3YXMgbm90IGEganVkZ2Ugb2YgdGhpcyBIYWNrYXRob24nXHJcblx0fVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBjdXN0b21EcmF3SW1hZ2UgPSAocGFnZSwgY29udGVudCwgeF9jb29yZCwgeV9jb29yZCwgd2lkdGgsIGhlaWdodCkgPT4ge1xyXG5cdHBhZ2UuZHJhd0ltYWdlKGNvbnRlbnQsIHtcclxuXHRcdHg6IHhfY29vcmQsXHJcblx0XHR5OiB5X2Nvb3JkLFxyXG5cdFx0d2lkdGg6IHdpZHRoLFxyXG5cdFx0aGVpZ2h0OiBoZWlnaHQsXHJcblx0fSlcclxufVxyXG4iLCJleHBvcnQgY29uc3QgY3VzdG9tRHJhd1RleHQgPSAocGFnZSwgY29udGVudCwgeF9jb29yZCwgeV9jb29yZCwgZm9udFNpemUsIGZvbnQsIGNvbG9yKSA9PiB7XHJcblx0cGFnZS5kcmF3VGV4dChjb250ZW50LCB7XHJcblx0XHR4OiB4X2Nvb3JkLFxyXG5cdFx0eTogeV9jb29yZCxcclxuXHRcdHNpemU6IGZvbnRTaXplLFxyXG5cdFx0Zm9udDogZm9udCxcclxuXHRcdGNvbG9yOiBjb2xvcixcclxuXHR9KVxyXG59XHJcbiIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVFyQ29kZShwZGZEb2MsIHVybCkge1xyXG5cdGNvbnN0IHFyQ29kZUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpIC8vINGB0L7Qt9C00LDQtdC8IGNhbnZhcyDRjdC70LXQvNC10L3RglxyXG5cdGF3YWl0IFFSQ29kZS50b0NhbnZhcyhxckNvZGVDYW52YXMsIHVybCwge1xyXG5cdFx0d2lkdGg6IDE2MCxcclxuXHR9KSAvLyDRgNC40YHRg9C10YIgUVJDb2RlINC90LAgY2FudmFzINGN0LvQtdC80LXQvdGC0LVcclxuXHRjb25zdCBxckNvZGVEYXRhVXJsID0gcXJDb2RlQ2FudmFzLnRvRGF0YVVSTCgpIC8vINC60L7QvdCy0LXRgNGC0LjRgNGD0LXQvCDQsiBiYXNlNjRcclxuXHRjb25zdCBxckltYWdlID0gYXdhaXQgcGRmRG9jLmVtYmVkUG5nKHFyQ29kZURhdGFVcmwpIC8vINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC+0LHRitC10LrRgiDQutC+0YLQvtGA0YvQuSDQvNC+0LbQvdC+INCy0YHRgtGA0L7QuNGC0Ywg0LIgUERGXHJcblx0cmV0dXJuIHFySW1hZ2VcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudERhdGUoKSB7XHJcblx0Y29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpXHJcblxyXG5cdGNvbnN0IGRheSA9IGN1cnJlbnREYXRlLmdldERhdGUoKVxyXG5cdGNvbnN0IG1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKSArIDEgLy8gZ2V0TW9udGgg0LLQvtC30LLRgNCw0YnQsNC10YIg0L7RgiAwINC00L4gMTEsINC/0L7RjdGC0L7QvNGDINC/0YDQuNCx0LDQstC70Y/QtdC8IDFcclxuXHRjb25zdCB5ZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKVxyXG5cclxuXHRjb25zdCBkYXlGb3JtYXR0ZWQgPSBkYXkgPCAxMCA/ICcwJyArIGRheSA6IGRheSAvLyDQldGB0LvQuCDQtNC10L3RjCDQvNC10L3RjNGI0LUgMTAsINC00L7QsdCw0LLQu9GP0LXQvCDQstC10LTRg9GJ0LjQuSAwXHJcblx0Y29uc3QgbW9udGhGb3JtYXR0ZWQgPSBtb250aCA8IDEwID8gJzAnICsgbW9udGggOiBtb250aCAvLyDQldGB0LvQuCDQvNC10YHRj9GGINC80LXQvdGM0YjQtSAxMCwg0LTQvtCx0LDQstC70Y/QtdC8INCy0LXQtNGD0YnQuNC5IDBcclxuXHJcblx0Y29uc3QgZm9ybWF0dGVkRGF0ZSA9IGAke2RheUZvcm1hdHRlZH0gLyAke21vbnRoRm9ybWF0dGVkfSAvICR7eWVhcn1gIC8vINC90YPQttC90YvQuSDRhNC+0YDQvNCw0YIgJ0REIC8gTU0gLyBZWVlZJ1xyXG5cdHJldHVybiBmb3JtYXR0ZWREYXRlXHJcbn1cclxuIiwiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvZ2luVXNlck5hbWUoYWN0aXZlVGFiKSB7XHJcblx0Ly8g0L/QvtC70YPRh9Cw0LXQvCDRgdGB0YvQu9C60YMg0L3QsCDQv9GA0L7RhNC40LvRjCDQuNC3INCw0LLQsNGC0LDRgNC60Lgg0LIg0L/RgNCw0LLQvtC8INCy0LXRgNGF0L3QtdC8INGD0LPQu9GDINGB0YLRgNCw0L3QuNGG0YssINGC0LDQutC20LUg0YfQtdGA0LXQtyBleGVjdXRlU2NyaXB0XHJcblx0Y29uc3QgW3Jlc3VsdF0gPSBhd2FpdCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xyXG5cdFx0dGFyZ2V0OiB7IHRhYklkOiBhY3RpdmVUYWIuaWQgfSxcclxuXHRcdGZ1bmM6ICgpID0+IHtcclxuXHRcdFx0Y29uc3QgcHJvZmlsZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2xvYmFsLW5hdi1zY3JlZW4tbmFtZScpPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxyXG5cdFx0XHRyZXR1cm4gcHJvZmlsZUxpbmsgfHwgbnVsbFxyXG5cdFx0fSxcclxuXHR9KVxyXG5cclxuXHRpZiAoIXJlc3VsdC5yZXN1bHQpIHtcclxuXHRcdHJldHVybiB7IHVzZXJFcnJvcjogJ1NvbWUga2luZCBvZiBlcnJvciBoYXMgb2NjdXJyZWQsIHRoZSBwcm9maWxlIGhhcyBub3QgYmVlbiBmb3VuZCcgfVxyXG5cdH1cclxuXHJcblx0Y29uc3QgcHJvZmlsZUxpbmsgPSByZXN1bHQucmVzdWx0IC8vINC00LXRgdGC0YDRg9C60YLRg9GA0LjQt9C40YDRg9C10Lwg0YDQtdC30YPQu9GM0YLQsNGCXHJcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwcm9maWxlTGluaykgLy8g0LfQsNC/0YDQsNGI0LjQstCw0LXQvCBodG1sINGB0YLRgNCw0L3QuNGG0Ysg0L/RgNC+0YTQuNC70Y8g0L/QviDRgdGB0YvQu9C60LUg0L3QsCDQv9GA0L7RhNC40LvRjFxyXG5cdGNvbnN0IGh0bWxUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpIC8vINC/0L7Qu9GD0YfQsNC10Lwg0YHRgtGA0LDQvdC40YbRgyDQsiDQstC40LTQtSDRgtC10LrRgdGC0LBcclxuXHJcblx0Y29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpIC8vINGB0L7Qt9C00LDRkdC8INCy0YDQtdC80LXQvdC90YvQuSDQv9Cw0YDRgdC10YAgSFRNTCDQutC+0YLQvtGA0YvQuSDQv9C+0LfQstC+0LvQuNGCINGA0LDQt9C+0LHRgNCw0YLRjCDRgdGC0YDQvtC60YMg0LIgSFRNTFxyXG5cdGNvbnN0IGRvbSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbFRleHQsICd0ZXh0L2h0bWwnKSAvLyDQv9C+0LvRg9GH0LDQtdC8IEhUTUwg0LIg0LLQuNC00LUgRE9NXHJcblxyXG5cdGNvbnN0IG5hbWVFbGVtZW50ID0gZG9tLnF1ZXJ5U2VsZWN0b3IoJyNwb3J0Zm9saW8tdXNlci1uYW1lJykgLy8g0LjRidC10Lwg0LjQvNGPIGxvZ2luINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG5cclxuXHRpZiAoIW5hbWVFbGVtZW50KSB7XHJcblx0XHRyZXR1cm4geyB1c2VyRXJyb3I6ICdVc2VyIG5hbWUgbm90IGZvdW5kJyB9XHJcblx0fVxyXG5cclxuXHQvLyDQv9C+0LvRg9GH0LDQtdC8INGC0LXQutGB0YIg0LLQvdGD0YLRgNC4INGC0LXQs9CwLCDQuNCz0L3QvtGA0LjRgNGD0Y8gPHNtYWxsPiwg0YLQsNC6INC60LDQuiDRgdCw0LnRgiDQuNC80LXQtdGCINCy0L7RgiDRgtCw0LrRg9GOINGB0YLRgNGD0LrRgtGD0YDRg1xyXG5cdC8vIDxoMSBpZD1cInBvcnRmb2xpby11c2VyLW5hbWVcIj5XaW5zdG9uIEVzcG9zaXRvPHNtYWxsPihsZWhhLWdlcmFza2luLTgwKTwvc21hbGw+PC9oMT5cclxuXHRjb25zdCBmdWxsTmFtZSA9IG5hbWVFbGVtZW50LmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQudHJpbSgpLnJlcGxhY2UoL1xccysvZywgJyAnKVxyXG5cclxuXHRyZXR1cm4geyB1c2VyTmFtZTogZnVsbE5hbWUudG9Mb3dlckNhc2UoKSwgdXNlckVycm9yOiBudWxsIH0gLy8g0LLQvtC30LLRgNCw0YnQsNC10Lwg0LIg0L3QuNC20L3QtdC8INGA0LXQs9C40YHRgtGA0LVcclxufVxyXG4iLCIvLyDQutC+0L3QstC10YDRgtC40YDRg9C10YIg0YbQstC10YIg0LjQtyDRhNC+0YDQvNCw0YLQsCBoZXgg0LIg0YTQvtGA0LzQsNGCIFJHQlxyXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7XHJcblx0Y29uc3QgciA9IHBhcnNlSW50KGhleC5zbGljZSgxLCAzKSwgMTYpIC8gMjU1XHJcblx0Y29uc3QgZyA9IHBhcnNlSW50KGhleC5zbGljZSgzLCA1KSwgMTYpIC8gMjU1XHJcblx0Y29uc3QgYiA9IHBhcnNlSW50KGhleC5zbGljZSg1LCA3KSwgMTYpIC8gMjU1XHJcblx0cmV0dXJuIFBERkxpYi5yZ2IociwgZywgYilcclxufVxyXG4iLCIvLyDQt9Cw0L/Rg9GB0LrQsNC10YIg0L/QsNGA0YHQuNC90LMg0YHRgtGA0LDQvdC40YbRiyDRgSBkZXZwb3N0LmNvbVxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQYWdlQ29udGVudCgpIHtcclxuXHQvLyDQndCQ0JfQktCQ0J3QmNCVXHJcblx0Y29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ludHJvZHVjdGlvbiBoMScpIC8vINC40YnQtdC8INC90LDQt9Cy0LDQvdC40LUg0YXQsNC60LDRgtC+0L3QsFxyXG5cdGNvbnN0IHRpdGxlVGV4dCA9IHRpdGxlRWxlbWVudCA/IHRpdGxlRWxlbWVudC50ZXh0Q29udGVudC50cmltKCkgOiBudWxsXHJcblxyXG5cdC8vINCU0JDQotCQXHJcblx0Y29uc3QgZGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1kYXRlcy10ZXh0XScpIC8vINC40YnQtdC8INC00LDRgtGDXHJcblx0Y29uc3QgZGF0ZVRleHQgPSBkYXRlRWxlbWVudCA/IGRhdGVFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSA6IG51bGxcclxuXHJcblx0Ly8g0KHQn9CY0KHQntCaINCh0KPQlNCV0JlcclxuXHRjb25zdCBqdWRnZUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNoYWxsZW5nZV9qdWRnZSBzdHJvbmcnKVxyXG5cdGNvbnN0IGp1ZGdlc0FycmF5ID0gQXJyYXkuZnJvbShqdWRnZUVsZW1lbnRzKS5tYXAoZWwgPT4gZWwudGV4dENvbnRlbnQudHJpbSgpLnRvTG93ZXJDYXNlKCkpXHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRkYXRlSGFja2F0aG9uOiBkYXRlVGV4dCxcclxuXHRcdHRpdGxlSGFja2F0aG9uOiB0aXRsZVRleHQsXHJcblx0XHRqdWRnZXM6IGp1ZGdlc0FycmF5LFxyXG5cdH1cclxufVxyXG4iLCJsZXQgc2VsZWN0ZWRDb2xvciA9ICcnXHJcblxyXG4vLyDRhNGD0L3QutGG0LjRjyDQtNC70Y8g0LLQuNC30YPQsNC70YzQvdC+0LPQviDQvtGC0L7QsdGA0LDQttC10L3QuNGPINCy0YvQsdC+0YDQsCDRhtCy0LXRgtCwICjRgNCw0LzQutCwKVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBDb2xvclNlbGVjdGlvbigpIHtcclxuXHRjb25zdCBwcmV2aWV3cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xvcl9wcmV2aWV3JykgLy8g0L/QvtC70YPRh9Cw0LXQvCAn0LrQvdC+0L/QutC4JyDRgSDRhtCy0LXRgtCw0LzQuFxyXG5cclxuXHQvLyDQvdCwINC60LDQttC00YPRjiAn0LrQvdC+0L/QutGDJyDQstC10YjQsNC10Lwg0YHQu9GD0YjQsNGC0LXQu9GMINC60LvQuNC60LBcclxuXHRwcmV2aWV3cy5mb3JFYWNoKHByZXZpZXcgPT4ge1xyXG5cdFx0cHJldmlldy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0Ly8g0YPQsdC40YDQsNC10Lwg0L/RgNC10LTRi9C00YPRidGD0Y4g0LDQutGC0LjQstC90YPRjiDRgNCw0LzQutGDINC10YHQu9C4INC+0L3QsCDQtdGB0YLRjFxyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sb3JfcHJldmlldy5hY3RpdmUnKT8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuXHRcdFx0cHJldmlldy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKSAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0YDQsNC80LrRgyDQstGL0LHRgNCw0L3QvdC+0LzRgyDRhtCy0LXRgtGDXHJcblx0XHRcdHNlbGVjdGVkQ29sb3IgPSBwcmV2aWV3LmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicpIC8vINC+0LHQvdC+0LLQu9GP0LXQvCDQstGL0LHRgNCw0L3QvdGL0Lkg0YbQstC10YJcclxuXHRcdH0pXHJcblx0fSlcclxufVxyXG5cclxuLy8g0LPQtdGC0YLQtdGAINC00LvRjyDQv9C+0LvRg9GH0LXQvdC40Y8g0LLRi9Cx0YDQsNC90L3QvtCz0L4g0YbQstC10YLQsFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRDb2xvcigpIHtcclxuXHRyZXR1cm4gc2VsZWN0ZWRDb2xvclxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBzd2l0Y2hJbnRlcmZhY2UgPSBzdGF0ZSA9PiB7XHJcblx0c3dpdGNoIChzdGF0ZSkge1xyXG5cdFx0Y2FzZSAnb3BlbkxvYWRlcic6XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhdGVCdXR0b24nKS5kaXNhYmxlZCA9IHRydWVcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgJ2Nsb3NlTG9hZGVyJzpcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRlcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlbmVyYXRlQnV0dG9uJykuZGlzYWJsZWQgPSBmYWxzZVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSAncmVzdWx0JzpcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRlcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlbmVyYXRlQnV0dG9uJykuZGlzYWJsZWQgPSBmYWxzZVxyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuXHRcdFx0YnJlYWtcclxuXHR9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjaGVja0Vycm9ycyB9IGZyb20gJy4vZnVuY3Rpb25zL2NoZWNrRXJyb3JzLmpzJ1xyXG5pbXBvcnQgeyBjdXN0b21EcmF3SW1hZ2UgfSBmcm9tICcuL2Z1bmN0aW9ucy9jdXN0b21EcmF3SW1hZ2UuanMnXHJcbmltcG9ydCB7IGN1c3RvbURyYXdUZXh0IH0gZnJvbSAnLi9mdW5jdGlvbnMvY3VzdG9tRHJhd1RleHQuanMnXHJcbmltcG9ydCB7IGdlbmVyYXRlUXJDb2RlIH0gZnJvbSAnLi9mdW5jdGlvbnMvZ2VuZXJhdGVRUkNvZGUuanMnXHJcbmltcG9ydCB7IGdldEN1cnJlbnREYXRlIH0gZnJvbSAnLi9mdW5jdGlvbnMvZ2V0Q3VycmVudERhdGUuanMnXHJcbmltcG9ydCB7IGdldExvZ2luVXNlck5hbWUgfSBmcm9tICcuL2Z1bmN0aW9ucy9nZXRMb2dpblVzZXJOYW1lLmpzJ1xyXG5pbXBvcnQgeyBoZXhUb1JnYiB9IGZyb20gJy4vZnVuY3Rpb25zL2hleFRvUmdiLmpzJ1xyXG5pbXBvcnQgeyBwYXJzZVBhZ2VDb250ZW50IH0gZnJvbSAnLi9mdW5jdGlvbnMvcGFyc2VQYWdlQ29udGVudC5qcydcclxuaW1wb3J0IHsgZ2V0U2VsZWN0ZWRDb2xvciwgc2V0dXBDb2xvclNlbGVjdGlvbiB9IGZyb20gJy4vZnVuY3Rpb25zL3NldHVwQ29sb3JTZWxlY3Rpb24uanMnXHJcbmltcG9ydCB7IHN3aXRjaEludGVyZmFjZSB9IGZyb20gJy4vZnVuY3Rpb25zL3N3aXRjaEludGVyZmFjZS5qcydcclxuXHJcbmNvbnN0IHsgUERGRG9jdW1lbnQgfSA9IFBERkxpYiAvLyDQv9C+0LvRg9GH0LDQtdC8INC00L7RgdGC0YPQvyDQuiBwZGYtbGliXHJcblxyXG4vLyDRjdGC0LAg0YTRg9C90LrRhtC40Y8g0YHRgNCw0LHQsNGC0YvQstCw0LXRgiDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDQutC90L7Qv9C60YMgJ0NyZWF0ZSdcclxuYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVQREYoKSB7XHJcblx0Y29uc3Qgc2VsZWN0ZWRDb2xvciA9IGdldFNlbGVjdGVkQ29sb3IoKVxyXG5cclxuXHRjb25zdCBbYWN0aXZlVGFiXSA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHtcclxuXHRcdGFjdGl2ZTogdHJ1ZSxcclxuXHRcdGN1cnJlbnRXaW5kb3c6IHRydWUsXHJcblx0fSkgLy8g0L/QvtC70YPRh9Cw0LXQvCDQsNC60YLQuNCy0L3Rg9GOINCy0LrQu9Cw0LTQutGDINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG5cclxuXHQvLyDQtdGB0LvQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0L3QtSDQvdCw0YXQvtC00LjRgtGB0Y8g0L3QsCDRgdGC0YDQsNC90LjRhtC1IGRldnBvc3QuY29tINCy0YvQstC+0LTQuNC8IGFsZXJ0XHJcblx0aWYgKCFhY3RpdmVUYWIgfHwgIWFjdGl2ZVRhYi51cmwuaW5jbHVkZXMoJ2RldnBvc3QuY29tJykpIHtcclxuXHRcdGFsZXJ0KCdQbGVhc2Ugb3BlbiB0aGUgaGFja2F0aG9uIHBhZ2Ugb24gdGhlIHdlYnNpdGUgZGV2cG9zdC5jb20nKVxyXG5cdFx0cmV0dXJuXHJcblx0fVxyXG5cclxuXHQvLyDQv9C+0LrQsNC30YvQstCw0LXQvCBsb2FkZXIg0L3QsCDQstGA0LXQvNGPINGB0L7Qt9C00LDQvdC40Y8g0YHQtdGA0YLQuNGE0LjQutCw0YLQsCDQuCDRgdC60YDRi9Cy0LDQtdC8IHJlc3VsdCDQtdGB0LvQuCDQvtC9INC10YHRgtGMXHJcblx0c3dpdGNoSW50ZXJmYWNlKCdvcGVuTG9hZGVyJylcclxuXHJcblx0Ly8g0LLRi9C/0L7Qu9C90Y/QtdC8INC/0LDRgNGB0LjQvdCzXHJcblx0Y29uc3QgW3Jlc3VsdF0gPSBhd2FpdCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xyXG5cdFx0dGFyZ2V0OiB7IHRhYklkOiBhY3RpdmVUYWIuaWQgfSxcclxuXHRcdGZ1bmM6IHBhcnNlUGFnZUNvbnRlbnQsXHJcblx0fSlcclxuXHJcblx0Y29uc3QgeyBkYXRlSGFja2F0aG9uLCB0aXRsZUhhY2thdGhvbiwganVkZ2VzIH0gPSByZXN1bHQucmVzdWx0IC8vINC00LXRgdGC0YDRg9C60YLRg9GA0LjQt9C40LDRhtC40Y8g0YDQtdC30YPQu9GM0YLQsNGC0LBcclxuXHJcblx0Ly8g0L/QvtC70YPRh9Cw0LXQvCDQuNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXHJcblx0Y29uc3QgeyB1c2VyTmFtZSwgdXNlckVycm9yIH0gPSBhd2FpdCBnZXRMb2dpblVzZXJOYW1lKGFjdGl2ZVRhYilcclxuXHJcblx0Ly8g0L/QtdGA0LXQtCDQvdCw0YfQsNC70L7QvCDRgdC+0LfQtNCw0L3QuNGPINGB0LXRgNGC0LjRhNC40LrQsNGC0LAg0L/RgNC+0LLQtdGA0Y/QtdC8INCy0LLQtdC00LXQvdC90YvQtSDQtNCw0L3QvdGL0LVcclxuXHRjb25zdCBlcnJvciA9IGNoZWNrRXJyb3JzKHVzZXJOYW1lLCB1c2VyRXJyb3IsIHNlbGVjdGVkQ29sb3IsIGp1ZGdlcylcclxuXHJcblx0aWYgKGVycm9yKSB7XHJcblx0XHRhbGVydChlcnJvcilcclxuXHRcdHN3aXRjaEludGVyZmFjZSgnY2xvc2VMb2FkZXInKVxyXG5cdFx0cmV0dXJuXHJcblx0fVxyXG5cclxuXHQvLyDQt9Cw0LPRgNGD0LbQsNC10Lwg0YjQsNCx0LvQvtC9IFBERiDQuNC3INC/0LDQv9C60LggdGVtcGxhdGVzINC4INC/0YDQtdC+0LHRgNCw0LfQvtCy0YvQstCw0LXQvCDQtdCz0L4g0LIg0YTQvtGA0LzQsNGCIEFycmF5QnVmZmVyXHJcblx0Y29uc3QgZXhpc3RpbmdQZGZCeXRlcyA9IGF3YWl0IGZldGNoKGBwdWJsaWMvdGVtcGxhdGVzLyR7c2VsZWN0ZWRDb2xvcn0ucGRmYCkudGhlbihyZXMgPT5cclxuXHRcdHJlcy5hcnJheUJ1ZmZlcigpXHJcblx0KVxyXG5cdGNvbnN0IHBkZkRvYyA9IGF3YWl0IFBERkRvY3VtZW50LmxvYWQoZXhpc3RpbmdQZGZCeXRlcykgLy8g0LfQsNCz0YDRg9C20LDQtdC8IFBERiDQtNC+0LrRg9C80LXQvdGCINC40LcgQXJyYXlCdWZmZXJcclxuXHJcblx0Y29uc3QgY2VydGlmaWNhdGVDb2xvcnMgPSB7XHJcblx0XHRibGFjazogJyMwMDAwMDAnLFxyXG5cdFx0Ymx1ZTogJyMwZDI1NjInLFxyXG5cdFx0cmVkOiAnI2FiMDkwOScsXHJcblx0XHRncmVlbjogJyMwZDc0MmMnLFxyXG5cdH1cclxuXHJcblx0Y29uc3QgcGFnZSA9IHBkZkRvYy5nZXRQYWdlcygpWzBdIC8vINC/0L7Qu9GD0YfQsNC10Lwg0L/QtdGA0LLRg9GOINGB0YLRgNCw0L3QuNGG0YMg0LTQvtC60YPQvNC10L3RgtCwXHJcblxyXG5cdGNvbnN0IHRleHRDb2xvciA9IGhleFRvUmdiKGNlcnRpZmljYXRlQ29sb3JzW3NlbGVjdGVkQ29sb3JdKSAvLyDRhtCy0LXRgiDRgtC10LrRgdGC0LAg0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINGG0LLQtdGC0LAg0YHQtdGA0YLQuNGE0LjQutCw0YLQsFxyXG5cdGNvbnN0IGN1c3RvbUZvbnQgPSBhd2FpdCBwZGZEb2MuZW1iZWRGb250KFBERkxpYi5TdGFuZGFyZEZvbnRzLkhlbHZldGljYUJvbGQpIC8vINC30LDQs9GA0YPQttCw0LXQvCDRiNGA0LjRhNGCINC40Lcg0YjRgNC40YTRgtC+0LIgUERGTGliXHJcblx0Y29uc3Qgd2lkdGggPSAxMTIzIC8vINGI0LjRgNC40L3QsCDRgdGC0YDQsNC90LjRhtGLINGB0LXRgNGC0LjRhNC40LrQsNGC0LBcclxuXHJcblx0Ly8g0JTQntCR0JDQktCb0K/QldCcINCd0JAg0KHQotCg0JDQndCY0KbQoyDQqNCQ0JHQm9Ce0J3QkCDQndCj0JbQndCr0JUg0JTQkNCd0J3Qq9CVXHJcblx0Ly8g0JjQnNCvXHJcblx0Y29uc3QgbmFtZVRleHQgPSB1c2VyTmFtZS50b1VwcGVyQ2FzZSgpIC8vINC/0LXRgNC10LLQvtC00LjQvCDRgtC10LrRgdGCINCyIHVwcGVyIGNhc2VcclxuXHRjb25zdCBuYW1lWCA9IHdpZHRoIC8gMiAtIGN1c3RvbUZvbnQud2lkdGhPZlRleHRBdFNpemUobmFtZVRleHQsIDcyKSAvIDIgLy8g0J/QvtC30LjRhtC40Y8g0L/QviDQvtGB0LggWFxyXG5cdGN1c3RvbURyYXdUZXh0KHBhZ2UsIG5hbWVUZXh0LCBuYW1lWCwgNDAwLCA3MiwgY3VzdG9tRm9udCwgdGV4dENvbG9yKSAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0L3QsCDRgdGC0YDQsNC90LjRhtGDXHJcblxyXG5cdC8vINCd0JDQl9CS0JDQndCY0JUgWNCQ0JrQkNCi0J7QndCQXHJcblx0Y29uc3QgdGl0bGVYID0gd2lkdGggLyAyIC0gY3VzdG9tRm9udC53aWR0aE9mVGV4dEF0U2l6ZSh0aXRsZUhhY2thdGhvbiwgMjUpIC8gMlxyXG5cdGN1c3RvbURyYXdUZXh0KHBhZ2UsIHRpdGxlSGFja2F0aG9uLCB0aXRsZVgsIDI5NSwgMjUsIGN1c3RvbUZvbnQsIHRleHRDb2xvcilcclxuXHJcblx0Ly8g0JTQkNCi0Ksg0J/QoNCe0JLQldCU0JXQndCY0K9cclxuXHRjb25zdCBkYXRlSGFja2F0aG9uWCA9IHdpZHRoIC8gMiAtIGN1c3RvbUZvbnQud2lkdGhPZlRleHRBdFNpemUoZGF0ZUhhY2thdGhvbiwgMjApIC8gMlxyXG5cdGN1c3RvbURyYXdUZXh0KHBhZ2UsIGRhdGVIYWNrYXRob24sIGRhdGVIYWNrYXRob25YLCAyNzAsIDIwLCBjdXN0b21Gb250LCB0ZXh0Q29sb3IpXHJcblxyXG5cdC8vINCi0JXQmtCj0KnQkNCvINCU0JDQotCQINCU0JvQryDQn9Ce0JvQryBkYXRlIG9mIGlzc3VlXHJcblx0Y29uc3QgY3VycmVudERhdGUgPSBnZXRDdXJyZW50RGF0ZSgpIC8vINC/0L7Qu9GD0YfQsNC10Lwg0YLQtdC60YPRidGD0Y4g0LTQsNGC0YNcclxuXHRjdXN0b21EcmF3VGV4dChwYWdlLCBjdXJyZW50RGF0ZSwgODg1LCAxMDgsIDE5LCBjdXN0b21Gb250LCB0ZXh0Q29sb3IpXHJcblxyXG5cdC8vIFFSIENPREVcclxuXHRjb25zdCBxckltYWdlID0gYXdhaXQgZ2VuZXJhdGVRckNvZGUocGRmRG9jLCBhY3RpdmVUYWIudXJsKVxyXG5cdGN1c3RvbURyYXdJbWFnZShwYWdlLCBxckltYWdlLCA1MCwgNTAsIDE2MCwgMTYwKVxyXG5cclxuXHRjb25zdCBwZGZCeXRlcyA9IGF3YWl0IHBkZkRvYy5zYXZlKCkgLy8g0YHQvtGF0YDQsNC90Y/QtdC8INC40LfQvNC10L3QtdC90LjRj1xyXG5cdGNvbnN0IHBkZkJsb2IgPSBuZXcgQmxvYihbcGRmQnl0ZXNdLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9wZGYnIH0pIC8vINGB0L7Qt9C00LDQtdC8IEJsb2Ig0LTQu9GPINC/0YDQvtGB0LzQvtGC0YDQsCDQuCDRgdC60LDRh9C40LLQsNC90LjRj1xyXG5cdGNvbnN0IHBkZlVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwocGRmQmxvYikgLy8g0YHQvtC30LTQsNC10LwgVVJMINC00LvRjyDQv9GA0L7RgdC80L7RgtGA0LAgQmxvYlxyXG5cclxuXHRjb25zdCB2aWV3TGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjZXJ0aWZpY2F0ZUxpbmsnKSAvLyDRgdC+0LfQtNCw0L3QuNC1INGB0YHRi9C70LrQuCDQtNC70Y8g0L/RgNC+0YHQvNC+0YLRgNCwXHJcblx0dmlld0xpbmsuaHJlZiA9IHBkZlVybFxyXG5cclxuXHRjb25zdCBmb3JtYXR0ZWROYW1lID0gdXNlck5hbWUucmVwbGFjZSgvXFxzKy9nLCAnXycpIC8vINGE0L7RgNC80LDRgtC40YDRg9C10Lwg0LjQvNGPINC00LvRjyDQv9GA0LDQstC40LvRjNC90L7Qs9C+INC40LzQtdC90Lgg0YTQsNC50LvQsFxyXG5cdGNvbnN0IGRvd25sb2FkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rvd25sb2FkQnV0dG9uJykgLy8g0YHQvtC30LTQsNC90LjQtSDQutC90L7Qv9C60Lgg0LTQu9GPINGB0LrQsNGH0LjQstCw0L3QuNGPXHJcblx0ZG93bmxvYWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRjb25zdCBkb3dubG9hZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJykgLy8g0YHQvtC30LTQsNC10Lwg0Y3Qu9C10LzQtdC90YIg0YHRgdGL0LvQutGDXHJcblx0XHRkb3dubG9hZExpbmsuaHJlZiA9IHBkZlVybCAvLyDQsNC00YDQtdGBINGB0YHRi9C70LrQuCDQvdCwXHJcblx0XHRkb3dubG9hZExpbmsuZG93bmxvYWQgPSBgJHtmb3JtYXR0ZWROYW1lfV9jZXJ0aWZpY2F0ZS5wZGZgIC8vINC40LzRjyDRhNCw0LnQu9CwXHJcblx0XHRkb3dubG9hZExpbmsuY2xpY2soKSAvLyDRjdC80YPQu9C40YDRg9C10YIg0L3QsNC20LDRgtC40LVcclxuXHR9KVxyXG5cclxuXHQvLyDRgdC60YDRi9Cy0LDQtdC8IGxvYWRlciDQuCDQvtGC0L7QsdGA0LDQttCw0LXQvCByZXN1bHRcclxuXHRzd2l0Y2hJbnRlcmZhY2UoJ3Jlc3VsdCcpXHJcbn1cclxuXHJcbi8vINC00L7QsdCw0LLQu9GP0LXQvCDRgdC70YPRiNCw0YLQtdC70Lgg0YHQvtCx0YvRgtC40Lkg0L3QsCDQutC90L7Qv9C60LggJ2NyZWF0ZScg0Lgg0LLRi9Cx0L7RgCDRhtCy0LXRgtCwXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmF0ZUJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVQREYpXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBzZXR1cENvbG9yU2VsZWN0aW9uKVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=