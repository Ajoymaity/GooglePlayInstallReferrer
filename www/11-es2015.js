(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js ***!
  \*********************************************************************/
/*! exports provided: ion_backdrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ion_backdrop\", function() { return Backdrop; });\n/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ \"./node_modules/@ionic/core/dist/esm/core-feeeff0d.js\");\n/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ \"./node_modules/@ionic/core/dist/esm/config-3c7f3790.js\");\n/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ \"./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js\");\n/* harmony import */ var _index_624eea58_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-624eea58.js */ \"./node_modules/@ionic/core/dist/esm/index-624eea58.js\");\n\n\n\n\n\nconst Backdrop = class {\n    constructor(hostRef) {\n        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this, hostRef);\n        this.lastClick = -10000;\n        this.blocker = _index_624eea58_js__WEBPACK_IMPORTED_MODULE_3__[\"GESTURE_CONTROLLER\"].createBlocker({\n            disableScroll: true\n        });\n        /**\n         * If `true`, the backdrop will be visible.\n         */\n        this.visible = true;\n        /**\n         * If `true`, the backdrop will can be clicked and will emit the `ionBackdropTap` event.\n         */\n        this.tappable = true;\n        /**\n         * If `true`, the backdrop will stop propagation on tap.\n         */\n        this.stopPropagation = true;\n        this.ionBackdropTap = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"d\"])(this, \"ionBackdropTap\", 7);\n    }\n    connectedCallback() {\n        if (this.stopPropagation) {\n            this.blocker.block();\n        }\n    }\n    disconnectedCallback() {\n        this.blocker.unblock();\n    }\n    onTouchStart(ev) {\n        this.lastClick = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__[\"n\"])(ev);\n        this.emitTap(ev);\n    }\n    onMouseDown(ev) {\n        if (this.lastClick < Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__[\"n\"])(ev) - 2500) {\n            this.emitTap(ev);\n        }\n    }\n    emitTap(ev) {\n        if (this.stopPropagation) {\n            ev.preventDefault();\n            ev.stopPropagation();\n        }\n        if (this.tappable) {\n            this.ionBackdropTap.emit();\n        }\n    }\n    render() {\n        const mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"c\"])(this);\n        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"H\"], { tabindex: \"-1\", class: {\n                [mode]: true,\n                'backdrop-hide': !this.visible,\n                'backdrop-no-tappable': !this.tappable,\n            } }));\n    }\n    static get style() { return \":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color,#000)}\"; }\n};\n\n\n\n\n//# sourceURL=webpack:///./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js?");

/***/ })

}]);