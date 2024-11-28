/**
 * vue-grid-layout-v3 3.1.1-rc.2
 * coffeebi <merfais.bwq@163.com>
 * https://github.com/merfais/vue-grid-layout-v3
 */
import { inject as We, reactive as pn, computed as kt, unref as J, onBeforeUnmount as gn, onMounted as mn, watch as W, openBlock as ve, createElementBlock as ye, normalizeClass as ue, normalizeStyle as vn, renderSlot as yn, createCommentVNode as hi, provide as Be, onBeforeMount as pi, nextTick as gi, withDirectives as mi, createVNode as vi, vShow as yi } from "vue";
import './index.css';const q = {
  init: bi,
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
function Pt() {
}
function bi(e) {
  const t = e;
  q.document = t.document, q.DocumentFragment = t.DocumentFragment || Pt, q.SVGElement = t.SVGElement || Pt, q.SVGSVGElement = t.SVGSVGElement || Pt, q.SVGElementInstance = t.SVGElementInstance || Pt, q.Element = t.Element || Pt, q.HTMLElement = t.HTMLElement || q.Element, q.Event = t.Event, q.Touch = t.Touch || Pt, q.PointerEvent = t.PointerEvent || t.MSPointerEvent;
}
var bn = (e) => !!(e && e.Window) && e instanceof e.Window;
let xn, pt;
function wn(e) {
  xn = e;
  const t = e.document.createTextNode("");
  t.ownerDocument !== e.document && typeof e.wrap == "function" && e.wrap(t) === t && (e = e.wrap(e)), pt = e;
}
typeof window < "u" && window && wn(window);
function It(e) {
  return bn(e) ? e : (e.ownerDocument || e).defaultView || pt.window;
}
const xi = (e) => e === pt || bn(e), wi = (e) => ie(e) && e.nodeType === 11, ie = (e) => !!e && typeof e == "object", Sn = (e) => typeof e == "function", Si = (e) => typeof e == "number", Ei = (e) => typeof e == "boolean", zi = (e) => typeof e == "string", Ii = (e) => {
  if (!e || typeof e != "object")
    return !1;
  const t = It(e) || pt;
  return /object|function/.test(typeof Element) ? e instanceof Element || e instanceof t.Element : e.nodeType === 1 && typeof e.nodeName == "string";
}, Ti = (e) => ie(e) && !!e.constructor && /function Object\b/.test(e.constructor.toString()), Di = (e) => ie(e) && typeof e.length < "u" && Sn(e.splice);
var p = {
  window: xi,
  docFrag: wi,
  object: ie,
  func: Sn,
  number: Si,
  bool: Ei,
  string: zi,
  element: Ii,
  plainObject: Ti,
  array: Di
};
const G = {
  init: Mi,
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
function Mi(e) {
  const t = q.Element, n = e.navigator || {};
  G.supportsTouch = "ontouchstart" in e || p.func(e.DocumentTouch) && q.document instanceof e.DocumentTouch, G.supportsPointerEvent = n.pointerEnabled !== !1 && !!q.PointerEvent, G.isIOS = /iP(hone|od|ad)/.test(n.platform), G.isIOS7 = /iP(hone|od|ad)/.test(n.platform) && /OS 7[^\d]/.test(n.appVersion), G.isIe9 = /MSIE 9/.test(n.userAgent), G.isOperaMobile = n.appName === "Opera" && G.supportsTouch && /Presto/.test(n.userAgent), G.prefixedMatchesSelector = "matches" in t.prototype ? "matches" : "webkitMatchesSelector" in t.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in t.prototype ? "mozMatchesSelector" : "oMatchesSelector" in t.prototype ? "oMatchesSelector" : "msMatchesSelector", G.pEventTypes = G.supportsPointerEvent ? q.PointerEvent === e.MSPointerEvent ? {
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
  } : null, G.wheelEvent = q.document && "onmousewheel" in q.document ? "mousewheel" : "wheel";
}
const En = (e, t) => {
  for (const n of t)
    e.push(n);
  return e;
}, zn = (e) => En([], e), re = (e, t) => {
  for (let n = 0; n < e.length; n++)
    if (t(e[n], n, e))
      return n;
  return -1;
}, Jt = (e, t) => e[re(e, t)];
function Rt(e) {
  const t = {};
  for (const n in e) {
    const i = e[n];
    p.plainObject(i) ? t[n] = Rt(i) : p.array(i) ? t[n] = zn(i) : t[n] = i;
  }
  return t;
}
function I(e, t) {
  for (const i in t)
    e[i] = t[i];
  return e;
}
let Ne = 0, ct, wt;
function Ci(e) {
  if (ct = e.requestAnimationFrame, wt = e.cancelAnimationFrame, !ct) {
    const t = ["ms", "moz", "webkit", "o"];
    for (const n of t)
      ct = e[`${n}RequestAnimationFrame`], wt = e[`${n}CancelAnimationFrame`] || e[`${n}CancelRequestAnimationFrame`];
  }
  ct = ct && ct.bind(e), wt = wt && wt.bind(e), ct || (ct = (t) => {
    const n = Date.now(), i = Math.max(0, 16 - (n - Ne)), o = e.setTimeout(() => {
      t(n + i);
    }, i);
    return Ne = n + i, o;
  }, wt = (t) => clearTimeout(t));
}
var Ot = {
  request: (e) => ct(e),
  cancel: (e) => wt(e),
  init: Ci
};
function Et(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : (o) => !0, i = arguments.length > 3 ? arguments[3] : void 0;
  if (i = i || {}, p.string(e) && e.search(" ") !== -1 && (e = Fe(e)), p.array(e))
    return e.forEach((o) => Et(o, t, n, i)), i;
  if (p.object(e) && (t = e, e = ""), p.func(t) && n(e))
    i[e] = i[e] || [], i[e].push(t);
  else if (p.array(t))
    for (const o of t)
      Et(e, o, n, i);
  else if (p.object(t))
    for (const o in t) {
      const s = Fe(o).map((a) => `${e}${a}`);
      Et(s, t[o], n, i);
    }
  return i;
}
function Fe(e) {
  return e.trim().split(/ +/);
}
function je(e, t) {
  for (const n of t) {
    if (e.immediatePropagationStopped)
      break;
    n(e);
  }
}
class In {
  constructor(t) {
    this.options = void 0, this.types = {}, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.global = void 0, this.options = I({}, t || {});
  }
  fire(t) {
    let n;
    const i = this.global;
    (n = this.types[t.type]) && je(t, n), !t.propagationStopped && i && (n = i[t.type]) && je(t, n);
  }
  on(t, n) {
    const i = Et(t, n);
    for (t in i)
      this.types[t] = En(this.types[t] || [], i[t]);
  }
  off(t, n) {
    const i = Et(t, n);
    for (t in i) {
      const o = this.types[t];
      if (!(!o || !o.length))
        for (const s of i[t]) {
          const a = o.indexOf(s);
          a !== -1 && o.splice(a, 1);
        }
    }
  }
  getRect(t) {
    return null;
  }
}
function zt(e, t) {
  if (e.contains)
    return e.contains(t);
  for (; t; ) {
    if (t === e)
      return !0;
    t = t.parentNode;
  }
  return !1;
}
function Tn(e, t) {
  for (; p.element(e); ) {
    if (Tt(e, t))
      return e;
    e = gt(e);
  }
  return null;
}
function gt(e) {
  let t = e.parentNode;
  if (p.docFrag(t)) {
    for (; (t = t.host) && p.docFrag(t); )
      ;
    return t;
  }
  return t;
}
function Tt(e, t) {
  return pt !== xn && (t = t.replace(/\/deep\//g, " ")), e[G.prefixedMatchesSelector](t);
}
function be(e, t, n) {
  for (; p.element(e); ) {
    if (Tt(e, t))
      return !0;
    if (e = gt(e), e === n)
      return Tt(e, t);
  }
  return !1;
}
function Xe(e) {
  return e.correspondingUseElement || e;
}
function _i(e) {
  return e = e || pt, {
    x: e.scrollX || e.document.documentElement.scrollLeft,
    y: e.scrollY || e.document.documentElement.scrollTop
  };
}
function Te(e) {
  const t = e instanceof q.SVGElement ? e.getBoundingClientRect() : e.getClientRects()[0];
  return t && {
    left: t.left,
    right: t.right,
    top: t.top,
    bottom: t.bottom,
    width: t.width || t.right - t.left,
    height: t.height || t.bottom - t.top
  };
}
function De(e) {
  const t = Te(e);
  if (!G.isIOS7 && t) {
    const n = _i(It(e));
    t.left += n.x, t.right += n.x, t.top += n.y, t.bottom += n.y;
  }
  return t;
}
function Ye(e) {
  return p.string(e) ? (q.document.querySelector(e), !0) : !1;
}
const Pi = ["webkit", "moz"];
function Dn(e, t) {
  e.__set || (e.__set = {});
  for (const n in t)
    Pi.some((i) => n.indexOf(i) === 0) || typeof e[n] != "function" && n !== "__set" && Object.defineProperty(e, n, {
      get() {
        return n in e.__set ? e.__set[n] : e.__set[n] = t[n];
      },
      set(i) {
        e.__set[n] = i;
      },
      configurable: !0
    });
  return e;
}
var oe = (e, t) => Math.sqrt(e * e + t * t);
function fe(e, t) {
  e.page = e.page || {}, e.page.x = t.page.x, e.page.y = t.page.y, e.client = e.client || {}, e.client.x = t.client.x, e.client.y = t.client.y, e.timeStamp = t.timeStamp;
}
function Oi(e, t, n) {
  e.page.x = n.page.x - t.page.x, e.page.y = n.page.y - t.page.y, e.client.x = n.client.x - t.client.x, e.client.y = n.client.y - t.client.y, e.timeStamp = n.timeStamp - t.timeStamp;
}
function Ri(e, t) {
  const n = Math.max(t.timeStamp / 1e3, 1e-3);
  e.page.x = t.page.x / n, e.page.y = t.page.y / n, e.client.x = t.client.x / n, e.client.y = t.client.y / n, e.timeStamp = n;
}
function ki(e) {
  e.page.x = 0, e.page.y = 0, e.client.x = 0, e.client.y = 0;
}
function Mn(e) {
  return e instanceof q.Event || e instanceof q.Touch;
}
function Qt(e, t, n) {
  return n = n || {}, e = e || "page", n.x = t[e + "X"], n.y = t[e + "Y"], n;
}
function Ai(e, t) {
  return t = t || {
    x: 0,
    y: 0
  }, G.isOperaMobile && Mn(e) ? (Qt("screen", e, t), t.x += window.scrollX, t.y += window.scrollY) : Qt("page", e, t), t;
}
function $i(e, t) {
  return t = t || {}, G.isOperaMobile && Mn(e) ? Qt("screen", e, t) : Qt("client", e, t), t;
}
function te(e) {
  return p.number(e.pointerId) ? e.pointerId : e.identifier;
}
function Hi(e, t, n) {
  const i = t.length > 1 ? Cn(t) : t[0];
  Ai(i, e.page), $i(i, e.client), e.timeStamp = n;
}
function Me(e) {
  const t = [];
  return p.array(e) ? (t[0] = e[0], t[1] = e[1]) : e.type === "touchend" ? e.touches.length === 1 ? (t[0] = e.touches[0], t[1] = e.changedTouches[0]) : e.touches.length === 0 && (t[0] = e.changedTouches[0], t[1] = e.changedTouches[1]) : (t[0] = e.touches[0], t[1] = e.touches[1]), t;
}
function Cn(e) {
  const t = {
    pageX: 0,
    pageY: 0,
    clientX: 0,
    clientY: 0,
    screenX: 0,
    screenY: 0
  };
  for (const n of e)
    for (const i in t)
      t[i] += n[i];
  for (const n in t)
    t[n] /= e.length;
  return t;
}
function Li(e) {
  if (!e.length)
    return null;
  const t = Me(e), n = Math.min(t[0].pageX, t[1].pageX), i = Math.min(t[0].pageY, t[1].pageY), o = Math.max(t[0].pageX, t[1].pageX), s = Math.max(t[0].pageY, t[1].pageY);
  return {
    x: n,
    y: i,
    left: n,
    top: i,
    right: o,
    bottom: s,
    width: o - n,
    height: s - i
  };
}
function Wi(e, t) {
  const n = t + "X", i = t + "Y", o = Me(e), s = o[0][n] - o[1][n], a = o[0][i] - o[1][i];
  return oe(s, a);
}
function Bi(e, t) {
  const n = t + "X", i = t + "Y", o = Me(e), s = o[1][n] - o[0][n], a = o[1][i] - o[0][i];
  return 180 * Math.atan2(a, s) / Math.PI;
}
function Ni(e) {
  return p.string(e.pointerType) ? e.pointerType : p.number(e.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][e.pointerType] : (
    // if the PointerEvent API isn't available, then the "pointer" must
    // be either a MouseEvent, TouchEvent, or Touch object
    /touch/.test(e.type || "") || e instanceof q.Touch ? "touch" : "mouse"
  );
}
function _n(e) {
  const t = p.func(e.composedPath) ? e.composedPath() : e.path;
  return [Xe(t ? t[0] : e.target), Xe(e.currentTarget)];
}
function At() {
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
function Fi(e) {
  var t;
  const n = [], i = {}, o = [], s = {
    add: a,
    remove: l,
    addDelegate: c,
    removeDelegate: r,
    delegateListener: f,
    delegateUseCapture: d,
    delegatedEvents: i,
    documents: o,
    targets: n,
    supportsOptions: !1,
    supportsPassive: !1
  };
  (t = e.document) == null || t.createElement("div").addEventListener("test", null, {
    get capture() {
      return s.supportsOptions = !0;
    },
    get passive() {
      return s.supportsPassive = !0;
    }
  }), e.events = s;
  function a(m, g, b, C) {
    if (!m.addEventListener) return;
    const k = $t(C);
    let A = Jt(n, (S) => S.eventTarget === m);
    A || (A = {
      eventTarget: m,
      events: {}
    }, n.push(A)), A.events[g] || (A.events[g] = []), Jt(A.events[g], (S) => S.func === b && Vt(S.options, k)) || (m.addEventListener(g, b, s.supportsOptions ? k : k.capture), A.events[g].push({
      func: b,
      options: k
    }));
  }
  function l(m, g, b, C) {
    if (!m.addEventListener || !m.removeEventListener) return;
    const k = re(n, (v) => v.eventTarget === m), A = n[k];
    if (!A || !A.events)
      return;
    if (g === "all") {
      for (g in A.events)
        A.events.hasOwnProperty(g) && l(m, g, "all");
      return;
    }
    let S = !1;
    const _ = A.events[g];
    if (_)
      if (b === "all") {
        for (let v = _.length - 1; v >= 0; v--) {
          const u = _[v];
          l(m, g, u.func, u.options);
        }
        return;
      } else {
        const v = $t(C);
        for (let u = 0; u < _.length; u++) {
          const w = _[u];
          if (w.func === b && Vt(w.options, v)) {
            m.removeEventListener(g, b, s.supportsOptions ? v : v.capture), _.splice(u, 1), _.length === 0 && (delete A.events[g], S = !0);
            break;
          }
        }
      }
    S && !Object.keys(A.events).length && n.splice(k, 1);
  }
  function c(m, g, b, C, k) {
    const A = $t(k);
    if (!i[b]) {
      i[b] = [];
      for (const v of o)
        a(v, b, f), a(v, b, d, !0);
    }
    const S = i[b];
    let _ = Jt(S, (v) => v.selector === m && v.context === g);
    _ || (_ = {
      selector: m,
      context: g,
      listeners: []
    }, S.push(_)), _.listeners.push({
      func: C,
      options: A
    });
  }
  function r(m, g, b, C, k) {
    const A = $t(k), S = i[b];
    let _ = !1, v;
    if (S)
      for (v = S.length - 1; v >= 0; v--) {
        const u = S[v];
        if (u.selector === m && u.context === g) {
          const {
            listeners: w
          } = u;
          for (let y = w.length - 1; y >= 0; y--) {
            const T = w[y];
            if (T.func === C && Vt(T.options, A)) {
              w.splice(y, 1), w.length || (S.splice(v, 1), l(g, b, f), l(g, b, d, !0)), _ = !0;
              break;
            }
          }
          if (_)
            break;
        }
      }
  }
  function f(m, g) {
    const b = $t(g), C = new ji(m), k = i[m.type], [A] = _n(m);
    let S = A;
    for (; p.element(S); ) {
      for (let _ = 0; _ < k.length; _++) {
        const v = k[_], {
          selector: u,
          context: w
        } = v;
        if (Tt(S, u) && zt(w, A) && zt(w, S)) {
          const {
            listeners: y
          } = v;
          C.currentTarget = S;
          for (const T of y)
            Vt(T.options, b) && T.func(C);
        }
      }
      S = gt(S);
    }
  }
  function d(m) {
    return f.call(this, m, !0);
  }
  return s;
}
class ji {
  constructor(t) {
    this.currentTarget = void 0, this.originalEvent = void 0, this.type = void 0, this.originalEvent = t, Dn(this, t);
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
function $t(e) {
  return p.object(e) ? {
    capture: !!e.capture,
    passive: !!e.passive
  } : {
    capture: !!e,
    passive: !1
  };
}
function Vt(e, t) {
  return e === t ? !0 : typeof e == "boolean" ? !!t.capture === e && !t.passive : !!e.capture == !!t.capture && !!e.passive == !!t.passive;
}
var Xi = {
  id: "events",
  install: Fi
};
const Yi = function(t) {
  return /^(always|never|auto)$/.test(t) ? (this.options.preventDefault = t, this) : p.bool(t) ? (this.options.preventDefault = t ? "always" : "never", this) : this.options.preventDefault;
};
function qi(e, t, n) {
  const i = e.options.preventDefault;
  if (i !== "never") {
    if (i === "always") {
      n.preventDefault();
      return;
    }
    if (t.events.supportsPassive && /^touch(start|move)$/.test(n.type)) {
      const o = It(n.target).document, s = t.getDocOptions(o);
      if (!(s && s.events) || s.events.passive !== !1)
        return;
    }
    /^(mouse|pointer|touch)*(down|start)/i.test(n.type) || p.element(n.target) && Tt(n.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || n.preventDefault();
  }
}
function Gi(e) {
  let {
    interaction: t,
    event: n
  } = e;
  t.interactable && t.interactable.checkAndPreventDefault(n);
}
function Ui(e) {
  const {
    Interactable: t
  } = e;
  t.prototype.preventDefault = Yi, t.prototype.checkAndPreventDefault = function(n) {
    return qi(this, e, n);
  }, e.interactions.docEvents.push({
    type: "dragstart",
    listener(n) {
      for (const i of e.interactions.list)
        if (i.element && (i.element === n.target || zt(i.element, n.target))) {
          i.interactable.checkAndPreventDefault(n);
          return;
        }
    }
  });
}
var Vi = {
  id: "core/interactablePreventDefault",
  install: Ui,
  listeners: ["down", "move", "up", "cancel"].reduce((e, t) => (e[`interactions:${t}`] = Gi, e), {})
};
function Xt(e, t) {
  let n = !1;
  return function() {
    return n || (pt.console.warn(t), n = !0), e.apply(this, arguments);
  };
}
function Pn(e, t) {
  return e.name = t.name, e.axis = t.axis, e.edges = t.edges, e;
}
function On(e, t, n) {
  return e === "parent" ? gt(n) : e === "self" ? t.getRect(n) : Tn(n, e);
}
function Yt(e, t, n, i) {
  let o = e;
  return p.string(o) ? o = On(o, t, n) : p.func(o) && (o = o(...i)), p.element(o) && (o = De(o)), o;
}
function se(e) {
  return e && {
    x: "x" in e ? e.x : e.left,
    y: "y" in e ? e.y : e.top
  };
}
function Ki(e) {
  return e && !("left" in e && "top" in e) && (e = I({}, e), e.left = e.x || 0, e.top = e.y || 0, e.right = e.right || e.left + e.width, e.bottom = e.bottom || e.top + e.height), e;
}
function qe(e) {
  return e && !("x" in e && "y" in e) && (e = I({}, e), e.x = e.left || 0, e.y = e.top || 0, e.width = e.width || (e.right || 0) - e.x, e.height = e.height || (e.bottom || 0) - e.y), e;
}
function Ce(e, t, n) {
  e.left && (t.left += n.x), e.right && (t.right += n.x), e.top && (t.top += n.y), e.bottom && (t.bottom += n.y), t.width = t.right - t.left, t.height = t.bottom - t.top;
}
function _e(e, t, n) {
  const i = n && e.options[n], s = i && i.origin || e.options.origin, a = Yt(s, e, t, [e && t]);
  return se(a) || {
    x: 0,
    y: 0
  };
}
class Rn {
  constructor(t) {
    this.immediatePropagationStopped = !1, this.propagationStopped = !1, this._interaction = t;
  }
  preventDefault() {
  }
  /**
   * Don't call any other listeners (even on the current target)
   */
  stopPropagation() {
    this.propagationStopped = !0;
  }
  /**
   * Don't call listeners on the remaining targets
   */
  stopImmediatePropagation() {
    this.immediatePropagationStopped = this.propagationStopped = !0;
  }
}
Object.defineProperty(Rn.prototype, "interaction", {
  get() {
    return this._interaction._proxy;
  },
  set() {
  }
});
const kn = {
  base: {
    preventDefault: "auto",
    deltaSource: "page"
  },
  perAction: {
    enabled: !1,
    origin: {
      x: 0,
      y: 0
    }
  },
  actions: {}
};
class Pe extends Rn {
  constructor(t, n, i, o, s, a, l) {
    super(t), this.relatedTarget = null, this.screenX = void 0, this.screenY = void 0, this.button = void 0, this.buttons = void 0, this.ctrlKey = void 0, this.shiftKey = void 0, this.altKey = void 0, this.metaKey = void 0, this.page = void 0, this.client = void 0, this.delta = void 0, this.rect = void 0, this.x0 = void 0, this.y0 = void 0, this.t0 = void 0, this.dt = void 0, this.duration = void 0, this.clientX0 = void 0, this.clientY0 = void 0, this.velocity = void 0, this.speed = void 0, this.swipe = void 0, this.axes = void 0, this.preEnd = void 0, s = s || t.element;
    const c = t.interactable, r = (c && c.options || kn).deltaSource, f = _e(c, s, i), d = o === "start", m = o === "end", g = d ? this : t.prevEvent, b = d ? t.coords.start : m ? {
      page: g.page,
      client: g.client,
      timeStamp: t.coords.cur.timeStamp
    } : t.coords.cur;
    this.page = I({}, b.page), this.client = I({}, b.client), this.rect = I({}, t.rect), this.timeStamp = b.timeStamp, m || (this.page.x -= f.x, this.page.y -= f.y, this.client.x -= f.x, this.client.y -= f.y), this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.button = n.button, this.buttons = n.buttons, this.target = s, this.currentTarget = s, this.preEnd = a, this.type = l || i + (o || ""), this.interactable = c, this.t0 = d ? t.pointers[t.pointers.length - 1].downTime : g.t0, this.x0 = t.coords.start.page.x - f.x, this.y0 = t.coords.start.page.y - f.y, this.clientX0 = t.coords.start.client.x - f.x, this.clientY0 = t.coords.start.client.y - f.y, d || m ? this.delta = {
      x: 0,
      y: 0
    } : this.delta = {
      x: this[r].x - g[r].x,
      y: this[r].y - g[r].y
    }, this.dt = t.coords.delta.timeStamp, this.duration = this.timeStamp - this.t0, this.velocity = I({}, t.coords.velocity[r]), this.speed = oe(this.velocity.x, this.velocity.y), this.swipe = m || o === "inertiastart" ? this.getSwipe() : null;
  }
  getSwipe() {
    const t = this._interaction;
    if (t.prevEvent.speed < 600 || this.timeStamp - t.prevEvent.timeStamp > 150)
      return null;
    let n = 180 * Math.atan2(t.prevEvent.velocityY, t.prevEvent.velocityX) / Math.PI;
    const i = 22.5;
    n < 0 && (n += 360);
    const o = 135 - i <= n && n < 225 + i, s = 225 - i <= n && n < 315 + i, a = !o && (315 - i <= n || n < 45 + i), l = !s && 45 - i <= n && n < 135 + i;
    return {
      up: s,
      down: l,
      left: o,
      right: a,
      angle: n,
      speed: t.prevEvent.speed,
      velocity: {
        x: t.prevEvent.velocityX,
        y: t.prevEvent.velocityY
      }
    };
  }
  preventDefault() {
  }
  /**
   * Don't call listeners on the remaining targets
   */
  stopImmediatePropagation() {
    this.immediatePropagationStopped = this.propagationStopped = !0;
  }
  /**
   * Don't call any other listeners (even on the current target)
   */
  stopPropagation() {
    this.propagationStopped = !0;
  }
}
Object.defineProperties(Pe.prototype, {
  pageX: {
    get() {
      return this.page.x;
    },
    set(e) {
      this.page.x = e;
    }
  },
  pageY: {
    get() {
      return this.page.y;
    },
    set(e) {
      this.page.y = e;
    }
  },
  clientX: {
    get() {
      return this.client.x;
    },
    set(e) {
      this.client.x = e;
    }
  },
  clientY: {
    get() {
      return this.client.y;
    },
    set(e) {
      this.client.y = e;
    }
  },
  dx: {
    get() {
      return this.delta.x;
    },
    set(e) {
      this.delta.x = e;
    }
  },
  dy: {
    get() {
      return this.delta.y;
    },
    set(e) {
      this.delta.y = e;
    }
  },
  velocityX: {
    get() {
      return this.velocity.x;
    },
    set(e) {
      this.velocity.x = e;
    }
  },
  velocityY: {
    get() {
      return this.velocity.y;
    },
    set(e) {
      this.velocity.y = e;
    }
  }
});
class Ji {
  constructor(t, n, i, o, s) {
    this.id = void 0, this.pointer = void 0, this.event = void 0, this.downTime = void 0, this.downTarget = void 0, this.id = t, this.pointer = n, this.event = i, this.downTime = o, this.downTarget = s;
  }
}
let Zi = /* @__PURE__ */ function(e) {
  return e.interactable = "", e.element = "", e.prepared = "", e.pointerIsDown = "", e.pointerWasMoved = "", e._proxy = "", e;
}({}), Qi = /* @__PURE__ */ function(e) {
  return e.start = "", e.move = "", e.end = "", e.stop = "", e.interacting = "", e;
}({}), tr = 0;
class er {
  /** @internal */
  get pointerMoveTolerance() {
    return 1;
  }
  constructor(t) {
    this.interactable = null, this.element = null, this.rect = null, this._rects = void 0, this.edges = null, this._scopeFire = void 0, this.prepared = {
      name: null,
      axis: null,
      edges: null
    }, this.pointerType = void 0, this.pointers = [], this.downEvent = null, this.downPointer = {}, this._latestPointer = {
      pointer: null,
      event: null,
      eventTarget: null
    }, this.prevEvent = null, this.pointerIsDown = !1, this.pointerWasMoved = !1, this._interacting = !1, this._ending = !1, this._stopped = !0, this._proxy = void 0, this.simulation = null, this.doMove = Xt(function(s) {
      this.move(s);
    }, "The interaction.doMove() method has been renamed to interaction.move()"), this.coords = {
      // Starting InteractEvent pointer coordinates
      start: At(),
      // Previous native pointer move event coordinates
      prev: At(),
      // current native pointer move event coordinates
      cur: At(),
      // Change in coordinates and time of the pointer
      delta: At(),
      // pointer velocity
      velocity: At()
    }, this._id = tr++;
    let {
      pointerType: n,
      scopeFire: i
    } = t;
    this._scopeFire = i, this.pointerType = n;
    const o = this;
    this._proxy = {};
    for (const s in Zi)
      Object.defineProperty(this._proxy, s, {
        get() {
          return o[s];
        }
      });
    for (const s in Qi)
      Object.defineProperty(this._proxy, s, {
        value: function() {
          return o[s](...arguments);
        }
      });
    this._scopeFire("interactions:new", {
      interaction: this
    });
  }
  pointerDown(t, n, i) {
    const o = this.updatePointer(t, n, i, !0), s = this.pointers[o];
    this._scopeFire("interactions:down", {
      pointer: t,
      event: n,
      eventTarget: i,
      pointerIndex: o,
      pointerInfo: s,
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
  start(t, n, i) {
    return this.interacting() || !this.pointerIsDown || this.pointers.length < (t.name === "gesture" ? 2 : 1) || !n.options[t.name].enabled ? !1 : (Pn(this.prepared, t), this.interactable = n, this.element = i, this.rect = n.getRect(i), this.edges = this.prepared.edges ? I({}, this.prepared.edges) : {
      left: !0,
      right: !0,
      top: !0,
      bottom: !0
    }, this._stopped = !1, this._interacting = this._doPhase({
      interaction: this,
      event: this.downEvent,
      phase: "start"
    }) && !this._stopped, this._interacting);
  }
  pointerMove(t, n, i) {
    !this.simulation && !(this.modification && this.modification.endResult) && this.updatePointer(t, n, i, !1);
    const o = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
    let s, a;
    this.pointerIsDown && !this.pointerWasMoved && (s = this.coords.cur.client.x - this.coords.start.client.x, a = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = oe(s, a) > this.pointerMoveTolerance);
    const l = this.getPointerIndex(t), c = {
      pointer: t,
      pointerIndex: l,
      pointerInfo: this.pointers[l],
      event: n,
      type: "move",
      eventTarget: i,
      dx: s,
      dy: a,
      duplicate: o,
      interaction: this
    };
    o || Ri(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", c), !o && !this.simulation && (this.interacting() && (c.type = null, this.move(c)), this.pointerWasMoved && fe(this.coords.prev, this.coords.cur));
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
  move(t) {
    (!t || !t.event) && ki(this.coords.delta), t = I({
      pointer: this._latestPointer.pointer,
      event: this._latestPointer.event,
      eventTarget: this._latestPointer.eventTarget,
      interaction: this
    }, t || {}), t.phase = "move", this._doPhase(t);
  }
  /**
   * @internal
   * End interact move events and stop auto-scroll unless simulation is running
   */
  pointerUp(t, n, i, o) {
    let s = this.getPointerIndex(t);
    s === -1 && (s = this.updatePointer(t, n, i, !1));
    const a = /cancel$/i.test(n.type) ? "cancel" : "up";
    this._scopeFire(`interactions:${a}`, {
      pointer: t,
      pointerIndex: s,
      pointerInfo: this.pointers[s],
      event: n,
      eventTarget: i,
      type: a,
      curEventTarget: o,
      interaction: this
    }), this.simulation || this.end(n), this.removePointer(t, n);
  }
  /** @internal */
  documentBlur(t) {
    this.end(t), this._scopeFire("interactions:blur", {
      event: t,
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
  end(t) {
    this._ending = !0, t = t || this._latestPointer.event;
    let n;
    this.interacting() && (n = this._doPhase({
      event: t,
      interaction: this,
      phase: "end"
    })), this._ending = !1, n === !0 && this.stop();
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
    }), this.interactable = this.element = null, this._interacting = !1, this._stopped = !0, this.prepared.name = this.prevEvent = null;
  }
  /** @internal */
  getPointerIndex(t) {
    const n = te(t);
    return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : re(this.pointers, (i) => i.id === n);
  }
  /** @internal */
  getPointerInfo(t) {
    return this.pointers[this.getPointerIndex(t)];
  }
  /** @internal */
  updatePointer(t, n, i, o) {
    const s = te(t);
    let a = this.getPointerIndex(t), l = this.pointers[a];
    return o = o === !1 ? !1 : o || /(down|start)$/i.test(n.type), l ? l.pointer = t : (l = new Ji(s, t, n, null, null), a = this.pointers.length, this.pointers.push(l)), Hi(this.coords.cur, this.pointers.map((c) => c.pointer), this._now()), Oi(this.coords.delta, this.coords.prev, this.coords.cur), o && (this.pointerIsDown = !0, l.downTime = this.coords.cur.timeStamp, l.downTarget = i, Dn(this.downPointer, t), this.interacting() || (fe(this.coords.start, this.coords.cur), fe(this.coords.prev, this.coords.cur), this.downEvent = n, this.pointerWasMoved = !1)), this._updateLatestPointer(t, n, i), this._scopeFire("interactions:update-pointer", {
      pointer: t,
      event: n,
      eventTarget: i,
      down: o,
      pointerInfo: l,
      pointerIndex: a,
      interaction: this
    }), a;
  }
  /** @internal */
  removePointer(t, n) {
    const i = this.getPointerIndex(t);
    if (i === -1) return;
    const o = this.pointers[i];
    this._scopeFire("interactions:remove-pointer", {
      pointer: t,
      event: n,
      eventTarget: null,
      pointerIndex: i,
      pointerInfo: o,
      interaction: this
    }), this.pointers.splice(i, 1), this.pointerIsDown = !1;
  }
  /** @internal */
  _updateLatestPointer(t, n, i) {
    this._latestPointer.pointer = t, this._latestPointer.event = n, this._latestPointer.eventTarget = i;
  }
  destroy() {
    this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
  }
  /** @internal */
  _createPreparedEvent(t, n, i, o) {
    return new Pe(this, t, this.prepared.name, n, this.element, i, o);
  }
  /** @internal */
  _fireEvent(t) {
    var n;
    (n = this.interactable) == null || n.fire(t), (!this.prevEvent || t.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = t);
  }
  /** @internal */
  _doPhase(t) {
    const {
      event: n,
      phase: i,
      preEnd: o,
      type: s
    } = t, {
      rect: a
    } = this;
    if (a && i === "move" && (Ce(this.edges, a, this.coords.delta[this.interactable.options.deltaSource]), a.width = a.right - a.left, a.height = a.bottom - a.top), this._scopeFire(`interactions:before-action-${i}`, t) === !1)
      return !1;
    const c = t.iEvent = this._createPreparedEvent(n, i, o, s);
    return this._scopeFire(`interactions:action-${i}`, t), i === "start" && (this.prevEvent = c), this._fireEvent(c), this._scopeFire(`interactions:after-action-${i}`, t), !0;
  }
  /** @internal */
  _now() {
    return Date.now();
  }
}
const xe = {
  methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"],
  search(e) {
    for (const t of xe.methodOrder) {
      const n = xe[t](e);
      if (n)
        return n;
    }
    return null;
  },
  // try to resume simulation with a new pointer
  simulationResume(e) {
    let {
      pointerType: t,
      eventType: n,
      eventTarget: i,
      scope: o
    } = e;
    if (!/down|start/i.test(n))
      return null;
    for (const s of o.interactions.list) {
      let a = i;
      if (s.simulation && s.simulation.allowResume && s.pointerType === t)
        for (; a; ) {
          if (a === s.element)
            return s;
          a = gt(a);
        }
    }
    return null;
  },
  // if it's a mouse or pen interaction
  mouseOrPen(e) {
    let {
      pointerId: t,
      pointerType: n,
      eventType: i,
      scope: o
    } = e;
    if (n !== "mouse" && n !== "pen")
      return null;
    let s;
    for (const a of o.interactions.list)
      if (a.pointerType === n) {
        if (a.simulation && !Ge(a, t))
          continue;
        if (a.interacting())
          return a;
        s || (s = a);
      }
    if (s)
      return s;
    for (const a of o.interactions.list)
      if (a.pointerType === n && !(/down/i.test(i) && a.simulation))
        return a;
    return null;
  },
  // get interaction that has this pointer
  hasPointer(e) {
    let {
      pointerId: t,
      scope: n
    } = e;
    for (const i of n.interactions.list)
      if (Ge(i, t))
        return i;
    return null;
  },
  // get first idle interaction with a matching pointerType
  idle(e) {
    let {
      pointerType: t,
      scope: n
    } = e;
    for (const i of n.interactions.list) {
      if (i.pointers.length === 1) {
        const o = i.interactable;
        if (o && !(o.options.gesture && o.options.gesture.enabled))
          continue;
      } else if (i.pointers.length >= 2)
        continue;
      if (!i.interacting() && t === i.pointerType)
        return i;
    }
    return null;
  }
};
function Ge(e, t) {
  return e.pointers.some((n) => {
    let {
      id: i
    } = n;
    return i === t;
  });
}
const An = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
function nr(e) {
  const t = {};
  for (const s of An)
    t[s] = $n(s, e);
  const n = G.pEventTypes;
  let i;
  q.PointerEvent ? i = [{
    type: n.down,
    listener: o
  }, {
    type: n.down,
    listener: t.pointerDown
  }, {
    type: n.move,
    listener: t.pointerMove
  }, {
    type: n.up,
    listener: t.pointerUp
  }, {
    type: n.cancel,
    listener: t.pointerUp
  }] : i = [{
    type: "mousedown",
    listener: t.pointerDown
  }, {
    type: "mousemove",
    listener: t.pointerMove
  }, {
    type: "mouseup",
    listener: t.pointerUp
  }, {
    type: "touchstart",
    listener: o
  }, {
    type: "touchstart",
    listener: t.pointerDown
  }, {
    type: "touchmove",
    listener: t.pointerMove
  }, {
    type: "touchend",
    listener: t.pointerUp
  }, {
    type: "touchcancel",
    listener: t.pointerUp
  }], i.push({
    type: "blur",
    listener(s) {
      for (const a of e.interactions.list)
        a.documentBlur(s);
    }
  }), e.prevTouchTime = 0, e.Interaction = class extends er {
    get pointerMoveTolerance() {
      return e.interactions.pointerMoveTolerance;
    }
    set pointerMoveTolerance(s) {
      e.interactions.pointerMoveTolerance = s;
    }
    _now() {
      return e.now();
    }
  }, e.interactions = {
    // all active and idle interactions
    list: [],
    new(s) {
      s.scopeFire = (l, c) => e.fire(l, c);
      const a = new e.Interaction(s);
      return e.interactions.list.push(a), a;
    },
    listeners: t,
    docEvents: i,
    pointerMoveTolerance: 1
  };
  function o() {
    for (const s of e.interactions.list)
      if (!(!s.pointerIsDown || s.pointerType !== "touch" || s._interacting))
        for (const a of s.pointers)
          e.documents.some((l) => {
            let {
              doc: c
            } = l;
            return zt(c, a.downTarget);
          }) || s.removePointer(a.pointer, a.event);
  }
  e.usePlugin(Vi);
}
function $n(e, t) {
  return function(n) {
    const i = t.interactions.list, o = Ni(n), [s, a] = _n(n), l = [];
    if (/^touch/.test(n.type)) {
      t.prevTouchTime = t.now();
      for (const c of n.changedTouches) {
        const r = c, f = te(r), d = {
          pointer: r,
          pointerId: f,
          pointerType: o,
          eventType: n.type,
          eventTarget: s,
          curEventTarget: a,
          scope: t
        }, m = Ue(d);
        l.push([d.pointer, d.eventTarget, d.curEventTarget, m]);
      }
    } else {
      let c = !1;
      if (!G.supportsPointerEvent && /mouse/.test(n.type)) {
        for (let r = 0; r < i.length && !c; r++)
          c = i[r].pointerType !== "mouse" && i[r].pointerIsDown;
        c = c || t.now() - t.prevTouchTime < 500 || // on iOS and Firefox Mobile, MouseEvent.timeStamp is zero if simulated
        n.timeStamp === 0;
      }
      if (!c) {
        const r = {
          pointer: n,
          pointerId: te(n),
          pointerType: o,
          eventType: n.type,
          curEventTarget: a,
          eventTarget: s,
          scope: t
        }, f = Ue(r);
        l.push([r.pointer, r.eventTarget, r.curEventTarget, f]);
      }
    }
    for (const [c, r, f, d] of l)
      d[e](c, n, r, f);
  };
}
function Ue(e) {
  const {
    pointerType: t,
    scope: n
  } = e, o = {
    interaction: xe.search(e),
    searchDetails: e
  };
  return n.fire("interactions:find", o), o.interaction || n.interactions.new({
    pointerType: t
  });
}
function de(e, t) {
  let {
    doc: n,
    scope: i,
    options: o
  } = e;
  const {
    interactions: {
      docEvents: s
    },
    events: a
  } = i, l = a[t];
  i.browser.isIOS && !o.events && (o.events = {
    passive: !1
  });
  for (const r in a.delegatedEvents)
    l(n, r, a.delegateListener), l(n, r, a.delegateUseCapture, !0);
  const c = o && o.events;
  for (const {
    type: r,
    listener: f
  } of s)
    l(n, r, f, c);
}
const ir = {
  id: "core/interactions",
  install: nr,
  listeners: {
    "scope:add-document": (e) => de(e, "add"),
    "scope:remove-document": (e) => de(e, "remove"),
    "interactable:unset": (e, t) => {
      let {
        interactable: n
      } = e;
      for (let i = t.interactions.list.length - 1; i >= 0; i--) {
        const o = t.interactions.list[i];
        o.interactable === n && (o.stop(), t.fire("interactions:destroy", {
          interaction: o
        }), o.destroy(), t.interactions.list.length > 2 && t.interactions.list.splice(i, 1));
      }
    }
  },
  onDocSignal: de,
  doOnInteractions: $n,
  methodNames: An
};
function qt(e, t) {
  if (t.phaselessTypes[e])
    return !0;
  for (const n in t.map)
    if (e.indexOf(n) === 0 && e.substr(n.length) in t.phases)
      return !0;
  return !1;
}
var ht = /* @__PURE__ */ function(e) {
  return e[e.On = 0] = "On", e[e.Off = 1] = "Off", e;
}(ht || {});
class rr {
  /** @internal */
  get _defaults() {
    return {
      base: {},
      perAction: {},
      actions: {}
    };
  }
  constructor(t, n, i, o) {
    this.target = void 0, this.options = void 0, this._actions = void 0, this.events = new In(), this._context = void 0, this._win = void 0, this._doc = void 0, this._scopeEvents = void 0, this._actions = n.actions, this.target = t, this._context = n.context || i, this._win = It(Ye(t) ? this._context : t), this._doc = this._win.document, this._scopeEvents = o, this.set(n);
  }
  setOnEvents(t, n) {
    return p.func(n.onstart) && this.on(`${t}start`, n.onstart), p.func(n.onmove) && this.on(`${t}move`, n.onmove), p.func(n.onend) && this.on(`${t}end`, n.onend), p.func(n.oninertiastart) && this.on(`${t}inertiastart`, n.oninertiastart), this;
  }
  updatePerActionListeners(t, n, i) {
    var o;
    const s = (o = this._actions.map[t]) == null ? void 0 : o.filterEventType, a = (l) => (s == null || s(l)) && qt(l, this._actions);
    (p.array(n) || p.object(n)) && this._onOff(ht.Off, t, n, void 0, a), (p.array(i) || p.object(i)) && this._onOff(ht.On, t, i, void 0, a);
  }
  setPerAction(t, n) {
    const i = this._defaults;
    for (const o in n) {
      const s = o, a = this.options[t], l = n[s];
      s === "listeners" && this.updatePerActionListeners(t, a.listeners, l), p.array(l) ? a[s] = zn(l) : p.plainObject(l) ? (a[s] = I(a[s] || {}, Rt(l)), p.object(i.perAction[s]) && "enabled" in i.perAction[s] && (a[s].enabled = l.enabled !== !1)) : p.bool(l) && p.object(i.perAction[s]) ? a[s].enabled = l : a[s] = l;
    }
  }
  /**
   * The default function to get an Interactables bounding rect. Can be
   * overridden using {@link Interactable.rectChecker}.
   *
   * @param {Element} [element] The element to measure.
   * @return {Rect} The object's bounding rectangle.
   */
  getRect(t) {
    return t = t || (p.element(this.target) ? this.target : null), p.string(this.target) && (t = t || this._context.querySelector(this.target)), De(t);
  }
  /**
   * Returns or sets the function used to calculate the interactable's
   * element's rectangle
   *
   * @param {function} [checker] A function which returns this Interactable's
   * bounding rectangle. See {@link Interactable.getRect}
   * @return {function | object} The checker function or this Interactable
   */
  rectChecker(t) {
    return p.func(t) ? (this.getRect = (n) => {
      const i = I({}, t.apply(this, n));
      return "width" in i || (i.width = i.right - i.left, i.height = i.bottom - i.top), i;
    }, this) : t === null ? (delete this.getRect, this) : this.getRect;
  }
  /** @internal */
  _backCompatOption(t, n) {
    if (Ye(n) || p.object(n)) {
      this.options[t] = n;
      for (const i in this._actions.map)
        this.options[i][t] = n;
      return this;
    }
    return this.options[t];
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
  origin(t) {
    return this._backCompatOption("origin", t);
  }
  /**
   * Returns or sets the mouse coordinate types used to calculate the
   * movement of the pointer.
   *
   * @param {string} [newValue] Use 'client' if you will be scrolling while
   * interacting; Use 'page' if you want autoScroll to work
   * @return {string | object} The current deltaSource or this Interactable
   */
  deltaSource(t) {
    return t === "page" || t === "client" ? (this.options.deltaSource = t, this) : this.options.deltaSource;
  }
  /** @internal */
  getAllElements() {
    const {
      target: t
    } = this;
    return p.string(t) ? Array.from(this._context.querySelectorAll(t)) : p.func(t) && t.getAllElements ? t.getAllElements() : p.element(t) ? [t] : [];
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
  inContext(t) {
    return this._context === t.ownerDocument || zt(this._context, t);
  }
  /** @internal */
  testIgnoreAllow(t, n, i) {
    return !this.testIgnore(t.ignoreFrom, n, i) && this.testAllow(t.allowFrom, n, i);
  }
  /** @internal */
  testAllow(t, n, i) {
    return t ? p.element(i) ? p.string(t) ? be(i, t, n) : p.element(t) ? zt(t, i) : !1 : !1 : !0;
  }
  /** @internal */
  testIgnore(t, n, i) {
    return !t || !p.element(i) ? !1 : p.string(t) ? be(i, t, n) : p.element(t) ? zt(t, i) : !1;
  }
  /**
   * Calls listeners for the given InteractEvent type bound globally
   * and directly to this Interactable
   *
   * @param {InteractEvent} iEvent The InteractEvent object to be fired on this
   * Interactable
   * @return {Interactable} this Interactable
   */
  fire(t) {
    return this.events.fire(t), this;
  }
  /** @internal */
  _onOff(t, n, i, o, s) {
    p.object(n) && !p.array(n) && (o = i, i = null);
    const a = Et(n, i, s);
    for (let l in a) {
      l === "wheel" && (l = G.wheelEvent);
      for (const c of a[l])
        qt(l, this._actions) ? this.events[t === ht.On ? "on" : "off"](l, c) : p.string(this.target) ? this._scopeEvents[t === ht.On ? "addDelegate" : "removeDelegate"](this.target, this._context, l, c, o) : this._scopeEvents[t === ht.On ? "add" : "remove"](this.target, l, c, o);
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
  on(t, n, i) {
    return this._onOff(ht.On, t, n, i);
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
  off(t, n, i) {
    return this._onOff(ht.Off, t, n, i);
  }
  /**
   * Reset the options of this Interactable
   *
   * @param {object} options The new settings to apply
   * @return {object} This Interactable
   */
  set(t) {
    const n = this._defaults;
    p.object(t) || (t = {}), this.options = Rt(n.base);
    for (const i in this._actions.methodDict) {
      const o = i, s = this._actions.methodDict[o];
      this.options[o] = {}, this.setPerAction(o, I(I({}, n.perAction), n.actions[o])), this[s](t[o]);
    }
    for (const i in t) {
      if (i === "getRect") {
        this.rectChecker(t.getRect);
        continue;
      }
      p.func(this[i]) && this[i](t[i]);
    }
    return this;
  }
  /**
   * Remove this interactable from the list of interactables and remove it's
   * action capabilities and event listeners
   */
  unset() {
    if (p.string(this.target))
      for (const t in this._scopeEvents.delegatedEvents) {
        const n = this._scopeEvents.delegatedEvents[t];
        for (let i = n.length - 1; i >= 0; i--) {
          const {
            selector: o,
            context: s,
            listeners: a
          } = n[i];
          o === this.target && s === this._context && n.splice(i, 1);
          for (let l = a.length - 1; l >= 0; l--)
            this._scopeEvents.removeDelegate(this.target, this._context, t, a[l][0], a[l][1]);
        }
      }
    else
      this._scopeEvents.remove(this.target, "all");
  }
}
class or {
  constructor(t) {
    this.list = [], this.selectorMap = {}, this.scope = void 0, this.scope = t, t.addListeners({
      "interactable:unset": (n) => {
        let {
          interactable: i
        } = n;
        const {
          target: o
        } = i, s = p.string(o) ? this.selectorMap[o] : o[this.scope.id], a = re(s, (l) => l === i);
        s.splice(a, 1);
      }
    });
  }
  new(t, n) {
    n = I(n || {}, {
      actions: this.scope.actions
    });
    const i = new this.scope.Interactable(t, n, this.scope.document, this.scope.events);
    return this.scope.addDocument(i._doc), this.list.push(i), p.string(t) ? (this.selectorMap[t] || (this.selectorMap[t] = []), this.selectorMap[t].push(i)) : (i.target[this.scope.id] || Object.defineProperty(t, this.scope.id, {
      value: [],
      configurable: !0
    }), t[this.scope.id].push(i)), this.scope.fire("interactable:new", {
      target: t,
      options: n,
      interactable: i,
      win: this.scope._win
    }), i;
  }
  getExisting(t, n) {
    const i = n && n.context || this.scope.document, o = p.string(t), s = o ? this.selectorMap[t] : t[this.scope.id];
    if (s)
      return Jt(s, (a) => a._context === i && (o || a.inContext(t)));
  }
  forEachMatch(t, n) {
    for (const i of this.list) {
      let o;
      if ((p.string(i.target) ? (
        // target is a selector and the element matches
        p.element(t) && Tt(t, i.target)
      ) : (
        // target is the element
        t === i.target
      )) && // the element is in context
      i.inContext(t) && (o = n(i)), o !== void 0)
        return o;
    }
  }
}
function sr(e) {
  const t = (n, i) => {
    let o = e.interactables.getExisting(n, i);
    return o || (o = e.interactables.new(n, i), o.events.global = t.globalEvents), o;
  };
  return t.getPointerAverage = Cn, t.getTouchBBox = Li, t.getTouchDistance = Wi, t.getTouchAngle = Bi, t.getElementRect = De, t.getElementClientRect = Te, t.matchesSelector = Tt, t.closest = Tn, t.globalEvents = {}, t.version = "1.10.27", t.scope = e, t.use = function(n, i) {
    return this.scope.usePlugin(n, i), this;
  }, t.isSet = function(n, i) {
    return !!this.scope.interactables.get(n, i && i.context);
  }, t.on = Xt(function(i, o, s) {
    if (p.string(i) && i.search(" ") !== -1 && (i = i.trim().split(/ +/)), p.array(i)) {
      for (const a of i)
        this.on(a, o, s);
      return this;
    }
    if (p.object(i)) {
      for (const a in i)
        this.on(a, i[a], o);
      return this;
    }
    return qt(i, this.scope.actions) ? this.globalEvents[i] ? this.globalEvents[i].push(o) : this.globalEvents[i] = [o] : this.scope.events.add(this.scope.document, i, o, {
      options: s
    }), this;
  }, "The interact.on() method is being deprecated"), t.off = Xt(function(i, o, s) {
    if (p.string(i) && i.search(" ") !== -1 && (i = i.trim().split(/ +/)), p.array(i)) {
      for (const a of i)
        this.off(a, o, s);
      return this;
    }
    if (p.object(i)) {
      for (const a in i)
        this.off(a, i[a], o);
      return this;
    }
    if (qt(i, this.scope.actions)) {
      let a;
      i in this.globalEvents && (a = this.globalEvents[i].indexOf(o)) !== -1 && this.globalEvents[i].splice(a, 1);
    } else
      this.scope.events.remove(this.scope.document, i, o, s);
    return this;
  }, "The interact.off() method is being deprecated"), t.debug = function() {
    return this.scope;
  }, t.supportsTouch = function() {
    return G.supportsTouch;
  }, t.supportsPointerEvent = function() {
    return G.supportsPointerEvent;
  }, t.stop = function() {
    for (const n of this.scope.interactions.list)
      n.stop();
    return this;
  }, t.pointerMoveTolerance = function(n) {
    return p.number(n) ? (this.scope.interactions.pointerMoveTolerance = n, this) : this.scope.interactions.pointerMoveTolerance;
  }, t.addDocument = function(n, i) {
    this.scope.addDocument(n, i);
  }, t.removeDocument = function(n) {
    this.scope.removeDocument(n);
  }, t;
}
class ar {
  constructor() {
    this.id = `__interact_scope_${Math.floor(Math.random() * 100)}`, this.isInitialized = !1, this.listenerMaps = [], this.browser = G, this.defaults = Rt(kn), this.Eventable = In, this.actions = {
      map: {},
      phases: {
        start: !0,
        move: !0,
        end: !0
      },
      methodDict: {},
      phaselessTypes: {}
    }, this.interactStatic = sr(this), this.InteractEvent = Pe, this.Interactable = void 0, this.interactables = new or(this), this._win = void 0, this.document = void 0, this.window = void 0, this.documents = [], this._plugins = {
      list: [],
      map: {}
    }, this.onWindowUnload = (n) => this.removeDocument(n.target);
    const t = this;
    this.Interactable = class extends rr {
      get _defaults() {
        return t.defaults;
      }
      set(n) {
        return super.set(n), t.fire("interactable:set", {
          options: n,
          interactable: this
        }), this;
      }
      unset() {
        super.unset();
        const n = t.interactables.list.indexOf(this);
        n < 0 || (t.interactables.list.splice(n, 1), t.fire("interactable:unset", {
          interactable: this
        }));
      }
    };
  }
  addListeners(t, n) {
    this.listenerMaps.push({
      id: n,
      map: t
    });
  }
  fire(t, n) {
    for (const {
      map: {
        [t]: i
      }
    } of this.listenerMaps)
      if (i && i(n, this, t) === !1)
        return !1;
  }
  init(t) {
    return this.isInitialized ? this : cr(this, t);
  }
  pluginIsInstalled(t) {
    const {
      id: n
    } = t;
    return n ? !!this._plugins.map[n] : this._plugins.list.indexOf(t) !== -1;
  }
  usePlugin(t, n) {
    if (!this.isInitialized)
      return this;
    if (this.pluginIsInstalled(t))
      return this;
    if (t.id && (this._plugins.map[t.id] = t), this._plugins.list.push(t), t.install && t.install(this, n), t.listeners && t.before) {
      let i = 0;
      const o = this.listenerMaps.length, s = t.before.reduce((a, l) => (a[l] = !0, a[Ve(l)] = !0, a), {});
      for (; i < o; i++) {
        const a = this.listenerMaps[i].id;
        if (a && (s[a] || s[Ve(a)]))
          break;
      }
      this.listenerMaps.splice(i, 0, {
        id: t.id,
        map: t.listeners
      });
    } else t.listeners && this.listenerMaps.push({
      id: t.id,
      map: t.listeners
    });
    return this;
  }
  addDocument(t, n) {
    if (this.getDocIndex(t) !== -1)
      return !1;
    const i = It(t);
    n = n ? I({}, n) : {}, this.documents.push({
      doc: t,
      options: n
    }), this.events.documents.push(t), t !== this.document && this.events.add(i, "unload", this.onWindowUnload), this.fire("scope:add-document", {
      doc: t,
      window: i,
      scope: this,
      options: n
    });
  }
  removeDocument(t) {
    const n = this.getDocIndex(t), i = It(t), o = this.documents[n].options;
    this.events.remove(i, "unload", this.onWindowUnload), this.documents.splice(n, 1), this.events.documents.splice(n, 1), this.fire("scope:remove-document", {
      doc: t,
      window: i,
      scope: this,
      options: o
    });
  }
  getDocIndex(t) {
    for (let n = 0; n < this.documents.length; n++)
      if (this.documents[n].doc === t)
        return n;
    return -1;
  }
  getDocOptions(t) {
    const n = this.getDocIndex(t);
    return n === -1 ? null : this.documents[n].options;
  }
  now() {
    return (this.window.Date || Date).now();
  }
}
function cr(e, t) {
  return e.isInitialized = !0, p.window(t) && wn(t), q.init(t), G.init(t), Ot.init(t), e.window = t, e.document = t.document, e.usePlugin(ir), e.usePlugin(Xi), e;
}
function Ve(e) {
  return e && e.replace(/\/.*$/, "");
}
const Hn = new ar(), ut = Hn.interactStatic, lr = typeof globalThis < "u" ? globalThis : window;
Hn.init(lr);
function ur(e) {
  const {
    Interactable: t
    // tslint:disable-line no-shadowed-variable
  } = e;
  t.prototype.getAction = function(i, o, s, a) {
    const l = fr(this, o, s, a, e);
    return this.options.actionChecker ? this.options.actionChecker(i, o, l, this, a, s) : l;
  }, t.prototype.ignoreFrom = Xt(function(n) {
    return this._backCompatOption("ignoreFrom", n);
  }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), t.prototype.allowFrom = Xt(function(n) {
    return this._backCompatOption("allowFrom", n);
  }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), t.prototype.actionChecker = hr, t.prototype.styleCursor = dr;
}
function fr(e, t, n, i, o) {
  const s = e.getRect(i), a = t.buttons || {
    0: 1,
    1: 4,
    3: 8,
    4: 16
  }[t.button], l = {
    action: null,
    interactable: e,
    interaction: n,
    element: i,
    rect: s,
    buttons: a
  };
  return o.fire("auto-start:check", l), l.action;
}
function dr(e) {
  return p.bool(e) ? (this.options.styleCursor = e, this) : e === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
}
function hr(e) {
  return p.func(e) ? (this.options.actionChecker = e, this) : e === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
}
var pr = {
  id: "auto-start/interactableMethods",
  install: ur
};
function gr(e) {
  const {
    interactStatic: t,
    defaults: n
  } = e;
  e.usePlugin(pr), n.base.actionChecker = null, n.base.styleCursor = !0, I(n.perAction, {
    manualStart: !1,
    max: 1 / 0,
    maxPerElement: 1,
    allowFrom: null,
    ignoreFrom: null,
    // only allow left button by default
    // see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons#Return_value
    mouseButtons: 1
  }), t.maxInteractions = (i) => Nn(i, e), e.autoStart = {
    // Allow this many interactions to happen simultaneously
    maxInteractions: 1 / 0,
    withinInteractionLimit: ae,
    cursorElement: null
  };
}
function mr(e, t) {
  let {
    interaction: n,
    pointer: i,
    event: o,
    eventTarget: s
  } = e;
  if (n.interacting()) return;
  const a = Wn(n, i, o, s, t);
  Bn(n, a, t);
}
function vr(e, t) {
  let {
    interaction: n,
    pointer: i,
    event: o,
    eventTarget: s
  } = e;
  if (n.pointerType !== "mouse" || n.pointerIsDown || n.interacting()) return;
  const a = Wn(n, i, o, s, t);
  Bn(n, a, t);
}
function yr(e, t) {
  const {
    interaction: n
  } = e;
  if (!n.pointerIsDown || n.interacting() || !n.pointerWasMoved || !n.prepared.name)
    return;
  t.fire("autoStart:before-start", e);
  const {
    interactable: i
  } = n, o = n.prepared.name;
  o && i && (i.options[o].manualStart || !ae(i, n.element, n.prepared, t) ? n.stop() : (n.start(n.prepared, i, n.element), Fn(n, t)));
}
function br(e, t) {
  let {
    interaction: n
  } = e;
  const {
    interactable: i
  } = n;
  i && i.options.styleCursor && we(n.element, "", t);
}
function Ln(e, t, n, i, o) {
  return t.testIgnoreAllow(t.options[e.name], n, i) && t.options[e.name].enabled && ae(t, n, e, o) ? e : null;
}
function xr(e, t, n, i, o, s, a) {
  for (let l = 0, c = i.length; l < c; l++) {
    const r = i[l], f = o[l], d = r.getAction(t, n, e, f);
    if (!d)
      continue;
    const m = Ln(d, r, f, s, a);
    if (m)
      return {
        action: m,
        interactable: r,
        element: f
      };
  }
  return {
    action: null,
    interactable: null,
    element: null
  };
}
function Wn(e, t, n, i, o) {
  let s = [], a = [], l = i;
  function c(r) {
    s.push(r), a.push(l);
  }
  for (; p.element(l); ) {
    s = [], a = [], o.interactables.forEachMatch(l, c);
    const r = xr(e, t, n, s, a, i, o);
    if (r.action && !r.interactable.options[r.action.name].manualStart)
      return r;
    l = gt(l);
  }
  return {
    action: null,
    interactable: null,
    element: null
  };
}
function Bn(e, t, n) {
  let {
    action: i,
    interactable: o,
    element: s
  } = t;
  i = i || {
    name: null
  }, e.interactable = o, e.element = s, Pn(e.prepared, i), e.rect = o && i.name ? o.getRect(s) : null, Fn(e, n), n.fire("autoStart:prepared", {
    interaction: e
  });
}
function ae(e, t, n, i) {
  const o = e.options, s = o[n.name].max, a = o[n.name].maxPerElement, l = i.autoStart.maxInteractions;
  let c = 0, r = 0, f = 0;
  if (!(s && a && l))
    return !1;
  for (const d of i.interactions.list) {
    const m = d.prepared.name;
    if (d.interacting()) {
      if (c++, c >= l)
        return !1;
      if (d.interactable === e && (r += m === n.name ? 1 : 0, r >= s || d.element === t && (f++, m === n.name && f >= a)))
        return !1;
    }
  }
  return l > 0;
}
function Nn(e, t) {
  return p.number(e) ? (t.autoStart.maxInteractions = e, this) : t.autoStart.maxInteractions;
}
function we(e, t, n) {
  const {
    cursorElement: i
  } = n.autoStart;
  i && i !== e && (i.style.cursor = ""), e.ownerDocument.documentElement.style.cursor = t, e.style.cursor = t, n.autoStart.cursorElement = t ? e : null;
}
function Fn(e, t) {
  const {
    interactable: n,
    element: i,
    prepared: o
  } = e;
  if (!(e.pointerType === "mouse" && n && n.options.styleCursor)) {
    t.autoStart.cursorElement && we(t.autoStart.cursorElement, "", t);
    return;
  }
  let s = "";
  if (o.name) {
    const a = n.options[o.name].cursorChecker;
    p.func(a) ? s = a(o, n, i, e._interacting) : s = t.actions.map[o.name].getCursor(o);
  }
  we(e.element, s || "", t);
}
const Oe = {
  id: "auto-start/base",
  before: ["actions"],
  install: gr,
  listeners: {
    "interactions:down": mr,
    "interactions:move": (e, t) => {
      vr(e, t), yr(e, t);
    },
    "interactions:stop": br
  },
  maxInteractions: Nn,
  withinInteractionLimit: ae,
  validateAction: Ln
};
function wr(e, t) {
  let {
    interaction: n,
    eventTarget: i,
    dx: o,
    dy: s
  } = e;
  if (n.prepared.name !== "drag") return;
  const a = Math.abs(o), l = Math.abs(s), c = n.interactable.options.drag, r = c.startAxis, f = a > l ? "x" : a < l ? "y" : "xy";
  if (n.prepared.axis = c.lockAxis === "start" ? f[0] : c.lockAxis, f !== "xy" && r !== "xy" && r !== f) {
    n.prepared.name = null;
    let d = i;
    const m = function(g) {
      if (g === n.interactable) return;
      const b = n.interactable.options.drag;
      if (!b.manualStart && g.testIgnoreAllow(b, d, i)) {
        const C = g.getAction(n.downPointer, n.downEvent, n, d);
        if (C && C.name === "drag" && Sr(f, g) && Oe.validateAction(C, g, d, i, t))
          return g;
      }
    };
    for (; p.element(d); ) {
      const g = t.interactables.forEachMatch(d, m);
      if (g) {
        n.prepared.name = "drag", n.interactable = g, n.element = d;
        break;
      }
      d = gt(d);
    }
  }
}
function Sr(e, t) {
  if (!t)
    return !1;
  const n = t.options.drag.startAxis;
  return e === "xy" || n === "xy" || n === e;
}
var Er = {
  id: "auto-start/dragAxis",
  listeners: {
    "autoStart:before-start": wr
  }
};
function zr(e) {
  const {
    defaults: t
  } = e;
  e.usePlugin(Oe), t.perAction.hold = 0, t.perAction.delay = 0;
}
function he(e) {
  const t = e.prepared && e.prepared.name;
  if (!t)
    return null;
  const n = e.interactable.options;
  return n[t].hold || n[t].delay;
}
const Ir = {
  id: "auto-start/hold",
  install: zr,
  listeners: {
    "interactions:new": (e) => {
      let {
        interaction: t
      } = e;
      t.autoStartHoldTimer = null;
    },
    "autoStart:prepared": (e) => {
      let {
        interaction: t
      } = e;
      const n = he(t);
      n > 0 && (t.autoStartHoldTimer = setTimeout(() => {
        t.start(t.prepared, t.interactable, t.element);
      }, n));
    },
    "interactions:move": (e) => {
      let {
        interaction: t,
        duplicate: n
      } = e;
      t.autoStartHoldTimer && t.pointerWasMoved && !n && (clearTimeout(t.autoStartHoldTimer), t.autoStartHoldTimer = null);
    },
    // prevent regular down->move autoStart
    "autoStart:before-start": (e) => {
      let {
        interaction: t
      } = e;
      he(t) > 0 && (t.prepared.name = null);
    }
  },
  getHoldDuration: he
};
var Tr = {
  id: "auto-start",
  install(e) {
    e.usePlugin(Oe), e.usePlugin(Ir), e.usePlugin(Er);
  }
};
ut.use(Tr);
function Dr(e) {
  const {
    defaults: t,
    actions: n
  } = e;
  e.autoScroll = M, M.now = () => e.now(), n.phaselessTypes.autoscroll = !0, t.perAction.autoScroll = M.defaults;
}
const M = {
  defaults: {
    enabled: !1,
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
  isScrolling: !1,
  prevTime: 0,
  margin: 0,
  speed: 0,
  start(e) {
    M.isScrolling = !0, Ot.cancel(M.i), e.autoScroll = M, M.interaction = e, M.prevTime = M.now(), M.i = Ot.request(M.scroll);
  },
  stop() {
    M.isScrolling = !1, M.interaction && (M.interaction.autoScroll = null), Ot.cancel(M.i);
  },
  // scroll the window by the values in scroll.x/y
  scroll() {
    const {
      interaction: e
    } = M, {
      interactable: t,
      element: n
    } = e, i = e.prepared.name, o = t.options[i].autoScroll, s = Ke(o.container, t, n), a = M.now(), l = (a - M.prevTime) / 1e3, c = o.speed * l;
    if (c >= 1) {
      const r = {
        x: M.x * c,
        y: M.y * c
      };
      if (r.x || r.y) {
        const f = Je(s);
        p.window(s) ? s.scrollBy(r.x, r.y) : s && (s.scrollLeft += r.x, s.scrollTop += r.y);
        const d = Je(s), m = {
          x: d.x - f.x,
          y: d.y - f.y
        };
        (m.x || m.y) && t.fire({
          type: "autoscroll",
          target: n,
          interactable: t,
          delta: m,
          interaction: e,
          container: s
        });
      }
      M.prevTime = a;
    }
    M.isScrolling && (Ot.cancel(M.i), M.i = Ot.request(M.scroll));
  },
  check(e, t) {
    var n;
    return (n = e.options[t].autoScroll) == null ? void 0 : n.enabled;
  },
  onInteractionMove(e) {
    let {
      interaction: t,
      pointer: n
    } = e;
    if (!(t.interacting() && M.check(t.interactable, t.prepared.name)))
      return;
    if (t.simulation) {
      M.x = M.y = 0;
      return;
    }
    let i, o, s, a;
    const {
      interactable: l,
      element: c
    } = t, r = t.prepared.name, f = l.options[r].autoScroll, d = Ke(f.container, l, c);
    if (p.window(d))
      a = n.clientX < M.margin, i = n.clientY < M.margin, o = n.clientX > d.innerWidth - M.margin, s = n.clientY > d.innerHeight - M.margin;
    else {
      const m = Te(d);
      a = n.clientX < m.left + M.margin, i = n.clientY < m.top + M.margin, o = n.clientX > m.right - M.margin, s = n.clientY > m.bottom - M.margin;
    }
    M.x = o ? 1 : a ? -1 : 0, M.y = s ? 1 : i ? -1 : 0, M.isScrolling || (M.margin = f.margin, M.speed = f.speed, M.start(t));
  }
};
function Ke(e, t, n) {
  return (p.string(e) ? On(e, t, n) : e) || It(n);
}
function Je(e) {
  return p.window(e) && (e = window.document.body), {
    x: e.scrollLeft,
    y: e.scrollTop
  };
}
const Mr = {
  id: "auto-scroll",
  install: Dr,
  listeners: {
    "interactions:new": (e) => {
      let {
        interaction: t
      } = e;
      t.autoScroll = null;
    },
    "interactions:destroy": (e) => {
      let {
        interaction: t
      } = e;
      t.autoScroll = null, M.stop(), M.interaction && (M.interaction = null);
    },
    "interactions:stop": M.stop,
    "interactions:action-move": (e) => M.onInteractionMove(e)
  }
};
ut.use(Mr);
function Cr(e) {
  const {
    actions: t,
    Interactable: n,
    defaults: i
  } = e;
  n.prototype.draggable = Zt.draggable, t.map.drag = Zt, t.methodDict.drag = "draggable", i.actions.drag = Zt.defaults;
}
function pe(e) {
  let {
    interaction: t
  } = e;
  if (t.prepared.name !== "drag") return;
  const n = t.prepared.axis;
  n === "x" ? (t.coords.cur.page.y = t.coords.start.page.y, t.coords.cur.client.y = t.coords.start.client.y, t.coords.velocity.client.y = 0, t.coords.velocity.page.y = 0) : n === "y" && (t.coords.cur.page.x = t.coords.start.page.x, t.coords.cur.client.x = t.coords.start.client.x, t.coords.velocity.client.x = 0, t.coords.velocity.page.x = 0);
}
function Ze(e) {
  let {
    iEvent: t,
    interaction: n
  } = e;
  if (n.prepared.name !== "drag") return;
  const i = n.prepared.axis;
  if (i === "x" || i === "y") {
    const o = i === "x" ? "y" : "x";
    t.page[o] = n.coords.start.page[o], t.client[o] = n.coords.start.client[o], t.delta[o] = 0;
  }
}
const _r = function(t) {
  return p.object(t) ? (this.options.drag.enabled = t.enabled !== !1, this.setPerAction("drag", t), this.setOnEvents("drag", t), /^(xy|x|y|start)$/.test(t.lockAxis) && (this.options.drag.lockAxis = t.lockAxis), /^(xy|x|y)$/.test(t.startAxis) && (this.options.drag.startAxis = t.startAxis), this) : p.bool(t) ? (this.options.drag.enabled = t, this) : this.options.drag;
}, Zt = {
  id: "actions/drag",
  install: Cr,
  listeners: {
    "interactions:before-action-move": pe,
    "interactions:action-resume": pe,
    // dragmove
    "interactions:action-move": Ze,
    "auto-start:check": (e) => {
      const {
        interaction: t,
        interactable: n,
        buttons: i
      } = e, o = n.options.drag;
      if (!(!(o && o.enabled) || // check mouseButton setting if the pointer is down
      t.pointerIsDown && /mouse|pointer/.test(t.pointerType) && !(i & n.options.drag.mouseButtons)))
        return e.action = {
          name: "drag",
          axis: o.lockAxis === "start" ? o.startAxis : o.lockAxis
        }, !1;
    }
  },
  draggable: _r,
  beforeMove: pe,
  move: Ze,
  defaults: {
    startAxis: "xy",
    lockAxis: "xy"
  },
  getCursor() {
    return "move";
  },
  filterEventType: (e) => e.search("drag") === 0
};
ut.use(Zt);
function Pr(e) {
  const {
    actions: t,
    browser: n,
    Interactable: i,
    // tslint:disable-line no-shadowed-variable
    defaults: o
  } = e;
  lt.cursors = Ar(n), lt.defaultMargin = n.supportsTouch || n.supportsPointerEvent ? 20 : 10, i.prototype.resizable = function(s) {
    return Rr(this, s, e);
  }, t.map.resize = lt, t.methodDict.resize = "resizable", o.actions.resize = lt.defaults;
}
function Or(e) {
  const {
    interaction: t,
    interactable: n,
    element: i,
    rect: o,
    buttons: s
  } = e;
  if (!o)
    return;
  const a = I({}, t.coords.cur.page), l = n.options.resize;
  if (!(!(l && l.enabled) || // check mouseButton setting if the pointer is down
  t.pointerIsDown && /mouse|pointer/.test(t.pointerType) && !(s & l.mouseButtons))) {
    if (p.object(l.edges)) {
      const c = {
        left: !1,
        right: !1,
        top: !1,
        bottom: !1
      };
      for (const r in c)
        c[r] = kr(r, l.edges[r], a, t._latestPointer.eventTarget, i, o, l.margin || lt.defaultMargin);
      c.left = c.left && !c.right, c.top = c.top && !c.bottom, (c.left || c.right || c.top || c.bottom) && (e.action = {
        name: "resize",
        edges: c
      });
    } else {
      const c = l.axis !== "y" && a.x > o.right - lt.defaultMargin, r = l.axis !== "x" && a.y > o.bottom - lt.defaultMargin;
      (c || r) && (e.action = {
        name: "resize",
        axes: (c ? "x" : "") + (r ? "y" : "")
      });
    }
    return e.action ? !1 : void 0;
  }
}
function Rr(e, t, n) {
  return p.object(t) ? (e.options.resize.enabled = t.enabled !== !1, e.setPerAction("resize", t), e.setOnEvents("resize", t), p.string(t.axis) && /^x$|^y$|^xy$/.test(t.axis) ? e.options.resize.axis = t.axis : t.axis === null && (e.options.resize.axis = n.defaults.actions.resize.axis), p.bool(t.preserveAspectRatio) ? e.options.resize.preserveAspectRatio = t.preserveAspectRatio : p.bool(t.square) && (e.options.resize.square = t.square), e) : p.bool(t) ? (e.options.resize.enabled = t, e) : e.options.resize;
}
function kr(e, t, n, i, o, s, a) {
  if (!t)
    return !1;
  if (t === !0) {
    const l = p.number(s.width) ? s.width : s.right - s.left, c = p.number(s.height) ? s.height : s.bottom - s.top;
    if (a = Math.min(a, Math.abs((e === "left" || e === "right" ? l : c) / 2)), l < 0 && (e === "left" ? e = "right" : e === "right" && (e = "left")), c < 0 && (e === "top" ? e = "bottom" : e === "bottom" && (e = "top")), e === "left") {
      const r = l >= 0 ? s.left : s.right;
      return n.x < r + a;
    }
    if (e === "top") {
      const r = c >= 0 ? s.top : s.bottom;
      return n.y < r + a;
    }
    if (e === "right")
      return n.x > (l >= 0 ? s.right : s.left) - a;
    if (e === "bottom")
      return n.y > (c >= 0 ? s.bottom : s.top) - a;
  }
  return p.element(i) ? p.element(t) ? (
    // the value is an element to use as a resize handle
    t === i
  ) : (
    // otherwise check if element matches value as selector
    be(i, t, o)
  ) : !1;
}
function Ar(e) {
  return e.isIe9 ? {
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
function $r(e) {
  let {
    iEvent: t,
    interaction: n
  } = e;
  if (n.prepared.name !== "resize" || !n.prepared.edges)
    return;
  const i = t, o = n.rect;
  n._rects = {
    start: I({}, o),
    corrected: I({}, o),
    previous: I({}, o),
    delta: {
      left: 0,
      right: 0,
      width: 0,
      top: 0,
      bottom: 0,
      height: 0
    }
  }, i.edges = n.prepared.edges, i.rect = n._rects.corrected, i.deltaRect = n._rects.delta;
}
function Hr(e) {
  let {
    iEvent: t,
    interaction: n
  } = e;
  if (n.prepared.name !== "resize" || !n.prepared.edges) return;
  const i = t, s = n.interactable.options.resize.invert, a = s === "reposition" || s === "negate", l = n.rect, {
    start: c,
    corrected: r,
    delta: f,
    previous: d
  } = n._rects;
  if (I(d, r), a) {
    if (I(r, l), s === "reposition") {
      if (r.top > r.bottom) {
        const m = r.top;
        r.top = r.bottom, r.bottom = m;
      }
      if (r.left > r.right) {
        const m = r.left;
        r.left = r.right, r.right = m;
      }
    }
  } else
    r.top = Math.min(l.top, c.bottom), r.bottom = Math.max(l.bottom, c.top), r.left = Math.min(l.left, c.right), r.right = Math.max(l.right, c.left);
  r.width = r.right - r.left, r.height = r.bottom - r.top;
  for (const m in r)
    f[m] = r[m] - d[m];
  i.edges = n.prepared.edges, i.rect = r, i.deltaRect = f;
}
function Lr(e) {
  let {
    iEvent: t,
    interaction: n
  } = e;
  if (n.prepared.name !== "resize" || !n.prepared.edges) return;
  const i = t;
  i.edges = n.prepared.edges, i.rect = n._rects.corrected, i.deltaRect = n._rects.delta;
}
function Qe(e) {
  let {
    iEvent: t,
    interaction: n
  } = e;
  if (n.prepared.name !== "resize" || !n.resizeAxes) return;
  const i = n.interactable.options, o = t;
  i.resize.square ? (n.resizeAxes === "y" ? o.delta.x = o.delta.y : o.delta.y = o.delta.x, o.axes = "xy") : (o.axes = n.resizeAxes, n.resizeAxes === "x" ? o.delta.y = 0 : n.resizeAxes === "y" && (o.delta.x = 0));
}
const lt = {
  id: "actions/resize",
  before: ["actions/drag"],
  install: Pr,
  listeners: {
    "interactions:new": (e) => {
      let {
        interaction: t
      } = e;
      t.resizeAxes = "xy";
    },
    "interactions:action-start": (e) => {
      $r(e), Qe(e);
    },
    "interactions:action-move": (e) => {
      Hr(e), Qe(e);
    },
    "interactions:action-end": Lr,
    "auto-start:check": Or
  },
  defaults: {
    square: !1,
    preserveAspectRatio: !1,
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
  getCursor(e) {
    let {
      edges: t,
      axis: n,
      name: i
    } = e;
    const o = lt.cursors;
    let s = null;
    if (n)
      s = o[i + n];
    else if (t) {
      let a = "";
      for (const l of ["top", "bottom", "left", "right"])
        t[l] && (a += l);
      s = o[a];
    }
    return s;
  },
  filterEventType: (e) => e.search("resize") === 0,
  defaultMargin: null
};
ut.use(lt);
var Wr = () => {
}, Br = () => {
}, Nr = (e) => {
  const t = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter((i) => {
    let [o, s] = i;
    return o in e || s in e;
  }), n = (i, o) => {
    const {
      range: s,
      limits: a = {
        left: -1 / 0,
        right: 1 / 0,
        top: -1 / 0,
        bottom: 1 / 0
      },
      offset: l = {
        x: 0,
        y: 0
      }
    } = e, c = {
      range: s,
      grid: e,
      x: null,
      y: null
    };
    for (const [r, f] of t) {
      const d = Math.round((i - l.x) / e[r]), m = Math.round((o - l.y) / e[f]);
      c[r] = Math.max(a.left, Math.min(a.right, d * e[r] + l.x)), c[f] = Math.max(a.top, Math.min(a.bottom, m * e[f] + l.y));
    }
    return c;
  };
  return n.grid = e, n.coordFields = t, n;
}, Fr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  edgeTarget: Wr,
  elements: Br,
  grid: Nr
});
const jr = {
  id: "snappers",
  install(e) {
    const {
      interactStatic: t
    } = e;
    t.snappers = I(t.snappers || {}, Fr), t.createSnapGrid = t.snappers.grid;
  }
};
class jn {
  constructor(t) {
    this.states = [], this.startOffset = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.startDelta = void 0, this.result = void 0, this.endResult = void 0, this.startEdges = void 0, this.edges = void 0, this.interaction = void 0, this.interaction = t, this.result = Kt(), this.edges = {
      left: !1,
      right: !1,
      top: !1,
      bottom: !1
    };
  }
  start(t, n) {
    let {
      phase: i
    } = t;
    const {
      interaction: o
    } = this, s = Xr(o);
    this.prepareStates(s), this.startEdges = I({}, o.edges), this.edges = I({}, this.startEdges), this.startOffset = Yr(o.rect, n), this.startDelta = {
      x: 0,
      y: 0
    };
    const a = this.fillArg({
      phase: i,
      pageCoords: n,
      preEnd: !1
    });
    return this.result = Kt(), this.startAll(a), this.result = this.setAll(a);
  }
  fillArg(t) {
    const {
      interaction: n
    } = this;
    return t.interaction = n, t.interactable = n.interactable, t.element = n.element, t.rect || (t.rect = n.rect), t.edges || (t.edges = this.startEdges), t.startOffset = this.startOffset, t;
  }
  startAll(t) {
    for (const n of this.states)
      n.methods.start && (t.state = n, n.methods.start(t));
  }
  setAll(t) {
    const {
      phase: n,
      preEnd: i,
      skipModifiers: o,
      rect: s,
      edges: a
    } = t;
    t.coords = I({}, t.pageCoords), t.rect = I({}, s), t.edges = I({}, a);
    const l = o ? this.states.slice(o) : this.states, c = Kt(t.coords, t.rect);
    for (const m of l) {
      var r;
      const {
        options: g
      } = m, b = I({}, t.coords);
      let C = null;
      (r = m.methods) != null && r.set && this.shouldDo(g, i, n) && (t.state = m, C = m.methods.set(t), Ce(t.edges, t.rect, {
        x: t.coords.x - b.x,
        y: t.coords.y - b.y
      })), c.eventProps.push(C);
    }
    I(this.edges, t.edges), c.delta.x = t.coords.x - t.pageCoords.x, c.delta.y = t.coords.y - t.pageCoords.y, c.rectDelta.left = t.rect.left - s.left, c.rectDelta.right = t.rect.right - s.right, c.rectDelta.top = t.rect.top - s.top, c.rectDelta.bottom = t.rect.bottom - s.bottom;
    const f = this.result.coords, d = this.result.rect;
    if (f && d) {
      const m = c.rect.left !== d.left || c.rect.right !== d.right || c.rect.top !== d.top || c.rect.bottom !== d.bottom;
      c.changed = m || f.x !== c.coords.x || f.y !== c.coords.y;
    }
    return c;
  }
  applyToInteraction(t) {
    const {
      interaction: n
    } = this, {
      phase: i
    } = t, o = n.coords.cur, s = n.coords.start, {
      result: a,
      startDelta: l
    } = this, c = a.delta;
    i === "start" && I(this.startDelta, a.delta);
    for (const [d, m] of [[s, l], [o, c]])
      d.page.x += m.x, d.page.y += m.y, d.client.x += m.x, d.client.y += m.y;
    const {
      rectDelta: r
    } = this.result, f = t.rect || n.rect;
    f.left += r.left, f.right += r.right, f.top += r.top, f.bottom += r.bottom, f.width = f.right - f.left, f.height = f.bottom - f.top;
  }
  setAndApply(t) {
    const {
      interaction: n
    } = this, {
      phase: i,
      preEnd: o,
      skipModifiers: s
    } = t, a = this.setAll(this.fillArg({
      preEnd: o,
      phase: i,
      pageCoords: t.modifiedCoords || n.coords.cur.page
    }));
    if (this.result = a, !a.changed && (!s || s < this.states.length) && n.interacting())
      return !1;
    if (t.modifiedCoords) {
      const {
        page: l
      } = n.coords.cur, c = {
        x: t.modifiedCoords.x - l.x,
        y: t.modifiedCoords.y - l.y
      };
      a.coords.x += c.x, a.coords.y += c.y, a.delta.x += c.x, a.delta.y += c.y;
    }
    this.applyToInteraction(t);
  }
  beforeEnd(t) {
    const {
      interaction: n,
      event: i
    } = t, o = this.states;
    if (!o || !o.length)
      return;
    let s = !1;
    for (const a of o) {
      t.state = a;
      const {
        options: l,
        methods: c
      } = a, r = c.beforeEnd && c.beforeEnd(t);
      if (r)
        return this.endResult = r, !1;
      s = s || !s && this.shouldDo(l, !0, t.phase, !0);
    }
    s && n.move({
      event: i,
      preEnd: !0
    });
  }
  stop(t) {
    const {
      interaction: n
    } = t;
    if (!this.states || !this.states.length)
      return;
    const i = I({
      states: this.states,
      interactable: n.interactable,
      element: n.element,
      rect: null
    }, t);
    this.fillArg(i);
    for (const o of this.states)
      i.state = o, o.methods.stop && o.methods.stop(i);
    this.states = null, this.endResult = null;
  }
  prepareStates(t) {
    this.states = [];
    for (let n = 0; n < t.length; n++) {
      const {
        options: i,
        methods: o,
        name: s
      } = t[n];
      this.states.push({
        options: i,
        methods: o,
        index: n,
        name: s
      });
    }
    return this.states;
  }
  restoreInteractionCoords(t) {
    let {
      interaction: {
        coords: n,
        rect: i,
        modification: o
      }
    } = t;
    if (!o.result) return;
    const {
      startDelta: s
    } = o, {
      delta: a,
      rectDelta: l
    } = o.result, c = [[n.start, s], [n.cur, a]];
    for (const [r, f] of c)
      r.page.x -= f.x, r.page.y -= f.y, r.client.x -= f.x, r.client.y -= f.y;
    i.left -= l.left, i.right -= l.right, i.top -= l.top, i.bottom -= l.bottom;
  }
  shouldDo(t, n, i, o) {
    return (
      // ignore disabled modifiers
      !(!t || t.enabled === !1 || // check if we require endOnly option to fire move before end
      o && !t.endOnly || // don't apply endOnly modifiers when not ending
      t.endOnly && !n || // check if modifier should run be applied on start
      i === "start" && !t.setStart)
    );
  }
  copyFrom(t) {
    this.startOffset = t.startOffset, this.startDelta = t.startDelta, this.startEdges = t.startEdges, this.edges = t.edges, this.states = t.states.map((n) => Rt(n)), this.result = Kt(I({}, t.result.coords), I({}, t.result.rect));
  }
  destroy() {
    for (const t in this)
      this[t] = null;
  }
}
function Kt(e, t) {
  return {
    rect: t,
    coords: e,
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
    changed: !0
  };
}
function Xr(e) {
  const t = e.interactable.options[e.prepared.name], n = t.modifiers;
  return n && n.length ? n : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map((i) => {
    const o = t[i];
    return o && o.enabled && {
      options: o,
      methods: o._methods
    };
  }).filter((i) => !!i);
}
function Yr(e, t) {
  return e ? {
    left: t.x - e.left,
    top: t.y - e.top,
    right: e.right - t.x,
    bottom: e.bottom - t.y
  } : {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  };
}
function mt(e, t) {
  const {
    defaults: n
  } = e, i = {
    start: e.start,
    set: e.set,
    beforeEnd: e.beforeEnd,
    stop: e.stop
  }, o = (s) => {
    const a = s || {};
    a.enabled = a.enabled !== !1;
    for (const c in n)
      c in a || (a[c] = n[c]);
    const l = {
      options: a,
      methods: i,
      name: t,
      enable: () => (a.enabled = !0, l),
      disable: () => (a.enabled = !1, l)
    };
    return l;
  };
  return t && typeof t == "string" && (o._defaults = n, o._methods = i), o;
}
function ge(e) {
  let {
    iEvent: t,
    interaction: n
  } = e;
  const i = n.modification.result;
  i && (t.modifiers = i.eventProps);
}
const qr = {
  id: "modifiers/base",
  before: ["actions"],
  install: (e) => {
    e.defaults.perAction.modifiers = [];
  },
  listeners: {
    "interactions:new": (e) => {
      let {
        interaction: t
      } = e;
      t.modification = new jn(t);
    },
    "interactions:before-action-start": (e) => {
      const {
        interaction: t
      } = e, n = e.interaction.modification;
      n.start(e, t.coords.start.page), t.edges = n.edges, n.applyToInteraction(e);
    },
    "interactions:before-action-move": (e) => {
      const {
        interaction: t
      } = e, {
        modification: n
      } = t, i = n.setAndApply(e);
      return t.edges = n.edges, i;
    },
    "interactions:before-action-end": (e) => {
      const {
        interaction: t
      } = e, {
        modification: n
      } = t, i = n.beforeEnd(e);
      return t.edges = n.startEdges, i;
    },
    "interactions:action-start": ge,
    "interactions:action-move": ge,
    "interactions:action-end": ge,
    "interactions:after-action-start": (e) => e.interaction.modification.restoreInteractionCoords(e),
    "interactions:after-action-move": (e) => e.interaction.modification.restoreInteractionCoords(e),
    "interactions:stop": (e) => e.interaction.modification.stop(e)
  }
}, Gr = {
  start(e) {
    const {
      state: t,
      rect: n,
      edges: i,
      pageCoords: o
    } = e;
    let {
      ratio: s,
      enabled: a
    } = t.options;
    const {
      equalDelta: l,
      modifiers: c
    } = t.options;
    s === "preserve" && (s = n.width / n.height), t.startCoords = I({}, o), t.startRect = I({}, n), t.ratio = s, t.equalDelta = l;
    const r = t.linkedEdges = {
      top: i.top || i.left && !i.bottom,
      left: i.left || i.top && !i.right,
      bottom: i.bottom || i.right && !i.top,
      right: i.right || i.bottom && !i.left
    };
    if (t.xIsPrimaryAxis = !!(i.left || i.right), t.equalDelta) {
      const d = (r.left ? 1 : -1) * (r.top ? 1 : -1);
      t.edgeSign = {
        x: d,
        y: d
      };
    } else
      t.edgeSign = {
        x: r.left ? -1 : 1,
        y: r.top ? -1 : 1
      };
    if (a !== !1 && I(i, r), !(c != null && c.length)) return;
    const f = new jn(e.interaction);
    f.copyFrom(e.interaction.modification), f.prepareStates(c), t.subModification = f, f.startAll({
      ...e
    });
  },
  set(e) {
    const {
      state: t,
      rect: n,
      coords: i
    } = e, {
      linkedEdges: o
    } = t, s = I({}, i), a = t.equalDelta ? Ur : Vr;
    if (I(e.edges, o), a(t, t.xIsPrimaryAxis, i, n), !t.subModification)
      return null;
    const l = I({}, n);
    Ce(o, l, {
      x: i.x - s.x,
      y: i.y - s.y
    });
    const c = t.subModification.setAll({
      ...e,
      rect: l,
      edges: o,
      pageCoords: i,
      prevCoords: i,
      prevRect: l
    }), {
      delta: r
    } = c;
    if (c.changed) {
      const f = Math.abs(r.x) > Math.abs(r.y);
      a(t, f, c.coords, c.rect), I(i, c.coords);
    }
    return c.eventProps;
  },
  defaults: {
    ratio: "preserve",
    equalDelta: !1,
    modifiers: [],
    enabled: !1
  }
};
function Ur(e, t, n) {
  let {
    startCoords: i,
    edgeSign: o
  } = e;
  t ? n.y = i.y + (n.x - i.x) * o.y : n.x = i.x + (n.y - i.y) * o.x;
}
function Vr(e, t, n, i) {
  let {
    startRect: o,
    startCoords: s,
    ratio: a,
    edgeSign: l
  } = e;
  if (t) {
    const c = i.width / a;
    n.y = s.y + (c - o.height) * l.y;
  } else {
    const c = i.height * a;
    n.x = s.x + (c - o.width) * l.x;
  }
}
var Kr = mt(Gr, "aspectRatio");
function Jr(e) {
  let {
    rect: t,
    startOffset: n,
    state: i,
    interaction: o,
    pageCoords: s
  } = e;
  const {
    options: a
  } = i, {
    elementRect: l
  } = a, c = I({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  }, a.offset || {});
  if (t && l) {
    const r = Dt(a.restriction, o, s);
    if (r) {
      const f = r.right - r.left - t.width, d = r.bottom - r.top - t.height;
      f < 0 && (c.left += f, c.right += f), d < 0 && (c.top += d, c.bottom += d);
    }
    c.left += n.left - t.width * l.left, c.top += n.top - t.height * l.top, c.right += n.right - t.width * (1 - l.right), c.bottom += n.bottom - t.height * (1 - l.bottom);
  }
  i.offset = c;
}
function Zr(e) {
  let {
    coords: t,
    interaction: n,
    state: i
  } = e;
  const {
    options: o,
    offset: s
  } = i, a = Dt(o.restriction, n, t);
  if (!a) return;
  const l = Ki(a);
  t.x = Math.max(Math.min(l.right - s.right, t.x), l.left + s.left), t.y = Math.max(Math.min(l.bottom - s.bottom, t.y), l.top + s.top);
}
function Dt(e, t, n) {
  return p.func(e) ? Yt(e, t.interactable, t.element, [n.x, n.y, t]) : Yt(e, t.interactable, t.element);
}
const Qr = {
  restriction: null,
  elementRect: null,
  offset: null,
  endOnly: !1,
  enabled: !1
}, ee = {
  start: Jr,
  set: Zr,
  defaults: Qr
};
var to = mt(ee, "restrict");
const Xn = {
  top: 1 / 0,
  left: 1 / 0,
  bottom: -1 / 0,
  right: -1 / 0
}, Yn = {
  top: -1 / 0,
  left: -1 / 0,
  bottom: 1 / 0,
  right: 1 / 0
};
function eo(e) {
  let {
    interaction: t,
    startOffset: n,
    state: i
  } = e;
  const {
    options: o
  } = i;
  let s;
  if (o) {
    const a = Dt(o.offset, t, t.coords.start.page);
    s = se(a);
  }
  s = s || {
    x: 0,
    y: 0
  }, i.offset = {
    top: s.y + n.top,
    left: s.x + n.left,
    bottom: s.y - n.bottom,
    right: s.x - n.right
  };
}
function no(e) {
  let {
    coords: t,
    edges: n,
    interaction: i,
    state: o
  } = e;
  const {
    offset: s,
    options: a
  } = o;
  if (!n)
    return;
  const l = I({}, t), c = Dt(a.inner, i, l) || {}, r = Dt(a.outer, i, l) || {};
  tn(c, Xn), tn(r, Yn), n.top ? t.y = Math.min(Math.max(r.top + s.top, l.y), c.top + s.top) : n.bottom && (t.y = Math.max(Math.min(r.bottom + s.bottom, l.y), c.bottom + s.bottom)), n.left ? t.x = Math.min(Math.max(r.left + s.left, l.x), c.left + s.left) : n.right && (t.x = Math.max(Math.min(r.right + s.right, l.x), c.right + s.right));
}
function tn(e, t) {
  for (const n of ["top", "left", "bottom", "right"])
    n in e || (e[n] = t[n]);
  return e;
}
const io = {
  inner: null,
  outer: null,
  offset: null,
  endOnly: !1,
  enabled: !1
}, Nt = {
  noInner: Xn,
  noOuter: Yn,
  start: eo,
  set: no,
  defaults: io
};
var ro = mt(Nt, "restrictEdges");
const oo = I({
  get elementRect() {
    return {
      top: 0,
      left: 0,
      bottom: 1,
      right: 1
    };
  },
  set elementRect(e) {
  }
}, ee.defaults), so = {
  start: ee.start,
  set: ee.set,
  defaults: oo
};
var ao = mt(so, "restrictRect");
const co = {
  width: -1 / 0,
  height: -1 / 0
}, lo = {
  width: 1 / 0,
  height: 1 / 0
};
function uo(e) {
  return Nt.start(e);
}
function fo(e) {
  const {
    interaction: t,
    state: n,
    rect: i,
    edges: o
  } = e, {
    options: s
  } = n;
  if (!o)
    return;
  const a = qe(Dt(s.min, t, e.coords)) || co, l = qe(Dt(s.max, t, e.coords)) || lo;
  n.options = {
    endOnly: s.endOnly,
    inner: I({}, Nt.noInner),
    outer: I({}, Nt.noOuter)
  }, o.top ? (n.options.inner.top = i.bottom - a.height, n.options.outer.top = i.bottom - l.height) : o.bottom && (n.options.inner.bottom = i.top + a.height, n.options.outer.bottom = i.top + l.height), o.left ? (n.options.inner.left = i.right - a.width, n.options.outer.left = i.right - l.width) : o.right && (n.options.inner.right = i.left + a.width, n.options.outer.right = i.left + l.width), Nt.set(e), n.options = s;
}
const ho = {
  min: null,
  max: null,
  endOnly: !1,
  enabled: !1
}, po = {
  start: uo,
  set: fo,
  defaults: ho
};
var go = mt(po, "restrictSize");
function mo(e) {
  const {
    interaction: t,
    interactable: n,
    element: i,
    rect: o,
    state: s,
    startOffset: a
  } = e, {
    options: l
  } = s, c = l.offsetWithOrigin ? yo(e) : {
    x: 0,
    y: 0
  };
  let r;
  if (l.offset === "startCoords")
    r = {
      x: t.coords.start.page.x,
      y: t.coords.start.page.y
    };
  else {
    const d = Yt(l.offset, n, i, [t]);
    r = se(d) || {
      x: 0,
      y: 0
    }, r.x += c.x, r.y += c.y;
  }
  const {
    relativePoints: f
  } = l;
  s.offsets = o && f && f.length ? f.map((d, m) => ({
    index: m,
    relativePoint: d,
    x: a.left - o.width * d.x + r.x,
    y: a.top - o.height * d.y + r.y
  })) : [{
    index: 0,
    relativePoint: null,
    x: r.x,
    y: r.y
  }];
}
function vo(e) {
  const {
    interaction: t,
    coords: n,
    state: i
  } = e, {
    options: o,
    offsets: s
  } = i, a = _e(t.interactable, t.element, t.prepared.name), l = I({}, n), c = [];
  o.offsetWithOrigin || (l.x -= a.x, l.y -= a.y);
  for (const f of s) {
    const d = l.x - f.x, m = l.y - f.y;
    for (let g = 0, b = o.targets.length; g < b; g++) {
      const C = o.targets[g];
      let k;
      p.func(C) ? k = C(d, m, t._proxy, f, g) : k = C, k && c.push({
        x: (p.number(k.x) ? k.x : d) + f.x,
        y: (p.number(k.y) ? k.y : m) + f.y,
        range: p.number(k.range) ? k.range : o.range,
        source: C,
        index: g,
        offset: f
      });
    }
  }
  const r = {
    target: null,
    inRange: !1,
    distance: 0,
    range: 0,
    delta: {
      x: 0,
      y: 0
    }
  };
  for (const f of c) {
    const d = f.range, m = f.x - l.x, g = f.y - l.y, b = oe(m, g);
    let C = b <= d;
    d === 1 / 0 && r.inRange && r.range !== 1 / 0 && (C = !1), (!r.target || (C ? (
      // is the closest target in range?
      r.inRange && d !== 1 / 0 ? (
        // the pointer is relatively deeper in this target
        b / d < r.distance / r.range
      ) : (
        // this target has Infinite range and the closest doesn't
        d === 1 / 0 && r.range !== 1 / 0 || // OR this target is closer that the previous closest
        b < r.distance
      )
    ) : (
      // The other is not in range and the pointer is closer to this target
      !r.inRange && b < r.distance
    ))) && (r.target = f, r.distance = b, r.range = d, r.inRange = C, r.delta.x = m, r.delta.y = g);
  }
  return r.inRange && (n.x = r.target.x, n.y = r.target.y), i.closest = r, r;
}
function yo(e) {
  const {
    element: t
  } = e.interaction;
  return se(Yt(e.state.options.origin, null, null, [t])) || _e(e.interactable, t, e.interaction.prepared.name);
}
const bo = {
  range: 1 / 0,
  targets: null,
  offset: null,
  offsetWithOrigin: !0,
  origin: null,
  relativePoints: null,
  endOnly: !1,
  enabled: !1
}, Re = {
  start: mo,
  set: vo,
  defaults: bo
};
var xo = mt(Re, "snap");
function wo(e) {
  const {
    state: t,
    edges: n
  } = e, {
    options: i
  } = t;
  if (!n)
    return null;
  e.state = {
    options: {
      targets: null,
      relativePoints: [{
        x: n.left ? 0 : 1,
        y: n.top ? 0 : 1
      }],
      offset: i.offset || "self",
      origin: {
        x: 0,
        y: 0
      },
      range: i.range
    }
  }, t.targetFields = t.targetFields || [["width", "height"], ["x", "y"]], Re.start(e), t.offsets = e.state.offsets, e.state = t;
}
function So(e) {
  const {
    interaction: t,
    state: n,
    coords: i
  } = e, {
    options: o,
    offsets: s
  } = n, a = {
    x: i.x - s[0].x,
    y: i.y - s[0].y
  };
  n.options = I({}, o), n.options.targets = [];
  for (const c of o.targets || []) {
    let r;
    if (p.func(c) ? r = c(a.x, a.y, t) : r = c, !!r) {
      for (const [f, d] of n.targetFields)
        if (f in r || d in r) {
          r.x = r[f], r.y = r[d];
          break;
        }
      n.options.targets.push(r);
    }
  }
  const l = Re.set(e);
  return n.options = o, l;
}
const Eo = {
  range: 1 / 0,
  targets: null,
  offset: null,
  endOnly: !1,
  enabled: !1
}, ne = {
  start: wo,
  set: So,
  defaults: Eo
};
var zo = mt(ne, "snapSize");
function Io(e) {
  const {
    edges: t
  } = e;
  return t ? (e.state.targetFields = e.state.targetFields || [[t.left ? "left" : "right", t.top ? "top" : "bottom"]], ne.start(e)) : null;
}
const To = {
  start: Io,
  set: ne.set,
  defaults: I(Rt(ne.defaults), {
    targets: void 0,
    range: void 0,
    offset: {
      x: 0,
      y: 0
    }
  })
};
var Do = mt(To, "snapEdges");
const Lt = () => {
};
Lt._defaults = {};
var me = {
  aspectRatio: Kr,
  restrictEdges: ro,
  restrict: to,
  restrictRect: ao,
  restrictSize: go,
  snapEdges: Do,
  snap: xo,
  snapSize: zo,
  spring: Lt,
  avoid: Lt,
  transform: Lt,
  rubberband: Lt
};
const Mo = {
  id: "modifiers",
  install(e) {
    const {
      interactStatic: t
    } = e;
    e.usePlugin(qr), e.usePlugin(jr), t.modifiers = me;
    for (const n in me) {
      const {
        _defaults: i,
        _methods: o
      } = me[n];
      i._methods = o, e.defaults.perAction[n] = i;
    }
  }
};
ut.use(Mo);
var Ft = /* @__PURE__ */ function(e) {
  return e.touchAction = "touchAction", e.boxSizing = "boxSizing", e.noListeners = "noListeners", e;
}(Ft || {});
const Se = "[interact.js] ", Ee = {
  touchAction: "https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action",
  boxSizing: "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"
};
function Co(e) {
  let {
    logger: t
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    Interactable: n,
    defaults: i
  } = e;
  e.logger = t || console, i.base.devTools = {
    ignore: {}
  }, n.prototype.devTools = function(s) {
    return s ? (I(this.options.devTools, s), this) : this.options.devTools;
  };
  const {
    _onOff: o
  } = n.prototype;
  n.prototype._onOff = function(s, a, l, c, r) {
    if (p.string(this.target) || this.target.addEventListener)
      return o.call(this, s, a, l, c, r);
    p.object(a) && !p.array(a) && (c = l, l = null);
    const f = Et(a, l, r);
    for (const d in f)
      qt(d, e.actions) || e.logger.warn(Se + `Can't add native "${d}" event listener to target without \`addEventListener(type, listener, options)\` prop.`);
    return o.call(this, s, f, c);
  };
}
const en = [{
  name: Ft.touchAction,
  perform(e) {
    let {
      element: t
    } = e;
    return !!t && !_o(t, "touchAction", /pan-|pinch|none/);
  },
  getInfo(e) {
    let {
      element: t
    } = e;
    return [t, Ee.touchAction];
  },
  text: `Consider adding CSS "touch-action: none" to this element
`
}, {
  name: Ft.boxSizing,
  perform(e) {
    const {
      element: t
    } = e;
    return e.prepared.name === "resize" && t instanceof q.HTMLElement && !qn(t, "boxSizing", /border-box/);
  },
  text: 'Consider adding CSS "box-sizing: border-box" to this resizable element',
  getInfo(e) {
    let {
      element: t
    } = e;
    return [t, Ee.boxSizing];
  }
}, {
  name: Ft.noListeners,
  perform(e) {
    var t;
    const n = e.prepared.name;
    return !(((t = e.interactable) == null ? void 0 : t.events.types[`${n}move`]) || []).length;
  },
  getInfo(e) {
    return [e.prepared.name, e.interactable];
  },
  text: "There are no listeners set for this action"
}];
function qn(e, t, n) {
  const i = e.style[t] || pt.getComputedStyle(e)[t];
  return n.test((i || "").toString());
}
function _o(e, t, n) {
  let i = e;
  for (; p.element(i); ) {
    if (qn(i, t, n))
      return !0;
    i = gt(i);
  }
  return !1;
}
const Po = "dev-tools", Oo = {
  id: Po,
  install: Co,
  listeners: {
    "interactions:action-start": (e, t) => {
      let {
        interaction: n
      } = e;
      for (const i of en) {
        const o = n.interactable && n.interactable.options;
        !(o && o.devTools && o.devTools.ignore[i.name]) && i.perform(n) && t.logger.warn(Se + i.text, ...i.getInfo(n));
      }
    }
  },
  checks: en,
  CheckName: Ft,
  links: Ee,
  prefix: Se
};
ut.use(Oo);
function Ro(e) {
  let t = 0, n;
  for (let i = 0, o = e.length; i < o; i++)
    n = e[i].y + e[i].h, n > t && (t = n);
  return t;
}
function St(e) {
  return (e || []).map((t) => ({ ...t }));
}
function Gn(e, t) {
  return !(e === t || e.x + e.w <= t.x || e.x >= t.x + t.w || e.y + e.h <= t.y || e.y >= t.y + t.h);
}
function Wt(e, t, n) {
  const i = Vn(e), o = Kn(e), s = Array(e.length);
  for (let a = 0, l = o.length; a < l; a++) {
    let c = o[a];
    c.static || (c = ko(i, c, t, n), i.push(c)), s[e.indexOf(c)] = c, delete c.moved;
  }
  return s;
}
function ko(e, t, n, i) {
  if (n)
    for (; t.y > 0 && !jt(e, t); )
      t.y--;
  else if (i) {
    const s = i[t.i].y;
    for (; t.y > s && !jt(e, t); )
      t.y--;
  }
  let o;
  for (; o = jt(e, t); )
    t.y = o.y + o.h;
  return t;
}
function Ao(e, t) {
  const n = Vn(e);
  for (let i = 0, o = e.length; i < o; i++) {
    const s = e[i];
    if (s.x + s.w > t.cols && (s.x = t.cols - s.w), s.x < 0 && (s.x = 0, s.w = t.cols), !s.static) n.push(s);
    else
      for (; jt(n, s); )
        s.y++;
  }
  return e;
}
function nn(e, t) {
  for (let n = 0, i = e.length; n < i; n++)
    if (e[n].i === t) return e[n];
}
function jt(e, t) {
  for (let n = 0, i = e.length; n < i; n++)
    if (Gn(e[n], t)) return e[n];
}
function Un(e, t) {
  return e.filter((n) => Gn(n, t));
}
function Vn(e) {
  return e.filter((t) => t.static);
}
function ze(e, t, n, i, o, s) {
  if (t.static) return e;
  const a = t.x, l = t.y, c = i && t.y > i;
  typeof n == "number" && (t.x = n), typeof i == "number" && (t.y = i), t.moved = !0;
  let r = Kn(e);
  c && (r = r.reverse());
  const f = Un(r, t);
  if (s && f.length)
    return t.x = a, t.y = l, t.moved = !1, e;
  for (let d = 0, m = f.length; d < m; d++) {
    const g = f[d];
    g.moved || t.y > g.y && t.y - g.y > g.h / 4 || (g.static ? e = rn(e, g, t, o) : e = rn(e, t, g, o));
  }
  return e;
}
function rn(e, t, n, i) {
  if (i) {
    const s = {
      x: n.x,
      y: n.y,
      w: n.w,
      h: n.h,
      i: "-1"
    };
    if (s.y = Math.max(t.y - n.h, 0), !jt(e, s))
      return ze(e, n, void 0, s.y, !1);
  }
  return ze(e, n, void 0, n.y + 1, !1);
}
function $o(e, t, n, i) {
  const o = `translate3d(${t}px,${e}px, 0)`;
  return {
    transform: o,
    WebkitTransform: o,
    MozTransform: o,
    msTransform: o,
    OTransform: o,
    width: `${n}px`,
    height: `${i}px`,
    position: "absolute"
  };
}
function Ho(e, t, n, i) {
  const o = `translate3d(${t * -1}px,${e}px, 0)`;
  return {
    transform: o,
    WebkitTransform: o,
    MozTransform: o,
    msTransform: o,
    OTransform: o,
    width: `${n}px`,
    height: `${i}px`,
    position: "absolute"
  };
}
function Lo(e, t, n, i) {
  return {
    top: `${e}px`,
    left: `${t}px`,
    width: `${n}px`,
    height: `${i}px`,
    position: "absolute"
  };
}
function Wo(e, t, n, i) {
  return {
    top: `${e}px`,
    right: `${t}px`,
    width: `${n}px`,
    height: `${i}px`,
    position: "absolute"
  };
}
function Kn(e) {
  return [].concat(e).sort((t, n) => t.y === n.y && t.x === n.x ? 0 : t.y > n.y || t.y === n.y && t.x > n.x ? 1 : -1);
}
function Bo(e, t) {
  t = t || "Layout";
  const n = ["x", "y", "w", "h"], i = [];
  if (!Array.isArray(e)) throw new Error(`${t} must be an array!`);
  for (let o = 0, s = e.length; o < s; o++) {
    const a = e[o];
    for (let l = 0; l < n.length; l++)
      if (typeof a[n[l]] != "number")
        throw new Error(`VueGridLayout: ${t}[${o}].${n[l]} must be a number!`);
    if (a.i === void 0 || a.i === null)
      throw new Error(`VueGridLayout: ${t}[${o}].i cannot be null!`);
    if (typeof a.i != "number" && typeof a.i != "string")
      throw new Error(`VueGridLayout: ${t}[${o}].i must be a string or number!`);
    if (i.indexOf(a.i) >= 0)
      throw new Error(`VueGridLayout: ${t}[${o}].i must be unique!`);
    if (i.push(a.i), a.static !== void 0 && typeof a.static != "boolean")
      throw new Error(`VueGridLayout: ${t}[${o}].static must be a boolean!`);
  }
}
function on(e) {
  return No(e);
}
function No(e) {
  const t = e.target.offsetParent || document.body, n = e.offsetParent === document.body ? { left: 0, top: 0 } : t.getBoundingClientRect(), i = e.clientX + t.scrollLeft - n.left, o = e.clientY + t.scrollTop - n.top;
  return { x: i, y: o };
}
function sn(e, t, n, i) {
  return Fo(e) ? {
    deltaX: n - e,
    deltaY: i - t,
    lastX: e,
    lastY: t,
    x: n,
    y: i
  } : {
    deltaX: 0,
    deltaY: 0,
    lastX: n,
    lastY: i,
    x: n,
    y: i
  };
}
function Fo(e) {
  return typeof e == "number" && !Number.isNaN(e);
}
function jo(e, t) {
  const n = Zn(e);
  let i = n[0];
  for (let o = 1, s = n.length; o < s; o++) {
    const a = n[o];
    t > e[a] && (i = a);
  }
  return i;
}
function Jn(e, t) {
  if (!t[e])
    throw new Error(`ResponsiveGridLayout: \`cols\` entry for breakpoint ${e} is missing!`);
  return t[e];
}
function Xo(e, t, n, i, o, s) {
  if (t[i]) return St(t[i]);
  let a = e;
  const l = Zn(n), c = l.slice(l.indexOf(i));
  for (let r = 0, f = c.length; r < f; r++) {
    const d = c[r];
    if (t[d]) {
      a = t[d];
      break;
    }
  }
  return a = St(a || []), Wt(Ao(a, { cols: o }), s);
}
function Zn(e) {
  return Object.keys(e).sort((n, i) => e[n] - e[i]);
}
const Qn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, o] of t)
    n[i] = o;
  return n;
}, Yo = ["id"], qo = {
  __name: "grid-item",
  props: {
    i: {
      required: !0
    },
    x: {
      type: Number,
      required: !0
    },
    y: {
      type: Number,
      required: !0
    },
    w: {
      type: Number,
      required: !0
    },
    h: {
      type: Number,
      required: !0
    },
    minW: {
      type: Number,
      required: !1,
      default: 1
    },
    minH: {
      type: Number,
      required: !1,
      default: 1
    },
    maxW: {
      type: Number,
      required: !1,
      default: 1 / 0
    },
    maxH: {
      type: Number,
      required: !1,
      default: 1 / 0
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
      required: !1,
      default: null
    },
    isResizable: {
      type: Boolean,
      required: !1,
      default: null
    },
    isBounded: {
      type: Boolean,
      required: !1,
      default: null
    },
    // useCssTransforms: {
    //   type: Boolean,
    //   required: true
    // },
    static: {
      type: Boolean,
      required: !1,
      default: !1
    },
    dragIgnoreFrom: {
      type: String,
      required: !1,
      default: "a, button"
    },
    dragAllowFrom: {
      type: String,
      required: !1,
      default: null
    },
    resizeIgnoreFrom: {
      type: String,
      required: !1,
      default: "a, button"
    },
    preserveAspectRatio: {
      type: Boolean,
      required: !1,
      default: !1
    },
    dragOption: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    resizeOption: {
      type: Object,
      required: !1,
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
  setup(e, { expose: t, emit: n }) {
    const i = e, o = n, s = {
      el: void 0,
      calcXY: O
    };
    t(s);
    const a = We("emitter"), l = We("gridLayout");
    let c;
    const r = pn({
      cols: 1,
      containerWidth: 100,
      rowHeight: 30,
      margin: [10, 10],
      maxRows: 1 / 0,
      draggable: null,
      resizable: null,
      bounded: null,
      transformScale: 1,
      useCssTransforms: !0,
      useStyleCursor: !0,
      isDragging: !1,
      dragging: null,
      isResizing: !1,
      resizing: null,
      lastX: NaN,
      lastY: NaN,
      lastW: NaN,
      lastH: NaN,
      style: {},
      dragEventSet: !1,
      resizeEventSet: !1,
      previousW: null,
      previousH: null,
      previousX: null,
      previousY: null,
      innerX: i.x,
      innerY: i.y,
      innerW: i.w,
      innerH: i.h
    }), f = kt(() => ({
      "vue-resizable": J(d),
      static: i.static,
      resizing: r.isResizing,
      "vue-draggable-dragging": r.isDragging,
      cssTransforms: r.useCssTransforms,
      "render-rtl": J(g),
      "disable-userselect": r.isDragging,
      // 'no-touch': unref(isAndroid) && unref(draggableOrResizableAndNotStatic),
      "no-touch": J(m)
    })), d = kt(() => r.resizable && !i.static), m = kt(() => (r.draggable || r.resizable) && !i.static), g = kt(() => l.props.isMirrored), b = kt(() => J(g) ? "vue-resizable-handle vue-rtl-resizable-handle" : "vue-resizable-handle");
    function C() {
      a.on("updateWidth", vt), a.on("setDraggable", k), a.on("setResizable", A), a.on("setBounded", S), a.on("setTransformScale", _), a.on("setRowHeight", v), a.on("setMaxRows", u), a.on("directionchange", w), a.on("setColNum", y);
    }
    C(), gn(() => {
      a.off("updateWidth", vt), a.off("setDraggable", k), a.off("setResizable", A), a.off("setBounded", S), a.off("setTransformScale", _), a.off("setRowHeight", v), a.off("setMaxRows", u), a.off("directionchange", w), a.off("setColNum", y), c && c.unset();
    }), mn(() => {
      const h = { ...l.props, ...l.state };
      h.responsive && h.lastBreakpoint ? r.cols = Jn(h.lastBreakpoint, h.cols) : r.cols = h.colNum, r.rowHeight = h.rowHeight, r.containerWidth = h.width !== null ? h.width : 100, r.margin = h.margin !== void 0 ? h.margin : [10, 10], r.maxRows = h.maxRows, i.isDraggable === null ? r.draggable = h.isDraggable : r.draggable = i.isDraggable, i.isResizable === null ? r.resizable = h.isResizable : r.resizable = i.isResizable, i.isBounded === null ? r.bounded = h.isBounded : r.bounded = i.isBounded, r.transformScale = h.transformScale, r.useCssTransforms = h.useCssTransforms, r.useStyleCursor = h.useStyleCursor, T();
    }), W(() => i.isDraggable, () => {
      r.draggable = i.isDraggable;
    }), W(() => i.static, () => {
      yt(), tt();
    }), W(() => r.draggable, () => {
      yt();
    }), W(() => i.isResizable, () => {
      r.resizable = i.isResizable;
    }), W(() => i.isBounded, () => {
      r.bounded = i.isBounded;
    }), W(() => r.resizable, () => {
      tt();
    }), W(() => r.rowHeight, () => {
      T(), j();
    }), W(() => r.cols, () => {
      tt(), T(), j();
    }), W(() => r.containerWidth, () => {
      tt(), T(), j();
    }), W(() => i.x, (h) => {
      r.innerX = h, T();
    }), W(() => i.y, (h) => {
      r.innerY = h, T();
    }), W(() => i.h, (h) => {
      r.innerH = h, T();
    }), W(() => i.w, (h) => {
      r.innerW = h, T();
    }), W(g, () => {
      tt(), T();
    }), W(() => i.minH, () => {
      tt();
    }), W(() => i.maxH, () => {
      tt();
    }), W(() => i.minW, () => {
      tt();
    }), W(() => i.maxW, () => {
      tt();
    }), W(() => l.props.margin, (h) => {
      !h || Number(h[0]) === Number(r.margin[0]) && Number(h[1]) === Number(r.margin[1]) || (r.margin = h.map((R) => Number(R) || 0), T(), j());
    });
    function k(h) {
      i.isDraggable === null && (r.draggable = h);
    }
    function A(h) {
      i.isResizable === null && (r.resizable = h);
    }
    function S(h) {
      i.isBounded === null && (r.bounded = h);
    }
    function _(h) {
      r.transformScale = h;
    }
    function v(h) {
      r.rowHeight = h;
    }
    function u(h) {
      r.maxRows = h;
    }
    function w() {
      T();
    }
    function y(h) {
      r.cols = parseInt(h);
    }
    function T() {
      i.x + i.w > r.cols ? (r.innerX = 0, r.innerW = i.w > r.cols ? r.cols : i.w) : (r.innerX = i.x, r.innerW = i.w);
      const h = D(r.innerX, r.innerY, r.innerW, r.innerH);
      r.isDragging && (h.top = r.dragging.top, J(g) ? h.right = r.dragging.left : h.left = r.dragging.left), r.isResizing && (h.width = r.resizing.width, h.height = r.resizing.height);
      let R;
      r.useCssTransforms ? J(g) ? R = Ho(h.top, h.right, h.width, h.height) : R = $o(h.top, h.left, h.width, h.height) : J(g) ? R = Wo(h.top, h.right, h.width, h.height) : R = Lo(h.top, h.left, h.width, h.height), r.style = R;
    }
    function j() {
      const h = {};
      for (const R of ["width", "height"]) {
        const X = r.style[R].match(/^(\d+)px$/);
        if (!X) return;
        h[R] = X[1];
      }
      o("container-resized", i.i, i.h, i.w, h.height, h.width);
    }
    function H(h) {
      if (i.static) return;
      const R = on(h);
      if (R == null) return;
      const { x: N, y: X } = R, E = { width: 0, height: 0 };
      let z;
      switch (h.type) {
        case "resizestart": {
          tt(), r.previousW = r.innerW, r.previousH = r.innerH, z = D(r.innerX, r.innerY, r.innerW, r.innerH), E.width = z.width, E.height = z.height, r.resizing = E, r.isResizing = !0;
          break;
        }
        case "resizemove": {
          const U = sn(r.lastW, r.lastH, N, X);
          J(g) ? E.width = r.resizing.width - U.deltaX / r.transformScale : E.width = r.resizing.width + U.deltaX / r.transformScale, E.height = r.resizing.height + U.deltaY / r.transformScale, r.resizing = E;
          break;
        }
        case "resizeend": {
          z = D(r.innerX, r.innerY, r.innerW, r.innerH), E.width = z.width, E.height = z.height, r.resizing = null, r.isResizing = !1;
          break;
        }
      }
      T(), z = Mt(E.height, E.width), z.w < i.minW && (z.w = i.minW), z.w > i.maxW && (z.w = i.maxW), z.h < i.minH && (z.h = i.minH), z.h > i.maxH && (z.h = i.maxH), z.h < 1 && (z.h = 1), z.w < 1 && (z.w = 1), r.lastW = N, r.lastH = X, (r.innerW !== z.w || r.innerH !== z.h) && o("resize", i.i, z.h, z.w, E.height, E.width), h.type === "resizeend" && (r.previousW !== r.innerW || r.previousH !== r.innerH) && o("resized", i.i, z.h, z.w, E.height, E.width), a.emit("resizeEvent", [
        h.type,
        i.i,
        r.innerX,
        r.innerY,
        z.h,
        z.w
      ]);
    }
    function P(h) {
      if (i.static || r.isResizing) return;
      const R = on(h);
      if (R === null) return;
      const { x: N, y: X } = R, E = { top: 0, left: 0 };
      switch (h.type) {
        case "dragstart": {
          r.previousX = r.innerX, r.previousY = r.innerY;
          const U = h.target.offsetParent.getBoundingClientRect(), x = h.target.getBoundingClientRect(), $ = x.left / r.transformScale, B = U.left / r.transformScale, Z = x.right / r.transformScale, nt = U.right / r.transformScale, it = x.top / r.transformScale, rt = U.top / r.transformScale;
          J(g) ? E.left = (Z - nt) * -1 : E.left = $ - B, E.top = it - rt, r.dragging = E, r.isDragging = !0;
          break;
        }
        case "dragend": {
          if (!r.isDragging) return;
          const U = h.target.offsetParent.getBoundingClientRect(), x = h.target.getBoundingClientRect(), $ = x.left / r.transformScale, B = U.left / r.transformScale, Z = x.right / r.transformScale, nt = U.right / r.transformScale, it = x.top / r.transformScale, rt = U.top / r.transformScale;
          J(g) ? E.left = (Z - nt) * -1 : E.left = $ - B, E.top = it - rt, r.dragging = null, r.isDragging = !1;
          break;
        }
        case "dragmove": {
          const U = sn(r.lastX, r.lastY, N, X);
          if (J(g) ? E.left = r.dragging.left - U.deltaX / r.transformScale : E.left = r.dragging.left + U.deltaX / r.transformScale, E.top = r.dragging.top + U.deltaY / r.transformScale, r.bounded) {
            const x = h.target.offsetParent.clientHeight - Y(i.h, r.rowHeight, r.margin[1]);
            E.top = K(E.top, 0, x);
            const $ = L(), B = r.containerWidth - Y(i.w, $, r.margin[0]);
            E.left = K(E.left, 0, B);
          }
          r.dragging = E;
          break;
        }
      }
      T();
      let z;
      J(g), z = O(E.top, E.left), r.lastX = N, r.lastY = X, (r.innerX !== z.x || r.innerY !== z.y) && o("move", i.i, z.x, z.y), h.type === "dragend" && (r.previousX !== r.innerX || r.previousY !== r.innerY) && o("moved", i.i, z.x, z.y), a.emit("dragEvent", [
        h.type,
        i.i,
        z.x,
        z.y,
        r.innerH,
        r.innerW
      ]);
    }
    function D(h, R, N, X) {
      const E = L();
      let z;
      return J(g) ? z = {
        right: Math.round(E * h + (h + 1) * r.margin[0]),
        top: Math.round(r.rowHeight * R + (R + 1) * r.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constriants;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes deopt
        width: N === 1 / 0 ? N : Math.round(E * N + Math.max(0, N - 1) * r.margin[0]),
        height: X === 1 / 0 ? X : Math.round(r.rowHeight * X + Math.max(0, X - 1) * r.margin[1])
      } : z = {
        left: Math.round(E * h + (h + 1) * r.margin[0]),
        top: Math.round(r.rowHeight * R + (R + 1) * r.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constriants;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes deopt
        width: N === 1 / 0 ? N : Math.round(E * N + Math.max(0, N - 1) * r.margin[0]),
        height: X === 1 / 0 ? X : Math.round(r.rowHeight * X + Math.max(0, X - 1) * r.margin[1])
      }, z;
    }
    function O(h, R) {
      const N = L();
      let X = Math.round((R - r.margin[0]) / (N + r.margin[0])), E = Math.round((h - r.margin[1]) / (r.rowHeight + r.margin[1]));
      return X = Math.max(Math.min(X, r.cols - r.innerW), 0), E = Math.max(Math.min(E, r.maxRows - r.innerH), 0), { x: X, y: E };
    }
    function L() {
      return (r.containerWidth - r.margin[0] * (r.cols + 1)) / r.cols;
    }
    function Y(h, R, N) {
      return Number.isFinite(h) ? Math.round(
        R * h + Math.max(0, h - 1) * N
      ) : h;
    }
    function K(h, R, N) {
      return Math.max(Math.min(h, N), R);
    }
    function Mt(h, R, N = !1) {
      const X = L();
      let E = Math.round((R + r.margin[0]) / (X + r.margin[0])), z = 0;
      return N ? z = Math.ceil((h + r.margin[1]) / (r.rowHeight + r.margin[1])) : z = Math.round((h + r.margin[1]) / (r.rowHeight + r.margin[1])), E = Math.max(Math.min(E, r.cols - r.innerX), 0), z = Math.max(Math.min(z, r.maxRows - r.innerY), 0), { w: E, h: z };
    }
    function vt(h, R) {
      r.containerWidth = h, R != null && (r.cols = R);
    }
    function yt() {
      if (c == null && (c = ut(s.el), r.useStyleCursor || c.styleCursor(!1)), r.draggable && !i.static) {
        const h = {
          ignoreFrom: i.dragIgnoreFrom,
          allowFrom: i.dragAllowFrom,
          ...i.dragOption
        };
        c.draggable(h), r.dragEventSet || (r.dragEventSet = !0, c.on("dragstart dragmove dragend", (R) => {
          P(R);
        }));
      } else
        c.draggable({
          enabled: !1
        });
    }
    function tt() {
      if (c == null && (c = ut(s.el), r.useStyleCursor || c.styleCursor(!1)), r.resizable && !i.static) {
        const h = D(0, 0, i.maxW, i.maxH), R = D(0, 0, i.minW, i.minH), N = {
          // allowFrom: "." + unref(resizableHandleClass).trim().replace(" ", "."),
          edges: {
            left: !1,
            right: `.${J(b).trim().replace(" ", ".")}`,
            bottom: `.${J(b).trim().replace(" ", ".")}`,
            top: !1
          },
          ignoreFrom: i.resizeIgnoreFrom,
          restrictSize: {
            min: {
              height: R.height * r.transformScale,
              width: R.width * r.transformScale
            },
            max: {
              height: h.height * r.transformScale,
              width: h.width * r.transformScale
            }
          },
          ...i.resizeOption
        };
        i.preserveAspectRatio && (N.modifiers = [
          ut.modifiers.aspectRatio({
            ratio: "preserve"
          })
        ]), c.resizable(N), r.resizeEventSet || (r.resizeEventSet = !0, c.on("resizestart resizemove resizeend", (X) => {
          H(X);
        }));
      } else
        c.resizable({
          enabled: !1
        });
    }
    function ce(h) {
      s.el = h;
    }
    return (h, R) => (ve(), ye("div", {
      ref: ce,
      class: ue(["vue-grid-item", f.value]),
      style: vn(r.style),
      id: e.i,
      key: e.i
    }, [
      yn(h.$slots, "default", {
        class: ue({ rtl: g.value })
      }, void 0, !0),
      d.value ? (ve(), ye("span", {
        key: 0,
        class: ue(b.value)
      }, null, 2)) : hi("", !0)
    ], 14, Yo));
  }
}, ti = /* @__PURE__ */ Qn(qo, [["__scopeId", "data-v-99aff433"]]);
function Go(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ei = { exports: {} }, Uo = ei.exports = {};
Uo.forEach = function(e, t) {
  for (var n = 0; n < e.length; n++) {
    var i = t(e[n]);
    if (i)
      return i;
  }
};
var ni = ei.exports, Vo = function(e) {
  var t = e.stateHandler.getState;
  function n(a) {
    var l = t(a);
    return l && !!l.isDetectable;
  }
  function i(a) {
    t(a).isDetectable = !0;
  }
  function o(a) {
    return !!t(a).busy;
  }
  function s(a, l) {
    t(a).busy = !!l;
  }
  return {
    isDetectable: n,
    markAsDetectable: i,
    isBusy: o,
    markBusy: s
  };
}, Ko = function(e) {
  var t = {};
  function n(a) {
    var l = e.get(a);
    return l === void 0 ? [] : t[l] || [];
  }
  function i(a, l) {
    var c = e.get(a);
    t[c] || (t[c] = []), t[c].push(l);
  }
  function o(a, l) {
    for (var c = n(a), r = 0, f = c.length; r < f; ++r)
      if (c[r] === l) {
        c.splice(r, 1);
        break;
      }
  }
  function s(a) {
    var l = n(a);
    l && (l.length = 0);
  }
  return {
    get: n,
    add: i,
    removeListener: o,
    removeAllListeners: s
  };
}, Jo = function() {
  var e = 1;
  function t() {
    return e++;
  }
  return {
    generate: t
  };
}, Zo = function(e) {
  var t = e.idGenerator, n = e.stateHandler.getState;
  function i(s) {
    var a = n(s);
    return a && a.id !== void 0 ? a.id : null;
  }
  function o(s) {
    var a = n(s);
    if (!a)
      throw new Error("setId required the element to have a resize detection state.");
    var l = t.generate();
    return a.id = l, l;
  }
  return {
    get: i,
    set: o
  };
}, Qo = function(e) {
  function t() {
  }
  var n = {
    log: t,
    warn: t,
    error: t
  };
  if (!e && window.console) {
    var i = function(o, s) {
      o[s] = function() {
        var l = console[s];
        if (l.apply)
          l.apply(console, arguments);
        else
          for (var c = 0; c < arguments.length; c++)
            l(arguments[c]);
      };
    };
    i(n, "log"), i(n, "warn"), i(n, "error");
  }
  return n;
}, ii = { exports: {} }, ri = ii.exports = {};
ri.isIE = function(e) {
  function t() {
    var i = navigator.userAgent.toLowerCase();
    return i.indexOf("msie") !== -1 || i.indexOf("trident") !== -1 || i.indexOf(" edge/") !== -1;
  }
  if (!t())
    return !1;
  if (!e)
    return !0;
  var n = function() {
    var i, o = 3, s = document.createElement("div"), a = s.getElementsByTagName("i");
    do
      s.innerHTML = "<!--[if gt IE " + ++o + "]><i></i><![endif]-->";
    while (a[0]);
    return o > 4 ? o : i;
  }();
  return e === n;
};
ri.isLegacyOpera = function() {
  return !!window.opera;
};
var oi = ii.exports, si = { exports: {} }, ts = si.exports = {};
ts.getOption = es;
function es(e, t, n) {
  var i = e[t];
  return i == null && n !== void 0 ? n : i;
}
var ns = si.exports, an = ns, is = function(t) {
  t = t || {};
  var n = t.reporter, i = an.getOption(t, "async", !0), o = an.getOption(t, "auto", !0);
  o && !i && (n && n.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."), i = !0);
  var s = cn(), a, l = !1;
  function c(b, C) {
    !l && o && i && s.size() === 0 && d(), s.add(b, C);
  }
  function r() {
    for (l = !0; s.size(); ) {
      var b = s;
      s = cn(), b.process();
    }
    l = !1;
  }
  function f(b) {
    l || (b === void 0 && (b = i), a && (m(a), a = null), b ? d() : r());
  }
  function d() {
    a = g(r);
  }
  function m(b) {
    var C = clearTimeout;
    return C(b);
  }
  function g(b) {
    var C = function(k) {
      return setTimeout(k, 0);
    };
    return C(b);
  }
  return {
    add: c,
    force: f
  };
};
function cn() {
  var e = {}, t = 0, n = 0, i = 0;
  function o(l, c) {
    c || (c = l, l = 0), l > n ? n = l : l < i && (i = l), e[l] || (e[l] = []), e[l].push(c), t++;
  }
  function s() {
    for (var l = i; l <= n; l++)
      for (var c = e[l], r = 0; r < c.length; r++) {
        var f = c[r];
        f();
      }
  }
  function a() {
    return t;
  }
  return {
    add: o,
    process: s,
    size: a
  };
}
var ke = "_erd";
function rs(e) {
  return e[ke] = {}, ai(e);
}
function ai(e) {
  return e[ke];
}
function os(e) {
  delete e[ke];
}
var ss = {
  initState: rs,
  getState: ai,
  cleanState: os
}, Ht = oi, as = function(e) {
  e = e || {};
  var t = e.reporter, n = e.batchProcessor, i = e.stateHandler.getState;
  if (!t)
    throw new Error("Missing required dependency: reporter.");
  function o(r, f) {
    function d() {
      f(r);
    }
    if (Ht.isIE(8))
      i(r).object = {
        proxy: d
      }, r.attachEvent("onresize", d);
    else {
      var m = l(r);
      if (!m)
        throw new Error("Element is not detectable by this strategy.");
      m.contentDocument.defaultView.addEventListener("resize", d);
    }
  }
  function s(r) {
    var f = e.important ? " !important; " : "; ";
    return (r.join(f) + f).trim();
  }
  function a(r, f, d) {
    d || (d = f, f = r, r = null), r = r || {}, r.debug;
    function m(g, b) {
      var C = s(["display: block", "position: absolute", "top: 0", "left: 0", "width: 100%", "height: 100%", "border: none", "padding: 0", "margin: 0", "opacity: 0", "z-index: -1000", "pointer-events: none"]), k = !1, A = window.getComputedStyle(g), S = g.offsetWidth, _ = g.offsetHeight;
      i(g).startSize = {
        width: S,
        height: _
      };
      function v() {
        function u() {
          if (A.position === "static") {
            g.style.setProperty("position", "relative", r.important ? "important" : "");
            var T = function(j, H, P, D) {
              function O(Y) {
                return Y.replace(/[^-\d\.]/g, "");
              }
              var L = P[D];
              L !== "auto" && O(L) !== "0" && (j.warn("An element that is positioned static has style." + D + "=" + L + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + D + " will be set to 0. Element: ", H), H.style.setProperty(D, "0", r.important ? "important" : ""));
            };
            T(t, g, A, "top"), T(t, g, A, "right"), T(t, g, A, "bottom"), T(t, g, A, "left");
          }
        }
        function w() {
          k || u();
          function T(H, P) {
            if (!H.contentDocument) {
              var D = i(H);
              D.checkForObjectDocumentTimeoutId && window.clearTimeout(D.checkForObjectDocumentTimeoutId), D.checkForObjectDocumentTimeoutId = setTimeout(function() {
                D.checkForObjectDocumentTimeoutId = 0, T(H, P);
              }, 100);
              return;
            }
            P(H.contentDocument);
          }
          var j = this;
          T(j, function(P) {
            b(g);
          });
        }
        A.position !== "" && (u(), k = !0);
        var y = document.createElement("object");
        y.style.cssText = C, y.tabIndex = -1, y.type = "text/html", y.setAttribute("aria-hidden", "true"), y.onload = w, Ht.isIE() || (y.data = "about:blank"), i(g) && (g.appendChild(y), i(g).object = y, Ht.isIE() && (y.data = "about:blank"));
      }
      n ? n.add(v) : v();
    }
    Ht.isIE(8) ? d(f) : m(f, d);
  }
  function l(r) {
    return i(r).object;
  }
  function c(r) {
    if (i(r)) {
      var f = l(r);
      f && (Ht.isIE(8) ? r.detachEvent("onresize", f.proxy) : r.removeChild(f), i(r).checkForObjectDocumentTimeoutId && window.clearTimeout(i(r).checkForObjectDocumentTimeoutId), delete i(r).object);
    }
  }
  return {
    makeDetectable: a,
    addListener: o,
    uninstall: c
  };
}, cs = ni.forEach, ls = function(e) {
  e = e || {};
  var t = e.reporter, n = e.batchProcessor, i = e.stateHandler.getState;
  e.stateHandler.hasState;
  var o = e.idHandler;
  if (!n)
    throw new Error("Missing required dependency: batchProcessor");
  if (!t)
    throw new Error("Missing required dependency: reporter.");
  var s = f(), a = "erd_scroll_detection_scrollbar_style", l = "erd_scroll_detection_container";
  function c(v) {
    d(v, a, l);
  }
  c(window.document);
  function r(v) {
    var u = e.important ? " !important; " : "; ";
    return (v.join(u) + u).trim();
  }
  function f() {
    var v = 500, u = 500, w = document.createElement("div");
    w.style.cssText = r(["position: absolute", "width: " + v * 2 + "px", "height: " + u * 2 + "px", "visibility: hidden", "margin: 0", "padding: 0"]);
    var y = document.createElement("div");
    y.style.cssText = r(["position: absolute", "width: " + v + "px", "height: " + u + "px", "overflow: scroll", "visibility: none", "top: " + -v * 3 + "px", "left: " + -u * 3 + "px", "visibility: hidden", "margin: 0", "padding: 0"]), y.appendChild(w), document.body.insertBefore(y, document.body.firstChild);
    var T = v - y.clientWidth, j = u - y.clientHeight;
    return document.body.removeChild(y), {
      width: T,
      height: j
    };
  }
  function d(v, u, w) {
    function y(P, D) {
      D = D || function(L) {
        v.head.appendChild(L);
      };
      var O = v.createElement("style");
      return O.innerHTML = P, O.id = u, D(O), O;
    }
    if (!v.getElementById(u)) {
      var T = w + "_animation", j = w + "_animation_active", H = `/* Created by the element-resize-detector library. */
`;
      H += "." + w + " > div::-webkit-scrollbar { " + r(["display: none"]) + ` }

`, H += "." + j + " { " + r(["-webkit-animation-duration: 0.1s", "animation-duration: 0.1s", "-webkit-animation-name: " + T, "animation-name: " + T]) + ` }
`, H += "@-webkit-keyframes " + T + ` { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }
`, H += "@keyframes " + T + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }", y(H);
    }
  }
  function m(v) {
    v.className += " " + l + "_animation_active";
  }
  function g(v, u, w) {
    if (v.addEventListener)
      v.addEventListener(u, w);
    else if (v.attachEvent)
      v.attachEvent("on" + u, w);
    else
      return t.error("[scroll] Don't know how to add event listeners.");
  }
  function b(v, u, w) {
    if (v.removeEventListener)
      v.removeEventListener(u, w);
    else if (v.detachEvent)
      v.detachEvent("on" + u, w);
    else
      return t.error("[scroll] Don't know how to remove event listeners.");
  }
  function C(v) {
    return i(v).container.childNodes[0].childNodes[0].childNodes[0];
  }
  function k(v) {
    return i(v).container.childNodes[0].childNodes[0].childNodes[1];
  }
  function A(v, u) {
    var w = i(v).listeners;
    if (!w.push)
      throw new Error("Cannot add listener to an element that is not detectable.");
    i(v).listeners.push(u);
  }
  function S(v, u, w) {
    w || (w = u, u = v, v = null), v = v || {};
    function y() {
      if (v.debug) {
        var x = Array.prototype.slice.call(arguments);
        if (x.unshift(o.get(u), "Scroll: "), t.log.apply)
          t.log.apply(null, x);
        else
          for (var $ = 0; $ < x.length; $++)
            t.log(x[$]);
      }
    }
    function T(x) {
      function $(B) {
        var Z = B.getRootNode && B.getRootNode().contains(B);
        return B === B.ownerDocument.body || B.ownerDocument.body.contains(B) || Z;
      }
      return !$(x) || window.getComputedStyle(x) === null;
    }
    function j(x) {
      var $ = i(x).container.childNodes[0], B = window.getComputedStyle($);
      return !B.width || B.width.indexOf("px") === -1;
    }
    function H() {
      var x = window.getComputedStyle(u), $ = {};
      return $.position = x.position, $.width = u.offsetWidth, $.height = u.offsetHeight, $.top = x.top, $.right = x.right, $.bottom = x.bottom, $.left = x.left, $.widthCSS = x.width, $.heightCSS = x.height, $;
    }
    function P() {
      var x = H();
      i(u).startSize = {
        width: x.width,
        height: x.height
      }, y("Element start size", i(u).startSize);
    }
    function D() {
      i(u).listeners = [];
    }
    function O() {
      if (y("storeStyle invoked."), !i(u)) {
        y("Aborting because element has been uninstalled");
        return;
      }
      var x = H();
      i(u).style = x;
    }
    function L(x, $, B) {
      i(x).lastWidth = $, i(x).lastHeight = B;
    }
    function Y(x) {
      return C(x).childNodes[0];
    }
    function K() {
      return 2 * s.width + 1;
    }
    function Mt() {
      return 2 * s.height + 1;
    }
    function vt(x) {
      return x + 10 + K();
    }
    function yt(x) {
      return x + 10 + Mt();
    }
    function tt(x) {
      return x * 2 + K();
    }
    function ce(x) {
      return x * 2 + Mt();
    }
    function h(x, $, B) {
      var Z = C(x), nt = k(x), it = vt($), rt = yt(B), Q = tt($), F = ce(B);
      Z.scrollLeft = it, Z.scrollTop = rt, nt.scrollLeft = Q, nt.scrollTop = F;
    }
    function R() {
      var x = i(u).container;
      if (!x) {
        x = document.createElement("div"), x.className = l, x.style.cssText = r(["visibility: hidden", "display: inline", "width: 0px", "height: 0px", "z-index: -1", "overflow: hidden", "margin: 0", "padding: 0"]), i(u).container = x, m(x), u.appendChild(x);
        var $ = function() {
          i(u).onRendered && i(u).onRendered();
        };
        g(x, "animationstart", $), i(u).onAnimationStart = $;
      }
      return x;
    }
    function N() {
      function x() {
        var V = i(u).style;
        if (V.position === "static") {
          u.style.setProperty("position", "relative", v.important ? "important" : "");
          var at = function(_t, xt, ui, Ut) {
            function fi(di) {
              return di.replace(/[^-\d\.]/g, "");
            }
            var le = ui[Ut];
            le !== "auto" && fi(le) !== "0" && (_t.warn("An element that is positioned static has style." + Ut + "=" + le + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + Ut + " will be set to 0. Element: ", xt), xt.style[Ut] = 0);
          };
          at(t, u, V, "top"), at(t, u, V, "right"), at(t, u, V, "bottom"), at(t, u, V, "left");
        }
      }
      function $(V, at, _t, xt) {
        return V = V ? V + "px" : "0", at = at ? at + "px" : "0", _t = _t ? _t + "px" : "0", xt = xt ? xt + "px" : "0", ["left: " + V, "top: " + at, "right: " + xt, "bottom: " + _t];
      }
      if (y("Injecting elements"), !i(u)) {
        y("Aborting because element has been uninstalled");
        return;
      }
      x();
      var B = i(u).container;
      B || (B = R());
      var Z = s.width, nt = s.height, it = r(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%", "left: 0px", "top: 0px"]), rt = r(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden"].concat($(-(1 + Z), -(1 + nt), -nt, -Z))), Q = r(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]), F = r(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]), et = r(["position: absolute", "left: 0", "top: 0"]), bt = r(["position: absolute", "width: 200%", "height: 200%"]), ot = document.createElement("div"), st = document.createElement("div"), Ct = document.createElement("div"), Ae = document.createElement("div"), Gt = document.createElement("div"), $e = document.createElement("div");
      ot.dir = "ltr", ot.style.cssText = it, ot.className = l, st.className = l, st.style.cssText = rt, Ct.style.cssText = Q, Ae.style.cssText = et, Gt.style.cssText = F, $e.style.cssText = bt, Ct.appendChild(Ae), Gt.appendChild($e), st.appendChild(Ct), st.appendChild(Gt), ot.appendChild(st), B.appendChild(ot);
      function He() {
        var V = i(u);
        V && V.onExpand ? V.onExpand() : y("Aborting expand scroll handler: element has been uninstalled");
      }
      function Le() {
        var V = i(u);
        V && V.onShrink ? V.onShrink() : y("Aborting shrink scroll handler: element has been uninstalled");
      }
      g(Ct, "scroll", He), g(Gt, "scroll", Le), i(u).onExpandScroll = He, i(u).onShrinkScroll = Le;
    }
    function X() {
      function x(Q, F, et) {
        var bt = Y(Q), ot = vt(F), st = yt(et);
        bt.style.setProperty("width", ot + "px", v.important ? "important" : ""), bt.style.setProperty("height", st + "px", v.important ? "important" : "");
      }
      function $(Q) {
        var F = u.offsetWidth, et = u.offsetHeight, bt = F !== i(u).lastWidth || et !== i(u).lastHeight;
        y("Storing current size", F, et), L(u, F, et), n.add(0, function() {
          if (bt) {
            if (!i(u)) {
              y("Aborting because element has been uninstalled");
              return;
            }
            if (!B()) {
              y("Aborting because element container has not been initialized");
              return;
            }
            if (v.debug) {
              var st = u.offsetWidth, Ct = u.offsetHeight;
              (st !== F || Ct !== et) && t.warn(o.get(u), "Scroll: Size changed before updating detector elements.");
            }
            x(u, F, et);
          }
        }), n.add(1, function() {
          if (!i(u)) {
            y("Aborting because element has been uninstalled");
            return;
          }
          if (!B()) {
            y("Aborting because element container has not been initialized");
            return;
          }
          h(u, F, et);
        }), bt && Q && n.add(2, function() {
          if (!i(u)) {
            y("Aborting because element has been uninstalled");
            return;
          }
          if (!B()) {
            y("Aborting because element container has not been initialized");
            return;
          }
          Q();
        });
      }
      function B() {
        return !!i(u).container;
      }
      function Z() {
        function Q() {
          return i(u).lastNotifiedWidth === void 0;
        }
        y("notifyListenersIfNeeded invoked");
        var F = i(u);
        if (Q() && F.lastWidth === F.startSize.width && F.lastHeight === F.startSize.height)
          return y("Not notifying: Size is the same as the start size, and there has been no notification yet.");
        if (F.lastWidth === F.lastNotifiedWidth && F.lastHeight === F.lastNotifiedHeight)
          return y("Not notifying: Size already notified");
        y("Current size not notified, notifying..."), F.lastNotifiedWidth = F.lastWidth, F.lastNotifiedHeight = F.lastHeight, cs(i(u).listeners, function(et) {
          et(u);
        });
      }
      function nt() {
        if (y("startanimation triggered."), j(u)) {
          y("Ignoring since element is still unrendered...");
          return;
        }
        y("Element rendered.");
        var Q = C(u), F = k(u);
        (Q.scrollLeft === 0 || Q.scrollTop === 0 || F.scrollLeft === 0 || F.scrollTop === 0) && (y("Scrollbars out of sync. Updating detector elements..."), $(Z));
      }
      function it() {
        if (y("Scroll detected."), j(u)) {
          y("Scroll event fired while unrendered. Ignoring...");
          return;
        }
        $(Z);
      }
      if (y("registerListenersAndPositionElements invoked."), !i(u)) {
        y("Aborting because element has been uninstalled");
        return;
      }
      i(u).onRendered = nt, i(u).onExpand = it, i(u).onShrink = it;
      var rt = i(u).style;
      x(u, rt.width, rt.height);
    }
    function E() {
      if (y("finalizeDomMutation invoked."), !i(u)) {
        y("Aborting because element has been uninstalled");
        return;
      }
      var x = i(u).style;
      L(u, x.width, x.height), h(u, x.width, x.height);
    }
    function z() {
      w(u);
    }
    function U() {
      y("Installing..."), D(), P(), n.add(0, O), n.add(1, N), n.add(2, X), n.add(3, E), n.add(4, z);
    }
    y("Making detectable..."), T(u) ? (y("Element is detached"), R(), y("Waiting until element is attached..."), i(u).onRendered = function() {
      y("Element is now attached"), U();
    }) : U();
  }
  function _(v) {
    var u = i(v);
    u && (u.onExpandScroll && b(C(v), "scroll", u.onExpandScroll), u.onShrinkScroll && b(k(v), "scroll", u.onShrinkScroll), u.onAnimationStart && b(u.container, "animationstart", u.onAnimationStart), u.container && v.removeChild(u.container));
  }
  return {
    makeDetectable: S,
    addListener: A,
    uninstall: _,
    initDocument: c
  };
}, Bt = ni.forEach, us = Vo, fs = Ko, ds = Jo, hs = Zo, ps = Qo, ln = oi, gs = is, ft = ss, ms = as, vs = ls;
function un(e) {
  return Array.isArray(e) || e.length !== void 0;
}
function fn(e) {
  if (Array.isArray(e))
    return e;
  var t = [];
  return Bt(e, function(n) {
    t.push(n);
  }), t;
}
function dn(e) {
  return e && e.nodeType === 1;
}
var ys = function(e) {
  e = e || {};
  var t;
  if (e.idHandler)
    t = {
      get: function(S) {
        return e.idHandler.get(S, !0);
      },
      set: e.idHandler.set
    };
  else {
    var n = ds(), i = hs({
      idGenerator: n,
      stateHandler: ft
    });
    t = i;
  }
  var o = e.reporter;
  if (!o) {
    var s = o === !1;
    o = ps(s);
  }
  var a = dt(e, "batchProcessor", gs({ reporter: o })), l = {};
  l.callOnAdd = !!dt(e, "callOnAdd", !0), l.debug = !!dt(e, "debug", !1);
  var c = fs(t), r = us({
    stateHandler: ft
  }), f, d = dt(e, "strategy", "object"), m = dt(e, "important", !1), g = {
    reporter: o,
    batchProcessor: a,
    stateHandler: ft,
    idHandler: t,
    important: m
  };
  if (d === "scroll" && (ln.isLegacyOpera() ? (o.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."), d = "object") : ln.isIE(9) && (o.warn("Scroll strategy is not supported on IE9. Changing to object strategy."), d = "object")), d === "scroll")
    f = vs(g);
  else if (d === "object")
    f = ms(g);
  else
    throw new Error("Invalid strategy name: " + d);
  var b = {};
  function C(S, _, v) {
    function u(P) {
      var D = c.get(P);
      Bt(D, function(L) {
        L(P);
      });
    }
    function w(P, D, O) {
      c.add(D, O), P && O(D);
    }
    if (v || (v = _, _ = S, S = {}), !_)
      throw new Error("At least one element required.");
    if (!v)
      throw new Error("Listener required.");
    if (dn(_))
      _ = [_];
    else if (un(_))
      _ = fn(_);
    else
      return o.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
    var y = 0, T = dt(S, "callOnAdd", l.callOnAdd), j = dt(S, "onReady", function() {
    }), H = dt(S, "debug", l.debug);
    Bt(_, function(D) {
      ft.getState(D) || (ft.initState(D), t.set(D));
      var O = t.get(D);
      if (H && o.log("Attaching listener to element", O, D), !r.isDetectable(D)) {
        if (H && o.log(O, "Not detectable."), r.isBusy(D)) {
          H && o.log(O, "System busy making it detectable"), w(T, D, v), b[O] = b[O] || [], b[O].push(function() {
            y++, y === _.length && j();
          });
          return;
        }
        return H && o.log(O, "Making detectable..."), r.markBusy(D, !0), f.makeDetectable({ debug: H, important: m }, D, function(Y) {
          if (H && o.log(O, "onElementDetectable"), ft.getState(Y)) {
            r.markAsDetectable(Y), r.markBusy(Y, !1), f.addListener(Y, u), w(T, Y, v);
            var K = ft.getState(Y);
            if (K && K.startSize) {
              var Mt = Y.offsetWidth, vt = Y.offsetHeight;
              (K.startSize.width !== Mt || K.startSize.height !== vt) && u(Y);
            }
            b[O] && Bt(b[O], function(yt) {
              yt();
            });
          } else
            H && o.log(O, "Element uninstalled before being detectable.");
          delete b[O], y++, y === _.length && j();
        });
      }
      H && o.log(O, "Already detecable, adding listener."), w(T, D, v), y++;
    }), y === _.length && j();
  }
  function k(S) {
    if (!S)
      return o.error("At least one element is required.");
    if (dn(S))
      S = [S];
    else if (un(S))
      S = fn(S);
    else
      return o.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
    Bt(S, function(_) {
      c.removeAllListeners(_), f.uninstall(_), ft.cleanState(_);
    });
  }
  function A(S) {
    f.initDocument && f.initDocument(S);
  }
  return {
    listenTo: C,
    removeListener: c.removeListener,
    removeAllListeners: c.removeAllListeners,
    uninstall: k,
    initDocument: A
  };
};
function dt(e, t, n) {
  var i = e[t];
  return i == null && n !== void 0 ? n : i;
}
const bs = /* @__PURE__ */ Go(ys);
function xs(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, n) {
    var i = e.get(t);
    i ? i.push(n) : e.set(t, [n]);
  }, off: function(t, n) {
    var i = e.get(t);
    i && (n ? i.splice(i.indexOf(n) >>> 0, 1) : e.set(t, []));
  }, emit: function(t, n) {
    var i = e.get(t);
    i && i.slice().map(function(o) {
      o(n);
    }), (i = e.get("*")) && i.slice().map(function(o) {
      o(t, n);
    });
  } };
}
function ci() {
  return typeof window < "u";
}
const li = () => {
};
function ws(e, t = li) {
  if (!ci) {
    t();
    return;
  }
  window.addEventListener(e, t);
}
function Ss(e, t = li) {
  ci && window.removeEventListener(e, t);
}
const Es = {
  __name: "grid-layout",
  props: {
    layout: {
      type: Array,
      required: !0
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
      default: 1 / 0
    },
    margin: {
      type: Array,
      default() {
        return [10, 10];
      }
    },
    isDraggable: {
      type: Boolean,
      default: !0
    },
    isResizable: {
      type: Boolean,
      default: !0
    },
    isMirrored: {
      type: Boolean,
      default: !1
    },
    isBounded: {
      type: Boolean,
      default: !1
    },
    // If true, the container height swells and contracts to fit contents
    autoSize: {
      type: Boolean,
      default: !0
    },
    verticalCompact: {
      type: Boolean,
      default: !0
    },
    restoreOnDrag: {
      type: Boolean,
      default: !1
    },
    preventCollision: {
      type: Boolean,
      default: !1
    },
    useCssTransforms: {
      type: Boolean,
      default: !0
    },
    responsive: {
      type: Boolean,
      default: !1
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
      default: !0
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
  setup(e, { expose: t, emit: n }) {
    const i = e, o = n, s = xs(), a = {
      el: void 0,
      placeholderEl: void 0,
      placeholder: {},
      emitter: s
    };
    t(a);
    const l = bs({
      strategy: "scroll",
      // <- For ultra performance.
      // See https://github.com/wnr/element-resize-detector/issues/110 about callOnAdd.
      callOnAdd: !1
    }), c = pn({
      width: null,
      mergedStyle: {},
      isDragging: !1,
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
    Be("emitter", s), Be("gridLayout", { props: i, state: c });
    function r() {
      s.on("resizeEvent", k), s.on("dragEvent", C), o("layout-created", i.layout), ws("resize", g);
    }
    r(), pi(() => {
      o("layout-before-mount", c.layout);
    }), mn(() => {
      o("layout-mounted", c.layout);
    }), gn(() => {
      s.off("resizeEvent", k), s.off("dragEvent", C), Ss("resize", g), l && a.el && l.uninstall(a.el);
    }), W(() => c.width, async (u, w) => {
      s.emit("updateWidth", c.width), m(), w === null && (await gi(), o("layout-ready", c.layout));
    }), W(() => i.layout, () => {
      Bo(i.layout), c.originalLayout = i.layout, d();
    }, { deep: !0, immediate: !0 }), W(() => i.colNum, () => {
      c.colNum = i.colNum, s.emit("setColNum", i.colNum);
    }, { immediate: !0 }), W(() => i.rowHeight, () => {
      s.emit("setRowHeight", i.rowHeight);
    }), W(() => i.isDraggable, () => {
      s.emit("setDraggable", i.isDraggable);
    }), W(() => i.isResizable, () => {
      s.emit("setResizable", i.isResizable);
    }), W(() => i.isBounded, () => {
      s.emit("setBounded", i.isBounded);
    }), W(() => i.transformScale, () => {
      s.emit("setTransformScale", i.transformScale);
    }), W(() => i.responsive, () => {
      i.responsive || (c.layout = St(c.originalLayout), s.emit("setColNum", i.colNum)), g();
    }), W(() => i.maxRows, () => {
      s.emit("setMaxRows", i.maxRows);
    }), W(() => i.margin, () => {
      m();
    }, { deep: !0 });
    function f(u, w) {
      if ((u == null ? void 0 : u.length) !== (w == null ? void 0 : w.length))
        return !0;
      let y = !1, T = 0;
      for (; T < u.length; ) {
        const j = u[T], H = Object.keys(j), P = w[T], D = Object.keys(P), O = [.../* @__PURE__ */ new Set([...H, ...D])];
        let L = 0;
        for (; L < O.length; ) {
          const Y = O[L];
          if (j[Y] !== P[Y]) {
            y = !0;
            break;
          }
          L += 1;
        }
        if (y)
          break;
        T += 1;
      }
      return y;
    }
    function d() {
      if (f(i.layout, c.layout) && (S(), c.layout = St(i.layout), Wt(c.layout, i.verticalCompact), s.emit("updateWidth", c.width), m(), f(i.layout, c.layout))) {
        const w = St(c.layout);
        o("layout-updated", w), o("update:layout", w);
      }
    }
    function m() {
      c.mergedStyle = {
        height: b()
      };
    }
    function g() {
      a.el && (c.width = a.el.offsetWidth), s.emit("resizeEvent");
    }
    function b() {
      var w;
      if (!i.autoSize) return;
      const u = ((w = i.margin) == null ? void 0 : w[1]) || 0;
      return `${Ro(c.layout) * (i.rowHeight + u) + u}px`;
    }
    function C([u, w, y, T, j, H] = []) {
      let P = nn(c.layout, w);
      if (P == null && (P = { x: 0, y: 0 }), u === "dragstart" && !i.verticalCompact && (c.positionsBeforeDrag = c.layout.reduce((D, { i: O, x: L, y: Y }) => ({
        ...D,
        [O]: { x: L, y: Y }
      }), {})), u === "dragmove" || u === "dragstart" ? (c.placeholder.x = P.x, c.placeholder.y = P.y, c.placeholder.w = H, c.placeholder.h = j, c.isDragging = !0) : c.isDragging = !1, c.layout = ze(c.layout, P, y, T, !0, i.preventCollision), i.restoreOnDrag ? (P.static = !0, Wt(c.layout, i.verticalCompact, c.positionsBeforeDrag), P.static = !1) : Wt(c.layout, i.verticalCompact), m(), u === "dragend" && delete c.positionsBeforeDrag, f(i.layout, c.layout)) {
        const D = St(c.layout);
        o("layout-updated", D), o("update:layout", D);
      }
    }
    function k([u, w, y, T, j, H] = []) {
      let P = nn(c.layout, w);
      P == null && (P = { h: 0, w: 0 });
      let D;
      if (i.preventCollision) {
        const O = Un(c.layout, { ...P, w: H, h: j }).filter(
          (L) => L.i !== P.i
        );
        if (D = O.length > 0, D) {
          let L = 1 / 0, Y = 1 / 0;
          O.forEach((K) => {
            K.x > P.x && (L = Math.min(L, K.x)), K.y > P.y && (Y = Math.min(Y, K.y));
          }), Number.isFinite(L) && (P.w = L - P.x), Number.isFinite(Y) && (P.h = Y - P.y);
        }
      }
      if (D || (P.w = H, P.h = j), u === "resizestart" || u === "resizemove" ? (c.placeholder.x = y, c.placeholder.y = T, c.placeholder.w = P.w, c.placeholder.h = P.h, c.isDragging = !0) : c.isDragging = !1, i.responsive && A(), Wt(c.layout, i.verticalCompact), m(), f(i.layout, c.layout)) {
        const O = St(c.layout);
        o("layout-updated", O), o("update:layout", O);
      }
    }
    function A() {
      const u = jo(i.breakpoints, c.width), w = Jn(u, i.cols);
      w !== c.colNum && (c.colNum = w, c.layout = Xo(
        c.layout,
        c.layouts,
        i.breakpoints,
        u,
        w,
        i.verticalCompact
      ), c.layouts[u] = c.layout, s.emit("setColNum", w)), c.lastBreakpoint !== u && (c.lastBreakpoint = u, o("breakpoint-changed", u, c.layout));
    }
    function S() {
      c.layouts = { ...i.responsiveLayouts };
    }
    function _(u) {
      !u || u === a.el || (a.el = u, l && l.listenTo(a.el, () => {
        g();
      }), c.width = a.el.offsetWidth);
    }
    function v(u) {
      u && (a.placeholder = u, a.placeholderEl = u.el);
    }
    return (u, w) => (ve(), ye("div", {
      ref: _,
      class: "vue-grid-layout",
      style: vn(c.mergedStyle)
    }, [
      yn(u.$slots, "default", {}, void 0, !0),
      mi(vi(ti, {
        ref: v,
        class: "vue-grid-placeholder",
        x: c.placeholder.x,
        y: c.placeholder.y,
        w: c.placeholder.w,
        h: c.placeholder.h,
        i: "placeholder"
      }, null, 8, ["x", "y", "w", "h"]), [
        [yi, c.isDragging]
      ])
    ], 4));
  }
}, zs = /* @__PURE__ */ Qn(Es, [["__scopeId", "data-v-a10aee95"]]);
function Ie(e) {
  Ie.installed || (Ie.installed = !0, e.component("GridLayout", zs), e.component("GridItem", ti));
}
const hn = (window == null ? void 0 : window.Vue) || (global == null ? void 0 : global.Vue);
hn && hn.use({ install: Ie });
export {
  ti as GridItem,
  zs as GridLayout,
  Ie as default
};
