(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mask"],{

/***/ "./assets/dist/jQuery-Mask-Plugin-master/dist/jquery.mask.js":
/*!*******************************************************************!*\
  !*** ./assets/dist/jQuery-Mask-Plugin-master/dist/jquery.mask.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * jquery.mask.js
 * @version: v1.14.16
 * @author: Igor Escobar
 *
 * Created by Igor Escobar on 2012-03-10. Please report any bug at github.com/igorescobar/jQuery-Mask-Plugin
 *
 * Copyright (c) 2012 Igor Escobar http://igorescobar.com
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/* jshint laxbreak: true */

/* jshint maxcomplexity:17 */

/* global define */
// UMD (Universal Module Definition) patterns for JavaScript modules that work everywhere.
// https://github.com/umdjs/umd/blob/master/templates/jqueryPlugin.js
(function (factory, jQuery, Zepto) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  'use strict';

  var Mask = function Mask(el, mask, options) {
    var p = {
      invalid: [],
      getCaret: function getCaret() {
        try {
          var sel,
              pos = 0,
              ctrl = el.get(0),
              dSel = document.selection,
              cSelStart = ctrl.selectionStart; // IE Support

          if (dSel && navigator.appVersion.indexOf('MSIE 10') === -1) {
            sel = dSel.createRange();
            sel.moveStart('character', -p.val().length);
            pos = sel.text.length;
          } // Firefox support
          else if (cSelStart || cSelStart === '0') {
              pos = cSelStart;
            }

          return pos;
        } catch (e) {}
      },
      setCaret: function setCaret(pos) {
        try {
          if (el.is(':focus')) {
            var range,
                ctrl = el.get(0); // Firefox, WebKit, etc..

            if (ctrl.setSelectionRange) {
              ctrl.setSelectionRange(pos, pos);
            } else {
              // IE
              range = ctrl.createTextRange();
              range.collapse(true);
              range.moveEnd('character', pos);
              range.moveStart('character', pos);
              range.select();
            }
          }
        } catch (e) {}
      },
      events: function events() {
        el.on('keydown.mask', function (e) {
          el.data('mask-keycode', e.keyCode || e.which);
          el.data('mask-previus-value', el.val());
          el.data('mask-previus-caret-pos', p.getCaret());
          p.maskDigitPosMapOld = p.maskDigitPosMap;
        }).on($.jMaskGlobals.useInput ? 'input.mask' : 'keyup.mask', p.behaviour).on('paste.mask drop.mask', function () {
          setTimeout(function () {
            el.keydown().keyup();
          }, 100);
        }).on('change.mask', function () {
          el.data('changed', true);
        }).on('blur.mask', function () {
          if (oldValue !== p.val() && !el.data('changed')) {
            el.trigger('change');
          }

          el.data('changed', false);
        }) // it's very important that this callback remains in this position
        // otherwhise oldValue it's going to work buggy
        .on('blur.mask', function () {
          oldValue = p.val();
        }) // select all text on focus
        .on('focus.mask', function (e) {
          if (options.selectOnFocus === true) {
            $(e.target).select();
          }
        }) // clear the value if it not complete the mask
        .on('focusout.mask', function () {
          if (options.clearIfNotMatch && !regexMask.test(p.val())) {
            p.val('');
          }
        });
      },
      getRegexMask: function getRegexMask() {
        var maskChunks = [],
            translation,
            pattern,
            optional,
            recursive,
            oRecursive,
            r;

        for (var i = 0; i < mask.length; i++) {
          translation = jMask.translation[mask.charAt(i)];

          if (translation) {
            pattern = translation.pattern.toString().replace(/.{1}$|^.{1}/g, '');
            optional = translation.optional;
            recursive = translation.recursive;

            if (recursive) {
              maskChunks.push(mask.charAt(i));
              oRecursive = {
                digit: mask.charAt(i),
                pattern: pattern
              };
            } else {
              maskChunks.push(!optional && !recursive ? pattern : pattern + '?');
            }
          } else {
            maskChunks.push(mask.charAt(i).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
          }
        }

        r = maskChunks.join('');

        if (oRecursive) {
          r = r.replace(new RegExp('(' + oRecursive.digit + '(.*' + oRecursive.digit + ')?)'), '($1)?').replace(new RegExp(oRecursive.digit, 'g'), oRecursive.pattern);
        }

        return new RegExp(r);
      },
      destroyEvents: function destroyEvents() {
        el.off(['input', 'keydown', 'keyup', 'paste', 'drop', 'blur', 'focusout', ''].join('.mask '));
      },
      val: function val(v) {
        var isInput = el.is('input'),
            method = isInput ? 'val' : 'text',
            r;

        if (arguments.length > 0) {
          if (el[method]() !== v) {
            el[method](v);
          }

          r = el;
        } else {
          r = el[method]();
        }

        return r;
      },
      calculateCaretPosition: function calculateCaretPosition(oldVal) {
        var newVal = p.getMasked(),
            caretPosNew = p.getCaret();

        if (oldVal !== newVal) {
          var caretPosOld = el.data('mask-previus-caret-pos') || 0,
              newValL = newVal.length,
              oldValL = oldVal.length,
              maskDigitsBeforeCaret = 0,
              maskDigitsAfterCaret = 0,
              maskDigitsBeforeCaretAll = 0,
              maskDigitsBeforeCaretAllOld = 0,
              i = 0;

          for (i = caretPosNew; i < newValL; i++) {
            if (!p.maskDigitPosMap[i]) {
              break;
            }

            maskDigitsAfterCaret++;
          }

          for (i = caretPosNew - 1; i >= 0; i--) {
            if (!p.maskDigitPosMap[i]) {
              break;
            }

            maskDigitsBeforeCaret++;
          }

          for (i = caretPosNew - 1; i >= 0; i--) {
            if (p.maskDigitPosMap[i]) {
              maskDigitsBeforeCaretAll++;
            }
          }

          for (i = caretPosOld - 1; i >= 0; i--) {
            if (p.maskDigitPosMapOld[i]) {
              maskDigitsBeforeCaretAllOld++;
            }
          } // if the cursor is at the end keep it there


          if (caretPosNew > oldValL) {
            caretPosNew = newValL * 10;
          } else if (caretPosOld >= caretPosNew && caretPosOld !== oldValL) {
            if (!p.maskDigitPosMapOld[caretPosNew]) {
              var caretPos = caretPosNew;
              caretPosNew -= maskDigitsBeforeCaretAllOld - maskDigitsBeforeCaretAll;
              caretPosNew -= maskDigitsBeforeCaret;

              if (p.maskDigitPosMap[caretPosNew]) {
                caretPosNew = caretPos;
              }
            }
          } else if (caretPosNew > caretPosOld) {
            caretPosNew += maskDigitsBeforeCaretAll - maskDigitsBeforeCaretAllOld;
            caretPosNew += maskDigitsAfterCaret;
          }
        }

        return caretPosNew;
      },
      behaviour: function behaviour(e) {
        e = e || window.event;
        p.invalid = [];
        var keyCode = el.data('mask-keycode');

        if ($.inArray(keyCode, jMask.byPassKeys) === -1) {
          var newVal = p.getMasked(),
              caretPos = p.getCaret(),
              oldVal = el.data('mask-previus-value') || ''; // this is a compensation to devices/browsers that don't compensate
          // caret positioning the right way

          setTimeout(function () {
            p.setCaret(p.calculateCaretPosition(oldVal));
          }, $.jMaskGlobals.keyStrokeCompensation);
          p.val(newVal);
          p.setCaret(caretPos);
          return p.callbacks(e);
        }
      },
      getMasked: function getMasked(skipMaskChars, val) {
        var buf = [],
            value = val === undefined ? p.val() : val + '',
            m = 0,
            maskLen = mask.length,
            v = 0,
            valLen = value.length,
            offset = 1,
            addMethod = 'push',
            resetPos = -1,
            maskDigitCount = 0,
            maskDigitPosArr = [],
            lastMaskChar,
            check;

        if (options.reverse) {
          addMethod = 'unshift';
          offset = -1;
          lastMaskChar = 0;
          m = maskLen - 1;
          v = valLen - 1;

          check = function check() {
            return m > -1 && v > -1;
          };
        } else {
          lastMaskChar = maskLen - 1;

          check = function check() {
            return m < maskLen && v < valLen;
          };
        }

        var lastUntranslatedMaskChar;

        while (check()) {
          var maskDigit = mask.charAt(m),
              valDigit = value.charAt(v),
              translation = jMask.translation[maskDigit];

          if (translation) {
            if (valDigit.match(translation.pattern)) {
              buf[addMethod](valDigit);

              if (translation.recursive) {
                if (resetPos === -1) {
                  resetPos = m;
                } else if (m === lastMaskChar && m !== resetPos) {
                  m = resetPos - offset;
                }

                if (lastMaskChar === resetPos) {
                  m -= offset;
                }
              }

              m += offset;
            } else if (valDigit === lastUntranslatedMaskChar) {
              // matched the last untranslated (raw) mask character that we encountered
              // likely an insert offset the mask character from the last entry; fall
              // through and only increment v
              maskDigitCount--;
              lastUntranslatedMaskChar = undefined;
            } else if (translation.optional) {
              m += offset;
              v -= offset;
            } else if (translation.fallback) {
              buf[addMethod](translation.fallback);
              m += offset;
              v -= offset;
            } else {
              p.invalid.push({
                p: v,
                v: valDigit,
                e: translation.pattern
              });
            }

            v += offset;
          } else {
            if (!skipMaskChars) {
              buf[addMethod](maskDigit);
            }

            if (valDigit === maskDigit) {
              maskDigitPosArr.push(v);
              v += offset;
            } else {
              lastUntranslatedMaskChar = maskDigit;
              maskDigitPosArr.push(v + maskDigitCount);
              maskDigitCount++;
            }

            m += offset;
          }
        }

        var lastMaskCharDigit = mask.charAt(lastMaskChar);

        if (maskLen === valLen + 1 && !jMask.translation[lastMaskCharDigit]) {
          buf.push(lastMaskCharDigit);
        }

        var newVal = buf.join('');
        p.mapMaskdigitPositions(newVal, maskDigitPosArr, valLen);
        return newVal;
      },
      mapMaskdigitPositions: function mapMaskdigitPositions(newVal, maskDigitPosArr, valLen) {
        var maskDiff = options.reverse ? newVal.length - valLen : 0;
        p.maskDigitPosMap = {};

        for (var i = 0; i < maskDigitPosArr.length; i++) {
          p.maskDigitPosMap[maskDigitPosArr[i] + maskDiff] = 1;
        }
      },
      callbacks: function callbacks(e) {
        var val = p.val(),
            changed = val !== oldValue,
            defaultArgs = [val, e, el, options],
            callback = function callback(name, criteria, args) {
          if (typeof options[name] === 'function' && criteria) {
            options[name].apply(this, args);
          }
        };

        callback('onChange', changed === true, defaultArgs);
        callback('onKeyPress', changed === true, defaultArgs);
        callback('onComplete', val.length === mask.length, defaultArgs);
        callback('onInvalid', p.invalid.length > 0, [val, e, el, p.invalid, options]);
      }
    };
    el = $(el);
    var jMask = this,
        oldValue = p.val(),
        regexMask;
    mask = typeof mask === 'function' ? mask(p.val(), undefined, el, options) : mask; // public methods

    jMask.mask = mask;
    jMask.options = options;

    jMask.remove = function () {
      var caret = p.getCaret();

      if (jMask.options.placeholder) {
        el.removeAttr('placeholder');
      }

      if (el.data('mask-maxlength')) {
        el.removeAttr('maxlength');
      }

      p.destroyEvents();
      p.val(jMask.getCleanVal());
      p.setCaret(caret);
      return el;
    }; // get value without mask


    jMask.getCleanVal = function () {
      return p.getMasked(true);
    }; // get masked value without the value being in the input or element


    jMask.getMaskedVal = function (val) {
      return p.getMasked(false, val);
    };

    jMask.init = function (onlyMask) {
      onlyMask = onlyMask || false;
      options = options || {};
      jMask.clearIfNotMatch = $.jMaskGlobals.clearIfNotMatch;
      jMask.byPassKeys = $.jMaskGlobals.byPassKeys;
      jMask.translation = $.extend({}, $.jMaskGlobals.translation, options.translation);
      jMask = $.extend(true, {}, jMask, options);
      regexMask = p.getRegexMask();

      if (onlyMask) {
        p.events();
        p.val(p.getMasked());
      } else {
        if (options.placeholder) {
          el.attr('placeholder', options.placeholder);
        } // this is necessary, otherwise if the user submit the form
        // and then press the "back" button, the autocomplete will erase
        // the data. Works fine on IE9+, FF, Opera, Safari.


        if (el.data('mask')) {
          el.attr('autocomplete', 'off');
        } // detect if is necessary let the user type freely.
        // for is a lot faster than forEach.


        for (var i = 0, maxlength = true; i < mask.length; i++) {
          var translation = jMask.translation[mask.charAt(i)];

          if (translation && translation.recursive) {
            maxlength = false;
            break;
          }
        }

        if (maxlength) {
          el.attr('maxlength', mask.length).data('mask-maxlength', true);
        }

        p.destroyEvents();
        p.events();
        var caret = p.getCaret();
        p.val(p.getMasked());
        p.setCaret(caret);
      }
    };

    jMask.init(!el.is('input'));
  };

  $.maskWatchers = {};

  var HTMLAttributes = function HTMLAttributes() {
    var input = $(this),
        options = {},
        prefix = 'data-mask-',
        mask = input.attr('data-mask');

    if (input.attr(prefix + 'reverse')) {
      options.reverse = true;
    }

    if (input.attr(prefix + 'clearifnotmatch')) {
      options.clearIfNotMatch = true;
    }

    if (input.attr(prefix + 'selectonfocus') === 'true') {
      options.selectOnFocus = true;
    }

    if (notSameMaskObject(input, mask, options)) {
      return input.data('mask', new Mask(this, mask, options));
    }
  },
      notSameMaskObject = function notSameMaskObject(field, mask, options) {
    options = options || {};
    var maskObject = $(field).data('mask'),
        stringify = JSON.stringify,
        value = $(field).val() || $(field).text();

    try {
      if (typeof mask === 'function') {
        mask = mask(value);
      }

      return _typeof(maskObject) !== 'object' || stringify(maskObject.options) !== stringify(options) || maskObject.mask !== mask;
    } catch (e) {}
  },
      eventSupported = function eventSupported(eventName) {
    var el = document.createElement('div'),
        isSupported;
    eventName = 'on' + eventName;
    isSupported = eventName in el;

    if (!isSupported) {
      el.setAttribute(eventName, 'return;');
      isSupported = typeof el[eventName] === 'function';
    }

    el = null;
    return isSupported;
  };

  $.fn.mask = function (mask, options) {
    options = options || {};

    var selector = this.selector,
        globals = $.jMaskGlobals,
        interval = globals.watchInterval,
        watchInputs = options.watchInputs || globals.watchInputs,
        maskFunction = function maskFunction() {
      if (notSameMaskObject(this, mask, options)) {
        return $(this).data('mask', new Mask(this, mask, options));
      }
    };

    $(this).each(maskFunction);

    if (selector && selector !== '' && watchInputs) {
      clearInterval($.maskWatchers[selector]);
      $.maskWatchers[selector] = setInterval(function () {
        $(document).find(selector).each(maskFunction);
      }, interval);
    }

    return this;
  };

  $.fn.masked = function (val) {
    return this.data('mask').getMaskedVal(val);
  };

  $.fn.unmask = function () {
    clearInterval($.maskWatchers[this.selector]);
    delete $.maskWatchers[this.selector];
    return this.each(function () {
      var dataMask = $(this).data('mask');

      if (dataMask) {
        dataMask.remove().removeData('mask');
      }
    });
  };

  $.fn.cleanVal = function () {
    return this.data('mask').getCleanVal();
  };

  $.applyDataMask = function (selector) {
    selector = selector || $.jMaskGlobals.maskElements;
    var $selector = selector instanceof $ ? selector : $(selector);
    $selector.filter($.jMaskGlobals.dataMaskAttr).each(HTMLAttributes);
  };

  var globals = {
    maskElements: 'input,td,span,div',
    dataMaskAttr: '*[data-mask]',
    dataMask: true,
    watchInterval: 300,
    watchInputs: true,
    keyStrokeCompensation: 10,
    // old versions of chrome dont work great with input event
    useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && eventSupported('input'),
    watchDataMask: false,
    byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
    translation: {
      '0': {
        pattern: /\d/
      },
      '9': {
        pattern: /\d/,
        optional: true
      },
      '#': {
        pattern: /\d/,
        recursive: true
      },
      'A': {
        pattern: /[a-zA-Z0-9]/
      },
      'S': {
        pattern: /[a-zA-Z]/
      }
    }
  };
  $.jMaskGlobals = $.jMaskGlobals || {};
  globals = $.jMaskGlobals = $.extend(true, {}, globals, $.jMaskGlobals); // looking for inputs with data-mask attribute

  if (globals.dataMask) {
    $.applyDataMask();
  }

  setInterval(function () {
    if ($.jMaskGlobals.watchDataMask) {
      $.applyDataMask();
    }
  }, globals.watchInterval);
}, window.jQuery, window.Zepto);

/***/ })

},[["./assets/dist/jQuery-Mask-Plugin-master/dist/jquery.mask.js","runtime","vendors~app~home~mask~vehicles","vendors~app~mask"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvZGlzdC9qUXVlcnktTWFzay1QbHVnaW4tbWFzdGVyL2Rpc3QvanF1ZXJ5Lm1hc2suanMiXSwibmFtZXMiOlsiZmFjdG9yeSIsImpRdWVyeSIsIlplcHRvIiwiZGVmaW5lIiwiJCIsIk1hc2siLCJlbCIsIm1hc2siLCJvcHRpb25zIiwicCIsImludmFsaWQiLCJnZXRDYXJldCIsInNlbCIsInBvcyIsImN0cmwiLCJnZXQiLCJkU2VsIiwiZG9jdW1lbnQiLCJzZWxlY3Rpb24iLCJjU2VsU3RhcnQiLCJzZWxlY3Rpb25TdGFydCIsIm5hdmlnYXRvciIsImFwcFZlcnNpb24iLCJpbmRleE9mIiwiY3JlYXRlUmFuZ2UiLCJtb3ZlU3RhcnQiLCJ2YWwiLCJsZW5ndGgiLCJ0ZXh0IiwiZSIsInNldENhcmV0IiwiaXMiLCJyYW5nZSIsInNldFNlbGVjdGlvblJhbmdlIiwiY3JlYXRlVGV4dFJhbmdlIiwiY29sbGFwc2UiLCJtb3ZlRW5kIiwic2VsZWN0IiwiZXZlbnRzIiwib24iLCJkYXRhIiwia2V5Q29kZSIsIndoaWNoIiwibWFza0RpZ2l0UG9zTWFwT2xkIiwibWFza0RpZ2l0UG9zTWFwIiwiak1hc2tHbG9iYWxzIiwidXNlSW5wdXQiLCJiZWhhdmlvdXIiLCJzZXRUaW1lb3V0Iiwia2V5ZG93biIsImtleXVwIiwib2xkVmFsdWUiLCJ0cmlnZ2VyIiwic2VsZWN0T25Gb2N1cyIsInRhcmdldCIsImNsZWFySWZOb3RNYXRjaCIsInJlZ2V4TWFzayIsInRlc3QiLCJnZXRSZWdleE1hc2siLCJtYXNrQ2h1bmtzIiwidHJhbnNsYXRpb24iLCJwYXR0ZXJuIiwib3B0aW9uYWwiLCJyZWN1cnNpdmUiLCJvUmVjdXJzaXZlIiwiciIsImkiLCJqTWFzayIsImNoYXJBdCIsInRvU3RyaW5nIiwicmVwbGFjZSIsInB1c2giLCJkaWdpdCIsImpvaW4iLCJSZWdFeHAiLCJkZXN0cm95RXZlbnRzIiwib2ZmIiwidiIsImlzSW5wdXQiLCJtZXRob2QiLCJhcmd1bWVudHMiLCJjYWxjdWxhdGVDYXJldFBvc2l0aW9uIiwib2xkVmFsIiwibmV3VmFsIiwiZ2V0TWFza2VkIiwiY2FyZXRQb3NOZXciLCJjYXJldFBvc09sZCIsIm5ld1ZhbEwiLCJvbGRWYWxMIiwibWFza0RpZ2l0c0JlZm9yZUNhcmV0IiwibWFza0RpZ2l0c0FmdGVyQ2FyZXQiLCJtYXNrRGlnaXRzQmVmb3JlQ2FyZXRBbGwiLCJtYXNrRGlnaXRzQmVmb3JlQ2FyZXRBbGxPbGQiLCJjYXJldFBvcyIsIndpbmRvdyIsImV2ZW50IiwiaW5BcnJheSIsImJ5UGFzc0tleXMiLCJrZXlTdHJva2VDb21wZW5zYXRpb24iLCJjYWxsYmFja3MiLCJza2lwTWFza0NoYXJzIiwiYnVmIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJtIiwibWFza0xlbiIsInZhbExlbiIsIm9mZnNldCIsImFkZE1ldGhvZCIsInJlc2V0UG9zIiwibWFza0RpZ2l0Q291bnQiLCJtYXNrRGlnaXRQb3NBcnIiLCJsYXN0TWFza0NoYXIiLCJjaGVjayIsInJldmVyc2UiLCJsYXN0VW50cmFuc2xhdGVkTWFza0NoYXIiLCJtYXNrRGlnaXQiLCJ2YWxEaWdpdCIsIm1hdGNoIiwiZmFsbGJhY2siLCJsYXN0TWFza0NoYXJEaWdpdCIsIm1hcE1hc2tkaWdpdFBvc2l0aW9ucyIsIm1hc2tEaWZmIiwiY2hhbmdlZCIsImRlZmF1bHRBcmdzIiwiY2FsbGJhY2siLCJuYW1lIiwiY3JpdGVyaWEiLCJhcmdzIiwiYXBwbHkiLCJyZW1vdmUiLCJjYXJldCIsInBsYWNlaG9sZGVyIiwicmVtb3ZlQXR0ciIsImdldENsZWFuVmFsIiwiZ2V0TWFza2VkVmFsIiwiaW5pdCIsIm9ubHlNYXNrIiwiZXh0ZW5kIiwiYXR0ciIsIm1heGxlbmd0aCIsIm1hc2tXYXRjaGVycyIsIkhUTUxBdHRyaWJ1dGVzIiwiaW5wdXQiLCJwcmVmaXgiLCJub3RTYW1lTWFza09iamVjdCIsImZpZWxkIiwibWFza09iamVjdCIsInN0cmluZ2lmeSIsIkpTT04iLCJldmVudFN1cHBvcnRlZCIsImV2ZW50TmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJpc1N1cHBvcnRlZCIsInNldEF0dHJpYnV0ZSIsImZuIiwic2VsZWN0b3IiLCJnbG9iYWxzIiwiaW50ZXJ2YWwiLCJ3YXRjaEludGVydmFsIiwid2F0Y2hJbnB1dHMiLCJtYXNrRnVuY3Rpb24iLCJlYWNoIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwiZmluZCIsIm1hc2tlZCIsInVubWFzayIsImRhdGFNYXNrIiwicmVtb3ZlRGF0YSIsImNsZWFuVmFsIiwiYXBwbHlEYXRhTWFzayIsIm1hc2tFbGVtZW50cyIsIiRzZWxlY3RvciIsImZpbHRlciIsImRhdGFNYXNrQXR0ciIsInVzZXJBZ2VudCIsIndhdGNoRGF0YU1hc2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTs7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQyxXQUFVQSxPQUFWLEVBQW1CQyxNQUFuQixFQUEyQkMsS0FBM0IsRUFBa0M7QUFFL0IsTUFBSSxJQUFKLEVBQWdEO0FBQzVDQyxxQ0FBTyxDQUFDLHlFQUFELENBQUQsb0NBQWFILE9BQWI7QUFBQTtBQUFBO0FBQUEsb0dBQU47QUFDSCxHQUZELE1BRU8sRUFJTjtBQUVKLENBVkEsRUFVQyxVQUFVSSxDQUFWLEVBQWE7QUFDWDs7QUFFQSxNQUFJQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFVQyxFQUFWLEVBQWNDLElBQWQsRUFBb0JDLE9BQXBCLEVBQTZCO0FBRXBDLFFBQUlDLENBQUMsR0FBRztBQUNKQyxhQUFPLEVBQUUsRUFETDtBQUVKQyxjQUFRLEVBQUUsb0JBQVk7QUFDbEIsWUFBSTtBQUNBLGNBQUlDLEdBQUo7QUFBQSxjQUNJQyxHQUFHLEdBQUcsQ0FEVjtBQUFBLGNBRUlDLElBQUksR0FBR1IsRUFBRSxDQUFDUyxHQUFILENBQU8sQ0FBUCxDQUZY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LEVBQVosRUFBZ0IsRUFBaEIsRUFBb0IsRUFBcEIsRUFBd0IsRUFBeEIsRUFBNEIsRUFBNUIsRUFBZ0MsRUFBaEMsRUFBb0MsRUFBcEMsQ0FWRjtBQVdWckMsZUFBVyxFQUFFO0FBQ1QsV0FBSztBQUFDQyxlQUFPLEVBQUU7QUFBVixPQURJO0FBRVQsV0FBSztBQUFDQSxlQUFPLEVBQUUsSUFBVjtBQUFnQkMsZ0JBQVEsRUFBRTtBQUExQixPQUZJO0FBR1QsV0FBSztBQUFDRCxlQUFPLEVBQUUsSUFBVjtBQUFnQkUsaUJBQVMsRUFBRTtBQUEzQixPQUhJO0FBSVQsV0FBSztBQUFDRixlQUFPLEVBQUU7QUFBVixPQUpJO0FBS1QsV0FBSztBQUFDQSxlQUFPLEVBQUU7QUFBVjtBQUxJO0FBWEgsR0FBZDtBQW9CQXpELEdBQUMsQ0FBQ3lDLFlBQUYsR0FBaUJ6QyxDQUFDLENBQUN5QyxZQUFGLElBQWtCLEVBQW5DO0FBQ0FnSCxTQUFPLEdBQUd6SixDQUFDLENBQUN5QyxZQUFGLEdBQWlCekMsQ0FBQyxDQUFDc0ksTUFBRixDQUFTLElBQVQsRUFBZSxFQUFmLEVBQW1CbUIsT0FBbkIsRUFBNEJ6SixDQUFDLENBQUN5QyxZQUE5QixDQUEzQixDQTloQlcsQ0FnaUJYOztBQUNBLE1BQUlnSCxPQUFPLENBQUNXLFFBQVosRUFBc0I7QUFDbEJwSyxLQUFDLENBQUN1SyxhQUFGO0FBQ0g7O0FBRURQLGFBQVcsQ0FBQyxZQUFXO0FBQ25CLFFBQUloSyxDQUFDLENBQUN5QyxZQUFGLENBQWVvSSxhQUFuQixFQUFrQztBQUM5QjdLLE9BQUMsQ0FBQ3VLLGFBQUY7QUFDSDtBQUNKLEdBSlUsRUFJUmQsT0FBTyxDQUFDRSxhQUpBLENBQVg7QUFLSCxDQXBqQkEsRUFvakJFakUsTUFBTSxDQUFDN0YsTUFwakJULEVBb2pCaUI2RixNQUFNLENBQUM1RixLQXBqQnhCLENBQUQsQyIsImZpbGUiOiJtYXNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBqcXVlcnkubWFzay5qc1xuICogQHZlcnNpb246IHYxLjE0LjE2XG4gKiBAYXV0aG9yOiBJZ29yIEVzY29iYXJcbiAqXG4gKiBDcmVhdGVkIGJ5IElnb3IgRXNjb2JhciBvbiAyMDEyLTAzLTEwLiBQbGVhc2UgcmVwb3J0IGFueSBidWcgYXQgZ2l0aHViLmNvbS9pZ29yZXNjb2Jhci9qUXVlcnktTWFzay1QbHVnaW5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgSWdvciBFc2NvYmFyIGh0dHA6Ly9pZ29yZXNjb2Jhci5jb21cbiAqXG4gKiBUaGUgTUlUIExpY2Vuc2UgKGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwKVxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0XG4gKiByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcbiAqIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nXG4gKiBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gKiBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTXG4gKiBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFRcbiAqIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLFxuICogV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SXG4gKiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoganNoaW50IGxheGJyZWFrOiB0cnVlICovXG4vKiBqc2hpbnQgbWF4Y29tcGxleGl0eToxNyAqL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4vLyBVTUQgKFVuaXZlcnNhbCBNb2R1bGUgRGVmaW5pdGlvbikgcGF0dGVybnMgZm9yIEphdmFTY3JpcHQgbW9kdWxlcyB0aGF0IHdvcmsgZXZlcnl3aGVyZS5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS91bWRqcy91bWQvYmxvYi9tYXN0ZXIvdGVtcGxhdGVzL2pxdWVyeVBsdWdpbi5qc1xuKGZ1bmN0aW9uIChmYWN0b3J5LCBqUXVlcnksIFplcHRvKSB7XG5cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgTWV0ZW9yID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5IHx8IFplcHRvKTtcbiAgICB9XG5cbn0oZnVuY3Rpb24gKCQpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgTWFzayA9IGZ1bmN0aW9uIChlbCwgbWFzaywgb3B0aW9ucykge1xuXG4gICAgICAgIHZhciBwID0ge1xuICAgICAgICAgICAgaW52YWxpZDogW10sXG4gICAgICAgICAgICBnZXRDYXJldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3RybCA9IGVsLmdldCgwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRTZWwgPSBkb2N1bWVudC5zZWxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBjU2VsU3RhcnQgPSBjdHJsLnNlbGVjdGlvblN0YXJ0O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElFIFN1cHBvcnRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRTZWwgJiYgbmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZignTVNJRSAxMCcpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsID0gZFNlbC5jcmVhdGVSYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsLm1vdmVTdGFydCgnY2hhcmFjdGVyJywgLXAudmFsKCkubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA9IHNlbC50ZXh0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBGaXJlZm94IHN1cHBvcnRcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY1NlbFN0YXJ0IHx8IGNTZWxTdGFydCA9PT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSBjU2VsU3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0Q2FyZXQ6IGZ1bmN0aW9uKHBvcykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbC5pcygnOmZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByYW5nZSwgY3RybCA9IGVsLmdldCgwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlyZWZveCwgV2ViS2l0LCBldGMuLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN0cmwuc2V0U2VsZWN0aW9uUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHJsLnNldFNlbGVjdGlvblJhbmdlKHBvcywgcG9zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIElFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2UgPSBjdHJsLmNyZWF0ZVRleHRSYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLmNvbGxhcHNlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLm1vdmVFbmQoJ2NoYXJhY3RlcicsIHBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2UubW92ZVN0YXJ0KCdjaGFyYWN0ZXInLCBwb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLnNlbGVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBldmVudHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGVsXG4gICAgICAgICAgICAgICAgLm9uKCdrZXlkb3duLm1hc2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLmRhdGEoJ21hc2sta2V5Y29kZScsIGUua2V5Q29kZSB8fCBlLndoaWNoKTtcbiAgICAgICAgICAgICAgICAgICAgZWwuZGF0YSgnbWFzay1wcmV2aXVzLXZhbHVlJywgZWwudmFsKCkpO1xuICAgICAgICAgICAgICAgICAgICBlbC5kYXRhKCdtYXNrLXByZXZpdXMtY2FyZXQtcG9zJywgcC5nZXRDYXJldCgpKTtcbiAgICAgICAgICAgICAgICAgICAgcC5tYXNrRGlnaXRQb3NNYXBPbGQgPSBwLm1hc2tEaWdpdFBvc01hcDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vbigkLmpNYXNrR2xvYmFscy51c2VJbnB1dCA/ICdpbnB1dC5tYXNrJyA6ICdrZXl1cC5tYXNrJywgcC5iZWhhdmlvdXIpXG4gICAgICAgICAgICAgICAgLm9uKCdwYXN0ZS5tYXNrIGRyb3AubWFzaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwua2V5ZG93bigpLmtleXVwKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oJ2NoYW5nZS5tYXNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgZWwuZGF0YSgnY2hhbmdlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9uKCdibHVyLm1hc2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBpZiAob2xkVmFsdWUgIT09IHAudmFsKCkgJiYgIWVsLmRhdGEoJ2NoYW5nZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWwuZGF0YSgnY2hhbmdlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIGl0J3MgdmVyeSBpbXBvcnRhbnQgdGhhdCB0aGlzIGNhbGxiYWNrIHJlbWFpbnMgaW4gdGhpcyBwb3NpdGlvblxuICAgICAgICAgICAgICAgIC8vIG90aGVyd2hpc2Ugb2xkVmFsdWUgaXQncyBnb2luZyB0byB3b3JrIGJ1Z2d5XG4gICAgICAgICAgICAgICAgLm9uKCdibHVyLm1hc2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWUgPSBwLnZhbCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gc2VsZWN0IGFsbCB0ZXh0IG9uIGZvY3VzXG4gICAgICAgICAgICAgICAgLm9uKCdmb2N1cy5tYXNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2VsZWN0T25Gb2N1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChlLnRhcmdldCkuc2VsZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIGNsZWFyIHRoZSB2YWx1ZSBpZiBpdCBub3QgY29tcGxldGUgdGhlIG1hc2tcbiAgICAgICAgICAgICAgICAub24oJ2ZvY3Vzb3V0Lm1hc2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuY2xlYXJJZk5vdE1hdGNoICYmICFyZWdleE1hc2sudGVzdChwLnZhbCgpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICBwLnZhbCgnJyk7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFJlZ2V4TWFzazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hc2tDaHVua3MgPSBbXSwgdHJhbnNsYXRpb24sIHBhdHRlcm4sIG9wdGlvbmFsLCByZWN1cnNpdmUsIG9SZWN1cnNpdmUsIHI7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hc2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRpb24gPSBqTWFzay50cmFuc2xhdGlvblttYXNrLmNoYXJBdChpKV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zbGF0aW9uKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gPSB0cmFuc2xhdGlvbi5wYXR0ZXJuLnRvU3RyaW5nKCkucmVwbGFjZSgvLnsxfSR8Xi57MX0vZywgJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWwgPSB0cmFuc2xhdGlvbi5vcHRpb25hbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZSA9IHRyYW5zbGF0aW9uLnJlY3Vyc2l2ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY3Vyc2l2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tDaHVua3MucHVzaChtYXNrLmNoYXJBdChpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb1JlY3Vyc2l2ZSA9IHtkaWdpdDogbWFzay5jaGFyQXQoaSksIHBhdHRlcm46IHBhdHRlcm59O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrQ2h1bmtzLnB1c2goIW9wdGlvbmFsICYmICFyZWN1cnNpdmUgPyBwYXR0ZXJuIDogKHBhdHRlcm4gKyAnPycpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFza0NodW5rcy5wdXNoKG1hc2suY2hhckF0KGkpLnJlcGxhY2UoL1stXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHIgPSBtYXNrQ2h1bmtzLmpvaW4oJycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9SZWN1cnNpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgciA9IHIucmVwbGFjZShuZXcgUmVnRXhwKCcoJyArIG9SZWN1cnNpdmUuZGlnaXQgKyAnKC4qJyArIG9SZWN1cnNpdmUuZGlnaXQgKyAnKT8pJyksICcoJDEpPycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cChvUmVjdXJzaXZlLmRpZ2l0LCAnZycpLCBvUmVjdXJzaXZlLnBhdHRlcm4pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKHIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc3Ryb3lFdmVudHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGVsLm9mZihbJ2lucHV0JywgJ2tleWRvd24nLCAna2V5dXAnLCAncGFzdGUnLCAnZHJvcCcsICdibHVyJywgJ2ZvY3Vzb3V0JywgJyddLmpvaW4oJy5tYXNrICcpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YWw6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXNJbnB1dCA9IGVsLmlzKCdpbnB1dCcpLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSBpc0lucHV0ID8gJ3ZhbCcgOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIHI7XG5cbiAgICAgICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsW21ldGhvZF0oKSAhPT0gdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxbbWV0aG9kXSh2KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByID0gZWw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgciA9IGVsW21ldGhvZF0oKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYWxjdWxhdGVDYXJldFBvc2l0aW9uOiBmdW5jdGlvbihvbGRWYWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3VmFsID0gcC5nZXRNYXNrZWQoKSxcbiAgICAgICAgICAgICAgICAgICAgY2FyZXRQb3NOZXcgPSBwLmdldENhcmV0KCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZFZhbCAhPT0gbmV3VmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYXJldFBvc09sZCA9IGVsLmRhdGEoJ21hc2stcHJldml1cy1jYXJldC1wb3MnKSB8fCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsTCA9IG5ld1ZhbC5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWxMID0gb2xkVmFsLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tEaWdpdHNCZWZvcmVDYXJldCA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrRGlnaXRzQWZ0ZXJDYXJldCA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrRGlnaXRzQmVmb3JlQ2FyZXRBbGwgPSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFza0RpZ2l0c0JlZm9yZUNhcmV0QWxsT2xkID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGNhcmV0UG9zTmV3OyBpIDwgbmV3VmFsTDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXAubWFza0RpZ2l0UG9zTWFwW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrRGlnaXRzQWZ0ZXJDYXJldCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gY2FyZXRQb3NOZXcgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwLm1hc2tEaWdpdFBvc01hcFtpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWFza0RpZ2l0c0JlZm9yZUNhcmV0Kys7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBjYXJldFBvc05ldyAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocC5tYXNrRGlnaXRQb3NNYXBbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrRGlnaXRzQmVmb3JlQ2FyZXRBbGwrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGNhcmV0UG9zT2xkIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwLm1hc2tEaWdpdFBvc01hcE9sZFtpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tEaWdpdHNCZWZvcmVDYXJldEFsbE9sZCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIGN1cnNvciBpcyBhdCB0aGUgZW5kIGtlZXAgaXQgdGhlcmVcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmV0UG9zTmV3ID4gb2xkVmFsTCkge1xuICAgICAgICAgICAgICAgICAgICAgIGNhcmV0UG9zTmV3ID0gbmV3VmFsTCAqIDEwO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNhcmV0UG9zT2xkID49IGNhcmV0UG9zTmV3ICYmIGNhcmV0UG9zT2xkICE9PSBvbGRWYWxMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXAubWFza0RpZ2l0UG9zTWFwT2xkW2NhcmV0UG9zTmV3XSkgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhcmV0UG9zID0gY2FyZXRQb3NOZXc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0UG9zTmV3IC09IG1hc2tEaWdpdHNCZWZvcmVDYXJldEFsbE9sZCAtIG1hc2tEaWdpdHNCZWZvcmVDYXJldEFsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXRQb3NOZXcgLT0gbWFza0RpZ2l0c0JlZm9yZUNhcmV0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocC5tYXNrRGlnaXRQb3NNYXBbY2FyZXRQb3NOZXddKSAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0UG9zTmV3ID0gY2FyZXRQb3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjYXJldFBvc05ldyA+IGNhcmV0UG9zT2xkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJldFBvc05ldyArPSBtYXNrRGlnaXRzQmVmb3JlQ2FyZXRBbGwgLSBtYXNrRGlnaXRzQmVmb3JlQ2FyZXRBbGxPbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJldFBvc05ldyArPSBtYXNrRGlnaXRzQWZ0ZXJDYXJldDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY2FyZXRQb3NOZXc7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmVoYXZpb3VyOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICAgICAgICAgIHAuaW52YWxpZCA9IFtdO1xuXG4gICAgICAgICAgICAgICAgdmFyIGtleUNvZGUgPSBlbC5kYXRhKCdtYXNrLWtleWNvZGUnKTtcblxuICAgICAgICAgICAgICAgIGlmICgkLmluQXJyYXkoa2V5Q29kZSwgak1hc2suYnlQYXNzS2V5cykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdWYWwgPSBwLmdldE1hc2tlZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXRQb3MgPSBwLmdldENhcmV0KCksXG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWwgPSBlbC5kYXRhKCdtYXNrLXByZXZpdXMtdmFsdWUnKSB8fCAnJztcblxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGEgY29tcGVuc2F0aW9uIHRvIGRldmljZXMvYnJvd3NlcnMgdGhhdCBkb24ndCBjb21wZW5zYXRlXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhcmV0IHBvc2l0aW9uaW5nIHRoZSByaWdodCB3YXlcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICBwLnNldENhcmV0KHAuY2FsY3VsYXRlQ2FyZXRQb3NpdGlvbihvbGRWYWwpKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgJC5qTWFza0dsb2JhbHMua2V5U3Ryb2tlQ29tcGVuc2F0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICBwLnZhbChuZXdWYWwpO1xuICAgICAgICAgICAgICAgICAgICBwLnNldENhcmV0KGNhcmV0UG9zKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHAuY2FsbGJhY2tzKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRNYXNrZWQ6IGZ1bmN0aW9uKHNraXBNYXNrQ2hhcnMsIHZhbCkge1xuICAgICAgICAgICAgICAgIHZhciBidWYgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWwgPT09IHVuZGVmaW5lZCA/IHAudmFsKCkgOiB2YWwgKyAnJyxcbiAgICAgICAgICAgICAgICAgICAgbSA9IDAsIG1hc2tMZW4gPSBtYXNrLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgdiA9IDAsIHZhbExlbiA9IHZhbHVlLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gMSwgYWRkTWV0aG9kID0gJ3B1c2gnLFxuICAgICAgICAgICAgICAgICAgICByZXNldFBvcyA9IC0xLFxuICAgICAgICAgICAgICAgICAgICBtYXNrRGlnaXRDb3VudCA9IDAsXG4gICAgICAgICAgICAgICAgICAgIG1hc2tEaWdpdFBvc0FyciA9IFtdLFxuICAgICAgICAgICAgICAgICAgICBsYXN0TWFza0NoYXIsXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucmV2ZXJzZSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRNZXRob2QgPSAndW5zaGlmdCc7XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICBsYXN0TWFza0NoYXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICBtID0gbWFza0xlbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHYgPSB2YWxMZW4gLSAxO1xuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtID4gLTEgJiYgdiA+IC0xO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RNYXNrQ2hhciA9IG1hc2tMZW4gLSAxO1xuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtIDwgbWFza0xlbiAmJiB2IDwgdmFsTGVuO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBsYXN0VW50cmFuc2xhdGVkTWFza0NoYXI7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGNoZWNrKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hc2tEaWdpdCA9IG1hc2suY2hhckF0KG0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsRGlnaXQgPSB2YWx1ZS5jaGFyQXQodiksXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbiA9IGpNYXNrLnRyYW5zbGF0aW9uW21hc2tEaWdpdF07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zbGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsRGlnaXQubWF0Y2godHJhbnNsYXRpb24ucGF0dGVybikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZbYWRkTWV0aG9kXSh2YWxEaWdpdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGlvbi5yZWN1cnNpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc2V0UG9zID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRQb3MgPSBtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG0gPT09IGxhc3RNYXNrQ2hhciAmJiBtICE9PSByZXNldFBvcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbSA9IHJlc2V0UG9zIC0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RNYXNrQ2hhciA9PT0gcmVzZXRQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0gLT0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0gKz0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWxEaWdpdCA9PT0gbGFzdFVudHJhbnNsYXRlZE1hc2tDaGFyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2hlZCB0aGUgbGFzdCB1bnRyYW5zbGF0ZWQgKHJhdykgbWFzayBjaGFyYWN0ZXIgdGhhdCB3ZSBlbmNvdW50ZXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxpa2VseSBhbiBpbnNlcnQgb2Zmc2V0IHRoZSBtYXNrIGNoYXJhY3RlciBmcm9tIHRoZSBsYXN0IGVudHJ5OyBmYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhyb3VnaCBhbmQgb25seSBpbmNyZW1lbnQgdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tEaWdpdENvdW50LS07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFVudHJhbnNsYXRlZE1hc2tDaGFyID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0cmFuc2xhdGlvbi5vcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0gKz0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYgLT0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0cmFuc2xhdGlvbi5mYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZlthZGRNZXRob2RdKHRyYW5zbGF0aW9uLmZhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtICs9IG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2IC09IG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHAuaW52YWxpZC5wdXNoKHtwOiB2LCB2OiB2YWxEaWdpdCwgZTogdHJhbnNsYXRpb24ucGF0dGVybn0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdiArPSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNraXBNYXNrQ2hhcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZbYWRkTWV0aG9kXShtYXNrRGlnaXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsRGlnaXQgPT09IG1hc2tEaWdpdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tEaWdpdFBvc0Fyci5wdXNoKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYgKz0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0VW50cmFuc2xhdGVkTWFza0NoYXIgPSBtYXNrRGlnaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFza0RpZ2l0UG9zQXJyLnB1c2godiArIG1hc2tEaWdpdENvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrRGlnaXRDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBtICs9IG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBsYXN0TWFza0NoYXJEaWdpdCA9IG1hc2suY2hhckF0KGxhc3RNYXNrQ2hhcik7XG4gICAgICAgICAgICAgICAgaWYgKG1hc2tMZW4gPT09IHZhbExlbiArIDEgJiYgIWpNYXNrLnRyYW5zbGF0aW9uW2xhc3RNYXNrQ2hhckRpZ2l0XSkge1xuICAgICAgICAgICAgICAgICAgICBidWYucHVzaChsYXN0TWFza0NoYXJEaWdpdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIG5ld1ZhbCA9IGJ1Zi5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICBwLm1hcE1hc2tkaWdpdFBvc2l0aW9ucyhuZXdWYWwsIG1hc2tEaWdpdFBvc0FyciwgdmFsTGVuKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3VmFsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1hcE1hc2tkaWdpdFBvc2l0aW9uczogZnVuY3Rpb24obmV3VmFsLCBtYXNrRGlnaXRQb3NBcnIsIHZhbExlbikge1xuICAgICAgICAgICAgICB2YXIgbWFza0RpZmYgPSBvcHRpb25zLnJldmVyc2UgPyBuZXdWYWwubGVuZ3RoIC0gdmFsTGVuIDogMDtcbiAgICAgICAgICAgICAgcC5tYXNrRGlnaXRQb3NNYXAgPSB7fTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXNrRGlnaXRQb3NBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwLm1hc2tEaWdpdFBvc01hcFttYXNrRGlnaXRQb3NBcnJbaV0gKyBtYXNrRGlmZl0gPSAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FsbGJhY2tzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWwgPSBwLnZhbCgpLFxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdmFsICE9PSBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEFyZ3MgPSBbdmFsLCBlLCBlbCwgb3B0aW9uc10sXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gZnVuY3Rpb24obmFtZSwgY3JpdGVyaWEsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uc1tuYW1lXSA9PT0gJ2Z1bmN0aW9uJyAmJiBjcml0ZXJpYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNbbmFtZV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjaygnb25DaGFuZ2UnLCBjaGFuZ2VkID09PSB0cnVlLCBkZWZhdWx0QXJncyk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soJ29uS2V5UHJlc3MnLCBjaGFuZ2VkID09PSB0cnVlLCBkZWZhdWx0QXJncyk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soJ29uQ29tcGxldGUnLCB2YWwubGVuZ3RoID09PSBtYXNrLmxlbmd0aCwgZGVmYXVsdEFyZ3MpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCdvbkludmFsaWQnLCBwLmludmFsaWQubGVuZ3RoID4gMCwgW3ZhbCwgZSwgZWwsIHAuaW52YWxpZCwgb3B0aW9uc10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGVsID0gJChlbCk7XG4gICAgICAgIHZhciBqTWFzayA9IHRoaXMsIG9sZFZhbHVlID0gcC52YWwoKSwgcmVnZXhNYXNrO1xuXG4gICAgICAgIG1hc2sgPSB0eXBlb2YgbWFzayA9PT0gJ2Z1bmN0aW9uJyA/IG1hc2socC52YWwoKSwgdW5kZWZpbmVkLCBlbCwgIG9wdGlvbnMpIDogbWFzaztcblxuICAgICAgICAvLyBwdWJsaWMgbWV0aG9kc1xuICAgICAgICBqTWFzay5tYXNrID0gbWFzaztcbiAgICAgICAgak1hc2sub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIGpNYXNrLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGNhcmV0ID0gcC5nZXRDYXJldCgpO1xuICAgICAgICAgICAgaWYgKGpNYXNrLm9wdGlvbnMucGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdwbGFjZWhvbGRlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsLmRhdGEoJ21hc2stbWF4bGVuZ3RoJykpIHtcbiAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdtYXhsZW5ndGgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAuZGVzdHJveUV2ZW50cygpO1xuICAgICAgICAgICAgcC52YWwoak1hc2suZ2V0Q2xlYW5WYWwoKSk7XG4gICAgICAgICAgICBwLnNldENhcmV0KGNhcmV0KTtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBnZXQgdmFsdWUgd2l0aG91dCBtYXNrXG4gICAgICAgIGpNYXNrLmdldENsZWFuVmFsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgIHJldHVybiBwLmdldE1hc2tlZCh0cnVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBnZXQgbWFza2VkIHZhbHVlIHdpdGhvdXQgdGhlIHZhbHVlIGJlaW5nIGluIHRoZSBpbnB1dCBvciBlbGVtZW50XG4gICAgICAgIGpNYXNrLmdldE1hc2tlZFZhbCA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICByZXR1cm4gcC5nZXRNYXNrZWQoZmFsc2UsIHZhbCk7XG4gICAgICAgIH07XG5cbiAgICAgICBqTWFzay5pbml0ID0gZnVuY3Rpb24ob25seU1hc2spIHtcbiAgICAgICAgICAgIG9ubHlNYXNrID0gb25seU1hc2sgfHwgZmFsc2U7XG4gICAgICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICAgICAgak1hc2suY2xlYXJJZk5vdE1hdGNoICA9ICQuak1hc2tHbG9iYWxzLmNsZWFySWZOb3RNYXRjaDtcbiAgICAgICAgICAgIGpNYXNrLmJ5UGFzc0tleXMgICAgICAgPSAkLmpNYXNrR2xvYmFscy5ieVBhc3NLZXlzO1xuICAgICAgICAgICAgak1hc2sudHJhbnNsYXRpb24gICAgICA9ICQuZXh0ZW5kKHt9LCAkLmpNYXNrR2xvYmFscy50cmFuc2xhdGlvbiwgb3B0aW9ucy50cmFuc2xhdGlvbik7XG5cbiAgICAgICAgICAgIGpNYXNrID0gJC5leHRlbmQodHJ1ZSwge30sIGpNYXNrLCBvcHRpb25zKTtcblxuICAgICAgICAgICAgcmVnZXhNYXNrID0gcC5nZXRSZWdleE1hc2soKTtcblxuICAgICAgICAgICAgaWYgKG9ubHlNYXNrKSB7XG4gICAgICAgICAgICAgICAgcC5ldmVudHMoKTtcbiAgICAgICAgICAgICAgICBwLnZhbChwLmdldE1hc2tlZCgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWwuYXR0cigncGxhY2Vob2xkZXInICwgb3B0aW9ucy5wbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBuZWNlc3NhcnksIG90aGVyd2lzZSBpZiB0aGUgdXNlciBzdWJtaXQgdGhlIGZvcm1cbiAgICAgICAgICAgICAgICAvLyBhbmQgdGhlbiBwcmVzcyB0aGUgXCJiYWNrXCIgYnV0dG9uLCB0aGUgYXV0b2NvbXBsZXRlIHdpbGwgZXJhc2VcbiAgICAgICAgICAgICAgICAvLyB0aGUgZGF0YS4gV29ya3MgZmluZSBvbiBJRTkrLCBGRiwgT3BlcmEsIFNhZmFyaS5cbiAgICAgICAgICAgICAgICBpZiAoZWwuZGF0YSgnbWFzaycpKSB7XG4gICAgICAgICAgICAgICAgICBlbC5hdHRyKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gZGV0ZWN0IGlmIGlzIG5lY2Vzc2FyeSBsZXQgdGhlIHVzZXIgdHlwZSBmcmVlbHkuXG4gICAgICAgICAgICAgICAgLy8gZm9yIGlzIGEgbG90IGZhc3RlciB0aGFuIGZvckVhY2guXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIG1heGxlbmd0aCA9IHRydWU7IGkgPCBtYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGlvbiA9IGpNYXNrLnRyYW5zbGF0aW9uW21hc2suY2hhckF0KGkpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zbGF0aW9uICYmIHRyYW5zbGF0aW9uLnJlY3Vyc2l2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChtYXhsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZWwuYXR0cignbWF4bGVuZ3RoJywgbWFzay5sZW5ndGgpLmRhdGEoJ21hc2stbWF4bGVuZ3RoJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcC5kZXN0cm95RXZlbnRzKCk7XG4gICAgICAgICAgICAgICAgcC5ldmVudHMoKTtcblxuICAgICAgICAgICAgICAgIHZhciBjYXJldCA9IHAuZ2V0Q2FyZXQoKTtcbiAgICAgICAgICAgICAgICBwLnZhbChwLmdldE1hc2tlZCgpKTtcbiAgICAgICAgICAgICAgICBwLnNldENhcmV0KGNhcmV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBqTWFzay5pbml0KCFlbC5pcygnaW5wdXQnKSk7XG4gICAgfTtcblxuICAgICQubWFza1dhdGNoZXJzID0ge307XG4gICAgdmFyIEhUTUxBdHRyaWJ1dGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5wdXQgPSAkKHRoaXMpLFxuICAgICAgICAgICAgb3B0aW9ucyA9IHt9LFxuICAgICAgICAgICAgcHJlZml4ID0gJ2RhdGEtbWFzay0nLFxuICAgICAgICAgICAgbWFzayA9IGlucHV0LmF0dHIoJ2RhdGEtbWFzaycpO1xuXG4gICAgICAgIGlmIChpbnB1dC5hdHRyKHByZWZpeCArICdyZXZlcnNlJykpIHtcbiAgICAgICAgICAgIG9wdGlvbnMucmV2ZXJzZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5wdXQuYXR0cihwcmVmaXggKyAnY2xlYXJpZm5vdG1hdGNoJykpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuY2xlYXJJZk5vdE1hdGNoID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnB1dC5hdHRyKHByZWZpeCArICdzZWxlY3RvbmZvY3VzJykgPT09ICd0cnVlJykge1xuICAgICAgICAgICBvcHRpb25zLnNlbGVjdE9uRm9jdXMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vdFNhbWVNYXNrT2JqZWN0KGlucHV0LCBtYXNrLCBvcHRpb25zKSkge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0LmRhdGEoJ21hc2snLCBuZXcgTWFzayh0aGlzLCBtYXNrLCBvcHRpb25zKSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG5vdFNhbWVNYXNrT2JqZWN0ID0gZnVuY3Rpb24oZmllbGQsIG1hc2ssIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHZhciBtYXNrT2JqZWN0ID0gJChmaWVsZCkuZGF0YSgnbWFzaycpLFxuICAgICAgICAgICAgc3RyaW5naWZ5ID0gSlNPTi5zdHJpbmdpZnksXG4gICAgICAgICAgICB2YWx1ZSA9ICQoZmllbGQpLnZhbCgpIHx8ICQoZmllbGQpLnRleHQoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWFzayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIG1hc2sgPSBtYXNrKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgbWFza09iamVjdCAhPT0gJ29iamVjdCcgfHwgc3RyaW5naWZ5KG1hc2tPYmplY3Qub3B0aW9ucykgIT09IHN0cmluZ2lmeShvcHRpb25zKSB8fCBtYXNrT2JqZWN0Lm1hc2sgIT09IG1hc2s7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfSxcbiAgICBldmVudFN1cHBvcnRlZCA9IGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgaXNTdXBwb3J0ZWQ7XG5cbiAgICAgICAgZXZlbnROYW1lID0gJ29uJyArIGV2ZW50TmFtZTtcbiAgICAgICAgaXNTdXBwb3J0ZWQgPSAoZXZlbnROYW1lIGluIGVsKTtcblxuICAgICAgICBpZiAoICFpc1N1cHBvcnRlZCApIHtcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShldmVudE5hbWUsICdyZXR1cm47Jyk7XG4gICAgICAgICAgICBpc1N1cHBvcnRlZCA9IHR5cGVvZiBlbFtldmVudE5hbWVdID09PSAnZnVuY3Rpb24nO1xuICAgICAgICB9XG4gICAgICAgIGVsID0gbnVsbDtcblxuICAgICAgICByZXR1cm4gaXNTdXBwb3J0ZWQ7XG4gICAgfTtcblxuICAgICQuZm4ubWFzayA9IGZ1bmN0aW9uKG1hc2ssIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHZhciBzZWxlY3RvciA9IHRoaXMuc2VsZWN0b3IsXG4gICAgICAgICAgICBnbG9iYWxzID0gJC5qTWFza0dsb2JhbHMsXG4gICAgICAgICAgICBpbnRlcnZhbCA9IGdsb2JhbHMud2F0Y2hJbnRlcnZhbCxcbiAgICAgICAgICAgIHdhdGNoSW5wdXRzID0gb3B0aW9ucy53YXRjaElucHV0cyB8fCBnbG9iYWxzLndhdGNoSW5wdXRzLFxuICAgICAgICAgICAgbWFza0Z1bmN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdFNhbWVNYXNrT2JqZWN0KHRoaXMsIG1hc2ssIG9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLmRhdGEoJ21hc2snLCBuZXcgTWFzayh0aGlzLCBtYXNrLCBvcHRpb25zKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAkKHRoaXMpLmVhY2gobWFza0Z1bmN0aW9uKTtcblxuICAgICAgICBpZiAoc2VsZWN0b3IgJiYgc2VsZWN0b3IgIT09ICcnICYmIHdhdGNoSW5wdXRzKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKCQubWFza1dhdGNoZXJzW3NlbGVjdG9yXSk7XG4gICAgICAgICAgICAkLm1hc2tXYXRjaGVyc1tzZWxlY3Rvcl0gPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoc2VsZWN0b3IpLmVhY2gobWFza0Z1bmN0aW9uKTtcbiAgICAgICAgICAgIH0sIGludGVydmFsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgJC5mbi5tYXNrZWQgPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YSgnbWFzaycpLmdldE1hc2tlZFZhbCh2YWwpO1xuICAgIH07XG5cbiAgICAkLmZuLnVubWFzayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjbGVhckludGVydmFsKCQubWFza1dhdGNoZXJzW3RoaXMuc2VsZWN0b3JdKTtcbiAgICAgICAgZGVsZXRlICQubWFza1dhdGNoZXJzW3RoaXMuc2VsZWN0b3JdO1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGRhdGFNYXNrID0gJCh0aGlzKS5kYXRhKCdtYXNrJyk7XG4gICAgICAgICAgICBpZiAoZGF0YU1hc2spIHtcbiAgICAgICAgICAgICAgICBkYXRhTWFzay5yZW1vdmUoKS5yZW1vdmVEYXRhKCdtYXNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkLmZuLmNsZWFuVmFsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEoJ21hc2snKS5nZXRDbGVhblZhbCgpO1xuICAgIH07XG5cbiAgICAkLmFwcGx5RGF0YU1hc2sgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgICAgICBzZWxlY3RvciA9IHNlbGVjdG9yIHx8ICQuak1hc2tHbG9iYWxzLm1hc2tFbGVtZW50cztcbiAgICAgICAgdmFyICRzZWxlY3RvciA9IChzZWxlY3RvciBpbnN0YW5jZW9mICQpID8gc2VsZWN0b3IgOiAkKHNlbGVjdG9yKTtcbiAgICAgICAgJHNlbGVjdG9yLmZpbHRlcigkLmpNYXNrR2xvYmFscy5kYXRhTWFza0F0dHIpLmVhY2goSFRNTEF0dHJpYnV0ZXMpO1xuICAgIH07XG5cbiAgICB2YXIgZ2xvYmFscyA9IHtcbiAgICAgICAgbWFza0VsZW1lbnRzOiAnaW5wdXQsdGQsc3BhbixkaXYnLFxuICAgICAgICBkYXRhTWFza0F0dHI6ICcqW2RhdGEtbWFza10nLFxuICAgICAgICBkYXRhTWFzazogdHJ1ZSxcbiAgICAgICAgd2F0Y2hJbnRlcnZhbDogMzAwLFxuICAgICAgICB3YXRjaElucHV0czogdHJ1ZSxcbiAgICAgICAga2V5U3Ryb2tlQ29tcGVuc2F0aW9uOiAxMCxcbiAgICAgICAgLy8gb2xkIHZlcnNpb25zIG9mIGNocm9tZSBkb250IHdvcmsgZ3JlYXQgd2l0aCBpbnB1dCBldmVudFxuICAgICAgICB1c2VJbnB1dDogIS9DaHJvbWVcXC9bMi00XVswLTldfFNhbXN1bmdCcm93c2VyLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSAmJiBldmVudFN1cHBvcnRlZCgnaW5wdXQnKSxcbiAgICAgICAgd2F0Y2hEYXRhTWFzazogZmFsc2UsXG4gICAgICAgIGJ5UGFzc0tleXM6IFs5LCAxNiwgMTcsIDE4LCAzNiwgMzcsIDM4LCAzOSwgNDAsIDkxXSxcbiAgICAgICAgdHJhbnNsYXRpb246IHtcbiAgICAgICAgICAgICcwJzoge3BhdHRlcm46IC9cXGQvfSxcbiAgICAgICAgICAgICc5Jzoge3BhdHRlcm46IC9cXGQvLCBvcHRpb25hbDogdHJ1ZX0sXG4gICAgICAgICAgICAnIyc6IHtwYXR0ZXJuOiAvXFxkLywgcmVjdXJzaXZlOiB0cnVlfSxcbiAgICAgICAgICAgICdBJzoge3BhdHRlcm46IC9bYS16QS1aMC05XS99LFxuICAgICAgICAgICAgJ1MnOiB7cGF0dGVybjogL1thLXpBLVpdL31cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAkLmpNYXNrR2xvYmFscyA9ICQuak1hc2tHbG9iYWxzIHx8IHt9O1xuICAgIGdsb2JhbHMgPSAkLmpNYXNrR2xvYmFscyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBnbG9iYWxzLCAkLmpNYXNrR2xvYmFscyk7XG5cbiAgICAvLyBsb29raW5nIGZvciBpbnB1dHMgd2l0aCBkYXRhLW1hc2sgYXR0cmlidXRlXG4gICAgaWYgKGdsb2JhbHMuZGF0YU1hc2spIHtcbiAgICAgICAgJC5hcHBseURhdGFNYXNrKCk7XG4gICAgfVxuXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkLmpNYXNrR2xvYmFscy53YXRjaERhdGFNYXNrKSB7XG4gICAgICAgICAgICAkLmFwcGx5RGF0YU1hc2soKTtcbiAgICAgICAgfVxuICAgIH0sIGdsb2JhbHMud2F0Y2hJbnRlcnZhbCk7XG59LCB3aW5kb3cualF1ZXJ5LCB3aW5kb3cuWmVwdG8pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=