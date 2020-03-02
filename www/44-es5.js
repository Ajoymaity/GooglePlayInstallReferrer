(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-popover-ios.entry.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-popover-ios.entry.js ***!
  \************************************************************************/
/*! exports provided: ion_popover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ion_popover\", function() { return Popover; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-feeeff0d.js */ \"./node_modules/@ionic/core/dist/esm-es5/core-feeeff0d.js\");\n/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ \"./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js\");\n/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-46f4a262.js */ \"./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js\");\n/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animation-af478fe9.js */ \"./node_modules/@ionic/core/dist/esm-es5/animation-af478fe9.js\");\n/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-3c3e1099.js */ \"./node_modules/@ionic/core/dist/esm-es5/constants-3c3e1099.js\");\n/* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overlays-10640d86.js */ \"./node_modules/@ionic/core/dist/esm-es5/overlays-10640d86.js\");\n/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ \"./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js\");\n/* harmony import */ var _framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./framework-delegate-c2e2e1f4.js */ \"./node_modules/@ionic/core/dist/esm-es5/framework-delegate-c2e2e1f4.js\");\n/* harmony import */ var _index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index-4d91f03a.js */ \"./node_modules/@ionic/core/dist/esm-es5/index-4d91f03a.js\");\n\n\n\n\n\n\n\n\n\n\n/**\n * iOS Popover Enter Animation\n */\nvar iosEnterAnimation = function (baseEl, ev) {\n    var originY = 'top';\n    var originX = 'left';\n    var contentEl = baseEl.querySelector('.popover-content');\n    var contentDimentions = contentEl.getBoundingClientRect();\n    var contentWidth = contentDimentions.width;\n    var contentHeight = contentDimentions.height;\n    var bodyWidth = baseEl.ownerDocument.defaultView.innerWidth;\n    var bodyHeight = baseEl.ownerDocument.defaultView.innerHeight;\n    // If ev was passed, use that for target element\n    var targetDim = ev && ev.target && ev.target.getBoundingClientRect();\n    var targetTop = targetDim != null && 'top' in targetDim ? targetDim.top : bodyHeight / 2 - contentHeight / 2;\n    var targetLeft = targetDim != null && 'left' in targetDim ? targetDim.left : bodyWidth / 2;\n    var targetWidth = (targetDim && targetDim.width) || 0;\n    var targetHeight = (targetDim && targetDim.height) || 0;\n    var arrowEl = baseEl.querySelector('.popover-arrow');\n    var arrowDim = arrowEl.getBoundingClientRect();\n    var arrowWidth = arrowDim.width;\n    var arrowHeight = arrowDim.height;\n    if (targetDim == null) {\n        arrowEl.style.display = 'none';\n    }\n    var arrowCSS = {\n        top: targetTop + targetHeight,\n        left: targetLeft + targetWidth / 2 - arrowWidth / 2\n    };\n    var popoverCSS = {\n        top: targetTop + targetHeight + (arrowHeight - 1),\n        left: targetLeft + targetWidth / 2 - contentWidth / 2\n    };\n    // If the popover left is less than the padding it is off screen\n    // to the left so adjust it, else if the width of the popover\n    // exceeds the body width it is off screen to the right so adjust\n    //\n    var checkSafeAreaLeft = false;\n    var checkSafeAreaRight = false;\n    // If the popover left is less than the padding it is off screen\n    // to the left so adjust it, else if the width of the popover\n    // exceeds the body width it is off screen to the right so adjust\n    // 25 is a random/arbitrary number. It seems to work fine for ios11\n    // and iPhoneX. Is it perfect? No. Does it work? Yes.\n    if (popoverCSS.left < POPOVER_IOS_BODY_PADDING + 25) {\n        checkSafeAreaLeft = true;\n        popoverCSS.left = POPOVER_IOS_BODY_PADDING;\n    }\n    else if (contentWidth + POPOVER_IOS_BODY_PADDING + popoverCSS.left + 25 > bodyWidth) {\n        // Ok, so we're on the right side of the screen,\n        // but now we need to make sure we're still a bit further right\n        // cus....notchurally... Again, 25 is random. It works tho\n        checkSafeAreaRight = true;\n        popoverCSS.left = bodyWidth - contentWidth - POPOVER_IOS_BODY_PADDING;\n        originX = 'right';\n    }\n    // make it pop up if there's room above\n    if (targetTop + targetHeight + contentHeight > bodyHeight && targetTop - contentHeight > 0) {\n        arrowCSS.top = targetTop - (arrowHeight + 1);\n        popoverCSS.top = targetTop - contentHeight - (arrowHeight - 1);\n        baseEl.className = baseEl.className + ' popover-bottom';\n        originY = 'bottom';\n        // If there isn't room for it to pop up above the target cut it off\n    }\n    else if (targetTop + targetHeight + contentHeight > bodyHeight) {\n        contentEl.style.bottom = POPOVER_IOS_BODY_PADDING + '%';\n    }\n    arrowEl.style.top = arrowCSS.top + 'px';\n    arrowEl.style.left = arrowCSS.left + 'px';\n    contentEl.style.top = popoverCSS.top + 'px';\n    contentEl.style.left = popoverCSS.left + 'px';\n    if (checkSafeAreaLeft) {\n        contentEl.style.left = \"calc(\" + popoverCSS.left + \"px + var(--ion-safe-area-left, 0px))\";\n    }\n    if (checkSafeAreaRight) {\n        contentEl.style.left = \"calc(\" + popoverCSS.left + \"px - var(--ion-safe-area-right, 0px))\";\n    }\n    contentEl.style.transformOrigin = originY + ' ' + originX;\n    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__[\"c\"])();\n    var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__[\"c\"])();\n    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__[\"c\"])();\n    backdropAnimation\n        .addElement(baseEl.querySelector('ion-backdrop'))\n        .fromTo('opacity', 0.01, 0.08);\n    wrapperAnimation\n        .addElement(baseEl.querySelector('.popover-wrapper'))\n        .fromTo('opacity', 0.01, 1);\n    return baseAnimation\n        .addElement(baseEl)\n        .easing('ease')\n        .duration(100)\n        .addAnimation([backdropAnimation, wrapperAnimation]);\n};\nvar POPOVER_IOS_BODY_PADDING = 5;\n/**\n * iOS Popover Leave Animation\n */\nvar iosLeaveAnimation = function (baseEl) {\n    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__[\"c\"])();\n    var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__[\"c\"])();\n    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__[\"c\"])();\n    backdropAnimation\n        .addElement(baseEl.querySelector('ion-backdrop'))\n        .fromTo('opacity', 0.08, 0);\n    wrapperAnimation\n        .addElement(baseEl.querySelector('.popover-wrapper'))\n        .fromTo('opacity', 0.99, 0);\n    return baseAnimation\n        .addElement(baseEl)\n        .easing('ease')\n        .duration(500)\n        .addAnimation([backdropAnimation, wrapperAnimation]);\n};\n/**\n * Md Popover Enter Animation\n */\nvar mdEnterAnimation = function (baseEl, ev) {\n    var POPOVER_MD_BODY_PADDING = 12;\n    var doc = baseEl.ownerDocument;\n    var isRTL = doc.dir === 'rtl';\n    var originY = 'top';\n    var originX = isRTL ? 'right' : 'left';\n    var contentEl = baseEl.querySelector('.popover-content');\n    var contentDimentions = contentEl.getBoundingClientRect();\n    var contentWidth = contentDimentions.width;\n    var contentHeight = contentDimentions.height;\n    var bodyWidth = doc.defaultView.innerWidth;\n    var bodyHeight = doc.defaultView.innerHeight;\n    // If ev was passed, use that for target element\n    var targetDim = ev && ev.target && ev.target.getBoundingClientRect();\n    // As per MD spec, by default position the popover below the target (trigger) element\n    var targetTop = targetDim != null && 'bottom' in targetDim\n        ? targetDim.bottom\n        : bodyHeight / 2 - contentHeight / 2;\n    var targetLeft = targetDim != null && 'left' in targetDim\n        ? isRTL\n            ? targetDim.left - contentWidth + targetDim.width\n            : targetDim.left\n        : bodyWidth / 2 - contentWidth / 2;\n    var targetHeight = (targetDim && targetDim.height) || 0;\n    var popoverCSS = {\n        top: targetTop,\n        left: targetLeft\n    };\n    // If the popover left is less than the padding it is off screen\n    // to the left so adjust it, else if the width of the popover\n    // exceeds the body width it is off screen to the right so adjust\n    if (popoverCSS.left < POPOVER_MD_BODY_PADDING) {\n        popoverCSS.left = POPOVER_MD_BODY_PADDING;\n        // Same origin in this case for both LTR & RTL\n        // Note: in LTR, originX is already 'left'\n        originX = 'left';\n    }\n    else if (contentWidth + POPOVER_MD_BODY_PADDING + popoverCSS.left >\n        bodyWidth) {\n        popoverCSS.left = bodyWidth - contentWidth - POPOVER_MD_BODY_PADDING;\n        // Same origin in this case for both LTR & RTL\n        // Note: in RTL, originX is already 'right'\n        originX = 'right';\n    }\n    // If the popover when popped down stretches past bottom of screen,\n    // make it pop up if there's room above\n    if (targetTop + targetHeight + contentHeight > bodyHeight &&\n        targetTop - contentHeight > 0) {\n        popoverCSS.top = targetTop - contentHeight - targetHeight;\n        baseEl.className = baseEl.className + ' popover-bottom';\n        originY = 'bottom';\n        // If there isn't room for it to pop up above the target cut it off\n    }\n    else if (targetTop + targetHeight + contentHeight > bodyHeight) {\n        contentEl.style.bottom = POPOVER_MD_BODY_PADDING + 'px';\n    }\n    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__[\"c\"])();\n    var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__[\"c\"])();\n    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__[\"c\"])();\n    var contentAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__[\"c\"])();\n    var viewportAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__[\"c\"])();\n    backdropAnimation\n        .addElement(baseEl.querySelector('ion-backdrop'))\n        .fromTo('opacity', 0.01, 0.32);\n    wrapperAnimation\n        .addElement(baseEl.querySelector('.popover-wrapper'))\n        .fromTo('opacity', 0.01, 1);\n    contentAnimation\n        .addElement(contentEl)\n        .beforeStyles({\n        'top': popoverCSS.top + \"px\",\n        'left': popoverCSS.left + \"px\",\n        'transform-origin': originY + \" \" + originX\n    })\n        .fromTo('transform', 'scale(0.001)', 'scale(1)');\n    viewportAnimation\n        .addElement(baseEl.querySelector('.popover-viewport'))\n        .fromTo('opacity', 0.01, 1);\n    return baseAnimation\n        .addElement(baseEl)\n        .easing('cubic-bezier(0.36,0.66,0.04,1)')\n        .duration(300)\n        .addAnimation([backdropAnimation, wrapperAnimation, contentAnimation, viewportAnimation]);\n};\n/**\n * Md Popover Leave Animation\n */\nvar mdLeaveAnimation = function (baseEl) {\n    var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__[\"c\"])();\n    var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__[\"c\"])();\n    var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_4__[\"c\"])();\n    backdropAnimation\n        .addElement(baseEl.querySelector('ion-backdrop'))\n        .fromTo('opacity', 0.32, 0);\n    wrapperAnimation\n        .addElement(baseEl.querySelector('.popover-wrapper'))\n        .fromTo('opacity', 0.99, 0);\n    return baseAnimation\n        .addElement(baseEl)\n        .easing('ease')\n        .duration(500)\n        .addAnimation([backdropAnimation, wrapperAnimation]);\n};\nvar Popover = /** @class */ (function () {\n    function class_1(hostRef) {\n        var _this = this;\n        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"r\"])(this, hostRef);\n        this.presented = false;\n        this.mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"c\"])(this);\n        /**\n         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.\n         */\n        this.keyboardClose = true;\n        /**\n         * If `true`, the popover will be dismissed when the backdrop is clicked.\n         */\n        this.backdropDismiss = true;\n        /**\n         * If `true`, a backdrop will be displayed behind the popover.\n         */\n        this.showBackdrop = true;\n        /**\n         * If `true`, the popover will be translucent.\n         * Only applies when the mode is `\"ios\"` and the device supports\n         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).\n         */\n        this.translucent = false;\n        /**\n         * If `true`, the popover will animate.\n         */\n        this.animated = true;\n        this.onDismiss = function (ev) {\n            ev.stopPropagation();\n            ev.preventDefault();\n            _this.dismiss();\n        };\n        this.onBackdropTap = function () {\n            _this.dismiss(undefined, _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__[\"B\"]);\n        };\n        this.onLifecycle = function (modalEvent) {\n            var el = _this.usersElement;\n            var name = LIFECYCLE_MAP[modalEvent.type];\n            if (el && name) {\n                var event = new CustomEvent(name, {\n                    bubbles: false,\n                    cancelable: false,\n                    detail: modalEvent.detail\n                });\n                el.dispatchEvent(event);\n            }\n        };\n        Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__[\"d\"])(this.el);\n        this.didPresent = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"d\"])(this, \"ionPopoverDidPresent\", 7);\n        this.willPresent = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"d\"])(this, \"ionPopoverWillPresent\", 7);\n        this.willDismiss = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"d\"])(this, \"ionPopoverWillDismiss\", 7);\n        this.didDismiss = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"d\"])(this, \"ionPopoverDidDismiss\", 7);\n    }\n    /**\n     * Present the popover overlay after it has been created.\n     */\n    class_1.prototype.present = function () {\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function () {\n            var container, data, _a;\n            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_b) {\n                switch (_b.label) {\n                    case 0:\n                        if (this.presented) {\n                            return [2 /*return*/];\n                        }\n                        container = this.el.querySelector('.popover-content');\n                        if (!container) {\n                            throw new Error('container is undefined');\n                        }\n                        data = Object.assign(Object.assign({}, this.componentProps), { popover: this.el });\n                        _a = this;\n                        return [4 /*yield*/, Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_8__[\"a\"])(this.delegate, container, this.component, ['popover-viewport', this.el['s-sc']], data)];\n                    case 1:\n                        _a.usersElement = _b.sent();\n                        return [4 /*yield*/, Object(_index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_9__[\"d\"])(this.usersElement)];\n                    case 2:\n                        _b.sent();\n                        return [2 /*return*/, Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__[\"e\"])(this, 'popoverEnter', iosEnterAnimation, mdEnterAnimation, this.event)];\n                }\n            });\n        });\n    };\n    /**\n     * Dismiss the popover overlay after it has been presented.\n     *\n     * @param data Any data to emit in the dismiss events.\n     * @param role The role of the element that is dismissing the popover. For example, 'cancel' or 'backdrop'.\n     */\n    class_1.prototype.dismiss = function (data, role) {\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function () {\n            var shouldDismiss;\n            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__[\"f\"])(this, data, role, 'popoverLeave', iosLeaveAnimation, mdLeaveAnimation, this.event)];\n                    case 1:\n                        shouldDismiss = _a.sent();\n                        if (!shouldDismiss) return [3 /*break*/, 3];\n                        return [4 /*yield*/, Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_8__[\"d\"])(this.delegate, this.usersElement)];\n                    case 2:\n                        _a.sent();\n                        _a.label = 3;\n                    case 3: return [2 /*return*/, shouldDismiss];\n                }\n            });\n        });\n    };\n    /**\n     * Returns a promise that resolves when the popover did dismiss.\n     */\n    class_1.prototype.onDidDismiss = function () {\n        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__[\"g\"])(this.el, 'ionPopoverDidDismiss');\n    };\n    /**\n     * Returns a promise that resolves when the popover will dismiss.\n     */\n    class_1.prototype.onWillDismiss = function () {\n        return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_6__[\"g\"])(this.el, 'ionPopoverWillDismiss');\n    };\n    class_1.prototype.render = function () {\n        var _a;\n        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"c\"])(this);\n        var onLifecycle = this.onLifecycle;\n        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"h\"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"H\"], { \"aria-modal\": \"true\", \"no-router\": true, style: {\n                zIndex: \"\" + (20000 + this.overlayIndex),\n            }, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_7__[\"g\"])(this.cssClass)), (_a = {}, _a[mode] = true, _a['popover-translucent'] = this.translucent, _a)), onIonPopoverDidPresent: onLifecycle, onIonPopoverWillPresent: onLifecycle, onIonPopoverWillDismiss: onLifecycle, onIonPopoverDidDismiss: onLifecycle, onIonDismiss: this.onDismiss, onIonBackdropTap: this.onBackdropTap }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"h\"])(\"ion-backdrop\", { tappable: this.backdropDismiss, visible: this.showBackdrop }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"h\"])(\"div\", { class: \"popover-wrapper\" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"h\"])(\"div\", { class: \"popover-arrow\" }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"h\"])(\"div\", { class: \"popover-content\" }))));\n    };\n    Object.defineProperty(class_1.prototype, \"el\", {\n        get: function () { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_1__[\"e\"])(this); },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(class_1, \"style\", {\n        get: function () { return \".sc-ion-popover-ios-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios:after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:\\\"\\\";z-index:10}[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios:after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after{top:-6px}\\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}\"; },\n        enumerable: true,\n        configurable: true\n    });\n    return class_1;\n}());\nvar LIFECYCLE_MAP = {\n    'ionPopoverDidPresent': 'ionViewDidEnter',\n    'ionPopoverWillPresent': 'ionViewWillEnter',\n    'ionPopoverWillDismiss': 'ionViewWillLeave',\n    'ionPopoverDidDismiss': 'ionViewDidLeave',\n};\n\n\n\n//# sourceURL=webpack:///./node_modules/@ionic/core/dist/esm-es5/ion-popover-ios.entry.js?");

/***/ })

}]);