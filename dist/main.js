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

/***/ "./functions/generateQrCode.js":
/*!*************************************!*\
  !*** ./functions/generateQrCode.js ***!
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
	return { r, g, b }
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
/* harmony import */ var _functions_generateQrCode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/generateQrCode.js */ "./functions/generateQrCode.js");
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
	const page = pdfDoc.getPages()[0] // получаем первую страницу документа

	const certificateColors = {
		black: '#000000',
		blue: '#0d2562',
		red: '#ab0909',
		green: '#0d742c',
	} // цвета сертификата

	const { r, g, b } = (0,_functions_hexToRgb_js__WEBPACK_IMPORTED_MODULE_6__.hexToRgb)(certificateColors[selectedColor]) // конвертируем выбранный цвет из hex в RGB
	const textColor = PDFLib.rgb(r, g, b) // передаем цвет в библиотеку
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
	const qrImage = await (0,_functions_generateQrCode_js__WEBPACK_IMPORTED_MODULE_3__.generateQrCode)(pdfDoc, activeTab.url)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0g7QUFDQSxTQUFTLFVBQVUsRUFBRSxnRUFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw2RUFBYztBQUNmO0FBQ0E7QUFDQTtBQUNBLENBQUMsNkVBQWM7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDQUFDLDZFQUFjO0FBQ2Y7QUFDQTtBQUNBLHFCQUFxQiw0RUFBYztBQUNuQyxDQUFDLDZFQUFjO0FBQ2Y7QUFDQTtBQUNBLHVCQUF1Qiw0RUFBYztBQUNyQyxDQUFDLCtFQUFlO0FBQ2hCO0FBQ0E7QUFDQSx3Q0FBd0MseUJBQXlCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0M7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLENBQUMsK0VBQWU7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsa0ZBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi8uL2Z1bmN0aW9ucy9jaGVja0Vycm9ycy5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLy4vZnVuY3Rpb25zL2N1c3RvbURyYXdJbWFnZS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLy4vZnVuY3Rpb25zL2N1c3RvbURyYXdUZXh0LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24vLi9mdW5jdGlvbnMvZ2VuZXJhdGVRckNvZGUuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi8uL2Z1bmN0aW9ucy9nZXRDdXJyZW50RGF0ZS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLy4vZnVuY3Rpb25zL2dldExvZ2luVXNlck5hbWUuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi8uL2Z1bmN0aW9ucy9oZXhUb1JnYi5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLy4vZnVuY3Rpb25zL3BhcnNlUGFnZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi8uL2Z1bmN0aW9ucy9zZXR1cENvbG9yU2VsZWN0aW9uLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24vLi9mdW5jdGlvbnMvc3dpdGNoSW50ZXJmYWNlLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLy4vcG9wdXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8g0L/RgNC+0LLQtdGA0LrQsCDQvdC10LrQvtGC0L7RgNGL0YUg0L7RiNC40LHQvtC6XHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0Vycm9ycyh1c2VyTmFtZSwgdXNlckVycm9yLCBzZWxlY3RlZENvbG9yLCBqdWRnZXNBcnJheSkge1xyXG5cdGlmICh1c2VyRXJyb3IpIHtcclxuXHRcdHJldHVybiB1c2VyRXJyb3JcclxuXHR9IGVsc2UgaWYgKCFzZWxlY3RlZENvbG9yKSB7XHJcblx0XHRyZXR1cm4gJ1BsZWFzZSwgc2VsZWN0IHRoZSBjb2xvcidcclxuXHR9IGVsc2UgaWYgKCFqdWRnZXNBcnJheS5pbmNsdWRlcyh1c2VyTmFtZS50b0xvd2VyQ2FzZSgpKSkge1xyXG5cdFx0cmV0dXJuICdUaGUgdXNlciB3YXMgbm90IGEganVkZ2Ugb2YgdGhpcyBIYWNrYXRob24nXHJcblx0fVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBjdXN0b21EcmF3SW1hZ2UgPSAocGFnZSwgY29udGVudCwgeF9jb29yZCwgeV9jb29yZCwgd2lkdGgsIGhlaWdodCkgPT4ge1xyXG5cdHBhZ2UuZHJhd0ltYWdlKGNvbnRlbnQsIHtcclxuXHRcdHg6IHhfY29vcmQsXHJcblx0XHR5OiB5X2Nvb3JkLFxyXG5cdFx0d2lkdGg6IHdpZHRoLFxyXG5cdFx0aGVpZ2h0OiBoZWlnaHQsXHJcblx0fSlcclxufVxyXG4iLCJleHBvcnQgY29uc3QgY3VzdG9tRHJhd1RleHQgPSAocGFnZSwgY29udGVudCwgeF9jb29yZCwgeV9jb29yZCwgZm9udFNpemUsIGZvbnQsIGNvbG9yKSA9PiB7XHJcblx0cGFnZS5kcmF3VGV4dChjb250ZW50LCB7XHJcblx0XHR4OiB4X2Nvb3JkLFxyXG5cdFx0eTogeV9jb29yZCxcclxuXHRcdHNpemU6IGZvbnRTaXplLFxyXG5cdFx0Zm9udDogZm9udCxcclxuXHRcdGNvbG9yOiBjb2xvcixcclxuXHR9KVxyXG59XHJcbiIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVFyQ29kZShwZGZEb2MsIHVybCkge1xyXG5cdGNvbnN0IHFyQ29kZUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpIC8vINGB0L7Qt9C00LDQtdC8IGNhbnZhcyDRjdC70LXQvNC10L3RglxyXG5cdGF3YWl0IFFSQ29kZS50b0NhbnZhcyhxckNvZGVDYW52YXMsIHVybCwge1xyXG5cdFx0d2lkdGg6IDE2MCxcclxuXHR9KSAvLyDRgNC40YHRg9C10YIgUVJDb2RlINC90LAgY2FudmFzINGN0LvQtdC80LXQvdGC0LVcclxuXHRjb25zdCBxckNvZGVEYXRhVXJsID0gcXJDb2RlQ2FudmFzLnRvRGF0YVVSTCgpIC8vINC60L7QvdCy0LXRgNGC0LjRgNGD0LXQvCDQsiBiYXNlNjRcclxuXHRjb25zdCBxckltYWdlID0gYXdhaXQgcGRmRG9jLmVtYmVkUG5nKHFyQ29kZURhdGFVcmwpIC8vINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC+0LHRitC10LrRgiDQutC+0YLQvtGA0YvQuSDQvNC+0LbQvdC+INCy0YHRgtGA0L7QuNGC0Ywg0LIgUERGXHJcblx0cmV0dXJuIHFySW1hZ2VcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudERhdGUoKSB7XHJcblx0Y29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpXHJcblxyXG5cdGNvbnN0IGRheSA9IGN1cnJlbnREYXRlLmdldERhdGUoKVxyXG5cdGNvbnN0IG1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKSArIDEgLy8gZ2V0TW9udGgg0LLQvtC30LLRgNCw0YnQsNC10YIg0L7RgiAwINC00L4gMTEsINC/0L7RjdGC0L7QvNGDINC/0YDQuNCx0LDQstC70Y/QtdC8IDFcclxuXHRjb25zdCB5ZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKVxyXG5cclxuXHRjb25zdCBkYXlGb3JtYXR0ZWQgPSBkYXkgPCAxMCA/ICcwJyArIGRheSA6IGRheSAvLyDQldGB0LvQuCDQtNC10L3RjCDQvNC10L3RjNGI0LUgMTAsINC00L7QsdCw0LLQu9GP0LXQvCDQstC10LTRg9GJ0LjQuSAwXHJcblx0Y29uc3QgbW9udGhGb3JtYXR0ZWQgPSBtb250aCA8IDEwID8gJzAnICsgbW9udGggOiBtb250aCAvLyDQldGB0LvQuCDQvNC10YHRj9GGINC80LXQvdGM0YjQtSAxMCwg0LTQvtCx0LDQstC70Y/QtdC8INCy0LXQtNGD0YnQuNC5IDBcclxuXHJcblx0Y29uc3QgZm9ybWF0dGVkRGF0ZSA9IGAke2RheUZvcm1hdHRlZH0gLyAke21vbnRoRm9ybWF0dGVkfSAvICR7eWVhcn1gIC8vINC90YPQttC90YvQuSDRhNC+0YDQvNCw0YIgJ0REIC8gTU0gLyBZWVlZJ1xyXG5cdHJldHVybiBmb3JtYXR0ZWREYXRlXHJcbn1cclxuIiwiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvZ2luVXNlck5hbWUoYWN0aXZlVGFiKSB7XHJcblx0Ly8g0L/QvtC70YPRh9Cw0LXQvCDRgdGB0YvQu9C60YMg0L3QsCDQv9GA0L7RhNC40LvRjCDQuNC3INCw0LLQsNGC0LDRgNC60Lgg0LIg0L/RgNCw0LLQvtC8INCy0LXRgNGF0L3QtdC8INGD0LPQu9GDINGB0YLRgNCw0L3QuNGG0YssINGC0LDQutC20LUg0YfQtdGA0LXQtyBleGVjdXRlU2NyaXB0XHJcblx0Y29uc3QgW3Jlc3VsdF0gPSBhd2FpdCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xyXG5cdFx0dGFyZ2V0OiB7IHRhYklkOiBhY3RpdmVUYWIuaWQgfSxcclxuXHRcdGZ1bmM6ICgpID0+IHtcclxuXHRcdFx0Y29uc3QgcHJvZmlsZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2xvYmFsLW5hdi1zY3JlZW4tbmFtZScpPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxyXG5cdFx0XHRyZXR1cm4gcHJvZmlsZUxpbmsgfHwgbnVsbFxyXG5cdFx0fSxcclxuXHR9KVxyXG5cclxuXHRpZiAoIXJlc3VsdC5yZXN1bHQpIHtcclxuXHRcdHJldHVybiB7IHVzZXJFcnJvcjogJ1NvbWUga2luZCBvZiBlcnJvciBoYXMgb2NjdXJyZWQsIHRoZSBwcm9maWxlIGhhcyBub3QgYmVlbiBmb3VuZCcgfVxyXG5cdH1cclxuXHJcblx0Y29uc3QgcHJvZmlsZUxpbmsgPSByZXN1bHQucmVzdWx0IC8vINC00LXRgdGC0YDRg9C60YLRg9GA0LjQt9C40YDRg9C10Lwg0YDQtdC30YPQu9GM0YLQsNGCXHJcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwcm9maWxlTGluaykgLy8g0LfQsNC/0YDQsNGI0LjQstCw0LXQvCBodG1sINGB0YLRgNCw0L3QuNGG0Ysg0L/RgNC+0YTQuNC70Y8g0L/QviDRgdGB0YvQu9C60LUg0L3QsCDQv9GA0L7RhNC40LvRjFxyXG5cdGNvbnN0IGh0bWxUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpIC8vINC/0L7Qu9GD0YfQsNC10Lwg0YHRgtGA0LDQvdC40YbRgyDQsiDQstC40LTQtSDRgtC10LrRgdGC0LBcclxuXHJcblx0Y29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpIC8vINGB0L7Qt9C00LDRkdC8INCy0YDQtdC80LXQvdC90YvQuSDQv9Cw0YDRgdC10YAgSFRNTCDQutC+0YLQvtGA0YvQuSDQv9C+0LfQstC+0LvQuNGCINGA0LDQt9C+0LHRgNCw0YLRjCDRgdGC0YDQvtC60YMg0LIgSFRNTFxyXG5cdGNvbnN0IGRvbSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbFRleHQsICd0ZXh0L2h0bWwnKSAvLyDQv9C+0LvRg9GH0LDQtdC8IEhUTUwg0LIg0LLQuNC00LUgRE9NXHJcblxyXG5cdGNvbnN0IG5hbWVFbGVtZW50ID0gZG9tLnF1ZXJ5U2VsZWN0b3IoJyNwb3J0Zm9saW8tdXNlci1uYW1lJykgLy8g0LjRidC10Lwg0LjQvNGPIGxvZ2luINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG5cclxuXHRpZiAoIW5hbWVFbGVtZW50KSB7XHJcblx0XHRyZXR1cm4geyB1c2VyRXJyb3I6ICdVc2VyIG5hbWUgbm90IGZvdW5kJyB9XHJcblx0fVxyXG5cclxuXHQvLyDQv9C+0LvRg9GH0LDQtdC8INGC0LXQutGB0YIg0LLQvdGD0YLRgNC4INGC0LXQs9CwLCDQuNCz0L3QvtGA0LjRgNGD0Y8gPHNtYWxsPiwg0YLQsNC6INC60LDQuiDRgdCw0LnRgiDQuNC80LXQtdGCINCy0L7RgiDRgtCw0LrRg9GOINGB0YLRgNGD0LrRgtGD0YDRg1xyXG5cdC8vIDxoMSBpZD1cInBvcnRmb2xpby11c2VyLW5hbWVcIj5XaW5zdG9uIEVzcG9zaXRvPHNtYWxsPihsZWhhLWdlcmFza2luLTgwKTwvc21hbGw+PC9oMT5cclxuXHRjb25zdCBmdWxsTmFtZSA9IG5hbWVFbGVtZW50LmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQudHJpbSgpLnJlcGxhY2UoL1xccysvZywgJyAnKVxyXG5cclxuXHRyZXR1cm4geyB1c2VyTmFtZTogZnVsbE5hbWUudG9Mb3dlckNhc2UoKSwgdXNlckVycm9yOiBudWxsIH0gLy8g0LLQvtC30LLRgNCw0YnQsNC10Lwg0LIg0L3QuNC20L3QtdC8INGA0LXQs9C40YHRgtGA0LVcclxufVxyXG4iLCIvLyDQutC+0L3QstC10YDRgtC40YDRg9C10YIg0YbQstC10YIg0LjQtyDRhNC+0YDQvNCw0YLQsCBoZXgg0LIg0YTQvtGA0LzQsNGCIFJHQlxyXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7XHJcblx0Y29uc3QgciA9IHBhcnNlSW50KGhleC5zbGljZSgxLCAzKSwgMTYpIC8gMjU1XHJcblx0Y29uc3QgZyA9IHBhcnNlSW50KGhleC5zbGljZSgzLCA1KSwgMTYpIC8gMjU1XHJcblx0Y29uc3QgYiA9IHBhcnNlSW50KGhleC5zbGljZSg1LCA3KSwgMTYpIC8gMjU1XHJcblx0cmV0dXJuIHsgciwgZywgYiB9XHJcbn1cclxuIiwiLy8g0LfQsNC/0YPRgdC60LDQtdGCINC/0LDRgNGB0LjQvdCzINGB0YLRgNCw0L3QuNGG0Ysg0YEgZGV2cG9zdC5jb21cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFnZUNvbnRlbnQoKSB7XHJcblx0Ly8g0J3QkNCX0JLQkNCd0JjQlVxyXG5cdGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnRyb2R1Y3Rpb24gaDEnKSAvLyDQuNGJ0LXQvCDQvdCw0LfQstCw0L3QuNC1INGF0LDQutCw0YLQvtC90LBcclxuXHRjb25zdCB0aXRsZVRleHQgPSB0aXRsZUVsZW1lbnQgPyB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpIDogbnVsbFxyXG5cclxuXHQvLyDQlNCQ0KLQkFxyXG5cdGNvbnN0IGRhdGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZGF0ZXMtdGV4dF0nKSAvLyDQuNGJ0LXQvCDQtNCw0YLRg1xyXG5cdGNvbnN0IGRhdGVUZXh0ID0gZGF0ZUVsZW1lbnQgPyBkYXRlRWxlbWVudC50ZXh0Q29udGVudC50cmltKCkgOiBudWxsXHJcblxyXG5cdC8vINCh0J/QmNCh0J7QmiDQodCj0JTQldCZXHJcblx0Y29uc3QganVkZ2VFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5jaGFsbGVuZ2VfanVkZ2Ugc3Ryb25nJylcclxuXHRjb25zdCBqdWRnZXNBcnJheSA9IEFycmF5LmZyb20oanVkZ2VFbGVtZW50cykubWFwKGVsID0+IGVsLnRleHRDb250ZW50LnRyaW0oKS50b0xvd2VyQ2FzZSgpKVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0ZGF0ZUhhY2thdGhvbjogZGF0ZVRleHQsXHJcblx0XHR0aXRsZUhhY2thdGhvbjogdGl0bGVUZXh0LFxyXG5cdFx0anVkZ2VzOiBqdWRnZXNBcnJheSxcclxuXHR9XHJcbn1cclxuIiwibGV0IHNlbGVjdGVkQ29sb3IgPSAnJ1xyXG5cclxuLy8g0YTRg9C90LrRhtC40Y8g0LTQu9GPINCy0LjQt9GD0LDQu9GM0L3QvtCz0L4g0L7RgtC+0LHRgNCw0LbQtdC90LjRjyDQstGL0LHQvtGA0LAg0YbQstC10YLQsCAo0YDQsNC80LrQsClcclxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwQ29sb3JTZWxlY3Rpb24oKSB7XHJcblx0Y29uc3QgcHJldmlld3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sb3JfcHJldmlldycpIC8vINC/0L7Qu9GD0YfQsNC10LwgJ9C60L3QvtC/0LrQuCcg0YEg0YbQstC10YLQsNC80LhcclxuXHJcblx0Ly8g0L3QsCDQutCw0LbQtNGD0Y4gJ9C60L3QvtC/0LrRgycg0LLQtdGI0LDQtdC8INGB0LvRg9GI0LDRgtC10LvRjCDQutC70LjQutCwXHJcblx0cHJldmlld3MuZm9yRWFjaChwcmV2aWV3ID0+IHtcclxuXHRcdHByZXZpZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdC8vINGD0LHQuNGA0LDQtdC8INC/0YDQtdC00YvQtNGD0YnRg9GOINCw0LrRgtC40LLQvdGD0Y4g0YDQsNC80LrRgyDQtdGB0LvQuCDQvtC90LAg0LXRgdGC0YxcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbG9yX3ByZXZpZXcuYWN0aXZlJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcblx0XHRcdHByZXZpZXcuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJykgLy8g0LTQvtCx0LDQstC70Y/QtdC8INGA0LDQvNC60YMg0LLRi9Cx0YDQsNC90L3QvtC80YMg0YbQstC10YLRg1xyXG5cdFx0XHRzZWxlY3RlZENvbG9yID0gcHJldmlldy5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InKSAvLyDQvtCx0L3QvtCy0LvRj9C10Lwg0LLRi9Cx0YDQsNC90L3Ri9C5INGG0LLQtdGCXHJcblx0XHR9KVxyXG5cdH0pXHJcbn1cclxuXHJcbi8vINCz0LXRgtGC0LXRgCDQtNC70Y8g0L/QvtC70YPRh9C10L3QuNGPINCy0YvQsdGA0LDQvdC90L7Qs9C+INGG0LLQtdGC0LBcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdGVkQ29sb3IoKSB7XHJcblx0cmV0dXJuIHNlbGVjdGVkQ29sb3JcclxufVxyXG4iLCJleHBvcnQgY29uc3Qgc3dpdGNoSW50ZXJmYWNlID0gc3RhdGUgPT4ge1xyXG5cdHN3aXRjaCAoc3RhdGUpIHtcclxuXHRcdGNhc2UgJ29wZW5Mb2FkZXInOlxyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlbmVyYXRlQnV0dG9uJykuZGlzYWJsZWQgPSB0cnVlXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlICdjbG9zZUxvYWRlcic6XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmF0ZUJ1dHRvbicpLmRpc2FibGVkID0gZmFsc2VcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgJ3Jlc3VsdCc6XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmF0ZUJ1dHRvbicpLmRpc2FibGVkID0gZmFsc2VcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcblx0XHRcdGJyZWFrXHJcblx0fVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY2hlY2tFcnJvcnMgfSBmcm9tICcuL2Z1bmN0aW9ucy9jaGVja0Vycm9ycy5qcydcclxuaW1wb3J0IHsgY3VzdG9tRHJhd0ltYWdlIH0gZnJvbSAnLi9mdW5jdGlvbnMvY3VzdG9tRHJhd0ltYWdlLmpzJ1xyXG5pbXBvcnQgeyBjdXN0b21EcmF3VGV4dCB9IGZyb20gJy4vZnVuY3Rpb25zL2N1c3RvbURyYXdUZXh0LmpzJ1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVFyQ29kZSB9IGZyb20gJy4vZnVuY3Rpb25zL2dlbmVyYXRlUXJDb2RlLmpzJ1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50RGF0ZSB9IGZyb20gJy4vZnVuY3Rpb25zL2dldEN1cnJlbnREYXRlLmpzJ1xyXG5pbXBvcnQgeyBnZXRMb2dpblVzZXJOYW1lIH0gZnJvbSAnLi9mdW5jdGlvbnMvZ2V0TG9naW5Vc2VyTmFtZS5qcydcclxuaW1wb3J0IHsgaGV4VG9SZ2IgfSBmcm9tICcuL2Z1bmN0aW9ucy9oZXhUb1JnYi5qcydcclxuaW1wb3J0IHsgcGFyc2VQYWdlQ29udGVudCB9IGZyb20gJy4vZnVuY3Rpb25zL3BhcnNlUGFnZUNvbnRlbnQuanMnXHJcbmltcG9ydCB7IGdldFNlbGVjdGVkQ29sb3IsIHNldHVwQ29sb3JTZWxlY3Rpb24gfSBmcm9tICcuL2Z1bmN0aW9ucy9zZXR1cENvbG9yU2VsZWN0aW9uLmpzJ1xyXG5pbXBvcnQgeyBzd2l0Y2hJbnRlcmZhY2UgfSBmcm9tICcuL2Z1bmN0aW9ucy9zd2l0Y2hJbnRlcmZhY2UuanMnXHJcblxyXG5jb25zdCB7IFBERkRvY3VtZW50IH0gPSBQREZMaWIgLy8g0L/QvtC70YPRh9Cw0LXQvCDQtNC+0YHRgtGD0L8g0LogcGRmLWxpYlxyXG5cclxuLy8g0Y3RgtCwINGE0YPQvdC60YbQuNGPINGB0YDQsNCx0LDRgtGL0LLQsNC10YIg0L/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0LrQvdC+0L/QutGDICdDcmVhdGUnXHJcbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlUERGKCkge1xyXG5cdGNvbnN0IHNlbGVjdGVkQ29sb3IgPSBnZXRTZWxlY3RlZENvbG9yKClcclxuXHJcblx0Y29uc3QgW2FjdGl2ZVRhYl0gPSBhd2FpdCBjaHJvbWUudGFicy5xdWVyeSh7XHJcblx0XHRhY3RpdmU6IHRydWUsXHJcblx0XHRjdXJyZW50V2luZG93OiB0cnVlLFxyXG5cdH0pIC8vINC/0L7Qu9GD0YfQsNC10Lwg0LDQutGC0LjQstC90YPRjiDQstC60LvQsNC00LrRgyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuXHJcblx0Ly8g0LXRgdC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC90LUg0L3QsNGF0L7QtNC40YLRgdGPINC90LAg0YHRgtGA0LDQvdC40YbQtSBkZXZwb3N0LmNvbSDQstGL0LLQvtC00LjQvCBhbGVydFxyXG5cdGlmICghYWN0aXZlVGFiIHx8ICFhY3RpdmVUYWIudXJsLmluY2x1ZGVzKCdkZXZwb3N0LmNvbScpKSB7XHJcblx0XHRhbGVydCgnUGxlYXNlIG9wZW4gdGhlIGhhY2thdGhvbiBwYWdlIG9uIHRoZSB3ZWJzaXRlIGRldnBvc3QuY29tJylcclxuXHRcdHJldHVyblxyXG5cdH1cclxuXHJcblx0Ly8g0L/QvtC60LDQt9GL0LLQsNC10LwgbG9hZGVyINC90LAg0LLRgNC10LzRjyDRgdC+0LfQtNCw0L3QuNGPINGB0LXRgNGC0LjRhNC40LrQsNGC0LAg0Lgg0YHQutGA0YvQstCw0LXQvCByZXN1bHQg0LXRgdC70Lgg0L7QvSDQtdGB0YLRjFxyXG5cdHN3aXRjaEludGVyZmFjZSgnb3BlbkxvYWRlcicpXHJcblxyXG5cdC8vINCy0YvQv9C+0LvQvdGP0LXQvCDQv9Cw0YDRgdC40L3Qs1xyXG5cdGNvbnN0IFtyZXN1bHRdID0gYXdhaXQgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcclxuXHRcdHRhcmdldDogeyB0YWJJZDogYWN0aXZlVGFiLmlkIH0sXHJcblx0XHRmdW5jOiBwYXJzZVBhZ2VDb250ZW50LFxyXG5cdH0pXHJcblxyXG5cdGNvbnN0IHsgZGF0ZUhhY2thdGhvbiwgdGl0bGVIYWNrYXRob24sIGp1ZGdlcyB9ID0gcmVzdWx0LnJlc3VsdCAvLyDQtNC10YHRgtGA0YPQutGC0YPRgNC40LfQuNCw0YbQuNGPINGA0LXQt9GD0LvRjNGC0LDRgtCwXHJcblxyXG5cdC8vINC/0L7Qu9GD0YfQsNC10Lwg0LjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG5cdGNvbnN0IHsgdXNlck5hbWUsIHVzZXJFcnJvciB9ID0gYXdhaXQgZ2V0TG9naW5Vc2VyTmFtZShhY3RpdmVUYWIpXHJcblxyXG5cdC8vINC/0LXRgNC10LQg0L3QsNGH0LDQu9C+0Lwg0YHQvtC30LTQsNC90LjRjyDRgdC10YDRgtC40YTQuNC60LDRgtCwINC/0YDQvtCy0LXRgNGP0LXQvCDQstCy0LXQtNC10L3QvdGL0LUg0LTQsNC90L3Ri9C1XHJcblx0Y29uc3QgZXJyb3IgPSBjaGVja0Vycm9ycyh1c2VyTmFtZSwgdXNlckVycm9yLCBzZWxlY3RlZENvbG9yLCBqdWRnZXMpXHJcblxyXG5cdGlmIChlcnJvcikge1xyXG5cdFx0YWxlcnQoZXJyb3IpXHJcblx0XHRzd2l0Y2hJbnRlcmZhY2UoJ2Nsb3NlTG9hZGVyJylcclxuXHRcdHJldHVyblxyXG5cdH1cclxuXHJcblx0Ly8g0LfQsNCz0YDRg9C20LDQtdC8INGI0LDQsdC70L7QvSBQREYg0LjQtyDQv9Cw0L/QutC4IHRlbXBsYXRlcyDQuCDQv9GA0LXQvtCx0YDQsNC30L7QstGL0LLQsNC10Lwg0LXQs9C+INCyINGE0L7RgNC80LDRgiBBcnJheUJ1ZmZlclxyXG5cdGNvbnN0IGV4aXN0aW5nUGRmQnl0ZXMgPSBhd2FpdCBmZXRjaChgcHVibGljL3RlbXBsYXRlcy8ke3NlbGVjdGVkQ29sb3J9LnBkZmApLnRoZW4ocmVzID0+XHJcblx0XHRyZXMuYXJyYXlCdWZmZXIoKVxyXG5cdClcclxuXHRjb25zdCBwZGZEb2MgPSBhd2FpdCBQREZEb2N1bWVudC5sb2FkKGV4aXN0aW5nUGRmQnl0ZXMpIC8vINC30LDQs9GA0YPQttCw0LXQvCBQREYg0LTQvtC60YPQvNC10L3RgiDQuNC3IEFycmF5QnVmZmVyXHJcblx0Y29uc3QgcGFnZSA9IHBkZkRvYy5nZXRQYWdlcygpWzBdIC8vINC/0L7Qu9GD0YfQsNC10Lwg0L/QtdGA0LLRg9GOINGB0YLRgNCw0L3QuNGG0YMg0LTQvtC60YPQvNC10L3RgtCwXHJcblxyXG5cdGNvbnN0IGNlcnRpZmljYXRlQ29sb3JzID0ge1xyXG5cdFx0YmxhY2s6ICcjMDAwMDAwJyxcclxuXHRcdGJsdWU6ICcjMGQyNTYyJyxcclxuXHRcdHJlZDogJyNhYjA5MDknLFxyXG5cdFx0Z3JlZW46ICcjMGQ3NDJjJyxcclxuXHR9IC8vINGG0LLQtdGC0LAg0YHQtdGA0YLQuNGE0LjQutCw0YLQsFxyXG5cclxuXHRjb25zdCB7IHIsIGcsIGIgfSA9IGhleFRvUmdiKGNlcnRpZmljYXRlQ29sb3JzW3NlbGVjdGVkQ29sb3JdKSAvLyDQutC+0L3QstC10YDRgtC40YDRg9C10Lwg0LLRi9Cx0YDQsNC90L3Ri9C5INGG0LLQtdGCINC40LcgaGV4INCyIFJHQlxyXG5cdGNvbnN0IHRleHRDb2xvciA9IFBERkxpYi5yZ2IociwgZywgYikgLy8g0L/QtdGA0LXQtNCw0LXQvCDRhtCy0LXRgiDQsiDQsdC40LHQu9C40L7RgtC10LrRg1xyXG5cdGNvbnN0IGN1c3RvbUZvbnQgPSBhd2FpdCBwZGZEb2MuZW1iZWRGb250KFBERkxpYi5TdGFuZGFyZEZvbnRzLkhlbHZldGljYUJvbGQpIC8vINC30LDQs9GA0YPQttCw0LXQvCDRiNGA0LjRhNGCINC40Lcg0YjRgNC40YTRgtC+0LIgUERGTGliXHJcblx0Y29uc3Qgd2lkdGggPSAxMTIzIC8vINGI0LjRgNC40L3QsCDRgdGC0YDQsNC90LjRhtGLINGB0LXRgNGC0LjRhNC40LrQsNGC0LBcclxuXHJcblx0Ly8g0JTQntCR0JDQktCb0K/QldCcINCd0JAg0KHQotCg0JDQndCY0KbQoyDQqNCQ0JHQm9Ce0J3QkCDQndCj0JbQndCr0JUg0JTQkNCd0J3Qq9CVXHJcblx0Ly8g0JjQnNCvXHJcblx0Y29uc3QgbmFtZVRleHQgPSB1c2VyTmFtZS50b1VwcGVyQ2FzZSgpIC8vINC/0LXRgNC10LLQvtC00LjQvCDRgtC10LrRgdGCINCyIHVwcGVyIGNhc2VcclxuXHRjb25zdCBuYW1lWCA9IHdpZHRoIC8gMiAtIGN1c3RvbUZvbnQud2lkdGhPZlRleHRBdFNpemUobmFtZVRleHQsIDcyKSAvIDIgLy8g0J/QvtC30LjRhtC40Y8g0L/QviDQvtGB0LggWFxyXG5cdGN1c3RvbURyYXdUZXh0KHBhZ2UsIG5hbWVUZXh0LCBuYW1lWCwgNDAwLCA3MiwgY3VzdG9tRm9udCwgdGV4dENvbG9yKSAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0L3QsCDRgdGC0YDQsNC90LjRhtGDXHJcblxyXG5cdC8vINCd0JDQl9CS0JDQndCY0JUgWNCQ0JrQkNCi0J7QndCQXHJcblx0Y29uc3QgdGl0bGVYID0gd2lkdGggLyAyIC0gY3VzdG9tRm9udC53aWR0aE9mVGV4dEF0U2l6ZSh0aXRsZUhhY2thdGhvbiwgMjUpIC8gMlxyXG5cdGN1c3RvbURyYXdUZXh0KHBhZ2UsIHRpdGxlSGFja2F0aG9uLCB0aXRsZVgsIDI5NSwgMjUsIGN1c3RvbUZvbnQsIHRleHRDb2xvcilcclxuXHJcblx0Ly8g0JTQkNCi0Ksg0J/QoNCe0JLQldCU0JXQndCY0K9cclxuXHRjb25zdCBkYXRlSGFja2F0aG9uWCA9IHdpZHRoIC8gMiAtIGN1c3RvbUZvbnQud2lkdGhPZlRleHRBdFNpemUoZGF0ZUhhY2thdGhvbiwgMjApIC8gMlxyXG5cdGN1c3RvbURyYXdUZXh0KHBhZ2UsIGRhdGVIYWNrYXRob24sIGRhdGVIYWNrYXRob25YLCAyNzAsIDIwLCBjdXN0b21Gb250LCB0ZXh0Q29sb3IpXHJcblxyXG5cdC8vINCi0JXQmtCj0KnQkNCvINCU0JDQotCQINCU0JvQryDQn9Ce0JvQryBkYXRlIG9mIGlzc3VlXHJcblx0Y29uc3QgY3VycmVudERhdGUgPSBnZXRDdXJyZW50RGF0ZSgpIC8vINC/0L7Qu9GD0YfQsNC10Lwg0YLQtdC60YPRidGD0Y4g0LTQsNGC0YNcclxuXHRjdXN0b21EcmF3VGV4dChwYWdlLCBjdXJyZW50RGF0ZSwgODg1LCAxMDgsIDE5LCBjdXN0b21Gb250LCB0ZXh0Q29sb3IpXHJcblxyXG5cdC8vIFFSIENPREVcclxuXHRjb25zdCBxckltYWdlID0gYXdhaXQgZ2VuZXJhdGVRckNvZGUocGRmRG9jLCBhY3RpdmVUYWIudXJsKVxyXG5cdGN1c3RvbURyYXdJbWFnZShwYWdlLCBxckltYWdlLCA1MCwgNTAsIDE2MCwgMTYwKVxyXG5cclxuXHRjb25zdCBwZGZCeXRlcyA9IGF3YWl0IHBkZkRvYy5zYXZlKCkgLy8g0YHQvtGF0YDQsNC90Y/QtdC8INC40LfQvNC10L3QtdC90LjRj1xyXG5cdGNvbnN0IHBkZkJsb2IgPSBuZXcgQmxvYihbcGRmQnl0ZXNdLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9wZGYnIH0pIC8vINGB0L7Qt9C00LDQtdC8IEJsb2Ig0LTQu9GPINC/0YDQvtGB0LzQvtGC0YDQsCDQuCDRgdC60LDRh9C40LLQsNC90LjRj1xyXG5cdGNvbnN0IHBkZlVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwocGRmQmxvYikgLy8g0YHQvtC30LTQsNC10LwgVVJMINC00LvRjyDQv9GA0L7RgdC80L7RgtGA0LAgQmxvYlxyXG5cclxuXHRjb25zdCB2aWV3TGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjZXJ0aWZpY2F0ZUxpbmsnKSAvLyDRgdC+0LfQtNCw0L3QuNC1INGB0YHRi9C70LrQuCDQtNC70Y8g0L/RgNC+0YHQvNC+0YLRgNCwXHJcblx0dmlld0xpbmsuaHJlZiA9IHBkZlVybFxyXG5cclxuXHRjb25zdCBmb3JtYXR0ZWROYW1lID0gdXNlck5hbWUucmVwbGFjZSgvXFxzKy9nLCAnXycpIC8vINGE0L7RgNC80LDRgtC40YDRg9C10Lwg0LjQvNGPINC00LvRjyDQv9GA0LDQstC40LvRjNC90L7Qs9C+INC40LzQtdC90Lgg0YTQsNC50LvQsFxyXG5cdGNvbnN0IGRvd25sb2FkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rvd25sb2FkQnV0dG9uJykgLy8g0YHQvtC30LTQsNC90LjQtSDQutC90L7Qv9C60Lgg0LTQu9GPINGB0LrQsNGH0LjQstCw0L3QuNGPXHJcblx0ZG93bmxvYWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRjb25zdCBkb3dubG9hZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJykgLy8g0YHQvtC30LTQsNC10Lwg0Y3Qu9C10LzQtdC90YIg0YHRgdGL0LvQutGDXHJcblx0XHRkb3dubG9hZExpbmsuaHJlZiA9IHBkZlVybCAvLyDQsNC00YDQtdGBINGB0YHRi9C70LrQuCDQvdCwXHJcblx0XHRkb3dubG9hZExpbmsuZG93bmxvYWQgPSBgJHtmb3JtYXR0ZWROYW1lfV9jZXJ0aWZpY2F0ZS5wZGZgIC8vINC40LzRjyDRhNCw0LnQu9CwXHJcblx0XHRkb3dubG9hZExpbmsuY2xpY2soKSAvLyDRjdC80YPQu9C40YDRg9C10YIg0L3QsNC20LDRgtC40LVcclxuXHR9KVxyXG5cclxuXHQvLyDRgdC60YDRi9Cy0LDQtdC8IGxvYWRlciDQuCDQvtGC0L7QsdGA0LDQttCw0LXQvCByZXN1bHRcclxuXHRzd2l0Y2hJbnRlcmZhY2UoJ3Jlc3VsdCcpXHJcbn1cclxuXHJcbi8vINC00L7QsdCw0LLQu9GP0LXQvCDRgdC70YPRiNCw0YLQtdC70Lgg0YHQvtCx0YvRgtC40Lkg0L3QsCDQutC90L7Qv9C60LggJ2NyZWF0ZScg0Lgg0LLRi9Cx0L7RgCDRhtCy0LXRgtCwXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmF0ZUJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVQREYpXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBzZXR1cENvbG9yU2VsZWN0aW9uKVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=