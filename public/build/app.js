(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you require will output into a single css file (app.scss in this case)
__webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss"); // Need jQuery? Install it with "yarn add jquery", then uncomment to require it.


var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

__webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");

__webpack_require__(/*! ../../vendor/twbs/bootstrap/dist/js/bootstrap.min */ "./vendor/twbs/bootstrap/dist/js/bootstrap.min.js");

__webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");

$(document).ready(function () {
  $('.money').mask('000.000.000.000.000,00', {
    reverse: true
  });
  $('[name=year],[name=model_year]').mask('0000');

  var SPMaskBehavior = function SPMaskBehavior(val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
  },
      spOptions = {
    onKeyPress: function onKeyPress(val, e, field, options) {
      field.mask(SPMaskBehavior.apply({}, arguments), options);
    }
  };

  $('.phone').mask(SPMaskBehavior, spOptions);
}); // CommonJS

var Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

/***/ }),

/***/ "./vendor/twbs/bootstrap/dist/js/bootstrap.min.js":
/*!********************************************************!*\
  !*** ./vendor/twbs/bootstrap/dist/js/bootstrap.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? e(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (t, g, u) {
  "use strict";

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }

  function l(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
          e = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable;
      }))), e.forEach(function (t) {
        var e, n, i;
        e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = i;
      });
    }

    return o;
  }

  g = g && g.hasOwnProperty("default") ? g["default"] : g, u = u && u.hasOwnProperty("default") ? u["default"] : u;
  var e = "transitionend";

  function n(t) {
    var e = this,
        n = !1;
    return g(this).one(_.TRANSITION_END, function () {
      n = !0;
    }), setTimeout(function () {
      n || _.triggerTransitionEnd(e);
    }, t), this;
  }

  var _ = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function getUID(t) {
      for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) {
        ;
      }

      return t;
    },
    getSelectorFromElement: function getSelectorFromElement(t) {
      var e = t.getAttribute("data-target");

      if (!e || "#" === e) {
        var n = t.getAttribute("href");
        e = n && "#" !== n ? n.trim() : "";
      }

      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
      if (!t) return 0;
      var e = g(t).css("transition-duration"),
          n = g(t).css("transition-delay"),
          i = parseFloat(e),
          o = parseFloat(n);
      return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0;
    },
    reflow: function reflow(t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(t) {
      g(t).trigger(e);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(e);
    },
    isElement: function isElement(t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(t, e, n) {
      for (var i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
              r = e[i],
              s = r && _.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
          if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".');
        }
      }

      var a;
    },
    findShadowRoot: function findShadowRoot(t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
      var e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null;
    }
  };
  g.fn.emulateTransitionEnd = n, g.event.special[_.TRANSITION_END] = {
    bindType: e,
    delegateType: e,
    handle: function handle(t) {
      if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
    }
  };

  var o = "alert",
      r = "bs.alert",
      a = "." + r,
      c = g.fn[o],
      h = {
    CLOSE: "close" + a,
    CLOSED: "closed" + a,
    CLICK_DATA_API: "click" + a + ".data-api"
  },
      f = "alert",
      d = "fade",
      m = "show",
      p = function () {
    function i(t) {
      this._element = t;
    }

    var t = i.prototype;
    return t.close = function (t) {
      var e = this._element;
      t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, t.dispose = function () {
      g.removeData(this._element, r), this._element = null;
    }, t._getRootElement = function (t) {
      var e = _.getSelectorFromElement(t),
          n = !1;

      return e && (n = document.querySelector(e)), n || (n = g(t).closest("." + f)[0]), n;
    }, t._triggerCloseEvent = function (t) {
      var e = g.Event(h.CLOSE);
      return g(t).trigger(e), e;
    }, t._removeElement = function (e) {
      var n = this;

      if (g(e).removeClass(m), g(e).hasClass(d)) {
        var t = _.getTransitionDurationFromElement(e);

        g(e).one(_.TRANSITION_END, function (t) {
          return n._destroyElement(e, t);
        }).emulateTransitionEnd(t);
      } else this._destroyElement(e);
    }, t._destroyElement = function (t) {
      g(t).detach().trigger(h.CLOSED).remove();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this),
            e = t.data(r);
        e || (e = new i(this), t.data(r, e)), "close" === n && e[n](this);
      });
    }, i._handleDismiss = function (e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }]), i;
  }();

  g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p())), g.fn[o] = p._jQueryInterface, g.fn[o].Constructor = p, g.fn[o].noConflict = function () {
    return g.fn[o] = c, p._jQueryInterface;
  };

  var v = "button",
      y = "bs.button",
      E = "." + y,
      C = ".data-api",
      T = g.fn[v],
      S = "active",
      b = "btn",
      I = "focus",
      D = '[data-toggle^="button"]',
      w = '[data-toggle="buttons"]',
      A = 'input:not([type="hidden"])',
      N = ".active",
      O = ".btn",
      k = {
    CLICK_DATA_API: "click" + E + C,
    FOCUS_BLUR_DATA_API: "focus" + E + C + " blur" + E + C
  },
      P = function () {
    function n(t) {
      this._element = t;
    }

    var t = n.prototype;
    return t.toggle = function () {
      var t = !0,
          e = !0,
          n = g(this._element).closest(w)[0];

      if (n) {
        var i = this._element.querySelector(A);

        if (i) {
          if ("radio" === i.type) if (i.checked && this._element.classList.contains(S)) t = !1;else {
            var o = n.querySelector(N);
            o && g(o).removeClass(S);
          }

          if (t) {
            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
            i.checked = !this._element.classList.contains(S), g(i).trigger("change");
          }

          i.focus(), e = !1;
        }
      }

      e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)), t && g(this._element).toggleClass(S);
    }, t.dispose = function () {
      g.removeData(this._element, y), this._element = null;
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(y);
        t || (t = new n(this), g(this).data(y, t)), "toggle" === e && t[e]();
      });
    }, s(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }]), n;
  }();

  g(document).on(k.CLICK_DATA_API, D, function (t) {
    t.preventDefault();
    var e = t.target;
    g(e).hasClass(b) || (e = g(e).closest(O)), P._jQueryInterface.call(g(e), "toggle");
  }).on(k.FOCUS_BLUR_DATA_API, D, function (t) {
    var e = g(t.target).closest(O)[0];
    g(e).toggleClass(I, /^focus(in)?$/.test(t.type));
  }), g.fn[v] = P._jQueryInterface, g.fn[v].Constructor = P, g.fn[v].noConflict = function () {
    return g.fn[v] = T, P._jQueryInterface;
  };

  var L = "carousel",
      j = "bs.carousel",
      H = "." + j,
      R = ".data-api",
      x = g.fn[L],
      F = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      U = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      W = "next",
      q = "prev",
      M = "left",
      K = "right",
      Q = {
    SLIDE: "slide" + H,
    SLID: "slid" + H,
    KEYDOWN: "keydown" + H,
    MOUSEENTER: "mouseenter" + H,
    MOUSELEAVE: "mouseleave" + H,
    TOUCHSTART: "touchstart" + H,
    TOUCHMOVE: "touchmove" + H,
    TOUCHEND: "touchend" + H,
    POINTERDOWN: "pointerdown" + H,
    POINTERUP: "pointerup" + H,
    DRAG_START: "dragstart" + H,
    LOAD_DATA_API: "load" + H + R,
    CLICK_DATA_API: "click" + H + R
  },
      B = "carousel",
      V = "active",
      Y = "slide",
      z = "carousel-item-right",
      X = "carousel-item-left",
      $ = "carousel-item-next",
      G = "carousel-item-prev",
      J = "pointer-event",
      Z = ".active",
      tt = ".active.carousel-item",
      et = ".carousel-item",
      nt = ".carousel-item img",
      it = ".carousel-item-next, .carousel-item-prev",
      ot = ".carousel-indicators",
      rt = "[data-slide], [data-slide-to]",
      st = '[data-ride="carousel"]',
      at = {
    TOUCH: "touch",
    PEN: "pen"
  },
      lt = function () {
    function r(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(ot), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
    }

    var t = r.prototype;
    return t.next = function () {
      this._isSliding || this._slide(W);
    }, t.nextWhenVisible = function () {
      !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next();
    }, t.prev = function () {
      this._isSliding || this._slide(q);
    }, t.pause = function (t) {
      t || (this._isPaused = !0), this._element.querySelector(it) && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, t.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, t.to = function (t) {
      var e = this;
      this._activeElement = this._element.querySelector(tt);

      var n = this._getItemIndex(this._activeElement);

      if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) g(this._element).one(Q.SLID, function () {
        return e.to(t);
      });else {
        if (n === t) return this.pause(), void this.cycle();
        var i = n < t ? W : q;

        this._slide(i, this._items[t]);
      }
    }, t.dispose = function () {
      g(this._element).off(H), g.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, t._getConfig = function (t) {
      return t = l({}, F, t), _.typeCheckConfig(L, t, U), t;
    }, t._handleSwipe = function () {
      var t = Math.abs(this.touchDeltaX);

      if (!(t <= 40)) {
        var e = t / this.touchDeltaX;
        0 < e && this.prev(), e < 0 && this.next();
      }
    }, t._addEventListeners = function () {
      var e = this;
      this._config.keyboard && g(this._element).on(Q.KEYDOWN, function (t) {
        return e._keydown(t);
      }), "hover" === this._config.pause && g(this._element).on(Q.MOUSEENTER, function (t) {
        return e.pause(t);
      }).on(Q.MOUSELEAVE, function (t) {
        return e.cycle(t);
      }), this._config.touch && this._addTouchEventListeners();
    }, t._addTouchEventListeners = function () {
      var n = this;

      if (this._touchSupported) {
        var e = function e(t) {
          n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX);
        },
            i = function i(t) {
          n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function (t) {
            return n.cycle(t);
          }, 500 + n._config.interval));
        };

        g(this._element.querySelectorAll(nt)).on(Q.DRAG_START, function (t) {
          return t.preventDefault();
        }), this._pointerEvent ? (g(this._element).on(Q.POINTERDOWN, function (t) {
          return e(t);
        }), g(this._element).on(Q.POINTERUP, function (t) {
          return i(t);
        }), this._element.classList.add(J)) : (g(this._element).on(Q.TOUCHSTART, function (t) {
          return e(t);
        }), g(this._element).on(Q.TOUCHMOVE, function (t) {
          var e;
          (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX;
        }), g(this._element).on(Q.TOUCHEND, function (t) {
          return i(t);
        }));
      }
    }, t._keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
        case 37:
          t.preventDefault(), this.prev();
          break;

        case 39:
          t.preventDefault(), this.next();
      }
    }, t._getItemIndex = function (t) {
      return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(et)) : [], this._items.indexOf(t);
    }, t._getItemByDirection = function (t, e) {
      var n = t === W,
          i = t === q,
          o = this._getItemIndex(e),
          r = this._items.length - 1;

      if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
      var s = (o + (t === q ? -1 : 1)) % this._items.length;
      return -1 === s ? this._items[this._items.length - 1] : this._items[s];
    }, t._triggerSlideEvent = function (t, e) {
      var n = this._getItemIndex(t),
          i = this._getItemIndex(this._element.querySelector(tt)),
          o = g.Event(Q.SLIDE, {
        relatedTarget: t,
        direction: e,
        from: i,
        to: n
      });

      return g(this._element).trigger(o), o;
    }, t._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
        g(e).removeClass(V);

        var n = this._indicatorsElement.children[this._getItemIndex(t)];

        n && g(n).addClass(V);
      }
    }, t._slide = function (t, e) {
      var n,
          i,
          o,
          r = this,
          s = this._element.querySelector(tt),
          a = this._getItemIndex(s),
          l = e || s && this._getItemByDirection(t, s),
          c = this._getItemIndex(l),
          h = Boolean(this._interval);

      if (o = t === W ? (n = X, i = $, M) : (n = z, i = G, K), l && g(l).hasClass(V)) this._isSliding = !1;else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
        this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
        var u = g.Event(Q.SLID, {
          relatedTarget: l,
          direction: o,
          from: a,
          to: c
        });

        if (g(this._element).hasClass(Y)) {
          g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n);
          var f = parseInt(l.getAttribute("data-interval"), 10);
          this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, f) : this._config.defaultInterval || this._config.interval;

          var d = _.getTransitionDurationFromElement(s);

          g(s).one(_.TRANSITION_END, function () {
            g(l).removeClass(n + " " + i).addClass(V), g(s).removeClass(V + " " + i + " " + n), r._isSliding = !1, setTimeout(function () {
              return g(r._element).trigger(u);
            }, 0);
          }).emulateTransitionEnd(d);
        } else g(s).removeClass(V), g(l).addClass(V), this._isSliding = !1, g(this._element).trigger(u);

        h && this.cycle();
      }
    }, r._jQueryInterface = function (i) {
      return this.each(function () {
        var t = g(this).data(j),
            e = l({}, F, g(this).data());
        "object" == _typeof(i) && (e = l({}, e, i));
        var n = "string" == typeof i ? i : e.slide;
        if (t || (t = new r(this, e), g(this).data(j, t)), "number" == typeof i) t.to(i);else if ("string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        } else e.interval && e.ride && (t.pause(), t.cycle());
      });
    }, r._dataApiClickHandler = function (t) {
      var e = _.getSelectorFromElement(this);

      if (e) {
        var n = g(e)[0];

        if (n && g(n).hasClass(B)) {
          var i = l({}, g(n).data(), g(this).data()),
              o = this.getAttribute("data-slide-to");
          o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o && g(n).data(j).to(o), t.preventDefault();
        }
      }
    }, s(r, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return F;
      }
    }]), r;
  }();

  g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler), g(window).on(Q.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(st)), e = 0, n = t.length; e < n; e++) {
      var i = g(t[e]);

      lt._jQueryInterface.call(i, i.data());
    }
  }), g.fn[L] = lt._jQueryInterface, g.fn[L].Constructor = lt, g.fn[L].noConflict = function () {
    return g.fn[L] = x, lt._jQueryInterface;
  };

  var ct = "collapse",
      ht = "bs.collapse",
      ut = "." + ht,
      ft = g.fn[ct],
      dt = {
    toggle: !0,
    parent: ""
  },
      gt = {
    toggle: "boolean",
    parent: "(string|element)"
  },
      _t = {
    SHOW: "show" + ut,
    SHOWN: "shown" + ut,
    HIDE: "hide" + ut,
    HIDDEN: "hidden" + ut,
    CLICK_DATA_API: "click" + ut + ".data-api"
  },
      mt = "show",
      pt = "collapse",
      vt = "collapsing",
      yt = "collapsed",
      Et = "width",
      Ct = "height",
      Tt = ".show, .collapsing",
      St = '[data-toggle="collapse"]',
      bt = function () {
    function a(e, t) {
      this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));

      for (var n = [].slice.call(document.querySelectorAll(St)), i = 0, o = n.length; i < o; i++) {
        var r = n[i],
            s = _.getSelectorFromElement(r),
            a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
          return t === e;
        });

        null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r));
      }

      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }

    var t = a.prototype;
    return t.toggle = function () {
      g(this._element).hasClass(mt) ? this.hide() : this.show();
    }, t.show = function () {
      var t,
          e,
          n = this;

      if (!this._isTransitioning && !g(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Tt)).filter(function (t) {
        return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(pt);
      })).length && (t = null), !(t && (e = g(t).not(this._selector).data(ht)) && e._isTransitioning))) {
        var i = g.Event(_t.SHOW);

        if (g(this._element).trigger(i), !i.isDefaultPrevented()) {
          t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"), e || g(t).data(ht, null));

          var o = this._getDimension();

          g(this._element).removeClass(pt).addClass(vt), this._element.style[o] = 0, this._triggerArray.length && g(this._triggerArray).removeClass(yt).attr("aria-expanded", !0), this.setTransitioning(!0);

          var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
              s = _.getTransitionDurationFromElement(this._element);

          g(this._element).one(_.TRANSITION_END, function () {
            g(n._element).removeClass(vt).addClass(pt).addClass(mt), n._element.style[o] = "", n.setTransitioning(!1), g(n._element).trigger(_t.SHOWN);
          }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px";
        }
      }
    }, t.hide = function () {
      var t = this;

      if (!this._isTransitioning && g(this._element).hasClass(mt)) {
        var e = g.Event(_t.HIDE);

        if (g(this._element).trigger(e), !e.isDefaultPrevented()) {
          var n = this._getDimension();

          this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", _.reflow(this._element), g(this._element).addClass(vt).removeClass(pt).removeClass(mt);
          var i = this._triggerArray.length;
          if (0 < i) for (var o = 0; o < i; o++) {
            var r = this._triggerArray[o],
                s = _.getSelectorFromElement(r);

            if (null !== s) g([].slice.call(document.querySelectorAll(s))).hasClass(mt) || g(r).addClass(yt).attr("aria-expanded", !1);
          }
          this.setTransitioning(!0);
          this._element.style[n] = "";

          var a = _.getTransitionDurationFromElement(this._element);

          g(this._element).one(_.TRANSITION_END, function () {
            t.setTransitioning(!1), g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN);
          }).emulateTransitionEnd(a);
        }
      }
    }, t.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, t.dispose = function () {
      g.removeData(this._element, ht), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, t._getConfig = function (t) {
      return (t = l({}, dt, t)).toggle = Boolean(t.toggle), _.typeCheckConfig(ct, t, gt), t;
    }, t._getDimension = function () {
      return g(this._element).hasClass(Et) ? Et : Ct;
    }, t._getParent = function () {
      var t,
          n = this;
      _.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
      var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
          i = [].slice.call(t.querySelectorAll(e));
      return g(i).each(function (t, e) {
        n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
      }), t;
    }, t._addAriaAndCollapsedClass = function (t, e) {
      var n = g(t).hasClass(mt);
      e.length && g(e).toggleClass(yt, !n).attr("aria-expanded", n);
    }, a._getTargetFromElement = function (t) {
      var e = _.getSelectorFromElement(t);

      return e ? document.querySelector(e) : null;
    }, a._jQueryInterface = function (i) {
      return this.each(function () {
        var t = g(this),
            e = t.data(ht),
            n = l({}, dt, t.data(), "object" == _typeof(i) && i ? i : {});

        if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(ht, e)), "string" == typeof i) {
          if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
          e[i]();
        }
      });
    }, s(a, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return dt;
      }
    }]), a;
  }();

  g(document).on(_t.CLICK_DATA_API, St, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();

    var n = g(this),
        e = _.getSelectorFromElement(this),
        i = [].slice.call(document.querySelectorAll(e));

    g(i).each(function () {
      var t = g(this),
          e = t.data(ht) ? "toggle" : n.data();

      bt._jQueryInterface.call(t, e);
    });
  }), g.fn[ct] = bt._jQueryInterface, g.fn[ct].Constructor = bt, g.fn[ct].noConflict = function () {
    return g.fn[ct] = ft, bt._jQueryInterface;
  };

  var It = "dropdown",
      Dt = "bs.dropdown",
      wt = "." + Dt,
      At = ".data-api",
      Nt = g.fn[It],
      Ot = new RegExp("38|40|27"),
      kt = {
    HIDE: "hide" + wt,
    HIDDEN: "hidden" + wt,
    SHOW: "show" + wt,
    SHOWN: "shown" + wt,
    CLICK: "click" + wt,
    CLICK_DATA_API: "click" + wt + At,
    KEYDOWN_DATA_API: "keydown" + wt + At,
    KEYUP_DATA_API: "keyup" + wt + At
  },
      Pt = "disabled",
      Lt = "show",
      jt = "dropup",
      Ht = "dropright",
      Rt = "dropleft",
      xt = "dropdown-menu-right",
      Ft = "position-static",
      Ut = '[data-toggle="dropdown"]',
      Wt = ".dropdown form",
      qt = ".dropdown-menu",
      Mt = ".navbar-nav",
      Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
      Qt = "top-start",
      Bt = "top-end",
      Vt = "bottom-start",
      Yt = "bottom-end",
      zt = "right-start",
      Xt = "left-start",
      $t = {
    offset: 0,
    flip: !0,
    boundary: "scrollParent",
    reference: "toggle",
    display: "dynamic"
  },
      Gt = {
    offset: "(number|string|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element)",
    display: "string"
  },
      Jt = function () {
    function c(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }

    var t = c.prototype;
    return t.toggle = function () {
      if (!this._element.disabled && !g(this._element).hasClass(Pt)) {
        var t = c._getParentFromElement(this._element),
            e = g(this._menu).hasClass(Lt);

        if (c._clearMenus(), !e) {
          var n = {
            relatedTarget: this._element
          },
              i = g.Event(kt.SHOW, n);

          if (g(t).trigger(i), !i.isDefaultPrevented()) {
            if (!this._inNavbar) {
              if ("undefined" == typeof u) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
              var o = this._element;
              "parent" === this._config.reference ? o = t : _.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && g(t).addClass(Ft), this._popper = new u(o, this._menu, this._getPopperConfig());
            }

            "ontouchstart" in document.documentElement && 0 === g(t).closest(Mt).length && g(document.body).children().on("mouseover", null, g.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), g(this._menu).toggleClass(Lt), g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN, n));
          }
        }
      }
    }, t.show = function () {
      if (!(this._element.disabled || g(this._element).hasClass(Pt) || g(this._menu).hasClass(Lt))) {
        var t = {
          relatedTarget: this._element
        },
            e = g.Event(kt.SHOW, t),
            n = c._getParentFromElement(this._element);

        g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN, t)));
      }
    }, t.hide = function () {
      if (!this._element.disabled && !g(this._element).hasClass(Pt) && g(this._menu).hasClass(Lt)) {
        var t = {
          relatedTarget: this._element
        },
            e = g.Event(kt.HIDE, t),
            n = c._getParentFromElement(this._element);

        g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN, t)));
      }
    }, t.dispose = function () {
      g.removeData(this._element, Dt), g(this._element).off(wt), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
    }, t.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, t._addEventListeners = function () {
      var e = this;
      g(this._element).on(kt.CLICK, function (t) {
        t.preventDefault(), t.stopPropagation(), e.toggle();
      });
    }, t._getConfig = function (t) {
      return t = l({}, this.constructor.Default, g(this._element).data(), t), _.typeCheckConfig(It, t, this.constructor.DefaultType), t;
    }, t._getMenuElement = function () {
      if (!this._menu) {
        var t = c._getParentFromElement(this._element);

        t && (this._menu = t.querySelector(qt));
      }

      return this._menu;
    }, t._getPlacement = function () {
      var t = g(this._element.parentNode),
          e = Vt;
      return t.hasClass(jt) ? (e = Qt, g(this._menu).hasClass(xt) && (e = Bt)) : t.hasClass(Ht) ? e = zt : t.hasClass(Rt) ? e = Xt : g(this._menu).hasClass(xt) && (e = Yt), e;
    }, t._detectNavbar = function () {
      return 0 < g(this._element).closest(".navbar").length;
    }, t._getOffset = function () {
      var e = this,
          t = {};
      return "function" == typeof this._config.offset ? t.fn = function (t) {
        return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t;
      } : t.offset = this._config.offset, t;
    }, t._getPopperConfig = function () {
      var t = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return "static" === this._config.display && (t.modifiers.applyStyle = {
        enabled: !1
      }), t;
    }, c._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(Dt);

        if (t || (t = new c(this, "object" == _typeof(e) ? e : null), g(this).data(Dt, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
          t[e]();
        }
      });
    }, c._clearMenus = function (t) {
      if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = e.length; n < i; n++) {
        var o = c._getParentFromElement(e[n]),
            r = g(e[n]).data(Dt),
            s = {
          relatedTarget: e[n]
        };

        if (t && "click" === t.type && (s.clickEvent = t), r) {
          var a = r._menu;

          if (g(o).hasClass(Lt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) {
            var l = g.Event(kt.HIDE, s);
            g(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), e[n].setAttribute("aria-expanded", "false"), g(a).removeClass(Lt), g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN, s)));
          }
        }
      }
    }, c._getParentFromElement = function (t) {
      var e,
          n = _.getSelectorFromElement(t);

      return n && (e = document.querySelector(n)), e || t.parentNode;
    }, c._dataApiKeydownHandler = function (t) {
      if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(qt).length)) : Ot.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !g(this).hasClass(Pt))) {
        var e = c._getParentFromElement(this),
            n = g(e).hasClass(Lt);

        if (n && (!n || 27 !== t.which && 32 !== t.which)) {
          var i = [].slice.call(e.querySelectorAll(Kt));

          if (0 !== i.length) {
            var o = i.indexOf(t.target);
            38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus();
          }
        } else {
          if (27 === t.which) {
            var r = e.querySelector(Ut);
            g(r).trigger("focus");
          }

          g(this).trigger("click");
        }
      }
    }, s(c, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return $t;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Gt;
      }
    }]), c;
  }();

  g(document).on(kt.KEYDOWN_DATA_API, Ut, Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, qt, Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Jt._clearMenus).on(kt.CLICK_DATA_API, Ut, function (t) {
    t.preventDefault(), t.stopPropagation(), Jt._jQueryInterface.call(g(this), "toggle");
  }).on(kt.CLICK_DATA_API, Wt, function (t) {
    t.stopPropagation();
  }), g.fn[It] = Jt._jQueryInterface, g.fn[It].Constructor = Jt, g.fn[It].noConflict = function () {
    return g.fn[It] = Nt, Jt._jQueryInterface;
  };

  var Zt = "modal",
      te = "bs.modal",
      ee = "." + te,
      ne = g.fn[Zt],
      ie = {
    backdrop: !0,
    keyboard: !0,
    focus: !0,
    show: !0
  },
      oe = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean",
    show: "boolean"
  },
      re = {
    HIDE: "hide" + ee,
    HIDDEN: "hidden" + ee,
    SHOW: "show" + ee,
    SHOWN: "shown" + ee,
    FOCUSIN: "focusin" + ee,
    RESIZE: "resize" + ee,
    CLICK_DISMISS: "click.dismiss" + ee,
    KEYDOWN_DISMISS: "keydown.dismiss" + ee,
    MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
    CLICK_DATA_API: "click" + ee + ".data-api"
  },
      se = "modal-dialog-scrollable",
      ae = "modal-scrollbar-measure",
      le = "modal-backdrop",
      ce = "modal-open",
      he = "fade",
      ue = "show",
      fe = ".modal-dialog",
      de = ".modal-body",
      ge = '[data-toggle="modal"]',
      _e = '[data-dismiss="modal"]',
      me = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      pe = ".sticky-top",
      ve = function () {
    function o(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(fe), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
    }

    var t = o.prototype;
    return t.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, t.show = function (t) {
      var e = this;

      if (!this._isShown && !this._isTransitioning) {
        g(this._element).hasClass(he) && (this._isTransitioning = !0);
        var n = g.Event(re.SHOW, {
          relatedTarget: t
        });
        g(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), g(this._element).on(re.CLICK_DISMISS, _e, function (t) {
          return e.hide(t);
        }), g(this._dialog).on(re.MOUSEDOWN_DISMISS, function () {
          g(e._element).one(re.MOUSEUP_DISMISS, function (t) {
            g(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return e._showElement(t);
        }));
      }
    }, t.hide = function (t) {
      var e = this;

      if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
        var n = g.Event(re.HIDE);

        if (g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = !1;
          var i = g(this._element).hasClass(he);

          if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), g(document).off(re.FOCUSIN), g(this._element).removeClass(ue), g(this._element).off(re.CLICK_DISMISS), g(this._dialog).off(re.MOUSEDOWN_DISMISS), i) {
            var o = _.getTransitionDurationFromElement(this._element);

            g(this._element).one(_.TRANSITION_END, function (t) {
              return e._hideModal(t);
            }).emulateTransitionEnd(o);
          } else this._hideModal();
        }
      }
    }, t.dispose = function () {
      [window, this._element, this._dialog].forEach(function (t) {
        return g(t).off(ee);
      }), g(document).off(re.FOCUSIN), g.removeData(this._element, te), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, t.handleUpdate = function () {
      this._adjustDialog();
    }, t._getConfig = function (t) {
      return t = l({}, ie, t), _.typeCheckConfig(Zt, t, oe), t;
    }, t._showElement = function (t) {
      var e = this,
          n = g(this._element).hasClass(he);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), g(this._dialog).hasClass(se) ? this._dialog.querySelector(de).scrollTop = 0 : this._element.scrollTop = 0, n && _.reflow(this._element), g(this._element).addClass(ue), this._config.focus && this._enforceFocus();

      var i = g.Event(re.SHOWN, {
        relatedTarget: t
      }),
          o = function o() {
        e._config.focus && e._element.focus(), e._isTransitioning = !1, g(e._element).trigger(i);
      };

      if (n) {
        var r = _.getTransitionDurationFromElement(this._dialog);

        g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
      } else o();
    }, t._enforceFocus = function () {
      var e = this;
      g(document).off(re.FOCUSIN).on(re.FOCUSIN, function (t) {
        document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus();
      });
    }, t._setEscapeEvent = function () {
      var e = this;
      this._isShown && this._config.keyboard ? g(this._element).on(re.KEYDOWN_DISMISS, function (t) {
        27 === t.which && (t.preventDefault(), e.hide());
      }) : this._isShown || g(this._element).off(re.KEYDOWN_DISMISS);
    }, t._setResizeEvent = function () {
      var e = this;
      this._isShown ? g(window).on(re.RESIZE, function (t) {
        return e.handleUpdate(t);
      }) : g(window).off(re.RESIZE);
    }, t._hideModal = function () {
      var t = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
        g(document.body).removeClass(ce), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(re.HIDDEN);
      });
    }, t._removeBackdrop = function () {
      this._backdrop && (g(this._backdrop).remove(), this._backdrop = null);
    }, t._showBackdrop = function (t) {
      var e = this,
          n = g(this._element).hasClass(he) ? he : "";

      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = le, n && this._backdrop.classList.add(n), g(this._backdrop).appendTo(document.body), g(this._element).on(re.CLICK_DISMISS, function (t) {
          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
        }), n && _.reflow(this._backdrop), g(this._backdrop).addClass(ue), !t) return;
        if (!n) return void t();

        var i = _.getTransitionDurationFromElement(this._backdrop);

        g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        g(this._backdrop).removeClass(ue);

        var o = function o() {
          e._removeBackdrop(), t && t();
        };

        if (g(this._element).hasClass(he)) {
          var r = _.getTransitionDurationFromElement(this._backdrop);

          g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
        } else o();
      } else t && t();
    }, t._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, t._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, t._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();
      this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, t._setScrollbar = function () {
      var o = this;

      if (this._isBodyOverflowing) {
        var t = [].slice.call(document.querySelectorAll(me)),
            e = [].slice.call(document.querySelectorAll(pe));
        g(t).each(function (t, e) {
          var n = e.style.paddingRight,
              i = g(e).css("padding-right");
          g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
        }), g(e).each(function (t, e) {
          var n = e.style.marginRight,
              i = g(e).css("margin-right");
          g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px");
        });
        var n = document.body.style.paddingRight,
            i = g(document.body).css("padding-right");
        g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
      }

      g(document.body).addClass(ce);
    }, t._resetScrollbar = function () {
      var t = [].slice.call(document.querySelectorAll(me));
      g(t).each(function (t, e) {
        var n = g(e).data("padding-right");
        g(e).removeData("padding-right"), e.style.paddingRight = n || "";
      });
      var e = [].slice.call(document.querySelectorAll("" + pe));
      g(e).each(function (t, e) {
        var n = g(e).data("margin-right");
        "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right");
      });
      var n = g(document.body).data("padding-right");
      g(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
    }, t._getScrollbarWidth = function () {
      var t = document.createElement("div");
      t.className = ae, document.body.appendChild(t);
      var e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e;
    }, o._jQueryInterface = function (n, i) {
      return this.each(function () {
        var t = g(this).data(te),
            e = l({}, ie, g(this).data(), "object" == _typeof(n) && n ? n : {});

        if (t || (t = new o(this, e), g(this).data(te, t)), "string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n](i);
        } else e.show && t.show(i);
      });
    }, s(o, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return ie;
      }
    }]), o;
  }();

  g(document).on(re.CLICK_DATA_API, ge, function (t) {
    var e,
        n = this,
        i = _.getSelectorFromElement(this);

    i && (e = document.querySelector(i));
    var o = g(e).data(te) ? "toggle" : l({}, g(e).data(), g(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
    var r = g(e).one(re.SHOW, function (t) {
      t.isDefaultPrevented() || r.one(re.HIDDEN, function () {
        g(n).is(":visible") && n.focus();
      });
    });

    ve._jQueryInterface.call(g(e), o, this);
  }), g.fn[Zt] = ve._jQueryInterface, g.fn[Zt].Constructor = ve, g.fn[Zt].noConflict = function () {
    return g.fn[Zt] = ne, ve._jQueryInterface;
  };
  var ye = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      Ee = {
    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  },
      Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function Se(t, s, e) {
    if (0 === t.length) return t;
    if (e && "function" == typeof e) return e(t);

    for (var n = new window.DOMParser().parseFromString(t, "text/html"), a = Object.keys(s), l = [].slice.call(n.body.querySelectorAll("*")), i = function i(t, e) {
      var n = l[t],
          i = n.nodeName.toLowerCase();
      if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
      var o = [].slice.call(n.attributes),
          r = [].concat(s["*"] || [], s[i] || []);
      o.forEach(function (t) {
        (function (t, e) {
          var n = t.nodeName.toLowerCase();
          if (-1 !== e.indexOf(n)) return -1 === ye.indexOf(n) || Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(Te));

          for (var i = e.filter(function (t) {
            return t instanceof RegExp;
          }), o = 0, r = i.length; o < r; o++) {
            if (n.match(i[o])) return !0;
          }

          return !1;
        })(t, r) || n.removeAttribute(t.nodeName);
      });
    }, o = 0, r = l.length; o < r; o++) {
      i(o);
    }

    return n.body.innerHTML;
  }

  var be = "tooltip",
      Ie = "bs.tooltip",
      De = "." + Ie,
      we = g.fn[be],
      Ae = "bs-tooltip",
      Ne = new RegExp("(^|\\s)" + Ae + "\\S+", "g"),
      Oe = ["sanitize", "whiteList", "sanitizeFn"],
      ke = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(number|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacement: "(string|array)",
    boundary: "(string|element)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    whiteList: "object"
  },
      Pe = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom",
    LEFT: "left"
  },
      Le = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: 0,
    container: !1,
    fallbackPlacement: "flip",
    boundary: "scrollParent",
    sanitize: !0,
    sanitizeFn: null,
    whiteList: Ee
  },
      je = "show",
      He = "out",
      Re = {
    HIDE: "hide" + De,
    HIDDEN: "hidden" + De,
    SHOW: "show" + De,
    SHOWN: "shown" + De,
    INSERTED: "inserted" + De,
    CLICK: "click" + De,
    FOCUSIN: "focusin" + De,
    FOCUSOUT: "focusout" + De,
    MOUSEENTER: "mouseenter" + De,
    MOUSELEAVE: "mouseleave" + De
  },
      xe = "fade",
      Fe = "show",
      Ue = ".tooltip-inner",
      We = ".arrow",
      qe = "hover",
      Me = "focus",
      Ke = "click",
      Qe = "manual",
      Be = function () {
    function i(t, e) {
      if ("undefined" == typeof u) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
    }

    var t = i.prototype;
    return t.enable = function () {
      this._isEnabled = !0;
    }, t.disable = function () {
      this._isEnabled = !1;
    }, t.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, t.toggle = function (t) {
      if (this._isEnabled) if (t) {
        var e = this.constructor.DATA_KEY,
            n = g(t.currentTarget).data(e);
        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (g(this.getTipElement()).hasClass(Fe)) return void this._leave(null, this);

        this._enter(null, this);
      }
    }, t.dispose = function () {
      clearTimeout(this._timeout), g.removeData(this.element, this.constructor.DATA_KEY), g(this.element).off(this.constructor.EVENT_KEY), g(this.element).closest(".modal").off("hide.bs.modal"), this.tip && g(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, t.show = function () {
      var e = this;
      if ("none" === g(this.element).css("display")) throw new Error("Please use show on visible elements");
      var t = g.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        g(this.element).trigger(t);

        var n = _.findShadowRoot(this.element),
            i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);

        if (t.isDefaultPrevented() || !i) return;

        var o = this.getTipElement(),
            r = _.getUID(this.constructor.NAME);

        o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && g(o).addClass(xe);

        var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
            a = this._getAttachment(s);

        this.addAttachmentClass(a);

        var l = this._getContainer();

        g(o).data(this.constructor.DATA_KEY, this), g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l), g(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, o, {
          placement: a,
          modifiers: {
            offset: this._getOffset(),
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: We
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(t) {
            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
          },
          onUpdate: function onUpdate(t) {
            return e._handlePopperPlacementChange(t);
          }
        }), g(o).addClass(Fe), "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);

        var c = function c() {
          e.config.animation && e._fixTransition();
          var t = e._hoverState;
          e._hoverState = null, g(e.element).trigger(e.constructor.Event.SHOWN), t === He && e._leave(null, e);
        };

        if (g(this.tip).hasClass(xe)) {
          var h = _.getTransitionDurationFromElement(this.tip);

          g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h);
        } else c();
      }
    }, t.hide = function (t) {
      var e = this,
          n = this.getTipElement(),
          i = g.Event(this.constructor.Event.HIDE),
          o = function o() {
        e._hoverState !== je && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), g(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t();
      };

      if (g(this.element).trigger(i), !i.isDefaultPrevented()) {
        if (g(n).removeClass(Fe), "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), this._activeTrigger[Ke] = !1, this._activeTrigger[Me] = !1, this._activeTrigger[qe] = !1, g(this.tip).hasClass(xe)) {
          var r = _.getTransitionDurationFromElement(n);

          g(n).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
        } else o();

        this._hoverState = "";
      }
    }, t.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, t.isWithContent = function () {
      return Boolean(this.getTitle());
    }, t.addAttachmentClass = function (t) {
      g(this.getTipElement()).addClass(Ae + "-" + t);
    }, t.getTipElement = function () {
      return this.tip = this.tip || g(this.config.template)[0], this.tip;
    }, t.setContent = function () {
      var t = this.getTipElement();
      this.setElementContent(g(t.querySelectorAll(Ue)), this.getTitle()), g(t).removeClass(xe + " " + Fe);
    }, t.setElementContent = function (t, e) {
      "object" != _typeof(e) || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = Se(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text());
    }, t.getTitle = function () {
      var t = this.element.getAttribute("data-original-title");
      return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
    }, t._getOffset = function () {
      var e = this,
          t = {};
      return "function" == typeof this.config.offset ? t.fn = function (t) {
        return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t;
      } : t.offset = this.config.offset, t;
    }, t._getContainer = function () {
      return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container);
    }, t._getAttachment = function (t) {
      return Pe[t.toUpperCase()];
    }, t._setListeners = function () {
      var i = this;
      this.config.trigger.split(" ").forEach(function (t) {
        if ("click" === t) g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
          return i.toggle(t);
        });else if (t !== Qe) {
          var e = t === qe ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
              n = t === qe ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
          g(i.element).on(e, i.config.selector, function (t) {
            return i._enter(t);
          }).on(n, i.config.selector, function (t) {
            return i._leave(t);
          });
        }
      }), g(this.element).closest(".modal").on("hide.bs.modal", function () {
        i.element && i.hide();
      }), this.config.selector ? this.config = l({}, this.config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }, t._fixTitle = function () {
      var t = _typeof(this.element.getAttribute("data-original-title"));

      (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, t._enter = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Me : qe] = !0), g(e.getTipElement()).hasClass(Fe) || e._hoverState === je ? e._hoverState = je : (clearTimeout(e._timeout), e._hoverState = je, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
        e._hoverState === je && e.show();
      }, e.config.delay.show) : e.show());
    }, t._leave = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Me : qe] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = He, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
        e._hoverState === He && e.hide();
      }, e.config.delay.hide) : e.hide());
    }, t._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) {
        if (this._activeTrigger[t]) return !0;
      }

      return !1;
    }, t._getConfig = function (t) {
      var e = g(this.element).data();
      return Object.keys(e).forEach(function (t) {
        -1 !== Oe.indexOf(t) && delete e[t];
      }), "number" == typeof (t = l({}, this.constructor.Default, e, "object" == _typeof(t) && t ? t : {})).delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _.typeCheckConfig(be, t, this.constructor.DefaultType), t.sanitize && (t.template = Se(t.template, t.whiteList, t.sanitizeFn)), t;
    }, t._getDelegateConfig = function () {
      var t = {};
      if (this.config) for (var e in this.config) {
        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      }
      return t;
    }, t._cleanTipClass = function () {
      var t = g(this.getTipElement()),
          e = t.attr("class").match(Ne);
      null !== e && e.length && t.removeClass(e.join(""));
    }, t._handlePopperPlacementChange = function (t) {
      var e = t.instance;
      this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
    }, t._fixTransition = function () {
      var t = this.getTipElement(),
          e = this.config.animation;
      null === t.getAttribute("x-placement") && (g(t).removeClass(xe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this).data(Ie),
            e = "object" == _typeof(n) && n;

        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ie, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return Le;
      }
    }, {
      key: "NAME",
      get: function get() {
        return be;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return Ie;
      }
    }, {
      key: "Event",
      get: function get() {
        return Re;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return De;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ke;
      }
    }]), i;
  }();

  g.fn[be] = Be._jQueryInterface, g.fn[be].Constructor = Be, g.fn[be].noConflict = function () {
    return g.fn[be] = we, Be._jQueryInterface;
  };

  var Ve = "popover",
      Ye = "bs.popover",
      ze = "." + Ye,
      Xe = g.fn[Ve],
      $e = "bs-popover",
      Ge = new RegExp("(^|\\s)" + $e + "\\S+", "g"),
      Je = l({}, Be.Default, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      Ze = l({}, Be.DefaultType, {
    content: "(string|element|function)"
  }),
      tn = "fade",
      en = "show",
      nn = ".popover-header",
      on = ".popover-body",
      rn = {
    HIDE: "hide" + ze,
    HIDDEN: "hidden" + ze,
    SHOW: "show" + ze,
    SHOWN: "shown" + ze,
    INSERTED: "inserted" + ze,
    CLICK: "click" + ze,
    FOCUSIN: "focusin" + ze,
    FOCUSOUT: "focusout" + ze,
    MOUSEENTER: "mouseenter" + ze,
    MOUSELEAVE: "mouseleave" + ze
  },
      sn = function (t) {
    var e, n;

    function i() {
      return t.apply(this, arguments) || this;
    }

    n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
    var o = i.prototype;
    return o.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, o.addAttachmentClass = function (t) {
      g(this.getTipElement()).addClass($e + "-" + t);
    }, o.getTipElement = function () {
      return this.tip = this.tip || g(this.config.template)[0], this.tip;
    }, o.setContent = function () {
      var t = g(this.getTipElement());
      this.setElementContent(t.find(nn), this.getTitle());

      var e = this._getContent();

      "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(on), e), t.removeClass(tn + " " + en);
    }, o._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, o._cleanTipClass = function () {
      var t = g(this.getTipElement()),
          e = t.attr("class").match(Ge);
      null !== e && 0 < e.length && t.removeClass(e.join(""));
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this).data(Ye),
            e = "object" == _typeof(n) ? n : null;

        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ye, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return Je;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Ve;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return Ye;
      }
    }, {
      key: "Event",
      get: function get() {
        return rn;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ze;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ze;
      }
    }]), i;
  }(Be);

  g.fn[Ve] = sn._jQueryInterface, g.fn[Ve].Constructor = sn, g.fn[Ve].noConflict = function () {
    return g.fn[Ve] = Xe, sn._jQueryInterface;
  };

  var an = "scrollspy",
      ln = "bs.scrollspy",
      cn = "." + ln,
      hn = g.fn[an],
      un = {
    offset: 10,
    method: "auto",
    target: ""
  },
      fn = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  },
      dn = {
    ACTIVATE: "activate" + cn,
    SCROLL: "scroll" + cn,
    LOAD_DATA_API: "load" + cn + ".data-api"
  },
      gn = "dropdown-item",
      _n = "active",
      mn = '[data-spy="scroll"]',
      pn = ".nav, .list-group",
      vn = ".nav-link",
      yn = ".nav-item",
      En = ".list-group-item",
      Cn = ".dropdown",
      Tn = ".dropdown-item",
      Sn = ".dropdown-toggle",
      bn = "offset",
      In = "position",
      Dn = function () {
    function n(t, e) {
      var n = this;
      this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + vn + "," + this._config.target + " " + En + "," + this._config.target + " " + Tn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, g(this._scrollElement).on(dn.SCROLL, function (t) {
        return n._process(t);
      }), this.refresh(), this._process();
    }

    var t = n.prototype;
    return t.refresh = function () {
      var e = this,
          t = this._scrollElement === this._scrollElement.window ? bn : In,
          o = "auto" === this._config.method ? t : this._config.method,
          r = o === In ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
        var e,
            n = _.getSelectorFromElement(t);

        if (n && (e = document.querySelector(n)), e) {
          var i = e.getBoundingClientRect();
          if (i.width || i.height) return [g(e)[o]().top + r, n];
        }

        return null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (t) {
        e._offsets.push(t[0]), e._targets.push(t[1]);
      });
    }, t.dispose = function () {
      g.removeData(this._element, ln), g(this._scrollElement).off(cn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, t._getConfig = function (t) {
      if ("string" != typeof (t = l({}, un, "object" == _typeof(t) && t ? t : {})).target) {
        var e = g(t.target).attr("id");
        e || (e = _.getUID(an), g(t.target).attr("id", e)), t.target = "#" + e;
      }

      return _.typeCheckConfig(an, t, fn), t;
    }, t._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, t._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, t._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, t._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();

      if (this._scrollHeight !== e && this.refresh(), n <= t) {
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();

        for (var o = this._offsets.length; o--;) {
          this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
        }
      }
    }, t._activate = function (e) {
      this._activeTarget = e, this._clear();

      var t = this._selector.split(",").map(function (t) {
        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
      }),
          n = g([].slice.call(document.querySelectorAll(t.join(","))));

      n.hasClass(gn) ? (n.closest(Cn).find(Sn).addClass(_n), n.addClass(_n)) : (n.addClass(_n), n.parents(pn).prev(vn + ", " + En).addClass(_n), n.parents(pn).prev(yn).children(vn).addClass(_n)), g(this._scrollElement).trigger(dn.ACTIVATE, {
        relatedTarget: e
      });
    }, t._clear = function () {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
        return t.classList.contains(_n);
      }).forEach(function (t) {
        return t.classList.remove(_n);
      });
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(ln);

        if (t || (t = new n(this, "object" == _typeof(e) && e), g(this).data(ln, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
          t[e]();
        }
      });
    }, s(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return un;
      }
    }]), n;
  }();

  g(window).on(dn.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(mn)), e = t.length; e--;) {
      var n = g(t[e]);

      Dn._jQueryInterface.call(n, n.data());
    }
  }), g.fn[an] = Dn._jQueryInterface, g.fn[an].Constructor = Dn, g.fn[an].noConflict = function () {
    return g.fn[an] = hn, Dn._jQueryInterface;
  };

  var wn = "bs.tab",
      An = "." + wn,
      Nn = g.fn.tab,
      On = {
    HIDE: "hide" + An,
    HIDDEN: "hidden" + An,
    SHOW: "show" + An,
    SHOWN: "shown" + An,
    CLICK_DATA_API: "click" + An + ".data-api"
  },
      kn = "dropdown-menu",
      Pn = "active",
      Ln = "disabled",
      jn = "fade",
      Hn = "show",
      Rn = ".dropdown",
      xn = ".nav, .list-group",
      Fn = ".active",
      Un = "> li > .active",
      Wn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      qn = ".dropdown-toggle",
      Mn = "> .dropdown-menu .active",
      Kn = function () {
    function i(t) {
      this._element = t;
    }

    var t = i.prototype;
    return t.show = function () {
      var n = this;

      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Pn) || g(this._element).hasClass(Ln))) {
        var t,
            i,
            e = g(this._element).closest(xn)[0],
            o = _.getSelectorFromElement(this._element);

        if (e) {
          var r = "UL" === e.nodeName || "OL" === e.nodeName ? Un : Fn;
          i = (i = g.makeArray(g(e).find(r)))[i.length - 1];
        }

        var s = g.Event(On.HIDE, {
          relatedTarget: this._element
        }),
            a = g.Event(On.SHOW, {
          relatedTarget: i
        });

        if (i && g(i).trigger(s), g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
          o && (t = document.querySelector(o)), this._activate(this._element, e);

          var l = function l() {
            var t = g.Event(On.HIDDEN, {
              relatedTarget: n._element
            }),
                e = g.Event(On.SHOWN, {
              relatedTarget: i
            });
            g(i).trigger(t), g(n._element).trigger(e);
          };

          t ? this._activate(t, t.parentNode, l) : l();
        }
      }
    }, t.dispose = function () {
      g.removeData(this._element, wn), this._element = null;
    }, t._activate = function (t, e, n) {
      var i = this,
          o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(Fn) : g(e).find(Un))[0],
          r = n && o && g(o).hasClass(jn),
          s = function s() {
        return i._transitionComplete(t, o, n);
      };

      if (o && r) {
        var a = _.getTransitionDurationFromElement(o);

        g(o).removeClass(Hn).one(_.TRANSITION_END, s).emulateTransitionEnd(a);
      } else s();
    }, t._transitionComplete = function (t, e, n) {
      if (e) {
        g(e).removeClass(Pn);
        var i = g(e.parentNode).find(Mn)[0];
        i && g(i).removeClass(Pn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
      }

      if (g(t).addClass(Pn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), _.reflow(t), t.classList.contains(jn) && t.classList.add(Hn), t.parentNode && g(t.parentNode).hasClass(kn)) {
        var o = g(t).closest(Rn)[0];

        if (o) {
          var r = [].slice.call(o.querySelectorAll(qn));
          g(r).addClass(Pn);
        }

        t.setAttribute("aria-expanded", !0);
      }

      n && n();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this),
            e = t.data(wn);

        if (e || (e = new i(this), t.data(wn, e)), "string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }]), i;
  }();

  g(document).on(On.CLICK_DATA_API, Wn, function (t) {
    t.preventDefault(), Kn._jQueryInterface.call(g(this), "show");
  }), g.fn.tab = Kn._jQueryInterface, g.fn.tab.Constructor = Kn, g.fn.tab.noConflict = function () {
    return g.fn.tab = Nn, Kn._jQueryInterface;
  };

  var Qn = "toast",
      Bn = "bs.toast",
      Vn = "." + Bn,
      Yn = g.fn[Qn],
      zn = {
    CLICK_DISMISS: "click.dismiss" + Vn,
    HIDE: "hide" + Vn,
    HIDDEN: "hidden" + Vn,
    SHOW: "show" + Vn,
    SHOWN: "shown" + Vn
  },
      Xn = "fade",
      $n = "hide",
      Gn = "show",
      Jn = "showing",
      Zn = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      ti = {
    animation: !0,
    autohide: !0,
    delay: 500
  },
      ei = '[data-dismiss="toast"]',
      ni = function () {
    function i(t, e) {
      this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners();
    }

    var t = i.prototype;
    return t.show = function () {
      var t = this;
      g(this._element).trigger(zn.SHOW), this._config.animation && this._element.classList.add(Xn);

      var e = function e() {
        t._element.classList.remove(Jn), t._element.classList.add(Gn), g(t._element).trigger(zn.SHOWN), t._config.autohide && t.hide();
      };

      if (this._element.classList.remove($n), this._element.classList.add(Jn), this._config.animation) {
        var n = _.getTransitionDurationFromElement(this._element);

        g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n);
      } else e();
    }, t.hide = function (t) {
      var e = this;
      this._element.classList.contains(Gn) && (g(this._element).trigger(zn.HIDE), t ? this._close() : this._timeout = setTimeout(function () {
        e._close();
      }, this._config.delay));
    }, t.dispose = function () {
      clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Gn) && this._element.classList.remove(Gn), g(this._element).off(zn.CLICK_DISMISS), g.removeData(this._element, Bn), this._element = null, this._config = null;
    }, t._getConfig = function (t) {
      return t = l({}, ti, g(this._element).data(), "object" == _typeof(t) && t ? t : {}), _.typeCheckConfig(Qn, t, this.constructor.DefaultType), t;
    }, t._setListeners = function () {
      var t = this;
      g(this._element).on(zn.CLICK_DISMISS, ei, function () {
        return t.hide(!0);
      });
    }, t._close = function () {
      var t = this,
          e = function e() {
        t._element.classList.add($n), g(t._element).trigger(zn.HIDDEN);
      };

      if (this._element.classList.remove(Gn), this._config.animation) {
        var n = _.getTransitionDurationFromElement(this._element);

        g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n);
      } else e();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this),
            e = t.data(Bn);

        if (e || (e = new i(this, "object" == _typeof(n) && n), t.data(Bn, e)), "string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n](this);
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.3.1";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Zn;
      }
    }, {
      key: "Default",
      get: function get() {
        return ti;
      }
    }]), i;
  }();

  g.fn[Qn] = ni._jQueryInterface, g.fn[Qn].Constructor = ni, g.fn[Qn].noConflict = function () {
    return g.fn[Qn] = Yn, ni._jQueryInterface;
  }, function () {
    if ("undefined" == typeof g) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var t = g.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(), t.Util = _, t.Alert = p, t.Button = P, t.Carousel = lt, t.Collapse = bt, t.Dropdown = Jt, t.Modal = ve, t.Popover = sn, t.Scrollspy = Dn, t.Tab = Kn, t.Toast = ni, t.Tooltip = Be, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});

/***/ })

},[["./assets/js/app.js","runtime","vendors~app~home~mask~vehicles","vendors~app~home~vehicles","vendors~app~mask","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy91dGlsLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvYWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL2NvbGxhcHNlLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3Rvb2xzL3Nhbml0aXplci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9wb3BvdmVyLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvc2Nyb2xsc3B5LmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdGFiLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJtYXNrIiwicmV2ZXJzZSIsIlNQTWFza0JlaGF2aW9yIiwidmFsIiwicmVwbGFjZSIsImxlbmd0aCIsInNwT3B0aW9ucyIsIm9uS2V5UHJlc3MiLCJlIiwiZmllbGQiLCJvcHRpb25zIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJTd2FsIiwiY29uc29sZSIsImxvZyIsIlRSQU5TSVRJT05fRU5EIiwidHJhbnNpdGlvbkVuZEVtdWxhdG9yIiwiZHVyYXRpb24iLCJjYWxsZWQiLCJ0aGlzIiwib25lIiwiVXRpbCIsInNldFRpbWVvdXQiLCJ0cmlnZ2VyVHJhbnNpdGlvbkVuZCIsIl90aGlzIiwiZ2V0VUlEIiwicHJlZml4IiwiTWF0aCIsInJhbmRvbSIsImdldEVsZW1lbnRCeUlkIiwiZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCIsImVsZW1lbnQiLCJzZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsImhyZWZBdHRyIiwidHJpbSIsInF1ZXJ5U2VsZWN0b3IiLCJlcnIiLCJnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCIsInRyYW5zaXRpb25EdXJhdGlvbiIsImNzcyIsInRyYW5zaXRpb25EZWxheSIsImZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uIiwicGFyc2VGbG9hdCIsImZsb2F0VHJhbnNpdGlvbkRlbGF5Iiwic3BsaXQiLCJyZWZsb3ciLCJvZmZzZXRIZWlnaHQiLCJ0cmlnZ2VyIiwic3VwcG9ydHNUcmFuc2l0aW9uRW5kIiwiQm9vbGVhbiIsImlzRWxlbWVudCIsIm9iaiIsIm5vZGVUeXBlIiwidHlwZUNoZWNrQ29uZmlnIiwiY29tcG9uZW50TmFtZSIsImNvbmZpZyIsImNvbmZpZ1R5cGVzIiwicHJvcGVydHkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJleHBlY3RlZFR5cGVzIiwidmFsdWUiLCJ2YWx1ZVR5cGUiLCJ0b1N0cmluZyIsIm1hdGNoIiwidG9Mb3dlckNhc2UiLCJSZWdFeHAiLCJ0ZXN0IiwiRXJyb3IiLCJ0b1VwcGVyQ2FzZSIsImZpbmRTaGFkb3dSb290IiwiZG9jdW1lbnRFbGVtZW50IiwiYXR0YWNoU2hhZG93IiwiZ2V0Um9vdE5vZGUiLCJTaGFkb3dSb290IiwicGFyZW50Tm9kZSIsInJvb3QiLCJmbiIsImVtdWxhdGVUcmFuc2l0aW9uRW5kIiwiZXZlbnQiLCJzcGVjaWFsIiwiYmluZFR5cGUiLCJkZWxlZ2F0ZVR5cGUiLCJoYW5kbGUiLCJ0YXJnZXQiLCJpcyIsImhhbmRsZU9iaiIsImhhbmRsZXIiLCJOQU1FIiwiREFUQV9LRVkiLCJFVkVOVF9LRVkiLCJKUVVFUllfTk9fQ09ORkxJQ1QiLCJFdmVudCIsIkNMT1NFIiwiQ0xPU0VEIiwiQ0xJQ0tfREFUQV9BUEkiLCJDbGFzc05hbWUiLCJBbGVydCIsIl9lbGVtZW50IiwiY2xvc2UiLCJyb290RWxlbWVudCIsIl9nZXRSb290RWxlbWVudCIsIl90cmlnZ2VyQ2xvc2VFdmVudCIsImlzRGVmYXVsdFByZXZlbnRlZCIsIl9yZW1vdmVFbGVtZW50IiwiZGlzcG9zZSIsInJlbW92ZURhdGEiLCJwYXJlbnQiLCJjbG9zZXN0IiwiY2xvc2VFdmVudCIsInJlbW92ZUNsYXNzIiwiaGFzQ2xhc3MiLCJfZGVzdHJveUVsZW1lbnQiLCJkZXRhY2giLCJyZW1vdmUiLCJfalF1ZXJ5SW50ZXJmYWNlIiwiZWFjaCIsIiRlbGVtZW50IiwiZGF0YSIsIl9oYW5kbGVEaXNtaXNzIiwiYWxlcnRJbnN0YW5jZSIsInByZXZlbnREZWZhdWx0Iiwib24iLCJDb25zdHJ1Y3RvciIsIm5vQ29uZmxpY3QiLCJEQVRBX0FQSV9LRVkiLCJTZWxlY3RvciIsIkZPQ1VTX0JMVVJfREFUQV9BUEkiLCJCdXR0b24iLCJ0b2dnbGUiLCJ0cmlnZ2VyQ2hhbmdlRXZlbnQiLCJhZGRBcmlhUHJlc3NlZCIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFjdGl2ZUVsZW1lbnQiLCJoYXNBdHRyaWJ1dGUiLCJmb2N1cyIsInNldEF0dHJpYnV0ZSIsInRvZ2dsZUNsYXNzIiwiYnV0dG9uIiwiRGVmYXVsdCIsImludGVydmFsIiwia2V5Ym9hcmQiLCJzbGlkZSIsInBhdXNlIiwid3JhcCIsInRvdWNoIiwiRGVmYXVsdFR5cGUiLCJEaXJlY3Rpb24iLCJTTElERSIsIlNMSUQiLCJLRVlET1dOIiwiTU9VU0VFTlRFUiIsIk1PVVNFTEVBVkUiLCJUT1VDSFNUQVJUIiwiVE9VQ0hNT1ZFIiwiVE9VQ0hFTkQiLCJQT0lOVEVSRE9XTiIsIlBPSU5URVJVUCIsIkRSQUdfU1RBUlQiLCJMT0FEX0RBVEFfQVBJIiwiUG9pbnRlclR5cGUiLCJUT1VDSCIsIlBFTiIsIkNhcm91c2VsIiwiX2l0ZW1zIiwiX2ludGVydmFsIiwiX2FjdGl2ZUVsZW1lbnQiLCJfaXNQYXVzZWQiLCJfaXNTbGlkaW5nIiwidG91Y2hUaW1lb3V0IiwidG91Y2hTdGFydFgiLCJ0b3VjaERlbHRhWCIsIl9jb25maWciLCJfZ2V0Q29uZmlnIiwiX2luZGljYXRvcnNFbGVtZW50IiwiX3RvdWNoU3VwcG9ydGVkIiwibmF2aWdhdG9yIiwibWF4VG91Y2hQb2ludHMiLCJfcG9pbnRlckV2ZW50Iiwid2luZG93IiwiUG9pbnRlckV2ZW50IiwiTVNQb2ludGVyRXZlbnQiLCJfYWRkRXZlbnRMaXN0ZW5lcnMiLCJuZXh0IiwiX3NsaWRlIiwibmV4dFdoZW5WaXNpYmxlIiwiaGlkZGVuIiwicHJldiIsImN5Y2xlIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwidmlzaWJpbGl0eVN0YXRlIiwiYmluZCIsInRvIiwiaW5kZXgiLCJhY3RpdmVJbmRleCIsIl9nZXRJdGVtSW5kZXgiLCJkaXJlY3Rpb24iLCJvZmYiLCJfb2JqZWN0U3ByZWFkIiwiX2hhbmRsZVN3aXBlIiwiYWJzRGVsdGF4IiwiYWJzIiwiX3RoaXMyIiwiX2tleWRvd24iLCJfYWRkVG91Y2hFdmVudExpc3RlbmVycyIsInN0YXJ0IiwiX3RoaXMzIiwib3JpZ2luYWxFdmVudCIsInBvaW50ZXJUeXBlIiwiY2xpZW50WCIsInRvdWNoZXMiLCJlbmQiLCJjbGVhclRpbWVvdXQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkIiwidGFnTmFtZSIsIndoaWNoIiwic2xpY2UiLCJpbmRleE9mIiwiX2dldEl0ZW1CeURpcmVjdGlvbiIsImlzTmV4dERpcmVjdGlvbiIsImlzUHJldkRpcmVjdGlvbiIsImxhc3RJdGVtSW5kZXgiLCJpdGVtSW5kZXgiLCJfdHJpZ2dlclNsaWRlRXZlbnQiLCJyZWxhdGVkVGFyZ2V0IiwiZXZlbnREaXJlY3Rpb25OYW1lIiwidGFyZ2V0SW5kZXgiLCJmcm9tSW5kZXgiLCJzbGlkZUV2ZW50IiwiZnJvbSIsIl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50IiwiaW5kaWNhdG9ycyIsIm5leHRJbmRpY2F0b3IiLCJjaGlsZHJlbiIsImFkZENsYXNzIiwiZGlyZWN0aW9uYWxDbGFzc05hbWUiLCJvcmRlckNsYXNzTmFtZSIsImFjdGl2ZUVsZW1lbnRJbmRleCIsIm5leHRFbGVtZW50IiwibmV4dEVsZW1lbnRJbmRleCIsImlzQ3ljbGluZyIsInNsaWRFdmVudCIsIm5leHRFbGVtZW50SW50ZXJ2YWwiLCJwYXJzZUludCIsImRlZmF1bHRJbnRlcnZhbCIsIl90aGlzNCIsImFjdGlvbiIsIlR5cGVFcnJvciIsInJpZGUiLCJfZGF0YUFwaUNsaWNrSGFuZGxlciIsInNsaWRlSW5kZXgiLCJjYXJvdXNlbHMiLCJpIiwibGVuIiwiJGNhcm91c2VsIiwiU0hPVyIsIlNIT1dOIiwiSElERSIsIkhJRERFTiIsIkRpbWVuc2lvbiIsIkNvbGxhcHNlIiwiX2lzVHJhbnNpdGlvbmluZyIsIl90cmlnZ2VyQXJyYXkiLCJpZCIsInRvZ2dsZUxpc3QiLCJlbGVtIiwiZmlsdGVyRWxlbWVudCIsImZpbHRlciIsImZvdW5kRWxlbSIsIl9zZWxlY3RvciIsInB1c2giLCJfcGFyZW50IiwiX2dldFBhcmVudCIsIl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MiLCJoaWRlIiwic2hvdyIsImFjdGl2ZXMiLCJhY3RpdmVzRGF0YSIsIm5vdCIsInN0YXJ0RXZlbnQiLCJkaW1lbnNpb24iLCJfZ2V0RGltZW5zaW9uIiwic3R5bGUiLCJhdHRyIiwic2V0VHJhbnNpdGlvbmluZyIsInNjcm9sbFNpemUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0cmlnZ2VyQXJyYXlMZW5ndGgiLCJpc1RyYW5zaXRpb25pbmciLCJqcXVlcnkiLCJfZ2V0VGFyZ2V0RnJvbUVsZW1lbnQiLCJ0cmlnZ2VyQXJyYXkiLCJpc09wZW4iLCIkdGhpcyIsImN1cnJlbnRUYXJnZXQiLCIkdHJpZ2dlciIsInNlbGVjdG9ycyIsIiR0YXJnZXQiLCJSRUdFWFBfS0VZRE9XTiIsIkFSUk9XX1VQX0tFWUNPREUiLCJDTElDSyIsIktFWURPV05fREFUQV9BUEkiLCJLRVlVUF9EQVRBX0FQSSIsIkF0dGFjaG1lbnRNYXAiLCJvZmZzZXQiLCJmbGlwIiwiYm91bmRhcnkiLCJyZWZlcmVuY2UiLCJkaXNwbGF5IiwiRHJvcGRvd24iLCJfcG9wcGVyIiwiX21lbnUiLCJfZ2V0TWVudUVsZW1lbnQiLCJfaW5OYXZiYXIiLCJfZGV0ZWN0TmF2YmFyIiwiZGlzYWJsZWQiLCJfZ2V0UGFyZW50RnJvbUVsZW1lbnQiLCJpc0FjdGl2ZSIsIl9jbGVhck1lbnVzIiwic2hvd0V2ZW50IiwiUG9wcGVyIiwicmVmZXJlbmNlRWxlbWVudCIsIl9nZXRQb3BwZXJDb25maWciLCJib2R5Iiwibm9vcCIsImhpZGVFdmVudCIsImRlc3Ryb3kiLCJ1cGRhdGUiLCJzY2hlZHVsZVVwZGF0ZSIsInN0b3BQcm9wYWdhdGlvbiIsImNvbnN0cnVjdG9yIiwiX2dldFBsYWNlbWVudCIsIiRwYXJlbnREcm9wZG93biIsInBsYWNlbWVudCIsIl9nZXRPZmZzZXQiLCJvZmZzZXRzIiwicG9wcGVyQ29uZmlnIiwibW9kaWZpZXJzIiwiZW5hYmxlZCIsInByZXZlbnRPdmVyZmxvdyIsImJvdW5kYXJpZXNFbGVtZW50IiwiYXBwbHlTdHlsZSIsInRvZ2dsZXMiLCJjb250ZXh0IiwiY2xpY2tFdmVudCIsImRyb3Bkb3duTWVudSIsIl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIiLCJpdGVtcyIsImJhY2tkcm9wIiwiRk9DVVNJTiIsIlJFU0laRSIsIkNMSUNLX0RJU01JU1MiLCJLRVlET1dOX0RJU01JU1MiLCJNT1VTRVVQX0RJU01JU1MiLCJNT1VTRURPV05fRElTTUlTUyIsIk1vZGFsIiwiX2RpYWxvZyIsIl9iYWNrZHJvcCIsIl9pc1Nob3duIiwiX2lzQm9keU92ZXJmbG93aW5nIiwiX2lnbm9yZUJhY2tkcm9wQ2xpY2siLCJfc2Nyb2xsYmFyV2lkdGgiLCJfY2hlY2tTY3JvbGxiYXIiLCJfc2V0U2Nyb2xsYmFyIiwiX2FkanVzdERpYWxvZyIsIl9zZXRFc2NhcGVFdmVudCIsIl9zZXRSZXNpemVFdmVudCIsIl9zaG93QmFja2Ryb3AiLCJfc2hvd0VsZW1lbnQiLCJ0cmFuc2l0aW9uIiwiX2hpZGVNb2RhbCIsImZvckVhY2giLCJodG1sRWxlbWVudCIsImhhbmRsZVVwZGF0ZSIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUF0dHJpYnV0ZSIsInNjcm9sbFRvcCIsIl9lbmZvcmNlRm9jdXMiLCJzaG93bkV2ZW50IiwidHJhbnNpdGlvbkNvbXBsZXRlIiwiaGFzIiwiX3RoaXM1IiwiX3RoaXM2IiwiX3RoaXM3IiwiX3Jlc2V0QWRqdXN0bWVudHMiLCJfcmVzZXRTY3JvbGxiYXIiLCJfcmVtb3ZlQmFja2Ryb3AiLCJjYWxsYmFjayIsImFuaW1hdGUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiYXBwZW5kVG8iLCJfdGhpczgiLCJiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiIsImNhbGxiYWNrUmVtb3ZlIiwiaXNNb2RhbE92ZXJmbG93aW5nIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJyZWN0IiwibGVmdCIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsIl9nZXRTY3JvbGxiYXJXaWR0aCIsImZpeGVkQ29udGVudCIsInN0aWNreUNvbnRlbnQiLCJhY3R1YWxQYWRkaW5nIiwiY2FsY3VsYXRlZFBhZGRpbmciLCJfdGhpczkiLCJhY3R1YWxNYXJnaW4iLCJtYXJnaW5SaWdodCIsImNhbGN1bGF0ZWRNYXJnaW4iLCJwYWRkaW5nIiwiZWxlbWVudHMiLCJtYXJnaW4iLCJzY3JvbGxEaXYiLCJzY3JvbGxiYXJXaWR0aCIsIndpZHRoIiwiY2xpZW50V2lkdGgiLCJyZW1vdmVDaGlsZCIsIl90aGlzMTAiLCJ1cmlBdHRycyIsIkRlZmF1bHRXaGl0ZWxpc3QiLCIqIiwiYSIsImFyZWEiLCJiIiwiYnIiLCJjb2wiLCJjb2RlIiwiZGl2IiwiZW0iLCJociIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsImltZyIsImxpIiwib2wiLCJwIiwicHJlIiwicyIsInNtYWxsIiwic3BhbiIsInN1YiIsInN1cCIsInN0cm9uZyIsInUiLCJ1bCIsIlNBRkVfVVJMX1BBVFRFUk4iLCJEQVRBX1VSTF9QQVRURVJOIiwic2FuaXRpemVIdG1sIiwidW5zYWZlSHRtbCIsIndoaXRlTGlzdCIsInNhbml0aXplRm4iLCJjcmVhdGVkRG9jdW1lbnQiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJ3aGl0ZWxpc3RLZXlzIiwia2V5cyIsIl9sb29wIiwiZWwiLCJlbE5hbWUiLCJub2RlTmFtZSIsImF0dHJpYnV0ZUxpc3QiLCJhdHRyaWJ1dGVzIiwid2hpdGVsaXN0ZWRBdHRyaWJ1dGVzIiwiY29uY2F0IiwiYWxsb3dlZEF0dHJpYnV0ZUxpc3QiLCJhdHRyTmFtZSIsIm5vZGVWYWx1ZSIsInJlZ0V4cCIsImF0dHJSZWdleCIsImwiLCJpbm5lckhUTUwiLCJDTEFTU19QUkVGSVgiLCJCU0NMU19QUkVGSVhfUkVHRVgiLCJESVNBTExPV0VEX0FUVFJJQlVURVMiLCJhbmltYXRpb24iLCJ0ZW1wbGF0ZSIsInRpdGxlIiwiZGVsYXkiLCJodG1sIiwiY29udGFpbmVyIiwiZmFsbGJhY2tQbGFjZW1lbnQiLCJzYW5pdGl6ZSIsIkFVVE8iLCJUT1AiLCJSSUdIVCIsIkJPVFRPTSIsIkxFRlQiLCJIb3ZlclN0YXRlIiwiSU5TRVJURUQiLCJGT0NVU09VVCIsIlRyaWdnZXIiLCJUb29sdGlwIiwiX2lzRW5hYmxlZCIsIl90aW1lb3V0IiwiX2hvdmVyU3RhdGUiLCJfYWN0aXZlVHJpZ2dlciIsInRpcCIsIl9zZXRMaXN0ZW5lcnMiLCJlbmFibGUiLCJkaXNhYmxlIiwidG9nZ2xlRW5hYmxlZCIsImRhdGFLZXkiLCJfZ2V0RGVsZWdhdGVDb25maWciLCJjbGljayIsIl9pc1dpdGhBY3RpdmVUcmlnZ2VyIiwiX2VudGVyIiwiX2xlYXZlIiwiZ2V0VGlwRWxlbWVudCIsImlzV2l0aENvbnRlbnQiLCJzaGFkb3dSb290IiwiaXNJblRoZURvbSIsIm93bmVyRG9jdW1lbnQiLCJ0aXBJZCIsInNldENvbnRlbnQiLCJhdHRhY2htZW50IiwiX2dldEF0dGFjaG1lbnQiLCJhZGRBdHRhY2htZW50Q2xhc3MiLCJfZ2V0Q29udGFpbmVyIiwiYmVoYXZpb3IiLCJhcnJvdyIsIm9uQ3JlYXRlIiwib3JpZ2luYWxQbGFjZW1lbnQiLCJfaGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlIiwib25VcGRhdGUiLCJjb21wbGV0ZSIsIl9maXhUcmFuc2l0aW9uIiwicHJldkhvdmVyU3RhdGUiLCJfY2xlYW5UaXBDbGFzcyIsImdldFRpdGxlIiwic2V0RWxlbWVudENvbnRlbnQiLCJjb250ZW50IiwidGV4dCIsImVtcHR5IiwiYXBwZW5kIiwiZmluZCIsImV2ZW50SW4iLCJldmVudE91dCIsIl9maXhUaXRsZSIsInRpdGxlVHlwZSIsImRhdGFBdHRyaWJ1dGVzIiwiZGF0YUF0dHIiLCJrZXkiLCIkdGlwIiwidGFiQ2xhc3MiLCJqb2luIiwicG9wcGVyRGF0YSIsInBvcHBlckluc3RhbmNlIiwiaW5zdGFuY2UiLCJwb3BwZXIiLCJpbml0Q29uZmlnQW5pbWF0aW9uIiwiUG9wb3ZlciIsIl9nZXRDb250ZW50IiwibWV0aG9kIiwiQUNUSVZBVEUiLCJTQ1JPTEwiLCJPZmZzZXRNZXRob2QiLCJTY3JvbGxTcHkiLCJfc2Nyb2xsRWxlbWVudCIsIl9vZmZzZXRzIiwiX3RhcmdldHMiLCJfYWN0aXZlVGFyZ2V0IiwiX3Njcm9sbEhlaWdodCIsIl9wcm9jZXNzIiwicmVmcmVzaCIsImF1dG9NZXRob2QiLCJvZmZzZXRNZXRob2QiLCJvZmZzZXRCYXNlIiwiX2dldFNjcm9sbFRvcCIsIl9nZXRTY3JvbGxIZWlnaHQiLCJtYXAiLCJ0YXJnZXRTZWxlY3RvciIsInRhcmdldEJDUiIsImhlaWdodCIsInRvcCIsIml0ZW0iLCJzb3J0IiwicGFnZVlPZmZzZXQiLCJtYXgiLCJfZ2V0T2Zmc2V0SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJtYXhTY3JvbGwiLCJfYWN0aXZhdGUiLCJfY2xlYXIiLCJxdWVyaWVzIiwiJGxpbmsiLCJwYXJlbnRzIiwibm9kZSIsInNjcm9sbFNweXMiLCIkc3B5IiwiVGFiIiwicHJldmlvdXMiLCJsaXN0RWxlbWVudCIsIml0ZW1TZWxlY3RvciIsIm1ha2VBcnJheSIsImhpZGRlbkV2ZW50IiwiYWN0aXZlIiwiX3RyYW5zaXRpb25Db21wbGV0ZSIsImRyb3Bkb3duQ2hpbGQiLCJkcm9wZG93bkVsZW1lbnQiLCJkcm9wZG93blRvZ2dsZUxpc3QiLCJhdXRvaGlkZSIsIlRvYXN0Iiwid2l0aG91dFRpbWVvdXQiLCJfY2xvc2UiLCJ2ZXJzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztBQU9BO0FBQ0FBLG1CQUFPLENBQUMsOENBQUQsQ0FBUCxDLENBRUE7OztBQUNBLElBQUlDLENBQUMsR0FBR0QsbUJBQU8sQ0FBQyxvREFBRCxDQUFmOztBQUNBQSxtQkFBTyxDQUFDLDhEQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsMkdBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyx1RUFBRCxDQUFQOztBQUVBQyxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDMUJGLEdBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWUcsSUFBWixDQUFpQix3QkFBakIsRUFBMkM7QUFBQ0MsV0FBTyxFQUFFO0FBQVYsR0FBM0M7QUFDQUosR0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNHLElBQW5DLENBQXdDLE1BQXhDOztBQUNBLE1BQUlFLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBVUMsR0FBVixFQUFlO0FBQzVCLFdBQU9BLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLEtBQVosRUFBbUIsRUFBbkIsRUFBdUJDLE1BQXZCLEtBQWtDLEVBQWxDLEdBQXVDLGlCQUF2QyxHQUEyRCxpQkFBbEU7QUFDSCxHQUZMO0FB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LENBQXBJLEVBQ0UsTUFBTSxJQUFJeGlCLEtBQUosQ0FBVSw2RUFBVixDQUFOO0FBYkosS0RzTUEzRSxFQ3RNQSxVRHNNQUEsRUN0TUEsV0RzTUFBLEVDdE1BLFlEc01BQSxFQ3RNQSxlRHNNQUEsRUN0TUEsZURzTUFBLEVDdE1BLGVEc01BQSxFQ3RNQSxZRHNNQUEsRUN0TUEsY0RzTUFBLEVDdE1BLGdCRHNNQUEsRUN0TUEsVURzTUFBLEVDdE1BLFlEc01BQSxFQ3RNQSxjRHNNQUEsRUN0TUE7QUFBQTtBQUFBLElEc01BQTtBQ3RNQSxDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSByZXF1aXJlIHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5zY3NzIGluIHRoaXMgY2FzZSlcbnJlcXVpcmUoJy4uL2Nzcy9hcHAuc2NzcycpO1xuXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIHJlcXVpcmUgaXQuXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xucmVxdWlyZSgncG9wcGVyLmpzJyk7XG5yZXF1aXJlKCcuLi8uLi92ZW5kb3IvdHdicy9ib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAubWluJyk7XG5yZXF1aXJlKCdzd2VldGFsZXJ0MicpO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJCgnLm1vbmV5JykubWFzaygnMDAwLjAwMC4wMDAuMDAwLjAwMCwwMCcsIHtyZXZlcnNlOiB0cnVlfSk7XG4gICAgJCgnW25hbWU9eWVhcl0sW25hbWU9bW9kZWxfeWVhcl0nKS5tYXNrKCcwMDAwJyk7XG4gICAgdmFyIFNQTWFza0JlaGF2aW9yID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbC5yZXBsYWNlKC9cXEQvZywgJycpLmxlbmd0aCA9PT0gMTEgPyAnKDAwKSAwMDAwMC0wMDAwJyA6ICcoMDApIDAwMDAtMDAwMDknO1xuICAgICAgICB9LFxuICAgICAgICBzcE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBvbktleVByZXNzOiBmdW5jdGlvbih2YWwsIGUsIGZpZWxkLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgZmllbGQubWFzayhTUE1hc2tCZWhhdmlvci5hcHBseSh7fSwgYXJndW1lbnRzKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAkKCcucGhvbmUnKS5tYXNrKFNQTWFza0JlaGF2aW9yLCBzcE9wdGlvbnMpO1xufSk7XG5cbi8vIENvbW1vbkpTXG5jb25zdCBTd2FsID0gcmVxdWlyZSgnc3dlZXRhbGVydDInKTtcblxuY29uc29sZS5sb2coJ0hlbGxvIFdlYnBhY2sgRW5jb3JlISBFZGl0IG1lIGluIGFzc2V0cy9qcy9hcHAuanMnKTtcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuMy4xKTogdXRpbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUHJpdmF0ZSBUcmFuc2l0aW9uRW5kIEhlbHBlcnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IFRSQU5TSVRJT05fRU5EID0gJ3RyYW5zaXRpb25lbmQnXG5jb25zdCBNQVhfVUlEID0gMTAwMDAwMFxuY29uc3QgTUlMTElTRUNPTkRTX01VTFRJUExJRVIgPSAxMDAwXG5cbi8vIFNob3V0b3V0IEFuZ3VzQ3JvbGwgKGh0dHBzOi8vZ29vLmdsL3B4d1FHcClcbmZ1bmN0aW9uIHRvVHlwZShvYmopIHtcbiAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwob2JqKS5tYXRjaCgvXFxzKFthLXpdKykvaSlbMV0udG9Mb3dlckNhc2UoKVxufVxuXG5mdW5jdGlvbiBnZXRTcGVjaWFsVHJhbnNpdGlvbkVuZEV2ZW50KCkge1xuICByZXR1cm4ge1xuICAgIGJpbmRUeXBlOiBUUkFOU0lUSU9OX0VORCxcbiAgICBkZWxlZ2F0ZVR5cGU6IFRSQU5TSVRJT05fRU5ELFxuICAgIGhhbmRsZShldmVudCkge1xuICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5pcyh0aGlzKSkge1xuICAgICAgICByZXR1cm4gZXZlbnQuaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmaW5lZFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uRW5kRW11bGF0b3IoZHVyYXRpb24pIHtcbiAgbGV0IGNhbGxlZCA9IGZhbHNlXG5cbiAgJCh0aGlzKS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKCkgPT4ge1xuICAgIGNhbGxlZCA9IHRydWVcbiAgfSlcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgVXRpbC50cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzKVxuICAgIH1cbiAgfSwgZHVyYXRpb24pXG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuZnVuY3Rpb24gc2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQoKSB7XG4gICQuZm4uZW11bGF0ZVRyYW5zaXRpb25FbmQgPSB0cmFuc2l0aW9uRW5kRW11bGF0b3JcbiAgJC5ldmVudC5zcGVjaWFsW1V0aWwuVFJBTlNJVElPTl9FTkRdID0gZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCgpXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFB1YmxpYyBVdGlsIEFwaVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBVdGlsID0ge1xuXG4gIFRSQU5TSVRJT05fRU5EOiAnYnNUcmFuc2l0aW9uRW5kJyxcblxuICBnZXRVSUQocHJlZml4KSB7XG4gICAgZG8ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICAgIHByZWZpeCArPSB+fihNYXRoLnJhbmRvbSgpICogTUFYX1VJRCkgLy8gXCJ+flwiIGFjdHMgbGlrZSBhIGZhc3RlciBNYXRoLmZsb29yKCkgaGVyZVxuICAgIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpXG4gICAgcmV0dXJuIHByZWZpeFxuICB9LFxuXG4gIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGxldCBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpXG5cbiAgICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnIycpIHtcbiAgICAgIGNvbnN0IGhyZWZBdHRyID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgc2VsZWN0b3IgPSBocmVmQXR0ciAmJiBocmVmQXR0ciAhPT0gJyMnID8gaHJlZkF0dHIudHJpbSgpIDogJydcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBudWxsXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfSxcblxuICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cblxuICAgIC8vIEdldCB0cmFuc2l0aW9uLWR1cmF0aW9uIG9mIHRoZSBlbGVtZW50XG4gICAgbGV0IHRyYW5zaXRpb25EdXJhdGlvbiA9ICQoZWxlbWVudCkuY3NzKCd0cmFuc2l0aW9uLWR1cmF0aW9uJylcbiAgICBsZXQgdHJhbnNpdGlvbkRlbGF5ID0gJChlbGVtZW50KS5jc3MoJ3RyYW5zaXRpb24tZGVsYXknKVxuXG4gICAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gPSBwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICBjb25zdCBmbG9hdFRyYW5zaXRpb25EZWxheSA9IHBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KVxuXG4gICAgLy8gUmV0dXJuIDAgaWYgZWxlbWVudCBvciB0cmFuc2l0aW9uIGR1cmF0aW9uIGlzIG5vdCBmb3VuZFxuICAgIGlmICghZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gJiYgIWZsb2F0VHJhbnNpdGlvbkRlbGF5KSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cblxuICAgIC8vIElmIG11bHRpcGxlIGR1cmF0aW9ucyBhcmUgZGVmaW5lZCwgdGFrZSB0aGUgZmlyc3RcbiAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24uc3BsaXQoJywnKVswXVxuICAgIHRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb25EZWxheS5zcGxpdCgnLCcpWzBdXG5cbiAgICByZXR1cm4gKHBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKSArIHBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KSkgKiBNSUxMSVNFQ09ORFNfTVVMVElQTElFUlxuICB9LFxuXG4gIHJlZmxvdyhlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gIH0sXG5cbiAgdHJpZ2dlclRyYW5zaXRpb25FbmQoZWxlbWVudCkge1xuICAgICQoZWxlbWVudCkudHJpZ2dlcihUUkFOU0lUSU9OX0VORClcbiAgfSxcblxuICAvLyBUT0RPOiBSZW1vdmUgaW4gdjVcbiAgc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkge1xuICAgIHJldHVybiBCb29sZWFuKFRSQU5TSVRJT05fRU5EKVxuICB9LFxuXG4gIGlzRWxlbWVudChvYmopIHtcbiAgICByZXR1cm4gKG9ialswXSB8fCBvYmopLm5vZGVUeXBlXG4gIH0sXG5cbiAgdHlwZUNoZWNrQ29uZmlnKGNvbXBvbmVudE5hbWUsIGNvbmZpZywgY29uZmlnVHlwZXMpIHtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGNvbmZpZ1R5cGVzKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZ1R5cGVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRUeXBlcyA9IGNvbmZpZ1R5cGVzW3Byb3BlcnR5XVxuICAgICAgICBjb25zdCB2YWx1ZSAgICAgICAgID0gY29uZmlnW3Byb3BlcnR5XVxuICAgICAgICBjb25zdCB2YWx1ZVR5cGUgICAgID0gdmFsdWUgJiYgVXRpbC5pc0VsZW1lbnQodmFsdWUpXG4gICAgICAgICAgPyAnZWxlbWVudCcgOiB0b1R5cGUodmFsdWUpXG5cbiAgICAgICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGAke2NvbXBvbmVudE5hbWUudG9VcHBlckNhc2UoKX06IGAgK1xuICAgICAgICAgICAgYE9wdGlvbiBcIiR7cHJvcGVydHl9XCIgcHJvdmlkZWQgdHlwZSBcIiR7dmFsdWVUeXBlfVwiIGAgK1xuICAgICAgICAgICAgYGJ1dCBleHBlY3RlZCB0eXBlIFwiJHtleHBlY3RlZFR5cGVzfVwiLmApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZmluZFNoYWRvd1Jvb3QoZWxlbWVudCkge1xuICAgIGlmICghZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmF0dGFjaFNoYWRvdykge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBDYW4gZmluZCB0aGUgc2hhZG93IHJvb3Qgb3RoZXJ3aXNlIGl0J2xsIHJldHVybiB0aGUgZG9jdW1lbnRcbiAgICBpZiAodHlwZW9mIGVsZW1lbnQuZ2V0Um9vdE5vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IHJvb3QgPSBlbGVtZW50LmdldFJvb3ROb2RlKClcbiAgICAgIHJldHVybiByb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IHJvb3QgOiBudWxsXG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgICByZXR1cm4gZWxlbWVudFxuICAgIH1cblxuICAgIC8vIHdoZW4gd2UgZG9uJ3QgZmluZCBhIHNoYWRvdyByb290XG4gICAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIFV0aWwuZmluZFNoYWRvd1Jvb3QoZWxlbWVudC5wYXJlbnROb2RlKVxuICB9XG59XG5cbnNldFRyYW5zaXRpb25FbmRTdXBwb3J0KClcblxuZXhwb3J0IGRlZmF1bHQgVXRpbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4zLjEpOiBhbGVydC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgID0gJ2FsZXJ0J1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgICA9ICc0LjMuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICAgPSAnYnMuYWxlcnQnXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICA9ICQuZm5bTkFNRV1cblxuY29uc3QgU2VsZWN0b3IgPSB7XG4gIERJU01JU1MgOiAnW2RhdGEtZGlzbWlzcz1cImFsZXJ0XCJdJ1xufVxuXG5jb25zdCBFdmVudCA9IHtcbiAgQ0xPU0UgICAgICAgICAgOiBgY2xvc2Uke0VWRU5UX0tFWX1gLFxuICBDTE9TRUQgICAgICAgICA6IGBjbG9zZWQke0VWRU5UX0tFWX1gLFxuICBDTElDS19EQVRBX0FQSSA6IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbn1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBBTEVSVCA6ICdhbGVydCcsXG4gIEZBREUgIDogJ2ZhZGUnLFxuICBTSE9XICA6ICdzaG93J1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgQWxlcnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIGNsb3NlKGVsZW1lbnQpIHtcbiAgICBsZXQgcm9vdEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHJvb3RFbGVtZW50ID0gdGhpcy5fZ2V0Um9vdEVsZW1lbnQoZWxlbWVudClcbiAgICB9XG5cbiAgICBjb25zdCBjdXN0b21FdmVudCA9IHRoaXMuX3RyaWdnZXJDbG9zZUV2ZW50KHJvb3RFbGVtZW50KVxuXG4gICAgaWYgKGN1c3RvbUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9yZW1vdmVFbGVtZW50KHJvb3RFbGVtZW50KVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Um9vdEVsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG4gICAgbGV0IHBhcmVudCAgICAgPSBmYWxzZVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgIH1cblxuICAgIGlmICghcGFyZW50KSB7XG4gICAgICBwYXJlbnQgPSAkKGVsZW1lbnQpLmNsb3Nlc3QoYC4ke0NsYXNzTmFtZS5BTEVSVH1gKVswXVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRcbiAgfVxuXG4gIF90cmlnZ2VyQ2xvc2VFdmVudChlbGVtZW50KSB7XG4gICAgY29uc3QgY2xvc2VFdmVudCA9ICQuRXZlbnQoRXZlbnQuQ0xPU0UpXG5cbiAgICAkKGVsZW1lbnQpLnRyaWdnZXIoY2xvc2VFdmVudClcbiAgICByZXR1cm4gY2xvc2VFdmVudFxuICB9XG5cbiAgX3JlbW92ZUVsZW1lbnQoZWxlbWVudCkge1xuICAgICQoZWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICBpZiAoISQoZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICB0aGlzLl9kZXN0cm95RWxlbWVudChlbGVtZW50KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChlbGVtZW50KVxuXG4gICAgJChlbGVtZW50KVxuICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAoZXZlbnQpID0+IHRoaXMuX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQsIGV2ZW50KSlcbiAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gIH1cblxuICBfZGVzdHJveUVsZW1lbnQoZWxlbWVudCkge1xuICAgICQoZWxlbWVudClcbiAgICAgIC5kZXRhY2goKVxuICAgICAgLnRyaWdnZXIoRXZlbnQuQ0xPU0VEKVxuICAgICAgLnJlbW92ZSgpXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0ICRlbGVtZW50ID0gJCh0aGlzKVxuICAgICAgbGV0IGRhdGEgICAgICAgPSAkZWxlbWVudC5kYXRhKERBVEFfS0VZKVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBBbGVydCh0aGlzKVxuICAgICAgICAkZWxlbWVudC5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnID09PSAnY2xvc2UnKSB7XG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgX2hhbmRsZURpc21pc3MoYWxlcnRJbnN0YW5jZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9XG5cbiAgICAgIGFsZXJ0SW5zdGFuY2UuY2xvc2UodGhpcylcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKGRvY3VtZW50KS5vbihcbiAgRXZlbnQuQ0xJQ0tfREFUQV9BUEksXG4gIFNlbGVjdG9yLkRJU01JU1MsXG4gIEFsZXJ0Ll9oYW5kbGVEaXNtaXNzKG5ldyBBbGVydCgpKVxuKVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdICAgICAgICAgICAgID0gQWxlcnQuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IEFsZXJ0XG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBBbGVydC5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjMuMSk6IGJ1dHRvbi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgID0gJ2J1dHRvbidcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICAgPSAnNC4zLjEnXG5jb25zdCBEQVRBX0tFWSAgICAgICAgICAgID0gJ2JzLmJ1dHRvbidcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZICAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgID0gJC5mbltOQU1FXVxuXG5jb25zdCBDbGFzc05hbWUgPSB7XG4gIEFDVElWRSA6ICdhY3RpdmUnLFxuICBCVVRUT04gOiAnYnRuJyxcbiAgRk9DVVMgIDogJ2ZvY3VzJ1xufVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgREFUQV9UT0dHTEVfQ0FSUk9UIDogJ1tkYXRhLXRvZ2dsZV49XCJidXR0b25cIl0nLFxuICBEQVRBX1RPR0dMRSAgICAgICAgOiAnW2RhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiXScsXG4gIElOUFVUICAgICAgICAgICAgICA6ICdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pJyxcbiAgQUNUSVZFICAgICAgICAgICAgIDogJy5hY3RpdmUnLFxuICBCVVRUT04gICAgICAgICAgICAgOiAnLmJ0bidcbn1cblxuY29uc3QgRXZlbnQgPSB7XG4gIENMSUNLX0RBVEFfQVBJICAgICAgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gLFxuICBGT0NVU19CTFVSX0RBVEFfQVBJIDogYGZvY3VzJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBgYmx1ciR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIEJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKCkge1xuICAgIGxldCB0cmlnZ2VyQ2hhbmdlRXZlbnQgPSB0cnVlXG4gICAgbGV0IGFkZEFyaWFQcmVzc2VkID0gdHJ1ZVxuICAgIGNvbnN0IHJvb3RFbGVtZW50ID0gJCh0aGlzLl9lbGVtZW50KS5jbG9zZXN0KFxuICAgICAgU2VsZWN0b3IuREFUQV9UT0dHTEVcbiAgICApWzBdXG5cbiAgICBpZiAocm9vdEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLklOUFVUKVxuXG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICBpZiAoaW5wdXQuY2hlY2tlZCAmJlxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLkFDVElWRSkpIHtcbiAgICAgICAgICAgIHRyaWdnZXJDaGFuZ2VFdmVudCA9IGZhbHNlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSByb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkFDVElWRSlcblxuICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgJChhY3RpdmVFbGVtZW50KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlRXZlbnQpIHtcbiAgICAgICAgICBpZiAoaW5wdXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8XG4gICAgICAgICAgICByb290RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgfHxcbiAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSB8fFxuICAgICAgICAgICAgcm9vdEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgaW5wdXQuY2hlY2tlZCA9ICF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuQUNUSVZFKVxuICAgICAgICAgICQoaW5wdXQpLnRyaWdnZXIoJ2NoYW5nZScpXG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dC5mb2N1cygpXG4gICAgICAgIGFkZEFyaWFQcmVzc2VkID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWRkQXJpYVByZXNzZWQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLFxuICAgICAgICAhdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLkFDVElWRSkpXG4gICAgfVxuXG4gICAgaWYgKHRyaWdnZXJDaGFuZ2VFdmVudCkge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS50b2dnbGVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgIH1cbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBCdXR0b24odGhpcylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnID09PSAndG9nZ2xlJykge1xuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKGRvY3VtZW50KVxuICAub24oRXZlbnQuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfVE9HR0xFX0NBUlJPVCwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgbGV0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldFxuXG4gICAgaWYgKCEkKGJ1dHRvbikuaGFzQ2xhc3MoQ2xhc3NOYW1lLkJVVFRPTikpIHtcbiAgICAgIGJ1dHRvbiA9ICQoYnV0dG9uKS5jbG9zZXN0KFNlbGVjdG9yLkJVVFRPTilcbiAgICB9XG5cbiAgICBCdXR0b24uX2pRdWVyeUludGVyZmFjZS5jYWxsKCQoYnV0dG9uKSwgJ3RvZ2dsZScpXG4gIH0pXG4gIC5vbihFdmVudC5GT0NVU19CTFVSX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRV9DQVJST1QsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9ICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFNlbGVjdG9yLkJVVFRPTilbMF1cbiAgICAkKGJ1dHRvbikudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLkZPQ1VTLCAvXmZvY3VzKGluKT8kLy50ZXN0KGV2ZW50LnR5cGUpKVxuICB9KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gQnV0dG9uLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBCdXR0b25cbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gQnV0dG9uLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjMuMSk6IGNhcm91c2VsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICAgICAgPSAnY2Fyb3VzZWwnXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgICAgID0gJzQuMy4xJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgICAgICA9ICdicy5jYXJvdXNlbCdcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZICAgICAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgICAgID0gJC5mbltOQU1FXVxuY29uc3QgQVJST1dfTEVGVF9LRVlDT0RFICAgICA9IDM3IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIGxlZnQgYXJyb3cga2V5XG5jb25zdCBBUlJPV19SSUdIVF9LRVlDT0RFICAgID0gMzkgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgcmlnaHQgYXJyb3cga2V5XG5jb25zdCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUID0gNTAwIC8vIFRpbWUgZm9yIG1vdXNlIGNvbXBhdCBldmVudHMgdG8gZmlyZSBhZnRlciB0b3VjaFxuY29uc3QgU1dJUEVfVEhSRVNIT0xEICAgICAgICA9IDQwXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGludGVydmFsIDogNTAwMCxcbiAga2V5Ym9hcmQgOiB0cnVlLFxuICBzbGlkZSAgICA6IGZhbHNlLFxuICBwYXVzZSAgICA6ICdob3ZlcicsXG4gIHdyYXAgICAgIDogdHJ1ZSxcbiAgdG91Y2ggICAgOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBpbnRlcnZhbCA6ICcobnVtYmVyfGJvb2xlYW4pJyxcbiAga2V5Ym9hcmQgOiAnYm9vbGVhbicsXG4gIHNsaWRlICAgIDogJyhib29sZWFufHN0cmluZyknLFxuICBwYXVzZSAgICA6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgd3JhcCAgICAgOiAnYm9vbGVhbicsXG4gIHRvdWNoICAgIDogJ2Jvb2xlYW4nXG59XG5cbmNvbnN0IERpcmVjdGlvbiA9IHtcbiAgTkVYVCAgICAgOiAnbmV4dCcsXG4gIFBSRVYgICAgIDogJ3ByZXYnLFxuICBMRUZUICAgICA6ICdsZWZ0JyxcbiAgUklHSFQgICAgOiAncmlnaHQnXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBTTElERSAgICAgICAgICA6IGBzbGlkZSR7RVZFTlRfS0VZfWAsXG4gIFNMSUQgICAgICAgICAgIDogYHNsaWQke0VWRU5UX0tFWX1gLFxuICBLRVlET1dOICAgICAgICA6IGBrZXlkb3duJHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VFTlRFUiAgICAgOiBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFTEVBVkUgICAgIDogYG1vdXNlbGVhdmUke0VWRU5UX0tFWX1gLFxuICBUT1VDSFNUQVJUICAgICA6IGB0b3VjaHN0YXJ0JHtFVkVOVF9LRVl9YCxcbiAgVE9VQ0hNT1ZFICAgICAgOiBgdG91Y2htb3ZlJHtFVkVOVF9LRVl9YCxcbiAgVE9VQ0hFTkQgICAgICAgOiBgdG91Y2hlbmQke0VWRU5UX0tFWX1gLFxuICBQT0lOVEVSRE9XTiAgICA6IGBwb2ludGVyZG93biR7RVZFTlRfS0VZfWAsXG4gIFBPSU5URVJVUCAgICAgIDogYHBvaW50ZXJ1cCR7RVZFTlRfS0VZfWAsXG4gIERSQUdfU1RBUlQgICAgIDogYGRyYWdzdGFydCR7RVZFTlRfS0VZfWAsXG4gIExPQURfREFUQV9BUEkgIDogYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gLFxuICBDTElDS19EQVRBX0FQSSA6IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbn1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBDQVJPVVNFTCAgICAgIDogJ2Nhcm91c2VsJyxcbiAgQUNUSVZFICAgICAgICA6ICdhY3RpdmUnLFxuICBTTElERSAgICAgICAgIDogJ3NsaWRlJyxcbiAgUklHSFQgICAgICAgICA6ICdjYXJvdXNlbC1pdGVtLXJpZ2h0JyxcbiAgTEVGVCAgICAgICAgICA6ICdjYXJvdXNlbC1pdGVtLWxlZnQnLFxuICBORVhUICAgICAgICAgIDogJ2Nhcm91c2VsLWl0ZW0tbmV4dCcsXG4gIFBSRVYgICAgICAgICAgOiAnY2Fyb3VzZWwtaXRlbS1wcmV2JyxcbiAgSVRFTSAgICAgICAgICA6ICdjYXJvdXNlbC1pdGVtJyxcbiAgUE9JTlRFUl9FVkVOVCA6ICdwb2ludGVyLWV2ZW50J1xufVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgQUNUSVZFICAgICAgOiAnLmFjdGl2ZScsXG4gIEFDVElWRV9JVEVNIDogJy5hY3RpdmUuY2Fyb3VzZWwtaXRlbScsXG4gIElURU0gICAgICAgIDogJy5jYXJvdXNlbC1pdGVtJyxcbiAgSVRFTV9JTUcgICAgOiAnLmNhcm91c2VsLWl0ZW0gaW1nJyxcbiAgTkVYVF9QUkVWICAgOiAnLmNhcm91c2VsLWl0ZW0tbmV4dCwgLmNhcm91c2VsLWl0ZW0tcHJldicsXG4gIElORElDQVRPUlMgIDogJy5jYXJvdXNlbC1pbmRpY2F0b3JzJyxcbiAgREFUQV9TTElERSAgOiAnW2RhdGEtc2xpZGVdLCBbZGF0YS1zbGlkZS10b10nLFxuICBEQVRBX1JJREUgICA6ICdbZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIl0nXG59XG5cbmNvbnN0IFBvaW50ZXJUeXBlID0ge1xuICBUT1VDSCA6ICd0b3VjaCcsXG4gIFBFTiAgIDogJ3Blbidcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5jbGFzcyBDYXJvdXNlbCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2l0ZW1zICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5faW50ZXJ2YWwgICAgICA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX2lzUGF1c2VkICAgICAgPSBmYWxzZVxuICAgIHRoaXMuX2lzU2xpZGluZyAgICAgPSBmYWxzZVxuICAgIHRoaXMudG91Y2hUaW1lb3V0ICAgPSBudWxsXG4gICAgdGhpcy50b3VjaFN0YXJ0WCAgICA9IDBcbiAgICB0aGlzLnRvdWNoRGVsdGFYICAgID0gMFxuXG4gICAgdGhpcy5fY29uZmlnICAgICAgICAgICAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICAgID0gZWxlbWVudFxuICAgIHRoaXMuX2luZGljYXRvcnNFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLklORElDQVRPUlMpXG4gICAgdGhpcy5fdG91Y2hTdXBwb3J0ZWQgICAgPSAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMFxuICAgIHRoaXMuX3BvaW50ZXJFdmVudCAgICAgID0gQm9vbGVhbih3aW5kb3cuUG9pbnRlckV2ZW50IHx8IHdpbmRvdy5NU1BvaW50ZXJFdmVudClcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgbmV4dCgpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2xpZGluZykge1xuICAgICAgdGhpcy5fc2xpZGUoRGlyZWN0aW9uLk5FWFQpXG4gICAgfVxuICB9XG5cbiAgbmV4dFdoZW5WaXNpYmxlKCkge1xuICAgIC8vIERvbid0IGNhbGwgbmV4dCB3aGVuIHRoZSBwYWdlIGlzbid0IHZpc2libGVcbiAgICAvLyBvciB0aGUgY2Fyb3VzZWwgb3IgaXRzIHBhcmVudCBpc24ndCB2aXNpYmxlXG4gICAgaWYgKCFkb2N1bWVudC5oaWRkZW4gJiZcbiAgICAgICgkKHRoaXMuX2VsZW1lbnQpLmlzKCc6dmlzaWJsZScpICYmICQodGhpcy5fZWxlbWVudCkuY3NzKCd2aXNpYmlsaXR5JykgIT09ICdoaWRkZW4nKSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gIH1cblxuICBwcmV2KCkge1xuICAgIGlmICghdGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICB0aGlzLl9zbGlkZShEaXJlY3Rpb24uUFJFVilcbiAgICB9XG4gIH1cblxuICBwYXVzZShldmVudCkge1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIHRoaXMuX2lzUGF1c2VkID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTkVYVF9QUkVWKSkge1xuICAgICAgVXRpbC50cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50KVxuICAgICAgdGhpcy5jeWNsZSh0cnVlKVxuICAgIH1cblxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gIH1cblxuICBjeWNsZShldmVudCkge1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIHRoaXMuX2lzUGF1c2VkID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW50ZXJ2YWwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmludGVydmFsICYmICF0aGlzLl9pc1BhdXNlZCkge1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA/IHRoaXMubmV4dFdoZW5WaXNpYmxlIDogdGhpcy5uZXh0KS5iaW5kKHRoaXMpLFxuICAgICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWxcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICB0byhpbmRleCkge1xuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuQUNUSVZFX0lURU0pXG5cbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleCh0aGlzLl9hY3RpdmVFbGVtZW50KVxuXG4gICAgaWYgKGluZGV4ID4gdGhpcy5faXRlbXMubGVuZ3RoIC0gMSB8fCBpbmRleCA8IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub25lKEV2ZW50LlNMSUQsICgpID0+IHRoaXMudG8oaW5kZXgpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZUluZGV4ID09PSBpbmRleCkge1xuICAgICAgdGhpcy5wYXVzZSgpXG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGluZGV4ID4gYWN0aXZlSW5kZXhcbiAgICAgID8gRGlyZWN0aW9uLk5FWFRcbiAgICAgIDogRGlyZWN0aW9uLlBSRVZcblxuICAgIHRoaXMuX3NsaWRlKGRpcmVjdGlvbiwgdGhpcy5faXRlbXNbaW5kZXhdKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFVkVOVF9LRVkpXG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuXG4gICAgdGhpcy5faXRlbXMgICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fY29uZmlnICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fZWxlbWVudCAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5faW50ZXJ2YWwgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5faXNQYXVzZWQgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5faXNTbGlkaW5nICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCAgICAgPSBudWxsXG4gICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2hhbmRsZVN3aXBlKCkge1xuICAgIGNvbnN0IGFic0RlbHRheCA9IE1hdGguYWJzKHRoaXMudG91Y2hEZWx0YVgpXG5cbiAgICBpZiAoYWJzRGVsdGF4IDw9IFNXSVBFX1RIUkVTSE9MRCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGlyZWN0aW9uID0gYWJzRGVsdGF4IC8gdGhpcy50b3VjaERlbHRhWFxuXG4gICAgLy8gc3dpcGUgbGVmdFxuICAgIGlmIChkaXJlY3Rpb24gPiAwKSB7XG4gICAgICB0aGlzLnByZXYoKVxuICAgIH1cblxuICAgIC8vIHN3aXBlIHJpZ2h0XG4gICAgaWYgKGRpcmVjdGlvbiA8IDApIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgfVxuICB9XG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLm9uKEV2ZW50LktFWURPV04sIChldmVudCkgPT4gdGhpcy5fa2V5ZG93bihldmVudCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAub24oRXZlbnQuTU9VU0VFTlRFUiwgKGV2ZW50KSA9PiB0aGlzLnBhdXNlKGV2ZW50KSlcbiAgICAgICAgLm9uKEV2ZW50Lk1PVVNFTEVBVkUsIChldmVudCkgPT4gdGhpcy5jeWNsZShldmVudCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy50b3VjaCkge1xuICAgICAgdGhpcy5fYWRkVG91Y2hFdmVudExpc3RlbmVycygpXG4gICAgfVxuICB9XG5cbiAgX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCF0aGlzLl90b3VjaFN1cHBvcnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnQgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLl9wb2ludGVyRXZlbnQgJiYgUG9pbnRlclR5cGVbZXZlbnQub3JpZ2luYWxFdmVudC5wb2ludGVyVHlwZS50b1VwcGVyQ2FzZSgpXSkge1xuICAgICAgICB0aGlzLnRvdWNoU3RhcnRYID0gZXZlbnQub3JpZ2luYWxFdmVudC5jbGllbnRYXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLl9wb2ludGVyRXZlbnQpIHtcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0WCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXS5jbGllbnRYXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbW92ZSA9IChldmVudCkgPT4ge1xuICAgICAgLy8gZW5zdXJlIHN3aXBpbmcgd2l0aCBvbmUgdG91Y2ggYW5kIG5vdCBwaW5jaGluZ1xuICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAmJiBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICB0aGlzLnRvdWNoRGVsdGFYID0gMFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50b3VjaERlbHRhWCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy50b3VjaFN0YXJ0WFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGVuZCA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudCAmJiBQb2ludGVyVHlwZVtldmVudC5vcmlnaW5hbEV2ZW50LnBvaW50ZXJUeXBlLnRvVXBwZXJDYXNlKCldKSB7XG4gICAgICAgIHRoaXMudG91Y2hEZWx0YVggPSBldmVudC5vcmlnaW5hbEV2ZW50LmNsaWVudFggLSB0aGlzLnRvdWNoU3RhcnRYXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2hhbmRsZVN3aXBlKClcbiAgICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgICAgLy8gSWYgaXQncyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlLCBtb3VzZWVudGVyL2xlYXZlIGFyZSBmaXJlZCBhc1xuICAgICAgICAvLyBwYXJ0IG9mIHRoZSBtb3VzZSBjb21wYXRpYmlsaXR5IGV2ZW50cyBvbiBmaXJzdCB0YXAgLSB0aGUgY2Fyb3VzZWxcbiAgICAgICAgLy8gd291bGQgc3RvcCBjeWNsaW5nIHVudGlsIHVzZXIgdGFwcGVkIG91dCBvZiBpdDtcbiAgICAgICAgLy8gaGVyZSwgd2UgbGlzdGVuIGZvciB0b3VjaGVuZCwgZXhwbGljaXRseSBwYXVzZSB0aGUgY2Fyb3VzZWxcbiAgICAgICAgLy8gKGFzIGlmIGl0J3MgdGhlIHNlY29uZCB0aW1lIHdlIHRhcCBvbiBpdCwgbW91c2VlbnRlciBjb21wYXQgZXZlbnRcbiAgICAgICAgLy8gaXMgTk9UIGZpcmVkKSBhbmQgYWZ0ZXIgYSB0aW1lb3V0ICh0byBhbGxvdyBmb3IgbW91c2UgY29tcGF0aWJpbGl0eVxuICAgICAgICAvLyBldmVudHMgdG8gZmlyZSkgd2UgZXhwbGljaXRseSByZXN0YXJ0IGN5Y2xpbmdcblxuICAgICAgICB0aGlzLnBhdXNlKClcbiAgICAgICAgaWYgKHRoaXMudG91Y2hUaW1lb3V0KSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG91Y2hUaW1lb3V0KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gc2V0VGltZW91dCgoZXZlbnQpID0+IHRoaXMuY3ljbGUoZXZlbnQpLCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUICsgdGhpcy5fY29uZmlnLmludGVydmFsKVxuICAgICAgfVxuICAgIH1cblxuICAgICQodGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLklURU1fSU1HKSkub24oRXZlbnQuRFJBR19TVEFSVCwgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSlcbiAgICBpZiAodGhpcy5fcG9pbnRlckV2ZW50KSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LlBPSU5URVJET1dOLCAoZXZlbnQpID0+IHN0YXJ0KGV2ZW50KSlcbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuUE9JTlRFUlVQLCAoZXZlbnQpID0+IGVuZChldmVudCkpXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDbGFzc05hbWUuUE9JTlRFUl9FVkVOVClcbiAgICB9IGVsc2Uge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5UT1VDSFNUQVJULCAoZXZlbnQpID0+IHN0YXJ0KGV2ZW50KSlcbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuVE9VQ0hNT1ZFLCAoZXZlbnQpID0+IG1vdmUoZXZlbnQpKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5UT1VDSEVORCwgKGV2ZW50KSA9PiBlbmQoZXZlbnQpKVxuICAgIH1cbiAgfVxuXG4gIF9rZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzd2l0Y2ggKGV2ZW50LndoaWNoKSB7XG4gICAgICBjYXNlIEFSUk9XX0xFRlRfS0VZQ09ERTpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB0aGlzLnByZXYoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBBUlJPV19SSUdIVF9LRVlDT0RFOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHRoaXMubmV4dCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuXG4gIF9nZXRJdGVtSW5kZXgoZWxlbWVudCkge1xuICAgIHRoaXMuX2l0ZW1zID0gZWxlbWVudCAmJiBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgID8gW10uc2xpY2UuY2FsbChlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5JVEVNKSlcbiAgICAgIDogW11cbiAgICByZXR1cm4gdGhpcy5faXRlbXMuaW5kZXhPZihlbGVtZW50KVxuICB9XG5cbiAgX2dldEl0ZW1CeURpcmVjdGlvbihkaXJlY3Rpb24sIGFjdGl2ZUVsZW1lbnQpIHtcbiAgICBjb25zdCBpc05leHREaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5ORVhUXG4gICAgY29uc3QgaXNQcmV2RGlyZWN0aW9uID0gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uUFJFVlxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ICAgICA9IHRoaXMuX2dldEl0ZW1JbmRleChhY3RpdmVFbGVtZW50KVxuICAgIGNvbnN0IGxhc3RJdGVtSW5kZXggICA9IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDFcbiAgICBjb25zdCBpc0dvaW5nVG9XcmFwICAgPSBpc1ByZXZEaXJlY3Rpb24gJiYgYWN0aXZlSW5kZXggPT09IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc05leHREaXJlY3Rpb24gJiYgYWN0aXZlSW5kZXggPT09IGxhc3RJdGVtSW5kZXhcblxuICAgIGlmIChpc0dvaW5nVG9XcmFwICYmICF0aGlzLl9jb25maWcud3JhcCkge1xuICAgICAgcmV0dXJuIGFjdGl2ZUVsZW1lbnRcbiAgICB9XG5cbiAgICBjb25zdCBkZWx0YSAgICAgPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5QUkVWID8gLTEgOiAxXG4gICAgY29uc3QgaXRlbUluZGV4ID0gKGFjdGl2ZUluZGV4ICsgZGVsdGEpICUgdGhpcy5faXRlbXMubGVuZ3RoXG5cbiAgICByZXR1cm4gaXRlbUluZGV4ID09PSAtMVxuICAgICAgPyB0aGlzLl9pdGVtc1t0aGlzLl9pdGVtcy5sZW5ndGggLSAxXSA6IHRoaXMuX2l0ZW1zW2l0ZW1JbmRleF1cbiAgfVxuXG4gIF90cmlnZ2VyU2xpZGVFdmVudChyZWxhdGVkVGFyZ2V0LCBldmVudERpcmVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChyZWxhdGVkVGFyZ2V0KVxuICAgIGNvbnN0IGZyb21JbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleCh0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuQUNUSVZFX0lURU0pKVxuICAgIGNvbnN0IHNsaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNMSURFLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0LFxuICAgICAgZGlyZWN0aW9uOiBldmVudERpcmVjdGlvbk5hbWUsXG4gICAgICBmcm9tOiBmcm9tSW5kZXgsXG4gICAgICB0bzogdGFyZ2V0SW5kZXhcbiAgICB9KVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNsaWRlRXZlbnQpXG5cbiAgICByZXR1cm4gc2xpZGVFdmVudFxuICB9XG5cbiAgX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQoZWxlbWVudCkge1xuICAgIGlmICh0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCkge1xuICAgICAgY29uc3QgaW5kaWNhdG9ycyA9IFtdLnNsaWNlLmNhbGwodGhpcy5faW5kaWNhdG9yc0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5BQ1RJVkUpKVxuICAgICAgJChpbmRpY2F0b3JzKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcblxuICAgICAgY29uc3QgbmV4dEluZGljYXRvciA9IHRoaXMuX2luZGljYXRvcnNFbGVtZW50LmNoaWxkcmVuW1xuICAgICAgICB0aGlzLl9nZXRJdGVtSW5kZXgoZWxlbWVudClcbiAgICAgIF1cblxuICAgICAgaWYgKG5leHRJbmRpY2F0b3IpIHtcbiAgICAgICAgJChuZXh0SW5kaWNhdG9yKS5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9zbGlkZShkaXJlY3Rpb24sIGVsZW1lbnQpIHtcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkFDVElWRV9JVEVNKVxuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChhY3RpdmVFbGVtZW50KVxuICAgIGNvbnN0IG5leHRFbGVtZW50ICAgPSBlbGVtZW50IHx8IGFjdGl2ZUVsZW1lbnQgJiZcbiAgICAgIHRoaXMuX2dldEl0ZW1CeURpcmVjdGlvbihkaXJlY3Rpb24sIGFjdGl2ZUVsZW1lbnQpXG4gICAgY29uc3QgbmV4dEVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChuZXh0RWxlbWVudClcbiAgICBjb25zdCBpc0N5Y2xpbmcgPSBCb29sZWFuKHRoaXMuX2ludGVydmFsKVxuXG4gICAgbGV0IGRpcmVjdGlvbmFsQ2xhc3NOYW1lXG4gICAgbGV0IG9yZGVyQ2xhc3NOYW1lXG4gICAgbGV0IGV2ZW50RGlyZWN0aW9uTmFtZVxuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLk5FWFQpIHtcbiAgICAgIGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gQ2xhc3NOYW1lLkxFRlRcbiAgICAgIG9yZGVyQ2xhc3NOYW1lID0gQ2xhc3NOYW1lLk5FWFRcbiAgICAgIGV2ZW50RGlyZWN0aW9uTmFtZSA9IERpcmVjdGlvbi5MRUZUXG4gICAgfSBlbHNlIHtcbiAgICAgIGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gQ2xhc3NOYW1lLlJJR0hUXG4gICAgICBvcmRlckNsYXNzTmFtZSA9IENsYXNzTmFtZS5QUkVWXG4gICAgICBldmVudERpcmVjdGlvbk5hbWUgPSBEaXJlY3Rpb24uUklHSFRcbiAgICB9XG5cbiAgICBpZiAobmV4dEVsZW1lbnQgJiYgJChuZXh0RWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSkpIHtcbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzbGlkZUV2ZW50ID0gdGhpcy5fdHJpZ2dlclNsaWRlRXZlbnQobmV4dEVsZW1lbnQsIGV2ZW50RGlyZWN0aW9uTmFtZSlcbiAgICBpZiAoc2xpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFhY3RpdmVFbGVtZW50IHx8ICFuZXh0RWxlbWVudCkge1xuICAgICAgLy8gU29tZSB3ZWlyZG5lc3MgaXMgaGFwcGVuaW5nLCBzbyB3ZSBiYWlsXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1NsaWRpbmcgPSB0cnVlXG5cbiAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICB0aGlzLnBhdXNlKClcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KG5leHRFbGVtZW50KVxuXG4gICAgY29uc3Qgc2xpZEV2ZW50ID0gJC5FdmVudChFdmVudC5TTElELCB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiBuZXh0RWxlbWVudCxcbiAgICAgIGRpcmVjdGlvbjogZXZlbnREaXJlY3Rpb25OYW1lLFxuICAgICAgZnJvbTogYWN0aXZlRWxlbWVudEluZGV4LFxuICAgICAgdG86IG5leHRFbGVtZW50SW5kZXhcbiAgICB9KVxuXG4gICAgaWYgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNMSURFKSkge1xuICAgICAgJChuZXh0RWxlbWVudCkuYWRkQ2xhc3Mob3JkZXJDbGFzc05hbWUpXG5cbiAgICAgIFV0aWwucmVmbG93KG5leHRFbGVtZW50KVxuXG4gICAgICAkKGFjdGl2ZUVsZW1lbnQpLmFkZENsYXNzKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuICAgICAgJChuZXh0RWxlbWVudCkuYWRkQ2xhc3MoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG5cbiAgICAgIGNvbnN0IG5leHRFbGVtZW50SW50ZXJ2YWwgPSBwYXJzZUludChuZXh0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW50ZXJ2YWwnKSwgMTApXG4gICAgICBpZiAobmV4dEVsZW1lbnRJbnRlcnZhbCkge1xuICAgICAgICB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsID0gdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuaW50ZXJ2YWxcbiAgICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsID0gbmV4dEVsZW1lbnRJbnRlcnZhbFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsID0gdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuaW50ZXJ2YWxcbiAgICAgIH1cblxuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChhY3RpdmVFbGVtZW50KVxuXG4gICAgICAkKGFjdGl2ZUVsZW1lbnQpXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKCkgPT4ge1xuICAgICAgICAgICQobmV4dEVsZW1lbnQpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoYCR7ZGlyZWN0aW9uYWxDbGFzc05hbWV9ICR7b3JkZXJDbGFzc05hbWV9YClcbiAgICAgICAgICAgIC5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuXG4gICAgICAgICAgJChhY3RpdmVFbGVtZW50KS5yZW1vdmVDbGFzcyhgJHtDbGFzc05hbWUuQUNUSVZFfSAke29yZGVyQ2xhc3NOYW1lfSAke2RpcmVjdGlvbmFsQ2xhc3NOYW1lfWApXG5cbiAgICAgICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2xpZEV2ZW50KSwgMClcbiAgICAgICAgfSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgJChhY3RpdmVFbGVtZW50KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgICAgJChuZXh0RWxlbWVudCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcblxuICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzbGlkRXZlbnQpXG4gICAgfVxuXG4gICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgdGhpcy5jeWNsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgIGxldCBfY29uZmlnID0ge1xuICAgICAgICAuLi5EZWZhdWx0LFxuICAgICAgICAuLi4kKHRoaXMpLmRhdGEoKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgX2NvbmZpZyA9IHtcbiAgICAgICAgICAuLi5fY29uZmlnLFxuICAgICAgICAgIC4uLmNvbmZpZ1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjdGlvbiA9IHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnID8gY29uZmlnIDogX2NvbmZpZy5zbGlkZVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBDYXJvdXNlbCh0aGlzLCBfY29uZmlnKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnbnVtYmVyJykge1xuICAgICAgICBkYXRhLnRvKGNvbmZpZylcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2FjdGlvbl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHthY3Rpb259XCJgKVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbYWN0aW9uXSgpXG4gICAgICB9IGVsc2UgaWYgKF9jb25maWcuaW50ZXJ2YWwgJiYgX2NvbmZpZy5yaWRlKSB7XG4gICAgICAgIGRhdGEucGF1c2UoKVxuICAgICAgICBkYXRhLmN5Y2xlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIF9kYXRhQXBpQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcylcblxuICAgIGlmICghc2VsZWN0b3IpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldCA9ICQoc2VsZWN0b3IpWzBdXG5cbiAgICBpZiAoIXRhcmdldCB8fCAhJCh0YXJnZXQpLmhhc0NsYXNzKENsYXNzTmFtZS5DQVJPVVNFTCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIC4uLiQodGFyZ2V0KS5kYXRhKCksXG4gICAgICAuLi4kKHRoaXMpLmRhdGEoKVxuICAgIH1cbiAgICBjb25zdCBzbGlkZUluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGUtdG8nKVxuXG4gICAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICAgIGNvbmZpZy5pbnRlcnZhbCA9IGZhbHNlXG4gICAgfVxuXG4gICAgQ2Fyb3VzZWwuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGFyZ2V0KSwgY29uZmlnKVxuXG4gICAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICAgICQodGFyZ2V0KS5kYXRhKERBVEFfS0VZKS50byhzbGlkZUluZGV4KVxuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQoZG9jdW1lbnQpXG4gIC5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9TTElERSwgQ2Fyb3VzZWwuX2RhdGFBcGlDbGlja0hhbmRsZXIpXG5cbiQod2luZG93KS5vbihFdmVudC5MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGNvbnN0IGNhcm91c2VscyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5EQVRBX1JJREUpKVxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2Fyb3VzZWxzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgJGNhcm91c2VsID0gJChjYXJvdXNlbHNbaV0pXG4gICAgQ2Fyb3VzZWwuX2pRdWVyeUludGVyZmFjZS5jYWxsKCRjYXJvdXNlbCwgJGNhcm91c2VsLmRhdGEoKSlcbiAgfVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBDYXJvdXNlbFxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjMuMSk6IGNvbGxhcHNlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICAgPSAnY29sbGFwc2UnXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgID0gJzQuMy4xJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgICA9ICdicy5jb2xsYXBzZSdcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZICAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgID0gJC5mbltOQU1FXVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICB0b2dnbGUgOiB0cnVlLFxuICBwYXJlbnQgOiAnJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgdG9nZ2xlIDogJ2Jvb2xlYW4nLFxuICBwYXJlbnQgOiAnKHN0cmluZ3xlbGVtZW50KSdcbn1cblxuY29uc3QgRXZlbnQgPSB7XG4gIFNIT1cgICAgICAgICAgIDogYHNob3cke0VWRU5UX0tFWX1gLFxuICBTSE9XTiAgICAgICAgICA6IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gIEhJREUgICAgICAgICAgIDogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU4gICAgICAgICA6IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICBDTElDS19EQVRBX0FQSSA6IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbn1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBTSE9XICAgICAgIDogJ3Nob3cnLFxuICBDT0xMQVBTRSAgIDogJ2NvbGxhcHNlJyxcbiAgQ09MTEFQU0lORyA6ICdjb2xsYXBzaW5nJyxcbiAgQ09MTEFQU0VEICA6ICdjb2xsYXBzZWQnXG59XG5cbmNvbnN0IERpbWVuc2lvbiA9IHtcbiAgV0lEVEggIDogJ3dpZHRoJyxcbiAgSEVJR0hUIDogJ2hlaWdodCdcbn1cblxuY29uc3QgU2VsZWN0b3IgPSB7XG4gIEFDVElWRVMgICAgIDogJy5zaG93LCAuY29sbGFwc2luZycsXG4gIERBVEFfVE9HR0xFIDogJ1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdJ1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgQ29sbGFwc2Uge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICA9IGVsZW1lbnRcbiAgICB0aGlzLl9jb25maWcgICAgICAgICAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX3RyaWdnZXJBcnJheSAgICA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIGBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtocmVmPVwiIyR7ZWxlbWVudC5pZH1cIl0sYCArXG4gICAgICBgW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1bZGF0YS10YXJnZXQ9XCIjJHtlbGVtZW50LmlkfVwiXWBcbiAgICApKVxuXG4gICAgY29uc3QgdG9nZ2xlTGlzdCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5EQVRBX1RPR0dMRSkpXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRvZ2dsZUxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW0gPSB0b2dnbGVMaXN0W2ldXG4gICAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtKVxuICAgICAgY29uc3QgZmlsdGVyRWxlbWVudCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpXG4gICAgICAgIC5maWx0ZXIoKGZvdW5kRWxlbSkgPT4gZm91bmRFbGVtID09PSBlbGVtZW50KVxuXG4gICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwgJiYgZmlsdGVyRWxlbWVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdG9yID0gc2VsZWN0b3JcbiAgICAgICAgdGhpcy5fdHJpZ2dlckFycmF5LnB1c2goZWxlbSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9jb25maWcucGFyZW50ID8gdGhpcy5fZ2V0UGFyZW50KCkgOiBudWxsXG5cbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLl9lbGVtZW50LCB0aGlzLl90cmlnZ2VyQXJyYXkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy50b2dnbGUpIHtcbiAgICAgIHRoaXMudG9nZ2xlKClcbiAgICB9XG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAoJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdygpXG4gICAgfVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGFjdGl2ZXNcbiAgICBsZXQgYWN0aXZlc0RhdGFcblxuICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcbiAgICAgIGFjdGl2ZXMgPSBbXS5zbGljZS5jYWxsKHRoaXMuX3BhcmVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkFDVElWRVMpKVxuICAgICAgICAuZmlsdGVyKChlbGVtKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucGFyZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXBhcmVudCcpID09PSB0aGlzLl9jb25maWcucGFyZW50XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5DT0xMQVBTRSlcbiAgICAgICAgfSlcblxuICAgICAgaWYgKGFjdGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGFjdGl2ZXMgPSBudWxsXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZXMpIHtcbiAgICAgIGFjdGl2ZXNEYXRhID0gJChhY3RpdmVzKS5ub3QodGhpcy5fc2VsZWN0b3IpLmRhdGEoREFUQV9LRVkpXG4gICAgICBpZiAoYWN0aXZlc0RhdGEgJiYgYWN0aXZlc0RhdGEuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XKVxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzdGFydEV2ZW50KVxuICAgIGlmIChzdGFydEV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlcykge1xuICAgICAgQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQoYWN0aXZlcykubm90KHRoaXMuX3NlbGVjdG9yKSwgJ2hpZGUnKVxuICAgICAgaWYgKCFhY3RpdmVzRGF0YSkge1xuICAgICAgICAkKGFjdGl2ZXMpLmRhdGEoREFUQV9LRVksIG51bGwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKClcblxuICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0UpXG4gICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNJTkcpXG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAwXG5cbiAgICBpZiAodGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgJCh0aGlzLl90cmlnZ2VyQXJyYXkpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKVxuICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgfVxuXG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKHRydWUpXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTSU5HKVxuICAgICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFKVxuICAgICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnXG5cbiAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyhmYWxzZSlcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKEV2ZW50LlNIT1dOKVxuICAgIH1cblxuICAgIGNvbnN0IGNhcGl0YWxpemVkRGltZW5zaW9uID0gZGltZW5zaW9uWzBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoMSlcbiAgICBjb25zdCBzY3JvbGxTaXplID0gYHNjcm9sbCR7Y2FwaXRhbGl6ZWREaW1lbnNpb259YFxuICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXX1weGBcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fFxuICAgICAgISQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gJC5FdmVudChFdmVudC5ISURFKVxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzdGFydEV2ZW50KVxuICAgIGlmIChzdGFydEV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1lbnNpb25dfXB4YFxuXG4gICAgVXRpbC5yZWZsb3codGhpcy5fZWxlbWVudClcblxuICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgIC5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORylcbiAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0UpXG4gICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICBjb25zdCB0cmlnZ2VyQXJyYXlMZW5ndGggPSB0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoXG4gICAgaWYgKHRyaWdnZXJBcnJheUxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJpZ2dlckFycmF5TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdHJpZ2dlciA9IHRoaXMuX3RyaWdnZXJBcnJheVtpXVxuICAgICAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0cmlnZ2VyKVxuXG4gICAgICAgIGlmIChzZWxlY3RvciAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0ICRlbGVtID0gJChbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKSlcbiAgICAgICAgICBpZiAoISRlbGVtLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgICAgICAgJCh0cmlnZ2VyKS5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKVxuICAgICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcoZmFsc2UpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORylcbiAgICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5DT0xMQVBTRSlcbiAgICAgICAgLnRyaWdnZXIoRXZlbnQuSElEREVOKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnXG4gICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gIH1cblxuICBzZXRUcmFuc2l0aW9uaW5nKGlzVHJhbnNpdGlvbmluZykge1xuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGlzVHJhbnNpdGlvbmluZ1xuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG5cbiAgICB0aGlzLl9jb25maWcgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fcGFyZW50ICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl90cmlnZ2VyQXJyYXkgICAgPSBudWxsXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gbnVsbFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cbiAgICBjb25maWcudG9nZ2xlID0gQm9vbGVhbihjb25maWcudG9nZ2xlKSAvLyBDb2VyY2Ugc3RyaW5nIHZhbHVlc1xuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldERpbWVuc2lvbigpIHtcbiAgICBjb25zdCBoYXNXaWR0aCA9ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoRGltZW5zaW9uLldJRFRIKVxuICAgIHJldHVybiBoYXNXaWR0aCA/IERpbWVuc2lvbi5XSURUSCA6IERpbWVuc2lvbi5IRUlHSFRcbiAgfVxuXG4gIF9nZXRQYXJlbnQoKSB7XG4gICAgbGV0IHBhcmVudFxuXG4gICAgaWYgKFV0aWwuaXNFbGVtZW50KHRoaXMuX2NvbmZpZy5wYXJlbnQpKSB7XG4gICAgICBwYXJlbnQgPSB0aGlzLl9jb25maWcucGFyZW50XG5cbiAgICAgIC8vIEl0J3MgYSBqUXVlcnkgb2JqZWN0XG4gICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5wYXJlbnQuanF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBwYXJlbnQgPSB0aGlzLl9jb25maWcucGFyZW50WzBdXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fY29uZmlnLnBhcmVudClcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RvciA9XG4gICAgICBgW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1bZGF0YS1wYXJlbnQ9XCIke3RoaXMuX2NvbmZpZy5wYXJlbnR9XCJdYFxuXG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXS5zbGljZS5jYWxsKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSlcbiAgICAkKGNoaWxkcmVuKS5lYWNoKChpLCBlbGVtZW50KSA9PiB7XG4gICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoXG4gICAgICAgIENvbGxhcHNlLl9nZXRUYXJnZXRGcm9tRWxlbWVudChlbGVtZW50KSxcbiAgICAgICAgW2VsZW1lbnRdXG4gICAgICApXG4gICAgfSlcblxuICAgIHJldHVybiBwYXJlbnRcbiAgfVxuXG4gIF9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoZWxlbWVudCwgdHJpZ2dlckFycmF5KSB7XG4gICAgY29uc3QgaXNPcGVuID0gJChlbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgIGlmICh0cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICAkKHRyaWdnZXJBcnJheSlcbiAgICAgICAgLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRUQsICFpc09wZW4pXG4gICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfZ2V0VGFyZ2V0RnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG4gICAgcmV0dXJuIHNlbGVjdG9yID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBudWxsXG4gIH1cblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0ICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICBsZXQgZGF0YSAgICAgID0gJHRoaXMuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB7XG4gICAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAgIC4uLiR0aGlzLmRhdGEoKSxcbiAgICAgICAgLi4udHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge31cbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhICYmIF9jb25maWcudG9nZ2xlICYmIC9zaG93fGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICBfY29uZmlnLnRvZ2dsZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IENvbGxhcHNlKHRoaXMsIF9jb25maWcpXG4gICAgICAgICR0aGlzLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudCkub24oRXZlbnQuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gcHJldmVudERlZmF1bHQgb25seSBmb3IgPGE+IGVsZW1lbnRzICh3aGljaCBjaGFuZ2UgdGhlIFVSTCkgbm90IGluc2lkZSB0aGUgY29sbGFwc2libGUgZWxlbWVudFxuICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC50YWdOYW1lID09PSAnQScpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBjb25zdCAkdHJpZ2dlciA9ICQodGhpcylcbiAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcylcbiAgY29uc3Qgc2VsZWN0b3JzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSlcblxuICAkKHNlbGVjdG9ycykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgJHRhcmdldCA9ICQodGhpcylcbiAgICBjb25zdCBkYXRhICAgID0gJHRhcmdldC5kYXRhKERBVEFfS0VZKVxuICAgIGNvbnN0IGNvbmZpZyAgPSBkYXRhID8gJ3RvZ2dsZScgOiAkdHJpZ2dlci5kYXRhKClcbiAgICBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJHRhcmdldCwgY29uZmlnKVxuICB9KVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBDb2xsYXBzZVxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNlXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjMuMSk6IGRyb3Bkb3duLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgUG9wcGVyIGZyb20gJ3BvcHBlci5qcydcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgICAgICAgID0gJ2Ryb3Bkb3duJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgICAgICAgID0gJzQuMy4xJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgICAgICAgID0gJ2JzLmRyb3Bkb3duJ1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgICAgICAgPSAkLmZuW05BTUVdXG5jb25zdCBFU0NBUEVfS0VZQ09ERSAgICAgICAgICAgPSAyNyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBFc2NhcGUgKEVzYykga2V5XG5jb25zdCBTUEFDRV9LRVlDT0RFICAgICAgICAgICAgPSAzMiAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBzcGFjZSBrZXlcbmNvbnN0IFRBQl9LRVlDT0RFICAgICAgICAgICAgICA9IDkgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgdGFiIGtleVxuY29uc3QgQVJST1dfVVBfS0VZQ09ERSAgICAgICAgID0gMzggLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgdXAgYXJyb3cga2V5XG5jb25zdCBBUlJPV19ET1dOX0tFWUNPREUgICAgICAgPSA0MCAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBkb3duIGFycm93IGtleVxuY29uc3QgUklHSFRfTU9VU0VfQlVUVE9OX1dISUNIID0gMyAvLyBNb3VzZUV2ZW50LndoaWNoIHZhbHVlIGZvciB0aGUgcmlnaHQgYnV0dG9uIChhc3N1bWluZyBhIHJpZ2h0LWhhbmRlZCBtb3VzZSlcbmNvbnN0IFJFR0VYUF9LRVlET1dOICAgICAgICAgICA9IG5ldyBSZWdFeHAoYCR7QVJST1dfVVBfS0VZQ09ERX18JHtBUlJPV19ET1dOX0tFWUNPREV9fCR7RVNDQVBFX0tFWUNPREV9YClcblxuY29uc3QgRXZlbnQgPSB7XG4gIEhJREUgICAgICAgICAgICAgOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTiAgICAgICAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgU0hPVyAgICAgICAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV04gICAgICAgICAgICA6IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gIENMSUNLICAgICAgICAgICAgOiBgY2xpY2ske0VWRU5UX0tFWX1gLFxuICBDTElDS19EQVRBX0FQSSAgIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YCxcbiAgS0VZRE9XTl9EQVRBX0FQSSA6IGBrZXlkb3duJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YCxcbiAgS0VZVVBfREFUQV9BUEkgICA6IGBrZXl1cCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbn1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBESVNBQkxFRCAgICAgICAgOiAnZGlzYWJsZWQnLFxuICBTSE9XICAgICAgICAgICAgOiAnc2hvdycsXG4gIERST1BVUCAgICAgICAgICA6ICdkcm9wdXAnLFxuICBEUk9QUklHSFQgICAgICAgOiAnZHJvcHJpZ2h0JyxcbiAgRFJPUExFRlQgICAgICAgIDogJ2Ryb3BsZWZ0JyxcbiAgTUVOVVJJR0hUICAgICAgIDogJ2Ryb3Bkb3duLW1lbnUtcmlnaHQnLFxuICBNRU5VTEVGVCAgICAgICAgOiAnZHJvcGRvd24tbWVudS1sZWZ0JyxcbiAgUE9TSVRJT05fU1RBVElDIDogJ3Bvc2l0aW9uLXN0YXRpYydcbn1cblxuY29uc3QgU2VsZWN0b3IgPSB7XG4gIERBVEFfVE9HR0xFICAgOiAnW2RhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIl0nLFxuICBGT1JNX0NISUxEICAgIDogJy5kcm9wZG93biBmb3JtJyxcbiAgTUVOVSAgICAgICAgICA6ICcuZHJvcGRvd24tbWVudScsXG4gIE5BVkJBUl9OQVYgICAgOiAnLm5hdmJhci1uYXYnLFxuICBWSVNJQkxFX0lURU1TIDogJy5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJ1xufVxuXG5jb25zdCBBdHRhY2htZW50TWFwID0ge1xuICBUT1AgICAgICAgOiAndG9wLXN0YXJ0JyxcbiAgVE9QRU5EICAgIDogJ3RvcC1lbmQnLFxuICBCT1RUT00gICAgOiAnYm90dG9tLXN0YXJ0JyxcbiAgQk9UVE9NRU5EIDogJ2JvdHRvbS1lbmQnLFxuICBSSUdIVCAgICAgOiAncmlnaHQtc3RhcnQnLFxuICBSSUdIVEVORCAgOiAncmlnaHQtZW5kJyxcbiAgTEVGVCAgICAgIDogJ2xlZnQtc3RhcnQnLFxuICBMRUZURU5EICAgOiAnbGVmdC1lbmQnXG59XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIG9mZnNldCAgICA6IDAsXG4gIGZsaXAgICAgICA6IHRydWUsXG4gIGJvdW5kYXJ5ICA6ICdzY3JvbGxQYXJlbnQnLFxuICByZWZlcmVuY2UgOiAndG9nZ2xlJyxcbiAgZGlzcGxheSAgIDogJ2R5bmFtaWMnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBvZmZzZXQgICAgOiAnKG51bWJlcnxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgZmxpcCAgICAgIDogJ2Jvb2xlYW4nLFxuICBib3VuZGFyeSAgOiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIHJlZmVyZW5jZSA6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgZGlzcGxheSAgIDogJ3N0cmluZydcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIERyb3Bkb3duIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5fZWxlbWVudCAgPSBlbGVtZW50XG4gICAgdGhpcy5fcG9wcGVyICAgPSBudWxsXG4gICAgdGhpcy5fY29uZmlnICAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX21lbnUgICAgID0gdGhpcy5fZ2V0TWVudUVsZW1lbnQoKVxuICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKClcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5kaXNhYmxlZCB8fCAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5ESVNBQkxFRCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudCAgID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG4gICAgY29uc3QgaXNBY3RpdmUgPSAkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgRHJvcGRvd24uX2NsZWFyTWVudXMoKVxuXG4gICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cbiAgICBjb25zdCBzaG93RXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1csIHJlbGF0ZWRUYXJnZXQpXG5cbiAgICAkKHBhcmVudCkudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIHRvdGFsbHkgUG9wcGVyLmpzIGZvciBEcm9wZG93biBpbiBOYXZiYXJcbiAgICBpZiAoIXRoaXMuX2luTmF2YmFyKSB7XG4gICAgICAvKipcbiAgICAgICAqIENoZWNrIGZvciBQb3BwZXIgZGVwZW5kZW5jeVxuICAgICAgICogUG9wcGVyIC0gaHR0cHM6Ly9wb3BwZXIuanMub3JnXG4gICAgICAgKi9cbiAgICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIGRyb3Bkb3ducyByZXF1aXJlIFBvcHBlci5qcyAoaHR0cHM6Ly9wb3BwZXIuanMub3JnLyknKVxuICAgICAgfVxuXG4gICAgICBsZXQgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdwYXJlbnQnKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBwYXJlbnRcbiAgICAgIH0gZWxzZSBpZiAoVXRpbC5pc0VsZW1lbnQodGhpcy5fY29uZmlnLnJlZmVyZW5jZSkpIHtcbiAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VcblxuICAgICAgICAvLyBDaGVjayBpZiBpdCdzIGpRdWVyeSBlbGVtZW50XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnJlZmVyZW5jZS5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VbMF1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBib3VuZGFyeSBpcyBub3QgYHNjcm9sbFBhcmVudGAsIHRoZW4gc2V0IHBvc2l0aW9uIHRvIGBzdGF0aWNgXG4gICAgICAvLyB0byBhbGxvdyB0aGUgbWVudSB0byBcImVzY2FwZVwiIHRoZSBzY3JvbGwgcGFyZW50J3MgYm91bmRhcmllc1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8yNDI1MVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5ib3VuZGFyeSAhPT0gJ3Njcm9sbFBhcmVudCcpIHtcbiAgICAgICAgJChwYXJlbnQpLmFkZENsYXNzKENsYXNzTmFtZS5QT1NJVElPTl9TVEFUSUMpXG4gICAgICB9XG4gICAgICB0aGlzLl9wb3BwZXIgPSBuZXcgUG9wcGVyKHJlZmVyZW5jZUVsZW1lbnQsIHRoaXMuX21lbnUsIHRoaXMuX2dldFBvcHBlckNvbmZpZygpKVxuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJlxuICAgICAgICAkKHBhcmVudCkuY2xvc2VzdChTZWxlY3Rvci5OQVZCQVJfTkFWKS5sZW5ndGggPT09IDApIHtcbiAgICAgICQoZG9jdW1lbnQuYm9keSkuY2hpbGRyZW4oKS5vbignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcblxuICAgICQodGhpcy5fbWVudSkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG4gICAgJChwYXJlbnQpXG4gICAgICAudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG4gICAgICAudHJpZ2dlcigkLkV2ZW50KEV2ZW50LlNIT1dOLCByZWxhdGVkVGFyZ2V0KSlcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRElTQUJMRUQpIHx8ICQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cbiAgICBjb25zdCBzaG93RXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1csIHJlbGF0ZWRUYXJnZXQpXG4gICAgY29uc3QgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHBhcmVudCkudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAkKHRoaXMuX21lbnUpLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICQocGFyZW50KVxuICAgICAgLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICAgLnRyaWdnZXIoJC5FdmVudChFdmVudC5TSE9XTiwgcmVsYXRlZFRhcmdldCkpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LmRpc2FibGVkIHx8ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRJU0FCTEVEKSB8fCAhJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuICAgIGNvbnN0IGhpZGVFdmVudCA9ICQuRXZlbnQoRXZlbnQuSElERSwgcmVsYXRlZFRhcmdldClcbiAgICBjb25zdCBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICQocGFyZW50KS50cmlnZ2VyKGhpZGVFdmVudClcblxuICAgIGlmIChoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgICQodGhpcy5fbWVudSkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG4gICAgJChwYXJlbnQpXG4gICAgICAudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG4gICAgICAudHJpZ2dlcigkLkV2ZW50KEV2ZW50LkhJRERFTiwgcmVsYXRlZFRhcmdldCkpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFVkVOVF9LRVkpXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9tZW51ID0gbnVsbFxuICAgIGlmICh0aGlzLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKVxuICAgIGlmICh0aGlzLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5zY2hlZHVsZVVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LkNMSUNLLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgLi4uJCh0aGlzLl9lbGVtZW50KS5kYXRhKCksXG4gICAgICAuLi5jb25maWdcbiAgICB9XG5cbiAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhcbiAgICAgIE5BTUUsXG4gICAgICBjb25maWcsXG4gICAgICB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlXG4gICAgKVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldE1lbnVFbGVtZW50KCkge1xuICAgIGlmICghdGhpcy5fbWVudSkge1xuICAgICAgY29uc3QgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5fbWVudSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLk1FTlUpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9tZW51XG4gIH1cblxuICBfZ2V0UGxhY2VtZW50KCkge1xuICAgIGNvbnN0ICRwYXJlbnREcm9wZG93biA9ICQodGhpcy5fZWxlbWVudC5wYXJlbnROb2RlKVxuICAgIGxldCBwbGFjZW1lbnQgPSBBdHRhY2htZW50TWFwLkJPVFRPTVxuXG4gICAgLy8gSGFuZGxlIGRyb3B1cFxuICAgIGlmICgkcGFyZW50RHJvcGRvd24uaGFzQ2xhc3MoQ2xhc3NOYW1lLkRST1BVUCkpIHtcbiAgICAgIHBsYWNlbWVudCA9IEF0dGFjaG1lbnRNYXAuVE9QXG4gICAgICBpZiAoJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDbGFzc05hbWUuTUVOVVJJR0hUKSkge1xuICAgICAgICBwbGFjZW1lbnQgPSBBdHRhY2htZW50TWFwLlRPUEVORFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoJHBhcmVudERyb3Bkb3duLmhhc0NsYXNzKENsYXNzTmFtZS5EUk9QUklHSFQpKSB7XG4gICAgICBwbGFjZW1lbnQgPSBBdHRhY2htZW50TWFwLlJJR0hUXG4gICAgfSBlbHNlIGlmICgkcGFyZW50RHJvcGRvd24uaGFzQ2xhc3MoQ2xhc3NOYW1lLkRST1BMRUZUKSkge1xuICAgICAgcGxhY2VtZW50ID0gQXR0YWNobWVudE1hcC5MRUZUXG4gICAgfSBlbHNlIGlmICgkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENsYXNzTmFtZS5NRU5VUklHSFQpKSB7XG4gICAgICBwbGFjZW1lbnQgPSBBdHRhY2htZW50TWFwLkJPVFRPTUVORFxuICAgIH1cbiAgICByZXR1cm4gcGxhY2VtZW50XG4gIH1cblxuICBfZGV0ZWN0TmF2YmFyKCkge1xuICAgIHJldHVybiAkKHRoaXMuX2VsZW1lbnQpLmNsb3Nlc3QoJy5uYXZiYXInKS5sZW5ndGggPiAwXG4gIH1cblxuICBfZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IG9mZnNldCA9IHt9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5vZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9mZnNldC5mbiA9IChkYXRhKSA9PiB7XG4gICAgICAgIGRhdGEub2Zmc2V0cyA9IHtcbiAgICAgICAgICAuLi5kYXRhLm9mZnNldHMsXG4gICAgICAgICAgLi4udGhpcy5fY29uZmlnLm9mZnNldChkYXRhLm9mZnNldHMsIHRoaXMuX2VsZW1lbnQpIHx8IHt9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvZmZzZXQub2Zmc2V0ID0gdGhpcy5fY29uZmlnLm9mZnNldFxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRcbiAgfVxuXG4gIF9nZXRQb3BwZXJDb25maWcoKSB7XG4gICAgY29uc3QgcG9wcGVyQ29uZmlnID0ge1xuICAgICAgcGxhY2VtZW50OiB0aGlzLl9nZXRQbGFjZW1lbnQoKSxcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpLFxuICAgICAgICBmbGlwOiB7XG4gICAgICAgICAgZW5hYmxlZDogdGhpcy5fY29uZmlnLmZsaXBcbiAgICAgICAgfSxcbiAgICAgICAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgICAgICAgYm91bmRhcmllc0VsZW1lbnQ6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSBQb3BwZXIuanMgaWYgd2UgaGF2ZSBhIHN0YXRpYyBkaXNwbGF5XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5kaXNwbGF5ID09PSAnc3RhdGljJykge1xuICAgICAgcG9wcGVyQ29uZmlnLm1vZGlmaWVycy5hcHBseVN0eWxlID0ge1xuICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwb3BwZXJDb25maWdcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBudWxsXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IERyb3Bkb3duKHRoaXMsIF9jb25maWcpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgX2NsZWFyTWVudXMoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQgJiYgKGV2ZW50LndoaWNoID09PSBSSUdIVF9NT1VTRV9CVVRUT05fV0hJQ0ggfHxcbiAgICAgIGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQud2hpY2ggIT09IFRBQl9LRVlDT0RFKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlcyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5EQVRBX1RPR0dMRSkpXG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdG9nZ2xlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRvZ2dsZXNbaV0pXG4gICAgICBjb25zdCBjb250ZXh0ID0gJCh0b2dnbGVzW2ldKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdG9nZ2xlc1tpXVxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICByZWxhdGVkVGFyZ2V0LmNsaWNrRXZlbnQgPSBldmVudFxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgZHJvcGRvd25NZW51ID0gY29udGV4dC5fbWVudVxuICAgICAgaWYgKCEkKHBhcmVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyAmJlxuICAgICAgICAgIC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpIHx8IGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQud2hpY2ggPT09IFRBQl9LRVlDT0RFKSAmJlxuICAgICAgICAgICQuY29udGFpbnMocGFyZW50LCBldmVudC50YXJnZXQpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhpZGVFdmVudCA9ICQuRXZlbnQoRXZlbnQuSElERSwgcmVsYXRlZFRhcmdldClcbiAgICAgICQocGFyZW50KS50cmlnZ2VyKGhpZGVFdmVudClcbiAgICAgIGlmIChoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkuY2hpbGRyZW4oKS5vZmYoJ21vdXNlb3ZlcicsIG51bGwsICQubm9vcClcbiAgICAgIH1cblxuICAgICAgdG9nZ2xlc1tpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxuXG4gICAgICAkKGRyb3Bkb3duTWVudSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG4gICAgICAkKHBhcmVudClcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICAgICAudHJpZ2dlcigkLkV2ZW50KEV2ZW50LkhJRERFTiwgcmVsYXRlZFRhcmdldCkpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIF9nZXRQYXJlbnRGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgbGV0IHBhcmVudFxuICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG4gIHN0YXRpYyBfZGF0YUFwaUtleWRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgLy8gSWYgbm90IGlucHV0L3RleHRhcmVhOlxuICAgIC8vICAtIEFuZCBub3QgYSBrZXkgaW4gUkVHRVhQX0tFWURPV04gPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vIElmIGlucHV0L3RleHRhcmVhOlxuICAgIC8vICAtIElmIHNwYWNlIGtleSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gIC0gSWYga2V5IGlzIG90aGVyIHRoYW4gZXNjYXBlXG4gICAgLy8gICAgLSBJZiBrZXkgaXMgbm90IHVwIG9yIGRvd24gPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vICAgIC0gSWYgdHJpZ2dlciBpbnNpZGUgdGhlIG1lbnUgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKVxuICAgICAgPyBldmVudC53aGljaCA9PT0gU1BBQ0VfS0VZQ09ERSB8fCBldmVudC53aGljaCAhPT0gRVNDQVBFX0tFWUNPREUgJiZcbiAgICAgIChldmVudC53aGljaCAhPT0gQVJST1dfRE9XTl9LRVlDT0RFICYmIGV2ZW50LndoaWNoICE9PSBBUlJPV19VUF9LRVlDT0RFIHx8XG4gICAgICAgICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFNlbGVjdG9yLk1FTlUpLmxlbmd0aCkgOiAhUkVHRVhQX0tFWURPV04udGVzdChldmVudC53aGljaCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgJCh0aGlzKS5oYXNDbGFzcyhDbGFzc05hbWUuRElTQUJMRUQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnQgICA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzKVxuICAgIGNvbnN0IGlzQWN0aXZlID0gJChwYXJlbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgaWYgKCFpc0FjdGl2ZSB8fCBpc0FjdGl2ZSAmJiAoZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFIHx8IGV2ZW50LndoaWNoID09PSBTUEFDRV9LRVlDT0RFKSkge1xuICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgICBjb25zdCB0b2dnbGUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5EQVRBX1RPR0dMRSlcbiAgICAgICAgJCh0b2dnbGUpLnRyaWdnZXIoJ2ZvY3VzJylcbiAgICAgIH1cblxuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjbGljaycpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpdGVtcyA9IFtdLnNsaWNlLmNhbGwocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuVklTSUJMRV9JVEVNUykpXG5cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgaW5kZXggPSBpdGVtcy5pbmRleE9mKGV2ZW50LnRhcmdldClcblxuICAgIGlmIChldmVudC53aGljaCA9PT0gQVJST1dfVVBfS0VZQ09ERSAmJiBpbmRleCA+IDApIHsgLy8gVXBcbiAgICAgIGluZGV4LS1cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQud2hpY2ggPT09IEFSUk9XX0RPV05fS0VZQ09ERSAmJiBpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpIHsgLy8gRG93blxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIGluZGV4ID0gMFxuICAgIH1cblxuICAgIGl0ZW1zW2luZGV4XS5mb2N1cygpXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKGRvY3VtZW50KVxuICAub24oRXZlbnQuS0VZRE9XTl9EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsIERyb3Bkb3duLl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG4gIC5vbihFdmVudC5LRVlET1dOX0RBVEFfQVBJLCBTZWxlY3Rvci5NRU5VLCBEcm9wZG93bi5fZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuICAub24oYCR7RXZlbnQuQ0xJQ0tfREFUQV9BUEl9ICR7RXZlbnQuS0VZVVBfREFUQV9BUEl9YCwgRHJvcGRvd24uX2NsZWFyTWVudXMpXG4gIC5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAndG9nZ2xlJylcbiAgfSlcbiAgLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5GT1JNX0NISUxELCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgfSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBEcm9wZG93blxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuMy4xKTogbW9kYWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ21vZGFsJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgID0gJzQuMy4xJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgID0gJ2JzLm1vZGFsJ1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5jb25zdCBFU0NBUEVfS0VZQ09ERSAgICAgPSAyNyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBFc2NhcGUgKEVzYykga2V5XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGJhY2tkcm9wIDogdHJ1ZSxcbiAga2V5Ym9hcmQgOiB0cnVlLFxuICBmb2N1cyAgICA6IHRydWUsXG4gIHNob3cgICAgIDogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYmFja2Ryb3AgOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIGtleWJvYXJkIDogJ2Jvb2xlYW4nLFxuICBmb2N1cyAgICA6ICdib29sZWFuJyxcbiAgc2hvdyAgICAgOiAnYm9vbGVhbidcbn1cblxuY29uc3QgRXZlbnQgPSB7XG4gIEhJREUgICAgICAgICAgICAgIDogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU4gICAgICAgICAgICA6IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICBTSE9XICAgICAgICAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV04gICAgICAgICAgICAgOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBGT0NVU0lOICAgICAgICAgICA6IGBmb2N1c2luJHtFVkVOVF9LRVl9YCxcbiAgUkVTSVpFICAgICAgICAgICAgOiBgcmVzaXplJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0tfRElTTUlTUyAgICAgOiBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZfWAsXG4gIEtFWURPV05fRElTTUlTUyAgIDogYGtleWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFVVBfRElTTUlTUyAgIDogYG1vdXNldXAuZGlzbWlzcyR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFRE9XTl9ESVNNSVNTIDogYG1vdXNlZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0tfREFUQV9BUEkgICAgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgU0NST0xMQUJMRSAgICAgICAgIDogJ21vZGFsLWRpYWxvZy1zY3JvbGxhYmxlJyxcbiAgU0NST0xMQkFSX01FQVNVUkVSIDogJ21vZGFsLXNjcm9sbGJhci1tZWFzdXJlJyxcbiAgQkFDS0RST1AgICAgICAgICAgIDogJ21vZGFsLWJhY2tkcm9wJyxcbiAgT1BFTiAgICAgICAgICAgICAgIDogJ21vZGFsLW9wZW4nLFxuICBGQURFICAgICAgICAgICAgICAgOiAnZmFkZScsXG4gIFNIT1cgICAgICAgICAgICAgICA6ICdzaG93J1xufVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgRElBTE9HICAgICAgICAgOiAnLm1vZGFsLWRpYWxvZycsXG4gIE1PREFMX0JPRFkgICAgIDogJy5tb2RhbC1ib2R5JyxcbiAgREFUQV9UT0dHTEUgICAgOiAnW2RhdGEtdG9nZ2xlPVwibW9kYWxcIl0nLFxuICBEQVRBX0RJU01JU1MgICA6ICdbZGF0YS1kaXNtaXNzPVwibW9kYWxcIl0nLFxuICBGSVhFRF9DT05URU5UICA6ICcuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wJyxcbiAgU1RJQ0tZX0NPTlRFTlQgOiAnLnN0aWNreS10b3AnXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICAgICAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICAgICAgPSBlbGVtZW50XG4gICAgdGhpcy5fZGlhbG9nICAgICAgICAgICAgICA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5ESUFMT0cpXG4gICAgdGhpcy5fYmFja2Ryb3AgICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9pc1Nob3duICAgICAgICAgICAgID0gZmFsc2VcbiAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAgID0gZmFsc2VcbiAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gZmFsc2VcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgICAgID0gZmFsc2VcbiAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCAgICAgID0gMFxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0XG4gICAgfSlcblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICBpZiAodGhpcy5faXNTaG93biB8fCBzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlXG5cbiAgICB0aGlzLl9jaGVja1Njcm9sbGJhcigpXG4gICAgdGhpcy5fc2V0U2Nyb2xsYmFyKClcblxuICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG5cbiAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpXG4gICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS5vbihcbiAgICAgIEV2ZW50LkNMSUNLX0RJU01JU1MsXG4gICAgICBTZWxlY3Rvci5EQVRBX0RJU01JU1MsXG4gICAgICAoZXZlbnQpID0+IHRoaXMuaGlkZShldmVudClcbiAgICApXG5cbiAgICAkKHRoaXMuX2RpYWxvZykub24oRXZlbnQuTU9VU0VET1dOX0RJU01JU1MsICgpID0+IHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub25lKEV2ZW50Lk1PVVNFVVBfRElTTUlTUywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXModGhpcy5fZWxlbWVudCkpIHtcbiAgICAgICAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLl9zaG93QmFja2Ryb3AoKCkgPT4gdGhpcy5fc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkpXG4gIH1cblxuICBoaWRlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gJC5FdmVudChFdmVudC5ISURFKVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKGhpZGVFdmVudClcblxuICAgIGlmICghdGhpcy5faXNTaG93biB8fCBoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIGNvbnN0IHRyYW5zaXRpb24gPSAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKVxuXG4gICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpXG4gICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKVxuXG4gICAgJChkb2N1bWVudCkub2ZmKEV2ZW50LkZPQ1VTSU4pXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRXZlbnQuQ0xJQ0tfRElTTUlTUylcbiAgICAkKHRoaXMuX2RpYWxvZykub2ZmKEV2ZW50Lk1PVVNFRE9XTl9ESVNNSVNTKVxuXG5cbiAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uICA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIChldmVudCkgPT4gdGhpcy5faGlkZU1vZGFsKGV2ZW50KSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGlkZU1vZGFsKClcbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIFt3aW5kb3csIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2RpYWxvZ11cbiAgICAgIC5mb3JFYWNoKChodG1sRWxlbWVudCkgPT4gJChodG1sRWxlbWVudCkub2ZmKEVWRU5UX0tFWSkpXG5cbiAgICAvKipcbiAgICAgKiBgZG9jdW1lbnRgIGhhcyAyIGV2ZW50cyBgRXZlbnQuRk9DVVNJTmAgYW5kIGBFdmVudC5DTElDS19EQVRBX0FQSWBcbiAgICAgKiBEbyBub3QgbW92ZSBgZG9jdW1lbnRgIGluIGBodG1sRWxlbWVudHNgIGFycmF5XG4gICAgICogSXQgd2lsbCByZW1vdmUgYEV2ZW50LkNMSUNLX0RBVEFfQVBJYCBldmVudCB0aGF0IHNob3VsZCByZW1haW5cbiAgICAgKi9cbiAgICAkKGRvY3VtZW50KS5vZmYoRXZlbnQuRk9DVVNJTilcblxuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcblxuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fZWxlbWVudCAgICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9kaWFsb2cgICAgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2JhY2tkcm9wICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5faXNTaG93biAgICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAgID0gbnVsbFxuICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBudWxsXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nICAgICA9IG51bGxcbiAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCAgICAgID0gbnVsbFxuICB9XG5cbiAgaGFuZGxlVXBkYXRlKCkge1xuICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSlcblxuICAgIGlmICghdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlIHx8XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgIC8vIERvbid0IG1vdmUgbW9kYWwncyBET00gcG9zaXRpb25cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJylcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsIHRydWUpXG5cbiAgICBpZiAoJCh0aGlzLl9kaWFsb2cpLmhhc0NsYXNzKENsYXNzTmFtZS5TQ1JPTExBQkxFKSkge1xuICAgICAgdGhpcy5fZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTU9EQUxfQk9EWSkuc2Nyb2xsVG9wID0gMFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnNjcm9sbFRvcCA9IDBcbiAgICB9XG5cbiAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgVXRpbC5yZWZsb3codGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLmFkZENsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgdGhpcy5fZW5mb3JjZUZvY3VzKClcbiAgICB9XG5cbiAgICBjb25zdCBzaG93bkV2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XTiwge1xuICAgICAgcmVsYXRlZFRhcmdldFxuICAgIH0pXG5cbiAgICBjb25zdCB0cmFuc2l0aW9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgICAgfVxuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93bkV2ZW50KVxuICAgIH1cblxuICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9kaWFsb2cpXG5cbiAgICAgICQodGhpcy5fZGlhbG9nKVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIHRyYW5zaXRpb25Db21wbGV0ZSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNpdGlvbkNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICBfZW5mb3JjZUZvY3VzKCkge1xuICAgICQoZG9jdW1lbnQpXG4gICAgICAub2ZmKEV2ZW50LkZPQ1VTSU4pIC8vIEd1YXJkIGFnYWluc3QgaW5maW5pdGUgZm9jdXMgbG9vcFxuICAgICAgLm9uKEV2ZW50LkZPQ1VTSU4sIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZG9jdW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLmhhcyhldmVudC50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG5cbiAgX3NldEVzY2FwZUV2ZW50KCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duICYmIHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5LRVlET1dOX0RJU01JU1MsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93bikge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRXZlbnQuS0VZRE9XTl9ESVNNSVNTKVxuICAgIH1cbiAgfVxuXG4gIF9zZXRSZXNpemVFdmVudCgpIHtcbiAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgJCh3aW5kb3cpLm9uKEV2ZW50LlJFU0laRSwgKGV2ZW50KSA9PiB0aGlzLmhhbmRsZVVwZGF0ZShldmVudCkpXG4gICAgfSBlbHNlIHtcbiAgICAgICQod2luZG93KS5vZmYoRXZlbnQuUkVTSVpFKVxuICAgIH1cbiAgfVxuXG4gIF9oaWRlTW9kYWwoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl9zaG93QmFja2Ryb3AoKCkgPT4ge1xuICAgICAgJChkb2N1bWVudC5ib2R5KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuT1BFTilcbiAgICAgIHRoaXMuX3Jlc2V0QWRqdXN0bWVudHMoKVxuICAgICAgdGhpcy5fcmVzZXRTY3JvbGxiYXIoKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKEV2ZW50LkhJRERFTilcbiAgICB9KVxuICB9XG5cbiAgX3JlbW92ZUJhY2tkcm9wKCkge1xuICAgIGlmICh0aGlzLl9iYWNrZHJvcCkge1xuICAgICAgJCh0aGlzLl9iYWNrZHJvcCkucmVtb3ZlKClcbiAgICAgIHRoaXMuX2JhY2tkcm9wID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIF9zaG93QmFja2Ryb3AoY2FsbGJhY2spIHtcbiAgICBjb25zdCBhbmltYXRlID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSlcbiAgICAgID8gQ2xhc3NOYW1lLkZBREUgOiAnJ1xuXG4gICAgaWYgKHRoaXMuX2lzU2hvd24gJiYgdGhpcy5fY29uZmlnLmJhY2tkcm9wKSB7XG4gICAgICB0aGlzLl9iYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0aGlzLl9iYWNrZHJvcC5jbGFzc05hbWUgPSBDbGFzc05hbWUuQkFDS0RST1BcblxuICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgdGhpcy5fYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChhbmltYXRlKVxuICAgICAgfVxuXG4gICAgICAkKHRoaXMuX2JhY2tkcm9wKS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LkNMSUNLX0RJU01JU1MsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5faWdub3JlQmFja2Ryb3BDbGljaykge1xuICAgICAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAgIFV0aWwucmVmbG93KHRoaXMuX2JhY2tkcm9wKVxuICAgICAgfVxuXG4gICAgICAkKHRoaXMuX2JhY2tkcm9wKS5hZGRDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCFhbmltYXRlKSB7XG4gICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9iYWNrZHJvcClcblxuICAgICAgJCh0aGlzLl9iYWNrZHJvcClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjYWxsYmFjaylcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzU2hvd24gJiYgdGhpcy5fYmFja2Ryb3ApIHtcbiAgICAgICQodGhpcy5fYmFja2Ryb3ApLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICBjb25zdCBjYWxsYmFja1JlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlQmFja2Ryb3AoKVxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICAgIGNvbnN0IGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9iYWNrZHJvcClcblxuICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKVxuICAgICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY2FsbGJhY2tSZW1vdmUpXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2tSZW1vdmUoKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHRoZSBmb2xsb3dpbmcgbWV0aG9kcyBhcmUgdXNlZCB0byBoYW5kbGUgb3ZlcmZsb3dpbmcgbW9kYWxzXG4gIC8vIHRvZG8gKGZhdCk6IHRoZXNlIHNob3VsZCBwcm9iYWJseSBiZSByZWZhY3RvcmVkIG91dCBvZiBtb2RhbC5qc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgX2FkanVzdERpYWxvZygpIHtcbiAgICBjb25zdCBpc01vZGFsT3ZlcmZsb3dpbmcgPVxuICAgICAgdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cbiAgICBpZiAoIXRoaXMuX2lzQm9keU92ZXJmbG93aW5nICYmIGlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9IGAke3RoaXMuX3Njcm9sbGJhcldpZHRofXB4YFxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAmJiAhaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3RoaXMuX3Njcm9sbGJhcldpZHRofXB4YFxuICAgIH1cbiAgfVxuXG4gIF9yZXNldEFkanVzdG1lbnRzKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSAnJ1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJydcbiAgfVxuXG4gIF9jaGVja1Njcm9sbGJhcigpIHtcbiAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nID0gcmVjdC5sZWZ0ICsgcmVjdC5yaWdodCA8IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgdGhpcy5fc2Nyb2xsYmFyV2lkdGggPSB0aGlzLl9nZXRTY3JvbGxiYXJXaWR0aCgpXG4gIH1cblxuICBfc2V0U2Nyb2xsYmFyKCkge1xuICAgIGlmICh0aGlzLl9pc0JvZHlPdmVyZmxvd2luZykge1xuICAgICAgLy8gTm90ZTogRE9NTm9kZS5zdHlsZS5wYWRkaW5nUmlnaHQgcmV0dXJucyB0aGUgYWN0dWFsIHZhbHVlIG9yICcnIGlmIG5vdCBzZXRcbiAgICAgIC8vICAgd2hpbGUgJChET01Ob2RlKS5jc3MoJ3BhZGRpbmctcmlnaHQnKSByZXR1cm5zIHRoZSBjYWxjdWxhdGVkIHZhbHVlIG9yIDAgaWYgbm90IHNldFxuICAgICAgY29uc3QgZml4ZWRDb250ZW50ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkZJWEVEX0NPTlRFTlQpKVxuICAgICAgY29uc3Qgc3RpY2t5Q29udGVudCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5TVElDS1lfQ09OVEVOVCkpXG5cbiAgICAgIC8vIEFkanVzdCBmaXhlZCBjb250ZW50IHBhZGRpbmdcbiAgICAgICQoZml4ZWRDb250ZW50KS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBhY3R1YWxQYWRkaW5nID0gZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHRcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZFBhZGRpbmcgPSAkKGVsZW1lbnQpLmNzcygncGFkZGluZy1yaWdodCcpXG4gICAgICAgICQoZWxlbWVudClcbiAgICAgICAgICAuZGF0YSgncGFkZGluZy1yaWdodCcsIGFjdHVhbFBhZGRpbmcpXG4gICAgICAgICAgLmNzcygncGFkZGluZy1yaWdodCcsIGAke3BhcnNlRmxvYXQoY2FsY3VsYXRlZFBhZGRpbmcpICsgdGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgKVxuICAgICAgfSlcblxuICAgICAgLy8gQWRqdXN0IHN0aWNreSBjb250ZW50IG1hcmdpblxuICAgICAgJChzdGlja3lDb250ZW50KS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBhY3R1YWxNYXJnaW4gPSBlbGVtZW50LnN0eWxlLm1hcmdpblJpZ2h0XG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRNYXJnaW4gPSAkKGVsZW1lbnQpLmNzcygnbWFyZ2luLXJpZ2h0JylcbiAgICAgICAgJChlbGVtZW50KVxuICAgICAgICAgIC5kYXRhKCdtYXJnaW4tcmlnaHQnLCBhY3R1YWxNYXJnaW4pXG4gICAgICAgICAgLmNzcygnbWFyZ2luLXJpZ2h0JywgYCR7cGFyc2VGbG9hdChjYWxjdWxhdGVkTWFyZ2luKSAtIHRoaXMuX3Njcm9sbGJhcldpZHRofXB4YClcbiAgICAgIH0pXG5cbiAgICAgIC8vIEFkanVzdCBib2R5IHBhZGRpbmdcbiAgICAgIGNvbnN0IGFjdHVhbFBhZGRpbmcgPSBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodFxuICAgICAgY29uc3QgY2FsY3VsYXRlZFBhZGRpbmcgPSAkKGRvY3VtZW50LmJvZHkpLmNzcygncGFkZGluZy1yaWdodCcpXG4gICAgICAkKGRvY3VtZW50LmJvZHkpXG4gICAgICAgIC5kYXRhKCdwYWRkaW5nLXJpZ2h0JywgYWN0dWFsUGFkZGluZylcbiAgICAgICAgLmNzcygncGFkZGluZy1yaWdodCcsIGAke3BhcnNlRmxvYXQoY2FsY3VsYXRlZFBhZGRpbmcpICsgdGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgKVxuICAgIH1cblxuICAgICQoZG9jdW1lbnQuYm9keSkuYWRkQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pXG4gIH1cblxuICBfcmVzZXRTY3JvbGxiYXIoKSB7XG4gICAgLy8gUmVzdG9yZSBmaXhlZCBjb250ZW50IHBhZGRpbmdcbiAgICBjb25zdCBmaXhlZENvbnRlbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuRklYRURfQ09OVEVOVCkpXG4gICAgJChmaXhlZENvbnRlbnQpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBwYWRkaW5nID0gJChlbGVtZW50KS5kYXRhKCdwYWRkaW5nLXJpZ2h0JylcbiAgICAgICQoZWxlbWVudCkucmVtb3ZlRGF0YSgncGFkZGluZy1yaWdodCcpXG4gICAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhZGRpbmcgPyBwYWRkaW5nIDogJydcbiAgICB9KVxuXG4gICAgLy8gUmVzdG9yZSBzdGlja3kgY29udGVudFxuICAgIGNvbnN0IGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke1NlbGVjdG9yLlNUSUNLWV9DT05URU5UfWApKVxuICAgICQoZWxlbWVudHMpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBtYXJnaW4gPSAkKGVsZW1lbnQpLmRhdGEoJ21hcmdpbi1yaWdodCcpXG4gICAgICBpZiAodHlwZW9mIG1hcmdpbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgJChlbGVtZW50KS5jc3MoJ21hcmdpbi1yaWdodCcsIG1hcmdpbikucmVtb3ZlRGF0YSgnbWFyZ2luLXJpZ2h0JylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gUmVzdG9yZSBib2R5IHBhZGRpbmdcbiAgICBjb25zdCBwYWRkaW5nID0gJChkb2N1bWVudC5ib2R5KS5kYXRhKCdwYWRkaW5nLXJpZ2h0JylcbiAgICAkKGRvY3VtZW50LmJvZHkpLnJlbW92ZURhdGEoJ3BhZGRpbmctcmlnaHQnKVxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gcGFkZGluZyA/IHBhZGRpbmcgOiAnJ1xuICB9XG5cbiAgX2dldFNjcm9sbGJhcldpZHRoKCkgeyAvLyB0aHggZC53YWxzaFxuICAgIGNvbnN0IHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2Nyb2xsRGl2LmNsYXNzTmFtZSA9IENsYXNzTmFtZS5TQ1JPTExCQVJfTUVBU1VSRVJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdilcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aFxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KVxuICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aFxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnLCByZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB7XG4gICAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAgIC4uLiQodGhpcykuZGF0YSgpLFxuICAgICAgICAuLi50eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fVxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBNb2RhbCh0aGlzLCBfY29uZmlnKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKHJlbGF0ZWRUYXJnZXQpXG4gICAgICB9IGVsc2UgaWYgKF9jb25maWcuc2hvdykge1xuICAgICAgICBkYXRhLnNob3cocmVsYXRlZFRhcmdldClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudCkub24oRXZlbnQuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgbGV0IHRhcmdldFxuICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKVxuXG4gIGlmIChzZWxlY3Rvcikge1xuICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gIH1cblxuICBjb25zdCBjb25maWcgPSAkKHRhcmdldCkuZGF0YShEQVRBX0tFWSlcbiAgICA/ICd0b2dnbGUnIDoge1xuICAgICAgLi4uJCh0YXJnZXQpLmRhdGEoKSxcbiAgICAgIC4uLiQodGhpcykuZGF0YSgpXG4gICAgfVxuXG4gIGlmICh0aGlzLnRhZ05hbWUgPT09ICdBJyB8fCB0aGlzLnRhZ05hbWUgPT09ICdBUkVBJykge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNvbnN0ICR0YXJnZXQgPSAkKHRhcmdldCkub25lKEV2ZW50LlNIT1csIChzaG93RXZlbnQpID0+IHtcbiAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAvLyBPbmx5IHJlZ2lzdGVyIGZvY3VzIHJlc3RvcmVyIGlmIG1vZGFsIHdpbGwgYWN0dWFsbHkgZ2V0IHNob3duXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAkdGFyZ2V0Lm9uZShFdmVudC5ISURERU4sICgpID0+IHtcbiAgICAgIGlmICgkKHRoaXMpLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgIHRoaXMuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cbiAgTW9kYWwuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGFyZ2V0KSwgY29uZmlnLCB0aGlzKVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IE1vZGFsLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBNb2RhbFxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBNb2RhbC5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjMuMSk6IHRvb2xzL3Nhbml0aXplci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgdXJpQXR0cnMgPSBbXG4gICdiYWNrZ3JvdW5kJyxcbiAgJ2NpdGUnLFxuICAnaHJlZicsXG4gICdpdGVtdHlwZScsXG4gICdsb25nZGVzYycsXG4gICdwb3N0ZXInLFxuICAnc3JjJyxcbiAgJ3hsaW5rOmhyZWYnXG5dXG5cbmNvbnN0IEFSSUFfQVRUUklCVVRFX1BBVFRFUk4gPSAvXmFyaWEtW1xcdy1dKiQvaVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdFdoaXRlbGlzdCA9IHtcbiAgLy8gR2xvYmFsIGF0dHJpYnV0ZXMgYWxsb3dlZCBvbiBhbnkgc3VwcGxpZWQgZWxlbWVudCBiZWxvdy5cbiAgJyonOiBbJ2NsYXNzJywgJ2RpcicsICdpZCcsICdsYW5nJywgJ3JvbGUnLCBBUklBX0FUVFJJQlVURV9QQVRURVJOXSxcbiAgYTogWyd0YXJnZXQnLCAnaHJlZicsICd0aXRsZScsICdyZWwnXSxcbiAgYXJlYTogW10sXG4gIGI6IFtdLFxuICBicjogW10sXG4gIGNvbDogW10sXG4gIGNvZGU6IFtdLFxuICBkaXY6IFtdLFxuICBlbTogW10sXG4gIGhyOiBbXSxcbiAgaDE6IFtdLFxuICBoMjogW10sXG4gIGgzOiBbXSxcbiAgaDQ6IFtdLFxuICBoNTogW10sXG4gIGg2OiBbXSxcbiAgaTogW10sXG4gIGltZzogWydzcmMnLCAnYWx0JywgJ3RpdGxlJywgJ3dpZHRoJywgJ2hlaWdodCddLFxuICBsaTogW10sXG4gIG9sOiBbXSxcbiAgcDogW10sXG4gIHByZTogW10sXG4gIHM6IFtdLFxuICBzbWFsbDogW10sXG4gIHNwYW46IFtdLFxuICBzdWI6IFtdLFxuICBzdXA6IFtdLFxuICBzdHJvbmc6IFtdLFxuICB1OiBbXSxcbiAgdWw6IFtdXG59XG5cbi8qKlxuICogQSBwYXR0ZXJuIHRoYXQgcmVjb2duaXplcyBhIGNvbW1vbmx5IHVzZWZ1bCBzdWJzZXQgb2YgVVJMcyB0aGF0IGFyZSBzYWZlLlxuICpcbiAqIFNob3V0b3V0IHRvIEFuZ3VsYXIgNyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNy4yLjQvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAqL1xuY29uc3QgU0FGRV9VUkxfUEFUVEVSTiA9IC9eKD86KD86aHR0cHM/fG1haWx0b3xmdHB8dGVsfGZpbGUpOnxbXiY6Lz8jXSooPzpbLz8jXXwkKSkvZ2lcblxuLyoqXG4gKiBBIHBhdHRlcm4gdGhhdCBtYXRjaGVzIHNhZmUgZGF0YSBVUkxzLiBPbmx5IG1hdGNoZXMgaW1hZ2UsIHZpZGVvIGFuZCBhdWRpbyB0eXBlcy5cbiAqXG4gKiBTaG91dG91dCB0byBBbmd1bGFyIDcgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzcuMi40L3BhY2thZ2VzL2NvcmUvc3JjL3Nhbml0aXphdGlvbi91cmxfc2FuaXRpemVyLnRzXG4gKi9cbmNvbnN0IERBVEFfVVJMX1BBVFRFUk4gPSAvXmRhdGE6KD86aW1hZ2VcXC8oPzpibXB8Z2lmfGpwZWd8anBnfHBuZ3x0aWZmfHdlYnApfHZpZGVvXFwvKD86bXBlZ3xtcDR8b2dnfHdlYm0pfGF1ZGlvXFwvKD86bXAzfG9nYXxvZ2d8b3B1cykpO2Jhc2U2NCxbYS16MC05Ky9dKz0qJC9pXG5cbmZ1bmN0aW9uIGFsbG93ZWRBdHRyaWJ1dGUoYXR0ciwgYWxsb3dlZEF0dHJpYnV0ZUxpc3QpIHtcbiAgY29uc3QgYXR0ck5hbWUgPSBhdHRyLm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcblxuICBpZiAoYWxsb3dlZEF0dHJpYnV0ZUxpc3QuaW5kZXhPZihhdHRyTmFtZSkgIT09IC0xKSB7XG4gICAgaWYgKHVyaUF0dHJzLmluZGV4T2YoYXR0ck5hbWUpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4oYXR0ci5ub2RlVmFsdWUubWF0Y2goU0FGRV9VUkxfUEFUVEVSTikgfHwgYXR0ci5ub2RlVmFsdWUubWF0Y2goREFUQV9VUkxfUEFUVEVSTikpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGNvbnN0IHJlZ0V4cCA9IGFsbG93ZWRBdHRyaWJ1dGVMaXN0LmZpbHRlcigoYXR0clJlZ2V4KSA9PiBhdHRyUmVnZXggaW5zdGFuY2VvZiBSZWdFeHApXG5cbiAgLy8gQ2hlY2sgaWYgYSByZWd1bGFyIGV4cHJlc3Npb24gdmFsaWRhdGVzIHRoZSBhdHRyaWJ1dGUuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gcmVnRXhwLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmIChhdHRyTmFtZS5tYXRjaChyZWdFeHBbaV0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVIdG1sKHVuc2FmZUh0bWwsIHdoaXRlTGlzdCwgc2FuaXRpemVGbikge1xuICBpZiAodW5zYWZlSHRtbC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdW5zYWZlSHRtbFxuICB9XG5cbiAgaWYgKHNhbml0aXplRm4gJiYgdHlwZW9mIHNhbml0aXplRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gc2FuaXRpemVGbih1bnNhZmVIdG1sKVxuICB9XG5cbiAgY29uc3QgZG9tUGFyc2VyID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKVxuICBjb25zdCBjcmVhdGVkRG9jdW1lbnQgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKHVuc2FmZUh0bWwsICd0ZXh0L2h0bWwnKVxuICBjb25zdCB3aGl0ZWxpc3RLZXlzID0gT2JqZWN0LmtleXMod2hpdGVMaXN0KVxuICBjb25zdCBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoY3JlYXRlZERvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnKicpKVxuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGVsID0gZWxlbWVudHNbaV1cbiAgICBjb25zdCBlbE5hbWUgPSBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAod2hpdGVsaXN0S2V5cy5pbmRleE9mKGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpID09PSAtMSkge1xuICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbClcblxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBjb25zdCBhdHRyaWJ1dGVMaXN0ID0gW10uc2xpY2UuY2FsbChlbC5hdHRyaWJ1dGVzKVxuICAgIGNvbnN0IHdoaXRlbGlzdGVkQXR0cmlidXRlcyA9IFtdLmNvbmNhdCh3aGl0ZUxpc3RbJyonXSB8fCBbXSwgd2hpdGVMaXN0W2VsTmFtZV0gfHwgW10pXG5cbiAgICBhdHRyaWJ1dGVMaXN0LmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgIGlmICghYWxsb3dlZEF0dHJpYnV0ZShhdHRyLCB3aGl0ZWxpc3RlZEF0dHJpYnV0ZXMpKSB7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyLm5vZGVOYW1lKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gY3JlYXRlZERvY3VtZW50LmJvZHkuaW5uZXJIVE1MXG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjMuMSk6IHRvb2x0aXAuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIERlZmF1bHRXaGl0ZWxpc3QsXG4gIHNhbml0aXplSHRtbFxufSBmcm9tICcuL3Rvb2xzL3Nhbml0aXplcidcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBQb3BwZXIgZnJvbSAncG9wcGVyLmpzJ1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgICAgPSAndG9vbHRpcCdcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICAgICA9ICc0LjMuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICAgICA9ICdicy50b29sdGlwJ1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgICA9ICQuZm5bTkFNRV1cbmNvbnN0IENMQVNTX1BSRUZJWCAgICAgICAgICA9ICdicy10b29sdGlwJ1xuY29uc3QgQlNDTFNfUFJFRklYX1JFR0VYICAgID0gbmV3IFJlZ0V4cChgKF58XFxcXHMpJHtDTEFTU19QUkVGSVh9XFxcXFMrYCwgJ2cnKVxuY29uc3QgRElTQUxMT1dFRF9BVFRSSUJVVEVTID0gWydzYW5pdGl6ZScsICd3aGl0ZUxpc3QnLCAnc2FuaXRpemVGbiddXG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhbmltYXRpb24gICAgICAgICA6ICdib29sZWFuJyxcbiAgdGVtcGxhdGUgICAgICAgICAgOiAnc3RyaW5nJyxcbiAgdGl0bGUgICAgICAgICAgICAgOiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKScsXG4gIHRyaWdnZXIgICAgICAgICAgIDogJ3N0cmluZycsXG4gIGRlbGF5ICAgICAgICAgICAgIDogJyhudW1iZXJ8b2JqZWN0KScsXG4gIGh0bWwgICAgICAgICAgICAgIDogJ2Jvb2xlYW4nLFxuICBzZWxlY3RvciAgICAgICAgICA6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgcGxhY2VtZW50ICAgICAgICAgOiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICBvZmZzZXQgICAgICAgICAgICA6ICcobnVtYmVyfHN0cmluZ3xmdW5jdGlvbiknLFxuICBjb250YWluZXIgICAgICAgICA6ICcoc3RyaW5nfGVsZW1lbnR8Ym9vbGVhbiknLFxuICBmYWxsYmFja1BsYWNlbWVudCA6ICcoc3RyaW5nfGFycmF5KScsXG4gIGJvdW5kYXJ5ICAgICAgICAgIDogJyhzdHJpbmd8ZWxlbWVudCknLFxuICBzYW5pdGl6ZSAgICAgICAgICA6ICdib29sZWFuJyxcbiAgc2FuaXRpemVGbiAgICAgICAgOiAnKG51bGx8ZnVuY3Rpb24pJyxcbiAgd2hpdGVMaXN0ICAgICAgICAgOiAnb2JqZWN0J1xufVxuXG5jb25zdCBBdHRhY2htZW50TWFwID0ge1xuICBBVVRPICAgOiAnYXV0bycsXG4gIFRPUCAgICA6ICd0b3AnLFxuICBSSUdIVCAgOiAncmlnaHQnLFxuICBCT1RUT00gOiAnYm90dG9tJyxcbiAgTEVGVCAgIDogJ2xlZnQnXG59XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGFuaW1hdGlvbiAgICAgICAgIDogdHJ1ZSxcbiAgdGVtcGxhdGUgICAgICAgICAgOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PicsXG4gIHRyaWdnZXIgICAgICAgICAgIDogJ2hvdmVyIGZvY3VzJyxcbiAgdGl0bGUgICAgICAgICAgICAgOiAnJyxcbiAgZGVsYXkgICAgICAgICAgICAgOiAwLFxuICBodG1sICAgICAgICAgICAgICA6IGZhbHNlLFxuICBzZWxlY3RvciAgICAgICAgICA6IGZhbHNlLFxuICBwbGFjZW1lbnQgICAgICAgICA6ICd0b3AnLFxuICBvZmZzZXQgICAgICAgICAgICA6IDAsXG4gIGNvbnRhaW5lciAgICAgICAgIDogZmFsc2UsXG4gIGZhbGxiYWNrUGxhY2VtZW50IDogJ2ZsaXAnLFxuICBib3VuZGFyeSAgICAgICAgICA6ICdzY3JvbGxQYXJlbnQnLFxuICBzYW5pdGl6ZSAgICAgICAgICA6IHRydWUsXG4gIHNhbml0aXplRm4gICAgICAgIDogbnVsbCxcbiAgd2hpdGVMaXN0ICAgICAgICAgOiBEZWZhdWx0V2hpdGVsaXN0XG59XG5cbmNvbnN0IEhvdmVyU3RhdGUgPSB7XG4gIFNIT1cgOiAnc2hvdycsXG4gIE9VVCAgOiAnb3V0J1xufVxuXG5jb25zdCBFdmVudCA9IHtcbiAgSElERSAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgSElEREVOICAgICA6IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICBTSE9XICAgICAgIDogYHNob3cke0VWRU5UX0tFWX1gLFxuICBTSE9XTiAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgSU5TRVJURUQgICA6IGBpbnNlcnRlZCR7RVZFTlRfS0VZfWAsXG4gIENMSUNLICAgICAgOiBgY2xpY2ske0VWRU5UX0tFWX1gLFxuICBGT0NVU0lOICAgIDogYGZvY3VzaW4ke0VWRU5UX0tFWX1gLFxuICBGT0NVU09VVCAgIDogYGZvY3Vzb3V0JHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VFTlRFUiA6IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VMRUFWRSA6IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxufVxuXG5jb25zdCBDbGFzc05hbWUgPSB7XG4gIEZBREUgOiAnZmFkZScsXG4gIFNIT1cgOiAnc2hvdydcbn1cblxuY29uc3QgU2VsZWN0b3IgPSB7XG4gIFRPT0xUSVAgICAgICAgOiAnLnRvb2x0aXAnLFxuICBUT09MVElQX0lOTkVSIDogJy50b29sdGlwLWlubmVyJyxcbiAgQVJST1cgICAgICAgICA6ICcuYXJyb3cnXG59XG5cbmNvbnN0IFRyaWdnZXIgPSB7XG4gIEhPVkVSICA6ICdob3ZlcicsXG4gIEZPQ1VTICA6ICdmb2N1cycsXG4gIENMSUNLICA6ICdjbGljaycsXG4gIE1BTlVBTCA6ICdtYW51YWwnXG59XG5cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFRvb2x0aXAge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAvKipcbiAgICAgKiBDaGVjayBmb3IgUG9wcGVyIGRlcGVuZGVuY3lcbiAgICAgKiBQb3BwZXIgLSBodHRwczovL3BvcHBlci5qcy5vcmdcbiAgICAgKi9cbiAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgdG9vbHRpcHMgcmVxdWlyZSBQb3BwZXIuanMgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZy8pJylcbiAgICB9XG5cbiAgICAvLyBwcml2YXRlXG4gICAgdGhpcy5faXNFbmFibGVkICAgICA9IHRydWVcbiAgICB0aGlzLl90aW1lb3V0ICAgICAgID0gMFxuICAgIHRoaXMuX2hvdmVyU3RhdGUgICAgPSAnJ1xuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSB7fVxuICAgIHRoaXMuX3BvcHBlciAgICAgICAgPSBudWxsXG5cbiAgICAvLyBQcm90ZWN0ZWRcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5jb25maWcgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLnRpcCAgICAgPSBudWxsXG5cbiAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIERBVEFfS0VZXG4gIH1cblxuICBzdGF0aWMgZ2V0IEV2ZW50KCkge1xuICAgIHJldHVybiBFdmVudFxuICB9XG5cbiAgc3RhdGljIGdldCBFVkVOVF9LRVkoKSB7XG4gICAgcmV0dXJuIEVWRU5UX0tFWVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlXG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9IGZhbHNlXG4gIH1cblxuICB0b2dnbGVFbmFibGVkKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9ICF0aGlzLl9pc0VuYWJsZWRcbiAgfVxuXG4gIHRvZ2dsZShldmVudCkge1xuICAgIGlmICghdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnN0IGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZXG4gICAgICBsZXQgY29udGV4dCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5KVxuXG4gICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKFxuICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgICAgICAgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKVxuICAgICAgICApXG4gICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5LCBjb250ZXh0KVxuICAgICAgfVxuXG4gICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyLmNsaWNrID0gIWNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2tcblxuICAgICAgaWYgKGNvbnRleHQuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICBjb250ZXh0Ll9lbnRlcihudWxsLCBjb250ZXh0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5fbGVhdmUobnVsbCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCQodGhpcy5nZXRUaXBFbGVtZW50KCkpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgICB0aGlzLl9sZWF2ZShudWxsLCB0aGlzKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5fZW50ZXIobnVsbCwgdGhpcylcbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxuXG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSlcblxuICAgICQodGhpcy5lbGVtZW50KS5vZmYodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVF9LRVkpXG4gICAgJCh0aGlzLmVsZW1lbnQpLmNsb3Nlc3QoJy5tb2RhbCcpLm9mZignaGlkZS5icy5tb2RhbCcpXG5cbiAgICBpZiAodGhpcy50aXApIHtcbiAgICAgICQodGhpcy50aXApLnJlbW92ZSgpXG4gICAgfVxuXG4gICAgdGhpcy5faXNFbmFibGVkICAgICA9IG51bGxcbiAgICB0aGlzLl90aW1lb3V0ICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2hvdmVyU3RhdGUgICAgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IG51bGxcbiAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIHRoaXMuZWxlbWVudCA9IG51bGxcbiAgICB0aGlzLmNvbmZpZyAgPSBudWxsXG4gICAgdGhpcy50aXAgICAgID0gbnVsbFxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAoJCh0aGlzLmVsZW1lbnQpLmNzcygnZGlzcGxheScpID09PSAnbm9uZScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHVzZSBzaG93IG9uIHZpc2libGUgZWxlbWVudHMnKVxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9ICQuRXZlbnQodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XKVxuICAgIGlmICh0aGlzLmlzV2l0aENvbnRlbnQoKSAmJiB0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudClcblxuICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IFV0aWwuZmluZFNoYWRvd1Jvb3QodGhpcy5lbGVtZW50KVxuICAgICAgY29uc3QgaXNJblRoZURvbSA9ICQuY29udGFpbnMoXG4gICAgICAgIHNoYWRvd1Jvb3QgIT09IG51bGwgPyBzaGFkb3dSb290IDogdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICB0aGlzLmVsZW1lbnRcbiAgICAgIClcblxuICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCAhaXNJblRoZURvbSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgdGlwICAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgICAgY29uc3QgdGlwSWQgPSBVdGlsLmdldFVJRCh0aGlzLmNvbnN0cnVjdG9yLk5BTUUpXG5cbiAgICAgIHRpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGlwSWQpXG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgdGlwSWQpXG5cbiAgICAgIHRoaXMuc2V0Q29udGVudCgpXG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgICAgJCh0aXApLmFkZENsYXNzKENsYXNzTmFtZS5GQURFKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwbGFjZW1lbnQgID0gdHlwZW9mIHRoaXMuY29uZmlnLnBsYWNlbWVudCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHRoaXMuY29uZmlnLnBsYWNlbWVudC5jYWxsKHRoaXMsIHRpcCwgdGhpcy5lbGVtZW50KVxuICAgICAgICA6IHRoaXMuY29uZmlnLnBsYWNlbWVudFxuXG4gICAgICBjb25zdCBhdHRhY2htZW50ID0gdGhpcy5fZ2V0QXR0YWNobWVudChwbGFjZW1lbnQpXG4gICAgICB0aGlzLmFkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KVxuXG4gICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9nZXRDb250YWluZXIoKVxuICAgICAgJCh0aXApLmRhdGEodGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSwgdGhpcylcblxuICAgICAgaWYgKCEkLmNvbnRhaW5zKHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgdGhpcy50aXApKSB7XG4gICAgICAgICQodGlwKS5hcHBlbmRUbyhjb250YWluZXIpXG4gICAgICB9XG5cbiAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSU5TRVJURUQpXG5cbiAgICAgIHRoaXMuX3BvcHBlciA9IG5ldyBQb3BwZXIodGhpcy5lbGVtZW50LCB0aXAsIHtcbiAgICAgICAgcGxhY2VtZW50OiBhdHRhY2htZW50LFxuICAgICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpLFxuICAgICAgICAgIGZsaXA6IHtcbiAgICAgICAgICAgIGJlaGF2aW9yOiB0aGlzLmNvbmZpZy5mYWxsYmFja1BsYWNlbWVudFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXJyb3c6IHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IFNlbGVjdG9yLkFSUk9XXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAgICAgICAgIGJvdW5kYXJpZXNFbGVtZW50OiB0aGlzLmNvbmZpZy5ib3VuZGFyeVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25DcmVhdGU6IChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEub3JpZ2luYWxQbGFjZW1lbnQgIT09IGRhdGEucGxhY2VtZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uVXBkYXRlOiAoZGF0YSkgPT4gdGhpcy5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKGRhdGEpXG4gICAgICB9KVxuXG4gICAgICAkKHRpcCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkuY2hpbGRyZW4oKS5vbignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgICAgIHRoaXMuX2ZpeFRyYW5zaXRpb24oKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZIb3ZlclN0YXRlID0gdGhpcy5faG92ZXJTdGF0ZVxuICAgICAgICB0aGlzLl9ob3ZlclN0YXRlICAgICA9IG51bGxcblxuICAgICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LlNIT1dOKVxuXG4gICAgICAgIGlmIChwcmV2SG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5PVVQpIHtcbiAgICAgICAgICB0aGlzLl9sZWF2ZShudWxsLCB0aGlzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgkKHRoaXMudGlwKS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSkpIHtcbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLnRpcClcblxuICAgICAgICAkKHRoaXMudGlwKVxuICAgICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoaWRlKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdGlwICAgICAgID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICBjb25zdCBoaWRlRXZlbnQgPSAkLkV2ZW50KHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSElERSlcbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9ob3ZlclN0YXRlICE9PSBIb3ZlclN0YXRlLlNIT1cgJiYgdGlwLnBhcmVudE5vZGUpIHtcbiAgICAgICAgdGlwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGlwKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9jbGVhblRpcENsYXNzKClcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKVxuICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5ISURERU4pXG4gICAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcihoaWRlRXZlbnQpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAkKHRpcCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgJChkb2N1bWVudC5ib2R5KS5jaGlsZHJlbigpLm9mZignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKVxuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVHJpZ2dlci5DTElDS10gPSBmYWxzZVxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVHJpZ2dlci5GT0NVU10gPSBmYWxzZVxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVHJpZ2dlci5IT1ZFUl0gPSBmYWxzZVxuXG4gICAgaWYgKCQodGhpcy50aXApLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aXApXG5cbiAgICAgICQodGlwKVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuXG4gICAgdGhpcy5faG92ZXJTdGF0ZSA9ICcnXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcG9wcGVyLnNjaGVkdWxlVXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcm90ZWN0ZWRcblxuICBpc1dpdGhDb250ZW50KCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuZ2V0VGl0bGUoKSlcbiAgfVxuXG4gIGFkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KSB7XG4gICAgJCh0aGlzLmdldFRpcEVsZW1lbnQoKSkuYWRkQ2xhc3MoYCR7Q0xBU1NfUFJFRklYfS0ke2F0dGFjaG1lbnR9YClcbiAgfVxuXG4gIGdldFRpcEVsZW1lbnQoKSB7XG4gICAgdGhpcy50aXAgPSB0aGlzLnRpcCB8fCAkKHRoaXMuY29uZmlnLnRlbXBsYXRlKVswXVxuICAgIHJldHVybiB0aGlzLnRpcFxuICB9XG5cbiAgc2V0Q29udGVudCgpIHtcbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoJCh0aXAucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5UT09MVElQX0lOTkVSKSksIHRoaXMuZ2V0VGl0bGUoKSlcbiAgICAkKHRpcCkucmVtb3ZlQ2xhc3MoYCR7Q2xhc3NOYW1lLkZBREV9ICR7Q2xhc3NOYW1lLlNIT1d9YClcbiAgfVxuXG4gIHNldEVsZW1lbnRDb250ZW50KCRlbGVtZW50LCBjb250ZW50KSB7XG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnb2JqZWN0JyAmJiAoY29udGVudC5ub2RlVHlwZSB8fCBjb250ZW50LmpxdWVyeSkpIHtcbiAgICAgIC8vIENvbnRlbnQgaXMgYSBET00gbm9kZSBvciBhIGpRdWVyeVxuICAgICAgaWYgKHRoaXMuY29uZmlnLmh0bWwpIHtcbiAgICAgICAgaWYgKCEkKGNvbnRlbnQpLnBhcmVudCgpLmlzKCRlbGVtZW50KSkge1xuICAgICAgICAgICRlbGVtZW50LmVtcHR5KCkuYXBwZW5kKGNvbnRlbnQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRlbGVtZW50LnRleHQoJChjb250ZW50KS50ZXh0KCkpXG4gICAgICB9XG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZy5odG1sKSB7XG4gICAgICBpZiAodGhpcy5jb25maWcuc2FuaXRpemUpIHtcbiAgICAgICAgY29udGVudCA9IHNhbml0aXplSHRtbChjb250ZW50LCB0aGlzLmNvbmZpZy53aGl0ZUxpc3QsIHRoaXMuY29uZmlnLnNhbml0aXplRm4pXG4gICAgICB9XG5cbiAgICAgICRlbGVtZW50Lmh0bWwoY29udGVudClcbiAgICB9IGVsc2Uge1xuICAgICAgJGVsZW1lbnQudGV4dChjb250ZW50KVxuICAgIH1cbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIGxldCB0aXRsZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKVxuXG4gICAgaWYgKCF0aXRsZSkge1xuICAgICAgdGl0bGUgPSB0eXBlb2YgdGhpcy5jb25maWcudGl0bGUgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyB0aGlzLmNvbmZpZy50aXRsZS5jYWxsKHRoaXMuZWxlbWVudClcbiAgICAgICAgOiB0aGlzLmNvbmZpZy50aXRsZVxuICAgIH1cblxuICAgIHJldHVybiB0aXRsZVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0ge31cblxuICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcub2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvZmZzZXQuZm4gPSAoZGF0YSkgPT4ge1xuICAgICAgICBkYXRhLm9mZnNldHMgPSB7XG4gICAgICAgICAgLi4uZGF0YS5vZmZzZXRzLFxuICAgICAgICAgIC4uLnRoaXMuY29uZmlnLm9mZnNldChkYXRhLm9mZnNldHMsIHRoaXMuZWxlbWVudCkgfHwge31cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldC5vZmZzZXQgPSB0aGlzLmNvbmZpZy5vZmZzZXRcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfZ2V0Q29udGFpbmVyKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5jb250YWluZXIgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuYm9keVxuICAgIH1cblxuICAgIGlmIChVdGlsLmlzRWxlbWVudCh0aGlzLmNvbmZpZy5jb250YWluZXIpKSB7XG4gICAgICByZXR1cm4gJCh0aGlzLmNvbmZpZy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgcmV0dXJuICQoZG9jdW1lbnQpLmZpbmQodGhpcy5jb25maWcuY29udGFpbmVyKVxuICB9XG5cbiAgX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIEF0dGFjaG1lbnRNYXBbcGxhY2VtZW50LnRvVXBwZXJDYXNlKCldXG4gIH1cblxuICBfc2V0TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IHRyaWdnZXJzID0gdGhpcy5jb25maWcudHJpZ2dlci5zcGxpdCgnICcpXG5cbiAgICB0cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyKSA9PiB7XG4gICAgICBpZiAodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgICAgICAkKHRoaXMuZWxlbWVudCkub24oXG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5DTElDSyxcbiAgICAgICAgICB0aGlzLmNvbmZpZy5zZWxlY3RvcixcbiAgICAgICAgICAoZXZlbnQpID0+IHRoaXMudG9nZ2xlKGV2ZW50KVxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgIT09IFRyaWdnZXIuTUFOVUFMKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50SW4gPSB0cmlnZ2VyID09PSBUcmlnZ2VyLkhPVkVSXG4gICAgICAgICAgPyB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFRU5URVJcbiAgICAgICAgICA6IHRoaXMuY29uc3RydWN0b3IuRXZlbnQuRk9DVVNJTlxuICAgICAgICBjb25zdCBldmVudE91dCA9IHRyaWdnZXIgPT09IFRyaWdnZXIuSE9WRVJcbiAgICAgICAgICA/IHRoaXMuY29uc3RydWN0b3IuRXZlbnQuTU9VU0VMRUFWRVxuICAgICAgICAgIDogdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5GT0NVU09VVFxuXG4gICAgICAgICQodGhpcy5lbGVtZW50KVxuICAgICAgICAgIC5vbihcbiAgICAgICAgICAgIGV2ZW50SW4sXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5zZWxlY3RvcixcbiAgICAgICAgICAgIChldmVudCkgPT4gdGhpcy5fZW50ZXIoZXZlbnQpXG4gICAgICAgICAgKVxuICAgICAgICAgIC5vbihcbiAgICAgICAgICAgIGV2ZW50T3V0LFxuICAgICAgICAgICAgdGhpcy5jb25maWcuc2VsZWN0b3IsXG4gICAgICAgICAgICAoZXZlbnQpID0+IHRoaXMuX2xlYXZlKGV2ZW50KVxuICAgICAgICAgIClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgJCh0aGlzLmVsZW1lbnQpLmNsb3Nlc3QoJy5tb2RhbCcpLm9uKFxuICAgICAgJ2hpZGUuYnMubW9kYWwnLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcblxuICAgIGlmICh0aGlzLmNvbmZpZy5zZWxlY3Rvcikge1xuICAgICAgdGhpcy5jb25maWcgPSB7XG4gICAgICAgIC4uLnRoaXMuY29uZmlnLFxuICAgICAgICB0cmlnZ2VyOiAnbWFudWFsJyxcbiAgICAgICAgc2VsZWN0b3I6ICcnXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ZpeFRpdGxlKClcbiAgICB9XG4gIH1cblxuICBfZml4VGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGVUeXBlID0gdHlwZW9mIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHwgdGl0bGVUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcbiAgICAgICAgJ2RhdGEtb3JpZ2luYWwtdGl0bGUnLFxuICAgICAgICB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpIHx8ICcnXG4gICAgICApXG5cbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJycpXG4gICAgfVxuICB9XG5cbiAgX2VudGVyKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVlcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSlcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKFxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpXG4gICAgICApXG4gICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dClcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbXG4gICAgICAgIGV2ZW50LnR5cGUgPT09ICdmb2N1c2luJyA/IFRyaWdnZXIuRk9DVVMgOiBUcmlnZ2VyLkhPVkVSXG4gICAgICBdID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmICgkKGNvbnRleHQuZ2V0VGlwRWxlbWVudCgpKS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykgfHwgY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5TSE9XKSB7XG4gICAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSG92ZXJTdGF0ZS5TSE9XXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dClcblxuICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIb3ZlclN0YXRlLlNIT1dcblxuICAgIGlmICghY29udGV4dC5jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpIHtcbiAgICAgIGNvbnRleHQuc2hvdygpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb250ZXh0Ll90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5TSE9XKSB7XG4gICAgICAgIGNvbnRleHQuc2hvdygpXG4gICAgICB9XG4gICAgfSwgY29udGV4dC5jb25maWcuZGVsYXkuc2hvdylcbiAgfVxuXG4gIF9sZWF2ZShldmVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZXG4gICAgY29udGV4dCA9IGNvbnRleHQgfHwgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXkpXG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgICAgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKVxuICAgICAgKVxuICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXksIGNvbnRleHQpXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW1xuICAgICAgICBldmVudC50eXBlID09PSAnZm9jdXNvdXQnID8gVHJpZ2dlci5GT0NVUyA6IFRyaWdnZXIuSE9WRVJcbiAgICAgIF0gPSBmYWxzZVxuICAgIH1cblxuICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNsZWFyVGltZW91dChjb250ZXh0Ll90aW1lb3V0KVxuXG4gICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhvdmVyU3RhdGUuT1VUXG5cbiAgICBpZiAoIWNvbnRleHQuY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0LmNvbmZpZy5kZWxheS5oaWRlKSB7XG4gICAgICBjb250ZXh0LmhpZGUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuT1VUKSB7XG4gICAgICAgIGNvbnRleHQuaGlkZSgpXG4gICAgICB9XG4gICAgfSwgY29udGV4dC5jb25maWcuZGVsYXkuaGlkZSlcbiAgfVxuXG4gIF9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkge1xuICAgIGZvciAoY29uc3QgdHJpZ2dlciBpbiB0aGlzLl9hY3RpdmVUcmlnZ2VyKSB7XG4gICAgICBpZiAodGhpcy5fYWN0aXZlVHJpZ2dlclt0cmlnZ2VyXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25zdCBkYXRhQXR0cmlidXRlcyA9ICQodGhpcy5lbGVtZW50KS5kYXRhKClcblxuICAgIE9iamVjdC5rZXlzKGRhdGFBdHRyaWJ1dGVzKVxuICAgICAgLmZvckVhY2goKGRhdGFBdHRyKSA9PiB7XG4gICAgICAgIGlmIChESVNBTExPV0VEX0FUVFJJQlVURVMuaW5kZXhPZihkYXRhQXR0cikgIT09IC0xKSB7XG4gICAgICAgICAgZGVsZXRlIGRhdGFBdHRyaWJ1dGVzW2RhdGFBdHRyXVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgY29uZmlnID0ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgLi4uZGF0YUF0dHJpYnV0ZXMsXG4gICAgICAuLi50eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmRlbGF5ID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLmRlbGF5ID0ge1xuICAgICAgICBzaG93OiBjb25maWcuZGVsYXksXG4gICAgICAgIGhpZGU6IGNvbmZpZy5kZWxheVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnRpdGxlID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLnRpdGxlID0gY29uZmlnLnRpdGxlLnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5jb250ZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLmNvbnRlbnQgPSBjb25maWcuY29udGVudC50b1N0cmluZygpXG4gICAgfVxuXG4gICAgVXRpbC50eXBlQ2hlY2tDb25maWcoXG4gICAgICBOQU1FLFxuICAgICAgY29uZmlnLFxuICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZVxuICAgIClcblxuICAgIGlmIChjb25maWcuc2FuaXRpemUpIHtcbiAgICAgIGNvbmZpZy50ZW1wbGF0ZSA9IHNhbml0aXplSHRtbChjb25maWcudGVtcGxhdGUsIGNvbmZpZy53aGl0ZUxpc3QsIGNvbmZpZy5zYW5pdGl6ZUZuKVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXREZWxlZ2F0ZUNvbmZpZygpIHtcbiAgICBjb25zdCBjb25maWcgPSB7fVxuXG4gICAgaWYgKHRoaXMuY29uZmlnKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmNvbmZpZykge1xuICAgICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0W2tleV0gIT09IHRoaXMuY29uZmlnW2tleV0pIHtcbiAgICAgICAgICBjb25maWdba2V5XSA9IHRoaXMuY29uZmlnW2tleV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9jbGVhblRpcENsYXNzKCkge1xuICAgIGNvbnN0ICR0aXAgPSAkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKVxuICAgIGNvbnN0IHRhYkNsYXNzID0gJHRpcC5hdHRyKCdjbGFzcycpLm1hdGNoKEJTQ0xTX1BSRUZJWF9SRUdFWClcbiAgICBpZiAodGFiQ2xhc3MgIT09IG51bGwgJiYgdGFiQ2xhc3MubGVuZ3RoKSB7XG4gICAgICAkdGlwLnJlbW92ZUNsYXNzKHRhYkNsYXNzLmpvaW4oJycpKVxuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UocG9wcGVyRGF0YSkge1xuICAgIGNvbnN0IHBvcHBlckluc3RhbmNlID0gcG9wcGVyRGF0YS5pbnN0YW5jZVxuICAgIHRoaXMudGlwID0gcG9wcGVySW5zdGFuY2UucG9wcGVyXG4gICAgdGhpcy5fY2xlYW5UaXBDbGFzcygpXG4gICAgdGhpcy5hZGRBdHRhY2htZW50Q2xhc3ModGhpcy5fZ2V0QXR0YWNobWVudChwb3BwZXJEYXRhLnBsYWNlbWVudCkpXG4gIH1cblxuICBfZml4VHJhbnNpdGlvbigpIHtcbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIGNvbnN0IGluaXRDb25maWdBbmltYXRpb24gPSB0aGlzLmNvbmZpZy5hbmltYXRpb25cblxuICAgIGlmICh0aXAuZ2V0QXR0cmlidXRlKCd4LXBsYWNlbWVudCcpICE9PSBudWxsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAkKHRpcCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkZBREUpXG4gICAgdGhpcy5jb25maWcuYW5pbWF0aW9uID0gZmFsc2VcbiAgICB0aGlzLmhpZGUoKVxuICAgIHRoaXMuc2hvdygpXG4gICAgdGhpcy5jb25maWcuYW5pbWF0aW9uID0gaW5pdENvbmZpZ0FuaW1hdGlvblxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWdcblxuICAgICAgaWYgKCFkYXRhICYmIC9kaXNwb3NlfGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgVG9vbHRpcCh0aGlzLCBfY29uZmlnKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBUb29sdGlwLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBUb29sdGlwXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIFRvb2x0aXAuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjMuMSk6IHBvcG92ZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgICA9ICdwb3BvdmVyJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgICA9ICc0LjMuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICAgPSAnYnMucG9wb3ZlcidcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICA9ICQuZm5bTkFNRV1cbmNvbnN0IENMQVNTX1BSRUZJWCAgICAgICAgPSAnYnMtcG9wb3ZlcidcbmNvbnN0IEJTQ0xTX1BSRUZJWF9SRUdFWCAgPSBuZXcgUmVnRXhwKGAoXnxcXFxccykke0NMQVNTX1BSRUZJWH1cXFxcUytgLCAnZycpXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIC4uLlRvb2x0aXAuRGVmYXVsdCxcbiAgcGxhY2VtZW50IDogJ3JpZ2h0JyxcbiAgdHJpZ2dlciAgIDogJ2NsaWNrJyxcbiAgY29udGVudCAgIDogJycsXG4gIHRlbXBsYXRlICA6ICc8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIHJvbGU9XCJ0b29sdGlwXCI+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICAgJzxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PC9oMz4nICtcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWJvZHlcIj48L2Rpdj48L2Rpdj4nXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICAuLi5Ub29sdGlwLkRlZmF1bHRUeXBlLFxuICBjb250ZW50IDogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgRkFERSA6ICdmYWRlJyxcbiAgU0hPVyA6ICdzaG93J1xufVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgVElUTEUgICA6ICcucG9wb3Zlci1oZWFkZXInLFxuICBDT05URU5UIDogJy5wb3BvdmVyLWJvZHknXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBISURFICAgICAgIDogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU4gICAgIDogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIFNIT1cgICAgICAgOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOICAgICAgOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBJTlNFUlRFRCAgIDogYGluc2VydGVkJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0sgICAgICA6IGBjbGljayR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTSU4gICAgOiBgZm9jdXNpbiR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTT1VUICAgOiBgZm9jdXNvdXQke0VWRU5UX0tFWX1gLFxuICBNT1VTRUVOVEVSIDogYG1vdXNlZW50ZXIke0VWRU5UX0tFWX1gLFxuICBNT1VTRUxFQVZFIDogYG1vdXNlbGVhdmUke0VWRU5UX0tFWX1gXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBQb3BvdmVyIGV4dGVuZHMgVG9vbHRpcCB7XG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBEQVRBX0tFWVxuICB9XG5cbiAgc3RhdGljIGdldCBFdmVudCgpIHtcbiAgICByZXR1cm4gRXZlbnRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRVZFTlRfS0VZKCkge1xuICAgIHJldHVybiBFVkVOVF9LRVlcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICAvLyBPdmVycmlkZXNcblxuICBpc1dpdGhDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFRpdGxlKCkgfHwgdGhpcy5fZ2V0Q29udGVudCgpXG4gIH1cblxuICBhZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudCkge1xuICAgICQodGhpcy5nZXRUaXBFbGVtZW50KCkpLmFkZENsYXNzKGAke0NMQVNTX1BSRUZJWH0tJHthdHRhY2htZW50fWApXG4gIH1cblxuICBnZXRUaXBFbGVtZW50KCkge1xuICAgIHRoaXMudGlwID0gdGhpcy50aXAgfHwgJCh0aGlzLmNvbmZpZy50ZW1wbGF0ZSlbMF1cbiAgICByZXR1cm4gdGhpcy50aXBcbiAgfVxuXG4gIHNldENvbnRlbnQoKSB7XG4gICAgY29uc3QgJHRpcCA9ICQodGhpcy5nZXRUaXBFbGVtZW50KCkpXG5cbiAgICAvLyBXZSB1c2UgYXBwZW5kIGZvciBodG1sIG9iamVjdHMgdG8gbWFpbnRhaW4ganMgZXZlbnRzXG4gICAgdGhpcy5zZXRFbGVtZW50Q29udGVudCgkdGlwLmZpbmQoU2VsZWN0b3IuVElUTEUpLCB0aGlzLmdldFRpdGxlKCkpXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLl9nZXRDb250ZW50KClcbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LmNhbGwodGhpcy5lbGVtZW50KVxuICAgIH1cbiAgICB0aGlzLnNldEVsZW1lbnRDb250ZW50KCR0aXAuZmluZChTZWxlY3Rvci5DT05URU5UKSwgY29udGVudClcblxuICAgICR0aXAucmVtb3ZlQ2xhc3MoYCR7Q2xhc3NOYW1lLkZBREV9ICR7Q2xhc3NOYW1lLlNIT1d9YClcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jb250ZW50JykgfHxcbiAgICAgIHRoaXMuY29uZmlnLmNvbnRlbnRcbiAgfVxuXG4gIF9jbGVhblRpcENsYXNzKCkge1xuICAgIGNvbnN0ICR0aXAgPSAkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKVxuICAgIGNvbnN0IHRhYkNsYXNzID0gJHRpcC5hdHRyKCdjbGFzcycpLm1hdGNoKEJTQ0xTX1BSRUZJWF9SRUdFWClcbiAgICBpZiAodGFiQ2xhc3MgIT09IG51bGwgJiYgdGFiQ2xhc3MubGVuZ3RoID4gMCkge1xuICAgICAgJHRpcC5yZW1vdmVDbGFzcyh0YWJDbGFzcy5qb2luKCcnKSlcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbFxuXG4gICAgICBpZiAoIWRhdGEgJiYgL2Rpc3Bvc2V8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBQb3BvdmVyKHRoaXMsIF9jb25maWcpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IFBvcG92ZXIuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFBvcG92ZXJcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gUG9wb3Zlci5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXJcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuMy4xKTogc2Nyb2xsc3B5LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICA9ICdzY3JvbGxzcHknXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgPSAnNC4zLjEnXG5jb25zdCBEQVRBX0tFWSAgICAgICAgICAgPSAnYnMuc2Nyb2xsc3B5J1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIG9mZnNldCA6IDEwLFxuICBtZXRob2QgOiAnYXV0bycsXG4gIHRhcmdldCA6ICcnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBvZmZzZXQgOiAnbnVtYmVyJyxcbiAgbWV0aG9kIDogJ3N0cmluZycsXG4gIHRhcmdldCA6ICcoc3RyaW5nfGVsZW1lbnQpJ1xufVxuXG5jb25zdCBFdmVudCA9IHtcbiAgQUNUSVZBVEUgICAgICA6IGBhY3RpdmF0ZSR7RVZFTlRfS0VZfWAsXG4gIFNDUk9MTCAgICAgICAgOiBgc2Nyb2xsJHtFVkVOVF9LRVl9YCxcbiAgTE9BRF9EQVRBX0FQSSA6IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxufVxuXG5jb25zdCBDbGFzc05hbWUgPSB7XG4gIERST1BET1dOX0lURU0gOiAnZHJvcGRvd24taXRlbScsXG4gIERST1BET1dOX01FTlUgOiAnZHJvcGRvd24tbWVudScsXG4gIEFDVElWRSAgICAgICAgOiAnYWN0aXZlJ1xufVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgREFUQV9TUFkgICAgICAgIDogJ1tkYXRhLXNweT1cInNjcm9sbFwiXScsXG4gIEFDVElWRSAgICAgICAgICA6ICcuYWN0aXZlJyxcbiAgTkFWX0xJU1RfR1JPVVAgIDogJy5uYXYsIC5saXN0LWdyb3VwJyxcbiAgTkFWX0xJTktTICAgICAgIDogJy5uYXYtbGluaycsXG4gIE5BVl9JVEVNUyAgICAgICA6ICcubmF2LWl0ZW0nLFxuICBMSVNUX0lURU1TICAgICAgOiAnLmxpc3QtZ3JvdXAtaXRlbScsXG4gIERST1BET1dOICAgICAgICA6ICcuZHJvcGRvd24nLFxuICBEUk9QRE9XTl9JVEVNUyAgOiAnLmRyb3Bkb3duLWl0ZW0nLFxuICBEUk9QRE9XTl9UT0dHTEUgOiAnLmRyb3Bkb3duLXRvZ2dsZSdcbn1cblxuY29uc3QgT2Zmc2V0TWV0aG9kID0ge1xuICBPRkZTRVQgICA6ICdvZmZzZXQnLFxuICBQT1NJVElPTiA6ICdwb3NpdGlvbidcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFNjcm9sbFNweSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgPSBlbGVtZW50XG4gICAgdGhpcy5fc2Nyb2xsRWxlbWVudCA9IGVsZW1lbnQudGFnTmFtZSA9PT0gJ0JPRFknID8gd2luZG93IDogZWxlbWVudFxuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX3NlbGVjdG9yICAgICAgPSBgJHt0aGlzLl9jb25maWcudGFyZ2V0fSAke1NlbGVjdG9yLk5BVl9MSU5LU30sYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAke3RoaXMuX2NvbmZpZy50YXJnZXR9ICR7U2VsZWN0b3IuTElTVF9JVEVNU30sYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAke3RoaXMuX2NvbmZpZy50YXJnZXR9ICR7U2VsZWN0b3IuRFJPUERPV05fSVRFTVN9YFxuICAgIHRoaXMuX29mZnNldHMgICAgICAgPSBbXVxuICAgIHRoaXMuX3RhcmdldHMgICAgICAgPSBbXVxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCAgPSBudWxsXG4gICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ICA9IDBcblxuICAgICQodGhpcy5fc2Nyb2xsRWxlbWVudCkub24oRXZlbnQuU0NST0xMLCAoZXZlbnQpID0+IHRoaXMuX3Byb2Nlc3MoZXZlbnQpKVxuXG4gICAgdGhpcy5yZWZyZXNoKClcbiAgICB0aGlzLl9wcm9jZXNzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCBhdXRvTWV0aG9kID0gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gdGhpcy5fc2Nyb2xsRWxlbWVudC53aW5kb3dcbiAgICAgID8gT2Zmc2V0TWV0aG9kLk9GRlNFVCA6IE9mZnNldE1ldGhvZC5QT1NJVElPTlxuXG4gICAgY29uc3Qgb2Zmc2V0TWV0aG9kID0gdGhpcy5fY29uZmlnLm1ldGhvZCA9PT0gJ2F1dG8nXG4gICAgICA/IGF1dG9NZXRob2QgOiB0aGlzLl9jb25maWcubWV0aG9kXG5cbiAgICBjb25zdCBvZmZzZXRCYXNlID0gb2Zmc2V0TWV0aG9kID09PSBPZmZzZXRNZXRob2QuUE9TSVRJT05cbiAgICAgID8gdGhpcy5fZ2V0U2Nyb2xsVG9wKCkgOiAwXG5cbiAgICB0aGlzLl9vZmZzZXRzID0gW11cbiAgICB0aGlzLl90YXJnZXRzID0gW11cblxuICAgIHRoaXMuX3Njcm9sbEhlaWdodCA9IHRoaXMuX2dldFNjcm9sbEhlaWdodCgpXG5cbiAgICBjb25zdCB0YXJnZXRzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX3NlbGVjdG9yKSlcblxuICAgIHRhcmdldHNcbiAgICAgIC5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgbGV0IHRhcmdldFxuICAgICAgICBjb25zdCB0YXJnZXRTZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuXG4gICAgICAgIGlmICh0YXJnZXRTZWxlY3Rvcikge1xuICAgICAgICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2VsZWN0b3IpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0QkNSID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgaWYgKHRhcmdldEJDUi53aWR0aCB8fCB0YXJnZXRCQ1IuaGVpZ2h0KSB7XG4gICAgICAgICAgICAvLyBUT0RPIChmYXQpOiByZW1vdmUgc2tldGNoIHJlbGlhbmNlIG9uIGpRdWVyeSBwb3NpdGlvbi9vZmZzZXRcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICQodGFyZ2V0KVtvZmZzZXRNZXRob2RdKCkudG9wICsgb2Zmc2V0QmFzZSxcbiAgICAgICAgICAgICAgdGFyZ2V0U2VsZWN0b3JcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKVxuICAgICAgLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgdGhpcy5fb2Zmc2V0cy5wdXNoKGl0ZW1bMF0pXG4gICAgICAgIHRoaXMuX3RhcmdldHMucHVzaChpdGVtWzFdKVxuICAgICAgfSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgICQodGhpcy5fc2Nyb2xsRWxlbWVudCkub2ZmKEVWRU5UX0tFWSlcblxuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgPSBudWxsXG4gICAgdGhpcy5fc2Nyb2xsRWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9jb25maWcgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX3NlbGVjdG9yICAgICAgPSBudWxsXG4gICAgdGhpcy5fb2Zmc2V0cyAgICAgICA9IG51bGxcbiAgICB0aGlzLl90YXJnZXRzICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCAgPSBudWxsXG4gICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ICA9IG51bGxcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi50eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnRhcmdldCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGxldCBpZCA9ICQoY29uZmlnLnRhcmdldCkuYXR0cignaWQnKVxuICAgICAgaWYgKCFpZCkge1xuICAgICAgICBpZCA9IFV0aWwuZ2V0VUlEKE5BTUUpXG4gICAgICAgICQoY29uZmlnLnRhcmdldCkuYXR0cignaWQnLCBpZClcbiAgICAgIH1cbiAgICAgIGNvbmZpZy50YXJnZXQgPSBgIyR7aWR9YFxuICAgIH1cblxuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0U2Nyb2xsVG9wKCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB3aW5kb3dcbiAgICAgID8gdGhpcy5fc2Nyb2xsRWxlbWVudC5wYWdlWU9mZnNldCA6IHRoaXMuX3Njcm9sbEVsZW1lbnQuc2Nyb2xsVG9wXG4gIH1cblxuICBfZ2V0U2Nyb2xsSGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50LnNjcm9sbEhlaWdodCB8fCBNYXRoLm1heChcbiAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodFxuICAgIClcbiAgfVxuXG4gIF9nZXRPZmZzZXRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHdpbmRvd1xuICAgICAgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiB0aGlzLl9zY3JvbGxFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICB9XG5cbiAgX3Byb2Nlc3MoKSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wICAgID0gdGhpcy5fZ2V0U2Nyb2xsVG9wKCkgKyB0aGlzLl9jb25maWcub2Zmc2V0XG4gICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5fZ2V0U2Nyb2xsSGVpZ2h0KClcbiAgICBjb25zdCBtYXhTY3JvbGwgICAgPSB0aGlzLl9jb25maWcub2Zmc2V0ICtcbiAgICAgIHNjcm9sbEhlaWdodCAtXG4gICAgICB0aGlzLl9nZXRPZmZzZXRIZWlnaHQoKVxuXG4gICAgaWYgKHRoaXMuX3Njcm9sbEhlaWdodCAhPT0gc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICB0aGlzLnJlZnJlc2goKVxuICAgIH1cblxuICAgIGlmIChzY3JvbGxUb3AgPj0gbWF4U2Nyb2xsKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLl90YXJnZXRzW3RoaXMuX3RhcmdldHMubGVuZ3RoIC0gMV1cblxuICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuX2FjdGl2YXRlKHRhcmdldClcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXQgJiYgc2Nyb2xsVG9wIDwgdGhpcy5fb2Zmc2V0c1swXSAmJiB0aGlzLl9vZmZzZXRzWzBdID4gMCkge1xuICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbFxuICAgICAgdGhpcy5fY2xlYXIoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgb2Zmc2V0TGVuZ3RoID0gdGhpcy5fb2Zmc2V0cy5sZW5ndGhcbiAgICBmb3IgKGxldCBpID0gb2Zmc2V0TGVuZ3RoOyBpLS07KSB7XG4gICAgICBjb25zdCBpc0FjdGl2ZVRhcmdldCA9IHRoaXMuX2FjdGl2ZVRhcmdldCAhPT0gdGhpcy5fdGFyZ2V0c1tpXSAmJlxuICAgICAgICAgIHNjcm9sbFRvcCA+PSB0aGlzLl9vZmZzZXRzW2ldICYmXG4gICAgICAgICAgKHR5cGVvZiB0aGlzLl9vZmZzZXRzW2kgKyAxXSA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgICAgICAgc2Nyb2xsVG9wIDwgdGhpcy5fb2Zmc2V0c1tpICsgMV0pXG5cbiAgICAgIGlmIChpc0FjdGl2ZVRhcmdldCkge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0aGlzLl90YXJnZXRzW2ldKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9hY3RpdmF0ZSh0YXJnZXQpIHtcbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSB0YXJnZXRcblxuICAgIHRoaXMuX2NsZWFyKClcblxuICAgIGNvbnN0IHF1ZXJpZXMgPSB0aGlzLl9zZWxlY3RvclxuICAgICAgLnNwbGl0KCcsJylcbiAgICAgIC5tYXAoKHNlbGVjdG9yKSA9PiBgJHtzZWxlY3Rvcn1bZGF0YS10YXJnZXQ9XCIke3RhcmdldH1cIl0sJHtzZWxlY3Rvcn1baHJlZj1cIiR7dGFyZ2V0fVwiXWApXG5cbiAgICBjb25zdCAkbGluayA9ICQoW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJpZXMuam9pbignLCcpKSkpXG5cbiAgICBpZiAoJGxpbmsuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRST1BET1dOX0lURU0pKSB7XG4gICAgICAkbGluay5jbG9zZXN0KFNlbGVjdG9yLkRST1BET1dOKS5maW5kKFNlbGVjdG9yLkRST1BET1dOX1RPR0dMRSkuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgICRsaW5rLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNldCB0cmlnZ2VyZWQgbGluayBhcyBhY3RpdmVcbiAgICAgICRsaW5rLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICAvLyBTZXQgdHJpZ2dlcmVkIGxpbmtzIHBhcmVudHMgYXMgYWN0aXZlXG4gICAgICAvLyBXaXRoIGJvdGggPHVsPiBhbmQgPG5hdj4gbWFya3VwIGEgcGFyZW50IGlzIHRoZSBwcmV2aW91cyBzaWJsaW5nIG9mIGFueSBuYXYgYW5jZXN0b3JcbiAgICAgICRsaW5rLnBhcmVudHMoU2VsZWN0b3IuTkFWX0xJU1RfR1JPVVApLnByZXYoYCR7U2VsZWN0b3IuTkFWX0xJTktTfSwgJHtTZWxlY3Rvci5MSVNUX0lURU1TfWApLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICAvLyBIYW5kbGUgc3BlY2lhbCBjYXNlIHdoZW4gLm5hdi1saW5rIGlzIGluc2lkZSAubmF2LWl0ZW1cbiAgICAgICRsaW5rLnBhcmVudHMoU2VsZWN0b3IuTkFWX0xJU1RfR1JPVVApLnByZXYoU2VsZWN0b3IuTkFWX0lURU1TKS5jaGlsZHJlbihTZWxlY3Rvci5OQVZfTElOS1MpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgfVxuXG4gICAgJCh0aGlzLl9zY3JvbGxFbGVtZW50KS50cmlnZ2VyKEV2ZW50LkFDVElWQVRFLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0YXJnZXRcbiAgICB9KVxuICB9XG5cbiAgX2NsZWFyKCkge1xuICAgIFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9zZWxlY3RvcikpXG4gICAgICAuZmlsdGVyKChub2RlKSA9PiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuQUNUSVZFKSlcbiAgICAgIC5mb3JFYWNoKChub2RlKSA9PiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoQ2xhc3NOYW1lLkFDVElWRSkpXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZ1xuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBTY3JvbGxTcHkodGhpcywgX2NvbmZpZylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQod2luZG93KS5vbihFdmVudC5MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGNvbnN0IHNjcm9sbFNweXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuREFUQV9TUFkpKVxuICBjb25zdCBzY3JvbGxTcHlzTGVuZ3RoID0gc2Nyb2xsU3B5cy5sZW5ndGhcblxuICBmb3IgKGxldCBpID0gc2Nyb2xsU3B5c0xlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0ICRzcHkgPSAkKHNjcm9sbFNweXNbaV0pXG4gICAgU2Nyb2xsU3B5Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkc3B5LCAkc3B5LmRhdGEoKSlcbiAgfVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IFNjcm9sbFNweS5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gU2Nyb2xsU3B5XG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIFNjcm9sbFNweS5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFNweVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4zLjEpOiB0YWIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ3RhYidcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICA9ICc0LjMuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICA9ICdicy50YWInXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZICAgICAgID0gJy5kYXRhLWFwaSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuY29uc3QgRXZlbnQgPSB7XG4gIEhJREUgICAgICAgICAgIDogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU4gICAgICAgICA6IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICBTSE9XICAgICAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV04gICAgICAgICAgOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBDTElDS19EQVRBX0FQSSA6IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbn1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBEUk9QRE9XTl9NRU5VIDogJ2Ryb3Bkb3duLW1lbnUnLFxuICBBQ1RJVkUgICAgICAgIDogJ2FjdGl2ZScsXG4gIERJU0FCTEVEICAgICAgOiAnZGlzYWJsZWQnLFxuICBGQURFICAgICAgICAgIDogJ2ZhZGUnLFxuICBTSE9XICAgICAgICAgIDogJ3Nob3cnXG59XG5cbmNvbnN0IFNlbGVjdG9yID0ge1xuICBEUk9QRE9XTiAgICAgICAgICAgICAgOiAnLmRyb3Bkb3duJyxcbiAgTkFWX0xJU1RfR1JPVVAgICAgICAgIDogJy5uYXYsIC5saXN0LWdyb3VwJyxcbiAgQUNUSVZFICAgICAgICAgICAgICAgIDogJy5hY3RpdmUnLFxuICBBQ1RJVkVfVUwgICAgICAgICAgICAgOiAnPiBsaSA+IC5hY3RpdmUnLFxuICBEQVRBX1RPR0dMRSAgICAgICAgICAgOiAnW2RhdGEtdG9nZ2xlPVwidGFiXCJdLCBbZGF0YS10b2dnbGU9XCJwaWxsXCJdLCBbZGF0YS10b2dnbGU9XCJsaXN0XCJdJyxcbiAgRFJPUERPV05fVE9HR0xFICAgICAgIDogJy5kcm9wZG93bi10b2dnbGUnLFxuICBEUk9QRE9XTl9BQ1RJVkVfQ0hJTEQgOiAnPiAuZHJvcGRvd24tbWVudSAuYWN0aXZlJ1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgVGFiIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgJiZcbiAgICAgICAgdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSAmJlxuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5BQ1RJVkUpIHx8XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRJU0FCTEVEKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHRhcmdldFxuICAgIGxldCBwcmV2aW91c1xuICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gJCh0aGlzLl9lbGVtZW50KS5jbG9zZXN0KFNlbGVjdG9yLk5BVl9MSVNUX0dST1VQKVswXVxuICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICBpZiAobGlzdEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGl0ZW1TZWxlY3RvciA9IGxpc3RFbGVtZW50Lm5vZGVOYW1lID09PSAnVUwnIHx8IGxpc3RFbGVtZW50Lm5vZGVOYW1lID09PSAnT0wnID8gU2VsZWN0b3IuQUNUSVZFX1VMIDogU2VsZWN0b3IuQUNUSVZFXG4gICAgICBwcmV2aW91cyA9ICQubWFrZUFycmF5KCQobGlzdEVsZW1lbnQpLmZpbmQoaXRlbVNlbGVjdG9yKSlcbiAgICAgIHByZXZpb3VzID0gcHJldmlvdXNbcHJldmlvdXMubGVuZ3RoIC0gMV1cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJREUsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9KVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2aW91c1xuICAgIH0pXG5cbiAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgICQocHJldmlvdXMpLnRyaWdnZXIoaGlkZUV2ZW50KVxuICAgIH1cblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8XG4gICAgICAgIGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2YXRlKFxuICAgICAgdGhpcy5fZWxlbWVudCxcbiAgICAgIGxpc3RFbGVtZW50XG4gICAgKVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoaWRkZW5FdmVudCA9ICQuRXZlbnQoRXZlbnQuSElEREVOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IHNob3duRXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1dOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZpb3VzXG4gICAgICB9KVxuXG4gICAgICAkKHByZXZpb3VzKS50cmlnZ2VyKGhpZGRlbkV2ZW50KVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3duRXZlbnQpXG4gICAgfVxuXG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgdGhpcy5fYWN0aXZhdGUodGFyZ2V0LCB0YXJnZXQucGFyZW50Tm9kZSwgY29tcGxldGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9hY3RpdmF0ZShlbGVtZW50LCBjb250YWluZXIsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYWN0aXZlRWxlbWVudHMgPSBjb250YWluZXIgJiYgKGNvbnRhaW5lci5ub2RlTmFtZSA9PT0gJ1VMJyB8fCBjb250YWluZXIubm9kZU5hbWUgPT09ICdPTCcpXG4gICAgICA/ICQoY29udGFpbmVyKS5maW5kKFNlbGVjdG9yLkFDVElWRV9VTClcbiAgICAgIDogJChjb250YWluZXIpLmNoaWxkcmVuKFNlbGVjdG9yLkFDVElWRSlcblxuICAgIGNvbnN0IGFjdGl2ZSA9IGFjdGl2ZUVsZW1lbnRzWzBdXG4gICAgY29uc3QgaXNUcmFuc2l0aW9uaW5nID0gY2FsbGJhY2sgJiYgKGFjdGl2ZSAmJiAkKGFjdGl2ZSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKVxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4gdGhpcy5fdHJhbnNpdGlvbkNvbXBsZXRlKFxuICAgICAgZWxlbWVudCxcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGNhbGxiYWNrXG4gICAgKVxuXG4gICAgaWYgKGFjdGl2ZSAmJiBpc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoYWN0aXZlKVxuXG4gICAgICAkKGFjdGl2ZSlcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgX3RyYW5zaXRpb25Db21wbGV0ZShlbGVtZW50LCBhY3RpdmUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgJChhY3RpdmUpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG5cbiAgICAgIGNvbnN0IGRyb3Bkb3duQ2hpbGQgPSAkKGFjdGl2ZS5wYXJlbnROb2RlKS5maW5kKFxuICAgICAgICBTZWxlY3Rvci5EUk9QRE9XTl9BQ1RJVkVfQ0hJTERcbiAgICAgIClbMF1cblxuICAgICAgaWYgKGRyb3Bkb3duQ2hpbGQpIHtcbiAgICAgICAgJChkcm9wZG93bkNoaWxkKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlLmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAndGFiJykge1xuICAgICAgICBhY3RpdmUuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuXG4gICAgJChlbGVtZW50KS5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAndGFiJykge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKVxuICAgIH1cblxuICAgIFV0aWwucmVmbG93KGVsZW1lbnQpXG5cbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lLlNIT1cpXG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiAkKGVsZW1lbnQucGFyZW50Tm9kZSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRST1BET1dOX01FTlUpKSB7XG4gICAgICBjb25zdCBkcm9wZG93bkVsZW1lbnQgPSAkKGVsZW1lbnQpLmNsb3Nlc3QoU2VsZWN0b3IuRFJPUERPV04pWzBdXG5cbiAgICAgIGlmIChkcm9wZG93bkVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZHJvcGRvd25Ub2dnbGVMaXN0ID0gW10uc2xpY2UuY2FsbChkcm9wZG93bkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5EUk9QRE9XTl9UT0dHTEUpKVxuXG4gICAgICAgICQoZHJvcGRvd25Ub2dnbGVMaXN0KS5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgICAgfVxuXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgfVxuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcylcbiAgICAgIGxldCBkYXRhID0gJHRoaXMuZGF0YShEQVRBX0tFWSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgVGFiKHRoaXMpXG4gICAgICAgICR0aGlzLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudClcbiAgLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIFRhYi5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ3Nob3cnKVxuICB9KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gVGFiLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBUYWJcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gVGFiLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFiXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjMuMSk6IHRvYXN0LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICA9ICd0b2FzdCdcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICA9ICc0LjMuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICA9ICdicy50b2FzdCdcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbmNvbnN0IEV2ZW50ID0ge1xuICBDTElDS19ESVNNSVNTIDogYGNsaWNrLmRpc21pc3Mke0VWRU5UX0tFWX1gLFxuICBISURFICAgICAgICAgIDogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU4gICAgICAgIDogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIFNIT1cgICAgICAgICAgOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOICAgICAgICAgOiBgc2hvd24ke0VWRU5UX0tFWX1gXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgRkFERSAgICA6ICdmYWRlJyxcbiAgSElERSAgICA6ICdoaWRlJyxcbiAgU0hPVyAgICA6ICdzaG93JyxcbiAgU0hPV0lORyA6ICdzaG93aW5nJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYW5pbWF0aW9uIDogJ2Jvb2xlYW4nLFxuICBhdXRvaGlkZSAgOiAnYm9vbGVhbicsXG4gIGRlbGF5ICAgICA6ICdudW1iZXInXG59XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGFuaW1hdGlvbiA6IHRydWUsXG4gIGF1dG9oaWRlICA6IHRydWUsXG4gIGRlbGF5ICAgICA6IDUwMFxufVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgREFUQV9ESVNNSVNTIDogJ1tkYXRhLWRpc21pc3M9XCJ0b2FzdFwiXSdcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFRvYXN0IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLl9jb25maWcgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl90aW1lb3V0ID0gbnVsbFxuICAgIHRoaXMuX3NldExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBzaG93KCkge1xuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihFdmVudC5TSE9XKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDbGFzc05hbWUuRkFERSlcbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDbGFzc05hbWUuU0hPV0lORylcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDbGFzc05hbWUuU0hPVylcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKEV2ZW50LlNIT1dOKVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmF1dG9oaWRlKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENsYXNzTmFtZS5ISURFKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDbGFzc05hbWUuU0hPV0lORylcbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICBoaWRlKHdpdGhvdXRUaW1lb3V0KSB7XG4gICAgaWYgKCF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihFdmVudC5ISURFKVxuXG4gICAgaWYgKHdpdGhvdXRUaW1lb3V0KSB7XG4gICAgICB0aGlzLl9jbG9zZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fY2xvc2UoKVxuICAgICAgfSwgdGhpcy5fY29uZmlnLmRlbGF5KVxuICAgIH1cbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXG4gICAgdGhpcy5fdGltZW91dCA9IG51bGxcblxuICAgIGlmICh0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDbGFzc05hbWUuU0hPVylcbiAgICB9XG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFdmVudC5DTElDS19ESVNNSVNTKVxuXG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5fY29uZmlnICA9IG51bGxcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi4kKHRoaXMuX2VsZW1lbnQpLmRhdGEoKSxcbiAgICAgIC4uLnR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9XG4gICAgfVxuXG4gICAgVXRpbC50eXBlQ2hlY2tDb25maWcoXG4gICAgICBOQU1FLFxuICAgICAgY29uZmlnLFxuICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZVxuICAgIClcblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgJCh0aGlzLl9lbGVtZW50KS5vbihcbiAgICAgIEV2ZW50LkNMSUNLX0RJU01JU1MsXG4gICAgICBTZWxlY3Rvci5EQVRBX0RJU01JU1MsXG4gICAgICAoKSA9PiB0aGlzLmhpZGUodHJ1ZSlcbiAgICApXG4gIH1cblxuICBfY2xvc2UoKSB7XG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lLkhJREUpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoRXZlbnQuSElEREVOKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDbGFzc05hbWUuU0hPVylcbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0ICRlbGVtZW50ID0gJCh0aGlzKVxuICAgICAgbGV0IGRhdGEgICAgICAgPSAkZWxlbWVudC5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyAgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWdcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgVG9hc3QodGhpcywgX2NvbmZpZylcbiAgICAgICAgJGVsZW1lbnQuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSAgICAgICAgICAgICA9IFRvYXN0Ll9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBUb2FzdFxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ICA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gVG9hc3QuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2FzdFxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IEFsZXJ0IGZyb20gJy4vYWxlcnQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJ1xuaW1wb3J0IENhcm91c2VsIGZyb20gJy4vY2Fyb3VzZWwnXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnLi9jb2xsYXBzZSdcbmltcG9ydCBEcm9wZG93biBmcm9tICcuL2Ryb3Bkb3duJ1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kYWwnXG5pbXBvcnQgUG9wb3ZlciBmcm9tICcuL3BvcG92ZXInXG5pbXBvcnQgU2Nyb2xsc3B5IGZyb20gJy4vc2Nyb2xsc3B5J1xuaW1wb3J0IFRhYiBmcm9tICcuL3RhYidcbmltcG9ydCBUb2FzdCBmcm9tICcuL3RvYXN0J1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJ1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjMuMSk6IGluZGV4LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4oKCkgPT4ge1xuICBpZiAodHlwZW9mICQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGpRdWVyeS4galF1ZXJ5IG11c3QgYmUgaW5jbHVkZWQgYmVmb3JlIEJvb3RzdHJhcFxcJ3MgSmF2YVNjcmlwdC4nKVxuICB9XG5cbiAgY29uc3QgdmVyc2lvbiA9ICQuZm4uanF1ZXJ5LnNwbGl0KCcgJylbMF0uc3BsaXQoJy4nKVxuICBjb25zdCBtaW5NYWpvciA9IDFcbiAgY29uc3QgbHRNYWpvciA9IDJcbiAgY29uc3QgbWluTWlub3IgPSA5XG4gIGNvbnN0IG1pblBhdGNoID0gMVxuICBjb25zdCBtYXhNYWpvciA9IDRcblxuICBpZiAodmVyc2lvblswXSA8IGx0TWFqb3IgJiYgdmVyc2lvblsxXSA8IG1pbk1pbm9yIHx8IHZlcnNpb25bMF0gPT09IG1pbk1ham9yICYmIHZlcnNpb25bMV0gPT09IG1pbk1pbm9yICYmIHZlcnNpb25bMl0gPCBtaW5QYXRjaCB8fCB2ZXJzaW9uWzBdID49IG1heE1ham9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdCb290c3RyYXBcXCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgYXQgbGVhc3QgalF1ZXJ5IHYxLjkuMSBidXQgbGVzcyB0aGFuIHY0LjAuMCcpXG4gIH1cbn0pKClcblxuZXhwb3J0IHtcbiAgVXRpbCxcbiAgQWxlcnQsXG4gIEJ1dHRvbixcbiAgQ2Fyb3VzZWwsXG4gIENvbGxhcHNlLFxuICBEcm9wZG93bixcbiAgTW9kYWwsXG4gIFBvcG92ZXIsXG4gIFNjcm9sbHNweSxcbiAgVGFiLFxuICBUb2FzdCxcbiAgVG9vbHRpcFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==