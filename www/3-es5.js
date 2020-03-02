(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-action-sheet-ios.entry.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-action-sheet-ios.entry.js ***!
  \*****************************************************************************/
/*! exports provided: ion_action_sheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ion_action_sheet\", function() { return ActionSheet; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ \"./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js\");\n/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ \"./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js\");\n/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-46f4a262.js */ \"./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js\");\n/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animation-af478fe9.js */ \"./node_modules/@ionic/core/dist/esm-es5/animation-af478fe9.js\");\n/* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overlays-10640d86.js */ \"./node_modules/@ionic/core/dist/esm-es5/overlays-10640d86.js\");\n/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ \"./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js\");\n\n\n\n\n\n\n\n/**\n * iOS Action Sheet Enter Animation\n */\nvar iosEnterAnimation = function (baseEl) {\n    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__[\"c\"])();\n    var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__[\"c\"])();\n    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__[\"c\"])();\n    backdropAnimation\n        .addElement(baseEl.querySelector('ion-backdrop'))\n        .fromTo('opacity', 0.01, 0.4);\n    wrapperAnimation\n        .addElement(baseEl.querySelector('.action-sheet-wrapper'))\n        .fromTo('transform', 'translateY(100%)', 'translateY(0%)');\n    return baseAnimation\n        .addElement(baseEl)\n        .easing('cubic-bezier(.36,.66,.04,1)')\n        .duration(400)\n        .addAnimation([backdropAnimation, wrapperAnimation]);\n};\n/**\n * iOS Action Sheet Leave Animation\n */\nvar iosLeaveAnimation = function (baseEl) {\n    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__[\"c\"])();\n    var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__[\"c\"])();\n    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__[\"c\"])();\n    backdropAnimation\n        .addElement(baseEl.querySelector('ion-backdrop'))\n        .fromTo('opacity', 0.4, 0);\n    wrapperAnimation\n        .addElement(baseEl.querySelector('.action-sheet-wrapper'))\n        .fromTo('transform', 'translateY(0%)', 'translateY(100%)');\n    return baseAnimation\n        .addElement(baseEl)\n        .easing('cubic-bezier(.36,.66,.04,1)')\n        .duration(450)\n        .addAnimation([backdropAnimation, wrapperAnimation]);\n};\n/**\n * MD Action Sheet Enter Animation\n */\nvar mdEnterAnimation = function (baseEl) {\n    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__[\"c\"])();\n    var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__[\"c\"])();\n    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__[\"c\"])();\n    backdropAnimation\n        .addElement(baseEl.querySelector('ion-backdrop'))\n        .fromTo('opacity', 0.01, 0.32);\n    wrapperAnimation\n        .addElement(baseEl.querySelector('.action-sheet-wrapper'))\n        .fromTo('transform', 'translateY(100%)', 'translateY(0%)');\n    return baseAnimation\n        .addElement(baseEl)\n        .easing('cubic-bezier(.36,.66,.04,1)')\n        .duration(400)\n        .addAnimation([backdropAnimation, wrapperAnimation]);\n};\n/**\n * MD Action Sheet Leave Animation\n */\nvar mdLeaveAnimation = function (baseEl) {\n    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__[\"c\"])();\n    var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__[\"c\"])();\n    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__[\"c\"])();\n    backdropAnimation\n        .addElement(baseEl.querySelector('ion-backdrop'))\n        .fromTo('opacity', 0.32, 0);\n    wrapperAnimation\n        .addElement(baseEl.querySelector('.action-sheet-wrapper'))\n        .fromTo('transform', 'translateY(0%)', 'translateY(100%)');\n    return baseAnimation\n        .addElement(baseEl)\n        .easing('cubic-bezier(.36,.66,.04,1)')\n        .duration(450)\n        .addAnimation([backdropAnimation, wrapperAnimation]);\n};\nvar ActionSheet = /** @class */ (function () {\n    function class_1(hostRef) {\n        var _this = this;\n        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"r\"])(this, hostRef);\n        this.presented = false;\n        this.mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"c\"])(this);\n        /**\n         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.\n         */\n        this.keyboardClose = true;\n        /**\n         * An array of buttons for the action sheet.\n         */\n        this.buttons = [];\n        /**\n         * If `true`, the action sheet will be dismissed when the backdrop is clicked.\n         */\n        this.backdropDismiss = true;\n        /**\n         * If `true`, the action sheet will be translucent.\n         * Only applies when the mode is `\"ios\"` and the device supports\n         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).\n         */\n        this.translucent = false;\n        /**\n         * If `true`, the action sheet will animate.\n         */\n        this.animated = true;\n        this.onBackdropTap = function () {\n            _this.dismiss(undefined, _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__[\"B\"]);\n        };\n        this.dispatchCancelHandler = function (ev) {\n            var role = ev.detail.role;\n            if (Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__[\"i\"])(role)) {\n                var cancelButton = _this.getButtons().find(function (b) { return b.role === 'cancel'; });\n                _this.callButtonHandler(cancelButton);\n            }\n        };\n        Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__[\"d\"])(this.el);\n        this.didPresent = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"d\"])(this, \"ionActionSheetDidPresent\", 7);\n        this.willPresent = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"d\"])(this, \"ionActionSheetWillPresent\", 7);\n        this.willDismiss = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"d\"])(this, \"ionActionSheetWillDismiss\", 7);\n        this.didDismiss = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"d\"])(this, \"ionActionSheetDidDismiss\", 7);\n    }\n    /**\n     * Present the action sheet overlay after it has been created.\n     */\n    class_1.prototype.present = function () {\n        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__[\"e\"])(this, 'actionSheetEnter', iosEnterAnimation, mdEnterAnimation);\n    };\n    /**\n     * Dismiss the action sheet overlay after it has been presented.\n     *\n     * @param data Any data to emit in the dismiss events.\n     * @param role The role of the element that is dismissing the action sheet.\n     * This can be useful in a button handler for determining which button was\n     * clicked to dismiss the action sheet.\n     * Some examples include: ``\"cancel\"`, `\"destructive\"`, \"selected\"`, and `\"backdrop\"`.\n     */\n    class_1.prototype.dismiss = function (data, role) {\n        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__[\"f\"])(this, data, role, 'actionSheetLeave', iosLeaveAnimation, mdLeaveAnimation);\n    };\n    /**\n     * Returns a promise that resolves when the action sheet did dismiss.\n     */\n    class_1.prototype.onDidDismiss = function () {\n        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__[\"g\"])(this.el, 'ionActionSheetDidDismiss');\n    };\n    /**\n     * Returns a promise that resolves when the action sheet will dismiss.\n     *\n     */\n    class_1.prototype.onWillDismiss = function () {\n        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__[\"g\"])(this.el, 'ionActionSheetWillDismiss');\n    };\n    class_1.prototype.buttonClick = function (button) {\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function () {\n            var role, shouldDismiss;\n            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        role = button.role;\n                        if (Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__[\"i\"])(role)) {\n                            return [2 /*return*/, this.dismiss(undefined, role)];\n                        }\n                        return [4 /*yield*/, this.callButtonHandler(button)];\n                    case 1:\n                        shouldDismiss = _a.sent();\n                        if (shouldDismiss) {\n                            return [2 /*return*/, this.dismiss(undefined, button.role)];\n                        }\n                        return [2 /*return*/, Promise.resolve()];\n                }\n            });\n        });\n    };\n    class_1.prototype.callButtonHandler = function (button) {\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function () {\n            var rtn;\n            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        if (!button) return [3 /*break*/, 2];\n                        return [4 /*yield*/, Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_5__[\"s\"])(button.handler)];\n                    case 1:\n                        rtn = _a.sent();\n                        if (rtn === false) {\n                            // if the return value of the handler is false then do not dismiss\n                            return [2 /*return*/, false];\n                        }\n                        _a.label = 2;\n                    case 2: return [2 /*return*/, true];\n                }\n            });\n        });\n    };\n    class_1.prototype.getButtons = function () {\n        return this.buttons.map(function (b) {\n            return (typeof b === 'string')\n                ? { text: b }\n                : b;\n        });\n    };\n    class_1.prototype.render = function () {\n        var _a;\n        var _this = this;\n        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"c\"])(this);\n        var allButtons = this.getButtons();\n        var cancelButton = allButtons.find(function (b) { return b.role === 'cancel'; });\n        var buttons = allButtons.filter(function (b) { return b.role !== 'cancel'; });\n        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"h\"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"H\"], { role: \"dialog\", \"aria-modal\": \"true\", style: {\n                zIndex: \"\" + (20000 + this.overlayIndex),\n            }, class: Object.assign(Object.assign((_a = {}, _a[mode] = true, _a), Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__[\"g\"])(this.cssClass)), { 'action-sheet-translucent': this.translucent }), onIonActionSheetWillDismiss: this.dispatchCancelHandler, onIonBackdropTap: this.onBackdropTap }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"h\"])(\"ion-backdrop\", { tappable: this.backdropDismiss }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"h\"])(\"div\", { class: \"action-sheet-wrapper\", role: \"dialog\" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"h\"])(\"div\", { class: \"action-sheet-container\" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"h\"])(\"div\", { class: \"action-sheet-group\" }, this.header !== undefined &&\n            Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"h\"])(\"div\", { class: \"action-sheet-title\" }, this.header, this.subHeader && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"h\"])(\"div\", { class: \"action-sheet-sub-title\" }, this.subHeader)), buttons.map(function (b) { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"h\"])(\"button\", { type: \"button\", \"ion-activatable\": true, class: buttonClass(b), onClick: function () { return _this.buttonClick(b); } }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"h\"])(\"span\", { class: \"action-sheet-button-inner\" }, b.icon && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"h\"])(\"ion-icon\", { icon: b.icon, lazy: false, class: \"action-sheet-icon\" }), b.text), mode === 'md' && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"h\"])(\"ion-ripple-effect\", null)); })), cancelButton &&\n            Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"h\"])(\"div\", { class: \"action-sheet-group action-sheet-group-cancel\" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"h\"])(\"button\", { type: \"button\", class: buttonClass(cancelButton), onClick: function () { return _this.buttonClick(cancelButton); } }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"h\"])(\"span\", { class: \"action-sheet-button-inner\" }, cancelButton.icon &&\n                Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"h\"])(\"ion-icon\", { icon: cancelButton.icon, lazy: false, class: \"action-sheet-icon\" }), cancelButton.text)))))));\n    };\n    Object.defineProperty(class_1.prototype, \"el\", {\n        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"e\"])(this); },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(class_1, \"style\", {\n        get: function () { return \".sc-ion-action-sheet-ios-h{--color:initial;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;font-family:var(--ion-font-family,inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-ios-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-ios{left:0;right:0;bottom:0;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios{display:block;width:100%;border:0;outline:none;font-family:inherit}.action-sheet-button.activated.sc-ion-action-sheet-ios{background:var(--background-activated)}.action-sheet-button-inner.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.action-sheet-container.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-ios{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-ios{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.sc-ion-action-sheet-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--background-selected:var(--ion-background-color,#fff);--background-activated:rgba(var(--ion-text-color-rgb,0,0,0),0.08);text-align:center}.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:auto;margin-right:auto;margin-top:var(--ion-safe-area-top,0);margin-bottom:var(--ion-safe-area-bottom,0)}\\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-container.sc-ion-action-sheet-ios{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0}\\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-container.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.action-sheet-group.sc-ion-action-sheet-ios{border-radius:13px;margin-bottom:8px;overflow:hidden}.action-sheet-group.sc-ion-action-sheet-ios:first-child{margin-top:10px}.action-sheet-group.sc-ion-action-sheet-ios:last-child{margin-bottom:10px}\\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-group.sc-ion-action-sheet-ios{background-color:transparent;-webkit-backdrop-filter:saturate(280%) blur(20px);backdrop-filter:saturate(280%) blur(20px)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.sc-ion-action-sheet-ios, .action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-title.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(var(--ion-background-color-rgb,255,255,255),.8)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8))),-webkit-gradient(linear,left bottom,left top,from(rgba(var(--ion-background-color-rgb,255,255,255),.4)),color-stop(50%,rgba(var(--ion-background-color-rgb,255,255,255),.4)),color-stop(50%,rgba(var(--ion-background-color-rgb,255,255,255),.8)));background-image:linear-gradient(0deg,rgba(var(--ion-background-color-rgb,255,255,255),.8),rgba(var(--ion-background-color-rgb,255,255,255),.8) 100%),linear-gradient(0deg,rgba(var(--ion-background-color-rgb,255,255,255),.4),rgba(var(--ion-background-color-rgb,255,255,255),.4) 50%,rgba(var(--ion-background-color-rgb,255,255,255),.8) 0);background-repeat:no-repeat;background-position:top,bottom;background-size:100% calc(100% - 1px),100% 1px;-webkit-backdrop-filter:saturate(120%);backdrop-filter:saturate(120%)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.activated.sc-ion-action-sheet-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.7);background-image:none}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--background-selected)}}.action-sheet-button.sc-ion-action-sheet-ios, .action-sheet-title.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(var(--ion-text-color-rgb,0,0,0),.08)),color-stop(50%,rgba(var(--ion-text-color-rgb,0,0,0),.08)),color-stop(50%,transparent));background-image:linear-gradient(0deg,rgba(var(--ion-text-color-rgb,0,0,0),.08),rgba(var(--ion-text-color-rgb,0,0,0),.08) 50%,transparent 0);background-repeat:no-repeat;background-position:bottom;background-size:100% 1px}.action-sheet-title.sc-ion-action-sheet-ios{padding-left:10px;padding-right:10px;padding-top:14px;padding-bottom:13px;color:var(--color,var(--ion-color-step-400,#999));font-size:13px;font-weight:400;text-align:center}\\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-title.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}.action-sheet-sub-title.sc-ion-action-sheet-ios{padding-left:0;padding-right:0;padding-top:15px;padding-bottom:0;font-size:12px}.action-sheet-button.sc-ion-action-sheet-ios{padding-left:18px;padding-right:18px;padding-top:18px;padding-bottom:18px;height:56px;color:var(--color,var(--ion-color-primary,#3880ff));font-size:20px;contain:strict}\\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-button.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:18px;padding-inline-start:18px;-webkit-padding-end:18px;padding-inline-end:18px}}.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:.1em;font-size:28px}\\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:unset;-webkit-margin-end:.1em;margin-inline-end:.1em}}.action-sheet-button.sc-ion-action-sheet-ios:last-child{background-image:none}.action-sheet-selected.sc-ion-action-sheet-ios{background:var(--background-selected);font-weight:700}.action-sheet-destructive.sc-ion-action-sheet-ios{color:var(--ion-color-danger,#f04141)}.action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--background-selected);font-weight:600}\"; },\n        enumerable: true,\n        configurable: true\n    });\n    return class_1;\n}());\nvar buttonClass = function (button) {\n    var _a;\n    return Object.assign((_a = { 'action-sheet-button': true, 'ion-activatable': true }, _a[\"action-sheet-\" + button.role] = button.role !== undefined, _a), Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__[\"g\"])(button.cssClass));\n};\n\n\n\n//# sourceURL=webpack:///./node_modules/@ionic/core/dist/esm-es5/ion-action-sheet-ios.entry.js?");

/***/ })

}]);