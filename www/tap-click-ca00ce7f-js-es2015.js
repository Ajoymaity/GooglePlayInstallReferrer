(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tap-click-ca00ce7f-js"],{

/***/ "./node_modules/@ionic/core/dist/esm/tap-click-ca00ce7f.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/tap-click-ca00ce7f.js ***!
  \*****************************************************************/
/*! exports provided: startTapClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startTapClick\", function() { return startTapClick; });\n/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-46f4a262.js */ \"./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js\");\n\n\nconst startTapClick = (config) => {\r\n    let lastTouch = -MOUSE_WAIT * 10;\r\n    let lastActivated = 0;\r\n    let scrollingEl;\r\n    let activatableEle;\r\n    let activeRipple;\r\n    let activeDefer;\r\n    const useRippleEffect = config.getBoolean('animated', true) && config.getBoolean('rippleEffect', true);\r\n    const clearDefers = new WeakMap();\r\n    const isScrolling = () => {\r\n        return scrollingEl !== undefined && scrollingEl.parentElement !== null;\r\n    };\r\n    // Touch Events\r\n    const onTouchStart = (ev) => {\r\n        lastTouch = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__[\"n\"])(ev);\r\n        pointerDown(ev);\r\n    };\r\n    const onTouchEnd = (ev) => {\r\n        lastTouch = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__[\"n\"])(ev);\r\n        pointerUp(ev);\r\n    };\r\n    const onMouseDown = (ev) => {\r\n        const t = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__[\"n\"])(ev) - MOUSE_WAIT;\r\n        if (lastTouch < t) {\r\n            pointerDown(ev);\r\n        }\r\n    };\r\n    const onMouseUp = (ev) => {\r\n        const t = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__[\"n\"])(ev) - MOUSE_WAIT;\r\n        if (lastTouch < t) {\r\n            pointerUp(ev);\r\n        }\r\n    };\r\n    const cancelActive = () => {\r\n        clearTimeout(activeDefer);\r\n        activeDefer = undefined;\r\n        if (activatableEle) {\r\n            removeActivated(false);\r\n            activatableEle = undefined;\r\n        }\r\n    };\r\n    const pointerDown = (ev) => {\r\n        if (activatableEle || isScrolling()) {\r\n            return;\r\n        }\r\n        scrollingEl = undefined;\r\n        setActivatedElement(getActivatableTarget(ev), ev);\r\n    };\r\n    const pointerUp = (ev) => {\r\n        setActivatedElement(undefined, ev);\r\n    };\r\n    const setActivatedElement = (el, ev) => {\r\n        // do nothing\r\n        if (el && el === activatableEle) {\r\n            return;\r\n        }\r\n        clearTimeout(activeDefer);\r\n        activeDefer = undefined;\r\n        const { x, y } = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_0__[\"p\"])(ev);\r\n        // deactivate selected\r\n        if (activatableEle) {\r\n            if (clearDefers.has(activatableEle)) {\r\n                throw new Error('internal error');\r\n            }\r\n            if (!activatableEle.classList.contains(ACTIVATED)) {\r\n                addActivated(activatableEle, x, y);\r\n            }\r\n            removeActivated(true);\r\n        }\r\n        // activate\r\n        if (el) {\r\n            const deferId = clearDefers.get(el);\r\n            if (deferId) {\r\n                clearTimeout(deferId);\r\n                clearDefers.delete(el);\r\n            }\r\n            const delay = isInstant(el) ? 0 : ADD_ACTIVATED_DEFERS;\r\n            el.classList.remove(ACTIVATED);\r\n            activeDefer = setTimeout(() => {\r\n                addActivated(el, x, y);\r\n                activeDefer = undefined;\r\n            }, delay);\r\n        }\r\n        activatableEle = el;\r\n    };\r\n    const addActivated = (el, x, y) => {\r\n        lastActivated = Date.now();\r\n        el.classList.add(ACTIVATED);\r\n        const rippleEffect = useRippleEffect && getRippleEffect(el);\r\n        if (rippleEffect && rippleEffect.addRipple) {\r\n            removeRipple();\r\n            activeRipple = rippleEffect.addRipple(x, y);\r\n        }\r\n    };\r\n    const removeRipple = () => {\r\n        if (activeRipple !== undefined) {\r\n            activeRipple.then(remove => remove());\r\n            activeRipple = undefined;\r\n        }\r\n    };\r\n    const removeActivated = (smooth) => {\r\n        removeRipple();\r\n        const active = activatableEle;\r\n        if (!active) {\r\n            return;\r\n        }\r\n        const time = CLEAR_STATE_DEFERS - Date.now() + lastActivated;\r\n        if (smooth && time > 0 && !isInstant(active)) {\r\n            const deferId = setTimeout(() => {\r\n                active.classList.remove(ACTIVATED);\r\n                clearDefers.delete(active);\r\n            }, CLEAR_STATE_DEFERS);\r\n            clearDefers.set(active, deferId);\r\n        }\r\n        else {\r\n            active.classList.remove(ACTIVATED);\r\n        }\r\n    };\r\n    const doc = document;\r\n    doc.addEventListener('ionScrollStart', ev => {\r\n        scrollingEl = ev.target;\r\n        cancelActive();\r\n    });\r\n    doc.addEventListener('ionScrollEnd', () => {\r\n        scrollingEl = undefined;\r\n    });\r\n    doc.addEventListener('ionGestureCaptured', cancelActive);\r\n    doc.addEventListener('touchstart', onTouchStart, true);\r\n    doc.addEventListener('touchcancel', onTouchEnd, true);\r\n    doc.addEventListener('touchend', onTouchEnd, true);\r\n    doc.addEventListener('mousedown', onMouseDown, true);\r\n    doc.addEventListener('mouseup', onMouseUp, true);\r\n};\r\nconst getActivatableTarget = (ev) => {\r\n    if (ev.composedPath) {\r\n        const path = ev.composedPath();\r\n        for (let i = 0; i < path.length - 2; i++) {\r\n            const el = path[i];\r\n            if (el.classList && el.classList.contains('ion-activatable')) {\r\n                return el;\r\n            }\r\n        }\r\n    }\r\n    else {\r\n        return ev.target.closest('.ion-activatable');\r\n    }\r\n};\r\nconst isInstant = (el) => {\r\n    return el.classList.contains('ion-activatable-instant');\r\n};\r\nconst getRippleEffect = (el) => {\r\n    if (el.shadowRoot) {\r\n        const ripple = el.shadowRoot.querySelector('ion-ripple-effect');\r\n        if (ripple) {\r\n            return ripple;\r\n        }\r\n    }\r\n    return el.querySelector('ion-ripple-effect');\r\n};\r\nconst ACTIVATED = 'activated';\r\nconst ADD_ACTIVATED_DEFERS = 200;\r\nconst CLEAR_STATE_DEFERS = 200;\r\nconst MOUSE_WAIT = 2500;\n\n\n\n\n//# sourceURL=webpack:///./node_modules/@ionic/core/dist/esm/tap-click-ca00ce7f.js?");

/***/ })

}]);