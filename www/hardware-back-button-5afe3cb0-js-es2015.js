(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hardware-back-button-5afe3cb0-js"],{

/***/ "./node_modules/@ionic/core/dist/esm/hardware-back-button-5afe3cb0.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/hardware-back-button-5afe3cb0.js ***!
  \****************************************************************************/
/*! exports provided: startHardwareBackButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startHardwareBackButton\", function() { return startHardwareBackButton; });\nconst startHardwareBackButton = () => {\r\n    const doc = document;\r\n    let busy = false;\r\n    doc.addEventListener('backbutton', () => {\r\n        if (busy) {\r\n            return;\r\n        }\r\n        const handlers = [];\r\n        const ev = new CustomEvent('ionBackButton', {\r\n            bubbles: false,\r\n            detail: {\r\n                register(priority, handler) {\r\n                    handlers.push({ priority, handler });\r\n                }\r\n            }\r\n        });\r\n        doc.dispatchEvent(ev);\r\n        if (handlers.length > 0) {\r\n            let selectedPriority = Number.MIN_SAFE_INTEGER;\r\n            let selectedHandler;\r\n            handlers.forEach(({ priority, handler }) => {\r\n                if (priority >= selectedPriority) {\r\n                    selectedPriority = priority;\r\n                    selectedHandler = handler;\r\n                }\r\n            });\r\n            busy = true;\r\n            executeAction(selectedHandler).then(() => busy = false);\r\n        }\r\n    });\r\n};\r\nconst executeAction = async (handler) => {\r\n    try {\r\n        if (handler) {\r\n            const result = handler();\r\n            if (result != null) {\r\n                await result;\r\n            }\r\n        }\r\n    }\r\n    catch (e) {\r\n        console.error(e);\r\n    }\r\n};\n\n\n\n\n//# sourceURL=webpack:///./node_modules/@ionic/core/dist/esm/hardware-back-button-5afe3cb0.js?");

/***/ })

}]);