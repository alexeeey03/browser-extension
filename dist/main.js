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
function checkErrors(inputField, selectedColor, judgesArray) {
	if (!inputField) {
		return 'Please, enter your name'
	}

	if (!selectedColor) {
		return 'Please, select the color'
	}

	if (!judgesArray.includes(inputField.toLowerCase())) {
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
/* harmony import */ var _functions_hexToRgb_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/hexToRgb.js */ "./functions/hexToRgb.js");
/* harmony import */ var _functions_parsePageContent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/parsePageContent.js */ "./functions/parsePageContent.js");
/* harmony import */ var _functions_setupColorSelection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functions/setupColorSelection.js */ "./functions/setupColorSelection.js");









const { PDFDocument } = PDFLib // получаем доступ к pdf-lib

// эта функция срабатывает при нажатии на кнопку 'Create'
async function generatePDF() {
	const selectedColor = (0,_functions_setupColorSelection_js__WEBPACK_IMPORTED_MODULE_7__.getSelectedColor)()

	const [activeTab] = await chrome.tabs.query({
		active: true,
		currentWindow: true,
	}) // получаем активную вкладку пользователя

	// если пользователь не находится на странице devpost.com выводим alert
	if (!activeTab || !activeTab.url.includes('devpost.com')) {
		alert('Please open the hackathon page on the website devpost.com')
		return
	}

	// выполняем парсинг
	const [result] = await chrome.scripting.executeScript({
		target: { tabId: activeTab.id },
		func: _functions_parsePageContent_js__WEBPACK_IMPORTED_MODULE_6__.parsePageContent,
	})

	const { dateHackathon, titleHackathon, judges } = result.result // деструктуризиация результата
	const nameInput = document.getElementById('nameInput').value // получаем значение из поля nameInput

	// перед началом создания сертификата проверяем введенные данные
	const error = (0,_functions_checkErrors_js__WEBPACK_IMPORTED_MODULE_0__.checkErrors)(nameInput, selectedColor, judges)
	if (error) {
		alert(error)
		return
	}

	// показываем loader на время создания сертификата и скрываем result если он есть
	document.getElementById('result').style.display = 'none'
	document.getElementById('loader').style.display = 'block'
	document.getElementById('generateButton').disabled = true

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

	const textColor = (0,_functions_hexToRgb_js__WEBPACK_IMPORTED_MODULE_5__.hexToRgb)(certificateColors[selectedColor]) // цвет текста в зависимости от цвета сертификата
	const customFont = await pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold) // загружаем шрифт из шрифтов PDFLib
	const width = 1123 // ширина страницы сертификата

	// ДОБАВЛЯЕМ НА СТРАНИЦУ ШАБЛОНА НУЖНЫЕ ДАННЫЕ
	// ИМЯ
	const nameText = nameInput.toUpperCase() // переводим текст в upper case
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

	const formattedName = nameInput.replace(/\s+/g, '_') // форматируем имя для правильного имени файла
	const downloadButton = document.getElementById('downloadButton') // создание кнопки для скачивания
	downloadButton.addEventListener('click', () => {
		const downloadLink = document.createElement('a') // создаем элемент ссылку
		downloadLink.href = pdfUrl // адрес ссылки на
		downloadLink.download = `${formattedName}_certificate.pdf` // имя файла
		downloadLink.click() // эмулирует нажатие
	})

	// скрываем loader и отображаем result
	document.getElementById('loader').style.display = 'none'
	document.getElementById('generateButton').disabled = false
	document.getElementById('result').style.display = 'block'
}

// добавляем слушатели событий на кнопки 'create' и выбор цвета
document.getElementById('generateButton').addEventListener('click', generatePDF)
document.addEventListener('DOMContentLoaded', _functions_setupColorSelection_js__WEBPACK_IMPORTED_MODULE_7__.setupColorSelection)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24vLi9mdW5jdGlvbnMvY2hlY2tFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi8uL2Z1bmN0aW9ucy9jdXN0b21EcmF3SW1hZ2UuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi8uL2Z1bmN0aW9ucy9jdXN0b21EcmF3VGV4dC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLy4vZnVuY3Rpb25zL2dlbmVyYXRlUVJDb2RlLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24vLi9mdW5jdGlvbnMvZ2V0Q3VycmVudERhdGUuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi8uL2Z1bmN0aW9ucy9oZXhUb1JnYi5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLy4vZnVuY3Rpb25zL3BhcnNlUGFnZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi8uL2Z1bmN0aW9ucy9zZXR1cENvbG9yU2VsZWN0aW9uLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLy4vcG9wdXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8g0L/RgNC+0LLQtdGA0LrQsCDQvdC10LrQvtGC0L7RgNGL0YUg0L7RiNC40LHQvtC6XHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0Vycm9ycyhpbnB1dEZpZWxkLCBzZWxlY3RlZENvbG9yLCBqdWRnZXNBcnJheSkge1xyXG5cdGlmICghaW5wdXRGaWVsZCkge1xyXG5cdFx0cmV0dXJuICdQbGVhc2UsIGVudGVyIHlvdXIgbmFtZSdcclxuXHR9XHJcblxyXG5cdGlmICghc2VsZWN0ZWRDb2xvcikge1xyXG5cdFx0cmV0dXJuICdQbGVhc2UsIHNlbGVjdCB0aGUgY29sb3InXHJcblx0fVxyXG5cclxuXHRpZiAoIWp1ZGdlc0FycmF5LmluY2x1ZGVzKGlucHV0RmllbGQudG9Mb3dlckNhc2UoKSkpIHtcclxuXHRcdHJldHVybiAnVGhlIHVzZXIgd2FzIG5vdCBhIGp1ZGdlIG9mIHRoaXMgSGFja2F0aG9uJ1xyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgY3VzdG9tRHJhd0ltYWdlID0gKHBhZ2UsIGNvbnRlbnQsIHhfY29vcmQsIHlfY29vcmQsIHdpZHRoLCBoZWlnaHQpID0+IHtcclxuXHRwYWdlLmRyYXdJbWFnZShjb250ZW50LCB7XHJcblx0XHR4OiB4X2Nvb3JkLFxyXG5cdFx0eTogeV9jb29yZCxcclxuXHRcdHdpZHRoOiB3aWR0aCxcclxuXHRcdGhlaWdodDogaGVpZ2h0LFxyXG5cdH0pXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGN1c3RvbURyYXdUZXh0ID0gKHBhZ2UsIGNvbnRlbnQsIHhfY29vcmQsIHlfY29vcmQsIGZvbnRTaXplLCBmb250LCBjb2xvcikgPT4ge1xyXG5cdHBhZ2UuZHJhd1RleHQoY29udGVudCwge1xyXG5cdFx0eDogeF9jb29yZCxcclxuXHRcdHk6IHlfY29vcmQsXHJcblx0XHRzaXplOiBmb250U2l6ZSxcclxuXHRcdGZvbnQ6IGZvbnQsXHJcblx0XHRjb2xvcjogY29sb3IsXHJcblx0fSlcclxufVxyXG4iLCJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVRckNvZGUocGRmRG9jLCB1cmwpIHtcclxuXHRjb25zdCBxckNvZGVDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSAvLyDRgdC+0LfQtNCw0LXQvCBjYW52YXMg0Y3Qu9C10LzQtdC90YJcclxuXHRhd2FpdCBRUkNvZGUudG9DYW52YXMocXJDb2RlQ2FudmFzLCB1cmwsIHtcclxuXHRcdHdpZHRoOiAxNjAsXHJcblx0fSkgLy8g0YDQuNGB0YPQtdGCIFFSQ29kZSDQvdCwIGNhbnZhcyDRjdC70LXQvNC10L3RgtC1XHJcblx0Y29uc3QgcXJDb2RlRGF0YVVybCA9IHFyQ29kZUNhbnZhcy50b0RhdGFVUkwoKSAvLyDQutC+0L3QstC10YDRgtC40YDRg9C10Lwg0LIgYmFzZTY0XHJcblx0Y29uc3QgcXJJbWFnZSA9IGF3YWl0IHBkZkRvYy5lbWJlZFBuZyhxckNvZGVEYXRhVXJsKSAvLyDQstC+0LfQstGA0LDRidCw0LXRgiDQvtCx0YrQtdC60YIg0LrQvtGC0L7RgNGL0Lkg0LzQvtC20L3QviDQstGB0YLRgNC+0LjRgtGMINCyIFBERlxyXG5cdHJldHVybiBxckltYWdlXHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnREYXRlKCkge1xyXG5cdGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKVxyXG5cclxuXHRjb25zdCBkYXkgPSBjdXJyZW50RGF0ZS5nZXREYXRlKClcclxuXHRjb25zdCBtb250aCA9IGN1cnJlbnREYXRlLmdldE1vbnRoKCkgKyAxIC8vIGdldE1vbnRoINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC+0YIgMCDQtNC+IDExLCDQv9C+0Y3RgtC+0LzRgyDQv9GA0LjQsdCw0LLQu9GP0LXQvCAxXHJcblx0Y29uc3QgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKClcclxuXHJcblx0Y29uc3QgZGF5Rm9ybWF0dGVkID0gZGF5IDwgMTAgPyAnMCcgKyBkYXkgOiBkYXkgLy8g0JXRgdC70Lgg0LTQtdC90Ywg0LzQtdC90YzRiNC1IDEwLCDQtNC+0LHQsNCy0LvRj9C10Lwg0LLQtdC00YPRidC40LkgMFxyXG5cdGNvbnN0IG1vbnRoRm9ybWF0dGVkID0gbW9udGggPCAxMCA/ICcwJyArIG1vbnRoIDogbW9udGggLy8g0JXRgdC70Lgg0LzQtdGB0Y/RhiDQvNC10L3RjNGI0LUgMTAsINC00L7QsdCw0LLQu9GP0LXQvCDQstC10LTRg9GJ0LjQuSAwXHJcblxyXG5cdGNvbnN0IGZvcm1hdHRlZERhdGUgPSBgJHtkYXlGb3JtYXR0ZWR9IC8gJHttb250aEZvcm1hdHRlZH0gLyAke3llYXJ9YCAvLyDQvdGD0LbQvdGL0Lkg0YTQvtGA0LzQsNGCICdERCAvIE1NIC8gWVlZWSdcclxuXHRyZXR1cm4gZm9ybWF0dGVkRGF0ZVxyXG59XHJcbiIsIi8vINC60L7QvdCy0LXRgNGC0LjRgNGD0LXRgiDRhtCy0LXRgiDQuNC3INGE0L7RgNC80LDRgtCwIGhleCDQsiDRhNC+0YDQvNCw0YIgUkdCXHJcbmV4cG9ydCBmdW5jdGlvbiBoZXhUb1JnYihoZXgpIHtcclxuXHRjb25zdCByID0gcGFyc2VJbnQoaGV4LnNsaWNlKDEsIDMpLCAxNikgLyAyNTVcclxuXHRjb25zdCBnID0gcGFyc2VJbnQoaGV4LnNsaWNlKDMsIDUpLCAxNikgLyAyNTVcclxuXHRjb25zdCBiID0gcGFyc2VJbnQoaGV4LnNsaWNlKDUsIDcpLCAxNikgLyAyNTVcclxuXHRyZXR1cm4gUERGTGliLnJnYihyLCBnLCBiKVxyXG59XHJcbiIsIi8vINC30LDQv9GD0YHQutCw0LXRgiDQv9Cw0YDRgdC40L3QsyDRgdGC0YDQsNC90LjRhtGLINGBIGRldnBvc3QuY29tXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhZ2VDb250ZW50KCkge1xyXG5cdC8vINCd0JDQl9CS0JDQndCY0JVcclxuXHRjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW50cm9kdWN0aW9uIGgxJykgLy8g0LjRidC10Lwg0L3QsNC30LLQsNC90LjQtSDRhdCw0LrQsNGC0L7QvdCwXHJcblx0Y29uc3QgdGl0bGVUZXh0ID0gdGl0bGVFbGVtZW50ID8gdGl0bGVFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSA6IG51bGxcclxuXHJcblx0Ly8g0JTQkNCi0JBcclxuXHRjb25zdCBkYXRlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWRhdGVzLXRleHRdJykgLy8g0LjRidC10Lwg0LTQsNGC0YNcclxuXHRjb25zdCBkYXRlVGV4dCA9IGRhdGVFbGVtZW50ID8gZGF0ZUVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpIDogbnVsbFxyXG5cclxuXHQvLyDQodCf0JjQodCe0Jog0KHQo9CU0JXQmVxyXG5cdGNvbnN0IGp1ZGdlRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2hhbGxlbmdlX2p1ZGdlIHN0cm9uZycpXHJcblx0Y29uc3QganVkZ2VzQXJyYXkgPSBBcnJheS5mcm9tKGp1ZGdlRWxlbWVudHMpLm1hcChlbCA9PiBlbC50ZXh0Q29udGVudC50cmltKCkudG9Mb3dlckNhc2UoKSlcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGRhdGVIYWNrYXRob246IGRhdGVUZXh0LFxyXG5cdFx0dGl0bGVIYWNrYXRob246IHRpdGxlVGV4dCxcclxuXHRcdGp1ZGdlczoganVkZ2VzQXJyYXksXHJcblx0fVxyXG59XHJcbiIsImxldCBzZWxlY3RlZENvbG9yID0gJydcclxuXHJcbi8vINGE0YPQvdC60YbQuNGPINC00LvRjyDQstC40LfRg9Cw0LvRjNC90L7Qs9C+INC+0YLQvtCx0YDQsNC20LXQvdC40Y8g0LLRi9Cx0L7RgNCwINGG0LLQtdGC0LAgKNGA0LDQvNC60LApXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cENvbG9yU2VsZWN0aW9uKCkge1xyXG5cdGNvbnN0IHByZXZpZXdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbG9yX3ByZXZpZXcnKSAvLyDQv9C+0LvRg9GH0LDQtdC8ICfQutC90L7Qv9C60LgnINGBINGG0LLQtdGC0LDQvNC4XHJcblxyXG5cdC8vINC90LAg0LrQsNC20LTRg9GOICfQutC90L7Qv9C60YMnINCy0LXRiNCw0LXQvCDRgdC70YPRiNCw0YLQtdC70Ywg0LrQu9C40LrQsFxyXG5cdHByZXZpZXdzLmZvckVhY2gocHJldmlldyA9PiB7XHJcblx0XHRwcmV2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHQvLyDRg9Cx0LjRgNCw0LXQvCDQv9GA0LXQtNGL0LTRg9GJ0YPRjiDQsNC60YLQuNCy0L3Rg9GOINGA0LDQvNC60YMg0LXRgdC70Lgg0L7QvdCwINC10YHRgtGMXHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xvcl9wcmV2aWV3LmFjdGl2ZScpPy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG5cdFx0XHRwcmV2aWV3LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpIC8vINC00L7QsdCw0LLQu9GP0LXQvCDRgNCw0LzQutGDINCy0YvQsdGA0LDQvdC90L7QvNGDINGG0LLQtdGC0YNcclxuXHRcdFx0c2VsZWN0ZWRDb2xvciA9IHByZXZpZXcuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJykgLy8g0L7QsdC90L7QstC70Y/QtdC8INCy0YvQsdGA0LDQvdC90YvQuSDRhtCy0LXRglxyXG5cdFx0fSlcclxuXHR9KVxyXG59XHJcblxyXG4vLyDQs9C10YLRgtC10YAg0LTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyDQstGL0LHRgNCw0L3QvdC+0LPQviDRhtCy0LXRgtCwXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3RlZENvbG9yKCkge1xyXG5cdHJldHVybiBzZWxlY3RlZENvbG9yXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjaGVja0Vycm9ycyB9IGZyb20gJy4vZnVuY3Rpb25zL2NoZWNrRXJyb3JzLmpzJ1xyXG5pbXBvcnQgeyBjdXN0b21EcmF3SW1hZ2UgfSBmcm9tICcuL2Z1bmN0aW9ucy9jdXN0b21EcmF3SW1hZ2UuanMnXHJcbmltcG9ydCB7IGN1c3RvbURyYXdUZXh0IH0gZnJvbSAnLi9mdW5jdGlvbnMvY3VzdG9tRHJhd1RleHQuanMnXHJcbmltcG9ydCB7IGdlbmVyYXRlUXJDb2RlIH0gZnJvbSAnLi9mdW5jdGlvbnMvZ2VuZXJhdGVRUkNvZGUuanMnXHJcbmltcG9ydCB7IGdldEN1cnJlbnREYXRlIH0gZnJvbSAnLi9mdW5jdGlvbnMvZ2V0Q3VycmVudERhdGUuanMnXHJcbmltcG9ydCB7IGhleFRvUmdiIH0gZnJvbSAnLi9mdW5jdGlvbnMvaGV4VG9SZ2IuanMnXHJcbmltcG9ydCB7IHBhcnNlUGFnZUNvbnRlbnQgfSBmcm9tICcuL2Z1bmN0aW9ucy9wYXJzZVBhZ2VDb250ZW50LmpzJ1xyXG5pbXBvcnQgeyBnZXRTZWxlY3RlZENvbG9yLCBzZXR1cENvbG9yU2VsZWN0aW9uIH0gZnJvbSAnLi9mdW5jdGlvbnMvc2V0dXBDb2xvclNlbGVjdGlvbi5qcydcclxuXHJcbmNvbnN0IHsgUERGRG9jdW1lbnQgfSA9IFBERkxpYiAvLyDQv9C+0LvRg9GH0LDQtdC8INC00L7RgdGC0YPQvyDQuiBwZGYtbGliXHJcblxyXG4vLyDRjdGC0LAg0YTRg9C90LrRhtC40Y8g0YHRgNCw0LHQsNGC0YvQstCw0LXRgiDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDQutC90L7Qv9C60YMgJ0NyZWF0ZSdcclxuYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVQREYoKSB7XHJcblx0Y29uc3Qgc2VsZWN0ZWRDb2xvciA9IGdldFNlbGVjdGVkQ29sb3IoKVxyXG5cclxuXHRjb25zdCBbYWN0aXZlVGFiXSA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHtcclxuXHRcdGFjdGl2ZTogdHJ1ZSxcclxuXHRcdGN1cnJlbnRXaW5kb3c6IHRydWUsXHJcblx0fSkgLy8g0L/QvtC70YPRh9Cw0LXQvCDQsNC60YLQuNCy0L3Rg9GOINCy0LrQu9Cw0LTQutGDINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG5cclxuXHQvLyDQtdGB0LvQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0L3QtSDQvdCw0YXQvtC00LjRgtGB0Y8g0L3QsCDRgdGC0YDQsNC90LjRhtC1IGRldnBvc3QuY29tINCy0YvQstC+0LTQuNC8IGFsZXJ0XHJcblx0aWYgKCFhY3RpdmVUYWIgfHwgIWFjdGl2ZVRhYi51cmwuaW5jbHVkZXMoJ2RldnBvc3QuY29tJykpIHtcclxuXHRcdGFsZXJ0KCdQbGVhc2Ugb3BlbiB0aGUgaGFja2F0aG9uIHBhZ2Ugb24gdGhlIHdlYnNpdGUgZGV2cG9zdC5jb20nKVxyXG5cdFx0cmV0dXJuXHJcblx0fVxyXG5cclxuXHQvLyDQstGL0L/QvtC70L3Rj9C10Lwg0L/QsNGA0YHQuNC90LNcclxuXHRjb25zdCBbcmVzdWx0XSA9IGF3YWl0IGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XHJcblx0XHR0YXJnZXQ6IHsgdGFiSWQ6IGFjdGl2ZVRhYi5pZCB9LFxyXG5cdFx0ZnVuYzogcGFyc2VQYWdlQ29udGVudCxcclxuXHR9KVxyXG5cclxuXHRjb25zdCB7IGRhdGVIYWNrYXRob24sIHRpdGxlSGFja2F0aG9uLCBqdWRnZXMgfSA9IHJlc3VsdC5yZXN1bHQgLy8g0LTQtdGB0YLRgNGD0LrRgtGD0YDQuNC30LjQsNGG0LjRjyDRgNC10LfRg9C70YzRgtCw0YLQsFxyXG5cdGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lSW5wdXQnKS52YWx1ZSAvLyDQv9C+0LvRg9GH0LDQtdC8INC30L3QsNGH0LXQvdC40LUg0LjQtyDQv9C+0LvRjyBuYW1lSW5wdXRcclxuXHJcblx0Ly8g0L/QtdGA0LXQtCDQvdCw0YfQsNC70L7QvCDRgdC+0LfQtNCw0L3QuNGPINGB0LXRgNGC0LjRhNC40LrQsNGC0LAg0L/RgNC+0LLQtdGA0Y/QtdC8INCy0LLQtdC00LXQvdC90YvQtSDQtNCw0L3QvdGL0LVcclxuXHRjb25zdCBlcnJvciA9IGNoZWNrRXJyb3JzKG5hbWVJbnB1dCwgc2VsZWN0ZWRDb2xvciwganVkZ2VzKVxyXG5cdGlmIChlcnJvcikge1xyXG5cdFx0YWxlcnQoZXJyb3IpXHJcblx0XHRyZXR1cm5cclxuXHR9XHJcblxyXG5cdC8vINC/0L7QutCw0LfRi9Cy0LDQtdC8IGxvYWRlciDQvdCwINCy0YDQtdC80Y8g0YHQvtC30LTQsNC90LjRjyDRgdC10YDRgtC40YTQuNC60LDRgtCwINC4INGB0LrRgNGL0LLQsNC10LwgcmVzdWx0INC10YHQu9C4INC+0L0g0LXRgdGC0YxcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmF0ZUJ1dHRvbicpLmRpc2FibGVkID0gdHJ1ZVxyXG5cclxuXHQvLyDQt9Cw0LPRgNGD0LbQsNC10Lwg0YjQsNCx0LvQvtC9IFBERiDQuNC3INC/0LDQv9C60LggdGVtcGxhdGVzINC4INC/0YDQtdC+0LHRgNCw0LfQvtCy0YvQstCw0LXQvCDQtdCz0L4g0LIg0YTQvtGA0LzQsNGCIEFycmF5QnVmZmVyXHJcblx0Y29uc3QgZXhpc3RpbmdQZGZCeXRlcyA9IGF3YWl0IGZldGNoKGBwdWJsaWMvdGVtcGxhdGVzLyR7c2VsZWN0ZWRDb2xvcn0ucGRmYCkudGhlbihyZXMgPT5cclxuXHRcdHJlcy5hcnJheUJ1ZmZlcigpXHJcblx0KVxyXG5cdGNvbnN0IHBkZkRvYyA9IGF3YWl0IFBERkRvY3VtZW50LmxvYWQoZXhpc3RpbmdQZGZCeXRlcykgLy8g0LfQsNCz0YDRg9C20LDQtdC8IFBERiDQtNC+0LrRg9C80LXQvdGCINC40LcgQXJyYXlCdWZmZXJcclxuXHJcblx0Y29uc3QgY2VydGlmaWNhdGVDb2xvcnMgPSB7XHJcblx0XHRibGFjazogJyMwMDAwMDAnLFxyXG5cdFx0Ymx1ZTogJyMwZDI1NjInLFxyXG5cdFx0cmVkOiAnI2FiMDkwOScsXHJcblx0XHRncmVlbjogJyMwZDc0MmMnLFxyXG5cdH1cclxuXHJcblx0Y29uc3QgcGFnZSA9IHBkZkRvYy5nZXRQYWdlcygpWzBdIC8vINC/0L7Qu9GD0YfQsNC10Lwg0L/QtdGA0LLRg9GOINGB0YLRgNCw0L3QuNGG0YMg0LTQvtC60YPQvNC10L3RgtCwXHJcblxyXG5cdGNvbnN0IHRleHRDb2xvciA9IGhleFRvUmdiKGNlcnRpZmljYXRlQ29sb3JzW3NlbGVjdGVkQ29sb3JdKSAvLyDRhtCy0LXRgiDRgtC10LrRgdGC0LAg0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINGG0LLQtdGC0LAg0YHQtdGA0YLQuNGE0LjQutCw0YLQsFxyXG5cdGNvbnN0IGN1c3RvbUZvbnQgPSBhd2FpdCBwZGZEb2MuZW1iZWRGb250KFBERkxpYi5TdGFuZGFyZEZvbnRzLkhlbHZldGljYUJvbGQpIC8vINC30LDQs9GA0YPQttCw0LXQvCDRiNGA0LjRhNGCINC40Lcg0YjRgNC40YTRgtC+0LIgUERGTGliXHJcblx0Y29uc3Qgd2lkdGggPSAxMTIzIC8vINGI0LjRgNC40L3QsCDRgdGC0YDQsNC90LjRhtGLINGB0LXRgNGC0LjRhNC40LrQsNGC0LBcclxuXHJcblx0Ly8g0JTQntCR0JDQktCb0K/QldCcINCd0JAg0KHQotCg0JDQndCY0KbQoyDQqNCQ0JHQm9Ce0J3QkCDQndCj0JbQndCr0JUg0JTQkNCd0J3Qq9CVXHJcblx0Ly8g0JjQnNCvXHJcblx0Y29uc3QgbmFtZVRleHQgPSBuYW1lSW5wdXQudG9VcHBlckNhc2UoKSAvLyDQv9C10YDQtdCy0L7QtNC40Lwg0YLQtdC60YHRgiDQsiB1cHBlciBjYXNlXHJcblx0Y29uc3QgbmFtZVggPSB3aWR0aCAvIDIgLSBjdXN0b21Gb250LndpZHRoT2ZUZXh0QXRTaXplKG5hbWVUZXh0LCA3MikgLyAyIC8vINCf0L7Qt9C40YbQuNGPINC/0L4g0L7RgdC4IFhcclxuXHRjdXN0b21EcmF3VGV4dChwYWdlLCBuYW1lVGV4dCwgbmFtZVgsIDQwMCwgNzIsIGN1c3RvbUZvbnQsIHRleHRDb2xvcikgLy8g0LTQvtCx0LDQstC70Y/QtdC8INC90LAg0YHRgtGA0LDQvdC40YbRg1xyXG5cclxuXHQvLyDQndCQ0JfQktCQ0J3QmNCVIFjQkNCa0JDQotCe0J3QkFxyXG5cdGNvbnN0IHRpdGxlWCA9IHdpZHRoIC8gMiAtIGN1c3RvbUZvbnQud2lkdGhPZlRleHRBdFNpemUodGl0bGVIYWNrYXRob24sIDI1KSAvIDJcclxuXHRjdXN0b21EcmF3VGV4dChwYWdlLCB0aXRsZUhhY2thdGhvbiwgdGl0bGVYLCAyOTUsIDI1LCBjdXN0b21Gb250LCB0ZXh0Q29sb3IpXHJcblxyXG5cdC8vINCU0JDQotCrINCf0KDQntCS0JXQlNCV0J3QmNCvXHJcblx0Y29uc3QgZGF0ZUhhY2thdGhvblggPSB3aWR0aCAvIDIgLSBjdXN0b21Gb250LndpZHRoT2ZUZXh0QXRTaXplKGRhdGVIYWNrYXRob24sIDIwKSAvIDJcclxuXHRjdXN0b21EcmF3VGV4dChwYWdlLCBkYXRlSGFja2F0aG9uLCBkYXRlSGFja2F0aG9uWCwgMjcwLCAyMCwgY3VzdG9tRm9udCwgdGV4dENvbG9yKVxyXG5cclxuXHQvLyDQotCV0JrQo9Cp0JDQryDQlNCQ0KLQkCDQlNCb0K8g0J/QntCb0K8gZGF0ZSBvZiBpc3N1ZVxyXG5cdGNvbnN0IGN1cnJlbnREYXRlID0gZ2V0Q3VycmVudERhdGUoKSAvLyDQv9C+0LvRg9GH0LDQtdC8INGC0LXQutGD0YnRg9GOINC00LDRgtGDXHJcblx0Y3VzdG9tRHJhd1RleHQocGFnZSwgY3VycmVudERhdGUsIDg4NSwgMTA4LCAxOSwgY3VzdG9tRm9udCwgdGV4dENvbG9yKVxyXG5cclxuXHQvLyBRUiBDT0RFXHJcblx0Y29uc3QgcXJJbWFnZSA9IGF3YWl0IGdlbmVyYXRlUXJDb2RlKHBkZkRvYywgYWN0aXZlVGFiLnVybClcclxuXHRjdXN0b21EcmF3SW1hZ2UocGFnZSwgcXJJbWFnZSwgNTAsIDUwLCAxNjAsIDE2MClcclxuXHJcblx0Y29uc3QgcGRmQnl0ZXMgPSBhd2FpdCBwZGZEb2Muc2F2ZSgpIC8vINGB0L7RhdGA0LDQvdGP0LXQvCDQuNC30LzQtdC90LXQvdC40Y9cclxuXHRjb25zdCBwZGZCbG9iID0gbmV3IEJsb2IoW3BkZkJ5dGVzXSwgeyB0eXBlOiAnYXBwbGljYXRpb24vcGRmJyB9KSAvLyDRgdC+0LfQtNCw0LXQvCBCbG9iINC00LvRjyDQv9GA0L7RgdC80L7RgtGA0LAg0Lgg0YHQutCw0YfQuNCy0LDQvdC40Y9cclxuXHRjb25zdCBwZGZVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHBkZkJsb2IpIC8vINGB0L7Qt9C00LDQtdC8IFVSTCDQtNC70Y8g0L/RgNC+0YHQvNC+0YLRgNCwIEJsb2JcclxuXHJcblx0Y29uc3Qgdmlld0xpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2VydGlmaWNhdGVMaW5rJykgLy8g0YHQvtC30LTQsNC90LjQtSDRgdGB0YvQu9C60Lgg0LTQu9GPINC/0YDQvtGB0LzQvtGC0YDQsFxyXG5cdHZpZXdMaW5rLmhyZWYgPSBwZGZVcmxcclxuXHJcblx0Y29uc3QgZm9ybWF0dGVkTmFtZSA9IG5hbWVJbnB1dC5yZXBsYWNlKC9cXHMrL2csICdfJykgLy8g0YTQvtGA0LzQsNGC0LjRgNGD0LXQvCDQuNC80Y8g0LTQu9GPINC/0YDQsNCy0LjQu9GM0L3QvtCz0L4g0LjQvNC10L3QuCDRhNCw0LnQu9CwXHJcblx0Y29uc3QgZG93bmxvYWRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG93bmxvYWRCdXR0b24nKSAvLyDRgdC+0LfQtNCw0L3QuNC1INC60L3QvtC/0LrQuCDQtNC70Y8g0YHQutCw0YfQuNCy0LDQvdC40Y9cclxuXHRkb3dubG9hZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdGNvbnN0IGRvd25sb2FkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSAvLyDRgdC+0LfQtNCw0LXQvCDRjdC70LXQvNC10L3RgiDRgdGB0YvQu9C60YNcclxuXHRcdGRvd25sb2FkTGluay5ocmVmID0gcGRmVXJsIC8vINCw0LTRgNC10YEg0YHRgdGL0LvQutC4INC90LBcclxuXHRcdGRvd25sb2FkTGluay5kb3dubG9hZCA9IGAke2Zvcm1hdHRlZE5hbWV9X2NlcnRpZmljYXRlLnBkZmAgLy8g0LjQvNGPINGE0LDQudC70LBcclxuXHRcdGRvd25sb2FkTGluay5jbGljaygpIC8vINGN0LzRg9C70LjRgNGD0LXRgiDQvdCw0LbQsNGC0LjQtVxyXG5cdH0pXHJcblxyXG5cdC8vINGB0LrRgNGL0LLQsNC10LwgbG9hZGVyINC4INC+0YLQvtCx0YDQsNC20LDQtdC8IHJlc3VsdFxyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlbmVyYXRlQnV0dG9uJykuZGlzYWJsZWQgPSBmYWxzZVxyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG59XHJcblxyXG4vLyDQtNC+0LHQsNCy0LvRj9C10Lwg0YHQu9GD0YjQsNGC0LXQu9C4INGB0L7QsdGL0YLQuNC5INC90LAg0LrQvdC+0L/QutC4ICdjcmVhdGUnINC4INCy0YvQsdC+0YAg0YbQstC10YLQsFxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhdGVCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdlbmVyYXRlUERGKVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgc2V0dXBDb2xvclNlbGVjdGlvbilcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9