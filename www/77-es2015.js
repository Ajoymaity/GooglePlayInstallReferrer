(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js ***!
  \***********************************************************************/
/*! exports provided: ion_virtual_scroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ion_virtual_scroll\", function() { return VirtualScroll; });\n/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ \"./node_modules/@ionic/core/dist/esm/core-feeeff0d.js\");\n/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ \"./node_modules/@ionic/core/dist/esm/config-3c7f3790.js\");\n\n\n\nconst CELL_TYPE_ITEM = 'item';\r\nconst CELL_TYPE_HEADER = 'header';\r\nconst CELL_TYPE_FOOTER = 'footer';\r\nconst NODE_CHANGE_NONE = 0;\r\nconst NODE_CHANGE_POSITION = 1;\r\nconst NODE_CHANGE_CELL = 2;\n\nconst MIN_READS = 2;\r\nconst updateVDom = (dom, heightIndex, cells, range) => {\r\n    // reset dom\r\n    for (const node of dom) {\r\n        node.change = NODE_CHANGE_NONE;\r\n        node.d = true;\r\n    }\r\n    // try to match into exisiting dom\r\n    const toMutate = [];\r\n    const end = range.offset + range.length;\r\n    for (let i = range.offset; i < end; i++) {\r\n        const cell = cells[i];\r\n        const node = dom.find(n => n.d && n.cell === cell);\r\n        if (node) {\r\n            const top = heightIndex[i];\r\n            if (top !== node.top) {\r\n                node.top = top;\r\n                node.change = NODE_CHANGE_POSITION;\r\n            }\r\n            node.d = false;\r\n        }\r\n        else {\r\n            toMutate.push(cell);\r\n        }\r\n    }\r\n    // needs to append\r\n    const pool = dom.filter(n => n.d);\r\n    for (const cell of toMutate) {\r\n        const node = pool.find(n => n.d && n.cell.type === cell.type);\r\n        const index = cell.i;\r\n        if (node) {\r\n            node.d = false;\r\n            node.change = NODE_CHANGE_CELL;\r\n            node.cell = cell;\r\n            node.top = heightIndex[index];\r\n        }\r\n        else {\r\n            dom.push({\r\n                d: false,\r\n                cell,\r\n                visible: true,\r\n                change: NODE_CHANGE_CELL,\r\n                top: heightIndex[index],\r\n            });\r\n        }\r\n    }\r\n    dom\r\n        .filter(n => n.d && n.top !== -9999)\r\n        .forEach(n => {\r\n        n.change = NODE_CHANGE_POSITION;\r\n        n.top = -9999;\r\n    });\r\n};\r\nconst doRender = (el, nodeRender, dom, updateCellHeight) => {\r\n    const children = Array.from(el.children).filter(n => n.tagName !== 'TEMPLATE');\r\n    const childrenNu = children.length;\r\n    let child;\r\n    for (let i = 0; i < dom.length; i++) {\r\n        const node = dom[i];\r\n        const cell = node.cell;\r\n        // the cell change, the content must be updated\r\n        if (node.change === NODE_CHANGE_CELL) {\r\n            if (i < childrenNu) {\r\n                child = children[i];\r\n                nodeRender(child, cell, i);\r\n            }\r\n            else {\r\n                const newChild = createNode(el, cell.type);\r\n                child = nodeRender(newChild, cell, i) || newChild;\r\n                child.classList.add('virtual-item');\r\n                el.appendChild(child);\r\n            }\r\n            child['$ionCell'] = cell;\r\n        }\r\n        else {\r\n            child = children[i];\r\n        }\r\n        // only update position when it changes\r\n        if (node.change !== NODE_CHANGE_NONE) {\r\n            child.style.transform = `translate3d(0,${node.top}px,0)`;\r\n        }\r\n        // update visibility\r\n        const visible = cell.visible;\r\n        if (node.visible !== visible) {\r\n            if (visible) {\r\n                child.classList.remove('virtual-loading');\r\n            }\r\n            else {\r\n                child.classList.add('virtual-loading');\r\n            }\r\n            node.visible = visible;\r\n        }\r\n        // dynamic height\r\n        if (cell.reads > 0) {\r\n            updateCellHeight(cell, child);\r\n            cell.reads--;\r\n        }\r\n    }\r\n};\r\nconst createNode = (el, type) => {\r\n    const template = getTemplate(el, type);\r\n    if (template && el.ownerDocument) {\r\n        return el.ownerDocument.importNode(template.content, true).children[0];\r\n    }\r\n    return null;\r\n};\r\nconst getTemplate = (el, type) => {\r\n    switch (type) {\r\n        case CELL_TYPE_ITEM: return el.querySelector('template:not([name])');\r\n        case CELL_TYPE_HEADER: return el.querySelector('template[name=header]');\r\n        case CELL_TYPE_FOOTER: return el.querySelector('template[name=footer]');\r\n    }\r\n};\r\nconst getViewport = (scrollTop, vierportHeight, margin) => {\r\n    return {\r\n        top: Math.max(scrollTop - margin, 0),\r\n        bottom: scrollTop + vierportHeight + margin\r\n    };\r\n};\r\nconst getRange = (heightIndex, viewport, buffer) => {\r\n    const topPos = viewport.top;\r\n    const bottomPos = viewport.bottom;\r\n    // find top index\r\n    let i = 0;\r\n    for (; i < heightIndex.length; i++) {\r\n        if (heightIndex[i] > topPos) {\r\n            break;\r\n        }\r\n    }\r\n    const offset = Math.max(i - buffer - 1, 0);\r\n    // find bottom index\r\n    for (; i < heightIndex.length; i++) {\r\n        if (heightIndex[i] >= bottomPos) {\r\n            break;\r\n        }\r\n    }\r\n    const end = Math.min(i + buffer, heightIndex.length);\r\n    const length = end - offset;\r\n    return { offset, length };\r\n};\r\nconst getShouldUpdate = (dirtyIndex, currentRange, range) => {\r\n    const end = range.offset + range.length;\r\n    return (dirtyIndex <= end ||\r\n        currentRange.offset !== range.offset ||\r\n        currentRange.length !== range.length);\r\n};\r\nconst findCellIndex = (cells, index) => {\r\n    const max = cells.length > 0 ? cells[cells.length - 1].index : 0;\r\n    if (index === 0) {\r\n        return 0;\r\n    }\r\n    else if (index === max + 1) {\r\n        return cells.length;\r\n    }\r\n    else {\r\n        return cells.findIndex(c => c.index === index);\r\n    }\r\n};\r\nconst inplaceUpdate = (dst, src, offset) => {\r\n    if (offset === 0 && src.length >= dst.length) {\r\n        return src;\r\n    }\r\n    for (let i = 0; i < src.length; i++) {\r\n        dst[i + offset] = src[i];\r\n    }\r\n    return dst;\r\n};\r\nconst calcCells = (items, itemHeight, headerHeight, footerHeight, headerFn, footerFn, approxHeaderHeight, approxFooterHeight, approxItemHeight, j, offset, len) => {\r\n    const cells = [];\r\n    const end = len + offset;\r\n    for (let i = offset; i < end; i++) {\r\n        const item = items[i];\r\n        if (headerFn) {\r\n            const value = headerFn(item, i, items);\r\n            if (value != null) {\r\n                cells.push({\r\n                    i: j++,\r\n                    type: CELL_TYPE_HEADER,\r\n                    value,\r\n                    index: i,\r\n                    height: headerHeight ? headerHeight(value, i) : approxHeaderHeight,\r\n                    reads: headerHeight ? 0 : MIN_READS,\r\n                    visible: !!headerHeight,\r\n                });\r\n            }\r\n        }\r\n        cells.push({\r\n            i: j++,\r\n            type: CELL_TYPE_ITEM,\r\n            value: item,\r\n            index: i,\r\n            height: itemHeight ? itemHeight(item, i) : approxItemHeight,\r\n            reads: itemHeight ? 0 : MIN_READS,\r\n            visible: !!itemHeight,\r\n        });\r\n        if (footerFn) {\r\n            const value = footerFn(item, i, items);\r\n            if (value != null) {\r\n                cells.push({\r\n                    i: j++,\r\n                    type: CELL_TYPE_FOOTER,\r\n                    value,\r\n                    index: i,\r\n                    height: footerHeight ? footerHeight(value, i) : approxFooterHeight,\r\n                    reads: footerHeight ? 0 : MIN_READS,\r\n                    visible: !!footerHeight,\r\n                });\r\n            }\r\n        }\r\n    }\r\n    return cells;\r\n};\r\nconst calcHeightIndex = (buf, cells, index) => {\r\n    let acum = buf[index];\r\n    for (let i = index; i < buf.length; i++) {\r\n        buf[i] = acum;\r\n        acum += cells[i].height;\r\n    }\r\n    return acum;\r\n};\r\nconst resizeBuffer = (buf, len) => {\r\n    if (!buf) {\r\n        return new Uint32Array(len);\r\n    }\r\n    if (buf.length === len) {\r\n        return buf;\r\n    }\r\n    else if (len > buf.length) {\r\n        const newBuf = new Uint32Array(len);\r\n        newBuf.set(buf);\r\n        return newBuf;\r\n    }\r\n    else {\r\n        return buf.subarray(0, len);\r\n    }\r\n};\r\nconst positionForIndex = (index, cells, heightIndex) => {\r\n    const cell = cells.find(c => c.type === CELL_TYPE_ITEM && c.index === index);\r\n    if (cell) {\r\n        return heightIndex[cell.i];\r\n    }\r\n    return -1;\r\n};\n\nconst VirtualScroll = class {\n    constructor(hostRef) {\n        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this, hostRef);\n        this.range = { offset: 0, length: 0 };\n        this.viewportHeight = 0;\n        this.cells = [];\n        this.virtualDom = [];\n        this.isEnabled = false;\n        this.viewportOffset = 0;\n        this.currentScrollTop = 0;\n        this.indexDirty = 0;\n        this.lastItemLen = 0;\n        this.totalHeight = 0;\n        /**\n         * It is important to provide this\n         * if virtual item height will be significantly larger than the default\n         * The approximate height of each virtual item template's cell.\n         * This dimension is used to help determine how many cells should\n         * be created when initialized, and to help calculate the height of\n         * the scrollable area. This height value can only use `px` units.\n         * Note that the actual rendered size of each cell comes from the\n         * app's CSS, whereas this approximation is used to help calculate\n         * initial dimensions before the item has been rendered.\n         */\n        this.approxItemHeight = 45;\n        /**\n         * The approximate height of each header template's cell.\n         * This dimension is used to help determine how many cells should\n         * be created when initialized, and to help calculate the height of\n         * the scrollable area. This height value can only use `px` units.\n         * Note that the actual rendered size of each cell comes from the\n         * app's CSS, whereas this approximation is used to help calculate\n         * initial dimensions before the item has been rendered.\n         */\n        this.approxHeaderHeight = 30;\n        /**\n         * The approximate width of each footer template's cell.\n         * This dimension is used to help determine how many cells should\n         * be created when initialized, and to help calculate the height of\n         * the scrollable area. This height value can only use `px` units.\n         * Note that the actual rendered size of each cell comes from the\n         * app's CSS, whereas this approximation is used to help calculate\n         * initial dimensions before the item has been rendered.\n         */\n        this.approxFooterHeight = 30;\n        this.onScroll = () => {\n            this.updateVirtualScroll();\n        };\n    }\n    itemsChanged() {\n        this.calcCells();\n        this.updateVirtualScroll();\n    }\n    async connectedCallback() {\n        const contentEl = this.el.closest('ion-content');\n        if (!contentEl) {\n            console.error('<ion-virtual-scroll> must be used inside an <ion-content>');\n            return;\n        }\n        this.scrollEl = await contentEl.getScrollElement();\n        this.contentEl = contentEl;\n        this.calcCells();\n        this.updateState();\n    }\n    componentDidUpdate() {\n        this.updateState();\n    }\n    disconnectedCallback() {\n        this.scrollEl = undefined;\n    }\n    onResize() {\n        this.calcCells();\n        this.updateVirtualScroll();\n    }\n    /**\n     * Returns the position of the virtual item at the given index.\n     */\n    positionForItem(index) {\n        return Promise.resolve(positionForIndex(index, this.cells, this.getHeightIndex()));\n    }\n    /**\n     * This method marks a subset of items as dirty, so they can be re-rendered. Items should be marked as\n     * dirty any time the content or their style changes.\n     *\n     * The subset of items to be updated can are specifing by an offset and a length.\n     */\n    async checkRange(offset, len = -1) {\n        // TODO: kind of hacky how we do in-place updated of the cells\n        // array. this part needs a complete refactor\n        if (!this.items) {\n            return;\n        }\n        const length = (len === -1)\n            ? this.items.length - offset\n            : len;\n        const cellIndex = findCellIndex(this.cells, offset);\n        const cells = calcCells(this.items, this.itemHeight, this.headerHeight, this.footerHeight, this.headerFn, this.footerFn, this.approxHeaderHeight, this.approxFooterHeight, this.approxItemHeight, cellIndex, offset, length);\n        this.cells = inplaceUpdate(this.cells, cells, cellIndex);\n        this.lastItemLen = this.items.length;\n        this.indexDirty = Math.max(offset - 1, 0);\n        this.scheduleUpdate();\n    }\n    /**\n     * This method marks the tail the items array as dirty, so they can be re-rendered.\n     *\n     * It's equivalent to calling:\n     *\n     * ```js\n     * virtualScroll.checkRange(lastItemLen);\n     * ```\n     */\n    async checkEnd() {\n        if (this.items) {\n            this.checkRange(this.lastItemLen);\n        }\n    }\n    updateVirtualScroll() {\n        // do nothing if virtual-scroll is disabled\n        if (!this.isEnabled || !this.scrollEl) {\n            return;\n        }\n        // unschedule future updates\n        if (this.timerUpdate) {\n            clearTimeout(this.timerUpdate);\n            this.timerUpdate = undefined;\n        }\n        // schedule DOM operations into the stencil queue\n        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"f\"])(this.readVS.bind(this));\n        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"w\"])(this.writeVS.bind(this));\n    }\n    readVS() {\n        const { contentEl, scrollEl, el } = this;\n        let topOffset = 0;\n        let node = el;\n        while (node && node !== contentEl) {\n            topOffset += node.offsetTop;\n            node = node.parentElement;\n        }\n        this.viewportOffset = topOffset;\n        if (scrollEl) {\n            this.viewportHeight = scrollEl.offsetHeight;\n            this.currentScrollTop = scrollEl.scrollTop;\n        }\n    }\n    writeVS() {\n        const dirtyIndex = this.indexDirty;\n        // get visible viewport\n        const scrollTop = this.currentScrollTop - this.viewportOffset;\n        const viewport = getViewport(scrollTop, this.viewportHeight, 100);\n        // compute lazily the height index\n        const heightIndex = this.getHeightIndex();\n        // get array bounds of visible cells base in the viewport\n        const range = getRange(heightIndex, viewport, 2);\n        // fast path, do nothing\n        const shouldUpdate = getShouldUpdate(dirtyIndex, this.range, range);\n        if (!shouldUpdate) {\n            return;\n        }\n        this.range = range;\n        // in place mutation of the virtual DOM\n        updateVDom(this.virtualDom, heightIndex, this.cells, range);\n        // Write DOM\n        // Different code paths taken depending of the render API used\n        if (this.nodeRender) {\n            doRender(this.el, this.nodeRender, this.virtualDom, this.updateCellHeight.bind(this));\n        }\n        else if (this.domRender) {\n            this.domRender(this.virtualDom);\n        }\n        else if (this.renderItem) {\n            this.el.forceUpdate();\n        }\n    }\n    updateCellHeight(cell, node) {\n        const update = () => {\n            if (node['$ionCell'] === cell) {\n                const style = window.getComputedStyle(node);\n                const height = node.offsetHeight + parseFloat(style.getPropertyValue('margin-bottom'));\n                this.setCellHeight(cell, height);\n            }\n        };\n        if (node && node.componentOnReady) {\n            node.componentOnReady().then(update);\n        }\n        else {\n            update();\n        }\n    }\n    setCellHeight(cell, height) {\n        const index = cell.i;\n        // the cell might changed since the height update was scheduled\n        if (cell !== this.cells[index]) {\n            return;\n        }\n        if (cell.height !== height || cell.visible !== true) {\n            cell.visible = true;\n            cell.height = height;\n            this.indexDirty = Math.min(this.indexDirty, index);\n            this.scheduleUpdate();\n        }\n    }\n    scheduleUpdate() {\n        clearTimeout(this.timerUpdate);\n        this.timerUpdate = setTimeout(() => this.updateVirtualScroll(), 100);\n    }\n    updateState() {\n        const shouldEnable = !!(this.scrollEl &&\n            this.cells);\n        if (shouldEnable !== this.isEnabled) {\n            this.enableScrollEvents(shouldEnable);\n            if (shouldEnable) {\n                this.updateVirtualScroll();\n            }\n        }\n    }\n    calcCells() {\n        if (!this.items) {\n            return;\n        }\n        this.lastItemLen = this.items.length;\n        this.cells = calcCells(this.items, this.itemHeight, this.headerHeight, this.footerHeight, this.headerFn, this.footerFn, this.approxHeaderHeight, this.approxFooterHeight, this.approxItemHeight, 0, 0, this.lastItemLen);\n        this.indexDirty = 0;\n    }\n    getHeightIndex() {\n        if (this.indexDirty !== Infinity) {\n            this.calcHeightIndex(this.indexDirty);\n        }\n        return this.heightIndex;\n    }\n    calcHeightIndex(index = 0) {\n        // TODO: optimize, we don't need to calculate all the cells\n        this.heightIndex = resizeBuffer(this.heightIndex, this.cells.length);\n        this.totalHeight = calcHeightIndex(this.heightIndex, this.cells, index);\n        this.indexDirty = Infinity;\n    }\n    enableScrollEvents(shouldListen) {\n        if (this.rmEvent) {\n            this.rmEvent();\n            this.rmEvent = undefined;\n        }\n        const scrollEl = this.scrollEl;\n        if (scrollEl) {\n            this.isEnabled = shouldListen;\n            scrollEl.addEventListener('scroll', this.onScroll);\n            this.rmEvent = () => {\n                scrollEl.removeEventListener('scroll', this.onScroll);\n            };\n        }\n    }\n    renderVirtualNode(node) {\n        const { type, value, index } = node.cell;\n        switch (type) {\n            case CELL_TYPE_ITEM: return this.renderItem(value, index);\n            case CELL_TYPE_HEADER: return this.renderHeader(value, index);\n            case CELL_TYPE_FOOTER: return this.renderFooter(value, index);\n        }\n    }\n    render() {\n        return (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"H\"], { style: {\n                height: `${this.totalHeight}px`\n            } }, this.renderItem && (Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(VirtualProxy, { dom: this.virtualDom }, this.virtualDom.map(node => this.renderVirtualNode(node))))));\n    }\n    get el() { return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__[\"e\"])(this); }\n    static get watchers() { return {\n        \"itemHeight\": [\"itemsChanged\"],\n        \"headerHeight\": [\"itemsChanged\"],\n        \"footerHeight\": [\"itemsChanged\"],\n        \"items\": [\"itemsChanged\"]\n    }; }\n    static get style() { return \"ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute!important;top:0!important;right:0!important;left:0!important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}\"; }\n};\nconst VirtualProxy = ({ dom }, children, utils) => {\n    return utils.map(children, (child, i) => {\n        const node = dom[i];\n        const vattrs = child.vattrs || {};\n        let classes = vattrs.class || '';\n        classes += 'virtual-item ';\n        if (!node.visible) {\n            classes += 'virtual-loading';\n        }\n        return Object.assign(Object.assign({}, child), { vattrs: Object.assign(Object.assign({}, vattrs), { class: classes, style: Object.assign(Object.assign({}, vattrs.style), { transform: `translate3d(0,${node.top}px,0)` }) }) });\n    });\n};\n\n\n\n\n//# sourceURL=webpack:///./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js?");

/***/ })

}]);