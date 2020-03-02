(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js ***!
  \*********************************************************************/
/*! exports provided: ion_searchbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ion_searchbar\", function() { return Searchbar; });\n/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ \"./node_modules/@ionic/core/dist/esm/core-feeeff0d.js\");\n/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ \"./node_modules/@ionic/core/dist/esm/config-3c7f3790.js\");\n/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ \"./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js\");\n/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ \"./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js\");\n/* harmony import */ var _index_3476b023_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-3476b023.js */ \"./node_modules/@ionic/core/dist/esm/index-3476b023.js\");\n\n\n\n\n\n\nconst Searchbar = class {\n    constructor(hostRef) {\n        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this, hostRef);\n        this.isCancelVisible = false;\n        this.shouldAlignLeft = true;\n        this.focused = false;\n        this.noAnimate = true;\n        /**\n         * If `true`, enable searchbar animation.\n         */\n        this.animated = false;\n        /**\n         * Set the input's autocomplete property.\n         */\n        this.autocomplete = 'off';\n        /**\n         * Set the input's autocorrect property.\n         */\n        this.autocorrect = 'off';\n        /**\n         * Set the cancel button icon. Only applies to `md` mode.\n         */\n        this.cancelButtonIcon = 'md-arrow-back';\n        /**\n         * Set the the cancel button text. Only applies to `ios` mode.\n         */\n        this.cancelButtonText = 'Cancel';\n        /**\n         * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.\n         */\n        this.debounce = 250;\n        /**\n         * If `true`, the user cannot interact with the input.\n         */\n        this.disabled = false;\n        /**\n         * A hint to the browser for which keyboard to display.\n         * Possible values: `\"none\"`, `\"text\"`, `\"tel\"`, `\"url\"`,\n         * `\"email\"`, `\"numeric\"`, `\"decimal\"`, and `\"search\"`.\n         */\n        this.inputmode = 'search';\n        /**\n         * Set the input's placeholder.\n         * `placeholder` can accept either plaintext or HTML as a string.\n         * To display characters normally reserved for HTML, they\n         * must be escaped. For example `<Ionic>` would become\n         * `&lt;Ionic&gt;`\n         *\n         * For more information: [Security Documentation](https://ionicframework.com/docs/faq/security)\n         */\n        this.placeholder = 'Search';\n        /**\n         * The icon to use as the search icon.\n         */\n        this.searchIcon = 'search';\n        /**\n         * Sets the behavior for the cancel button. Defaults to `\"never\"`.\n         * Setting to `\"focus\"` shows the cancel button on focus.\n         * Setting to `\"never\"` hides the cancel button.\n         * Setting to `\"always\"` shows the cancel button regardless\n         * of focus state.\n         */\n        this.showCancelButton = 'never';\n        /**\n         * If `true`, enable spellcheck on the input.\n         */\n        this.spellcheck = false;\n        /**\n         * Set the type of the input.\n         */\n        this.type = 'search';\n        /**\n         * the value of the searchbar.\n         */\n        this.value = '';\n        /**\n         * Clears the input field and triggers the control change.\n         */\n        this.onClearInput = (ev) => {\n            this.ionClear.emit();\n            if (ev) {\n                ev.preventDefault();\n                ev.stopPropagation();\n            }\n            // setTimeout() fixes https://github.com/ionic-team/ionic/issues/7527\n            // wait for 4 frames\n            setTimeout(() => {\n                const value = this.getValue();\n                if (value !== '') {\n                    this.value = '';\n                    this.ionInput.emit();\n                }\n            }, 16 * 4);\n        };\n        /**\n         * Clears the input field and tells the input to blur since\n         * the clearInput function doesn't want the input to blur\n         * then calls the custom cancel function if the user passed one in.\n         */\n        this.onCancelSearchbar = (ev) => {\n            if (ev) {\n                ev.preventDefault();\n                ev.stopPropagation();\n            }\n            this.ionCancel.emit();\n            this.onClearInput();\n            if (this.nativeInput) {\n                this.nativeInput.blur();\n            }\n        };\n        /**\n         * Update the Searchbar input value when the input changes\n         */\n        this.onInput = (ev) => {\n            const input = ev.target;\n            if (input) {\n                this.value = input.value;\n            }\n            this.ionInput.emit(ev);\n        };\n        /**\n         * Sets the Searchbar to not focused and checks if it should align left\n         * based on whether there is a value in the searchbar or not.\n         */\n        this.onBlur = () => {\n            this.focused = false;\n            this.ionBlur.emit();\n            this.positionElements();\n        };\n        /**\n         * Sets the Searchbar to focused and active on input focus.\n         */\n        this.onFocus = () => {\n            this.focused = true;\n            this.ionFocus.emit();\n            this.positionElements();\n        };\n        this.ionInput = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"d\"])(this, \"ionInput\", 7);\n        this.ionChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"d\"])(this, \"ionChange\", 7);\n        this.ionCancel = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"d\"])(this, \"ionCancel\", 7);\n        this.ionClear = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"d\"])(this, \"ionClear\", 7);\n        this.ionBlur = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"d\"])(this, \"ionBlur\", 7);\n        this.ionFocus = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"d\"])(this, \"ionFocus\", 7);\n        this.ionStyle = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"d\"])(this, \"ionStyle\", 7);\n    }\n    debounceChanged() {\n        this.ionChange = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__[\"d\"])(this.ionChange, this.debounce);\n    }\n    valueChanged() {\n        const inputEl = this.nativeInput;\n        const value = this.getValue();\n        if (inputEl && inputEl.value !== value) {\n            inputEl.value = value;\n        }\n        this.ionChange.emit({ value });\n    }\n    showCancelButtonChanged() {\n        requestAnimationFrame(() => {\n            this.positionElements();\n            this.el.forceUpdate();\n        });\n    }\n    connectedCallback() {\n        this.emitStyle();\n    }\n    componentDidLoad() {\n        if (this.showCancelButton === 'false' || this.showCancelButton === false) {\n            console.warn('The boolean values of showCancelButton are deprecated. Please use \"never\" instead of \"false\".');\n        }\n        if (this.showCancelButton === '' || this.showCancelButton === 'true' || this.showCancelButton === true) {\n            console.warn('The boolean values of showCancelButton are deprecated. Please use \"focus\" instead of \"true\".');\n        }\n        this.positionElements();\n        this.debounceChanged();\n        setTimeout(() => {\n            this.noAnimate = false;\n        }, 300);\n    }\n    emitStyle() {\n        this.ionStyle.emit({\n            'searchbar': true\n        });\n    }\n    /**\n     * Sets focus on the specified `ion-searchbar`. Use this method instead of the global\n     * `input.focus()`.\n     */\n    async setFocus() {\n        if (this.nativeInput) {\n            this.nativeInput.focus();\n        }\n    }\n    /**\n     * Returns the native `<input>` element used under the hood.\n     */\n    getInputElement() {\n        return Promise.resolve(this.nativeInput);\n    }\n    /**\n     * Positions the input search icon, placeholder, and the cancel button\n     * based on the input value and if it is focused. (ios only)\n     */\n    positionElements() {\n        const value = this.getValue();\n        const prevAlignLeft = this.shouldAlignLeft;\n        const mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"c\"])(this);\n        const shouldAlignLeft = (!this.animated || value.trim() !== '' || !!this.focused);\n        this.shouldAlignLeft = shouldAlignLeft;\n        if (mode !== 'ios') {\n            return;\n        }\n        if (prevAlignLeft !== shouldAlignLeft) {\n            this.positionPlaceholder();\n        }\n        if (this.animated) {\n            this.positionCancelButton();\n        }\n    }\n    /**\n     * Positions the input placeholder\n     */\n    positionPlaceholder() {\n        const inputEl = this.nativeInput;\n        if (!inputEl) {\n            return;\n        }\n        const isRTL = document.dir === 'rtl';\n        const iconEl = (this.el.shadowRoot || this.el).querySelector('.searchbar-search-icon');\n        if (this.shouldAlignLeft) {\n            inputEl.removeAttribute('style');\n            iconEl.removeAttribute('style');\n        }\n        else {\n            // Create a dummy span to get the placeholder width\n            const doc = document;\n            const tempSpan = doc.createElement('span');\n            tempSpan.innerHTML = Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_4__[\"s\"])(this.placeholder) || '';\n            doc.body.appendChild(tempSpan);\n            // Get the width of the span then remove it\n            const textWidth = tempSpan.offsetWidth;\n            tempSpan.remove();\n            // Calculate the input padding\n            const inputLeft = 'calc(50% - ' + (textWidth / 2) + 'px)';\n            // Calculate the icon margin\n            const iconLeft = 'calc(50% - ' + ((textWidth / 2) + 30) + 'px)';\n            // Set the input padding start and icon margin start\n            if (isRTL) {\n                inputEl.style.paddingRight = inputLeft;\n                iconEl.style.marginRight = iconLeft;\n            }\n            else {\n                inputEl.style.paddingLeft = inputLeft;\n                iconEl.style.marginLeft = iconLeft;\n            }\n        }\n    }\n    /**\n     * Show the iOS Cancel button on focus, hide it offscreen otherwise\n     */\n    positionCancelButton() {\n        const isRTL = document.dir === 'rtl';\n        const cancelButton = (this.el.shadowRoot || this.el).querySelector('.searchbar-cancel-button');\n        const shouldShowCancel = this.shouldShowCancelButton();\n        if (cancelButton && shouldShowCancel !== this.isCancelVisible) {\n            const cancelStyle = cancelButton.style;\n            this.isCancelVisible = shouldShowCancel;\n            if (shouldShowCancel) {\n                if (isRTL) {\n                    cancelStyle.marginLeft = '0';\n                }\n                else {\n                    cancelStyle.marginRight = '0';\n                }\n            }\n            else {\n                const offset = cancelButton.offsetWidth;\n                if (offset > 0) {\n                    if (isRTL) {\n                        cancelStyle.marginLeft = -offset + 'px';\n                    }\n                    else {\n                        cancelStyle.marginRight = -offset + 'px';\n                    }\n                }\n            }\n        }\n    }\n    getValue() {\n        return this.value || '';\n    }\n    hasValue() {\n        return this.getValue() !== '';\n    }\n    /**\n     * Determines whether or not the cancel button should be visible onscreen.\n     * Cancel button should be shown if one of two conditions applies:\n     * 1. `showCancelButton` is set to `always`.\n     * 2. `showCancelButton` is set to `focus`, and the searchbar has been focused.\n     */\n    shouldShowCancelButton() {\n        if (isCancelButtonSetToNever(this.showCancelButton) ||\n            (isCancelButtonSetToFocus(this.showCancelButton) && !this.focused)) {\n            return false;\n        }\n        return true;\n    }\n    render() {\n        const animated = this.animated && _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__[\"b\"].getBoolean('animated', true);\n        const mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"c\"])(this);\n        const clearIcon = this.clearIcon || (mode === 'ios' ? 'ios-close-circle' : 'md-close');\n        const searchIcon = this.searchIcon;\n        const cancelButton = !isCancelButtonSetToNever(this.showCancelButton) && (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"button\", { \"aria-label\": \"cancel\", type: \"button\", tabIndex: mode === 'ios' && !this.shouldShowCancelButton() ? -1 : undefined, onMouseDown: this.onCancelSearchbar, onTouchStart: this.onCancelSearchbar, class: \"searchbar-cancel-button\" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"div\", null, mode === 'md'\n            ? Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"ion-icon\", { \"aria-hidden\": \"true\", mode: mode, icon: this.cancelButtonIcon, lazy: false })\n            : this.cancelButtonText)));\n        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"H\"], { role: \"search\", \"aria-disabled\": this.disabled ? 'true' : null, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__[\"c\"])(this.color)), { [mode]: true, 'searchbar-animated': animated, 'searchbar-disabled': this.disabled, 'searchbar-no-animate': animated && this.noAnimate, 'searchbar-has-value': this.hasValue(), 'searchbar-left-aligned': this.shouldAlignLeft, 'searchbar-has-focus': this.focused, 'searchbar-should-show-cancel': this.shouldShowCancelButton() }) }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"div\", { class: \"searchbar-input-container\" }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"input\", { \"aria-label\": \"search text\", disabled: this.disabled, ref: el => this.nativeInput = el, class: \"searchbar-input\", inputMode: this.inputmode, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, placeholder: this.placeholder, type: this.type, value: this.getValue(), autoComplete: this.autocomplete, autoCorrect: this.autocorrect, spellCheck: this.spellcheck }), mode === 'md' && cancelButton, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"ion-icon\", { mode: mode, icon: searchIcon, lazy: false, class: \"searchbar-search-icon\" }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"button\", { \"aria-label\": \"reset\", type: \"button\", \"no-blur\": true, class: \"searchbar-clear-button\", onMouseDown: this.onClearInput, onTouchStart: this.onClearInput }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"ion-icon\", { \"aria-hidden\": \"true\", mode: mode, icon: clearIcon, lazy: false, class: \"searchbar-clear-icon\" }))), mode === 'ios' && cancelButton));\n    }\n    get el() { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"e\"])(this); }\n    static get watchers() { return {\n        \"debounce\": [\"debounceChanged\"],\n        \"value\": [\"valueChanged\"],\n        \"showCancelButton\": [\"showCancelButtonChanged\"]\n    }; }\n    static get style() { return \".sc-ion-searchbar-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-md-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, .ion-color.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md, .ion-color.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{color:inherit}.searchbar-search-icon.sc-ion-searchbar-md{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-md{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-md{font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-clear, .searchbar-input.sc-ion-searchbar-md::-webkit-search-cancel-button{display:none}.searchbar-cancel-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-md > div.sc-ion-searchbar-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md{display:block}.searchbar-disabled.sc-ion-searchbar-md-h{cursor:default;opacity:.4;pointer-events:none}.sc-ion-searchbar-md-h{--clear-button-color:initial;--cancel-button-color:var(--ion-color-step-900,#1a1a1a);--color:var(--ion-color-step-850,#262626);--icon-color:var(--ion-color-step-600,#666);--background:var(--ion-background-color,#fff);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;background:inherit}\\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-searchbar-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.searchbar-search-icon.sc-ion-searchbar-md{left:16px;top:11px;width:21px;height:21px}[dir=rtl].sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-search-icon.sc-ion-searchbar-md{left:unset;right:unset;right:16px}.searchbar-cancel-button.sc-ion-searchbar-md{left:5px;top:0;background-color:transparent;font-size:1.6em}[dir=rtl].sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-cancel-button.sc-ion-searchbar-md{left:unset;right:unset;right:5px}.searchbar-cancel-button.sc-ion-searchbar-md, .searchbar-search-icon.sc-ion-searchbar-md{position:absolute}.searchbar-cancel-button.activated.sc-ion-searchbar-md, .searchbar-search-icon.activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-input.sc-ion-searchbar-md{padding-left:55px;padding-right:55px;padding-top:6px;padding-bottom:6px;border-radius:2px;background-position:left 8px center;height:auto;font-size:16px;font-weight:400;line-height:30px;-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}\\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-input.sc-ion-searchbar-md{padding-left:unset;padding-right:unset;-webkit-padding-start:55px;padding-inline-start:55px;-webkit-padding-end:55px;padding-inline-end:55px}}[dir=rtl].sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-input.sc-ion-searchbar-md{background-position:right 8px center}.searchbar-clear-button.sc-ion-searchbar-md{right:13px;top:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;position:absolute;height:100%;border:0;background-color:transparent}[dir=rtl].sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md, [dir=rtl] .sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md, [dir=rtl].sc-ion-searchbar-md .searchbar-clear-button.sc-ion-searchbar-md{left:unset;right:unset;left:13px}.searchbar-clear-button.activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-clear-icon.sc-ion-searchbar-md{width:22px;height:100%}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md, .searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md, .searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md + .searchbar-search-icon.sc-ion-searchbar-md, .searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md + .searchbar-search-icon.sc-ion-searchbar-md{display:none}ion-toolbar.sc-ion-searchbar-md-h, ion-toolbar .sc-ion-searchbar-md-h{padding-left:7px;padding-right:7px;padding-top:3px;padding-bottom:3px}\\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-toolbar.sc-ion-searchbar-md-h, ion-toolbar .sc-ion-searchbar-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:7px;padding-inline-start:7px;-webkit-padding-end:7px;padding-inline-end:7px}}\"; }\n};\n/**\n * Check if the cancel button should never be shown.\n *\n * TODO: Remove this when the `true` and `false`\n * options are removed.\n */\nconst isCancelButtonSetToNever = (showCancelButton) => {\n    return (showCancelButton === 'never' ||\n        showCancelButton === 'false' ||\n        showCancelButton === false);\n};\n/**\n * Check if the cancel button should be shown on focus.\n *\n * TODO: Remove this when the `true` and `false`\n * options are removed.\n */\nconst isCancelButtonSetToFocus = (showCancelButton) => {\n    return (showCancelButton === 'focus' ||\n        showCancelButton === 'true' ||\n        showCancelButton === true ||\n        showCancelButton === '');\n};\n\n\n\n\n//# sourceURL=webpack:///./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js?");

/***/ })

}]);