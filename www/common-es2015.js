(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js ***!
  \********************************************************************/
/*! exports provided: P, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"P\", function() { return Point; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"g\", function() { return getTimeGivenProgression; });\n/**\r\n * Based on:\r\n * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier\r\n * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves\r\n * TODO: Reduce rounding error\r\n */\r\nclass Point {\r\n    constructor(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n}\r\n/**\r\n * Given a cubic-bezier curve, get the x value (time) given\r\n * the y value (progression).\r\n * Ex: cubic-bezier(0.32, 0.72, 0, 1);\r\n * P0: (0, 0)\r\n * P1: (0.32, 0.72)\r\n * P2: (0, 1)\r\n * P3: (1, 1)\r\n *\r\n * If you give a cubic bezier curve that never reaches the\r\n * provided progression, this function will return NaN.\r\n */\r\nconst getTimeGivenProgression = (p0, p1, p2, p3, progression) => {\r\n    const tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);\r\n    return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions\r\n};\r\n/**\r\n * Solve a cubic equation in one dimension (time)\r\n */\r\nconst solveCubicParametricEquation = (p0, p1, p2, p3, t) => {\r\n    const partA = (3 * p1) * Math.pow(t - 1, 2);\r\n    const partB = (-3 * p2 * t) + (3 * p2) + (p3 * t);\r\n    const partC = p0 * Math.pow(t - 1, 3);\r\n    return t * (partA + (t * partB)) - partC;\r\n};\r\n/**\r\n * Find the `t` value for a cubic bezier using Cardano's formula\r\n */\r\nconst solveCubicBezier = (p0, p1, p2, p3, refPoint) => {\r\n    p0 -= refPoint;\r\n    p1 -= refPoint;\r\n    p2 -= refPoint;\r\n    p3 -= refPoint;\r\n    const roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);\r\n    return roots.filter(root => root >= 0 && root <= 1);\r\n};\r\nconst solveQuadraticEquation = (a, b, c) => {\r\n    const discriminant = b * b - 4 * a * c;\r\n    if (discriminant < 0) {\r\n        return [];\r\n    }\r\n    else {\r\n        return [\r\n            (-b + Math.sqrt(discriminant)) / (2 * a),\r\n            (-b - Math.sqrt(discriminant)) / (2 * a)\r\n        ];\r\n    }\r\n};\r\nconst solveCubicEquation = (a, b, c, d) => {\r\n    if (a === 0) {\r\n        return solveQuadraticEquation(b, c, d);\r\n    }\r\n    b /= a;\r\n    c /= a;\r\n    d /= a;\r\n    const p = (3 * c - b * b) / 3;\r\n    const q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;\r\n    if (p === 0) {\r\n        return [Math.pow(-q, 1 / 3)];\r\n    }\r\n    else if (q === 0) {\r\n        return [Math.sqrt(-p), -Math.sqrt(-p)];\r\n    }\r\n    const discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);\r\n    if (discriminant === 0) {\r\n        return [Math.pow(q / 2, 1 / 2) - b / 3];\r\n    }\r\n    else if (discriminant > 0) {\r\n        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow((q / 2) + Math.sqrt(discriminant), 1 / 3) - b / 3];\r\n    }\r\n    const r = Math.sqrt(Math.pow(-(p / 3), 3));\r\n    const phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));\r\n    const s = 2 * Math.pow(r, 1 / 3);\r\n    return [\r\n        s * Math.cos(phi / 3) - b / 3,\r\n        s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,\r\n        s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3\r\n    ];\r\n};\n\n\n\n\n//# sourceURL=webpack:///./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js?");

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return attachComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return detachComponent; });\nconst attachComponent = async (delegate, container, component, cssClasses, componentProps) => {\r\n    if (delegate) {\r\n        return delegate.attachViewToDom(container, component, componentProps, cssClasses);\r\n    }\r\n    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {\r\n        throw new Error('framework delegate is missing');\r\n    }\r\n    const el = (typeof component === 'string')\r\n        ? container.ownerDocument && container.ownerDocument.createElement(component)\r\n        : component;\r\n    if (cssClasses) {\r\n        cssClasses.forEach(c => el.classList.add(c));\r\n    }\r\n    if (componentProps) {\r\n        Object.assign(el, componentProps);\r\n    }\r\n    container.appendChild(el);\r\n    if (el.componentOnReady) {\r\n        await el.componentOnReady();\r\n    }\r\n    return el;\r\n};\r\nconst detachComponent = (delegate, element) => {\r\n    if (element) {\r\n        if (delegate) {\r\n            const container = element.parentElement;\r\n            return delegate.removeViewFromDom(container, element);\r\n        }\r\n        element.remove();\r\n    }\r\n    return Promise.resolve();\r\n};\n\n\n\n\n//# sourceURL=webpack:///./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js?");

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return hapticSelectionStart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return hapticSelectionChanged; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return hapticSelectionEnd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return hapticSelection; });\n/**\r\n * Check to see if the Haptic Plugin is available\r\n * @return Returns `true` or false if the plugin is available\r\n */\r\n/**\r\n * Trigger a selection changed haptic event. Good for one-time events\r\n * (not for gestures)\r\n */\r\nconst hapticSelection = () => {\r\n    const engine = window.TapticEngine;\r\n    if (engine) {\r\n        engine.selection();\r\n    }\r\n};\r\n/**\r\n * Tell the haptic engine that a gesture for a selection change is starting.\r\n */\r\nconst hapticSelectionStart = () => {\r\n    const engine = window.TapticEngine;\r\n    if (engine) {\r\n        engine.gestureSelectionStart();\r\n    }\r\n};\r\n/**\r\n * Tell the haptic engine that a selection changed during a gesture.\r\n */\r\nconst hapticSelectionChanged = () => {\r\n    const engine = window.TapticEngine;\r\n    if (engine) {\r\n        engine.gestureSelectionChanged();\r\n    }\r\n};\r\n/**\r\n * Tell the haptic engine we are done with a gesture. This needs to be\r\n * called lest resources are not properly recycled.\r\n */\r\nconst hapticSelectionEnd = () => {\r\n    const engine = window.TapticEngine;\r\n    if (engine) {\r\n        engine.gestureSelectionEnd();\r\n    }\r\n};\n\n\n\n\n//# sourceURL=webpack:///./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js?");

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/index-3476b023.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3476b023.js ***!
  \*************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"s\", function() { return sanitizeDOMString; });\n/**\r\n * Does a simple sanitization of all elements\r\n * in an untrusted string\r\n */\r\nconst sanitizeDOMString = (untrustedString) => {\r\n    try {\r\n        if (typeof untrustedString !== 'string' || untrustedString === '') {\r\n            return untrustedString;\r\n        }\r\n        /**\r\n         * Create a document fragment\r\n         * separate from the main DOM,\r\n         * create a div to do our work in\r\n         */\r\n        const documentFragment = document.createDocumentFragment();\r\n        const workingDiv = document.createElement('div');\r\n        documentFragment.appendChild(workingDiv);\r\n        workingDiv.innerHTML = untrustedString;\r\n        /**\r\n         * Remove any elements\r\n         * that are blocked\r\n         */\r\n        blockedTags.forEach(blockedTag => {\r\n            const getElementsToRemove = documentFragment.querySelectorAll(blockedTag);\r\n            for (let elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {\r\n                const element = getElementsToRemove[elementIndex];\r\n                if (element.parentNode) {\r\n                    element.parentNode.removeChild(element);\r\n                }\r\n                else {\r\n                    documentFragment.removeChild(element);\r\n                }\r\n                /**\r\n                 * We still need to sanitize\r\n                 * the children of this element\r\n                 * as they are left behind\r\n                 */\r\n                const childElements = getElementChildren(element);\r\n                /* tslint:disable-next-line */\r\n                for (let childIndex = 0; childIndex < childElements.length; childIndex++) {\r\n                    sanitizeElement(childElements[childIndex]);\r\n                }\r\n            }\r\n        });\r\n        /**\r\n         * Go through remaining elements and remove\r\n         * non-allowed attribs\r\n         */\r\n        // IE does not support .children on document fragments, only .childNodes\r\n        const dfChildren = getElementChildren(documentFragment);\r\n        /* tslint:disable-next-line */\r\n        for (let childIndex = 0; childIndex < dfChildren.length; childIndex++) {\r\n            sanitizeElement(dfChildren[childIndex]);\r\n        }\r\n        // Append document fragment to div\r\n        const fragmentDiv = document.createElement('div');\r\n        fragmentDiv.appendChild(documentFragment);\r\n        // First child is always the div we did our work in\r\n        const getInnerDiv = fragmentDiv.querySelector('div');\r\n        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;\r\n    }\r\n    catch (err) {\r\n        console.error(err);\r\n        return '';\r\n    }\r\n};\r\n/**\r\n * Clean up current element based on allowed attributes\r\n * and then recursively dig down into any child elements to\r\n * clean those up as well\r\n */\r\nconst sanitizeElement = (element) => {\r\n    // IE uses childNodes, so ignore nodes that are not elements\r\n    if (element.nodeType && element.nodeType !== 1) {\r\n        return;\r\n    }\r\n    for (let i = element.attributes.length - 1; i >= 0; i--) {\r\n        const attribute = element.attributes.item(i);\r\n        const attributeName = attribute.name;\r\n        // remove non-allowed attribs\r\n        if (!allowedAttributes.includes(attributeName.toLowerCase())) {\r\n            element.removeAttribute(attributeName);\r\n            continue;\r\n        }\r\n        // clean up any allowed attribs\r\n        // that attempt to do any JS funny-business\r\n        const attributeValue = attribute.value;\r\n        /* tslint:disable-next-line */\r\n        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {\r\n            element.removeAttribute(attributeName);\r\n        }\r\n    }\r\n    /**\r\n     * Sanitize any nested children\r\n     */\r\n    const childElements = getElementChildren(element);\r\n    /* tslint:disable-next-line */\r\n    for (let i = 0; i < childElements.length; i++) {\r\n        sanitizeElement(childElements[i]);\r\n    }\r\n};\r\n/**\r\n * IE doesn't always support .children\r\n * so we revert to .childNodes instead\r\n */\r\nconst getElementChildren = (el) => {\r\n    return (el.children != null) ? el.children : el.childNodes;\r\n};\r\nconst allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];\r\nconst blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];\n\n\n\n\n//# sourceURL=webpack:///./node_modules/@ionic/core/dist/esm/index-3476b023.js?");

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/index-4d91f03a.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-4d91f03a.js ***!
  \*************************************************************/
/*! exports provided: d, g, l, s, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return deepReady; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"g\", function() { return getIonPageElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"l\", function() { return lifecycle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"s\", function() { return setPageHidden; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"t\", function() { return transition; });\n/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ \"./node_modules/@ionic/core/dist/esm/core-feeeff0d.js\");\n/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants-3c3e1099.js */ \"./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js\");\n\n\n\nconst iosTransitionAnimation = () => __webpack_require__.e(/*! import() | ios-transition-504cdd09-js */ \"ios-transition-504cdd09-js\").then(__webpack_require__.bind(null, /*! ./ios.transition-504cdd09.js */ \"./node_modules/@ionic/core/dist/esm/ios.transition-504cdd09.js\"));\r\nconst mdTransitionAnimation = () => __webpack_require__.e(/*! import() | md-transition-fea2bbfb-js */ \"md-transition-fea2bbfb-js\").then(__webpack_require__.bind(null, /*! ./md.transition-fea2bbfb.js */ \"./node_modules/@ionic/core/dist/esm/md.transition-fea2bbfb.js\"));\r\nconst transition = (opts) => {\r\n    return new Promise((resolve, reject) => {\r\n        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"w\"])(() => {\r\n            beforeTransition(opts);\r\n            runTransition(opts).then(result => {\r\n                if (result.animation) {\r\n                    result.animation.destroy();\r\n                }\r\n                afterTransition(opts);\r\n                resolve(result);\r\n            }, error => {\r\n                afterTransition(opts);\r\n                reject(error);\r\n            });\r\n        });\r\n    });\r\n};\r\nconst beforeTransition = (opts) => {\r\n    const enteringEl = opts.enteringEl;\r\n    const leavingEl = opts.leavingEl;\r\n    setZIndex(enteringEl, leavingEl, opts.direction);\r\n    if (opts.showGoBack) {\r\n        enteringEl.classList.add('can-go-back');\r\n    }\r\n    else {\r\n        enteringEl.classList.remove('can-go-back');\r\n    }\r\n    setPageHidden(enteringEl, false);\r\n    if (leavingEl) {\r\n        setPageHidden(leavingEl, false);\r\n    }\r\n};\r\nconst runTransition = async (opts) => {\r\n    const animationBuilder = await getAnimationBuilder(opts);\r\n    const ani = (animationBuilder)\r\n        ? animation(animationBuilder, opts)\r\n        : noAnimation(opts); // fast path for no animation\r\n    return ani;\r\n};\r\nconst afterTransition = (opts) => {\r\n    const enteringEl = opts.enteringEl;\r\n    const leavingEl = opts.leavingEl;\r\n    enteringEl.classList.remove('ion-page-invisible');\r\n    if (leavingEl !== undefined) {\r\n        leavingEl.classList.remove('ion-page-invisible');\r\n    }\r\n};\r\nconst getAnimationBuilder = async (opts) => {\r\n    if (!opts.leavingEl || !opts.animated || opts.duration === 0) {\r\n        return undefined;\r\n    }\r\n    if (opts.animationBuilder) {\r\n        return opts.animationBuilder;\r\n    }\r\n    const getAnimation = (opts.mode === 'ios')\r\n        ? (await iosTransitionAnimation()).iosTransitionAnimation\r\n        : (await mdTransitionAnimation()).mdTransitionAnimation;\r\n    return getAnimation;\r\n};\r\nconst animation = async (animationBuilder, opts) => {\r\n    await waitForReady(opts, true);\r\n    let trans;\r\n    try {\r\n        const mod = await __webpack_require__.e(/*! import() | index-69c37885-js */ \"index-69c37885-js\").then(__webpack_require__.bind(null, /*! ./index-69c37885.js */ \"./node_modules/@ionic/core/dist/esm/index-69c37885.js\"));\r\n        trans = await mod.create(animationBuilder, opts.baseEl, opts);\r\n    }\r\n    catch (err) {\r\n        trans = animationBuilder(opts.baseEl, opts);\r\n    }\r\n    fireWillEvents(opts.enteringEl, opts.leavingEl);\r\n    const didComplete = await playTransition(trans, opts);\r\n    if (opts.progressCallback) {\r\n        opts.progressCallback(undefined);\r\n    }\r\n    if (didComplete) {\r\n        fireDidEvents(opts.enteringEl, opts.leavingEl);\r\n    }\r\n    return {\r\n        hasCompleted: didComplete,\r\n        animation: trans\r\n    };\r\n};\r\nconst noAnimation = async (opts) => {\r\n    const enteringEl = opts.enteringEl;\r\n    const leavingEl = opts.leavingEl;\r\n    await waitForReady(opts, false);\r\n    fireWillEvents(enteringEl, leavingEl);\r\n    fireDidEvents(enteringEl, leavingEl);\r\n    return {\r\n        hasCompleted: true\r\n    };\r\n};\r\nconst waitForReady = async (opts, defaultDeep) => {\r\n    const deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;\r\n    const promises = deep ? [\r\n        deepReady(opts.enteringEl),\r\n        deepReady(opts.leavingEl),\r\n    ] : [\r\n        shallowReady(opts.enteringEl),\r\n        shallowReady(opts.leavingEl),\r\n    ];\r\n    await Promise.all(promises);\r\n    await notifyViewReady(opts.viewIsReady, opts.enteringEl);\r\n};\r\nconst notifyViewReady = async (viewIsReady, enteringEl) => {\r\n    if (viewIsReady) {\r\n        await viewIsReady(enteringEl);\r\n    }\r\n};\r\nconst playTransition = (trans, opts) => {\r\n    const progressCallback = opts.progressCallback;\r\n    // TODO: Remove AnimationBuilder\r\n    const promise = new Promise(resolve => {\r\n        trans.onFinish((currentStep) => {\r\n            if (typeof currentStep === 'number') {\r\n                resolve(currentStep === 1);\r\n            }\r\n            else if (trans.hasCompleted !== undefined) {\r\n                resolve(trans.hasCompleted);\r\n            }\r\n        });\r\n    });\r\n    // cool, let's do this, start the transition\r\n    if (progressCallback) {\r\n        // this is a swipe to go back, just get the transition progress ready\r\n        // kick off the swipe animation start\r\n        trans.progressStart(true);\r\n        progressCallback(trans);\r\n    }\r\n    else {\r\n        // only the top level transition should actually start \"play\"\r\n        // kick it off and let it play through\r\n        // ******** DOM WRITE ****************\r\n        trans.play();\r\n    }\r\n    // create a callback for when the animation is done\r\n    return promise;\r\n};\r\nconst fireWillEvents = (enteringEl, leavingEl) => {\r\n    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__[\"b\"]);\r\n    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__[\"L\"]);\r\n};\r\nconst fireDidEvents = (enteringEl, leavingEl) => {\r\n    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__[\"a\"]);\r\n    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__[\"c\"]);\r\n};\r\nconst lifecycle = (el, eventName) => {\r\n    if (el) {\r\n        const ev = new CustomEvent(eventName, {\r\n            bubbles: false,\r\n            cancelable: false,\r\n        });\r\n        el.dispatchEvent(ev);\r\n    }\r\n};\r\nconst shallowReady = (el) => {\r\n    if (el && el.componentOnReady) {\r\n        return el.componentOnReady();\r\n    }\r\n    return Promise.resolve();\r\n};\r\nconst deepReady = async (el) => {\r\n    const element = el;\r\n    if (element) {\r\n        if (element.componentOnReady != null) {\r\n            const stencilEl = await element.componentOnReady();\r\n            if (stencilEl != null) {\r\n                return;\r\n            }\r\n        }\r\n        await Promise.all(Array.from(element.children).map(deepReady));\r\n    }\r\n};\r\nconst setPageHidden = (el, hidden) => {\r\n    if (hidden) {\r\n        el.setAttribute('aria-hidden', 'true');\r\n        el.classList.add('ion-page-hidden');\r\n    }\r\n    else {\r\n        el.hidden = false;\r\n        el.removeAttribute('aria-hidden');\r\n        el.classList.remove('ion-page-hidden');\r\n    }\r\n};\r\nconst setZIndex = (enteringEl, leavingEl, direction) => {\r\n    if (enteringEl !== undefined) {\r\n        enteringEl.style.zIndex = (direction === 'back')\r\n            ? '99'\r\n            : '101';\r\n    }\r\n    if (leavingEl !== undefined) {\r\n        leavingEl.style.zIndex = '100';\r\n    }\r\n};\r\nconst getIonPageElement = (element) => {\r\n    if (element.classList.contains('ion-page')) {\r\n        return element;\r\n    }\r\n    const ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');\r\n    if (ionPage) {\r\n        return ionPage;\r\n    }\r\n    // idk, return the original element so at least something animates and we don't have a null pointer\r\n    return element;\r\n};\n\n\n\n\n//# sourceURL=webpack:///./node_modules/@ionic/core/dist/esm/index-4d91f03a.js?");

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return createColorClasses; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"g\", function() { return getClassMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return hostContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"o\", function() { return openURL; });\nconst hostContext = (selector, el) => {\r\n    return el.closest(selector) !== null;\r\n};\r\n/**\r\n * Create the mode and color classes for the component based on the classes passed in\r\n */\r\nconst createColorClasses = (color) => {\r\n    return (typeof color === 'string' && color.length > 0) ? {\r\n        'ion-color': true,\r\n        [`ion-color-${color}`]: true\r\n    } : undefined;\r\n};\r\nconst getClassList = (classes) => {\r\n    if (classes !== undefined) {\r\n        const array = Array.isArray(classes) ? classes : classes.split(' ');\r\n        return array\r\n            .filter(c => c != null)\r\n            .map(c => c.trim())\r\n            .filter(c => c !== '');\r\n    }\r\n    return [];\r\n};\r\nconst getClassMap = (classes) => {\r\n    const map = {};\r\n    getClassList(classes).forEach(c => map[c] = true);\r\n    return map;\r\n};\r\nconst SCHEME = /^[a-z][a-z0-9+\\-.]*:/;\r\nconst openURL = async (url, ev, direction) => {\r\n    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {\r\n        const router = document.querySelector('ion-router');\r\n        if (router) {\r\n            if (ev != null) {\r\n                ev.preventDefault();\r\n            }\r\n            return router.push(url, direction);\r\n        }\r\n    }\r\n    return false;\r\n};\n\n\n\n\n//# sourceURL=webpack:///./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js?");

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/watch-options-2af96011.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/watch-options-2af96011.js ***!
  \*********************************************************************/
/*! exports provided: f, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"f\", function() { return findCheckedOption; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"w\", function() { return watchForOptions; });\nconst watchForOptions = (containerEl, tagName, onChange) => {\r\n    const mutation = new MutationObserver(mutationList => {\r\n        onChange(getSelectedOption(mutationList, tagName));\r\n    });\r\n    mutation.observe(containerEl, {\r\n        childList: true,\r\n        subtree: true\r\n    });\r\n    return mutation;\r\n};\r\nconst getSelectedOption = (mutationList, tagName) => {\r\n    let newOption;\r\n    mutationList.forEach(mut => {\r\n        // tslint:disable-next-line: prefer-for-of\r\n        for (let i = 0; i < mut.addedNodes.length; i++) {\r\n            newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;\r\n        }\r\n    });\r\n    return newOption;\r\n};\r\nconst findCheckedOption = (el, tagName) => {\r\n    if (el.nodeType !== 1) {\r\n        return undefined;\r\n    }\r\n    const options = (el.tagName === tagName.toUpperCase())\r\n        ? [el]\r\n        : Array.from(el.querySelectorAll(tagName));\r\n    return options.find((o) => o.checked === true);\r\n};\n\n\n\n\n//# sourceURL=webpack:///./node_modules/@ionic/core/dist/esm/watch-options-2af96011.js?");

/***/ })

}]);