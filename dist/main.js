/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./functions/checkErrors.js":
/*!**********************************!*\
  !*** ./functions/checkErrors.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkErrors: () => (/* binding */ checkErrors)\n/* harmony export */ });\n// проверка некоторых ошибок\r\nfunction checkErrors(inputField, selectedColor, judgesArray) {\r\n\tif (!inputField) {\r\n\t\treturn 'Please, enter your name'\r\n\t}\r\n\r\n\tif (!selectedColor) {\r\n\t\treturn 'Please, select the color'\r\n\t}\r\n\r\n\tif (!judgesArray.includes(inputField.toLowerCase())) {\r\n\t\treturn 'The user was not a judge of this Hackathon'\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://chrome-extension/./functions/checkErrors.js?");

/***/ }),

/***/ "./functions/customDrawImage.js":
/*!**************************************!*\
  !*** ./functions/customDrawImage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   customDrawImage: () => (/* binding */ customDrawImage)\n/* harmony export */ });\nconst customDrawImage = (page, content, x_coord, y_coord, width, height) => {\r\n\tpage.drawImage(content, {\r\n\t\tx: x_coord,\r\n\t\ty: y_coord,\r\n\t\twidth: width,\r\n\t\theight: height,\r\n\t})\r\n}\r\n\n\n//# sourceURL=webpack://chrome-extension/./functions/customDrawImage.js?");

/***/ }),

/***/ "./functions/customDrawText.js":
/*!*************************************!*\
  !*** ./functions/customDrawText.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   customDrawText: () => (/* binding */ customDrawText)\n/* harmony export */ });\nconst customDrawText = (page, content, x_coord, y_coord, fontSize, font, color) => {\r\n\tpage.drawText(content, {\r\n\t\tx: x_coord,\r\n\t\ty: y_coord,\r\n\t\tsize: fontSize,\r\n\t\tfont: font,\r\n\t\tcolor: color,\r\n\t})\r\n}\r\n\n\n//# sourceURL=webpack://chrome-extension/./functions/customDrawText.js?");

/***/ }),

/***/ "./functions/generateQRCode.js":
/*!*************************************!*\
  !*** ./functions/generateQRCode.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateQrCode: () => (/* binding */ generateQrCode)\n/* harmony export */ });\nasync function generateQrCode(pdfDoc, url) {\r\n\tconst qrCodeCanvas = document.createElement('canvas') // создаем canvas элемент\r\n\tawait QRCode.toCanvas(qrCodeCanvas, url, {\r\n\t\twidth: 160,\r\n\t}) // рисует QRCode на canvas элементе\r\n\tconst qrCodeDataUrl = qrCodeCanvas.toDataURL() // конвертируем в base64\r\n\tconst qrImage = await pdfDoc.embedPng(qrCodeDataUrl) // возвращает объект который можно встроить в PDF\r\n\treturn qrImage\r\n}\r\n\n\n//# sourceURL=webpack://chrome-extension/./functions/generateQRCode.js?");

/***/ }),

/***/ "./functions/getCurrentDate.js":
/*!*************************************!*\
  !*** ./functions/getCurrentDate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCurrentDate: () => (/* binding */ getCurrentDate)\n/* harmony export */ });\nfunction getCurrentDate() {\r\n\tconst currentDate = new Date()\r\n\r\n\tconst day = currentDate.getDate()\r\n\tconst month = currentDate.getMonth() + 1 // getMonth возвращает от 0 до 11, поэтому прибавляем 1\r\n\tconst year = currentDate.getFullYear()\r\n\r\n\tconst dayFormatted = day < 10 ? '0' + day : day // Если день меньше 10, добавляем ведущий 0\r\n\tconst monthFormatted = month < 10 ? '0' + month : month // Если месяц меньше 10, добавляем ведущий 0\r\n\r\n\tconst formattedDate = `${dayFormatted} / ${monthFormatted} / ${year}` // нужный формат 'DD / MM / YYYY'\r\n\treturn formattedDate\r\n}\r\n\n\n//# sourceURL=webpack://chrome-extension/./functions/getCurrentDate.js?");

/***/ }),

/***/ "./functions/hexToRgb.js":
/*!*******************************!*\
  !*** ./functions/hexToRgb.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hexToRgb: () => (/* binding */ hexToRgb)\n/* harmony export */ });\n// конвертирует цвет из формата hex в формат RGB\r\nfunction hexToRgb(hex) {\r\n\tconst r = parseInt(hex.slice(1, 3), 16) / 255\r\n\tconst g = parseInt(hex.slice(3, 5), 16) / 255\r\n\tconst b = parseInt(hex.slice(5, 7), 16) / 255\r\n\treturn PDFLib.rgb(r, g, b)\r\n}\r\n\n\n//# sourceURL=webpack://chrome-extension/./functions/hexToRgb.js?");

/***/ }),

/***/ "./functions/parsePageContent.js":
/*!***************************************!*\
  !*** ./functions/parsePageContent.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parsePageContent: () => (/* binding */ parsePageContent)\n/* harmony export */ });\n// запускает парсинг страницы с devpost.com\r\nfunction parsePageContent() {\r\n\t// НАЗВАНИЕ\r\n\tconst titleElement = document.querySelector('#introduction h1') // ищем название хакатона\r\n\tconst titleText = titleElement ? titleElement.textContent.trim() : null\r\n\r\n\t// ДАТА\r\n\tconst dateElement = document.querySelector('[data-dates-text]') // ищем дату\r\n\tconst dateText = dateElement ? dateElement.textContent.trim() : null\r\n\r\n\t// СПИСОК СУДЕЙ\r\n\tconst judgeElements = document.querySelectorAll('div.challenge_judge strong')\r\n\tconst judgesArray = Array.from(judgeElements).map(el => el.textContent.trim().toLowerCase())\r\n\r\n\treturn {\r\n\t\tdateHackathon: dateText,\r\n\t\ttitleHackathon: titleText,\r\n\t\tjudges: judgesArray,\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://chrome-extension/./functions/parsePageContent.js?");

/***/ }),

/***/ "./functions/setupColorSelection.js":
/*!******************************************!*\
  !*** ./functions/setupColorSelection.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSelectedColor: () => (/* binding */ getSelectedColor),\n/* harmony export */   setupColorSelection: () => (/* binding */ setupColorSelection)\n/* harmony export */ });\nlet selectedColor = ''\r\n\r\n// функция для визуального отображения выбора цвета (рамка)\r\nfunction setupColorSelection() {\r\n\tconst previews = document.querySelectorAll('.color_preview') // получаем 'кнопки' с цветами\r\n\r\n\t// на каждую 'кнопку' вешаем слушатель клика\r\n\tpreviews.forEach(preview => {\r\n\t\tpreview.addEventListener('click', () => {\r\n\t\t\t// убираем предыдущую активную рамку если она есть\r\n\t\t\tdocument.querySelector('.color_preview.active')?.classList.remove('active')\r\n\t\t\tpreview.classList.add('active') // добавляем рамку выбранному цвету\r\n\t\t\tselectedColor = preview.getAttribute('data-color') // обновляем выбранный цвет\r\n\t\t})\r\n\t})\r\n}\r\n\r\n// геттер для получения выбранного цвета\r\nfunction getSelectedColor() {\r\n\treturn selectedColor\r\n}\r\n\n\n//# sourceURL=webpack://chrome-extension/./functions/setupColorSelection.js?");

/***/ }),

/***/ "./popup.js":
/*!******************!*\
  !*** ./popup.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_checkErrors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/checkErrors.js */ \"./functions/checkErrors.js\");\n/* harmony import */ var _functions_customDrawImage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/customDrawImage.js */ \"./functions/customDrawImage.js\");\n/* harmony import */ var _functions_customDrawText_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/customDrawText.js */ \"./functions/customDrawText.js\");\n/* harmony import */ var _functions_generateQRCode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/generateQRCode.js */ \"./functions/generateQRCode.js\");\n/* harmony import */ var _functions_getCurrentDate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/getCurrentDate.js */ \"./functions/getCurrentDate.js\");\n/* harmony import */ var _functions_hexToRgb_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/hexToRgb.js */ \"./functions/hexToRgb.js\");\n/* harmony import */ var _functions_parsePageContent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/parsePageContent.js */ \"./functions/parsePageContent.js\");\n/* harmony import */ var _functions_setupColorSelection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functions/setupColorSelection.js */ \"./functions/setupColorSelection.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst { PDFDocument } = PDFLib // получаем доступ к pdf-lib\r\n\r\n// эта функция срабатывает при нажатии на кнопку 'Create'\r\nasync function generatePDF() {\r\n\tconst selectedColor = (0,_functions_setupColorSelection_js__WEBPACK_IMPORTED_MODULE_7__.getSelectedColor)()\r\n\r\n\tconst [activeTab] = await chrome.tabs.query({\r\n\t\tactive: true,\r\n\t\tcurrentWindow: true,\r\n\t}) // получаем активную вкладку пользователя\r\n\r\n\t// если пользователь не находится на странице devpost.com выводим alert\r\n\tif (!activeTab || !activeTab.url.includes('devpost.com')) {\r\n\t\talert('Please open the hackathon page on the website devpost.com')\r\n\t\treturn\r\n\t}\r\n\r\n\t// выполняем парсинг\r\n\tconst [result] = await chrome.scripting.executeScript({\r\n\t\ttarget: { tabId: activeTab.id },\r\n\t\tfunc: _functions_parsePageContent_js__WEBPACK_IMPORTED_MODULE_6__.parsePageContent,\r\n\t})\r\n\r\n\tconst { dateHackathon, titleHackathon, judges } = result.result // деструктуризиация результата\r\n\tconst nameInput = document.getElementById('nameInput').value // получаем значение из поля nameInput\r\n\r\n\t// перед началом создания сертификата проверяем введенные данные\r\n\tconst error = (0,_functions_checkErrors_js__WEBPACK_IMPORTED_MODULE_0__.checkErrors)(nameInput, selectedColor, judges)\r\n\tif (error) {\r\n\t\talert(error)\r\n\t\treturn\r\n\t}\r\n\r\n\t// показываем loader на время создания сертификата и скрываем result если он есть\r\n\tdocument.getElementById('result').style.display = 'none'\r\n\tdocument.getElementById('loader').style.display = 'block'\r\n\tdocument.getElementById('generateButton').disabled = true\r\n\r\n\t// загружаем шаблон PDF из папки templates и преобразовываем его в формат ArrayBuffer\r\n\tconst existingPdfBytes = await fetch(`public/templates/${selectedColor}.pdf`).then(res =>\r\n\t\tres.arrayBuffer()\r\n\t)\r\n\tconst pdfDoc = await PDFDocument.load(existingPdfBytes) // загружаем PDF документ из ArrayBuffer\r\n\r\n\tconst certificateColors = {\r\n\t\tblack: '#000000',\r\n\t\tblue: '#0d2562',\r\n\t\tred: '#ab0909',\r\n\t\tgreen: '#0d742c',\r\n\t}\r\n\r\n\tconst page = pdfDoc.getPages()[0] // получаем первую страницу документа\r\n\r\n\tconst textColor = (0,_functions_hexToRgb_js__WEBPACK_IMPORTED_MODULE_5__.hexToRgb)(certificateColors[selectedColor]) // цвет текста в зависимости от цвета сертификата\r\n\tconst customFont = await pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold) // загружаем шрифт из шрифтов PDFLib\r\n\tconst width = 1123 // ширина страницы сертификата\r\n\r\n\t// ДОБАВЛЯЕМ НА СТРАНИЦУ ШАБЛОНА НУЖНЫЕ ДАННЫЕ\r\n\t// ИМЯ\r\n\tconst nameText = nameInput.toUpperCase() // переводим текст в upper case\r\n\tconst nameX = width / 2 - customFont.widthOfTextAtSize(nameText, 72) / 2 // Позиция по оси X\r\n\t;(0,_functions_customDrawText_js__WEBPACK_IMPORTED_MODULE_2__.customDrawText)(page, nameText, nameX, 400, 72, customFont, textColor) // добавляем на страницу\r\n\r\n\t// НАЗВАНИЕ XАКАТОНА\r\n\tconst titleX = width / 2 - customFont.widthOfTextAtSize(titleHackathon, 25) / 2\r\n\t;(0,_functions_customDrawText_js__WEBPACK_IMPORTED_MODULE_2__.customDrawText)(page, titleHackathon, titleX, 295, 25, customFont, textColor)\r\n\r\n\t// ДАТЫ ПРОВЕДЕНИЯ\r\n\tconst dateHackathonX = width / 2 - customFont.widthOfTextAtSize(dateHackathon, 20) / 2\r\n\t;(0,_functions_customDrawText_js__WEBPACK_IMPORTED_MODULE_2__.customDrawText)(page, dateHackathon, dateHackathonX, 270, 20, customFont, textColor)\r\n\r\n\t// ТЕКУЩАЯ ДАТА ДЛЯ ПОЛЯ date of issue\r\n\tconst currentDate = (0,_functions_getCurrentDate_js__WEBPACK_IMPORTED_MODULE_4__.getCurrentDate)() // получаем текущую дату\r\n\t;(0,_functions_customDrawText_js__WEBPACK_IMPORTED_MODULE_2__.customDrawText)(page, currentDate, 885, 108, 19, customFont, textColor)\r\n\r\n\t// QR CODE\r\n\tconst qrImage = await (0,_functions_generateQRCode_js__WEBPACK_IMPORTED_MODULE_3__.generateQrCode)(pdfDoc, activeTab.url)\r\n\t;(0,_functions_customDrawImage_js__WEBPACK_IMPORTED_MODULE_1__.customDrawImage)(page, qrImage, 50, 50, 160, 160)\r\n\r\n\tconst pdfBytes = await pdfDoc.save() // сохраняем изменения\r\n\tconst pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' }) // создаем Blob для просмотра и скачивания\r\n\tconst pdfUrl = URL.createObjectURL(pdfBlob) // создаем URL для просмотра Blob\r\n\r\n\tconst viewLink = document.getElementById('certificateLink') // создание ссылки для просмотра\r\n\tviewLink.href = pdfUrl\r\n\r\n\tconst formattedName = nameInput.replace(/\\s+/g, '_') // форматируем имя для правильного имени файла\r\n\tconst downloadButton = document.getElementById('downloadButton') // создание кнопки для скачивания\r\n\tdownloadButton.addEventListener('click', () => {\r\n\t\tconst downloadLink = document.createElement('a') // создаем элемент ссылку\r\n\t\tdownloadLink.href = pdfUrl // адрес ссылки на\r\n\t\tdownloadLink.download = `${formattedName}_certificate.pdf` // имя файла\r\n\t\tdownloadLink.click() // эмулирует нажатие\r\n\t})\r\n\r\n\t// скрываем loader и отображаем result\r\n\tdocument.getElementById('loader').style.display = 'none'\r\n\tdocument.getElementById('generateButton').disabled = false\r\n\tdocument.getElementById('result').style.display = 'block'\r\n}\r\n\r\n// добавляем слушатели событий на кнопки 'create' и выбор цвета\r\ndocument.getElementById('generateButton').addEventListener('click', generatePDF)\r\ndocument.addEventListener('DOMContentLoaded', _functions_setupColorSelection_js__WEBPACK_IMPORTED_MODULE_7__.setupColorSelection)\r\n\n\n//# sourceURL=webpack://chrome-extension/./popup.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./popup.js");
/******/ 	
/******/ })()
;