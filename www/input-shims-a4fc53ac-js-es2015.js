(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["input-shims-a4fc53ac-js"],{

/***/ "./node_modules/@ionic/core/dist/esm/input-shims-a4fc53ac.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/input-shims-a4fc53ac.js ***!
  \*******************************************************************/
/*! exports provided: startInputShims */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startInputShims\", function() { return startInputShims; });\n/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-46f4a262.js */ \"./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js\");\n\n\nconst cloneMap = new WeakMap();\r\nconst relocateInput = (componentEl, inputEl, shouldRelocate, inputRelativeY = 0) => {\r\n    if (cloneMap.has(componentEl) === shouldRelocate) {\r\n        return;\r\n    }\r\n    if (shouldRelocate) {\r\n        addClone(componentEl, inputEl, inputRelativeY);\r\n    }\r\n    else {\r\n        removeClone(componentEl, inputEl);\r\n    }\r\n};\r\nconst isFocused = (input) => {\r\n    return input === input.getRootNode().activeElement;\r\n};\r\nconst addClone = (componentEl, inputEl, inputRelativeY) => {\r\n    // this allows for the actual input to receive the focus from\r\n    // the user's touch event, but before it receives focus, it\r\n    // moves the actual input to a location that will not screw\r\n    // up the app's layout, and does not allow the native browser\r\n    // to attempt to scroll the input into place (messing up headers/footers)\r\n    // the cloned input fills the area of where native input should be\r\n    // while the native input fakes out the browser by relocating itself\r\n    // before it receives the actual focus event\r\n    // We hide the focused input (with the visible caret) invisible by making it scale(0),\r\n    const parentEl = inputEl.parentNode;\r\n    // DOM WRITES\r\n    const clonedEl = inputEl.cloneNode(false);\r\n    clonedEl.classList.add('cloned-input');\r\n    clonedEl.tabIndex = -1;\r\n    parentEl.appendChild(clonedEl);\r\n    cloneMap.set(componentEl, clonedEl);\r\n    const doc = componentEl.ownerDocument;\r\n    const tx = doc.dir === 'rtl' ? 9999 : -9999;\r\n    componentEl.style.pointerEvents = 'none';\r\n    inputEl.style.transform = `translate3d(${tx}px,${inputRelativeY}px,0) scale(0)`;\r\n};\r\nconst removeClone = (componentEl, inputEl) => {\r\n    const clone = cloneMap.get(componentEl);\r\n    if (clone) {\r\n        cloneMap.delete(componentEl);\r\n        clone.remove();\r\n    }\r\n    componentEl.style.pointerEvents = '';\r\n    inputEl.style.transform = '';\r\n};\n\nconst enableHideCaretOnScroll = (componentEl, inputEl, scrollEl) => {\r\n    if (!scrollEl || !inputEl) {\r\n        return () => { return; };\r\n    }\r\n    const scrollHideCaret = (shouldHideCaret) => {\r\n        if (isFocused(inputEl)) {\r\n            relocateInput(componentEl, inputEl, shouldHideCaret);\r\n        }\r\n    };\r\n    const onBlur = () => relocateInput(componentEl, inputEl, false);\r\n    const hideCaret = () => scrollHideCaret(true);\r\n    const showCaret = () => scrollHideCaret(false);\r\n    scrollEl.addEventListener('ionScrollStart', hideCaret);\r\n    scrollEl.addEventListener('ionScrollEnd', showCaret);\r\n    inputEl.addEventListener('blur', onBlur);\r\n    return () => {\r\n        scrollEl.removeEventListener('ionScrollStart', hideCaret);\r\n        scrollEl.removeEventListener('ionScrollEnd', showCaret);\r\n        inputEl.addEventListener('ionBlur', onBlur);\r\n    };\r\n};\n\nconst SKIP_SELECTOR = 'input, textarea, [no-blur]';\r\nconst enableInputBlurring = () => {\r\n    let focused = true;\r\n    let didScroll = false;\r\n    const doc = document;\r\n    const onScroll = () => {\r\n        didScroll = true;\r\n    };\r\n    const onFocusin = () => {\r\n        focused = true;\r\n    };\r\n    const onTouchend = (ev) => {\r\n        // if app did scroll return early\r\n        if (didScroll) {\r\n            didScroll = false;\r\n            return;\r\n        }\r\n        const active = doc.activeElement;\r\n        if (!active) {\r\n            return;\r\n        }\r\n        // only blur if the active element is a text-input or a textarea\r\n        if (active.matches(SKIP_SELECTOR)) {\r\n            return;\r\n        }\r\n        // if the selected target is the active element, do not blur\r\n        const tapped = ev.target;\r\n        if (tapped === active) {\r\n            return;\r\n        }\r\n        if (tapped.matches(SKIP_SELECTOR) || tapped.closest(SKIP_SELECTOR)) {\r\n            return;\r\n        }\r\n        focused = false;\r\n        // TODO: find a better way, why 50ms?\r\n        setTimeout(() => {\r\n            if (!focused) {\r\n                active.blur();\r\n            }\r\n        }, 50);\r\n    };\r\n    doc.addEventListener('ionScrollStart', onScroll);\r\n    doc.addEventListener('focusin', onFocusin, true);\r\n    doc.addEventListener('touchend', onTouchend, false);\r\n    return () => {\r\n        doc.removeEventListener('ionScrollStart', onScroll, true);\r\n        doc.removeEventListener('focusin', onFocusin, true);\r\n        doc.removeEventListener('touchend', onTouchend, false);\r\n    };\r\n};\n\nconst SCROLL_ASSIST_SPEED = 0.3;\r\nconst getScrollData = (componentEl, contentEl, keyboardHeight) => {\r\n    const itemEl = componentEl.closest('ion-item,[ion-item]') || componentEl;\r\n    return calcScrollData(itemEl.getBoundingClientRect(), contentEl.getBoundingClientRect(), keyboardHeight, componentEl.ownerDocument.defaultView.innerHeight);\r\n};\r\nconst calcScrollData = (inputRect, contentRect, keyboardHeight, platformHeight) => {\r\n    // compute input's Y values relative to the body\r\n    const inputTop = inputRect.top;\r\n    const inputBottom = inputRect.bottom;\r\n    // compute visible area\r\n    const visibleAreaTop = contentRect.top;\r\n    const visibleAreaBottom = Math.min(contentRect.bottom, platformHeight - keyboardHeight);\r\n    // compute safe area\r\n    const safeAreaTop = visibleAreaTop + 15;\r\n    const safeAreaBottom = visibleAreaBottom * 0.5;\r\n    // figure out if each edge of the input is within the safe area\r\n    const distanceToBottom = safeAreaBottom - inputBottom;\r\n    const distanceToTop = safeAreaTop - inputTop;\r\n    // desiredScrollAmount is the negated distance to the safe area according to our calculations.\r\n    const desiredScrollAmount = Math.round((distanceToBottom < 0)\r\n        ? -distanceToBottom\r\n        : (distanceToTop > 0)\r\n            ? -distanceToTop\r\n            : 0);\r\n    // our calculations make some assumptions that aren't always true, like the keyboard being closed when an input\r\n    // gets focus, so make sure we don't scroll the input above the visible area\r\n    const scrollAmount = Math.min(desiredScrollAmount, inputTop - visibleAreaTop);\r\n    const distance = Math.abs(scrollAmount);\r\n    const duration = distance / SCROLL_ASSIST_SPEED;\r\n    const scrollDuration = Math.min(400, Math.max(150, duration));\r\n    return {\r\n        scrollAmount,\r\n        scrollDuration,\r\n        scrollPadding: keyboardHeight,\r\n        inputSafeY: -(inputTop - safeAreaTop) + 4\r\n    };\r\n};\n\nconst enableScrollAssist = (componentEl, inputEl, contentEl, keyboardHeight) => {\r\n    let coord;\r\n    const touchStart = (ev) => {\r\n        coord = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__[\"p\"])(ev);\r\n    };\r\n    const touchEnd = (ev) => {\r\n        // input cover touchend/mouseup\r\n        if (!coord) {\r\n            return;\r\n        }\r\n        // get where the touchend/mouseup ended\r\n        const endCoord = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__[\"p\"])(ev);\r\n        // focus this input if the pointer hasn't moved XX pixels\r\n        // and the input doesn't already have focus\r\n        if (!hasPointerMoved(6, coord, endCoord) && !isFocused(inputEl)) {\r\n            ev.preventDefault();\r\n            ev.stopPropagation();\r\n            // begin the input focus process\r\n            jsSetFocus(componentEl, inputEl, contentEl, keyboardHeight);\r\n        }\r\n    };\r\n    componentEl.addEventListener('touchstart', touchStart, true);\r\n    componentEl.addEventListener('touchend', touchEnd, true);\r\n    return () => {\r\n        componentEl.removeEventListener('touchstart', touchStart, true);\r\n        componentEl.removeEventListener('touchend', touchEnd, true);\r\n    };\r\n};\r\nconst jsSetFocus = (componentEl, inputEl, contentEl, keyboardHeight) => {\r\n    const scrollData = getScrollData(componentEl, contentEl, keyboardHeight);\r\n    if (Math.abs(scrollData.scrollAmount) < 4) {\r\n        // the text input is in a safe position that doesn't\r\n        // require it to be scrolled into view, just set focus now\r\n        inputEl.focus();\r\n        return;\r\n    }\r\n    // temporarily move the focus to the focus holder so the browser\r\n    // doesn't freak out while it's trying to get the input in place\r\n    // at this point the native text input still does not have focus\r\n    relocateInput(componentEl, inputEl, true, scrollData.inputSafeY);\r\n    inputEl.focus();\r\n    // scroll the input into place\r\n    contentEl.scrollByPoint(0, scrollData.scrollAmount, scrollData.scrollDuration).then(() => {\r\n        // the scroll view is in the correct position now\r\n        // give the native text input focus\r\n        relocateInput(componentEl, inputEl, false, scrollData.inputSafeY);\r\n        // ensure this is the focused input\r\n        inputEl.focus();\r\n    });\r\n};\r\nconst hasPointerMoved = (threshold, startCoord, endCoord) => {\r\n    if (startCoord && endCoord) {\r\n        const deltaX = (startCoord.x - endCoord.x);\r\n        const deltaY = (startCoord.y - endCoord.y);\r\n        const distance = deltaX * deltaX + deltaY * deltaY;\r\n        return distance > (threshold * threshold);\r\n    }\r\n    return false;\r\n};\n\nconst PADDING_TIMER_KEY = '$ionPaddingTimer';\r\nconst enableScrollPadding = (keyboardHeight) => {\r\n    const doc = document;\r\n    const onFocusin = (ev) => {\r\n        setScrollPadding(ev.target, keyboardHeight);\r\n    };\r\n    const onFocusout = (ev) => {\r\n        setScrollPadding(ev.target, 0);\r\n    };\r\n    doc.addEventListener('focusin', onFocusin);\r\n    doc.addEventListener('focusout', onFocusout);\r\n    return () => {\r\n        doc.removeEventListener('focusin', onFocusin);\r\n        doc.removeEventListener('focusout', onFocusout);\r\n    };\r\n};\r\nconst setScrollPadding = (input, keyboardHeight) => {\r\n    if (input.tagName !== 'INPUT') {\r\n        return;\r\n    }\r\n    if (input.parentElement && input.parentElement.tagName === 'ION-INPUT') {\r\n        return;\r\n    }\r\n    if (input.parentElement &&\r\n        input.parentElement.parentElement &&\r\n        input.parentElement.parentElement.tagName === 'ION-SEARCHBAR') {\r\n        return;\r\n    }\r\n    const el = input.closest('ion-content');\r\n    if (el === null) {\r\n        return;\r\n    }\r\n    const timer = el[PADDING_TIMER_KEY];\r\n    if (timer) {\r\n        clearTimeout(timer);\r\n    }\r\n    if (keyboardHeight > 0) {\r\n        el.style.setProperty('--keyboard-offset', `${keyboardHeight}px`);\r\n    }\r\n    else {\r\n        el[PADDING_TIMER_KEY] = setTimeout(() => {\r\n            el.style.setProperty('--keyboard-offset', '0px');\r\n        }, 120);\r\n    }\r\n};\n\nconst INPUT_BLURRING = true;\r\nconst SCROLL_PADDING = true;\r\nconst startInputShims = (config) => {\r\n    const doc = document;\r\n    const keyboardHeight = config.getNumber('keyboardHeight', 290);\r\n    const scrollAssist = config.getBoolean('scrollAssist', true);\r\n    const hideCaret = config.getBoolean('hideCaretOnScroll', true);\r\n    const inputBlurring = config.getBoolean('inputBlurring', true);\r\n    const scrollPadding = config.getBoolean('scrollPadding', true);\r\n    const inputs = Array.from(doc.querySelectorAll('ion-input, ion-textarea'));\r\n    const hideCaretMap = new WeakMap();\r\n    const scrollAssistMap = new WeakMap();\r\n    const registerInput = (componentEl) => {\r\n        const inputEl = (componentEl.shadowRoot || componentEl).querySelector('input') || (componentEl.shadowRoot || componentEl).querySelector('textarea');\r\n        const scrollEl = componentEl.closest('ion-content');\r\n        if (!inputEl) {\r\n            return;\r\n        }\r\n        if ( !!scrollEl && hideCaret && !hideCaretMap.has(componentEl)) {\r\n            const rmFn = enableHideCaretOnScroll(componentEl, inputEl, scrollEl);\r\n            hideCaretMap.set(componentEl, rmFn);\r\n        }\r\n        if ( !!scrollEl && scrollAssist && !scrollAssistMap.has(componentEl)) {\r\n            const rmFn = enableScrollAssist(componentEl, inputEl, scrollEl, keyboardHeight);\r\n            scrollAssistMap.set(componentEl, rmFn);\r\n        }\r\n    };\r\n    const unregisterInput = (componentEl) => {\r\n        if ( hideCaret) {\r\n            const fn = hideCaretMap.get(componentEl);\r\n            if (fn) {\r\n                fn();\r\n            }\r\n            hideCaretMap.delete(componentEl);\r\n        }\r\n        if ( scrollAssist) {\r\n            const fn = scrollAssistMap.get(componentEl);\r\n            if (fn) {\r\n                fn();\r\n            }\r\n            scrollAssistMap.delete(componentEl);\r\n        }\r\n    };\r\n    if (inputBlurring && INPUT_BLURRING) {\r\n        enableInputBlurring();\r\n    }\r\n    if (scrollPadding && SCROLL_PADDING) {\r\n        enableScrollPadding(keyboardHeight);\r\n    }\r\n    // Input might be already loaded in the DOM before ion-device-hacks did.\r\n    // At this point we need to look for all of the inputs not registered yet\r\n    // and register them.\r\n    for (const input of inputs) {\r\n        registerInput(input);\r\n    }\r\n    doc.addEventListener('ionInputDidLoad', ((ev) => {\r\n        registerInput(ev.detail);\r\n    }));\r\n    doc.addEventListener('ionInputDidUnload', ((ev) => {\r\n        unregisterInput(ev.detail);\r\n    }));\r\n};\n\n\n\n\n//# sourceURL=webpack:///./node_modules/@ionic/core/dist/esm/input-shims-a4fc53ac.js?");

/***/ })

}]);