(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["md-transition-fea2bbfb-js"],{

/***/ "./node_modules/@ionic/core/dist/esm/md.transition-fea2bbfb.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/md.transition-fea2bbfb.js ***!
  \*********************************************************************/
/*! exports provided: mdTransitionAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mdTransitionAnimation\", function() { return mdTransitionAnimation; });\n/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ \"./node_modules/@ionic/core/dist/esm/core-feeeff0d.js\");\n/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ \"./node_modules/@ionic/core/dist/esm/config-3c7f3790.js\");\n/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ \"./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js\");\n/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation-af478fe9.js */ \"./node_modules/@ionic/core/dist/esm/animation-af478fe9.js\");\n/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-3c3e1099.js */ \"./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js\");\n/* harmony import */ var _index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-4d91f03a.js */ \"./node_modules/@ionic/core/dist/esm/index-4d91f03a.js\");\n\n\n\n\n\n\n\nconst mdTransitionAnimation = (_, opts) => {\r\n    const OFF_BOTTOM = '40px';\r\n    const CENTER = '0px';\r\n    const backDirection = (opts.direction === 'back');\r\n    const enteringEl = opts.enteringEl;\r\n    const leavingEl = opts.leavingEl;\r\n    const ionPageElement = Object(_index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_5__[\"g\"])(enteringEl);\r\n    const enteringToolbarEle = ionPageElement.querySelector('ion-toolbar');\r\n    const rootTransition = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__[\"c\"])();\r\n    rootTransition\r\n        .addElement(ionPageElement)\r\n        .fill('both')\r\n        .beforeRemoveClass('ion-page-invisible');\r\n    // animate the component itself\r\n    if (backDirection) {\r\n        rootTransition\r\n            .duration(opts.duration || 200)\r\n            .easing('cubic-bezier(0.47,0,0.745,0.715)');\r\n    }\r\n    else {\r\n        rootTransition\r\n            .duration(opts.duration || 280)\r\n            .easing('cubic-bezier(0.36,0.66,0.04,1)')\r\n            .fromTo('transform', `translateY(${OFF_BOTTOM})`, `translateY(${CENTER})`)\r\n            .fromTo('opacity', 0.01, 1);\r\n    }\r\n    // Animate toolbar if it's there\r\n    if (enteringToolbarEle) {\r\n        const enteringToolBar = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__[\"c\"])();\r\n        enteringToolBar.addElement(enteringToolbarEle);\r\n        rootTransition.addAnimation(enteringToolBar);\r\n    }\r\n    // setup leaving view\r\n    if (leavingEl && backDirection) {\r\n        // leaving content\r\n        rootTransition\r\n            .duration(opts.duration || 200)\r\n            .easing('cubic-bezier(0.47,0,0.745,0.715)');\r\n        const leavingPage = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__[\"c\"])();\r\n        leavingPage\r\n            .addElement(Object(_index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_5__[\"g\"])(leavingEl))\r\n            .afterStyles({ 'display': 'none' })\r\n            .fromTo('transform', `translateY(${CENTER})`, `translateY(${OFF_BOTTOM})`)\r\n            .fromTo('opacity', 1, 0);\r\n        rootTransition.addAnimation(leavingPage);\r\n    }\r\n    return rootTransition;\r\n};\n\n\n\n\n//# sourceURL=webpack:///./node_modules/@ionic/core/dist/esm/md.transition-fea2bbfb.js?");

/***/ })

}]);