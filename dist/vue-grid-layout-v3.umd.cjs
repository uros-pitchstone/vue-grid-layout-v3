(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode(".vue-grid-item[data-v-99aff433] {\n  -webkit-transition: all 200ms ease;\n  transition: all 200ms ease;\n  -webkit-transition-property: left, top, right;\n  transition-property: left, top, right;\n  /* add right for rtl */\n}\n.vue-grid-item.no-touch[data-v-99aff433] {\n  -ms-touch-action: none;\n      touch-action: none;\n}\n.vue-grid-item.cssTransforms[data-v-99aff433] {\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  left: 0;\n  right: auto;\n}\n.vue-grid-item.cssTransforms.render-rtl[data-v-99aff433] {\n  left: auto;\n  right: 0;\n}\n.vue-grid-item.resizing[data-v-99aff433] {\n  opacity: 0.6;\n  z-index: 3;\n}\n.vue-grid-item.vue-draggable-dragging[data-v-99aff433] {\n  -webkit-transition:none;\n  transition:none;\n  z-index: 3;\n}\n.vue-grid-item.vue-grid-placeholder[data-v-99aff433] {\n  background: red;\n  opacity: 0.2;\n  -webkit-transition-duration: 100ms;\n          transition-duration: 100ms;\n  z-index: 2;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vue-grid-item > .vue-resizable-handle[data-v-99aff433] {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  bottom: 0;\n  right: 0;\n  background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');\n  background-position: bottom right;\n  padding: 0 3px 3px 0;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  cursor: se-resize;\n}\n.vue-grid-item > .vue-rtl-resizable-handle[data-v-99aff433] {\n  bottom: 0;\n  left: 0;\n  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAuMDAwMDAwMDAwMDAwMDAyIiBoZWlnaHQ9IjEwLjAwMDAwMDAwMDAwMDAwMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDwhLS0gQ3JlYXRlZCB3aXRoIE1ldGhvZCBEcmF3IC0gaHR0cDovL2dpdGh1Yi5jb20vZHVvcGl4ZWwvTWV0aG9kLURyYXcvIC0tPgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSIxMiIgd2lkdGg9IjEyIiB5PSItMSIgeD0iLTEiLz4KICA8ZyBkaXNwbGF5PSJub25lIiBvdmVyZmxvdz0idmlzaWJsZSIgeT0iMCIgeD0iMCIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIgaWQ9ImNhbnZhc0dyaWQiPgogICA8cmVjdCBmaWxsPSJ1cmwoI2dyaWRwYXR0ZXJuKSIgc3Ryb2tlLXdpZHRoPSIwIiB5PSIwIiB4PSIwIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIi8+CiAgPC9nPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxsaW5lIGNhbnZhcz0iI2ZmZmZmZiIgY2FudmFzLW9wYWNpdHk9IjEiIHN0cm9rZS1saW5lY2FwPSJ1bmRlZmluZWQiIHN0cm9rZS1saW5lam9pbj0idW5kZWZpbmVkIiBpZD0ic3ZnXzEiIHkyPSItNzAuMTc4NDA3IiB4Mj0iMTI0LjQ2NDE3NSIgeTE9Ii0zOC4zOTI3MzciIHgxPSIxNDQuODIxMjg5IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjMDAwIiBmaWxsPSJub25lIi8+CiAgPGxpbmUgc3Ryb2tlPSIjNjY2NjY2IiBzdHJva2UtbGluZWNhcD0idW5kZWZpbmVkIiBzdHJva2UtbGluZWpvaW49InVuZGVmaW5lZCIgaWQ9InN2Z181IiB5Mj0iOS4xMDY5NTciIHgyPSIwLjk0NzI0NyIgeTE9Ii0wLjAxODEyOCIgeDE9IjAuOTQ3MjQ3IiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz4KICA8bGluZSBzdHJva2UtbGluZWNhcD0idW5kZWZpbmVkIiBzdHJva2UtbGluZWpvaW49InVuZGVmaW5lZCIgaWQ9InN2Z183IiB5Mj0iOSIgeDI9IjEwLjA3MzUyOSIgeTE9IjkiIHgxPSItMC42NTU2NCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9IiM2NjY2NjYiIGZpbGw9Im5vbmUiLz4KIDwvZz4KPC9zdmc+);\n  background-position: bottom left;\n  padding-left: 3px;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  cursor: sw-resize;\n  right: auto;\n}\n.vue-grid-item.disable-userselect[data-v-99aff433] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.vue-grid-layout[data-v-a10aee95] {\n  position: relative;\n  -webkit-transition: height 200ms ease;\n  transition: height 200ms ease;\n}"));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
(function(global2, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.VueGridLayout = {}, global2.Vue));
})(this, function(exports2, vue) {
  "use strict";
  const domObjects = {
    init: init$3,
    document: null,
    DocumentFragment: null,
    SVGElement: null,
    SVGSVGElement: null,
    SVGElementInstance: null,
    Element: null,
    HTMLElement: null,
    Event: null,
    Touch: null,
    PointerEvent: null
  };
  function blank() {
  }
  function init$3(window2) {
    const win2 = window2;
    domObjects.document = win2.document;
    domObjects.DocumentFragment = win2.DocumentFragment || blank;
    domObjects.SVGElement = win2.SVGElement || blank;
    domObjects.SVGSVGElement = win2.SVGSVGElement || blank;
    domObjects.SVGElementInstance = win2.SVGElementInstance || blank;
    domObjects.Element = win2.Element || blank;
    domObjects.HTMLElement = win2.HTMLElement || domObjects.Element;
    domObjects.Event = win2.Event;
    domObjects.Touch = win2.Touch || blank;
    domObjects.PointerEvent = win2.PointerEvent || win2.MSPointerEvent;
  }
  var isWindow = (thing) => !!(thing && thing.Window) && thing instanceof thing.Window;
  let realWindow = void 0;
  let win = void 0;
  function init$2(window2) {
    realWindow = window2;
    const el = window2.document.createTextNode("");
    if (el.ownerDocument !== window2.document && typeof window2.wrap === "function" && window2.wrap(el) === el) {
      window2 = window2.wrap(window2);
    }
    win = window2;
  }
  if (typeof window !== "undefined" && !!window) {
    init$2(window);
  }
  function getWindow(node) {
    if (isWindow(node)) {
      return node;
    }
    const rootNode = node.ownerDocument || node;
    return rootNode.defaultView || win.window;
  }
  const window$1 = (thing) => thing === win || isWindow(thing);
  const docFrag = (thing) => object$1(thing) && thing.nodeType === 11;
  const object$1 = (thing) => !!thing && typeof thing === "object";
  const func = (thing) => typeof thing === "function";
  const number = (thing) => typeof thing === "number";
  const bool = (thing) => typeof thing === "boolean";
  const string = (thing) => typeof thing === "string";
  const element = (thing) => {
    if (!thing || typeof thing !== "object") {
      return false;
    }
    const _window = getWindow(thing) || win;
    return /object|function/.test(typeof Element) ? thing instanceof Element || thing instanceof _window.Element : thing.nodeType === 1 && typeof thing.nodeName === "string";
  };
  const plainObject = (thing) => object$1(thing) && !!thing.constructor && /function Object\b/.test(thing.constructor.toString());
  const array = (thing) => object$1(thing) && typeof thing.length !== "undefined" && func(thing.splice);
  var is = {
    window: window$1,
    docFrag,
    object: object$1,
    func,
    number,
    bool,
    string,
    element,
    plainObject,
    array
  };
  const browser = {
    init: init$1,
    supportsTouch: null,
    supportsPointerEvent: null,
    isIOS7: null,
    isIOS: null,
    isIe9: null,
    isOperaMobile: null,
    prefixedMatchesSelector: null,
    pEventTypes: null,
    wheelEvent: null
  };
  function init$1(window2) {
    const Element2 = domObjects.Element;
    const navigator2 = window2.navigator || {};
    browser.supportsTouch = "ontouchstart" in window2 || is.func(window2.DocumentTouch) && domObjects.document instanceof window2.DocumentTouch;
    browser.supportsPointerEvent = navigator2.pointerEnabled !== false && !!domObjects.PointerEvent;
    browser.isIOS = /iP(hone|od|ad)/.test(navigator2.platform);
    browser.isIOS7 = /iP(hone|od|ad)/.test(navigator2.platform) && /OS 7[^\d]/.test(navigator2.appVersion);
    browser.isIe9 = /MSIE 9/.test(navigator2.userAgent);
    browser.isOperaMobile = navigator2.appName === "Opera" && browser.supportsTouch && /Presto/.test(navigator2.userAgent);
    browser.prefixedMatchesSelector = "matches" in Element2.prototype ? "matches" : "webkitMatchesSelector" in Element2.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in Element2.prototype ? "mozMatchesSelector" : "oMatchesSelector" in Element2.prototype ? "oMatchesSelector" : "msMatchesSelector";
    browser.pEventTypes = browser.supportsPointerEvent ? domObjects.PointerEvent === window2.MSPointerEvent ? {
      up: "MSPointerUp",
      down: "MSPointerDown",
      over: "mouseover",
      out: "mouseout",
      move: "MSPointerMove",
      cancel: "MSPointerCancel"
    } : {
      up: "pointerup",
      down: "pointerdown",
      over: "pointerover",
      out: "pointerout",
      move: "pointermove",
      cancel: "pointercancel"
    } : null;
    browser.wheelEvent = domObjects.document && "onmousewheel" in domObjects.document ? "mousewheel" : "wheel";
  }
  const merge = (target, source) => {
    for (const item of source) {
      target.push(item);
    }
    return target;
  };
  const from = (source) => merge([], source);
  const findIndex = (array2, func2) => {
    for (let i = 0; i < array2.length; i++) {
      if (func2(array2[i], i, array2)) {
        return i;
      }
    }
    return -1;
  };
  const find = (array2, func2) => array2[findIndex(array2, func2)];
  function clone(source) {
    const dest = {};
    for (const prop2 in source) {
      const value = source[prop2];
      if (is.plainObject(value)) {
        dest[prop2] = clone(value);
      } else if (is.array(value)) {
        dest[prop2] = from(value);
      } else {
        dest[prop2] = value;
      }
    }
    return dest;
  }
  function extend(dest, source) {
    for (const prop2 in source) {
      dest[prop2] = source[prop2];
    }
    const ret = dest;
    return ret;
  }
  let lastTime = 0;
  let request;
  let cancel;
  function init(global2) {
    request = global2.requestAnimationFrame;
    cancel = global2.cancelAnimationFrame;
    if (!request) {
      const vendors = ["ms", "moz", "webkit", "o"];
      for (const vendor of vendors) {
        request = global2[`${vendor}RequestAnimationFrame`];
        cancel = global2[`${vendor}CancelAnimationFrame`] || global2[`${vendor}CancelRequestAnimationFrame`];
      }
    }
    request = request && request.bind(global2);
    cancel = cancel && cancel.bind(global2);
    if (!request) {
      request = (callback) => {
        const currTime = Date.now();
        const timeToCall = Math.max(0, 16 - (currTime - lastTime));
        const token = global2.setTimeout(() => {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return token;
      };
      cancel = (token) => clearTimeout(token);
    }
  }
  var raf = {
    request: (callback) => request(callback),
    cancel: (token) => cancel(token),
    init
  };
  function normalize(type, listeners) {
    let filter = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : (_typeOrPrefix) => true;
    let result = arguments.length > 3 ? arguments[3] : void 0;
    result = result || {};
    if (is.string(type) && type.search(" ") !== -1) {
      type = split(type);
    }
    if (is.array(type)) {
      type.forEach((t) => normalize(t, listeners, filter, result));
      return result;
    }
    if (is.object(type)) {
      listeners = type;
      type = "";
    }
    if (is.func(listeners) && filter(type)) {
      result[type] = result[type] || [];
      result[type].push(listeners);
    } else if (is.array(listeners)) {
      for (const l of listeners) {
        normalize(type, l, filter, result);
      }
    } else if (is.object(listeners)) {
      for (const prefix2 in listeners) {
        const combinedTypes = split(prefix2).map((p) => `${type}${p}`);
        normalize(combinedTypes, listeners[prefix2], filter, result);
      }
    }
    return result;
  }
  function split(type) {
    return type.trim().split(/ +/);
  }
  function fireUntilImmediateStopped(event, listeners) {
    for (const listener of listeners) {
      if (event.immediatePropagationStopped) {
        break;
      }
      listener(event);
    }
  }
  class Eventable {
    constructor(options) {
      this.options = void 0;
      this.types = {};
      this.propagationStopped = false;
      this.immediatePropagationStopped = false;
      this.global = void 0;
      this.options = extend({}, options || {});
    }
    fire(event) {
      let listeners;
      const global2 = this.global;
      if (listeners = this.types[event.type]) {
        fireUntilImmediateStopped(event, listeners);
      }
      if (!event.propagationStopped && global2 && (listeners = global2[event.type])) {
        fireUntilImmediateStopped(event, listeners);
      }
    }
    on(type, listener) {
      const listeners = normalize(type, listener);
      for (type in listeners) {
        this.types[type] = merge(this.types[type] || [], listeners[type]);
      }
    }
    off(type, listener) {
      const listeners = normalize(type, listener);
      for (type in listeners) {
        const eventList = this.types[type];
        if (!eventList || !eventList.length) {
          continue;
        }
        for (const subListener of listeners[type]) {
          const index = eventList.indexOf(subListener);
          if (index !== -1) {
            eventList.splice(index, 1);
          }
        }
      }
    }
    getRect(_element) {
      return null;
    }
  }
  function nodeContains(parent, child) {
    if (parent.contains) {
      return parent.contains(child);
    }
    while (child) {
      if (child === parent) {
        return true;
      }
      child = child.parentNode;
    }
    return false;
  }
  function closest(element2, selector) {
    while (is.element(element2)) {
      if (matchesSelector(element2, selector)) {
        return element2;
      }
      element2 = parentNode(element2);
    }
    return null;
  }
  function parentNode(node) {
    let parent = node.parentNode;
    if (is.docFrag(parent)) {
      while ((parent = parent.host) && is.docFrag(parent)) {
        continue;
      }
      return parent;
    }
    return parent;
  }
  function matchesSelector(element2, selector) {
    if (win !== realWindow) {
      selector = selector.replace(/\/deep\//g, " ");
    }
    return element2[browser.prefixedMatchesSelector](selector);
  }
  function matchesUpTo(element2, selector, limit) {
    while (is.element(element2)) {
      if (matchesSelector(element2, selector)) {
        return true;
      }
      element2 = parentNode(element2);
      if (element2 === limit) {
        return matchesSelector(element2, selector);
      }
    }
    return false;
  }
  function getActualElement(element2) {
    return element2.correspondingUseElement || element2;
  }
  function getScrollXY(relevantWindow) {
    relevantWindow = relevantWindow || win;
    return {
      x: relevantWindow.scrollX || relevantWindow.document.documentElement.scrollLeft,
      y: relevantWindow.scrollY || relevantWindow.document.documentElement.scrollTop
    };
  }
  function getElementClientRect(element2) {
    const clientRect = element2 instanceof domObjects.SVGElement ? element2.getBoundingClientRect() : element2.getClientRects()[0];
    return clientRect && {
      left: clientRect.left,
      right: clientRect.right,
      top: clientRect.top,
      bottom: clientRect.bottom,
      width: clientRect.width || clientRect.right - clientRect.left,
      height: clientRect.height || clientRect.bottom - clientRect.top
    };
  }
  function getElementRect(element2) {
    const clientRect = getElementClientRect(element2);
    if (!browser.isIOS7 && clientRect) {
      const scroll2 = getScrollXY(getWindow(element2));
      clientRect.left += scroll2.x;
      clientRect.right += scroll2.x;
      clientRect.top += scroll2.y;
      clientRect.bottom += scroll2.y;
    }
    return clientRect;
  }
  function trySelector(value) {
    if (!is.string(value)) {
      return false;
    }
    domObjects.document.querySelector(value);
    return true;
  }
  const VENDOR_PREFIXES = ["webkit", "moz"];
  function pointerExtend(dest, source) {
    dest.__set || (dest.__set = {});
    for (const prop2 in source) {
      if (VENDOR_PREFIXES.some((prefix2) => prop2.indexOf(prefix2) === 0)) continue;
      if (typeof dest[prop2] !== "function" && prop2 !== "__set") {
        Object.defineProperty(dest, prop2, {
          get() {
            if (prop2 in dest.__set) return dest.__set[prop2];
            return dest.__set[prop2] = source[prop2];
          },
          set(value) {
            dest.__set[prop2] = value;
          },
          configurable: true
        });
      }
    }
    return dest;
  }
  var hypot = (x, y) => Math.sqrt(x * x + y * y);
  function copyCoords(dest, src) {
    dest.page = dest.page || {};
    dest.page.x = src.page.x;
    dest.page.y = src.page.y;
    dest.client = dest.client || {};
    dest.client.x = src.client.x;
    dest.client.y = src.client.y;
    dest.timeStamp = src.timeStamp;
  }
  function setCoordDeltas(targetObj, prev, cur) {
    targetObj.page.x = cur.page.x - prev.page.x;
    targetObj.page.y = cur.page.y - prev.page.y;
    targetObj.client.x = cur.client.x - prev.client.x;
    targetObj.client.y = cur.client.y - prev.client.y;
    targetObj.timeStamp = cur.timeStamp - prev.timeStamp;
  }
  function setCoordVelocity(targetObj, delta) {
    const dt = Math.max(delta.timeStamp / 1e3, 1e-3);
    targetObj.page.x = delta.page.x / dt;
    targetObj.page.y = delta.page.y / dt;
    targetObj.client.x = delta.client.x / dt;
    targetObj.client.y = delta.client.y / dt;
    targetObj.timeStamp = dt;
  }
  function setZeroCoords(targetObj) {
    targetObj.page.x = 0;
    targetObj.page.y = 0;
    targetObj.client.x = 0;
    targetObj.client.y = 0;
  }
  function isNativePointer(pointer) {
    return pointer instanceof domObjects.Event || pointer instanceof domObjects.Touch;
  }
  function getXY(type, pointer, xy) {
    xy = xy || {};
    type = type || "page";
    xy.x = pointer[type + "X"];
    xy.y = pointer[type + "Y"];
    return xy;
  }
  function getPageXY(pointer, page) {
    page = page || {
      x: 0,
      y: 0
    };
    if (browser.isOperaMobile && isNativePointer(pointer)) {
      getXY("screen", pointer, page);
      page.x += window.scrollX;
      page.y += window.scrollY;
    } else {
      getXY("page", pointer, page);
    }
    return page;
  }
  function getClientXY(pointer, client) {
    client = client || {};
    if (browser.isOperaMobile && isNativePointer(pointer)) {
      getXY("screen", pointer, client);
    } else {
      getXY("client", pointer, client);
    }
    return client;
  }
  function getPointerId(pointer) {
    return is.number(pointer.pointerId) ? pointer.pointerId : pointer.identifier;
  }
  function setCoords(dest, pointers, timeStamp) {
    const pointer = pointers.length > 1 ? pointerAverage(pointers) : pointers[0];
    getPageXY(pointer, dest.page);
    getClientXY(pointer, dest.client);
    dest.timeStamp = timeStamp;
  }
  function getTouchPair(event) {
    const touches = [];
    if (is.array(event)) {
      touches[0] = event[0];
      touches[1] = event[1];
    } else {
      if (event.type === "touchend") {
        if (event.touches.length === 1) {
          touches[0] = event.touches[0];
          touches[1] = event.changedTouches[0];
        } else if (event.touches.length === 0) {
          touches[0] = event.changedTouches[0];
          touches[1] = event.changedTouches[1];
        }
      } else {
        touches[0] = event.touches[0];
        touches[1] = event.touches[1];
      }
    }
    return touches;
  }
  function pointerAverage(pointers) {
    const average = {
      pageX: 0,
      pageY: 0,
      clientX: 0,
      clientY: 0,
      screenX: 0,
      screenY: 0
    };
    for (const pointer of pointers) {
      for (const prop2 in average) {
        average[prop2] += pointer[prop2];
      }
    }
    for (const prop2 in average) {
      average[prop2] /= pointers.length;
    }
    return average;
  }
  function touchBBox(event) {
    if (!event.length) {
      return null;
    }
    const touches = getTouchPair(event);
    const minX = Math.min(touches[0].pageX, touches[1].pageX);
    const minY = Math.min(touches[0].pageY, touches[1].pageY);
    const maxX = Math.max(touches[0].pageX, touches[1].pageX);
    const maxY = Math.max(touches[0].pageY, touches[1].pageY);
    return {
      x: minX,
      y: minY,
      left: minX,
      top: minY,
      right: maxX,
      bottom: maxY,
      width: maxX - minX,
      height: maxY - minY
    };
  }
  function touchDistance(event, deltaSource) {
    const sourceX = deltaSource + "X";
    const sourceY = deltaSource + "Y";
    const touches = getTouchPair(event);
    const dx = touches[0][sourceX] - touches[1][sourceX];
    const dy = touches[0][sourceY] - touches[1][sourceY];
    return hypot(dx, dy);
  }
  function touchAngle(event, deltaSource) {
    const sourceX = deltaSource + "X";
    const sourceY = deltaSource + "Y";
    const touches = getTouchPair(event);
    const dx = touches[1][sourceX] - touches[0][sourceX];
    const dy = touches[1][sourceY] - touches[0][sourceY];
    const angle = 180 * Math.atan2(dy, dx) / Math.PI;
    return angle;
  }
  function getPointerType(pointer) {
    return is.string(pointer.pointerType) ? pointer.pointerType : is.number(pointer.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][pointer.pointerType] : (
      // if the PointerEvent API isn't available, then the "pointer" must
      // be either a MouseEvent, TouchEvent, or Touch object
      /touch/.test(pointer.type || "") || pointer instanceof domObjects.Touch ? "touch" : "mouse"
    );
  }
  function getEventTargets(event) {
    const path = is.func(event.composedPath) ? event.composedPath() : event.path;
    return [getActualElement(path ? path[0] : event.target), getActualElement(event.currentTarget)];
  }
  function newCoords() {
    return {
      page: {
        x: 0,
        y: 0
      },
      client: {
        x: 0,
        y: 0
      },
      timeStamp: 0
    };
  }
  function install$a(scope2) {
    var _scope$document;
    const targets = [];
    const delegatedEvents = {};
    const documents = [];
    const eventsMethods = {
      add,
      remove,
      addDelegate,
      removeDelegate,
      delegateListener,
      delegateUseCapture,
      delegatedEvents,
      documents,
      targets,
      supportsOptions: false,
      supportsPassive: false
    };
    (_scope$document = scope2.document) == null ? void 0 : _scope$document.createElement("div").addEventListener("test", null, {
      get capture() {
        return eventsMethods.supportsOptions = true;
      },
      get passive() {
        return eventsMethods.supportsPassive = true;
      }
    });
    scope2.events = eventsMethods;
    function add(eventTarget, type, listener, optionalArg) {
      if (!eventTarget.addEventListener) return;
      const options = getOptions(optionalArg);
      let target = find(targets, (t) => t.eventTarget === eventTarget);
      if (!target) {
        target = {
          eventTarget,
          events: {}
        };
        targets.push(target);
      }
      if (!target.events[type]) {
        target.events[type] = [];
      }
      if (!find(target.events[type], (l) => l.func === listener && optionsMatch(l.options, options))) {
        eventTarget.addEventListener(type, listener, eventsMethods.supportsOptions ? options : options.capture);
        target.events[type].push({
          func: listener,
          options
        });
      }
    }
    function remove(eventTarget, type, listener, optionalArg) {
      if (!eventTarget.addEventListener || !eventTarget.removeEventListener) return;
      const targetIndex = findIndex(targets, (t) => t.eventTarget === eventTarget);
      const target = targets[targetIndex];
      if (!target || !target.events) {
        return;
      }
      if (type === "all") {
        for (type in target.events) {
          if (target.events.hasOwnProperty(type)) {
            remove(eventTarget, type, "all");
          }
        }
        return;
      }
      let typeIsEmpty = false;
      const typeListeners = target.events[type];
      if (typeListeners) {
        if (listener === "all") {
          for (let i = typeListeners.length - 1; i >= 0; i--) {
            const entry = typeListeners[i];
            remove(eventTarget, type, entry.func, entry.options);
          }
          return;
        } else {
          const options = getOptions(optionalArg);
          for (let i = 0; i < typeListeners.length; i++) {
            const entry = typeListeners[i];
            if (entry.func === listener && optionsMatch(entry.options, options)) {
              eventTarget.removeEventListener(type, listener, eventsMethods.supportsOptions ? options : options.capture);
              typeListeners.splice(i, 1);
              if (typeListeners.length === 0) {
                delete target.events[type];
                typeIsEmpty = true;
              }
              break;
            }
          }
        }
      }
      if (typeIsEmpty && !Object.keys(target.events).length) {
        targets.splice(targetIndex, 1);
      }
    }
    function addDelegate(selector, context, type, listener, optionalArg) {
      const options = getOptions(optionalArg);
      if (!delegatedEvents[type]) {
        delegatedEvents[type] = [];
        for (const doc of documents) {
          add(doc, type, delegateListener);
          add(doc, type, delegateUseCapture, true);
        }
      }
      const delegates = delegatedEvents[type];
      let delegate = find(delegates, (d) => d.selector === selector && d.context === context);
      if (!delegate) {
        delegate = {
          selector,
          context,
          listeners: []
        };
        delegates.push(delegate);
      }
      delegate.listeners.push({
        func: listener,
        options
      });
    }
    function removeDelegate(selector, context, type, listener, optionalArg) {
      const options = getOptions(optionalArg);
      const delegates = delegatedEvents[type];
      let matchFound = false;
      let index;
      if (!delegates) return;
      for (index = delegates.length - 1; index >= 0; index--) {
        const cur = delegates[index];
        if (cur.selector === selector && cur.context === context) {
          const {
            listeners
          } = cur;
          for (let i = listeners.length - 1; i >= 0; i--) {
            const entry = listeners[i];
            if (entry.func === listener && optionsMatch(entry.options, options)) {
              listeners.splice(i, 1);
              if (!listeners.length) {
                delegates.splice(index, 1);
                remove(context, type, delegateListener);
                remove(context, type, delegateUseCapture, true);
              }
              matchFound = true;
              break;
            }
          }
          if (matchFound) {
            break;
          }
        }
      }
    }
    function delegateListener(event, optionalArg) {
      const options = getOptions(optionalArg);
      const fakeEvent = new FakeEvent(event);
      const delegates = delegatedEvents[event.type];
      const [eventTarget] = getEventTargets(event);
      let element2 = eventTarget;
      while (is.element(element2)) {
        for (let i = 0; i < delegates.length; i++) {
          const cur = delegates[i];
          const {
            selector,
            context
          } = cur;
          if (matchesSelector(element2, selector) && nodeContains(context, eventTarget) && nodeContains(context, element2)) {
            const {
              listeners
            } = cur;
            fakeEvent.currentTarget = element2;
            for (const entry of listeners) {
              if (optionsMatch(entry.options, options)) {
                entry.func(fakeEvent);
              }
            }
          }
        }
        element2 = parentNode(element2);
      }
    }
    function delegateUseCapture(event) {
      return delegateListener.call(this, event, true);
    }
    return eventsMethods;
  }
  class FakeEvent {
    constructor(originalEvent) {
      this.currentTarget = void 0;
      this.originalEvent = void 0;
      this.type = void 0;
      this.originalEvent = originalEvent;
      pointerExtend(this, originalEvent);
    }
    preventOriginalDefault() {
      this.originalEvent.preventDefault();
    }
    stopPropagation() {
      this.originalEvent.stopPropagation();
    }
    stopImmediatePropagation() {
      this.originalEvent.stopImmediatePropagation();
    }
  }
  function getOptions(param) {
    if (!is.object(param)) {
      return {
        capture: !!param,
        passive: false
      };
    }
    return {
      capture: !!param.capture,
      passive: !!param.passive
    };
  }
  function optionsMatch(a, b) {
    if (a === b) return true;
    if (typeof a === "boolean") return !!b.capture === a && !!b.passive === false;
    return !!a.capture === !!b.capture && !!a.passive === !!b.passive;
  }
  var events = {
    id: "events",
    install: install$a
  };
  const preventDefault = function preventDefault2(newValue) {
    if (/^(always|never|auto)$/.test(newValue)) {
      this.options.preventDefault = newValue;
      return this;
    }
    if (is.bool(newValue)) {
      this.options.preventDefault = newValue ? "always" : "never";
      return this;
    }
    return this.options.preventDefault;
  };
  function checkAndPreventDefault(interactable, scope2, event) {
    const setting = interactable.options.preventDefault;
    if (setting === "never") return;
    if (setting === "always") {
      event.preventDefault();
      return;
    }
    if (scope2.events.supportsPassive && /^touch(start|move)$/.test(event.type)) {
      const doc = getWindow(event.target).document;
      const docOptions = scope2.getDocOptions(doc);
      if (!(docOptions && docOptions.events) || docOptions.events.passive !== false) {
        return;
      }
    }
    if (/^(mouse|pointer|touch)*(down|start)/i.test(event.type)) {
      return;
    }
    if (is.element(event.target) && matchesSelector(event.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *")) {
      return;
    }
    event.preventDefault();
  }
  function onInteractionEvent(_ref) {
    let {
      interaction,
      event
    } = _ref;
    if (interaction.interactable) {
      interaction.interactable.checkAndPreventDefault(event);
    }
  }
  function install$9(scope2) {
    const {
      Interactable: Interactable2
    } = scope2;
    Interactable2.prototype.preventDefault = preventDefault;
    Interactable2.prototype.checkAndPreventDefault = function(event) {
      return checkAndPreventDefault(this, scope2, event);
    };
    scope2.interactions.docEvents.push({
      type: "dragstart",
      listener(event) {
        for (const interaction of scope2.interactions.list) {
          if (interaction.element && (interaction.element === event.target || nodeContains(interaction.element, event.target))) {
            interaction.interactable.checkAndPreventDefault(event);
            return;
          }
        }
      }
    });
  }
  var interactablePreventDefault = {
    id: "core/interactablePreventDefault",
    install: install$9,
    listeners: ["down", "move", "up", "cancel"].reduce((acc, eventType) => {
      acc[`interactions:${eventType}`] = onInteractionEvent;
      return acc;
    }, {})
  };
  function warnOnce(method, message) {
    let warned = false;
    return function() {
      if (!warned) {
        win.console.warn(message);
        warned = true;
      }
      return method.apply(this, arguments);
    };
  }
  function copyAction(dest, src) {
    dest.name = src.name;
    dest.axis = src.axis;
    dest.edges = src.edges;
    return dest;
  }
  function getStringOptionResult(value, target, element2) {
    if (value === "parent") {
      return parentNode(element2);
    }
    if (value === "self") {
      return target.getRect(element2);
    }
    return closest(element2, value);
  }
  function resolveRectLike(value, target, element2, functionArgs) {
    let returnValue = value;
    if (is.string(returnValue)) {
      returnValue = getStringOptionResult(returnValue, target, element2);
    } else if (is.func(returnValue)) {
      returnValue = returnValue(...functionArgs);
    }
    if (is.element(returnValue)) {
      returnValue = getElementRect(returnValue);
    }
    return returnValue;
  }
  function rectToXY(rect) {
    return rect && {
      x: "x" in rect ? rect.x : rect.left,
      y: "y" in rect ? rect.y : rect.top
    };
  }
  function xywhToTlbr(rect) {
    if (rect && !("left" in rect && "top" in rect)) {
      rect = extend({}, rect);
      rect.left = rect.x || 0;
      rect.top = rect.y || 0;
      rect.right = rect.right || rect.left + rect.width;
      rect.bottom = rect.bottom || rect.top + rect.height;
    }
    return rect;
  }
  function tlbrToXywh(rect) {
    if (rect && !("x" in rect && "y" in rect)) {
      rect = extend({}, rect);
      rect.x = rect.left || 0;
      rect.y = rect.top || 0;
      rect.width = rect.width || (rect.right || 0) - rect.x;
      rect.height = rect.height || (rect.bottom || 0) - rect.y;
    }
    return rect;
  }
  function addEdges(edges, rect, delta) {
    if (edges.left) {
      rect.left += delta.x;
    }
    if (edges.right) {
      rect.right += delta.x;
    }
    if (edges.top) {
      rect.top += delta.y;
    }
    if (edges.bottom) {
      rect.bottom += delta.y;
    }
    rect.width = rect.right - rect.left;
    rect.height = rect.bottom - rect.top;
  }
  function getOriginXY(target, element2, actionName) {
    const actionOptions = actionName && target.options[actionName];
    const actionOrigin = actionOptions && actionOptions.origin;
    const origin = actionOrigin || target.options.origin;
    const originRect = resolveRectLike(origin, target, element2, [target && element2]);
    return rectToXY(originRect) || {
      x: 0,
      y: 0
    };
  }
  class BaseEvent {
    constructor(interaction) {
      this.immediatePropagationStopped = false;
      this.propagationStopped = false;
      this._interaction = interaction;
    }
    preventDefault() {
    }
    /**
     * Don't call any other listeners (even on the current target)
     */
    stopPropagation() {
      this.propagationStopped = true;
    }
    /**
     * Don't call listeners on the remaining targets
     */
    stopImmediatePropagation() {
      this.immediatePropagationStopped = this.propagationStopped = true;
    }
  }
  Object.defineProperty(BaseEvent.prototype, "interaction", {
    get() {
      return this._interaction._proxy;
    },
    set() {
    }
  });
  const defaults$6 = {
    base: {
      preventDefault: "auto",
      deltaSource: "page"
    },
    perAction: {
      enabled: false,
      origin: {
        x: 0,
        y: 0
      }
    },
    actions: {}
  };
  class InteractEvent extends BaseEvent {
    constructor(interaction, event, actionName, phase, element2, preEnd, type) {
      super(interaction);
      this.relatedTarget = null;
      this.screenX = void 0;
      this.screenY = void 0;
      this.button = void 0;
      this.buttons = void 0;
      this.ctrlKey = void 0;
      this.shiftKey = void 0;
      this.altKey = void 0;
      this.metaKey = void 0;
      this.page = void 0;
      this.client = void 0;
      this.delta = void 0;
      this.rect = void 0;
      this.x0 = void 0;
      this.y0 = void 0;
      this.t0 = void 0;
      this.dt = void 0;
      this.duration = void 0;
      this.clientX0 = void 0;
      this.clientY0 = void 0;
      this.velocity = void 0;
      this.speed = void 0;
      this.swipe = void 0;
      this.axes = void 0;
      this.preEnd = void 0;
      element2 = element2 || interaction.element;
      const target = interaction.interactable;
      const deltaSource = (target && target.options || defaults$6).deltaSource;
      const origin = getOriginXY(target, element2, actionName);
      const starting = phase === "start";
      const ending = phase === "end";
      const prevEvent = starting ? this : interaction.prevEvent;
      const coords = starting ? interaction.coords.start : ending ? {
        page: prevEvent.page,
        client: prevEvent.client,
        timeStamp: interaction.coords.cur.timeStamp
      } : interaction.coords.cur;
      this.page = extend({}, coords.page);
      this.client = extend({}, coords.client);
      this.rect = extend({}, interaction.rect);
      this.timeStamp = coords.timeStamp;
      if (!ending) {
        this.page.x -= origin.x;
        this.page.y -= origin.y;
        this.client.x -= origin.x;
        this.client.y -= origin.y;
      }
      this.ctrlKey = event.ctrlKey;
      this.altKey = event.altKey;
      this.shiftKey = event.shiftKey;
      this.metaKey = event.metaKey;
      this.button = event.button;
      this.buttons = event.buttons;
      this.target = element2;
      this.currentTarget = element2;
      this.preEnd = preEnd;
      this.type = type || actionName + (phase || "");
      this.interactable = target;
      this.t0 = starting ? interaction.pointers[interaction.pointers.length - 1].downTime : prevEvent.t0;
      this.x0 = interaction.coords.start.page.x - origin.x;
      this.y0 = interaction.coords.start.page.y - origin.y;
      this.clientX0 = interaction.coords.start.client.x - origin.x;
      this.clientY0 = interaction.coords.start.client.y - origin.y;
      if (starting || ending) {
        this.delta = {
          x: 0,
          y: 0
        };
      } else {
        this.delta = {
          x: this[deltaSource].x - prevEvent[deltaSource].x,
          y: this[deltaSource].y - prevEvent[deltaSource].y
        };
      }
      this.dt = interaction.coords.delta.timeStamp;
      this.duration = this.timeStamp - this.t0;
      this.velocity = extend({}, interaction.coords.velocity[deltaSource]);
      this.speed = hypot(this.velocity.x, this.velocity.y);
      this.swipe = ending || phase === "inertiastart" ? this.getSwipe() : null;
    }
    getSwipe() {
      const interaction = this._interaction;
      if (interaction.prevEvent.speed < 600 || this.timeStamp - interaction.prevEvent.timeStamp > 150) {
        return null;
      }
      let angle = 180 * Math.atan2(interaction.prevEvent.velocityY, interaction.prevEvent.velocityX) / Math.PI;
      const overlap = 22.5;
      if (angle < 0) {
        angle += 360;
      }
      const left = 135 - overlap <= angle && angle < 225 + overlap;
      const up = 225 - overlap <= angle && angle < 315 + overlap;
      const right = !left && (315 - overlap <= angle || angle < 45 + overlap);
      const down = !up && 45 - overlap <= angle && angle < 135 + overlap;
      return {
        up,
        down,
        left,
        right,
        angle,
        speed: interaction.prevEvent.speed,
        velocity: {
          x: interaction.prevEvent.velocityX,
          y: interaction.prevEvent.velocityY
        }
      };
    }
    preventDefault() {
    }
    /**
     * Don't call listeners on the remaining targets
     */
    stopImmediatePropagation() {
      this.immediatePropagationStopped = this.propagationStopped = true;
    }
    /**
     * Don't call any other listeners (even on the current target)
     */
    stopPropagation() {
      this.propagationStopped = true;
    }
  }
  Object.defineProperties(InteractEvent.prototype, {
    pageX: {
      get() {
        return this.page.x;
      },
      set(value) {
        this.page.x = value;
      }
    },
    pageY: {
      get() {
        return this.page.y;
      },
      set(value) {
        this.page.y = value;
      }
    },
    clientX: {
      get() {
        return this.client.x;
      },
      set(value) {
        this.client.x = value;
      }
    },
    clientY: {
      get() {
        return this.client.y;
      },
      set(value) {
        this.client.y = value;
      }
    },
    dx: {
      get() {
        return this.delta.x;
      },
      set(value) {
        this.delta.x = value;
      }
    },
    dy: {
      get() {
        return this.delta.y;
      },
      set(value) {
        this.delta.y = value;
      }
    },
    velocityX: {
      get() {
        return this.velocity.x;
      },
      set(value) {
        this.velocity.x = value;
      }
    },
    velocityY: {
      get() {
        return this.velocity.y;
      },
      set(value) {
        this.velocity.y = value;
      }
    }
  });
  class PointerInfo {
    constructor(id2, pointer, event, downTime, downTarget) {
      this.id = void 0;
      this.pointer = void 0;
      this.event = void 0;
      this.downTime = void 0;
      this.downTarget = void 0;
      this.id = id2;
      this.pointer = pointer;
      this.event = event;
      this.downTime = downTime;
      this.downTarget = downTarget;
    }
  }
  let _ProxyValues = /* @__PURE__ */ function(_ProxyValues2) {
    _ProxyValues2["interactable"] = "";
    _ProxyValues2["element"] = "";
    _ProxyValues2["prepared"] = "";
    _ProxyValues2["pointerIsDown"] = "";
    _ProxyValues2["pointerWasMoved"] = "";
    _ProxyValues2["_proxy"] = "";
    return _ProxyValues2;
  }({});
  let _ProxyMethods = /* @__PURE__ */ function(_ProxyMethods2) {
    _ProxyMethods2["start"] = "";
    _ProxyMethods2["move"] = "";
    _ProxyMethods2["end"] = "";
    _ProxyMethods2["stop"] = "";
    _ProxyMethods2["interacting"] = "";
    return _ProxyMethods2;
  }({});
  let idCounter = 0;
  class Interaction {
    /** @internal */
    get pointerMoveTolerance() {
      return 1;
    }
    constructor(_ref) {
      this.interactable = null;
      this.element = null;
      this.rect = null;
      this._rects = void 0;
      this.edges = null;
      this._scopeFire = void 0;
      this.prepared = {
        name: null,
        axis: null,
        edges: null
      };
      this.pointerType = void 0;
      this.pointers = [];
      this.downEvent = null;
      this.downPointer = {};
      this._latestPointer = {
        pointer: null,
        event: null,
        eventTarget: null
      };
      this.prevEvent = null;
      this.pointerIsDown = false;
      this.pointerWasMoved = false;
      this._interacting = false;
      this._ending = false;
      this._stopped = true;
      this._proxy = void 0;
      this.simulation = null;
      this.doMove = warnOnce(function(signalArg) {
        this.move(signalArg);
      }, "The interaction.doMove() method has been renamed to interaction.move()");
      this.coords = {
        // Starting InteractEvent pointer coordinates
        start: newCoords(),
        // Previous native pointer move event coordinates
        prev: newCoords(),
        // current native pointer move event coordinates
        cur: newCoords(),
        // Change in coordinates and time of the pointer
        delta: newCoords(),
        // pointer velocity
        velocity: newCoords()
      };
      this._id = idCounter++;
      let {
        pointerType,
        scopeFire
      } = _ref;
      this._scopeFire = scopeFire;
      this.pointerType = pointerType;
      const that = this;
      this._proxy = {};
      for (const key in _ProxyValues) {
        Object.defineProperty(this._proxy, key, {
          get() {
            return that[key];
          }
        });
      }
      for (const key in _ProxyMethods) {
        Object.defineProperty(this._proxy, key, {
          value: function() {
            return that[key](...arguments);
          }
        });
      }
      this._scopeFire("interactions:new", {
        interaction: this
      });
    }
    pointerDown(pointer, event, eventTarget) {
      const pointerIndex = this.updatePointer(pointer, event, eventTarget, true);
      const pointerInfo = this.pointers[pointerIndex];
      this._scopeFire("interactions:down", {
        pointer,
        event,
        eventTarget,
        pointerIndex,
        pointerInfo,
        type: "down",
        interaction: this
      });
    }
    /**
     * ```js
     * interact(target)
     *   .draggable({
     *     // disable the default drag start by down->move
     *     manualStart: true
     *   })
     *   // start dragging after the user holds the pointer down
     *   .on('hold', function (event) {
     *     var interaction = event.interaction
     *
     *     if (!interaction.interacting()) {
     *       interaction.start({ name: 'drag' },
     *                         event.interactable,
     *                         event.currentTarget)
     *     }
     * })
     * ```
     *
     * Start an action with the given Interactable and Element as tartgets. The
     * action must be enabled for the target Interactable and an appropriate
     * number of pointers must be held down - 1 for drag/resize, 2 for gesture.
     *
     * Use it with `interactable.<action>able({ manualStart: false })` to always
     * [start actions manually](https://github.com/taye/interact.js/issues/114)
     *
     * @param action - The action to be performed - drag, resize, etc.
     * @param target - The Interactable to target
     * @param element - The DOM Element to target
     * @returns Whether the interaction was successfully started
     */
    start(action, interactable, element2) {
      if (this.interacting() || !this.pointerIsDown || this.pointers.length < (action.name === "gesture" ? 2 : 1) || !interactable.options[action.name].enabled) {
        return false;
      }
      copyAction(this.prepared, action);
      this.interactable = interactable;
      this.element = element2;
      this.rect = interactable.getRect(element2);
      this.edges = this.prepared.edges ? extend({}, this.prepared.edges) : {
        left: true,
        right: true,
        top: true,
        bottom: true
      };
      this._stopped = false;
      this._interacting = this._doPhase({
        interaction: this,
        event: this.downEvent,
        phase: "start"
      }) && !this._stopped;
      return this._interacting;
    }
    pointerMove(pointer, event, eventTarget) {
      if (!this.simulation && !(this.modification && this.modification.endResult)) {
        this.updatePointer(pointer, event, eventTarget, false);
      }
      const duplicateMove = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
      let dx;
      let dy;
      if (this.pointerIsDown && !this.pointerWasMoved) {
        dx = this.coords.cur.client.x - this.coords.start.client.x;
        dy = this.coords.cur.client.y - this.coords.start.client.y;
        this.pointerWasMoved = hypot(dx, dy) > this.pointerMoveTolerance;
      }
      const pointerIndex = this.getPointerIndex(pointer);
      const signalArg = {
        pointer,
        pointerIndex,
        pointerInfo: this.pointers[pointerIndex],
        event,
        type: "move",
        eventTarget,
        dx,
        dy,
        duplicate: duplicateMove,
        interaction: this
      };
      if (!duplicateMove) {
        setCoordVelocity(this.coords.velocity, this.coords.delta);
      }
      this._scopeFire("interactions:move", signalArg);
      if (!duplicateMove && !this.simulation) {
        if (this.interacting()) {
          signalArg.type = null;
          this.move(signalArg);
        }
        if (this.pointerWasMoved) {
          copyCoords(this.coords.prev, this.coords.cur);
        }
      }
    }
    /**
     * ```js
     * interact(target)
     *   .draggable(true)
     *   .on('dragmove', function (event) {
     *     if (someCondition) {
     *       // change the snap settings
     *       event.interactable.draggable({ snap: { targets: [] }})
     *       // fire another move event with re-calculated snap
     *       event.interaction.move()
     *     }
     *   })
     * ```
     *
     * Force a move of the current action at the same coordinates. Useful if
     * snap/restrict has been changed and you want a movement with the new
     * settings.
     */
    move(signalArg) {
      if (!signalArg || !signalArg.event) {
        setZeroCoords(this.coords.delta);
      }
      signalArg = extend({
        pointer: this._latestPointer.pointer,
        event: this._latestPointer.event,
        eventTarget: this._latestPointer.eventTarget,
        interaction: this
      }, signalArg || {});
      signalArg.phase = "move";
      this._doPhase(signalArg);
    }
    /**
     * @internal
     * End interact move events and stop auto-scroll unless simulation is running
     */
    pointerUp(pointer, event, eventTarget, curEventTarget) {
      let pointerIndex = this.getPointerIndex(pointer);
      if (pointerIndex === -1) {
        pointerIndex = this.updatePointer(pointer, event, eventTarget, false);
      }
      const type = /cancel$/i.test(event.type) ? "cancel" : "up";
      this._scopeFire(`interactions:${type}`, {
        pointer,
        pointerIndex,
        pointerInfo: this.pointers[pointerIndex],
        event,
        eventTarget,
        type,
        curEventTarget,
        interaction: this
      });
      if (!this.simulation) {
        this.end(event);
      }
      this.removePointer(pointer, event);
    }
    /** @internal */
    documentBlur(event) {
      this.end(event);
      this._scopeFire("interactions:blur", {
        event,
        type: "blur",
        interaction: this
      });
    }
    /**
     * ```js
     * interact(target)
     *   .draggable(true)
     *   .on('move', function (event) {
     *     if (event.pageX > 1000) {
     *       // end the current action
     *       event.interaction.end()
     *       // stop all further listeners from being called
     *       event.stopImmediatePropagation()
     *     }
     *   })
     * ```
     */
    end(event) {
      this._ending = true;
      event = event || this._latestPointer.event;
      let endPhaseResult;
      if (this.interacting()) {
        endPhaseResult = this._doPhase({
          event,
          interaction: this,
          phase: "end"
        });
      }
      this._ending = false;
      if (endPhaseResult === true) {
        this.stop();
      }
    }
    currentAction() {
      return this._interacting ? this.prepared.name : null;
    }
    interacting() {
      return this._interacting;
    }
    stop() {
      this._scopeFire("interactions:stop", {
        interaction: this
      });
      this.interactable = this.element = null;
      this._interacting = false;
      this._stopped = true;
      this.prepared.name = this.prevEvent = null;
    }
    /** @internal */
    getPointerIndex(pointer) {
      const pointerId = getPointerId(pointer);
      return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : findIndex(this.pointers, (curPointer) => curPointer.id === pointerId);
    }
    /** @internal */
    getPointerInfo(pointer) {
      return this.pointers[this.getPointerIndex(pointer)];
    }
    /** @internal */
    updatePointer(pointer, event, eventTarget, down) {
      const id2 = getPointerId(pointer);
      let pointerIndex = this.getPointerIndex(pointer);
      let pointerInfo = this.pointers[pointerIndex];
      down = down === false ? false : down || /(down|start)$/i.test(event.type);
      if (!pointerInfo) {
        pointerInfo = new PointerInfo(id2, pointer, event, null, null);
        pointerIndex = this.pointers.length;
        this.pointers.push(pointerInfo);
      } else {
        pointerInfo.pointer = pointer;
      }
      setCoords(this.coords.cur, this.pointers.map((p) => p.pointer), this._now());
      setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur);
      if (down) {
        this.pointerIsDown = true;
        pointerInfo.downTime = this.coords.cur.timeStamp;
        pointerInfo.downTarget = eventTarget;
        pointerExtend(this.downPointer, pointer);
        if (!this.interacting()) {
          copyCoords(this.coords.start, this.coords.cur);
          copyCoords(this.coords.prev, this.coords.cur);
          this.downEvent = event;
          this.pointerWasMoved = false;
        }
      }
      this._updateLatestPointer(pointer, event, eventTarget);
      this._scopeFire("interactions:update-pointer", {
        pointer,
        event,
        eventTarget,
        down,
        pointerInfo,
        pointerIndex,
        interaction: this
      });
      return pointerIndex;
    }
    /** @internal */
    removePointer(pointer, event) {
      const pointerIndex = this.getPointerIndex(pointer);
      if (pointerIndex === -1) return;
      const pointerInfo = this.pointers[pointerIndex];
      this._scopeFire("interactions:remove-pointer", {
        pointer,
        event,
        eventTarget: null,
        pointerIndex,
        pointerInfo,
        interaction: this
      });
      this.pointers.splice(pointerIndex, 1);
      this.pointerIsDown = false;
    }
    /** @internal */
    _updateLatestPointer(pointer, event, eventTarget) {
      this._latestPointer.pointer = pointer;
      this._latestPointer.event = event;
      this._latestPointer.eventTarget = eventTarget;
    }
    destroy() {
      this._latestPointer.pointer = null;
      this._latestPointer.event = null;
      this._latestPointer.eventTarget = null;
    }
    /** @internal */
    _createPreparedEvent(event, phase, preEnd, type) {
      return new InteractEvent(this, event, this.prepared.name, phase, this.element, preEnd, type);
    }
    /** @internal */
    _fireEvent(iEvent) {
      var _this$interactable;
      (_this$interactable = this.interactable) == null ? void 0 : _this$interactable.fire(iEvent);
      if (!this.prevEvent || iEvent.timeStamp >= this.prevEvent.timeStamp) {
        this.prevEvent = iEvent;
      }
    }
    /** @internal */
    _doPhase(signalArg) {
      const {
        event,
        phase,
        preEnd,
        type
      } = signalArg;
      const {
        rect
      } = this;
      if (rect && phase === "move") {
        addEdges(this.edges, rect, this.coords.delta[this.interactable.options.deltaSource]);
        rect.width = rect.right - rect.left;
        rect.height = rect.bottom - rect.top;
      }
      const beforeResult = this._scopeFire(`interactions:before-action-${phase}`, signalArg);
      if (beforeResult === false) {
        return false;
      }
      const iEvent = signalArg.iEvent = this._createPreparedEvent(event, phase, preEnd, type);
      this._scopeFire(`interactions:action-${phase}`, signalArg);
      if (phase === "start") {
        this.prevEvent = iEvent;
      }
      this._fireEvent(iEvent);
      this._scopeFire(`interactions:after-action-${phase}`, signalArg);
      return true;
    }
    /** @internal */
    _now() {
      return Date.now();
    }
  }
  const finder = {
    methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"],
    search(details) {
      for (const method of finder.methodOrder) {
        const interaction = finder[method](details);
        if (interaction) {
          return interaction;
        }
      }
      return null;
    },
    // try to resume simulation with a new pointer
    simulationResume(_ref) {
      let {
        pointerType,
        eventType,
        eventTarget,
        scope: scope2
      } = _ref;
      if (!/down|start/i.test(eventType)) {
        return null;
      }
      for (const interaction of scope2.interactions.list) {
        let element2 = eventTarget;
        if (interaction.simulation && interaction.simulation.allowResume && interaction.pointerType === pointerType) {
          while (element2) {
            if (element2 === interaction.element) {
              return interaction;
            }
            element2 = parentNode(element2);
          }
        }
      }
      return null;
    },
    // if it's a mouse or pen interaction
    mouseOrPen(_ref2) {
      let {
        pointerId,
        pointerType,
        eventType,
        scope: scope2
      } = _ref2;
      if (pointerType !== "mouse" && pointerType !== "pen") {
        return null;
      }
      let firstNonActive;
      for (const interaction of scope2.interactions.list) {
        if (interaction.pointerType === pointerType) {
          if (interaction.simulation && !hasPointerId(interaction, pointerId)) {
            continue;
          }
          if (interaction.interacting()) {
            return interaction;
          } else if (!firstNonActive) {
            firstNonActive = interaction;
          }
        }
      }
      if (firstNonActive) {
        return firstNonActive;
      }
      for (const interaction of scope2.interactions.list) {
        if (interaction.pointerType === pointerType && !(/down/i.test(eventType) && interaction.simulation)) {
          return interaction;
        }
      }
      return null;
    },
    // get interaction that has this pointer
    hasPointer(_ref3) {
      let {
        pointerId,
        scope: scope2
      } = _ref3;
      for (const interaction of scope2.interactions.list) {
        if (hasPointerId(interaction, pointerId)) {
          return interaction;
        }
      }
      return null;
    },
    // get first idle interaction with a matching pointerType
    idle(_ref4) {
      let {
        pointerType,
        scope: scope2
      } = _ref4;
      for (const interaction of scope2.interactions.list) {
        if (interaction.pointers.length === 1) {
          const target = interaction.interactable;
          if (target && !(target.options.gesture && target.options.gesture.enabled)) {
            continue;
          }
        } else if (interaction.pointers.length >= 2) {
          continue;
        }
        if (!interaction.interacting() && pointerType === interaction.pointerType) {
          return interaction;
        }
      }
      return null;
    }
  };
  function hasPointerId(interaction, pointerId) {
    return interaction.pointers.some((_ref5) => {
      let {
        id: id2
      } = _ref5;
      return id2 === pointerId;
    });
  }
  const methodNames = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
  function install$8(scope2) {
    const listeners = {};
    for (const method of methodNames) {
      listeners[method] = doOnInteractions(method, scope2);
    }
    const pEventTypes = browser.pEventTypes;
    let docEvents;
    if (domObjects.PointerEvent) {
      docEvents = [{
        type: pEventTypes.down,
        listener: releasePointersOnRemovedEls
      }, {
        type: pEventTypes.down,
        listener: listeners.pointerDown
      }, {
        type: pEventTypes.move,
        listener: listeners.pointerMove
      }, {
        type: pEventTypes.up,
        listener: listeners.pointerUp
      }, {
        type: pEventTypes.cancel,
        listener: listeners.pointerUp
      }];
    } else {
      docEvents = [{
        type: "mousedown",
        listener: listeners.pointerDown
      }, {
        type: "mousemove",
        listener: listeners.pointerMove
      }, {
        type: "mouseup",
        listener: listeners.pointerUp
      }, {
        type: "touchstart",
        listener: releasePointersOnRemovedEls
      }, {
        type: "touchstart",
        listener: listeners.pointerDown
      }, {
        type: "touchmove",
        listener: listeners.pointerMove
      }, {
        type: "touchend",
        listener: listeners.pointerUp
      }, {
        type: "touchcancel",
        listener: listeners.pointerUp
      }];
    }
    docEvents.push({
      type: "blur",
      listener(event) {
        for (const interaction of scope2.interactions.list) {
          interaction.documentBlur(event);
        }
      }
    });
    scope2.prevTouchTime = 0;
    scope2.Interaction = class extends Interaction {
      get pointerMoveTolerance() {
        return scope2.interactions.pointerMoveTolerance;
      }
      set pointerMoveTolerance(value) {
        scope2.interactions.pointerMoveTolerance = value;
      }
      _now() {
        return scope2.now();
      }
    };
    scope2.interactions = {
      // all active and idle interactions
      list: [],
      new(options) {
        options.scopeFire = (name, arg) => scope2.fire(name, arg);
        const interaction = new scope2.Interaction(options);
        scope2.interactions.list.push(interaction);
        return interaction;
      },
      listeners,
      docEvents,
      pointerMoveTolerance: 1
    };
    function releasePointersOnRemovedEls() {
      for (const interaction of scope2.interactions.list) {
        if (!interaction.pointerIsDown || interaction.pointerType !== "touch" || interaction._interacting) {
          continue;
        }
        for (const pointer of interaction.pointers) {
          if (!scope2.documents.some((_ref) => {
            let {
              doc
            } = _ref;
            return nodeContains(doc, pointer.downTarget);
          })) {
            interaction.removePointer(pointer.pointer, pointer.event);
          }
        }
      }
    }
    scope2.usePlugin(interactablePreventDefault);
  }
  function doOnInteractions(method, scope2) {
    return function(event) {
      const interactions2 = scope2.interactions.list;
      const pointerType = getPointerType(event);
      const [eventTarget, curEventTarget] = getEventTargets(event);
      const matches = [];
      if (/^touch/.test(event.type)) {
        scope2.prevTouchTime = scope2.now();
        for (const changedTouch of event.changedTouches) {
          const pointer = changedTouch;
          const pointerId = getPointerId(pointer);
          const searchDetails = {
            pointer,
            pointerId,
            pointerType,
            eventType: event.type,
            eventTarget,
            curEventTarget,
            scope: scope2
          };
          const interaction = getInteraction(searchDetails);
          matches.push([searchDetails.pointer, searchDetails.eventTarget, searchDetails.curEventTarget, interaction]);
        }
      } else {
        let invalidPointer = false;
        if (!browser.supportsPointerEvent && /mouse/.test(event.type)) {
          for (let i = 0; i < interactions2.length && !invalidPointer; i++) {
            invalidPointer = interactions2[i].pointerType !== "mouse" && interactions2[i].pointerIsDown;
          }
          invalidPointer = invalidPointer || scope2.now() - scope2.prevTouchTime < 500 || // on iOS and Firefox Mobile, MouseEvent.timeStamp is zero if simulated
          event.timeStamp === 0;
        }
        if (!invalidPointer) {
          const searchDetails = {
            pointer: event,
            pointerId: getPointerId(event),
            pointerType,
            eventType: event.type,
            curEventTarget,
            eventTarget,
            scope: scope2
          };
          const interaction = getInteraction(searchDetails);
          matches.push([searchDetails.pointer, searchDetails.eventTarget, searchDetails.curEventTarget, interaction]);
        }
      }
      for (const [pointer, eventTarget2, curEventTarget2, interaction] of matches) {
        interaction[method](pointer, event, eventTarget2, curEventTarget2);
      }
    };
  }
  function getInteraction(searchDetails) {
    const {
      pointerType,
      scope: scope2
    } = searchDetails;
    const foundInteraction = finder.search(searchDetails);
    const signalArg = {
      interaction: foundInteraction,
      searchDetails
    };
    scope2.fire("interactions:find", signalArg);
    return signalArg.interaction || scope2.interactions.new({
      pointerType
    });
  }
  function onDocSignal(_ref2, eventMethodName) {
    let {
      doc,
      scope: scope2,
      options
    } = _ref2;
    const {
      interactions: {
        docEvents
      },
      events: events2
    } = scope2;
    const eventMethod = events2[eventMethodName];
    if (scope2.browser.isIOS && !options.events) {
      options.events = {
        passive: false
      };
    }
    for (const eventType in events2.delegatedEvents) {
      eventMethod(doc, eventType, events2.delegateListener);
      eventMethod(doc, eventType, events2.delegateUseCapture, true);
    }
    const eventOptions = options && options.events;
    for (const {
      type,
      listener
    } of docEvents) {
      eventMethod(doc, type, listener, eventOptions);
    }
  }
  const interactions = {
    id: "core/interactions",
    install: install$8,
    listeners: {
      "scope:add-document": (arg) => onDocSignal(arg, "add"),
      "scope:remove-document": (arg) => onDocSignal(arg, "remove"),
      "interactable:unset": (_ref3, scope2) => {
        let {
          interactable
        } = _ref3;
        for (let i = scope2.interactions.list.length - 1; i >= 0; i--) {
          const interaction = scope2.interactions.list[i];
          if (interaction.interactable !== interactable) {
            continue;
          }
          interaction.stop();
          scope2.fire("interactions:destroy", {
            interaction
          });
          interaction.destroy();
          if (scope2.interactions.list.length > 2) {
            scope2.interactions.list.splice(i, 1);
          }
        }
      }
    },
    onDocSignal,
    doOnInteractions,
    methodNames
  };
  function isNonNativeEvent(type, actions) {
    if (actions.phaselessTypes[type]) {
      return true;
    }
    for (const name in actions.map) {
      if (type.indexOf(name) === 0 && type.substr(name.length) in actions.phases) {
        return true;
      }
    }
    return false;
  }
  var OnOffMethod = /* @__PURE__ */ function(OnOffMethod2) {
    OnOffMethod2[OnOffMethod2["On"] = 0] = "On";
    OnOffMethod2[OnOffMethod2["Off"] = 1] = "Off";
    return OnOffMethod2;
  }(OnOffMethod || {});
  class Interactable {
    /** @internal */
    get _defaults() {
      return {
        base: {},
        perAction: {},
        actions: {}
      };
    }
    constructor(target, options, defaultContext, scopeEvents) {
      this.target = void 0;
      this.options = void 0;
      this._actions = void 0;
      this.events = new Eventable();
      this._context = void 0;
      this._win = void 0;
      this._doc = void 0;
      this._scopeEvents = void 0;
      this._actions = options.actions;
      this.target = target;
      this._context = options.context || defaultContext;
      this._win = getWindow(trySelector(target) ? this._context : target);
      this._doc = this._win.document;
      this._scopeEvents = scopeEvents;
      this.set(options);
    }
    setOnEvents(actionName, phases) {
      if (is.func(phases.onstart)) {
        this.on(`${actionName}start`, phases.onstart);
      }
      if (is.func(phases.onmove)) {
        this.on(`${actionName}move`, phases.onmove);
      }
      if (is.func(phases.onend)) {
        this.on(`${actionName}end`, phases.onend);
      }
      if (is.func(phases.oninertiastart)) {
        this.on(`${actionName}inertiastart`, phases.oninertiastart);
      }
      return this;
    }
    updatePerActionListeners(actionName, prev, cur) {
      var _this$_actions$map$ac;
      const actionFilter = (_this$_actions$map$ac = this._actions.map[actionName]) == null ? void 0 : _this$_actions$map$ac.filterEventType;
      const filter = (type) => (actionFilter == null || actionFilter(type)) && isNonNativeEvent(type, this._actions);
      if (is.array(prev) || is.object(prev)) {
        this._onOff(OnOffMethod.Off, actionName, prev, void 0, filter);
      }
      if (is.array(cur) || is.object(cur)) {
        this._onOff(OnOffMethod.On, actionName, cur, void 0, filter);
      }
    }
    setPerAction(actionName, options) {
      const defaults2 = this._defaults;
      for (const optionName_ in options) {
        const optionName = optionName_;
        const actionOptions = this.options[actionName];
        const optionValue = options[optionName];
        if (optionName === "listeners") {
          this.updatePerActionListeners(actionName, actionOptions.listeners, optionValue);
        }
        if (is.array(optionValue)) {
          actionOptions[optionName] = from(optionValue);
        } else if (is.plainObject(optionValue)) {
          actionOptions[optionName] = extend(actionOptions[optionName] || {}, clone(optionValue));
          if (is.object(defaults2.perAction[optionName]) && "enabled" in defaults2.perAction[optionName]) {
            actionOptions[optionName].enabled = optionValue.enabled !== false;
          }
        } else if (is.bool(optionValue) && is.object(defaults2.perAction[optionName])) {
          actionOptions[optionName].enabled = optionValue;
        } else {
          actionOptions[optionName] = optionValue;
        }
      }
    }
    /**
     * The default function to get an Interactables bounding rect. Can be
     * overridden using {@link Interactable.rectChecker}.
     *
     * @param {Element} [element] The element to measure.
     * @return {Rect} The object's bounding rectangle.
     */
    getRect(element2) {
      element2 = element2 || (is.element(this.target) ? this.target : null);
      if (is.string(this.target)) {
        element2 = element2 || this._context.querySelector(this.target);
      }
      return getElementRect(element2);
    }
    /**
     * Returns or sets the function used to calculate the interactable's
     * element's rectangle
     *
     * @param {function} [checker] A function which returns this Interactable's
     * bounding rectangle. See {@link Interactable.getRect}
     * @return {function | object} The checker function or this Interactable
     */
    rectChecker(checker) {
      if (is.func(checker)) {
        this.getRect = (element2) => {
          const rect = extend({}, checker.apply(this, element2));
          if (!("width" in rect)) {
            rect.width = rect.right - rect.left;
            rect.height = rect.bottom - rect.top;
          }
          return rect;
        };
        return this;
      }
      if (checker === null) {
        delete this.getRect;
        return this;
      }
      return this.getRect;
    }
    /** @internal */
    _backCompatOption(optionName, newValue) {
      if (trySelector(newValue) || is.object(newValue)) {
        this.options[optionName] = newValue;
        for (const action in this._actions.map) {
          this.options[action][optionName] = newValue;
        }
        return this;
      }
      return this.options[optionName];
    }
    /**
     * Gets or sets the origin of the Interactable's element.  The x and y
     * of the origin will be subtracted from action event coordinates.
     *
     * @param {Element | object | string} [origin] An HTML or SVG Element whose
     * rect will be used, an object eg. { x: 0, y: 0 } or string 'parent', 'self'
     * or any CSS selector
     *
     * @return {object} The current origin or this Interactable
     */
    origin(newValue) {
      return this._backCompatOption("origin", newValue);
    }
    /**
     * Returns or sets the mouse coordinate types used to calculate the
     * movement of the pointer.
     *
     * @param {string} [newValue] Use 'client' if you will be scrolling while
     * interacting; Use 'page' if you want autoScroll to work
     * @return {string | object} The current deltaSource or this Interactable
     */
    deltaSource(newValue) {
      if (newValue === "page" || newValue === "client") {
        this.options.deltaSource = newValue;
        return this;
      }
      return this.options.deltaSource;
    }
    /** @internal */
    getAllElements() {
      const {
        target
      } = this;
      if (is.string(target)) {
        return Array.from(this._context.querySelectorAll(target));
      }
      if (is.func(target) && target.getAllElements) {
        return target.getAllElements();
      }
      return is.element(target) ? [target] : [];
    }
    /**
     * Gets the selector context Node of the Interactable. The default is
     * `window.document`.
     *
     * @return {Node} The context Node of this Interactable
     */
    context() {
      return this._context;
    }
    inContext(element2) {
      return this._context === element2.ownerDocument || nodeContains(this._context, element2);
    }
    /** @internal */
    testIgnoreAllow(options, targetNode, eventTarget) {
      return !this.testIgnore(options.ignoreFrom, targetNode, eventTarget) && this.testAllow(options.allowFrom, targetNode, eventTarget);
    }
    /** @internal */
    testAllow(allowFrom, targetNode, element2) {
      if (!allowFrom) {
        return true;
      }
      if (!is.element(element2)) {
        return false;
      }
      if (is.string(allowFrom)) {
        return matchesUpTo(element2, allowFrom, targetNode);
      } else if (is.element(allowFrom)) {
        return nodeContains(allowFrom, element2);
      }
      return false;
    }
    /** @internal */
    testIgnore(ignoreFrom, targetNode, element2) {
      if (!ignoreFrom || !is.element(element2)) {
        return false;
      }
      if (is.string(ignoreFrom)) {
        return matchesUpTo(element2, ignoreFrom, targetNode);
      } else if (is.element(ignoreFrom)) {
        return nodeContains(ignoreFrom, element2);
      }
      return false;
    }
    /**
     * Calls listeners for the given InteractEvent type bound globally
     * and directly to this Interactable
     *
     * @param {InteractEvent} iEvent The InteractEvent object to be fired on this
     * Interactable
     * @return {Interactable} this Interactable
     */
    fire(iEvent) {
      this.events.fire(iEvent);
      return this;
    }
    /** @internal */
    _onOff(method, typeArg, listenerArg, options, filter) {
      if (is.object(typeArg) && !is.array(typeArg)) {
        options = listenerArg;
        listenerArg = null;
      }
      const listeners = normalize(typeArg, listenerArg, filter);
      for (let type in listeners) {
        if (type === "wheel") {
          type = browser.wheelEvent;
        }
        for (const listener of listeners[type]) {
          if (isNonNativeEvent(type, this._actions)) {
            this.events[method === OnOffMethod.On ? "on" : "off"](type, listener);
          } else if (is.string(this.target)) {
            this._scopeEvents[method === OnOffMethod.On ? "addDelegate" : "removeDelegate"](this.target, this._context, type, listener, options);
          } else {
            this._scopeEvents[method === OnOffMethod.On ? "add" : "remove"](this.target, type, listener, options);
          }
        }
      }
      return this;
    }
    /**
     * Binds a listener for an InteractEvent, pointerEvent or DOM event.
     *
     * @param {string | array | object} types The types of events to listen
     * for
     * @param {function | array | object} [listener] The event listener function(s)
     * @param {object | boolean} [options] options object or useCapture flag for
     * addEventListener
     * @return {Interactable} This Interactable
     */
    on(types, listener, options) {
      return this._onOff(OnOffMethod.On, types, listener, options);
    }
    /**
     * Removes an InteractEvent, pointerEvent or DOM event listener.
     *
     * @param {string | array | object} types The types of events that were
     * listened for
     * @param {function | array | object} [listener] The event listener function(s)
     * @param {object | boolean} [options] options object or useCapture flag for
     * removeEventListener
     * @return {Interactable} This Interactable
     */
    off(types, listener, options) {
      return this._onOff(OnOffMethod.Off, types, listener, options);
    }
    /**
     * Reset the options of this Interactable
     *
     * @param {object} options The new settings to apply
     * @return {object} This Interactable
     */
    set(options) {
      const defaults2 = this._defaults;
      if (!is.object(options)) {
        options = {};
      }
      this.options = clone(defaults2.base);
      for (const actionName_ in this._actions.methodDict) {
        const actionName = actionName_;
        const methodName = this._actions.methodDict[actionName];
        this.options[actionName] = {};
        this.setPerAction(actionName, extend(extend({}, defaults2.perAction), defaults2.actions[actionName]));
        this[methodName](options[actionName]);
      }
      for (const setting in options) {
        if (setting === "getRect") {
          this.rectChecker(options.getRect);
          continue;
        }
        if (is.func(this[setting])) {
          this[setting](options[setting]);
        }
      }
      return this;
    }
    /**
     * Remove this interactable from the list of interactables and remove it's
     * action capabilities and event listeners
     */
    unset() {
      if (is.string(this.target)) {
        for (const type in this._scopeEvents.delegatedEvents) {
          const delegated = this._scopeEvents.delegatedEvents[type];
          for (let i = delegated.length - 1; i >= 0; i--) {
            const {
              selector,
              context,
              listeners
            } = delegated[i];
            if (selector === this.target && context === this._context) {
              delegated.splice(i, 1);
            }
            for (let l = listeners.length - 1; l >= 0; l--) {
              this._scopeEvents.removeDelegate(this.target, this._context, type, listeners[l][0], listeners[l][1]);
            }
          }
        }
      } else {
        this._scopeEvents.remove(this.target, "all");
      }
    }
  }
  class InteractableSet {
    constructor(scope2) {
      this.list = [];
      this.selectorMap = {};
      this.scope = void 0;
      this.scope = scope2;
      scope2.addListeners({
        "interactable:unset": (_ref) => {
          let {
            interactable
          } = _ref;
          const {
            target
          } = interactable;
          const interactablesOnTarget = is.string(target) ? this.selectorMap[target] : target[this.scope.id];
          const targetIndex = findIndex(interactablesOnTarget, (i) => i === interactable);
          interactablesOnTarget.splice(targetIndex, 1);
        }
      });
    }
    new(target, options) {
      options = extend(options || {}, {
        actions: this.scope.actions
      });
      const interactable = new this.scope.Interactable(target, options, this.scope.document, this.scope.events);
      this.scope.addDocument(interactable._doc);
      this.list.push(interactable);
      if (is.string(target)) {
        if (!this.selectorMap[target]) {
          this.selectorMap[target] = [];
        }
        this.selectorMap[target].push(interactable);
      } else {
        if (!interactable.target[this.scope.id]) {
          Object.defineProperty(target, this.scope.id, {
            value: [],
            configurable: true
          });
        }
        target[this.scope.id].push(interactable);
      }
      this.scope.fire("interactable:new", {
        target,
        options,
        interactable,
        win: this.scope._win
      });
      return interactable;
    }
    getExisting(target, options) {
      const context = options && options.context || this.scope.document;
      const isSelector = is.string(target);
      const interactablesOnTarget = isSelector ? this.selectorMap[target] : target[this.scope.id];
      if (!interactablesOnTarget) return void 0;
      return find(interactablesOnTarget, (interactable) => interactable._context === context && (isSelector || interactable.inContext(target)));
    }
    forEachMatch(node, callback) {
      for (const interactable of this.list) {
        let ret;
        if ((is.string(interactable.target) ? (
          // target is a selector and the element matches
          is.element(node) && matchesSelector(node, interactable.target)
        ) : (
          // target is the element
          node === interactable.target
        )) && // the element is in context
        interactable.inContext(node)) {
          ret = callback(interactable);
        }
        if (ret !== void 0) {
          return ret;
        }
      }
    }
  }
  function createInteractStatic(scope2) {
    const interact2 = (target, options) => {
      let interactable = scope2.interactables.getExisting(target, options);
      if (!interactable) {
        interactable = scope2.interactables.new(target, options);
        interactable.events.global = interact2.globalEvents;
      }
      return interactable;
    };
    interact2.getPointerAverage = pointerAverage;
    interact2.getTouchBBox = touchBBox;
    interact2.getTouchDistance = touchDistance;
    interact2.getTouchAngle = touchAngle;
    interact2.getElementRect = getElementRect;
    interact2.getElementClientRect = getElementClientRect;
    interact2.matchesSelector = matchesSelector;
    interact2.closest = closest;
    interact2.globalEvents = {};
    interact2.version = "1.10.27";
    interact2.scope = scope2;
    interact2.use = function(plugin2, options) {
      this.scope.usePlugin(plugin2, options);
      return this;
    };
    interact2.isSet = function(target, options) {
      return !!this.scope.interactables.get(target, options && options.context);
    };
    interact2.on = warnOnce(function on(type, listener, options) {
      if (is.string(type) && type.search(" ") !== -1) {
        type = type.trim().split(/ +/);
      }
      if (is.array(type)) {
        for (const eventType of type) {
          this.on(eventType, listener, options);
        }
        return this;
      }
      if (is.object(type)) {
        for (const prop2 in type) {
          this.on(prop2, type[prop2], listener);
        }
        return this;
      }
      if (isNonNativeEvent(type, this.scope.actions)) {
        if (!this.globalEvents[type]) {
          this.globalEvents[type] = [listener];
        } else {
          this.globalEvents[type].push(listener);
        }
      } else {
        this.scope.events.add(this.scope.document, type, listener, {
          options
        });
      }
      return this;
    }, "The interact.on() method is being deprecated");
    interact2.off = warnOnce(function off(type, listener, options) {
      if (is.string(type) && type.search(" ") !== -1) {
        type = type.trim().split(/ +/);
      }
      if (is.array(type)) {
        for (const eventType of type) {
          this.off(eventType, listener, options);
        }
        return this;
      }
      if (is.object(type)) {
        for (const prop2 in type) {
          this.off(prop2, type[prop2], listener);
        }
        return this;
      }
      if (isNonNativeEvent(type, this.scope.actions)) {
        let index;
        if (type in this.globalEvents && (index = this.globalEvents[type].indexOf(listener)) !== -1) {
          this.globalEvents[type].splice(index, 1);
        }
      } else {
        this.scope.events.remove(this.scope.document, type, listener, options);
      }
      return this;
    }, "The interact.off() method is being deprecated");
    interact2.debug = function() {
      return this.scope;
    };
    interact2.supportsTouch = function() {
      return browser.supportsTouch;
    };
    interact2.supportsPointerEvent = function() {
      return browser.supportsPointerEvent;
    };
    interact2.stop = function() {
      for (const interaction of this.scope.interactions.list) {
        interaction.stop();
      }
      return this;
    };
    interact2.pointerMoveTolerance = function(newValue) {
      if (is.number(newValue)) {
        this.scope.interactions.pointerMoveTolerance = newValue;
        return this;
      }
      return this.scope.interactions.pointerMoveTolerance;
    };
    interact2.addDocument = function(doc, options) {
      this.scope.addDocument(doc, options);
    };
    interact2.removeDocument = function(doc) {
      this.scope.removeDocument(doc);
    };
    return interact2;
  }
  class Scope {
    constructor() {
      this.id = `__interact_scope_${Math.floor(Math.random() * 100)}`;
      this.isInitialized = false;
      this.listenerMaps = [];
      this.browser = browser;
      this.defaults = clone(defaults$6);
      this.Eventable = Eventable;
      this.actions = {
        map: {},
        phases: {
          start: true,
          move: true,
          end: true
        },
        methodDict: {},
        phaselessTypes: {}
      };
      this.interactStatic = createInteractStatic(this);
      this.InteractEvent = InteractEvent;
      this.Interactable = void 0;
      this.interactables = new InteractableSet(this);
      this._win = void 0;
      this.document = void 0;
      this.window = void 0;
      this.documents = [];
      this._plugins = {
        list: [],
        map: {}
      };
      this.onWindowUnload = (event) => this.removeDocument(event.target);
      const scope2 = this;
      this.Interactable = class extends Interactable {
        get _defaults() {
          return scope2.defaults;
        }
        set(options) {
          super.set(options);
          scope2.fire("interactable:set", {
            options,
            interactable: this
          });
          return this;
        }
        unset() {
          super.unset();
          const index = scope2.interactables.list.indexOf(this);
          if (index < 0) return;
          scope2.interactables.list.splice(index, 1);
          scope2.fire("interactable:unset", {
            interactable: this
          });
        }
      };
    }
    addListeners(map, id2) {
      this.listenerMaps.push({
        id: id2,
        map
      });
    }
    fire(name, arg) {
      for (const {
        map: {
          [name]: listener
        }
      } of this.listenerMaps) {
        if (!!listener && listener(arg, this, name) === false) {
          return false;
        }
      }
    }
    init(window2) {
      return this.isInitialized ? this : initScope(this, window2);
    }
    pluginIsInstalled(plugin2) {
      const {
        id: id2
      } = plugin2;
      return id2 ? !!this._plugins.map[id2] : this._plugins.list.indexOf(plugin2) !== -1;
    }
    usePlugin(plugin2, options) {
      if (!this.isInitialized) {
        return this;
      }
      if (this.pluginIsInstalled(plugin2)) {
        return this;
      }
      if (plugin2.id) {
        this._plugins.map[plugin2.id] = plugin2;
      }
      this._plugins.list.push(plugin2);
      if (plugin2.install) {
        plugin2.install(this, options);
      }
      if (plugin2.listeners && plugin2.before) {
        let index = 0;
        const len = this.listenerMaps.length;
        const before = plugin2.before.reduce((acc, id2) => {
          acc[id2] = true;
          acc[pluginIdRoot(id2)] = true;
          return acc;
        }, {});
        for (; index < len; index++) {
          const otherId = this.listenerMaps[index].id;
          if (otherId && (before[otherId] || before[pluginIdRoot(otherId)])) {
            break;
          }
        }
        this.listenerMaps.splice(index, 0, {
          id: plugin2.id,
          map: plugin2.listeners
        });
      } else if (plugin2.listeners) {
        this.listenerMaps.push({
          id: plugin2.id,
          map: plugin2.listeners
        });
      }
      return this;
    }
    addDocument(doc, options) {
      if (this.getDocIndex(doc) !== -1) {
        return false;
      }
      const window2 = getWindow(doc);
      options = options ? extend({}, options) : {};
      this.documents.push({
        doc,
        options
      });
      this.events.documents.push(doc);
      if (doc !== this.document) {
        this.events.add(window2, "unload", this.onWindowUnload);
      }
      this.fire("scope:add-document", {
        doc,
        window: window2,
        scope: this,
        options
      });
    }
    removeDocument(doc) {
      const index = this.getDocIndex(doc);
      const window2 = getWindow(doc);
      const options = this.documents[index].options;
      this.events.remove(window2, "unload", this.onWindowUnload);
      this.documents.splice(index, 1);
      this.events.documents.splice(index, 1);
      this.fire("scope:remove-document", {
        doc,
        window: window2,
        scope: this,
        options
      });
    }
    getDocIndex(doc) {
      for (let i = 0; i < this.documents.length; i++) {
        if (this.documents[i].doc === doc) {
          return i;
        }
      }
      return -1;
    }
    getDocOptions(doc) {
      const docIndex = this.getDocIndex(doc);
      return docIndex === -1 ? null : this.documents[docIndex].options;
    }
    now() {
      return (this.window.Date || Date).now();
    }
  }
  function initScope(scope2, window2) {
    scope2.isInitialized = true;
    if (is.window(window2)) {
      init$2(window2);
    }
    domObjects.init(window2);
    browser.init(window2);
    raf.init(window2);
    scope2.window = window2;
    scope2.document = window2.document;
    scope2.usePlugin(interactions);
    scope2.usePlugin(events);
    return scope2;
  }
  function pluginIdRoot(id2) {
    return id2 && id2.replace(/\/.*$/, "");
  }
  const scope = new Scope();
  const interact = scope.interactStatic;
  const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : window;
  scope.init(_global);
  function install$7(scope2) {
    const {
      Interactable: Interactable2
      // tslint:disable-line no-shadowed-variable
    } = scope2;
    Interactable2.prototype.getAction = function getAction(pointer, event, interaction, element2) {
      const action = defaultActionChecker(this, event, interaction, element2, scope2);
      if (this.options.actionChecker) {
        return this.options.actionChecker(pointer, event, action, this, element2, interaction);
      }
      return action;
    };
    Interactable2.prototype.ignoreFrom = warnOnce(function(newValue) {
      return this._backCompatOption("ignoreFrom", newValue);
    }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue}).");
    Interactable2.prototype.allowFrom = warnOnce(function(newValue) {
      return this._backCompatOption("allowFrom", newValue);
    }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue}).");
    Interactable2.prototype.actionChecker = actionChecker;
    Interactable2.prototype.styleCursor = styleCursor;
  }
  function defaultActionChecker(interactable, event, interaction, element2, scope2) {
    const rect = interactable.getRect(element2);
    const buttons = event.buttons || {
      0: 1,
      1: 4,
      3: 8,
      4: 16
    }[event.button];
    const arg = {
      action: null,
      interactable,
      interaction,
      element: element2,
      rect,
      buttons
    };
    scope2.fire("auto-start:check", arg);
    return arg.action;
  }
  function styleCursor(newValue) {
    if (is.bool(newValue)) {
      this.options.styleCursor = newValue;
      return this;
    }
    if (newValue === null) {
      delete this.options.styleCursor;
      return this;
    }
    return this.options.styleCursor;
  }
  function actionChecker(checker) {
    if (is.func(checker)) {
      this.options.actionChecker = checker;
      return this;
    }
    if (checker === null) {
      delete this.options.actionChecker;
      return this;
    }
    return this.options.actionChecker;
  }
  var InteractableMethods = {
    id: "auto-start/interactableMethods",
    install: install$7
  };
  function install$6(scope2) {
    const {
      interactStatic: interact2,
      defaults: defaults2
    } = scope2;
    scope2.usePlugin(InteractableMethods);
    defaults2.base.actionChecker = null;
    defaults2.base.styleCursor = true;
    extend(defaults2.perAction, {
      manualStart: false,
      max: Infinity,
      maxPerElement: 1,
      allowFrom: null,
      ignoreFrom: null,
      // only allow left button by default
      // see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons#Return_value
      mouseButtons: 1
    });
    interact2.maxInteractions = (newValue) => maxInteractions(newValue, scope2);
    scope2.autoStart = {
      // Allow this many interactions to happen simultaneously
      maxInteractions: Infinity,
      withinInteractionLimit,
      cursorElement: null
    };
  }
  function prepareOnDown(_ref, scope2) {
    let {
      interaction,
      pointer,
      event,
      eventTarget
    } = _ref;
    if (interaction.interacting()) return;
    const actionInfo = getActionInfo(interaction, pointer, event, eventTarget, scope2);
    prepare(interaction, actionInfo, scope2);
  }
  function prepareOnMove(_ref2, scope2) {
    let {
      interaction,
      pointer,
      event,
      eventTarget
    } = _ref2;
    if (interaction.pointerType !== "mouse" || interaction.pointerIsDown || interaction.interacting()) return;
    const actionInfo = getActionInfo(interaction, pointer, event, eventTarget, scope2);
    prepare(interaction, actionInfo, scope2);
  }
  function startOnMove(arg, scope2) {
    const {
      interaction
    } = arg;
    if (!interaction.pointerIsDown || interaction.interacting() || !interaction.pointerWasMoved || !interaction.prepared.name) {
      return;
    }
    scope2.fire("autoStart:before-start", arg);
    const {
      interactable
    } = interaction;
    const actionName = interaction.prepared.name;
    if (actionName && interactable) {
      if (interactable.options[actionName].manualStart || !withinInteractionLimit(interactable, interaction.element, interaction.prepared, scope2)) {
        interaction.stop();
      } else {
        interaction.start(interaction.prepared, interactable, interaction.element);
        setInteractionCursor(interaction, scope2);
      }
    }
  }
  function clearCursorOnStop(_ref3, scope2) {
    let {
      interaction
    } = _ref3;
    const {
      interactable
    } = interaction;
    if (interactable && interactable.options.styleCursor) {
      setCursor(interaction.element, "", scope2);
    }
  }
  function validateAction(action, interactable, element2, eventTarget, scope2) {
    if (interactable.testIgnoreAllow(interactable.options[action.name], element2, eventTarget) && interactable.options[action.name].enabled && withinInteractionLimit(interactable, element2, action, scope2)) {
      return action;
    }
    return null;
  }
  function validateMatches(interaction, pointer, event, matches, matchElements, eventTarget, scope2) {
    for (let i = 0, len = matches.length; i < len; i++) {
      const match = matches[i];
      const matchElement = matchElements[i];
      const matchAction = match.getAction(pointer, event, interaction, matchElement);
      if (!matchAction) {
        continue;
      }
      const action = validateAction(matchAction, match, matchElement, eventTarget, scope2);
      if (action) {
        return {
          action,
          interactable: match,
          element: matchElement
        };
      }
    }
    return {
      action: null,
      interactable: null,
      element: null
    };
  }
  function getActionInfo(interaction, pointer, event, eventTarget, scope2) {
    let matches = [];
    let matchElements = [];
    let element2 = eventTarget;
    function pushMatches(interactable) {
      matches.push(interactable);
      matchElements.push(element2);
    }
    while (is.element(element2)) {
      matches = [];
      matchElements = [];
      scope2.interactables.forEachMatch(element2, pushMatches);
      const actionInfo = validateMatches(interaction, pointer, event, matches, matchElements, eventTarget, scope2);
      if (actionInfo.action && !actionInfo.interactable.options[actionInfo.action.name].manualStart) {
        return actionInfo;
      }
      element2 = parentNode(element2);
    }
    return {
      action: null,
      interactable: null,
      element: null
    };
  }
  function prepare(interaction, _ref4, scope2) {
    let {
      action,
      interactable,
      element: element2
    } = _ref4;
    action = action || {
      name: null
    };
    interaction.interactable = interactable;
    interaction.element = element2;
    copyAction(interaction.prepared, action);
    interaction.rect = interactable && action.name ? interactable.getRect(element2) : null;
    setInteractionCursor(interaction, scope2);
    scope2.fire("autoStart:prepared", {
      interaction
    });
  }
  function withinInteractionLimit(interactable, element2, action, scope2) {
    const options = interactable.options;
    const maxActions = options[action.name].max;
    const maxPerElement = options[action.name].maxPerElement;
    const autoStartMax = scope2.autoStart.maxInteractions;
    let activeInteractions = 0;
    let interactableCount = 0;
    let elementCount = 0;
    if (!(maxActions && maxPerElement && autoStartMax)) {
      return false;
    }
    for (const interaction of scope2.interactions.list) {
      const otherAction = interaction.prepared.name;
      if (!interaction.interacting()) {
        continue;
      }
      activeInteractions++;
      if (activeInteractions >= autoStartMax) {
        return false;
      }
      if (interaction.interactable !== interactable) {
        continue;
      }
      interactableCount += otherAction === action.name ? 1 : 0;
      if (interactableCount >= maxActions) {
        return false;
      }
      if (interaction.element === element2) {
        elementCount++;
        if (otherAction === action.name && elementCount >= maxPerElement) {
          return false;
        }
      }
    }
    return autoStartMax > 0;
  }
  function maxInteractions(newValue, scope2) {
    if (is.number(newValue)) {
      scope2.autoStart.maxInteractions = newValue;
      return this;
    }
    return scope2.autoStart.maxInteractions;
  }
  function setCursor(element2, cursor, scope2) {
    const {
      cursorElement: prevCursorElement
    } = scope2.autoStart;
    if (prevCursorElement && prevCursorElement !== element2) {
      prevCursorElement.style.cursor = "";
    }
    element2.ownerDocument.documentElement.style.cursor = cursor;
    element2.style.cursor = cursor;
    scope2.autoStart.cursorElement = cursor ? element2 : null;
  }
  function setInteractionCursor(interaction, scope2) {
    const {
      interactable,
      element: element2,
      prepared
    } = interaction;
    if (!(interaction.pointerType === "mouse" && interactable && interactable.options.styleCursor)) {
      if (scope2.autoStart.cursorElement) {
        setCursor(scope2.autoStart.cursorElement, "", scope2);
      }
      return;
    }
    let cursor = "";
    if (prepared.name) {
      const cursorChecker = interactable.options[prepared.name].cursorChecker;
      if (is.func(cursorChecker)) {
        cursor = cursorChecker(prepared, interactable, element2, interaction._interacting);
      } else {
        cursor = scope2.actions.map[prepared.name].getCursor(prepared);
      }
    }
    setCursor(interaction.element, cursor || "", scope2);
  }
  const autoStart = {
    id: "auto-start/base",
    before: ["actions"],
    install: install$6,
    listeners: {
      "interactions:down": prepareOnDown,
      "interactions:move": (arg, scope2) => {
        prepareOnMove(arg, scope2);
        startOnMove(arg, scope2);
      },
      "interactions:stop": clearCursorOnStop
    },
    maxInteractions,
    withinInteractionLimit,
    validateAction
  };
  function beforeStart(_ref, scope2) {
    let {
      interaction,
      eventTarget,
      dx,
      dy
    } = _ref;
    if (interaction.prepared.name !== "drag") return;
    const absX = Math.abs(dx);
    const absY = Math.abs(dy);
    const targetOptions = interaction.interactable.options.drag;
    const startAxis = targetOptions.startAxis;
    const currentAxis = absX > absY ? "x" : absX < absY ? "y" : "xy";
    interaction.prepared.axis = targetOptions.lockAxis === "start" ? currentAxis[0] : targetOptions.lockAxis;
    if (currentAxis !== "xy" && startAxis !== "xy" && startAxis !== currentAxis) {
      interaction.prepared.name = null;
      let element2 = eventTarget;
      const getDraggable = function(interactable) {
        if (interactable === interaction.interactable) return;
        const options = interaction.interactable.options.drag;
        if (!options.manualStart && interactable.testIgnoreAllow(options, element2, eventTarget)) {
          const action = interactable.getAction(interaction.downPointer, interaction.downEvent, interaction, element2);
          if (action && action.name === "drag" && checkStartAxis(currentAxis, interactable) && autoStart.validateAction(action, interactable, element2, eventTarget, scope2)) {
            return interactable;
          }
        }
      };
      while (is.element(element2)) {
        const interactable = scope2.interactables.forEachMatch(element2, getDraggable);
        if (interactable) {
          interaction.prepared.name = "drag";
          interaction.interactable = interactable;
          interaction.element = element2;
          break;
        }
        element2 = parentNode(element2);
      }
    }
  }
  function checkStartAxis(startAxis, interactable) {
    if (!interactable) {
      return false;
    }
    const thisAxis = interactable.options.drag.startAxis;
    return startAxis === "xy" || thisAxis === "xy" || thisAxis === startAxis;
  }
  var dragAxis = {
    id: "auto-start/dragAxis",
    listeners: {
      "autoStart:before-start": beforeStart
    }
  };
  function install$5(scope2) {
    const {
      defaults: defaults2
    } = scope2;
    scope2.usePlugin(autoStart);
    defaults2.perAction.hold = 0;
    defaults2.perAction.delay = 0;
  }
  function getHoldDuration(interaction) {
    const actionName = interaction.prepared && interaction.prepared.name;
    if (!actionName) {
      return null;
    }
    const options = interaction.interactable.options;
    return options[actionName].hold || options[actionName].delay;
  }
  const hold = {
    id: "auto-start/hold",
    install: install$5,
    listeners: {
      "interactions:new": (_ref) => {
        let {
          interaction
        } = _ref;
        interaction.autoStartHoldTimer = null;
      },
      "autoStart:prepared": (_ref2) => {
        let {
          interaction
        } = _ref2;
        const hold2 = getHoldDuration(interaction);
        if (hold2 > 0) {
          interaction.autoStartHoldTimer = setTimeout(() => {
            interaction.start(interaction.prepared, interaction.interactable, interaction.element);
          }, hold2);
        }
      },
      "interactions:move": (_ref3) => {
        let {
          interaction,
          duplicate
        } = _ref3;
        if (interaction.autoStartHoldTimer && interaction.pointerWasMoved && !duplicate) {
          clearTimeout(interaction.autoStartHoldTimer);
          interaction.autoStartHoldTimer = null;
        }
      },
      // prevent regular down->move autoStart
      "autoStart:before-start": (_ref4) => {
        let {
          interaction
        } = _ref4;
        const holdDuration = getHoldDuration(interaction);
        if (holdDuration > 0) {
          interaction.prepared.name = null;
        }
      }
    },
    getHoldDuration
  };
  var plugin$1 = {
    id: "auto-start",
    install(scope2) {
      scope2.usePlugin(autoStart);
      scope2.usePlugin(hold);
      scope2.usePlugin(dragAxis);
    }
  };
  interact.use(plugin$1);
  function install$4(scope2) {
    const {
      defaults: defaults2,
      actions
    } = scope2;
    scope2.autoScroll = autoScroll;
    autoScroll.now = () => scope2.now();
    actions.phaselessTypes.autoscroll = true;
    defaults2.perAction.autoScroll = autoScroll.defaults;
  }
  const autoScroll = {
    defaults: {
      enabled: false,
      margin: 60,
      // the item that is scrolled (Window or HTMLElement)
      container: null,
      // the scroll speed in pixels per second
      speed: 300
    },
    now: Date.now,
    interaction: null,
    i: 0,
    // the handle returned by window.setInterval
    // Direction each pulse is to scroll in
    x: 0,
    y: 0,
    isScrolling: false,
    prevTime: 0,
    margin: 0,
    speed: 0,
    start(interaction) {
      autoScroll.isScrolling = true;
      raf.cancel(autoScroll.i);
      interaction.autoScroll = autoScroll;
      autoScroll.interaction = interaction;
      autoScroll.prevTime = autoScroll.now();
      autoScroll.i = raf.request(autoScroll.scroll);
    },
    stop() {
      autoScroll.isScrolling = false;
      if (autoScroll.interaction) {
        autoScroll.interaction.autoScroll = null;
      }
      raf.cancel(autoScroll.i);
    },
    // scroll the window by the values in scroll.x/y
    scroll() {
      const {
        interaction
      } = autoScroll;
      const {
        interactable,
        element: element2
      } = interaction;
      const actionName = interaction.prepared.name;
      const options = interactable.options[actionName].autoScroll;
      const container = getContainer(options.container, interactable, element2);
      const now = autoScroll.now();
      const dt = (now - autoScroll.prevTime) / 1e3;
      const s = options.speed * dt;
      if (s >= 1) {
        const scrollBy = {
          x: autoScroll.x * s,
          y: autoScroll.y * s
        };
        if (scrollBy.x || scrollBy.y) {
          const prevScroll = getScroll(container);
          if (is.window(container)) {
            container.scrollBy(scrollBy.x, scrollBy.y);
          } else if (container) {
            container.scrollLeft += scrollBy.x;
            container.scrollTop += scrollBy.y;
          }
          const curScroll = getScroll(container);
          const delta = {
            x: curScroll.x - prevScroll.x,
            y: curScroll.y - prevScroll.y
          };
          if (delta.x || delta.y) {
            interactable.fire({
              type: "autoscroll",
              target: element2,
              interactable,
              delta,
              interaction,
              container
            });
          }
        }
        autoScroll.prevTime = now;
      }
      if (autoScroll.isScrolling) {
        raf.cancel(autoScroll.i);
        autoScroll.i = raf.request(autoScroll.scroll);
      }
    },
    check(interactable, actionName) {
      var _options$actionName$a;
      const options = interactable.options;
      return (_options$actionName$a = options[actionName].autoScroll) == null ? void 0 : _options$actionName$a.enabled;
    },
    onInteractionMove(_ref) {
      let {
        interaction,
        pointer
      } = _ref;
      if (!(interaction.interacting() && autoScroll.check(interaction.interactable, interaction.prepared.name))) {
        return;
      }
      if (interaction.simulation) {
        autoScroll.x = autoScroll.y = 0;
        return;
      }
      let top;
      let right;
      let bottom2;
      let left;
      const {
        interactable,
        element: element2
      } = interaction;
      const actionName = interaction.prepared.name;
      const options = interactable.options[actionName].autoScroll;
      const container = getContainer(options.container, interactable, element2);
      if (is.window(container)) {
        left = pointer.clientX < autoScroll.margin;
        top = pointer.clientY < autoScroll.margin;
        right = pointer.clientX > container.innerWidth - autoScroll.margin;
        bottom2 = pointer.clientY > container.innerHeight - autoScroll.margin;
      } else {
        const rect = getElementClientRect(container);
        left = pointer.clientX < rect.left + autoScroll.margin;
        top = pointer.clientY < rect.top + autoScroll.margin;
        right = pointer.clientX > rect.right - autoScroll.margin;
        bottom2 = pointer.clientY > rect.bottom - autoScroll.margin;
      }
      autoScroll.x = right ? 1 : left ? -1 : 0;
      autoScroll.y = bottom2 ? 1 : top ? -1 : 0;
      if (!autoScroll.isScrolling) {
        autoScroll.margin = options.margin;
        autoScroll.speed = options.speed;
        autoScroll.start(interaction);
      }
    }
  };
  function getContainer(value, interactable, element2) {
    return (is.string(value) ? getStringOptionResult(value, interactable, element2) : value) || getWindow(element2);
  }
  function getScroll(container) {
    if (is.window(container)) {
      container = window.document.body;
    }
    return {
      x: container.scrollLeft,
      y: container.scrollTop
    };
  }
  const autoScrollPlugin = {
    id: "auto-scroll",
    install: install$4,
    listeners: {
      "interactions:new": (_ref3) => {
        let {
          interaction
        } = _ref3;
        interaction.autoScroll = null;
      },
      "interactions:destroy": (_ref4) => {
        let {
          interaction
        } = _ref4;
        interaction.autoScroll = null;
        autoScroll.stop();
        if (autoScroll.interaction) {
          autoScroll.interaction = null;
        }
      },
      "interactions:stop": autoScroll.stop,
      "interactions:action-move": (arg) => autoScroll.onInteractionMove(arg)
    }
  };
  interact.use(autoScrollPlugin);
  function install$3(scope2) {
    const {
      actions,
      Interactable: Interactable2,
      defaults: defaults2
    } = scope2;
    Interactable2.prototype.draggable = drag.draggable;
    actions.map.drag = drag;
    actions.methodDict.drag = "draggable";
    defaults2.actions.drag = drag.defaults;
  }
  function beforeMove(_ref) {
    let {
      interaction
    } = _ref;
    if (interaction.prepared.name !== "drag") return;
    const axis = interaction.prepared.axis;
    if (axis === "x") {
      interaction.coords.cur.page.y = interaction.coords.start.page.y;
      interaction.coords.cur.client.y = interaction.coords.start.client.y;
      interaction.coords.velocity.client.y = 0;
      interaction.coords.velocity.page.y = 0;
    } else if (axis === "y") {
      interaction.coords.cur.page.x = interaction.coords.start.page.x;
      interaction.coords.cur.client.x = interaction.coords.start.client.x;
      interaction.coords.velocity.client.x = 0;
      interaction.coords.velocity.page.x = 0;
    }
  }
  function move$1(_ref2) {
    let {
      iEvent,
      interaction
    } = _ref2;
    if (interaction.prepared.name !== "drag") return;
    const axis = interaction.prepared.axis;
    if (axis === "x" || axis === "y") {
      const opposite = axis === "x" ? "y" : "x";
      iEvent.page[opposite] = interaction.coords.start.page[opposite];
      iEvent.client[opposite] = interaction.coords.start.client[opposite];
      iEvent.delta[opposite] = 0;
    }
  }
  const draggable = function draggable2(options) {
    if (is.object(options)) {
      this.options.drag.enabled = options.enabled !== false;
      this.setPerAction("drag", options);
      this.setOnEvents("drag", options);
      if (/^(xy|x|y|start)$/.test(options.lockAxis)) {
        this.options.drag.lockAxis = options.lockAxis;
      }
      if (/^(xy|x|y)$/.test(options.startAxis)) {
        this.options.drag.startAxis = options.startAxis;
      }
      return this;
    }
    if (is.bool(options)) {
      this.options.drag.enabled = options;
      return this;
    }
    return this.options.drag;
  };
  const drag = {
    id: "actions/drag",
    install: install$3,
    listeners: {
      "interactions:before-action-move": beforeMove,
      "interactions:action-resume": beforeMove,
      // dragmove
      "interactions:action-move": move$1,
      "auto-start:check": (arg) => {
        const {
          interaction,
          interactable,
          buttons
        } = arg;
        const dragOptions = interactable.options.drag;
        if (!(dragOptions && dragOptions.enabled) || // check mouseButton setting if the pointer is down
        interaction.pointerIsDown && /mouse|pointer/.test(interaction.pointerType) && (buttons & interactable.options.drag.mouseButtons) === 0) {
          return void 0;
        }
        arg.action = {
          name: "drag",
          axis: dragOptions.lockAxis === "start" ? dragOptions.startAxis : dragOptions.lockAxis
        };
        return false;
      }
    },
    draggable,
    beforeMove,
    move: move$1,
    defaults: {
      startAxis: "xy",
      lockAxis: "xy"
    },
    getCursor() {
      return "move";
    },
    filterEventType: (type) => type.search("drag") === 0
  };
  interact.use(drag);
  function install$2(scope2) {
    const {
      actions,
      browser: browser2,
      Interactable: Interactable2,
      // tslint:disable-line no-shadowed-variable
      defaults: defaults2
    } = scope2;
    resize.cursors = initCursors(browser2);
    resize.defaultMargin = browser2.supportsTouch || browser2.supportsPointerEvent ? 20 : 10;
    Interactable2.prototype.resizable = function(options) {
      return resizable(this, options, scope2);
    };
    actions.map.resize = resize;
    actions.methodDict.resize = "resizable";
    defaults2.actions.resize = resize.defaults;
  }
  function resizeChecker(arg) {
    const {
      interaction,
      interactable,
      element: element2,
      rect,
      buttons
    } = arg;
    if (!rect) {
      return void 0;
    }
    const page = extend({}, interaction.coords.cur.page);
    const resizeOptions = interactable.options.resize;
    if (!(resizeOptions && resizeOptions.enabled) || // check mouseButton setting if the pointer is down
    interaction.pointerIsDown && /mouse|pointer/.test(interaction.pointerType) && (buttons & resizeOptions.mouseButtons) === 0) {
      return void 0;
    }
    if (is.object(resizeOptions.edges)) {
      const resizeEdges = {
        left: false,
        right: false,
        top: false,
        bottom: false
      };
      for (const edge in resizeEdges) {
        resizeEdges[edge] = checkResizeEdge(edge, resizeOptions.edges[edge], page, interaction._latestPointer.eventTarget, element2, rect, resizeOptions.margin || resize.defaultMargin);
      }
      resizeEdges.left = resizeEdges.left && !resizeEdges.right;
      resizeEdges.top = resizeEdges.top && !resizeEdges.bottom;
      if (resizeEdges.left || resizeEdges.right || resizeEdges.top || resizeEdges.bottom) {
        arg.action = {
          name: "resize",
          edges: resizeEdges
        };
      }
    } else {
      const right = resizeOptions.axis !== "y" && page.x > rect.right - resize.defaultMargin;
      const bottom2 = resizeOptions.axis !== "x" && page.y > rect.bottom - resize.defaultMargin;
      if (right || bottom2) {
        arg.action = {
          name: "resize",
          axes: (right ? "x" : "") + (bottom2 ? "y" : "")
        };
      }
    }
    return arg.action ? false : void 0;
  }
  function resizable(interactable, options, scope2) {
    if (is.object(options)) {
      interactable.options.resize.enabled = options.enabled !== false;
      interactable.setPerAction("resize", options);
      interactable.setOnEvents("resize", options);
      if (is.string(options.axis) && /^x$|^y$|^xy$/.test(options.axis)) {
        interactable.options.resize.axis = options.axis;
      } else if (options.axis === null) {
        interactable.options.resize.axis = scope2.defaults.actions.resize.axis;
      }
      if (is.bool(options.preserveAspectRatio)) {
        interactable.options.resize.preserveAspectRatio = options.preserveAspectRatio;
      } else if (is.bool(options.square)) {
        interactable.options.resize.square = options.square;
      }
      return interactable;
    }
    if (is.bool(options)) {
      interactable.options.resize.enabled = options;
      return interactable;
    }
    return interactable.options.resize;
  }
  function checkResizeEdge(name, value, page, element2, interactableElement, rect, margin) {
    if (!value) {
      return false;
    }
    if (value === true) {
      const width = is.number(rect.width) ? rect.width : rect.right - rect.left;
      const height = is.number(rect.height) ? rect.height : rect.bottom - rect.top;
      margin = Math.min(margin, Math.abs((name === "left" || name === "right" ? width : height) / 2));
      if (width < 0) {
        if (name === "left") {
          name = "right";
        } else if (name === "right") {
          name = "left";
        }
      }
      if (height < 0) {
        if (name === "top") {
          name = "bottom";
        } else if (name === "bottom") {
          name = "top";
        }
      }
      if (name === "left") {
        const edge = width >= 0 ? rect.left : rect.right;
        return page.x < edge + margin;
      }
      if (name === "top") {
        const edge = height >= 0 ? rect.top : rect.bottom;
        return page.y < edge + margin;
      }
      if (name === "right") {
        return page.x > (width >= 0 ? rect.right : rect.left) - margin;
      }
      if (name === "bottom") {
        return page.y > (height >= 0 ? rect.bottom : rect.top) - margin;
      }
    }
    if (!is.element(element2)) {
      return false;
    }
    return is.element(value) ? (
      // the value is an element to use as a resize handle
      value === element2
    ) : (
      // otherwise check if element matches value as selector
      matchesUpTo(element2, value, interactableElement)
    );
  }
  function initCursors(browser2) {
    return browser2.isIe9 ? {
      x: "e-resize",
      y: "s-resize",
      xy: "se-resize",
      top: "n-resize",
      left: "w-resize",
      bottom: "s-resize",
      right: "e-resize",
      topleft: "se-resize",
      bottomright: "se-resize",
      topright: "ne-resize",
      bottomleft: "ne-resize"
    } : {
      x: "ew-resize",
      y: "ns-resize",
      xy: "nwse-resize",
      top: "ns-resize",
      left: "ew-resize",
      bottom: "ns-resize",
      right: "ew-resize",
      topleft: "nwse-resize",
      bottomright: "nwse-resize",
      topright: "nesw-resize",
      bottomleft: "nesw-resize"
    };
  }
  function start$6(_ref) {
    let {
      iEvent,
      interaction
    } = _ref;
    if (interaction.prepared.name !== "resize" || !interaction.prepared.edges) {
      return;
    }
    const resizeEvent = iEvent;
    const rect = interaction.rect;
    interaction._rects = {
      start: extend({}, rect),
      corrected: extend({}, rect),
      previous: extend({}, rect),
      delta: {
        left: 0,
        right: 0,
        width: 0,
        top: 0,
        bottom: 0,
        height: 0
      }
    };
    resizeEvent.edges = interaction.prepared.edges;
    resizeEvent.rect = interaction._rects.corrected;
    resizeEvent.deltaRect = interaction._rects.delta;
  }
  function move(_ref2) {
    let {
      iEvent,
      interaction
    } = _ref2;
    if (interaction.prepared.name !== "resize" || !interaction.prepared.edges) return;
    const resizeEvent = iEvent;
    const resizeOptions = interaction.interactable.options.resize;
    const invert = resizeOptions.invert;
    const invertible = invert === "reposition" || invert === "negate";
    const current = interaction.rect;
    const {
      start: startRect,
      corrected,
      delta: deltaRect,
      previous
    } = interaction._rects;
    extend(previous, corrected);
    if (invertible) {
      extend(corrected, current);
      if (invert === "reposition") {
        if (corrected.top > corrected.bottom) {
          const swap = corrected.top;
          corrected.top = corrected.bottom;
          corrected.bottom = swap;
        }
        if (corrected.left > corrected.right) {
          const swap = corrected.left;
          corrected.left = corrected.right;
          corrected.right = swap;
        }
      }
    } else {
      corrected.top = Math.min(current.top, startRect.bottom);
      corrected.bottom = Math.max(current.bottom, startRect.top);
      corrected.left = Math.min(current.left, startRect.right);
      corrected.right = Math.max(current.right, startRect.left);
    }
    corrected.width = corrected.right - corrected.left;
    corrected.height = corrected.bottom - corrected.top;
    for (const edge in corrected) {
      deltaRect[edge] = corrected[edge] - previous[edge];
    }
    resizeEvent.edges = interaction.prepared.edges;
    resizeEvent.rect = corrected;
    resizeEvent.deltaRect = deltaRect;
  }
  function end(_ref3) {
    let {
      iEvent,
      interaction
    } = _ref3;
    if (interaction.prepared.name !== "resize" || !interaction.prepared.edges) return;
    const resizeEvent = iEvent;
    resizeEvent.edges = interaction.prepared.edges;
    resizeEvent.rect = interaction._rects.corrected;
    resizeEvent.deltaRect = interaction._rects.delta;
  }
  function updateEventAxes(_ref4) {
    let {
      iEvent,
      interaction
    } = _ref4;
    if (interaction.prepared.name !== "resize" || !interaction.resizeAxes) return;
    const options = interaction.interactable.options;
    const resizeEvent = iEvent;
    if (options.resize.square) {
      if (interaction.resizeAxes === "y") {
        resizeEvent.delta.x = resizeEvent.delta.y;
      } else {
        resizeEvent.delta.y = resizeEvent.delta.x;
      }
      resizeEvent.axes = "xy";
    } else {
      resizeEvent.axes = interaction.resizeAxes;
      if (interaction.resizeAxes === "x") {
        resizeEvent.delta.y = 0;
      } else if (interaction.resizeAxes === "y") {
        resizeEvent.delta.x = 0;
      }
    }
  }
  const resize = {
    id: "actions/resize",
    before: ["actions/drag"],
    install: install$2,
    listeners: {
      "interactions:new": (_ref5) => {
        let {
          interaction
        } = _ref5;
        interaction.resizeAxes = "xy";
      },
      "interactions:action-start": (arg) => {
        start$6(arg);
        updateEventAxes(arg);
      },
      "interactions:action-move": (arg) => {
        move(arg);
        updateEventAxes(arg);
      },
      "interactions:action-end": end,
      "auto-start:check": resizeChecker
    },
    defaults: {
      square: false,
      preserveAspectRatio: false,
      axis: "xy",
      // use default margin
      margin: NaN,
      // object with props left, right, top, bottom which are
      // true/false values to resize when the pointer is over that edge,
      // CSS selectors to match the handles for each direction
      // or the Elements for each handle
      edges: null,
      // a value of 'none' will limit the resize rect to a minimum of 0x0
      // 'negate' will alow the rect to have negative width/height
      // 'reposition' will keep the width/height positive by swapping
      // the top and bottom edges and/or swapping the left and right edges
      invert: "none"
    },
    cursors: null,
    getCursor(_ref6) {
      let {
        edges,
        axis,
        name
      } = _ref6;
      const cursors = resize.cursors;
      let result = null;
      if (axis) {
        result = cursors[name + axis];
      } else if (edges) {
        let cursorKey = "";
        for (const edge of ["top", "bottom", "left", "right"]) {
          if (edges[edge]) {
            cursorKey += edge;
          }
        }
        result = cursors[cursorKey];
      }
      return result;
    },
    filterEventType: (type) => type.search("resize") === 0,
    defaultMargin: null
  };
  interact.use(resize);
  var edgeTarget = () => {
  };
  var elements = () => {
  };
  var grid = (grid2) => {
    const coordFields = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter((_ref) => {
      let [xField, yField] = _ref;
      return xField in grid2 || yField in grid2;
    });
    const gridFunc = (x, y) => {
      const {
        range,
        limits = {
          left: -Infinity,
          right: Infinity,
          top: -Infinity,
          bottom: Infinity
        },
        offset = {
          x: 0,
          y: 0
        }
      } = grid2;
      const result = {
        range,
        grid: grid2,
        x: null,
        y: null
      };
      for (const [xField, yField] of coordFields) {
        const gridx = Math.round((x - offset.x) / grid2[xField]);
        const gridy = Math.round((y - offset.y) / grid2[yField]);
        result[xField] = Math.max(limits.left, Math.min(limits.right, gridx * grid2[xField] + offset.x));
        result[yField] = Math.max(limits.top, Math.min(limits.bottom, gridy * grid2[yField] + offset.y));
      }
      return result;
    };
    gridFunc.grid = grid2;
    gridFunc.coordFields = coordFields;
    return gridFunc;
  };
  var allSnappers = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    edgeTarget,
    elements,
    grid
  });
  const snappersPlugin = {
    id: "snappers",
    install(scope2) {
      const {
        interactStatic: interact2
      } = scope2;
      interact2.snappers = extend(interact2.snappers || {}, allSnappers);
      interact2.createSnapGrid = interact2.snappers.grid;
    }
  };
  class Modification {
    constructor(interaction) {
      this.states = [];
      this.startOffset = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      };
      this.startDelta = void 0;
      this.result = void 0;
      this.endResult = void 0;
      this.startEdges = void 0;
      this.edges = void 0;
      this.interaction = void 0;
      this.interaction = interaction;
      this.result = createResult();
      this.edges = {
        left: false,
        right: false,
        top: false,
        bottom: false
      };
    }
    start(_ref, pageCoords) {
      let {
        phase
      } = _ref;
      const {
        interaction
      } = this;
      const modifierList = getModifierList(interaction);
      this.prepareStates(modifierList);
      this.startEdges = extend({}, interaction.edges);
      this.edges = extend({}, this.startEdges);
      this.startOffset = getRectOffset(interaction.rect, pageCoords);
      this.startDelta = {
        x: 0,
        y: 0
      };
      const arg = this.fillArg({
        phase,
        pageCoords,
        preEnd: false
      });
      this.result = createResult();
      this.startAll(arg);
      const result = this.result = this.setAll(arg);
      return result;
    }
    fillArg(arg) {
      const {
        interaction
      } = this;
      arg.interaction = interaction;
      arg.interactable = interaction.interactable;
      arg.element = interaction.element;
      arg.rect || (arg.rect = interaction.rect);
      arg.edges || (arg.edges = this.startEdges);
      arg.startOffset = this.startOffset;
      return arg;
    }
    startAll(arg) {
      for (const state of this.states) {
        if (state.methods.start) {
          arg.state = state;
          state.methods.start(arg);
        }
      }
    }
    setAll(arg) {
      const {
        phase,
        preEnd,
        skipModifiers,
        rect: unmodifiedRect,
        edges: unmodifiedEdges
      } = arg;
      arg.coords = extend({}, arg.pageCoords);
      arg.rect = extend({}, unmodifiedRect);
      arg.edges = extend({}, unmodifiedEdges);
      const states = skipModifiers ? this.states.slice(skipModifiers) : this.states;
      const newResult = createResult(arg.coords, arg.rect);
      for (const state of states) {
        var _state$methods;
        const {
          options
        } = state;
        const lastModifierCoords = extend({}, arg.coords);
        let returnValue = null;
        if ((_state$methods = state.methods) != null && _state$methods.set && this.shouldDo(options, preEnd, phase)) {
          arg.state = state;
          returnValue = state.methods.set(arg);
          addEdges(arg.edges, arg.rect, {
            x: arg.coords.x - lastModifierCoords.x,
            y: arg.coords.y - lastModifierCoords.y
          });
        }
        newResult.eventProps.push(returnValue);
      }
      extend(this.edges, arg.edges);
      newResult.delta.x = arg.coords.x - arg.pageCoords.x;
      newResult.delta.y = arg.coords.y - arg.pageCoords.y;
      newResult.rectDelta.left = arg.rect.left - unmodifiedRect.left;
      newResult.rectDelta.right = arg.rect.right - unmodifiedRect.right;
      newResult.rectDelta.top = arg.rect.top - unmodifiedRect.top;
      newResult.rectDelta.bottom = arg.rect.bottom - unmodifiedRect.bottom;
      const prevCoords = this.result.coords;
      const prevRect = this.result.rect;
      if (prevCoords && prevRect) {
        const rectChanged = newResult.rect.left !== prevRect.left || newResult.rect.right !== prevRect.right || newResult.rect.top !== prevRect.top || newResult.rect.bottom !== prevRect.bottom;
        newResult.changed = rectChanged || prevCoords.x !== newResult.coords.x || prevCoords.y !== newResult.coords.y;
      }
      return newResult;
    }
    applyToInteraction(arg) {
      const {
        interaction
      } = this;
      const {
        phase
      } = arg;
      const curCoords = interaction.coords.cur;
      const startCoords = interaction.coords.start;
      const {
        result,
        startDelta
      } = this;
      const curDelta = result.delta;
      if (phase === "start") {
        extend(this.startDelta, result.delta);
      }
      for (const [coordsSet, delta] of [[startCoords, startDelta], [curCoords, curDelta]]) {
        coordsSet.page.x += delta.x;
        coordsSet.page.y += delta.y;
        coordsSet.client.x += delta.x;
        coordsSet.client.y += delta.y;
      }
      const {
        rectDelta
      } = this.result;
      const rect = arg.rect || interaction.rect;
      rect.left += rectDelta.left;
      rect.right += rectDelta.right;
      rect.top += rectDelta.top;
      rect.bottom += rectDelta.bottom;
      rect.width = rect.right - rect.left;
      rect.height = rect.bottom - rect.top;
    }
    setAndApply(arg) {
      const {
        interaction
      } = this;
      const {
        phase,
        preEnd,
        skipModifiers
      } = arg;
      const result = this.setAll(this.fillArg({
        preEnd,
        phase,
        pageCoords: arg.modifiedCoords || interaction.coords.cur.page
      }));
      this.result = result;
      if (!result.changed && (!skipModifiers || skipModifiers < this.states.length) && interaction.interacting()) {
        return false;
      }
      if (arg.modifiedCoords) {
        const {
          page
        } = interaction.coords.cur;
        const adjustment = {
          x: arg.modifiedCoords.x - page.x,
          y: arg.modifiedCoords.y - page.y
        };
        result.coords.x += adjustment.x;
        result.coords.y += adjustment.y;
        result.delta.x += adjustment.x;
        result.delta.y += adjustment.y;
      }
      this.applyToInteraction(arg);
    }
    beforeEnd(arg) {
      const {
        interaction,
        event
      } = arg;
      const states = this.states;
      if (!states || !states.length) {
        return;
      }
      let doPreend = false;
      for (const state of states) {
        arg.state = state;
        const {
          options,
          methods
        } = state;
        const endPosition = methods.beforeEnd && methods.beforeEnd(arg);
        if (endPosition) {
          this.endResult = endPosition;
          return false;
        }
        doPreend = doPreend || !doPreend && this.shouldDo(options, true, arg.phase, true);
      }
      if (doPreend) {
        interaction.move({
          event,
          preEnd: true
        });
      }
    }
    stop(arg) {
      const {
        interaction
      } = arg;
      if (!this.states || !this.states.length) {
        return;
      }
      const modifierArg = extend({
        states: this.states,
        interactable: interaction.interactable,
        element: interaction.element,
        rect: null
      }, arg);
      this.fillArg(modifierArg);
      for (const state of this.states) {
        modifierArg.state = state;
        if (state.methods.stop) {
          state.methods.stop(modifierArg);
        }
      }
      this.states = null;
      this.endResult = null;
    }
    prepareStates(modifierList) {
      this.states = [];
      for (let index = 0; index < modifierList.length; index++) {
        const {
          options,
          methods,
          name
        } = modifierList[index];
        this.states.push({
          options,
          methods,
          index,
          name
        });
      }
      return this.states;
    }
    restoreInteractionCoords(_ref2) {
      let {
        interaction: {
          coords,
          rect,
          modification
        }
      } = _ref2;
      if (!modification.result) return;
      const {
        startDelta
      } = modification;
      const {
        delta: curDelta,
        rectDelta
      } = modification.result;
      const coordsAndDeltas = [[coords.start, startDelta], [coords.cur, curDelta]];
      for (const [coordsSet, delta] of coordsAndDeltas) {
        coordsSet.page.x -= delta.x;
        coordsSet.page.y -= delta.y;
        coordsSet.client.x -= delta.x;
        coordsSet.client.y -= delta.y;
      }
      rect.left -= rectDelta.left;
      rect.right -= rectDelta.right;
      rect.top -= rectDelta.top;
      rect.bottom -= rectDelta.bottom;
    }
    shouldDo(options, preEnd, phase, requireEndOnly) {
      if (
        // ignore disabled modifiers
        !options || options.enabled === false || // check if we require endOnly option to fire move before end
        requireEndOnly && !options.endOnly || // don't apply endOnly modifiers when not ending
        options.endOnly && !preEnd || // check if modifier should run be applied on start
        phase === "start" && !options.setStart
      ) {
        return false;
      }
      return true;
    }
    copyFrom(other) {
      this.startOffset = other.startOffset;
      this.startDelta = other.startDelta;
      this.startEdges = other.startEdges;
      this.edges = other.edges;
      this.states = other.states.map((s) => clone(s));
      this.result = createResult(extend({}, other.result.coords), extend({}, other.result.rect));
    }
    destroy() {
      for (const prop2 in this) {
        this[prop2] = null;
      }
    }
  }
  function createResult(coords, rect) {
    return {
      rect,
      coords,
      delta: {
        x: 0,
        y: 0
      },
      rectDelta: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
      eventProps: [],
      changed: true
    };
  }
  function getModifierList(interaction) {
    const actionOptions = interaction.interactable.options[interaction.prepared.name];
    const actionModifiers = actionOptions.modifiers;
    if (actionModifiers && actionModifiers.length) {
      return actionModifiers;
    }
    return ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map((type) => {
      const options = actionOptions[type];
      return options && options.enabled && {
        options,
        methods: options._methods
      };
    }).filter((m) => !!m);
  }
  function getRectOffset(rect, coords) {
    return rect ? {
      left: coords.x - rect.left,
      top: coords.y - rect.top,
      right: rect.right - coords.x,
      bottom: rect.bottom - coords.y
    } : {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
  }
  function makeModifier(module2, name) {
    const {
      defaults: defaults2
    } = module2;
    const methods = {
      start: module2.start,
      set: module2.set,
      beforeEnd: module2.beforeEnd,
      stop: module2.stop
    };
    const modifier = (_options) => {
      const options = _options || {};
      options.enabled = options.enabled !== false;
      for (const prop2 in defaults2) {
        if (!(prop2 in options)) {
          options[prop2] = defaults2[prop2];
        }
      }
      const m = {
        options,
        methods,
        name,
        enable: () => {
          options.enabled = true;
          return m;
        },
        disable: () => {
          options.enabled = false;
          return m;
        }
      };
      return m;
    };
    if (name && typeof name === "string") {
      modifier._defaults = defaults2;
      modifier._methods = methods;
    }
    return modifier;
  }
  function addEventModifiers(_ref) {
    let {
      iEvent,
      interaction
    } = _ref;
    const result = interaction.modification.result;
    if (result) {
      iEvent.modifiers = result.eventProps;
    }
  }
  const modifiersBase = {
    id: "modifiers/base",
    before: ["actions"],
    install: (scope2) => {
      scope2.defaults.perAction.modifiers = [];
    },
    listeners: {
      "interactions:new": (_ref2) => {
        let {
          interaction
        } = _ref2;
        interaction.modification = new Modification(interaction);
      },
      "interactions:before-action-start": (arg) => {
        const {
          interaction
        } = arg;
        const modification = arg.interaction.modification;
        modification.start(arg, interaction.coords.start.page);
        interaction.edges = modification.edges;
        modification.applyToInteraction(arg);
      },
      "interactions:before-action-move": (arg) => {
        const {
          interaction
        } = arg;
        const {
          modification
        } = interaction;
        const ret = modification.setAndApply(arg);
        interaction.edges = modification.edges;
        return ret;
      },
      "interactions:before-action-end": (arg) => {
        const {
          interaction
        } = arg;
        const {
          modification
        } = interaction;
        const ret = modification.beforeEnd(arg);
        interaction.edges = modification.startEdges;
        return ret;
      },
      "interactions:action-start": addEventModifiers,
      "interactions:action-move": addEventModifiers,
      "interactions:action-end": addEventModifiers,
      "interactions:after-action-start": (arg) => arg.interaction.modification.restoreInteractionCoords(arg),
      "interactions:after-action-move": (arg) => arg.interaction.modification.restoreInteractionCoords(arg),
      "interactions:stop": (arg) => arg.interaction.modification.stop(arg)
    }
  };
  const aspectRatio = {
    start(arg) {
      const {
        state,
        rect,
        edges,
        pageCoords: coords
      } = arg;
      let {
        ratio,
        enabled
      } = state.options;
      const {
        equalDelta,
        modifiers: modifiers2
      } = state.options;
      if (ratio === "preserve") {
        ratio = rect.width / rect.height;
      }
      state.startCoords = extend({}, coords);
      state.startRect = extend({}, rect);
      state.ratio = ratio;
      state.equalDelta = equalDelta;
      const linkedEdges = state.linkedEdges = {
        top: edges.top || edges.left && !edges.bottom,
        left: edges.left || edges.top && !edges.right,
        bottom: edges.bottom || edges.right && !edges.top,
        right: edges.right || edges.bottom && !edges.left
      };
      state.xIsPrimaryAxis = !!(edges.left || edges.right);
      if (state.equalDelta) {
        const sign = (linkedEdges.left ? 1 : -1) * (linkedEdges.top ? 1 : -1);
        state.edgeSign = {
          x: sign,
          y: sign
        };
      } else {
        state.edgeSign = {
          x: linkedEdges.left ? -1 : 1,
          y: linkedEdges.top ? -1 : 1
        };
      }
      if (enabled !== false) {
        extend(edges, linkedEdges);
      }
      if (!(modifiers2 != null && modifiers2.length)) return;
      const subModification = new Modification(arg.interaction);
      subModification.copyFrom(arg.interaction.modification);
      subModification.prepareStates(modifiers2);
      state.subModification = subModification;
      subModification.startAll({
        ...arg
      });
    },
    set(arg) {
      const {
        state,
        rect,
        coords
      } = arg;
      const {
        linkedEdges
      } = state;
      const initialCoords = extend({}, coords);
      const aspectMethod = state.equalDelta ? setEqualDelta : setRatio;
      extend(arg.edges, linkedEdges);
      aspectMethod(state, state.xIsPrimaryAxis, coords, rect);
      if (!state.subModification) {
        return null;
      }
      const correctedRect = extend({}, rect);
      addEdges(linkedEdges, correctedRect, {
        x: coords.x - initialCoords.x,
        y: coords.y - initialCoords.y
      });
      const result = state.subModification.setAll({
        ...arg,
        rect: correctedRect,
        edges: linkedEdges,
        pageCoords: coords,
        prevCoords: coords,
        prevRect: correctedRect
      });
      const {
        delta
      } = result;
      if (result.changed) {
        const xIsCriticalAxis = Math.abs(delta.x) > Math.abs(delta.y);
        aspectMethod(state, xIsCriticalAxis, result.coords, result.rect);
        extend(coords, result.coords);
      }
      return result.eventProps;
    },
    defaults: {
      ratio: "preserve",
      equalDelta: false,
      modifiers: [],
      enabled: false
    }
  };
  function setEqualDelta(_ref, xIsPrimaryAxis, coords) {
    let {
      startCoords,
      edgeSign
    } = _ref;
    if (xIsPrimaryAxis) {
      coords.y = startCoords.y + (coords.x - startCoords.x) * edgeSign.y;
    } else {
      coords.x = startCoords.x + (coords.y - startCoords.y) * edgeSign.x;
    }
  }
  function setRatio(_ref2, xIsPrimaryAxis, coords, rect) {
    let {
      startRect,
      startCoords,
      ratio,
      edgeSign
    } = _ref2;
    if (xIsPrimaryAxis) {
      const newHeight = rect.width / ratio;
      coords.y = startCoords.y + (newHeight - startRect.height) * edgeSign.y;
    } else {
      const newWidth = rect.height * ratio;
      coords.x = startCoords.x + (newWidth - startRect.width) * edgeSign.x;
    }
  }
  var aspectRatio$1 = makeModifier(aspectRatio, "aspectRatio");
  function start$5(_ref) {
    let {
      rect,
      startOffset,
      state,
      interaction,
      pageCoords
    } = _ref;
    const {
      options
    } = state;
    const {
      elementRect
    } = options;
    const offset = extend({
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    }, options.offset || {});
    if (rect && elementRect) {
      const restriction = getRestrictionRect(options.restriction, interaction, pageCoords);
      if (restriction) {
        const widthDiff = restriction.right - restriction.left - rect.width;
        const heightDiff = restriction.bottom - restriction.top - rect.height;
        if (widthDiff < 0) {
          offset.left += widthDiff;
          offset.right += widthDiff;
        }
        if (heightDiff < 0) {
          offset.top += heightDiff;
          offset.bottom += heightDiff;
        }
      }
      offset.left += startOffset.left - rect.width * elementRect.left;
      offset.top += startOffset.top - rect.height * elementRect.top;
      offset.right += startOffset.right - rect.width * (1 - elementRect.right);
      offset.bottom += startOffset.bottom - rect.height * (1 - elementRect.bottom);
    }
    state.offset = offset;
  }
  function set$4(_ref2) {
    let {
      coords,
      interaction,
      state
    } = _ref2;
    const {
      options,
      offset
    } = state;
    const restriction = getRestrictionRect(options.restriction, interaction, coords);
    if (!restriction) return;
    const rect = xywhToTlbr(restriction);
    coords.x = Math.max(Math.min(rect.right - offset.right, coords.x), rect.left + offset.left);
    coords.y = Math.max(Math.min(rect.bottom - offset.bottom, coords.y), rect.top + offset.top);
  }
  function getRestrictionRect(value, interaction, coords) {
    if (is.func(value)) {
      return resolveRectLike(value, interaction.interactable, interaction.element, [coords.x, coords.y, interaction]);
    } else {
      return resolveRectLike(value, interaction.interactable, interaction.element);
    }
  }
  const defaults$5 = {
    restriction: null,
    elementRect: null,
    offset: null,
    endOnly: false,
    enabled: false
  };
  const restrict = {
    start: start$5,
    set: set$4,
    defaults: defaults$5
  };
  var restrict$1 = makeModifier(restrict, "restrict");
  const noInner = {
    top: Infinity,
    left: Infinity,
    bottom: -Infinity,
    right: -Infinity
  };
  const noOuter = {
    top: -Infinity,
    left: -Infinity,
    bottom: Infinity,
    right: Infinity
  };
  function start$4(_ref) {
    let {
      interaction,
      startOffset,
      state
    } = _ref;
    const {
      options
    } = state;
    let offset;
    if (options) {
      const offsetRect = getRestrictionRect(options.offset, interaction, interaction.coords.start.page);
      offset = rectToXY(offsetRect);
    }
    offset = offset || {
      x: 0,
      y: 0
    };
    state.offset = {
      top: offset.y + startOffset.top,
      left: offset.x + startOffset.left,
      bottom: offset.y - startOffset.bottom,
      right: offset.x - startOffset.right
    };
  }
  function set$3(_ref2) {
    let {
      coords,
      edges,
      interaction,
      state
    } = _ref2;
    const {
      offset,
      options
    } = state;
    if (!edges) {
      return;
    }
    const page = extend({}, coords);
    const inner = getRestrictionRect(options.inner, interaction, page) || {};
    const outer = getRestrictionRect(options.outer, interaction, page) || {};
    fixRect(inner, noInner);
    fixRect(outer, noOuter);
    if (edges.top) {
      coords.y = Math.min(Math.max(outer.top + offset.top, page.y), inner.top + offset.top);
    } else if (edges.bottom) {
      coords.y = Math.max(Math.min(outer.bottom + offset.bottom, page.y), inner.bottom + offset.bottom);
    }
    if (edges.left) {
      coords.x = Math.min(Math.max(outer.left + offset.left, page.x), inner.left + offset.left);
    } else if (edges.right) {
      coords.x = Math.max(Math.min(outer.right + offset.right, page.x), inner.right + offset.right);
    }
  }
  function fixRect(rect, defaults2) {
    for (const edge of ["top", "left", "bottom", "right"]) {
      if (!(edge in rect)) {
        rect[edge] = defaults2[edge];
      }
    }
    return rect;
  }
  const defaults$4 = {
    inner: null,
    outer: null,
    offset: null,
    endOnly: false,
    enabled: false
  };
  const restrictEdges = {
    noInner,
    noOuter,
    start: start$4,
    set: set$3,
    defaults: defaults$4
  };
  var restrictEdges$1 = makeModifier(restrictEdges, "restrictEdges");
  const defaults$3 = extend({
    get elementRect() {
      return {
        top: 0,
        left: 0,
        bottom: 1,
        right: 1
      };
    },
    set elementRect(_) {
    }
  }, restrict.defaults);
  const restrictRect = {
    start: restrict.start,
    set: restrict.set,
    defaults: defaults$3
  };
  var restrictRect$1 = makeModifier(restrictRect, "restrictRect");
  const noMin = {
    width: -Infinity,
    height: -Infinity
  };
  const noMax = {
    width: Infinity,
    height: Infinity
  };
  function start$3(arg) {
    return restrictEdges.start(arg);
  }
  function set$2(arg) {
    const {
      interaction,
      state,
      rect,
      edges
    } = arg;
    const {
      options
    } = state;
    if (!edges) {
      return;
    }
    const minSize = tlbrToXywh(getRestrictionRect(options.min, interaction, arg.coords)) || noMin;
    const maxSize = tlbrToXywh(getRestrictionRect(options.max, interaction, arg.coords)) || noMax;
    state.options = {
      endOnly: options.endOnly,
      inner: extend({}, restrictEdges.noInner),
      outer: extend({}, restrictEdges.noOuter)
    };
    if (edges.top) {
      state.options.inner.top = rect.bottom - minSize.height;
      state.options.outer.top = rect.bottom - maxSize.height;
    } else if (edges.bottom) {
      state.options.inner.bottom = rect.top + minSize.height;
      state.options.outer.bottom = rect.top + maxSize.height;
    }
    if (edges.left) {
      state.options.inner.left = rect.right - minSize.width;
      state.options.outer.left = rect.right - maxSize.width;
    } else if (edges.right) {
      state.options.inner.right = rect.left + minSize.width;
      state.options.outer.right = rect.left + maxSize.width;
    }
    restrictEdges.set(arg);
    state.options = options;
  }
  const defaults$2 = {
    min: null,
    max: null,
    endOnly: false,
    enabled: false
  };
  const restrictSize = {
    start: start$3,
    set: set$2,
    defaults: defaults$2
  };
  var restrictSize$1 = makeModifier(restrictSize, "restrictSize");
  function start$2(arg) {
    const {
      interaction,
      interactable,
      element: element2,
      rect,
      state,
      startOffset
    } = arg;
    const {
      options
    } = state;
    const origin = options.offsetWithOrigin ? getOrigin(arg) : {
      x: 0,
      y: 0
    };
    let snapOffset;
    if (options.offset === "startCoords") {
      snapOffset = {
        x: interaction.coords.start.page.x,
        y: interaction.coords.start.page.y
      };
    } else {
      const offsetRect = resolveRectLike(options.offset, interactable, element2, [interaction]);
      snapOffset = rectToXY(offsetRect) || {
        x: 0,
        y: 0
      };
      snapOffset.x += origin.x;
      snapOffset.y += origin.y;
    }
    const {
      relativePoints
    } = options;
    state.offsets = rect && relativePoints && relativePoints.length ? relativePoints.map((relativePoint, index) => ({
      index,
      relativePoint,
      x: startOffset.left - rect.width * relativePoint.x + snapOffset.x,
      y: startOffset.top - rect.height * relativePoint.y + snapOffset.y
    })) : [{
      index: 0,
      relativePoint: null,
      x: snapOffset.x,
      y: snapOffset.y
    }];
  }
  function set$1(arg) {
    const {
      interaction,
      coords,
      state
    } = arg;
    const {
      options,
      offsets
    } = state;
    const origin = getOriginXY(interaction.interactable, interaction.element, interaction.prepared.name);
    const page = extend({}, coords);
    const targets = [];
    if (!options.offsetWithOrigin) {
      page.x -= origin.x;
      page.y -= origin.y;
    }
    for (const offset of offsets) {
      const relativeX = page.x - offset.x;
      const relativeY = page.y - offset.y;
      for (let index = 0, len = options.targets.length; index < len; index++) {
        const snapTarget = options.targets[index];
        let target;
        if (is.func(snapTarget)) {
          target = snapTarget(relativeX, relativeY, interaction._proxy, offset, index);
        } else {
          target = snapTarget;
        }
        if (!target) {
          continue;
        }
        targets.push({
          x: (is.number(target.x) ? target.x : relativeX) + offset.x,
          y: (is.number(target.y) ? target.y : relativeY) + offset.y,
          range: is.number(target.range) ? target.range : options.range,
          source: snapTarget,
          index,
          offset
        });
      }
    }
    const closest2 = {
      target: null,
      inRange: false,
      distance: 0,
      range: 0,
      delta: {
        x: 0,
        y: 0
      }
    };
    for (const target of targets) {
      const range = target.range;
      const dx = target.x - page.x;
      const dy = target.y - page.y;
      const distance = hypot(dx, dy);
      let inRange = distance <= range;
      if (range === Infinity && closest2.inRange && closest2.range !== Infinity) {
        inRange = false;
      }
      if (!closest2.target || (inRange ? (
        // is the closest target in range?
        closest2.inRange && range !== Infinity ? (
          // the pointer is relatively deeper in this target
          distance / range < closest2.distance / closest2.range
        ) : (
          // this target has Infinite range and the closest doesn't
          range === Infinity && closest2.range !== Infinity || // OR this target is closer that the previous closest
          distance < closest2.distance
        )
      ) : (
        // The other is not in range and the pointer is closer to this target
        !closest2.inRange && distance < closest2.distance
      ))) {
        closest2.target = target;
        closest2.distance = distance;
        closest2.range = range;
        closest2.inRange = inRange;
        closest2.delta.x = dx;
        closest2.delta.y = dy;
      }
    }
    if (closest2.inRange) {
      coords.x = closest2.target.x;
      coords.y = closest2.target.y;
    }
    state.closest = closest2;
    return closest2;
  }
  function getOrigin(arg) {
    const {
      element: element2
    } = arg.interaction;
    const optionsOrigin = rectToXY(resolveRectLike(arg.state.options.origin, null, null, [element2]));
    const origin = optionsOrigin || getOriginXY(arg.interactable, element2, arg.interaction.prepared.name);
    return origin;
  }
  const defaults$1 = {
    range: Infinity,
    targets: null,
    offset: null,
    offsetWithOrigin: true,
    origin: null,
    relativePoints: null,
    endOnly: false,
    enabled: false
  };
  const snap = {
    start: start$2,
    set: set$1,
    defaults: defaults$1
  };
  var snap$1 = makeModifier(snap, "snap");
  function start$1(arg) {
    const {
      state,
      edges
    } = arg;
    const {
      options
    } = state;
    if (!edges) {
      return null;
    }
    arg.state = {
      options: {
        targets: null,
        relativePoints: [{
          x: edges.left ? 0 : 1,
          y: edges.top ? 0 : 1
        }],
        offset: options.offset || "self",
        origin: {
          x: 0,
          y: 0
        },
        range: options.range
      }
    };
    state.targetFields = state.targetFields || [["width", "height"], ["x", "y"]];
    snap.start(arg);
    state.offsets = arg.state.offsets;
    arg.state = state;
  }
  function set(arg) {
    const {
      interaction,
      state,
      coords
    } = arg;
    const {
      options,
      offsets
    } = state;
    const relative = {
      x: coords.x - offsets[0].x,
      y: coords.y - offsets[0].y
    };
    state.options = extend({}, options);
    state.options.targets = [];
    for (const snapTarget of options.targets || []) {
      let target;
      if (is.func(snapTarget)) {
        target = snapTarget(relative.x, relative.y, interaction);
      } else {
        target = snapTarget;
      }
      if (!target) {
        continue;
      }
      for (const [xField, yField] of state.targetFields) {
        if (xField in target || yField in target) {
          target.x = target[xField];
          target.y = target[yField];
          break;
        }
      }
      state.options.targets.push(target);
    }
    const returnValue = snap.set(arg);
    state.options = options;
    return returnValue;
  }
  const defaults = {
    range: Infinity,
    targets: null,
    offset: null,
    endOnly: false,
    enabled: false
  };
  const snapSize = {
    start: start$1,
    set,
    defaults
  };
  var snapSize$1 = makeModifier(snapSize, "snapSize");
  function start(arg) {
    const {
      edges
    } = arg;
    if (!edges) {
      return null;
    }
    arg.state.targetFields = arg.state.targetFields || [[edges.left ? "left" : "right", edges.top ? "top" : "bottom"]];
    return snapSize.start(arg);
  }
  const snapEdges = {
    start,
    set: snapSize.set,
    defaults: extend(clone(snapSize.defaults), {
      targets: void 0,
      range: void 0,
      offset: {
        x: 0,
        y: 0
      }
    })
  };
  var snapEdges$1 = makeModifier(snapEdges, "snapEdges");
  const noop = () => {
  };
  noop._defaults = {};
  var all = {
    aspectRatio: aspectRatio$1,
    restrictEdges: restrictEdges$1,
    restrict: restrict$1,
    restrictRect: restrictRect$1,
    restrictSize: restrictSize$1,
    snapEdges: snapEdges$1,
    snap: snap$1,
    snapSize: snapSize$1,
    spring: noop,
    avoid: noop,
    transform: noop,
    rubberband: noop
  };
  const modifiers = {
    id: "modifiers",
    install(scope2) {
      const {
        interactStatic: interact2
      } = scope2;
      scope2.usePlugin(modifiersBase);
      scope2.usePlugin(snappersPlugin);
      interact2.modifiers = all;
      for (const type in all) {
        const {
          _defaults,
          _methods
        } = all[type];
        _defaults._methods = _methods;
        scope2.defaults.perAction[type] = _defaults;
      }
    }
  };
  interact.use(modifiers);
  var CheckName = /* @__PURE__ */ function(CheckName2) {
    CheckName2["touchAction"] = "touchAction";
    CheckName2["boxSizing"] = "boxSizing";
    CheckName2["noListeners"] = "noListeners";
    return CheckName2;
  }(CheckName || {});
  const prefix = "[interact.js] ";
  const links = {
    touchAction: "https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action",
    boxSizing: "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"
  };
  function install$1(scope2) {
    let {
      logger
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {
      Interactable: Interactable2,
      defaults: defaults2
    } = scope2;
    scope2.logger = logger || console;
    defaults2.base.devTools = {
      ignore: {}
    };
    Interactable2.prototype.devTools = function(options) {
      if (options) {
        extend(this.options.devTools, options);
        return this;
      }
      return this.options.devTools;
    };
    const {
      _onOff
    } = Interactable2.prototype;
    Interactable2.prototype._onOff = function(method, typeArg, listenerArg, options, filter) {
      if (is.string(this.target) || this.target.addEventListener) {
        return _onOff.call(this, method, typeArg, listenerArg, options, filter);
      }
      if (is.object(typeArg) && !is.array(typeArg)) {
        options = listenerArg;
        listenerArg = null;
      }
      const normalizedListeners = normalize(typeArg, listenerArg, filter);
      for (const type in normalizedListeners) {
        if (isNonNativeEvent(type, scope2.actions)) continue;
        scope2.logger.warn(prefix + `Can't add native "${type}" event listener to target without \`addEventListener(type, listener, options)\` prop.`);
      }
      return _onOff.call(this, method, normalizedListeners, options);
    };
  }
  const checks = [{
    name: CheckName.touchAction,
    perform(_ref) {
      let {
        element: element2
      } = _ref;
      return !!element2 && !parentHasStyle(element2, "touchAction", /pan-|pinch|none/);
    },
    getInfo(_ref2) {
      let {
        element: element2
      } = _ref2;
      return [element2, links.touchAction];
    },
    text: 'Consider adding CSS "touch-action: none" to this element\n'
  }, {
    name: CheckName.boxSizing,
    perform(interaction) {
      const {
        element: element2
      } = interaction;
      return interaction.prepared.name === "resize" && element2 instanceof domObjects.HTMLElement && !hasStyle(element2, "boxSizing", /border-box/);
    },
    text: 'Consider adding CSS "box-sizing: border-box" to this resizable element',
    getInfo(_ref3) {
      let {
        element: element2
      } = _ref3;
      return [element2, links.boxSizing];
    }
  }, {
    name: CheckName.noListeners,
    perform(interaction) {
      var _interaction$interact;
      const actionName = interaction.prepared.name;
      const moveListeners = ((_interaction$interact = interaction.interactable) == null ? void 0 : _interaction$interact.events.types[`${actionName}move`]) || [];
      return !moveListeners.length;
    },
    getInfo(interaction) {
      return [interaction.prepared.name, interaction.interactable];
    },
    text: "There are no listeners set for this action"
  }];
  function hasStyle(element2, prop2, styleRe) {
    const value = element2.style[prop2] || win.getComputedStyle(element2)[prop2];
    return styleRe.test((value || "").toString());
  }
  function parentHasStyle(element2, prop2, styleRe) {
    let parent = element2;
    while (is.element(parent)) {
      if (hasStyle(parent, prop2, styleRe)) {
        return true;
      }
      parent = parentNode(parent);
    }
    return false;
  }
  const id = "dev-tools";
  const defaultExport = {
    id,
    install: install$1,
    listeners: {
      "interactions:action-start": (_ref4, scope2) => {
        let {
          interaction
        } = _ref4;
        for (const check of checks) {
          const options = interaction.interactable && interaction.interactable.options;
          if (!(options && options.devTools && options.devTools.ignore[check.name]) && check.perform(interaction)) {
            scope2.logger.warn(prefix + check.text, ...check.getInfo(interaction));
          }
        }
      }
    },
    checks,
    CheckName,
    links,
    prefix
  };
  interact.use(defaultExport);
  function bottom(layout) {
    let max = 0;
    let bottomY;
    for (let i = 0, len = layout.length; i < len; i++) {
      bottomY = layout[i].y + layout[i].h;
      if (bottomY > max) max = bottomY;
    }
    return max;
  }
  function cloneLayout(layout) {
    return (layout || []).map((item) => ({ ...item }));
  }
  function collides(l1, l2) {
    if (l1 === l2) return false;
    if (l1.x + l1.w <= l2.x) return false;
    if (l1.x >= l2.x + l2.w) return false;
    if (l1.y + l1.h <= l2.y) return false;
    if (l1.y >= l2.y + l2.h) return false;
    return true;
  }
  function compact(layout, verticalCompact, minPositions) {
    const compareWith = getStatics(layout);
    const sorted = sortLayoutItemsByRowCol(layout);
    const out = Array(layout.length);
    for (let i = 0, len = sorted.length; i < len; i++) {
      let l = sorted[i];
      if (!l.static) {
        l = compactItem(compareWith, l, verticalCompact, minPositions);
        compareWith.push(l);
      }
      out[layout.indexOf(l)] = l;
      delete l.moved;
    }
    return out;
  }
  function compactItem(compareWith, l, verticalCompact, minPositions) {
    if (verticalCompact) {
      while (l.y > 0 && !getFirstCollision(compareWith, l)) {
        l.y--;
      }
    } else if (minPositions) {
      const minY = minPositions[l.i].y;
      while (l.y > minY && !getFirstCollision(compareWith, l)) {
        l.y--;
      }
    }
    let collides2;
    while (collides2 = getFirstCollision(compareWith, l)) {
      l.y = collides2.y + collides2.h;
    }
    return l;
  }
  function correctBounds(layout, bounds) {
    const collidesWith = getStatics(layout);
    for (let i = 0, len = layout.length; i < len; i++) {
      const l = layout[i];
      if (l.x + l.w > bounds.cols) l.x = bounds.cols - l.w;
      if (l.x < 0) {
        l.x = 0;
        l.w = bounds.cols;
      }
      if (!l.static) collidesWith.push(l);
      else {
        while (getFirstCollision(collidesWith, l)) {
          l.y++;
        }
      }
    }
    return layout;
  }
  function getLayoutItem(layout, id2) {
    for (let i = 0, len = layout.length; i < len; i++) {
      if (layout[i].i === id2) return layout[i];
    }
  }
  function getFirstCollision(layout, layoutItem) {
    for (let i = 0, len = layout.length; i < len; i++) {
      if (collides(layout[i], layoutItem)) return layout[i];
    }
  }
  function getAllCollisions(layout, layoutItem) {
    return layout.filter((l) => collides(l, layoutItem));
  }
  function getStatics(layout) {
    return layout.filter((l) => l.static);
  }
  function moveElement(layout, l, x, y, isUserAction, preventCollision) {
    if (l.static) return layout;
    const oldX = l.x;
    const oldY = l.y;
    const movingUp = y && l.y > y;
    if (typeof x === "number") l.x = x;
    if (typeof y === "number") l.y = y;
    l.moved = true;
    let sorted = sortLayoutItemsByRowCol(layout);
    if (movingUp) sorted = sorted.reverse();
    const collisions = getAllCollisions(sorted, l);
    if (preventCollision && collisions.length) {
      l.x = oldX;
      l.y = oldY;
      l.moved = false;
      return layout;
    }
    for (let i = 0, len = collisions.length; i < len; i++) {
      const collision = collisions[i];
      if (collision.moved) continue;
      if (l.y > collision.y && l.y - collision.y > collision.h / 4) continue;
      if (collision.static) {
        layout = moveElementAwayFromCollision(layout, collision, l, isUserAction);
      } else {
        layout = moveElementAwayFromCollision(layout, l, collision, isUserAction);
      }
    }
    return layout;
  }
  function moveElementAwayFromCollision(layout, collidesWith, itemToMove, isUserAction) {
    const preventCollision = false;
    if (isUserAction) {
      const fakeItem = {
        x: itemToMove.x,
        y: itemToMove.y,
        w: itemToMove.w,
        h: itemToMove.h,
        i: "-1"
      };
      fakeItem.y = Math.max(collidesWith.y - itemToMove.h, 0);
      if (!getFirstCollision(layout, fakeItem)) {
        return moveElement(layout, itemToMove, void 0, fakeItem.y, preventCollision);
      }
    }
    return moveElement(layout, itemToMove, void 0, itemToMove.y + 1, preventCollision);
  }
  function setTransform(top, left, width, height) {
    const translate = `translate3d(${left}px,${top}px, 0)`;
    return {
      transform: translate,
      WebkitTransform: translate,
      MozTransform: translate,
      msTransform: translate,
      OTransform: translate,
      width: `${width}px`,
      height: `${height}px`,
      position: "absolute"
    };
  }
  function setTransformRtl(top, right, width, height) {
    const translate = `translate3d(${right * -1}px,${top}px, 0)`;
    return {
      transform: translate,
      WebkitTransform: translate,
      MozTransform: translate,
      msTransform: translate,
      OTransform: translate,
      width: `${width}px`,
      height: `${height}px`,
      position: "absolute"
    };
  }
  function setTopLeft(top, left, width, height) {
    return {
      top: `${top}px`,
      left: `${left}px`,
      width: `${width}px`,
      height: `${height}px`,
      position: "absolute"
    };
  }
  function setTopRight(top, right, width, height) {
    return {
      top: `${top}px`,
      right: `${right}px`,
      width: `${width}px`,
      height: `${height}px`,
      position: "absolute"
    };
  }
  function sortLayoutItemsByRowCol(layout) {
    return [].concat(layout).sort((a, b) => {
      if (a.y === b.y && a.x === b.x) {
        return 0;
      }
      if (a.y > b.y || a.y === b.y && a.x > b.x) {
        return 1;
      }
      return -1;
    });
  }
  function validateLayout(layout, contextName) {
    contextName = contextName || "Layout";
    const subProps = ["x", "y", "w", "h"];
    const keyArr = [];
    if (!Array.isArray(layout)) throw new Error(`${contextName} must be an array!`);
    for (let i = 0, len = layout.length; i < len; i++) {
      const item = layout[i];
      for (let j = 0; j < subProps.length; j++) {
        if (typeof item[subProps[j]] !== "number") {
          throw new Error(`VueGridLayout: ${contextName}[${i}].${subProps[j]} must be a number!`);
        }
      }
      if (item.i === void 0 || item.i === null) {
        throw new Error(`VueGridLayout: ${contextName}[${i}].i cannot be null!`);
      }
      if (typeof item.i !== "number" && typeof item.i !== "string") {
        throw new Error(`VueGridLayout: ${contextName}[${i}].i must be a string or number!`);
      }
      if (keyArr.indexOf(item.i) >= 0) {
        throw new Error(`VueGridLayout: ${contextName}[${i}].i must be unique!`);
      }
      keyArr.push(item.i);
      if (item.static !== void 0 && typeof item.static !== "boolean") {
        throw new Error(`VueGridLayout: ${contextName}[${i}].static must be a boolean!`);
      }
    }
  }
  function getControlPosition(e) {
    return offsetXYFromParentOf(e);
  }
  function offsetXYFromParentOf(evt) {
    const offsetParent = evt.target.offsetParent || document.body;
    const offsetParentRect = evt.offsetParent === document.body ? { left: 0, top: 0 } : offsetParent.getBoundingClientRect();
    const x = evt.clientX + offsetParent.scrollLeft - offsetParentRect.left;
    const y = evt.clientY + offsetParent.scrollTop - offsetParentRect.top;
    return { x, y };
  }
  function createCoreData(lastX, lastY, x, y) {
    const isStart = !isNum(lastX);
    if (isStart) {
      return {
        deltaX: 0,
        deltaY: 0,
        lastX: x,
        lastY: y,
        x,
        y
      };
    }
    return {
      deltaX: x - lastX,
      deltaY: y - lastY,
      lastX,
      lastY,
      x,
      y
    };
  }
  function isNum(num) {
    return typeof num === "number" && !Number.isNaN(num);
  }
  function getBreakpointFromWidth(breakpoints, width) {
    const sorted = sortBreakpoints(breakpoints);
    let matching = sorted[0];
    for (let i = 1, len = sorted.length; i < len; i++) {
      const breakpointName = sorted[i];
      if (width > breakpoints[breakpointName]) matching = breakpointName;
    }
    return matching;
  }
  function getColsFromBreakpoint(breakpoint, cols) {
    if (!cols[breakpoint]) {
      throw new Error(`ResponsiveGridLayout: \`cols\` entry for breakpoint ${breakpoint} is missing!`);
    }
    return cols[breakpoint];
  }
  function findOrGenerateResponsiveLayout(orgLayout, layouts, breakpoints, breakpoint, cols, verticalCompact) {
    if (layouts[breakpoint]) return cloneLayout(layouts[breakpoint]);
    let layout = orgLayout;
    const breakpointsSorted = sortBreakpoints(breakpoints);
    const breakpointsAbove = breakpointsSorted.slice(breakpointsSorted.indexOf(breakpoint));
    for (let i = 0, len = breakpointsAbove.length; i < len; i++) {
      const b = breakpointsAbove[i];
      if (layouts[b]) {
        layout = layouts[b];
        break;
      }
    }
    layout = cloneLayout(layout || []);
    return compact(correctBounds(layout, { cols }), verticalCompact);
  }
  function sortBreakpoints(breakpoints) {
    const keys = Object.keys(breakpoints);
    return keys.sort((a, b) => {
      return breakpoints[a] - breakpoints[b];
    });
  }
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _hoisted_1 = ["id"];
  const _sfc_main$1 = {
    __name: "grid-item",
    props: {
      i: {
        required: true
      },
      x: {
        type: Number,
        required: true
      },
      y: {
        type: Number,
        required: true
      },
      w: {
        type: Number,
        required: true
      },
      h: {
        type: Number,
        required: true
      },
      minW: {
        type: Number,
        required: false,
        default: 1
      },
      minH: {
        type: Number,
        required: false,
        default: 1
      },
      maxW: {
        type: Number,
        required: false,
        default: Infinity
      },
      maxH: {
        type: Number,
        required: false,
        default: Infinity
      },
      // cols: {
      //   type: Number,
      //   required: true
      // },
      // containerWidth: {
      //   type: Number,
      //   required: true
      // },
      // rowHeight: {
      //   type: Number,
      //   required: true
      // },
      // margin: {
      //   type: Array,
      //   required: true
      // },
      // maxRows: {
      //   type: Number,
      //   required: true
      // },
      isDraggable: {
        type: Boolean,
        required: false,
        default: null
      },
      isResizable: {
        type: Boolean,
        required: false,
        default: null
      },
      isBounded: {
        type: Boolean,
        required: false,
        default: null
      },
      // useCssTransforms: {
      //   type: Boolean,
      //   required: true
      // },
      static: {
        type: Boolean,
        required: false,
        default: false
      },
      dragIgnoreFrom: {
        type: String,
        required: false,
        default: "a, button"
      },
      dragAllowFrom: {
        type: String,
        required: false,
        default: null
      },
      resizeIgnoreFrom: {
        type: String,
        required: false,
        default: "a, button"
      },
      preserveAspectRatio: {
        type: Boolean,
        required: false,
        default: false
      },
      dragOption: {
        type: Object,
        required: false,
        default: () => ({})
      },
      resizeOption: {
        type: Object,
        required: false,
        default: () => ({})
      }
    },
    emits: [
      "container-resized",
      "resize",
      "resized",
      "move",
      "moved"
    ],
    setup(__props, { expose: __expose, emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const exposeObj = {
        el: void 0,
        calcXY
      };
      __expose(exposeObj);
      const emitter = vue.inject("emitter");
      const gridLayout = vue.inject("gridLayout");
      let interactObj;
      const state = vue.reactive({
        cols: 1,
        containerWidth: 100,
        rowHeight: 30,
        margin: [10, 10],
        maxRows: Infinity,
        draggable: null,
        resizable: null,
        bounded: null,
        transformScale: 1,
        useCssTransforms: true,
        useStyleCursor: true,
        isDragging: false,
        dragging: null,
        isResizing: false,
        resizing: null,
        lastX: NaN,
        lastY: NaN,
        lastW: NaN,
        lastH: NaN,
        style: {},
        dragEventSet: false,
        resizeEventSet: false,
        previousW: null,
        previousH: null,
        previousX: null,
        previousY: null,
        innerX: props.x,
        innerY: props.y,
        innerW: props.w,
        innerH: props.h
      });
      const classObj = vue.computed(() => {
        return {
          "vue-resizable": vue.unref(resizableAndNotStatic),
          static: props.static,
          resizing: state.isResizing,
          "vue-draggable-dragging": state.isDragging,
          cssTransforms: state.useCssTransforms,
          "render-rtl": vue.unref(renderRtl),
          "disable-userselect": state.isDragging,
          // 'no-touch': unref(isAndroid) && unref(draggableOrResizableAndNotStatic),
          "no-touch": vue.unref(draggableOrResizableAndNotStatic)
        };
      });
      const resizableAndNotStatic = vue.computed(() => {
        return state.resizable && !props.static;
      });
      const draggableOrResizableAndNotStatic = vue.computed(() => {
        return (state.draggable || state.resizable) && !props.static;
      });
      const renderRtl = vue.computed(() => {
        return gridLayout.props.isMirrored;
      });
      const resizableHandleClass = vue.computed(() => {
        if (vue.unref(renderRtl)) {
          return "vue-resizable-handle vue-rtl-resizable-handle";
        }
        return "vue-resizable-handle";
      });
      function created() {
        emitter.on("updateWidth", updateWidth);
        emitter.on("setDraggable", setDraggableHandler);
        emitter.on("setResizable", setResizableHandler);
        emitter.on("setBounded", setBoundedHandler);
        emitter.on("setTransformScale", setTransformScaleHandler);
        emitter.on("setRowHeight", setRowHeightHandler);
        emitter.on("setMaxRows", setMaxRowsHandler);
        emitter.on("directionchange", directionchangeHandler);
        emitter.on("setColNum", setColNum);
      }
      created();
      vue.onBeforeUnmount(() => {
        emitter.off("updateWidth", updateWidth);
        emitter.off("setDraggable", setDraggableHandler);
        emitter.off("setResizable", setResizableHandler);
        emitter.off("setBounded", setBoundedHandler);
        emitter.off("setTransformScale", setTransformScaleHandler);
        emitter.off("setRowHeight", setRowHeightHandler);
        emitter.off("setMaxRows", setMaxRowsHandler);
        emitter.off("directionchange", directionchangeHandler);
        emitter.off("setColNum", setColNum);
        if (interactObj) {
          interactObj.unset();
        }
      });
      vue.onMounted(() => {
        const parent = { ...gridLayout.props, ...gridLayout.state };
        if (parent.responsive && parent.lastBreakpoint) {
          state.cols = getColsFromBreakpoint(parent.lastBreakpoint, parent.cols);
        } else {
          state.cols = parent.colNum;
        }
        state.rowHeight = parent.rowHeight;
        state.containerWidth = parent.width !== null ? parent.width : 100;
        state.margin = parent.margin !== void 0 ? parent.margin : [10, 10];
        state.maxRows = parent.maxRows;
        if (props.isDraggable === null) {
          state.draggable = parent.isDraggable;
        } else {
          state.draggable = props.isDraggable;
        }
        if (props.isResizable === null) {
          state.resizable = parent.isResizable;
        } else {
          state.resizable = props.isResizable;
        }
        if (props.isBounded === null) {
          state.bounded = parent.isBounded;
        } else {
          state.bounded = props.isBounded;
        }
        state.transformScale = parent.transformScale;
        state.useCssTransforms = parent.useCssTransforms;
        state.useStyleCursor = parent.useStyleCursor;
        createStyle();
      });
      vue.watch(() => props.isDraggable, () => {
        state.draggable = props.isDraggable;
      });
      vue.watch(() => props.static, () => {
        tryMakeDraggable();
        tryMakeResizable();
      });
      vue.watch(() => state.draggable, () => {
        tryMakeDraggable();
      });
      vue.watch(() => props.isResizable, () => {
        state.resizable = props.isResizable;
      });
      vue.watch(() => props.isBounded, () => {
        state.bounded = props.isBounded;
      });
      vue.watch(() => state.resizable, () => {
        tryMakeResizable();
      });
      vue.watch(() => state.rowHeight, () => {
        createStyle();
        emitContainerResized();
      });
      vue.watch(() => state.cols, () => {
        tryMakeResizable();
        createStyle();
        emitContainerResized();
      });
      vue.watch(() => state.containerWidth, () => {
        tryMakeResizable();
        createStyle();
        emitContainerResized();
      });
      vue.watch(() => props.x, (newVal) => {
        state.innerX = newVal;
        createStyle();
      });
      vue.watch(() => props.y, (newVal) => {
        state.innerY = newVal;
        createStyle();
      });
      vue.watch(() => props.h, (newVal) => {
        state.innerH = newVal;
        createStyle();
      });
      vue.watch(() => props.w, (newVal) => {
        state.innerW = newVal;
        createStyle();
      });
      vue.watch(renderRtl, () => {
        tryMakeResizable();
        createStyle();
      });
      vue.watch(() => props.minH, () => {
        tryMakeResizable();
      });
      vue.watch(() => props.maxH, () => {
        tryMakeResizable();
      });
      vue.watch(() => props.minW, () => {
        tryMakeResizable();
      });
      vue.watch(() => props.maxW, () => {
        tryMakeResizable();
      });
      vue.watch(() => gridLayout.props.margin, (margin) => {
        if (!margin || Number(margin[0]) === Number(state.margin[0]) && Number(margin[1]) === Number(state.margin[1])) {
          return;
        }
        state.margin = margin.map((m) => Number(m) || 0);
        createStyle();
        emitContainerResized();
      });
      function setDraggableHandler(isDraggable) {
        if (props.isDraggable === null) {
          state.draggable = isDraggable;
        }
      }
      function setResizableHandler(isResizable) {
        if (props.isResizable === null) {
          state.resizable = isResizable;
        }
      }
      function setBoundedHandler(isBounded) {
        if (props.isBounded === null) {
          state.bounded = isBounded;
        }
      }
      function setTransformScaleHandler(transformScale) {
        state.transformScale = transformScale;
      }
      function setRowHeightHandler(rowHeight) {
        state.rowHeight = rowHeight;
      }
      function setMaxRowsHandler(maxRows) {
        state.maxRows = maxRows;
      }
      function directionchangeHandler() {
        createStyle();
      }
      function setColNum(colNum) {
        state.cols = parseInt(colNum);
      }
      function createStyle() {
        if (props.x + props.w > state.cols) {
          state.innerX = 0;
          state.innerW = props.w > state.cols ? state.cols : props.w;
        } else {
          state.innerX = props.x;
          state.innerW = props.w;
        }
        const pos = calcPosition(state.innerX, state.innerY, state.innerW, state.innerH);
        if (state.isDragging) {
          pos.top = state.dragging.top;
          if (vue.unref(renderRtl)) {
            pos.right = state.dragging.left;
          } else {
            pos.left = state.dragging.left;
          }
        }
        if (state.isResizing) {
          pos.width = state.resizing.width;
          pos.height = state.resizing.height;
        }
        let style;
        if (state.useCssTransforms) {
          if (vue.unref(renderRtl)) {
            style = setTransformRtl(pos.top, pos.right, pos.width, pos.height);
          } else {
            style = setTransform(pos.top, pos.left, pos.width, pos.height);
          }
        } else {
          if (vue.unref(renderRtl)) {
            style = setTopRight(pos.top, pos.right, pos.width, pos.height);
          } else {
            style = setTopLeft(pos.top, pos.left, pos.width, pos.height);
          }
        }
        state.style = style;
      }
      function emitContainerResized() {
        const styleProps = {};
        for (const prop2 of ["width", "height"]) {
          const val = state.style[prop2];
          const matches = val.match(/^(\d+)px$/);
          if (!matches) return;
          styleProps[prop2] = matches[1];
        }
        emit("container-resized", props.i, props.h, props.w, styleProps.height, styleProps.width);
      }
      function handleResize(event) {
        if (props.static) return;
        const position = getControlPosition(event);
        if (position == null) return;
        const { x, y } = position;
        const newSize = { width: 0, height: 0 };
        let pos;
        switch (event.type) {
          case "resizestart": {
            tryMakeResizable();
            state.previousW = state.innerW;
            state.previousH = state.innerH;
            pos = calcPosition(state.innerX, state.innerY, state.innerW, state.innerH);
            newSize.width = pos.width;
            newSize.height = pos.height;
            state.resizing = newSize;
            state.isResizing = true;
            break;
          }
          case "resizemove": {
            const coreEvent = createCoreData(state.lastW, state.lastH, x, y);
            if (vue.unref(renderRtl)) {
              newSize.width = state.resizing.width - coreEvent.deltaX / state.transformScale;
            } else {
              newSize.width = state.resizing.width + coreEvent.deltaX / state.transformScale;
            }
            newSize.height = state.resizing.height + coreEvent.deltaY / state.transformScale;
            state.resizing = newSize;
            break;
          }
          case "resizeend": {
            pos = calcPosition(state.innerX, state.innerY, state.innerW, state.innerH);
            newSize.width = pos.width;
            newSize.height = pos.height;
            state.resizing = null;
            state.isResizing = false;
            break;
          }
        }
        createStyle();
        pos = calcWH(newSize.height, newSize.width);
        if (pos.w < props.minW) {
          pos.w = props.minW;
        }
        if (pos.w > props.maxW) {
          pos.w = props.maxW;
        }
        if (pos.h < props.minH) {
          pos.h = props.minH;
        }
        if (pos.h > props.maxH) {
          pos.h = props.maxH;
        }
        if (pos.h < 1) {
          pos.h = 1;
        }
        if (pos.w < 1) {
          pos.w = 1;
        }
        state.lastW = x;
        state.lastH = y;
        if (state.innerW !== pos.w || state.innerH !== pos.h) {
          emit("resize", props.i, pos.h, pos.w, newSize.height, newSize.width);
        }
        if (event.type === "resizeend" && (state.previousW !== state.innerW || state.previousH !== state.innerH)) {
          emit("resized", props.i, pos.h, pos.w, newSize.height, newSize.width);
        }
        emitter.emit("resizeEvent", [
          event.type,
          props.i,
          state.innerX,
          state.innerY,
          pos.h,
          pos.w
        ]);
      }
      function handleDrag(event) {
        if (props.static) return;
        if (state.isResizing) return;
        const position = getControlPosition(event);
        if (position === null) return;
        const { x, y } = position;
        const newPosition = { top: 0, left: 0 };
        switch (event.type) {
          case "dragstart": {
            state.previousX = state.innerX;
            state.previousY = state.innerY;
            const parentRect = event.target.offsetParent.getBoundingClientRect();
            const clientRect = event.target.getBoundingClientRect();
            const cLeft = clientRect.left / state.transformScale;
            const pLeft = parentRect.left / state.transformScale;
            const cRight = clientRect.right / state.transformScale;
            const pRight = parentRect.right / state.transformScale;
            const cTop = clientRect.top / state.transformScale;
            const pTop = parentRect.top / state.transformScale;
            if (vue.unref(renderRtl)) {
              newPosition.left = (cRight - pRight) * -1;
            } else {
              newPosition.left = cLeft - pLeft;
            }
            newPosition.top = cTop - pTop;
            state.dragging = newPosition;
            state.isDragging = true;
            break;
          }
          case "dragend": {
            if (!state.isDragging) return;
            const parentRect = event.target.offsetParent.getBoundingClientRect();
            const clientRect = event.target.getBoundingClientRect();
            const cLeft = clientRect.left / state.transformScale;
            const pLeft = parentRect.left / state.transformScale;
            const cRight = clientRect.right / state.transformScale;
            const pRight = parentRect.right / state.transformScale;
            const cTop = clientRect.top / state.transformScale;
            const pTop = parentRect.top / state.transformScale;
            if (vue.unref(renderRtl)) {
              newPosition.left = (cRight - pRight) * -1;
            } else {
              newPosition.left = cLeft - pLeft;
            }
            newPosition.top = cTop - pTop;
            state.dragging = null;
            state.isDragging = false;
            break;
          }
          case "dragmove": {
            const coreEvent = createCoreData(state.lastX, state.lastY, x, y);
            if (vue.unref(renderRtl)) {
              newPosition.left = state.dragging.left - coreEvent.deltaX / state.transformScale;
            } else {
              newPosition.left = state.dragging.left + coreEvent.deltaX / state.transformScale;
            }
            newPosition.top = state.dragging.top + coreEvent.deltaY / state.transformScale;
            if (state.bounded) {
              const bottomBoundary = event.target.offsetParent.clientHeight - calcGridItemWHPx(props.h, state.rowHeight, state.margin[1]);
              newPosition.top = clamp(newPosition.top, 0, bottomBoundary);
              const colWidth = calcColWidth();
              const rightBoundary = state.containerWidth - calcGridItemWHPx(props.w, colWidth, state.margin[0]);
              newPosition.left = clamp(newPosition.left, 0, rightBoundary);
            }
            state.dragging = newPosition;
            break;
          }
        }
        createStyle();
        let pos;
        if (vue.unref(renderRtl)) {
          pos = calcXY(newPosition.top, newPosition.left);
        } else {
          pos = calcXY(newPosition.top, newPosition.left);
        }
        state.lastX = x;
        state.lastY = y;
        if (state.innerX !== pos.x || state.innerY !== pos.y) {
          emit("move", props.i, pos.x, pos.y);
        }
        if (event.type === "dragend" && (state.previousX !== state.innerX || state.previousY !== state.innerY)) {
          emit("moved", props.i, pos.x, pos.y);
        }
        emitter.emit("dragEvent", [
          event.type,
          props.i,
          pos.x,
          pos.y,
          state.innerH,
          state.innerW
        ]);
      }
      function calcPosition(x, y, w, h) {
        const colWidth = calcColWidth();
        let out;
        if (vue.unref(renderRtl)) {
          out = {
            right: Math.round(colWidth * x + (x + 1) * state.margin[0]),
            top: Math.round(state.rowHeight * y + (y + 1) * state.margin[1]),
            // 0 * Infinity === NaN, which causes problems with resize constriants;
            // Fix this if it occurs.
            // Note we do it here rather than later because Math.round(Infinity) causes deopt
            width: w === Infinity ? w : Math.round(colWidth * w + Math.max(0, w - 1) * state.margin[0]),
            height: h === Infinity ? h : Math.round(state.rowHeight * h + Math.max(0, h - 1) * state.margin[1])
          };
        } else {
          out = {
            left: Math.round(colWidth * x + (x + 1) * state.margin[0]),
            top: Math.round(state.rowHeight * y + (y + 1) * state.margin[1]),
            // 0 * Infinity === NaN, which causes problems with resize constriants;
            // Fix this if it occurs.
            // Note we do it here rather than later because Math.round(Infinity) causes deopt
            width: w === Infinity ? w : Math.round(colWidth * w + Math.max(0, w - 1) * state.margin[0]),
            height: h === Infinity ? h : Math.round(state.rowHeight * h + Math.max(0, h - 1) * state.margin[1])
          };
        }
        return out;
      }
      function calcXY(top, left) {
        const colWidth = calcColWidth();
        let x = Math.round((left - state.margin[0]) / (colWidth + state.margin[0]));
        let y = Math.round((top - state.margin[1]) / (state.rowHeight + state.margin[1]));
        x = Math.max(Math.min(x, state.cols - state.innerW), 0);
        y = Math.max(Math.min(y, state.maxRows - state.innerH), 0);
        return { x, y };
      }
      function calcColWidth() {
        const colWidth = (state.containerWidth - state.margin[0] * (state.cols + 1)) / state.cols;
        return colWidth;
      }
      function calcGridItemWHPx(gridUnits, colOrRowSize, marginPx) {
        if (!Number.isFinite(gridUnits)) return gridUnits;
        return Math.round(
          colOrRowSize * gridUnits + Math.max(0, gridUnits - 1) * marginPx
        );
      }
      function clamp(num, lowerBound, upperBound) {
        return Math.max(Math.min(num, upperBound), lowerBound);
      }
      function calcWH(height, width, autoSizeFlag = false) {
        const colWidth = calcColWidth();
        let w = Math.round((width + state.margin[0]) / (colWidth + state.margin[0]));
        let h = 0;
        if (!autoSizeFlag) {
          h = Math.round((height + state.margin[1]) / (state.rowHeight + state.margin[1]));
        } else {
          h = Math.ceil((height + state.margin[1]) / (state.rowHeight + state.margin[1]));
        }
        w = Math.max(Math.min(w, state.cols - state.innerX), 0);
        h = Math.max(Math.min(h, state.maxRows - state.innerY), 0);
        return { w, h };
      }
      function updateWidth(width, colNum) {
        state.containerWidth = width;
        if (colNum !== void 0 && colNum !== null) {
          state.cols = colNum;
        }
      }
      function tryMakeDraggable() {
        if (interactObj === null || interactObj === void 0) {
          interactObj = interact(exposeObj.el);
          if (!state.useStyleCursor) {
            interactObj.styleCursor(false);
          }
        }
        if (state.draggable && !props.static) {
          const opts = {
            ignoreFrom: props.dragIgnoreFrom,
            allowFrom: props.dragAllowFrom,
            ...props.dragOption
          };
          interactObj.draggable(opts);
          if (!state.dragEventSet) {
            state.dragEventSet = true;
            interactObj.on("dragstart dragmove dragend", (event) => {
              handleDrag(event);
            });
          }
        } else {
          interactObj.draggable({
            enabled: false
          });
        }
      }
      function tryMakeResizable() {
        if (interactObj === null || interactObj === void 0) {
          interactObj = interact(exposeObj.el);
          if (!state.useStyleCursor) {
            interactObj.styleCursor(false);
          }
        }
        if (state.resizable && !props.static) {
          const maximum = calcPosition(0, 0, props.maxW, props.maxH);
          const minimum = calcPosition(0, 0, props.minW, props.minH);
          const opts = {
            // allowFrom: "." + unref(resizableHandleClass).trim().replace(" ", "."),
            edges: {
              left: false,
              right: `.${vue.unref(resizableHandleClass).trim().replace(" ", ".")}`,
              bottom: `.${vue.unref(resizableHandleClass).trim().replace(" ", ".")}`,
              top: false
            },
            ignoreFrom: props.resizeIgnoreFrom,
            restrictSize: {
              min: {
                height: minimum.height * state.transformScale,
                width: minimum.width * state.transformScale
              },
              max: {
                height: maximum.height * state.transformScale,
                width: maximum.width * state.transformScale
              }
            },
            ...props.resizeOption
          };
          if (props.preserveAspectRatio) {
            opts.modifiers = [
              interact.modifiers.aspectRatio({
                ratio: "preserve"
              })
            ];
          }
          interactObj.resizable(opts);
          if (!state.resizeEventSet) {
            state.resizeEventSet = true;
            interactObj.on("resizestart resizemove resizeend", (event) => {
              handleResize(event);
            });
          }
        } else {
          interactObj.resizable({
            enabled: false
          });
        }
      }
      function setRef(e) {
        exposeObj.el = e;
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          ref: setRef,
          class: vue.normalizeClass(["vue-grid-item", classObj.value]),
          style: vue.normalizeStyle(state.style),
          id: __props.i,
          key: __props.i
        }, [
          vue.renderSlot(_ctx.$slots, "default", {
            class: vue.normalizeClass({ rtl: renderRtl.value })
          }, void 0, true),
          resizableAndNotStatic.value ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 0,
            class: vue.normalizeClass(resizableHandleClass.value)
          }, null, 2)) : vue.createCommentVNode("", true)
        ], 14, _hoisted_1);
      };
    }
  };
  const GridItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-99aff433"]]);
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var collectionUtils = { exports: {} };
  var utils$3 = collectionUtils.exports = {};
  utils$3.forEach = function(collection, callback) {
    for (var i = 0; i < collection.length; i++) {
      var result = callback(collection[i]);
      if (result) {
        return result;
      }
    }
  };
  var collectionUtilsExports = collectionUtils.exports;
  var elementUtils = function(options) {
    var getState2 = options.stateHandler.getState;
    function isDetectable(element2) {
      var state = getState2(element2);
      return state && !!state.isDetectable;
    }
    function markAsDetectable(element2) {
      getState2(element2).isDetectable = true;
    }
    function isBusy(element2) {
      return !!getState2(element2).busy;
    }
    function markBusy(element2, busy) {
      getState2(element2).busy = !!busy;
    }
    return {
      isDetectable,
      markAsDetectable,
      isBusy,
      markBusy
    };
  };
  var listenerHandler = function(idHandler2) {
    var eventListeners = {};
    function getListeners(element2) {
      var id2 = idHandler2.get(element2);
      if (id2 === void 0) {
        return [];
      }
      return eventListeners[id2] || [];
    }
    function addListener(element2, listener) {
      var id2 = idHandler2.get(element2);
      if (!eventListeners[id2]) {
        eventListeners[id2] = [];
      }
      eventListeners[id2].push(listener);
    }
    function removeListener(element2, listener) {
      var listeners = getListeners(element2);
      for (var i = 0, len = listeners.length; i < len; ++i) {
        if (listeners[i] === listener) {
          listeners.splice(i, 1);
          break;
        }
      }
    }
    function removeAllListeners(element2) {
      var listeners = getListeners(element2);
      if (!listeners) {
        return;
      }
      listeners.length = 0;
    }
    return {
      get: getListeners,
      add: addListener,
      removeListener,
      removeAllListeners
    };
  };
  var idGenerator = function() {
    var idCount = 1;
    function generate() {
      return idCount++;
    }
    return {
      generate
    };
  };
  var idHandler = function(options) {
    var idGenerator2 = options.idGenerator;
    var getState2 = options.stateHandler.getState;
    function getId(element2) {
      var state = getState2(element2);
      if (state && state.id !== void 0) {
        return state.id;
      }
      return null;
    }
    function setId(element2) {
      var state = getState2(element2);
      if (!state) {
        throw new Error("setId required the element to have a resize detection state.");
      }
      var id2 = idGenerator2.generate();
      state.id = id2;
      return id2;
    }
    return {
      get: getId,
      set: setId
    };
  };
  var reporter = function(quiet) {
    function noop2() {
    }
    var reporter2 = {
      log: noop2,
      warn: noop2,
      error: noop2
    };
    if (!quiet && window.console) {
      var attachFunction = function(reporter3, name) {
        reporter3[name] = function reporterProxy() {
          var f = console[name];
          if (f.apply) {
            f.apply(console, arguments);
          } else {
            for (var i = 0; i < arguments.length; i++) {
              f(arguments[i]);
            }
          }
        };
      };
      attachFunction(reporter2, "log");
      attachFunction(reporter2, "warn");
      attachFunction(reporter2, "error");
    }
    return reporter2;
  };
  var browserDetector$2 = { exports: {} };
  var detector = browserDetector$2.exports = {};
  detector.isIE = function(version) {
    function isAnyIeVersion() {
      var agent = navigator.userAgent.toLowerCase();
      return agent.indexOf("msie") !== -1 || agent.indexOf("trident") !== -1 || agent.indexOf(" edge/") !== -1;
    }
    if (!isAnyIeVersion()) {
      return false;
    }
    if (!version) {
      return true;
    }
    var ieVersion = function() {
      var undef, v = 3, div = document.createElement("div"), all2 = div.getElementsByTagName("i");
      do {
        div.innerHTML = "<!--[if gt IE " + ++v + "]><i></i><![endif]-->";
      } while (all2[0]);
      return v > 4 ? v : undef;
    }();
    return version === ieVersion;
  };
  detector.isLegacyOpera = function() {
    return !!window.opera;
  };
  var browserDetectorExports = browserDetector$2.exports;
  var utils$2 = { exports: {} };
  var utils$1 = utils$2.exports = {};
  utils$1.getOption = getOption$1;
  function getOption$1(options, name, defaultValue) {
    var value = options[name];
    if ((value === void 0 || value === null) && defaultValue !== void 0) {
      return defaultValue;
    }
    return value;
  }
  var utilsExports = utils$2.exports;
  var utils = utilsExports;
  var batchProcessor = function batchProcessorMaker2(options) {
    options = options || {};
    var reporter2 = options.reporter;
    var asyncProcess = utils.getOption(options, "async", true);
    var autoProcess = utils.getOption(options, "auto", true);
    if (autoProcess && !asyncProcess) {
      reporter2 && reporter2.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true.");
      asyncProcess = true;
    }
    var batch = Batch();
    var asyncFrameHandler;
    var isProcessing = false;
    function addFunction(level, fn) {
      if (!isProcessing && autoProcess && asyncProcess && batch.size() === 0) {
        processBatchAsync();
      }
      batch.add(level, fn);
    }
    function processBatch() {
      isProcessing = true;
      while (batch.size()) {
        var processingBatch = batch;
        batch = Batch();
        processingBatch.process();
      }
      isProcessing = false;
    }
    function forceProcessBatch(localAsyncProcess) {
      if (isProcessing) {
        return;
      }
      if (localAsyncProcess === void 0) {
        localAsyncProcess = asyncProcess;
      }
      if (asyncFrameHandler) {
        cancelFrame(asyncFrameHandler);
        asyncFrameHandler = null;
      }
      if (localAsyncProcess) {
        processBatchAsync();
      } else {
        processBatch();
      }
    }
    function processBatchAsync() {
      asyncFrameHandler = requestFrame(processBatch);
    }
    function cancelFrame(listener) {
      var cancel2 = clearTimeout;
      return cancel2(listener);
    }
    function requestFrame(callback) {
      var raf2 = function(fn) {
        return setTimeout(fn, 0);
      };
      return raf2(callback);
    }
    return {
      add: addFunction,
      force: forceProcessBatch
    };
  };
  function Batch() {
    var batch = {};
    var size = 0;
    var topLevel = 0;
    var bottomLevel = 0;
    function add(level, fn) {
      if (!fn) {
        fn = level;
        level = 0;
      }
      if (level > topLevel) {
        topLevel = level;
      } else if (level < bottomLevel) {
        bottomLevel = level;
      }
      if (!batch[level]) {
        batch[level] = [];
      }
      batch[level].push(fn);
      size++;
    }
    function process() {
      for (var level = bottomLevel; level <= topLevel; level++) {
        var fns = batch[level];
        for (var i = 0; i < fns.length; i++) {
          var fn = fns[i];
          fn();
        }
      }
    }
    function getSize() {
      return size;
    }
    return {
      add,
      process,
      size: getSize
    };
  }
  var prop = "_erd";
  function initState(element2) {
    element2[prop] = {};
    return getState(element2);
  }
  function getState(element2) {
    return element2[prop];
  }
  function cleanState(element2) {
    delete element2[prop];
  }
  var stateHandler$1 = {
    initState,
    getState,
    cleanState
  };
  var browserDetector$1 = browserDetectorExports;
  var object = function(options) {
    options = options || {};
    var reporter2 = options.reporter;
    var batchProcessor2 = options.batchProcessor;
    var getState2 = options.stateHandler.getState;
    if (!reporter2) {
      throw new Error("Missing required dependency: reporter.");
    }
    function addListener(element2, listener) {
      function listenerProxy() {
        listener(element2);
      }
      if (browserDetector$1.isIE(8)) {
        getState2(element2).object = {
          proxy: listenerProxy
        };
        element2.attachEvent("onresize", listenerProxy);
      } else {
        var object2 = getObject(element2);
        if (!object2) {
          throw new Error("Element is not detectable by this strategy.");
        }
        object2.contentDocument.defaultView.addEventListener("resize", listenerProxy);
      }
    }
    function buildCssTextString(rules) {
      var seperator = options.important ? " !important; " : "; ";
      return (rules.join(seperator) + seperator).trim();
    }
    function makeDetectable(options2, element2, callback) {
      if (!callback) {
        callback = element2;
        element2 = options2;
        options2 = null;
      }
      options2 = options2 || {};
      options2.debug;
      function injectObject(element3, callback2) {
        var OBJECT_STYLE = buildCssTextString(["display: block", "position: absolute", "top: 0", "left: 0", "width: 100%", "height: 100%", "border: none", "padding: 0", "margin: 0", "opacity: 0", "z-index: -1000", "pointer-events: none"]);
        var positionCheckPerformed = false;
        var style = window.getComputedStyle(element3);
        var width = element3.offsetWidth;
        var height = element3.offsetHeight;
        getState2(element3).startSize = {
          width,
          height
        };
        function mutateDom() {
          function alterPositionStyles() {
            if (style.position === "static") {
              element3.style.setProperty("position", "relative", options2.important ? "important" : "");
              var removeRelativeStyles = function(reporter3, element4, style2, property) {
                function getNumericalValue(value2) {
                  return value2.replace(/[^-\d\.]/g, "");
                }
                var value = style2[property];
                if (value !== "auto" && getNumericalValue(value) !== "0") {
                  reporter3.warn("An element that is positioned static has style." + property + "=" + value + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + property + " will be set to 0. Element: ", element4);
                  element4.style.setProperty(property, "0", options2.important ? "important" : "");
                }
              };
              removeRelativeStyles(reporter2, element3, style, "top");
              removeRelativeStyles(reporter2, element3, style, "right");
              removeRelativeStyles(reporter2, element3, style, "bottom");
              removeRelativeStyles(reporter2, element3, style, "left");
            }
          }
          function onObjectLoad() {
            if (!positionCheckPerformed) {
              alterPositionStyles();
            }
            function getDocument(element4, callback3) {
              if (!element4.contentDocument) {
                var state = getState2(element4);
                if (state.checkForObjectDocumentTimeoutId) {
                  window.clearTimeout(state.checkForObjectDocumentTimeoutId);
                }
                state.checkForObjectDocumentTimeoutId = setTimeout(function checkForObjectDocument() {
                  state.checkForObjectDocumentTimeoutId = 0;
                  getDocument(element4, callback3);
                }, 100);
                return;
              }
              callback3(element4.contentDocument);
            }
            var objectElement = this;
            getDocument(objectElement, function onObjectDocumentReady(objectDocument) {
              callback2(element3);
            });
          }
          if (style.position !== "") {
            alterPositionStyles();
            positionCheckPerformed = true;
          }
          var object2 = document.createElement("object");
          object2.style.cssText = OBJECT_STYLE;
          object2.tabIndex = -1;
          object2.type = "text/html";
          object2.setAttribute("aria-hidden", "true");
          object2.onload = onObjectLoad;
          if (!browserDetector$1.isIE()) {
            object2.data = "about:blank";
          }
          if (!getState2(element3)) {
            return;
          }
          element3.appendChild(object2);
          getState2(element3).object = object2;
          if (browserDetector$1.isIE()) {
            object2.data = "about:blank";
          }
        }
        if (batchProcessor2) {
          batchProcessor2.add(mutateDom);
        } else {
          mutateDom();
        }
      }
      if (browserDetector$1.isIE(8)) {
        callback(element2);
      } else {
        injectObject(element2, callback);
      }
    }
    function getObject(element2) {
      return getState2(element2).object;
    }
    function uninstall(element2) {
      if (!getState2(element2)) {
        return;
      }
      var object2 = getObject(element2);
      if (!object2) {
        return;
      }
      if (browserDetector$1.isIE(8)) {
        element2.detachEvent("onresize", object2.proxy);
      } else {
        element2.removeChild(object2);
      }
      if (getState2(element2).checkForObjectDocumentTimeoutId) {
        window.clearTimeout(getState2(element2).checkForObjectDocumentTimeoutId);
      }
      delete getState2(element2).object;
    }
    return {
      makeDetectable,
      addListener,
      uninstall
    };
  };
  var forEach$1 = collectionUtilsExports.forEach;
  var scroll = function(options) {
    options = options || {};
    var reporter2 = options.reporter;
    var batchProcessor2 = options.batchProcessor;
    var getState2 = options.stateHandler.getState;
    options.stateHandler.hasState;
    var idHandler2 = options.idHandler;
    if (!batchProcessor2) {
      throw new Error("Missing required dependency: batchProcessor");
    }
    if (!reporter2) {
      throw new Error("Missing required dependency: reporter.");
    }
    var scrollbarSizes = getScrollbarSizes();
    var styleId = "erd_scroll_detection_scrollbar_style";
    var detectionContainerClass = "erd_scroll_detection_container";
    function initDocument(targetDocument) {
      injectScrollStyle(targetDocument, styleId, detectionContainerClass);
    }
    initDocument(window.document);
    function buildCssTextString(rules) {
      var seperator = options.important ? " !important; " : "; ";
      return (rules.join(seperator) + seperator).trim();
    }
    function getScrollbarSizes() {
      var width = 500;
      var height = 500;
      var child = document.createElement("div");
      child.style.cssText = buildCssTextString(["position: absolute", "width: " + width * 2 + "px", "height: " + height * 2 + "px", "visibility: hidden", "margin: 0", "padding: 0"]);
      var container = document.createElement("div");
      container.style.cssText = buildCssTextString(["position: absolute", "width: " + width + "px", "height: " + height + "px", "overflow: scroll", "visibility: none", "top: " + -width * 3 + "px", "left: " + -height * 3 + "px", "visibility: hidden", "margin: 0", "padding: 0"]);
      container.appendChild(child);
      document.body.insertBefore(container, document.body.firstChild);
      var widthSize = width - container.clientWidth;
      var heightSize = height - container.clientHeight;
      document.body.removeChild(container);
      return {
        width: widthSize,
        height: heightSize
      };
    }
    function injectScrollStyle(targetDocument, styleId2, containerClass) {
      function injectStyle(style2, method) {
        method = method || function(element2) {
          targetDocument.head.appendChild(element2);
        };
        var styleElement = targetDocument.createElement("style");
        styleElement.innerHTML = style2;
        styleElement.id = styleId2;
        method(styleElement);
        return styleElement;
      }
      if (!targetDocument.getElementById(styleId2)) {
        var containerAnimationClass = containerClass + "_animation";
        var containerAnimationActiveClass = containerClass + "_animation_active";
        var style = "/* Created by the element-resize-detector library. */\n";
        style += "." + containerClass + " > div::-webkit-scrollbar { " + buildCssTextString(["display: none"]) + " }\n\n";
        style += "." + containerAnimationActiveClass + " { " + buildCssTextString(["-webkit-animation-duration: 0.1s", "animation-duration: 0.1s", "-webkit-animation-name: " + containerAnimationClass, "animation-name: " + containerAnimationClass]) + " }\n";
        style += "@-webkit-keyframes " + containerAnimationClass + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n";
        style += "@keyframes " + containerAnimationClass + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }";
        injectStyle(style);
      }
    }
    function addAnimationClass(element2) {
      element2.className += " " + detectionContainerClass + "_animation_active";
    }
    function addEvent(el, name, cb2) {
      if (el.addEventListener) {
        el.addEventListener(name, cb2);
      } else if (el.attachEvent) {
        el.attachEvent("on" + name, cb2);
      } else {
        return reporter2.error("[scroll] Don't know how to add event listeners.");
      }
    }
    function removeEvent(el, name, cb2) {
      if (el.removeEventListener) {
        el.removeEventListener(name, cb2);
      } else if (el.detachEvent) {
        el.detachEvent("on" + name, cb2);
      } else {
        return reporter2.error("[scroll] Don't know how to remove event listeners.");
      }
    }
    function getExpandElement(element2) {
      return getState2(element2).container.childNodes[0].childNodes[0].childNodes[0];
    }
    function getShrinkElement(element2) {
      return getState2(element2).container.childNodes[0].childNodes[0].childNodes[1];
    }
    function addListener(element2, listener) {
      var listeners = getState2(element2).listeners;
      if (!listeners.push) {
        throw new Error("Cannot add listener to an element that is not detectable.");
      }
      getState2(element2).listeners.push(listener);
    }
    function makeDetectable(options2, element2, callback) {
      if (!callback) {
        callback = element2;
        element2 = options2;
        options2 = null;
      }
      options2 = options2 || {};
      function debug() {
        if (options2.debug) {
          var args = Array.prototype.slice.call(arguments);
          args.unshift(idHandler2.get(element2), "Scroll: ");
          if (reporter2.log.apply) {
            reporter2.log.apply(null, args);
          } else {
            for (var i = 0; i < args.length; i++) {
              reporter2.log(args[i]);
            }
          }
        }
      }
      function isDetached(element3) {
        function isInDocument(element4) {
          var isInShadowRoot = element4.getRootNode && element4.getRootNode().contains(element4);
          return element4 === element4.ownerDocument.body || element4.ownerDocument.body.contains(element4) || isInShadowRoot;
        }
        if (!isInDocument(element3)) {
          return true;
        }
        if (window.getComputedStyle(element3) === null) {
          return true;
        }
        return false;
      }
      function isUnrendered(element3) {
        var container = getState2(element3).container.childNodes[0];
        var style = window.getComputedStyle(container);
        return !style.width || style.width.indexOf("px") === -1;
      }
      function getStyle() {
        var elementStyle = window.getComputedStyle(element2);
        var style = {};
        style.position = elementStyle.position;
        style.width = element2.offsetWidth;
        style.height = element2.offsetHeight;
        style.top = elementStyle.top;
        style.right = elementStyle.right;
        style.bottom = elementStyle.bottom;
        style.left = elementStyle.left;
        style.widthCSS = elementStyle.width;
        style.heightCSS = elementStyle.height;
        return style;
      }
      function storeStartSize() {
        var style = getStyle();
        getState2(element2).startSize = {
          width: style.width,
          height: style.height
        };
        debug("Element start size", getState2(element2).startSize);
      }
      function initListeners() {
        getState2(element2).listeners = [];
      }
      function storeStyle() {
        debug("storeStyle invoked.");
        if (!getState2(element2)) {
          debug("Aborting because element has been uninstalled");
          return;
        }
        var style = getStyle();
        getState2(element2).style = style;
      }
      function storeCurrentSize(element3, width, height) {
        getState2(element3).lastWidth = width;
        getState2(element3).lastHeight = height;
      }
      function getExpandChildElement(element3) {
        return getExpandElement(element3).childNodes[0];
      }
      function getWidthOffset() {
        return 2 * scrollbarSizes.width + 1;
      }
      function getHeightOffset() {
        return 2 * scrollbarSizes.height + 1;
      }
      function getExpandWidth(width) {
        return width + 10 + getWidthOffset();
      }
      function getExpandHeight(height) {
        return height + 10 + getHeightOffset();
      }
      function getShrinkWidth(width) {
        return width * 2 + getWidthOffset();
      }
      function getShrinkHeight(height) {
        return height * 2 + getHeightOffset();
      }
      function positionScrollbars(element3, width, height) {
        var expand = getExpandElement(element3);
        var shrink = getShrinkElement(element3);
        var expandWidth = getExpandWidth(width);
        var expandHeight = getExpandHeight(height);
        var shrinkWidth = getShrinkWidth(width);
        var shrinkHeight = getShrinkHeight(height);
        expand.scrollLeft = expandWidth;
        expand.scrollTop = expandHeight;
        shrink.scrollLeft = shrinkWidth;
        shrink.scrollTop = shrinkHeight;
      }
      function injectContainerElement() {
        var container = getState2(element2).container;
        if (!container) {
          container = document.createElement("div");
          container.className = detectionContainerClass;
          container.style.cssText = buildCssTextString(["visibility: hidden", "display: inline", "width: 0px", "height: 0px", "z-index: -1", "overflow: hidden", "margin: 0", "padding: 0"]);
          getState2(element2).container = container;
          addAnimationClass(container);
          element2.appendChild(container);
          var onAnimationStart = function() {
            getState2(element2).onRendered && getState2(element2).onRendered();
          };
          addEvent(container, "animationstart", onAnimationStart);
          getState2(element2).onAnimationStart = onAnimationStart;
        }
        return container;
      }
      function injectScrollElements() {
        function alterPositionStyles() {
          var style = getState2(element2).style;
          if (style.position === "static") {
            element2.style.setProperty("position", "relative", options2.important ? "important" : "");
            var removeRelativeStyles = function(reporter3, element3, style2, property) {
              function getNumericalValue(value2) {
                return value2.replace(/[^-\d\.]/g, "");
              }
              var value = style2[property];
              if (value !== "auto" && getNumericalValue(value) !== "0") {
                reporter3.warn("An element that is positioned static has style." + property + "=" + value + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + property + " will be set to 0. Element: ", element3);
                element3.style[property] = 0;
              }
            };
            removeRelativeStyles(reporter2, element2, style, "top");
            removeRelativeStyles(reporter2, element2, style, "right");
            removeRelativeStyles(reporter2, element2, style, "bottom");
            removeRelativeStyles(reporter2, element2, style, "left");
          }
        }
        function getLeftTopBottomRightCssText(left, top, bottom2, right) {
          left = !left ? "0" : left + "px";
          top = !top ? "0" : top + "px";
          bottom2 = !bottom2 ? "0" : bottom2 + "px";
          right = !right ? "0" : right + "px";
          return ["left: " + left, "top: " + top, "right: " + right, "bottom: " + bottom2];
        }
        debug("Injecting elements");
        if (!getState2(element2)) {
          debug("Aborting because element has been uninstalled");
          return;
        }
        alterPositionStyles();
        var rootContainer = getState2(element2).container;
        if (!rootContainer) {
          rootContainer = injectContainerElement();
        }
        var scrollbarWidth = scrollbarSizes.width;
        var scrollbarHeight = scrollbarSizes.height;
        var containerContainerStyle = buildCssTextString(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%", "left: 0px", "top: 0px"]);
        var containerStyle = buildCssTextString(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden"].concat(getLeftTopBottomRightCssText(-(1 + scrollbarWidth), -(1 + scrollbarHeight), -scrollbarHeight, -scrollbarWidth)));
        var expandStyle = buildCssTextString(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]);
        var shrinkStyle = buildCssTextString(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]);
        var expandChildStyle = buildCssTextString(["position: absolute", "left: 0", "top: 0"]);
        var shrinkChildStyle = buildCssTextString(["position: absolute", "width: 200%", "height: 200%"]);
        var containerContainer = document.createElement("div");
        var container = document.createElement("div");
        var expand = document.createElement("div");
        var expandChild = document.createElement("div");
        var shrink = document.createElement("div");
        var shrinkChild = document.createElement("div");
        containerContainer.dir = "ltr";
        containerContainer.style.cssText = containerContainerStyle;
        containerContainer.className = detectionContainerClass;
        container.className = detectionContainerClass;
        container.style.cssText = containerStyle;
        expand.style.cssText = expandStyle;
        expandChild.style.cssText = expandChildStyle;
        shrink.style.cssText = shrinkStyle;
        shrinkChild.style.cssText = shrinkChildStyle;
        expand.appendChild(expandChild);
        shrink.appendChild(shrinkChild);
        container.appendChild(expand);
        container.appendChild(shrink);
        containerContainer.appendChild(container);
        rootContainer.appendChild(containerContainer);
        function onExpandScroll() {
          var state = getState2(element2);
          if (state && state.onExpand) {
            state.onExpand();
          } else {
            debug("Aborting expand scroll handler: element has been uninstalled");
          }
        }
        function onShrinkScroll() {
          var state = getState2(element2);
          if (state && state.onShrink) {
            state.onShrink();
          } else {
            debug("Aborting shrink scroll handler: element has been uninstalled");
          }
        }
        addEvent(expand, "scroll", onExpandScroll);
        addEvent(shrink, "scroll", onShrinkScroll);
        getState2(element2).onExpandScroll = onExpandScroll;
        getState2(element2).onShrinkScroll = onShrinkScroll;
      }
      function registerListenersAndPositionElements() {
        function updateChildSizes(element3, width, height) {
          var expandChild = getExpandChildElement(element3);
          var expandWidth = getExpandWidth(width);
          var expandHeight = getExpandHeight(height);
          expandChild.style.setProperty("width", expandWidth + "px", options2.important ? "important" : "");
          expandChild.style.setProperty("height", expandHeight + "px", options2.important ? "important" : "");
        }
        function updateDetectorElements(done) {
          var width = element2.offsetWidth;
          var height = element2.offsetHeight;
          var sizeChanged = width !== getState2(element2).lastWidth || height !== getState2(element2).lastHeight;
          debug("Storing current size", width, height);
          storeCurrentSize(element2, width, height);
          batchProcessor2.add(0, function performUpdateChildSizes() {
            if (!sizeChanged) {
              return;
            }
            if (!getState2(element2)) {
              debug("Aborting because element has been uninstalled");
              return;
            }
            if (!areElementsInjected()) {
              debug("Aborting because element container has not been initialized");
              return;
            }
            if (options2.debug) {
              var w = element2.offsetWidth;
              var h = element2.offsetHeight;
              if (w !== width || h !== height) {
                reporter2.warn(idHandler2.get(element2), "Scroll: Size changed before updating detector elements.");
              }
            }
            updateChildSizes(element2, width, height);
          });
          batchProcessor2.add(1, function updateScrollbars() {
            if (!getState2(element2)) {
              debug("Aborting because element has been uninstalled");
              return;
            }
            if (!areElementsInjected()) {
              debug("Aborting because element container has not been initialized");
              return;
            }
            positionScrollbars(element2, width, height);
          });
          if (sizeChanged && done) {
            batchProcessor2.add(2, function() {
              if (!getState2(element2)) {
                debug("Aborting because element has been uninstalled");
                return;
              }
              if (!areElementsInjected()) {
                debug("Aborting because element container has not been initialized");
                return;
              }
              done();
            });
          }
        }
        function areElementsInjected() {
          return !!getState2(element2).container;
        }
        function notifyListenersIfNeeded() {
          function isFirstNotify() {
            return getState2(element2).lastNotifiedWidth === void 0;
          }
          debug("notifyListenersIfNeeded invoked");
          var state = getState2(element2);
          if (isFirstNotify() && state.lastWidth === state.startSize.width && state.lastHeight === state.startSize.height) {
            return debug("Not notifying: Size is the same as the start size, and there has been no notification yet.");
          }
          if (state.lastWidth === state.lastNotifiedWidth && state.lastHeight === state.lastNotifiedHeight) {
            return debug("Not notifying: Size already notified");
          }
          debug("Current size not notified, notifying...");
          state.lastNotifiedWidth = state.lastWidth;
          state.lastNotifiedHeight = state.lastHeight;
          forEach$1(getState2(element2).listeners, function(listener) {
            listener(element2);
          });
        }
        function handleRender() {
          debug("startanimation triggered.");
          if (isUnrendered(element2)) {
            debug("Ignoring since element is still unrendered...");
            return;
          }
          debug("Element rendered.");
          var expand = getExpandElement(element2);
          var shrink = getShrinkElement(element2);
          if (expand.scrollLeft === 0 || expand.scrollTop === 0 || shrink.scrollLeft === 0 || shrink.scrollTop === 0) {
            debug("Scrollbars out of sync. Updating detector elements...");
            updateDetectorElements(notifyListenersIfNeeded);
          }
        }
        function handleScroll() {
          debug("Scroll detected.");
          if (isUnrendered(element2)) {
            debug("Scroll event fired while unrendered. Ignoring...");
            return;
          }
          updateDetectorElements(notifyListenersIfNeeded);
        }
        debug("registerListenersAndPositionElements invoked.");
        if (!getState2(element2)) {
          debug("Aborting because element has been uninstalled");
          return;
        }
        getState2(element2).onRendered = handleRender;
        getState2(element2).onExpand = handleScroll;
        getState2(element2).onShrink = handleScroll;
        var style = getState2(element2).style;
        updateChildSizes(element2, style.width, style.height);
      }
      function finalizeDomMutation() {
        debug("finalizeDomMutation invoked.");
        if (!getState2(element2)) {
          debug("Aborting because element has been uninstalled");
          return;
        }
        var style = getState2(element2).style;
        storeCurrentSize(element2, style.width, style.height);
        positionScrollbars(element2, style.width, style.height);
      }
      function ready() {
        callback(element2);
      }
      function install2() {
        debug("Installing...");
        initListeners();
        storeStartSize();
        batchProcessor2.add(0, storeStyle);
        batchProcessor2.add(1, injectScrollElements);
        batchProcessor2.add(2, registerListenersAndPositionElements);
        batchProcessor2.add(3, finalizeDomMutation);
        batchProcessor2.add(4, ready);
      }
      debug("Making detectable...");
      if (isDetached(element2)) {
        debug("Element is detached");
        injectContainerElement();
        debug("Waiting until element is attached...");
        getState2(element2).onRendered = function() {
          debug("Element is now attached");
          install2();
        };
      } else {
        install2();
      }
    }
    function uninstall(element2) {
      var state = getState2(element2);
      if (!state) {
        return;
      }
      state.onExpandScroll && removeEvent(getExpandElement(element2), "scroll", state.onExpandScroll);
      state.onShrinkScroll && removeEvent(getShrinkElement(element2), "scroll", state.onShrinkScroll);
      state.onAnimationStart && removeEvent(state.container, "animationstart", state.onAnimationStart);
      state.container && element2.removeChild(state.container);
    }
    return {
      makeDetectable,
      addListener,
      uninstall,
      initDocument
    };
  };
  var forEach = collectionUtilsExports.forEach;
  var elementUtilsMaker = elementUtils;
  var listenerHandlerMaker = listenerHandler;
  var idGeneratorMaker = idGenerator;
  var idHandlerMaker = idHandler;
  var reporterMaker = reporter;
  var browserDetector = browserDetectorExports;
  var batchProcessorMaker = batchProcessor;
  var stateHandler = stateHandler$1;
  var objectStrategyMaker = object;
  var scrollStrategyMaker = scroll;
  function isCollection(obj) {
    return Array.isArray(obj) || obj.length !== void 0;
  }
  function toArray(collection) {
    if (!Array.isArray(collection)) {
      var array2 = [];
      forEach(collection, function(obj) {
        array2.push(obj);
      });
      return array2;
    } else {
      return collection;
    }
  }
  function isElement(obj) {
    return obj && obj.nodeType === 1;
  }
  var elementResizeDetector = function(options) {
    options = options || {};
    var idHandler2;
    if (options.idHandler) {
      idHandler2 = {
        get: function(element2) {
          return options.idHandler.get(element2, true);
        },
        set: options.idHandler.set
      };
    } else {
      var idGenerator2 = idGeneratorMaker();
      var defaultIdHandler = idHandlerMaker({
        idGenerator: idGenerator2,
        stateHandler
      });
      idHandler2 = defaultIdHandler;
    }
    var reporter2 = options.reporter;
    if (!reporter2) {
      var quiet = reporter2 === false;
      reporter2 = reporterMaker(quiet);
    }
    var batchProcessor2 = getOption(options, "batchProcessor", batchProcessorMaker({ reporter: reporter2 }));
    var globalOptions = {};
    globalOptions.callOnAdd = !!getOption(options, "callOnAdd", true);
    globalOptions.debug = !!getOption(options, "debug", false);
    var eventListenerHandler = listenerHandlerMaker(idHandler2);
    var elementUtils2 = elementUtilsMaker({
      stateHandler
    });
    var detectionStrategy;
    var desiredStrategy = getOption(options, "strategy", "object");
    var importantCssRules = getOption(options, "important", false);
    var strategyOptions = {
      reporter: reporter2,
      batchProcessor: batchProcessor2,
      stateHandler,
      idHandler: idHandler2,
      important: importantCssRules
    };
    if (desiredStrategy === "scroll") {
      if (browserDetector.isLegacyOpera()) {
        reporter2.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy.");
        desiredStrategy = "object";
      } else if (browserDetector.isIE(9)) {
        reporter2.warn("Scroll strategy is not supported on IE9. Changing to object strategy.");
        desiredStrategy = "object";
      }
    }
    if (desiredStrategy === "scroll") {
      detectionStrategy = scrollStrategyMaker(strategyOptions);
    } else if (desiredStrategy === "object") {
      detectionStrategy = objectStrategyMaker(strategyOptions);
    } else {
      throw new Error("Invalid strategy name: " + desiredStrategy);
    }
    var onReadyCallbacks = {};
    function listenTo(options2, elements2, listener) {
      function onResizeCallback(element2) {
        var listeners = eventListenerHandler.get(element2);
        forEach(listeners, function callListenerProxy(listener2) {
          listener2(element2);
        });
      }
      function addListener(callOnAdd2, element2, listener2) {
        eventListenerHandler.add(element2, listener2);
        if (callOnAdd2) {
          listener2(element2);
        }
      }
      if (!listener) {
        listener = elements2;
        elements2 = options2;
        options2 = {};
      }
      if (!elements2) {
        throw new Error("At least one element required.");
      }
      if (!listener) {
        throw new Error("Listener required.");
      }
      if (isElement(elements2)) {
        elements2 = [elements2];
      } else if (isCollection(elements2)) {
        elements2 = toArray(elements2);
      } else {
        return reporter2.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
      }
      var elementsReady = 0;
      var callOnAdd = getOption(options2, "callOnAdd", globalOptions.callOnAdd);
      var onReadyCallback = getOption(options2, "onReady", function noop2() {
      });
      var debug = getOption(options2, "debug", globalOptions.debug);
      forEach(elements2, function attachListenerToElement(element2) {
        if (!stateHandler.getState(element2)) {
          stateHandler.initState(element2);
          idHandler2.set(element2);
        }
        var id2 = idHandler2.get(element2);
        debug && reporter2.log("Attaching listener to element", id2, element2);
        if (!elementUtils2.isDetectable(element2)) {
          debug && reporter2.log(id2, "Not detectable.");
          if (elementUtils2.isBusy(element2)) {
            debug && reporter2.log(id2, "System busy making it detectable");
            addListener(callOnAdd, element2, listener);
            onReadyCallbacks[id2] = onReadyCallbacks[id2] || [];
            onReadyCallbacks[id2].push(function onReady() {
              elementsReady++;
              if (elementsReady === elements2.length) {
                onReadyCallback();
              }
            });
            return;
          }
          debug && reporter2.log(id2, "Making detectable...");
          elementUtils2.markBusy(element2, true);
          return detectionStrategy.makeDetectable({ debug, important: importantCssRules }, element2, function onElementDetectable(element3) {
            debug && reporter2.log(id2, "onElementDetectable");
            if (stateHandler.getState(element3)) {
              elementUtils2.markAsDetectable(element3);
              elementUtils2.markBusy(element3, false);
              detectionStrategy.addListener(element3, onResizeCallback);
              addListener(callOnAdd, element3, listener);
              var state = stateHandler.getState(element3);
              if (state && state.startSize) {
                var width = element3.offsetWidth;
                var height = element3.offsetHeight;
                if (state.startSize.width !== width || state.startSize.height !== height) {
                  onResizeCallback(element3);
                }
              }
              if (onReadyCallbacks[id2]) {
                forEach(onReadyCallbacks[id2], function(callback) {
                  callback();
                });
              }
            } else {
              debug && reporter2.log(id2, "Element uninstalled before being detectable.");
            }
            delete onReadyCallbacks[id2];
            elementsReady++;
            if (elementsReady === elements2.length) {
              onReadyCallback();
            }
          });
        }
        debug && reporter2.log(id2, "Already detecable, adding listener.");
        addListener(callOnAdd, element2, listener);
        elementsReady++;
      });
      if (elementsReady === elements2.length) {
        onReadyCallback();
      }
    }
    function uninstall(elements2) {
      if (!elements2) {
        return reporter2.error("At least one element is required.");
      }
      if (isElement(elements2)) {
        elements2 = [elements2];
      } else if (isCollection(elements2)) {
        elements2 = toArray(elements2);
      } else {
        return reporter2.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
      }
      forEach(elements2, function(element2) {
        eventListenerHandler.removeAllListeners(element2);
        detectionStrategy.uninstall(element2);
        stateHandler.cleanState(element2);
      });
    }
    function initDocument(targetDocument) {
      detectionStrategy.initDocument && detectionStrategy.initDocument(targetDocument);
    }
    return {
      listenTo,
      removeListener: eventListenerHandler.removeListener,
      removeAllListeners: eventListenerHandler.removeAllListeners,
      uninstall,
      initDocument
    };
  };
  function getOption(options, name, defaultValue) {
    var value = options[name];
    if ((value === void 0 || value === null) && defaultValue !== void 0) {
      return defaultValue;
    }
    return value;
  }
  const elementResizeDetectorMaker = /* @__PURE__ */ getDefaultExportFromCjs(elementResizeDetector);
  function mitt(n) {
    return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
      var i = n.get(t);
      i ? i.push(e) : n.set(t, [e]);
    }, off: function(t, e) {
      var i = n.get(t);
      i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
    }, emit: function(t, e) {
      var i = n.get(t);
      i && i.slice().map(function(n2) {
        n2(e);
      }), (i = n.get("*")) && i.slice().map(function(n2) {
        n2(t, e);
      });
    } };
  }
  function hasWindow() {
    return typeof window !== "undefined";
  }
  const cb = () => {
  };
  function addWindowEventListener(event, callback = cb) {
    if (!hasWindow) {
      callback();
      return;
    }
    window.addEventListener(event, callback);
  }
  function removeWindowEventListener(event, callback = cb) {
    if (!hasWindow) {
      return;
    }
    window.removeEventListener(event, callback);
  }
  const _sfc_main = {
    __name: "grid-layout",
    props: {
      layout: {
        type: Array,
        required: true
      },
      responsiveLayouts: {
        type: Object,
        default() {
          return {};
        }
      },
      colNum: {
        type: Number,
        default: 12
      },
      rowHeight: {
        type: Number,
        default: 150
      },
      maxRows: {
        type: Number,
        default: Infinity
      },
      margin: {
        type: Array,
        default() {
          return [10, 10];
        }
      },
      isDraggable: {
        type: Boolean,
        default: true
      },
      isResizable: {
        type: Boolean,
        default: true
      },
      isMirrored: {
        type: Boolean,
        default: false
      },
      isBounded: {
        type: Boolean,
        default: false
      },
      // If true, the container height swells and contracts to fit contents
      autoSize: {
        type: Boolean,
        default: true
      },
      verticalCompact: {
        type: Boolean,
        default: true
      },
      restoreOnDrag: {
        type: Boolean,
        default: false
      },
      preventCollision: {
        type: Boolean,
        default: false
      },
      useCssTransforms: {
        type: Boolean,
        default: true
      },
      responsive: {
        type: Boolean,
        default: false
      },
      breakpoints: {
        type: Object,
        default() {
          return { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
        }
      },
      cols: {
        type: Object,
        default() {
          return { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };
        }
      },
      useStyleCursor: {
        type: Boolean,
        default: true
      },
      transformScale: {
        type: Number,
        default: 1
      }
    },
    emits: [
      "update:layout",
      "layout-ready",
      "layout-created",
      "layout-before-mount",
      "layout-mounted",
      "layout-updated",
      "breakpoint-changed"
    ],
    setup(__props, { expose: __expose, emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const emitter = mitt();
      const exposeObj = {
        el: void 0,
        placeholderEl: void 0,
        placeholder: {},
        emitter
      };
      __expose(exposeObj);
      const erd = elementResizeDetectorMaker({
        strategy: "scroll",
        // <- For ultra performance.
        // See https://github.com/wnr/element-resize-detector/issues/110 about callOnAdd.
        callOnAdd: false
      });
      const state = vue.reactive({
        width: null,
        mergedStyle: {},
        isDragging: false,
        placeholder: {
          x: 0,
          y: 0,
          w: 0,
          h: 0,
          i: -1
        },
        layout: [],
        layouts: {},
        // array to store all layouts from different breakpoints
        lastBreakpoint: null,
        // store last active breakpoint
        originalLayout: null
        // store original Layout
      });
      vue.provide("emitter", emitter);
      vue.provide("gridLayout", { props, state });
      function created() {
        emitter.on("resizeEvent", onResizeEvent);
        emitter.on("dragEvent", onDragEvent);
        emit("layout-created", props.layout);
        addWindowEventListener("resize", onWindowResize);
      }
      created();
      vue.onBeforeMount(() => {
        emit("layout-before-mount", state.layout);
      });
      vue.onMounted(() => {
        emit("layout-mounted", state.layout);
      });
      vue.onBeforeUnmount(() => {
        emitter.off("resizeEvent", onResizeEvent);
        emitter.off("dragEvent", onDragEvent);
        removeWindowEventListener("resize", onWindowResize);
        if (erd && exposeObj.el) {
          erd.uninstall(exposeObj.el);
        }
      });
      vue.watch(() => state.width, async (newval, oldval) => {
        emitter.emit("updateWidth", state.width);
        updateHeight();
        if (oldval === null) {
          await vue.nextTick();
          emit("layout-ready", state.layout);
        }
      });
      vue.watch(() => props.layout, () => {
        validateLayout(props.layout);
        state.originalLayout = props.layout;
        layoutUpdate();
      }, { deep: true, immediate: true });
      vue.watch(() => props.colNum, () => {
        state.colNum = props.colNum;
        emitter.emit("setColNum", props.colNum);
      }, { immediate: true });
      vue.watch(() => props.rowHeight, () => {
        emitter.emit("setRowHeight", props.rowHeight);
      });
      vue.watch(() => props.isDraggable, () => {
        emitter.emit("setDraggable", props.isDraggable);
      });
      vue.watch(() => props.isResizable, () => {
        emitter.emit("setResizable", props.isResizable);
      });
      vue.watch(() => props.isBounded, () => {
        emitter.emit("setBounded", props.isBounded);
      });
      vue.watch(() => props.transformScale, () => {
        emitter.emit("setTransformScale", props.transformScale);
      });
      vue.watch(() => props.responsive, () => {
        if (!props.responsive) {
          state.layout = cloneLayout(state.originalLayout);
          emitter.emit("setColNum", props.colNum);
        }
        onWindowResize();
      });
      vue.watch(() => props.maxRows, () => {
        emitter.emit("setMaxRows", props.maxRows);
      });
      vue.watch(() => props.margin, () => {
        updateHeight();
      }, { deep: true });
      function layoutIsDiff(newLayout, oldLayout) {
        if ((newLayout == null ? void 0 : newLayout.length) !== (oldLayout == null ? void 0 : oldLayout.length)) {
          return true;
        }
        let diff = false;
        let idx = 0;
        while (idx < newLayout.length) {
          const nItem = newLayout[idx];
          const nKeys = Object.keys(nItem);
          const oItem = oldLayout[idx];
          const oKeys = Object.keys(oItem);
          const keys = [.../* @__PURE__ */ new Set([...nKeys, ...oKeys])];
          let j = 0;
          while (j < keys.length) {
            const k = keys[j];
            if (nItem[k] !== oItem[k]) {
              diff = true;
              break;
            }
            j += 1;
          }
          if (diff) {
            break;
          }
          idx += 1;
        }
        return diff;
      }
      function layoutUpdate() {
        const diff = layoutIsDiff(props.layout, state.layout);
        if (diff) {
          initResponsiveFeatures();
          state.layout = cloneLayout(props.layout);
          compact(state.layout, props.verticalCompact);
          emitter.emit("updateWidth", state.width);
          updateHeight();
          if (layoutIsDiff(props.layout, state.layout)) {
            const layout = cloneLayout(state.layout);
            emit("layout-updated", layout);
            emit("update:layout", layout);
          }
        }
      }
      function updateHeight() {
        state.mergedStyle = {
          height: containerHeight()
        };
      }
      function onWindowResize() {
        if (exposeObj.el) {
          state.width = exposeObj.el.offsetWidth;
        }
        emitter.emit("resizeEvent");
      }
      function containerHeight() {
        var _a;
        if (!props.autoSize) return;
        const m2 = ((_a = props.margin) == null ? void 0 : _a[1]) || 0;
        return `${bottom(state.layout) * (props.rowHeight + m2) + m2}px`;
      }
      function onDragEvent([eventName, id2, x, y, h, w] = []) {
        let l = getLayoutItem(state.layout, id2);
        if (l === void 0 || l === null) {
          l = { x: 0, y: 0 };
        }
        if (eventName === "dragstart" && !props.verticalCompact) {
          state.positionsBeforeDrag = state.layout.reduce((result, { i, x: x2, y: y2 }) => ({
            ...result,
            [i]: { x: x2, y: y2 }
          }), {});
        }
        if (eventName === "dragmove" || eventName === "dragstart") {
          state.placeholder.x = l.x;
          state.placeholder.y = l.y;
          state.placeholder.w = w;
          state.placeholder.h = h;
          state.isDragging = true;
        } else {
          state.isDragging = false;
        }
        state.layout = moveElement(state.layout, l, x, y, true, props.preventCollision);
        if (props.restoreOnDrag) {
          l.static = true;
          compact(state.layout, props.verticalCompact, state.positionsBeforeDrag);
          l.static = false;
        } else {
          compact(state.layout, props.verticalCompact);
        }
        updateHeight();
        if (eventName === "dragend") {
          delete state.positionsBeforeDrag;
        }
        if (layoutIsDiff(props.layout, state.layout)) {
          const layout = cloneLayout(state.layout);
          emit("layout-updated", layout);
          emit("update:layout", layout);
        }
      }
      function onResizeEvent([eventName, id2, x, y, h, w] = []) {
        let l = getLayoutItem(state.layout, id2);
        if (l === void 0 || l === null) {
          l = { h: 0, w: 0 };
        }
        let hasCollisions;
        if (props.preventCollision) {
          const collisions = getAllCollisions(state.layout, { ...l, w, h }).filter(
            (layoutItem) => layoutItem.i !== l.i
          );
          hasCollisions = collisions.length > 0;
          if (hasCollisions) {
            let leastX = Infinity;
            let leastY = Infinity;
            collisions.forEach((layoutItem) => {
              if (layoutItem.x > l.x) leastX = Math.min(leastX, layoutItem.x);
              if (layoutItem.y > l.y) leastY = Math.min(leastY, layoutItem.y);
            });
            if (Number.isFinite(leastX)) l.w = leastX - l.x;
            if (Number.isFinite(leastY)) l.h = leastY - l.y;
          }
        }
        if (!hasCollisions) {
          l.w = w;
          l.h = h;
        }
        if (eventName === "resizestart" || eventName === "resizemove") {
          state.placeholder.x = x;
          state.placeholder.y = y;
          state.placeholder.w = l.w;
          state.placeholder.h = l.h;
          state.isDragging = true;
        } else {
          state.isDragging = false;
        }
        if (props.responsive) {
          responsiveGridLayout();
        }
        compact(state.layout, props.verticalCompact);
        updateHeight();
        if (layoutIsDiff(props.layout, state.layout)) {
          const layout = cloneLayout(state.layout);
          emit("layout-updated", layout);
          emit("update:layout", layout);
        }
      }
      function responsiveGridLayout() {
        const newBreakpoint = getBreakpointFromWidth(props.breakpoints, state.width);
        const newCols = getColsFromBreakpoint(newBreakpoint, props.cols);
        if (newCols !== state.colNum) {
          state.colNum = newCols;
          state.layout = findOrGenerateResponsiveLayout(
            state.layout,
            state.layouts,
            props.breakpoints,
            newBreakpoint,
            newCols,
            props.verticalCompact
          );
          state.layouts[newBreakpoint] = state.layout;
          emitter.emit("setColNum", newCols);
        }
        if (state.lastBreakpoint !== newBreakpoint) {
          state.lastBreakpoint = newBreakpoint;
          emit("breakpoint-changed", newBreakpoint, state.layout);
        }
      }
      function initResponsiveFeatures() {
        state.layouts = { ...props.responsiveLayouts };
      }
      function setRef(e) {
        if (!e || e === exposeObj.el) {
          return;
        }
        exposeObj.el = e;
        if (erd) {
          erd.listenTo(exposeObj.el, () => {
            onWindowResize();
          });
        }
        state.width = exposeObj.el.offsetWidth;
      }
      function setPlaceholderRef(e) {
        if (e) {
          exposeObj.placeholder = e;
          exposeObj.placeholderEl = e.el;
        }
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          ref: setRef,
          class: "vue-grid-layout",
          style: vue.normalizeStyle(state.mergedStyle)
        }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
          vue.withDirectives(vue.createVNode(GridItem, {
            ref: setPlaceholderRef,
            class: "vue-grid-placeholder",
            x: state.placeholder.x,
            y: state.placeholder.y,
            w: state.placeholder.w,
            h: state.placeholder.h,
            i: "placeholder"
          }, null, 8, ["x", "y", "w", "h"]), [
            [vue.vShow, state.isDragging]
          ])
        ], 4);
      };
    }
  };
  const GridLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a10aee95"]]);
  const VueGridLayout = {
    // ResponsiveGridLayout,
    GridLayout,
    GridItem
  };
  function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Object.keys(VueGridLayout).forEach((name) => {
      Vue.component(name, VueGridLayout[name]);
    });
  }
  const plugin = {
    install
  };
  let GlobalVue = null;
  if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
  } else if (typeof global !== "undefined") {
    GlobalVue = global.Vue;
  }
  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
  exports2.GridItem = GridItem;
  exports2.GridLayout = GridLayout;
  exports2.default = VueGridLayout;
  exports2.install = install;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
