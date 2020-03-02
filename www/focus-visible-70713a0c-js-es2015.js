(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["focus-visible-70713a0c-js"],{

/***/ "./node_modules/@ionic/core/dist/esm/focus-visible-70713a0c.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-70713a0c.js ***!
  \*********************************************************************/
/*! exports provided: startFocusVisible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startFocusVisible\", function() { return startFocusVisible; });\nconst ION_FOCUSED = 'ion-focused';\r\nconst ION_FOCUSABLE = 'ion-focusable';\r\nconst FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp'];\r\nconst startFocusVisible = () => {\r\n    let currentFocus = [];\r\n    let keyboardMode = true;\r\n    const doc = document;\r\n    const setFocus = (elements) => {\r\n        currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));\r\n        elements.forEach(el => el.classList.add(ION_FOCUSED));\r\n        currentFocus = elements;\r\n    };\r\n    const pointerDown = () => {\r\n        keyboardMode = false;\r\n        setFocus([]);\r\n    };\r\n    doc.addEventListener('keydown', ev => {\r\n        keyboardMode = FOCUS_KEYS.includes(ev.key);\r\n        if (!keyboardMode) {\r\n            setFocus([]);\r\n        }\r\n    });\r\n    doc.addEventListener('focusin', ev => {\r\n        if (keyboardMode && ev.composedPath) {\r\n            const toFocus = ev.composedPath().filter((el) => {\r\n                if (el.classList) {\r\n                    return el.classList.contains(ION_FOCUSABLE);\r\n                }\r\n                return false;\r\n            });\r\n            setFocus(toFocus);\r\n        }\r\n    });\r\n    doc.addEventListener('focusout', () => {\r\n        if (doc.activeElement === doc.body) {\r\n            setFocus([]);\r\n        }\r\n    });\r\n    doc.addEventListener('touchstart', pointerDown);\r\n    doc.addEventListener('mousedown', pointerDown);\r\n};\n\n\n\n\n//# sourceURL=webpack:///./node_modules/@ionic/core/dist/esm/focus-visible-70713a0c.js?");

/***/ })

}]);