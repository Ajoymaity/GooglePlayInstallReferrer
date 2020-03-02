(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-tap-32c72c43-js"],{

/***/ "./node_modules/@ionic/core/dist/esm/status-tap-32c72c43.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/status-tap-32c72c43.js ***!
  \******************************************************************/
/*! exports provided: startStatusTap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startStatusTap\", function() { return startStatusTap; });\n/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ \"./node_modules/@ionic/core/dist/esm/core-feeeff0d.js\");\n/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ \"./node_modules/@ionic/core/dist/esm/config-3c7f3790.js\");\n\n\n\nconst startStatusTap = () => {\r\n    const win = window;\r\n    win.addEventListener('statusTap', () => {\r\n        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"f\"])(() => {\r\n            const width = win.innerWidth;\r\n            const height = win.innerHeight;\r\n            const el = document.elementFromPoint(width / 2, height / 2);\r\n            if (!el) {\r\n                return;\r\n            }\r\n            const contentEl = el.closest('ion-content');\r\n            if (contentEl) {\r\n                contentEl.componentOnReady().then(() => {\r\n                    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"w\"])(() => contentEl.scrollToTop(300));\r\n                });\r\n            }\r\n        });\r\n    });\r\n};\n\n\n\n\n//# sourceURL=webpack:///./node_modules/@ionic/core/dist/esm/status-tap-32c72c43.js?");

/***/ })

}]);