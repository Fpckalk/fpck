/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scripts/main.js":
/*!********************************!*\
  !*** ./assets/scripts/main.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var simple_scrollspy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-scrollspy */ "./node_modules/simple-scrollspy/src/index.js");
/* harmony import */ var simple_scrollspy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_scrollspy__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Fpck =
/*#__PURE__*/
function () {
  function Fpck() {
    _classCallCheck(this, Fpck);
  }

  _createClass(Fpck, null, [{
    key: "init",
    value: function init() {
      document.addEventListener('scroll', function () {
        return Fpck.setScrollClass();
      });
      simple_scrollspy__WEBPACK_IMPORTED_MODULE_0___default()('.main-menu', {
        sectionClass: 'div[id]',
        menuActiveTarget: '.main-menu a',
        offset: 100
      });
    }
  }, {
    key: "setScrollClass",
    value: function setScrollClass() {
      var body = document.getElementsByTagName('body')[0];

      if (window.pageYOffset >= 50) {
        body.classList.add('scroll');
      } else {
        body.classList.remove('scroll');
      }
    }
  }]);

  return Fpck;
}();

Fpck.init();

/***/ }),

/***/ "./assets/styles/main.scss":
/*!*********************************!*\
  !*** ./assets/styles/main.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/simple-scrollspy/src/index.js":
/*!****************************************************!*\
  !*** ./node_modules/simple-scrollspy/src/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (el, options = {}) => {
    const { ScrollSpy } = __webpack_require__(/*! ./scrollspy */ "./node_modules/simple-scrollspy/src/scrollspy.js")
    const instance = new ScrollSpy(el, options)

    window.onload = instance.onScroll()
    window.addEventListener('scroll', () => instance.onScroll())

    return instance
}


/***/ }),

/***/ "./node_modules/simple-scrollspy/src/scrollspy.js":
/*!********************************************************!*\
  !*** ./node_modules/simple-scrollspy/src/scrollspy.js ***!
  \********************************************************/
/*! exports provided: ScrollSpy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSpy", function() { return ScrollSpy; });
class ScrollSpy {
  constructor(menu, options = {}) {
    if (!menu) {
      throw new Error('First argument is query selector to your navigation.')
    }

    if (typeof options !== 'object') {
      throw new Error('Second argument must be instance of Object.')
    }

    let defaultOptions = {
      sectionClass: '.scrollspy',
      menuActiveTarget: 'li > a',
      offset: 0,
      hrefAttribute: 'href',
      activeClass: 'active'
    }

    this.menuList = menu instanceof HTMLElement ? menu : document.querySelector(menu)
    this.options = Object.assign({}, defaultOptions, options)
    this.sections = document.querySelectorAll(this.options.sectionClass)
  }

  onScroll() {
    const section = this.getSectionInView()
    const menuItem = this.getMenuItemBySection(section)

    if (menuItem) {
      this.removeCurrentActive({ ignore: menuItem })
      this.setActive(menuItem)
    }
  }

  getMenuItemBySection(section) {
    if (!section) return
    const sectionId = section.getAttribute('id')
    return this.menuList.querySelector(`[${this.options.hrefAttribute}="#${sectionId}"]`)
  }

  getSectionInView() {
    for (let i = 0; i < this.sections.length; i++) {
      const startAt = this.sections[i].offsetTop
      const endAt = startAt + this.sections[i].offsetHeight
      const currentPosition = (document.documentElement.scrollTop || document.body.scrollTop) + this.options.offset
      const isInView = currentPosition > startAt && currentPosition <= endAt
      if (isInView) return this.sections[i]
    }
  }

  setActive(activeItem) {
    const isActive = activeItem.classList.contains(this.options.activeClass)
    if (!isActive) activeItem.classList.add(this.options.activeClass)
  }

  removeCurrentActive({ ignore }) {
    const { hrefAttribute, menuActiveTarget } = this.options
    const items = `${menuActiveTarget}.active:not([${hrefAttribute}="${ignore.getAttribute(hrefAttribute)}"])`
    const menuItems = this.menuList.querySelectorAll(items)

    menuItems.forEach((item) => item.classList.remove(this.options.activeClass))
  }
}


/***/ }),

/***/ 0:
/*!****************************************************************!*\
  !*** multi ./assets/scripts/main.js ./assets/styles/main.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./assets/scripts/main.js */"./assets/scripts/main.js");
module.exports = __webpack_require__(/*! ./assets/styles/main.scss */"./assets/styles/main.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL21haW4uc2Nzcz8yYWVkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc2Nyb2xsc3B5L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXNjcm9sbHNweS9zcmMvc2Nyb2xsc3B5LmpzIl0sIm5hbWVzIjpbIkZwY2siLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRTY3JvbGxDbGFzcyIsInNjcm9sbFNweSIsInNlY3Rpb25DbGFzcyIsIm1lbnVBY3RpdmVUYXJnZXQiLCJvZmZzZXQiLCJib2R5IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImluaXQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0lBRU1BLEk7Ozs7Ozs7OzsyQkFDVTtBQUNaQyxjQUFRLENBQUNDLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DO0FBQUEsZUFBTUYsSUFBSSxDQUFDRyxjQUFMLEVBQU47QUFBQSxPQUFwQztBQUNBQyw2REFBUyxDQUFDLFlBQUQsRUFBZTtBQUN0QkMsb0JBQVksRUFBRSxTQURRO0FBRXRCQyx3QkFBZ0IsRUFBRSxjQUZJO0FBR3RCQyxjQUFNLEVBQUU7QUFIYyxPQUFmLENBQVQ7QUFLRDs7O3FDQUV1QjtBQUN0QixVQUFNQyxJQUFJLEdBQUdQLFFBQVEsQ0FBQ1Esb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsQ0FBYjs7QUFFQSxVQUFJQyxNQUFNLENBQUNDLFdBQVAsSUFBc0IsRUFBMUIsRUFBOEI7QUFDNUJILFlBQUksQ0FBQ0ksU0FBTCxDQUFlQyxHQUFmLENBQW1CLFFBQW5CO0FBQ0QsT0FGRCxNQUVPO0FBQ0xMLFlBQUksQ0FBQ0ksU0FBTCxDQUFlRSxNQUFmLENBQXNCLFFBQXRCO0FBQ0Q7QUFDRjs7Ozs7O0FBR0hkLElBQUksQ0FBQ2UsSUFBTCxHOzs7Ozs7Ozs7OztBQ3ZCQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQ0FBa0M7QUFDbEMsV0FBVyxZQUFZLEdBQUcsbUJBQU8sQ0FBQyxxRUFBYTtBQUMvQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQU87QUFDUCxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxtQkFBbUI7QUFDbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywyQkFBMkIsS0FBSyxVQUFVO0FBQ3JGOztBQUVBO0FBQ0EsbUJBQW1CLDBCQUEwQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsU0FBUztBQUNoQyxXQUFXLGtDQUFrQztBQUM3QyxxQkFBcUIsaUJBQWlCLGVBQWUsY0FBYyxJQUFJLG1DQUFtQztBQUMxRzs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0cy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHNjcm9sbFNweSBmcm9tICdzaW1wbGUtc2Nyb2xsc3B5JztcclxuXHJcbmNsYXNzIEZwY2sge1xyXG4gIHN0YXRpYyBpbml0KCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4gRnBjay5zZXRTY3JvbGxDbGFzcygpKTtcclxuICAgIHNjcm9sbFNweSgnLm1haW4tbWVudScsIHtcclxuICAgICAgc2VjdGlvbkNsYXNzOiAnZGl2W2lkXScsXHJcbiAgICAgIG1lbnVBY3RpdmVUYXJnZXQ6ICcubWFpbi1tZW51IGEnLFxyXG4gICAgICBvZmZzZXQ6IDEwMCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNldFNjcm9sbENsYXNzKCkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XHJcblxyXG4gICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+PSA1MCkge1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGwnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkZwY2suaW5pdCgpO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJtb2R1bGUuZXhwb3J0cyA9IChlbCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgeyBTY3JvbGxTcHkgfSA9IHJlcXVpcmUoJy4vc2Nyb2xsc3B5JylcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTY3JvbGxTcHkoZWwsIG9wdGlvbnMpXG5cbiAgICB3aW5kb3cub25sb2FkID0gaW5zdGFuY2Uub25TY3JvbGwoKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiBpbnN0YW5jZS5vblNjcm9sbCgpKVxuXG4gICAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJleHBvcnQgY2xhc3MgU2Nyb2xsU3B5IHtcbiAgY29uc3RydWN0b3IobWVudSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKCFtZW51KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IGlzIHF1ZXJ5IHNlbGVjdG9yIHRvIHlvdXIgbmF2aWdhdGlvbi4nKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgaW5zdGFuY2Ugb2YgT2JqZWN0LicpXG4gICAgfVxuXG4gICAgbGV0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgc2VjdGlvbkNsYXNzOiAnLnNjcm9sbHNweScsXG4gICAgICBtZW51QWN0aXZlVGFyZ2V0OiAnbGkgPiBhJyxcbiAgICAgIG9mZnNldDogMCxcbiAgICAgIGhyZWZBdHRyaWJ1dGU6ICdocmVmJyxcbiAgICAgIGFjdGl2ZUNsYXNzOiAnYWN0aXZlJ1xuICAgIH1cblxuICAgIHRoaXMubWVudUxpc3QgPSBtZW51IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBtZW51IDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtZW51KVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKVxuICAgIHRoaXMuc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMub3B0aW9ucy5zZWN0aW9uQ2xhc3MpXG4gIH1cblxuICBvblNjcm9sbCgpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gdGhpcy5nZXRTZWN0aW9uSW5WaWV3KClcbiAgICBjb25zdCBtZW51SXRlbSA9IHRoaXMuZ2V0TWVudUl0ZW1CeVNlY3Rpb24oc2VjdGlvbilcblxuICAgIGlmIChtZW51SXRlbSkge1xuICAgICAgdGhpcy5yZW1vdmVDdXJyZW50QWN0aXZlKHsgaWdub3JlOiBtZW51SXRlbSB9KVxuICAgICAgdGhpcy5zZXRBY3RpdmUobWVudUl0ZW0pXG4gICAgfVxuICB9XG5cbiAgZ2V0TWVudUl0ZW1CeVNlY3Rpb24oc2VjdGlvbikge1xuICAgIGlmICghc2VjdGlvbikgcmV0dXJuXG4gICAgY29uc3Qgc2VjdGlvbklkID0gc2VjdGlvbi5nZXRBdHRyaWJ1dGUoJ2lkJylcbiAgICByZXR1cm4gdGhpcy5tZW51TGlzdC5xdWVyeVNlbGVjdG9yKGBbJHt0aGlzLm9wdGlvbnMuaHJlZkF0dHJpYnV0ZX09XCIjJHtzZWN0aW9uSWR9XCJdYClcbiAgfVxuXG4gIGdldFNlY3Rpb25JblZpZXcoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzdGFydEF0ID0gdGhpcy5zZWN0aW9uc1tpXS5vZmZzZXRUb3BcbiAgICAgIGNvbnN0IGVuZEF0ID0gc3RhcnRBdCArIHRoaXMuc2VjdGlvbnNbaV0ub2Zmc2V0SGVpZ2h0XG4gICAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCkgKyB0aGlzLm9wdGlvbnMub2Zmc2V0XG4gICAgICBjb25zdCBpc0luVmlldyA9IGN1cnJlbnRQb3NpdGlvbiA+IHN0YXJ0QXQgJiYgY3VycmVudFBvc2l0aW9uIDw9IGVuZEF0XG4gICAgICBpZiAoaXNJblZpZXcpIHJldHVybiB0aGlzLnNlY3Rpb25zW2ldXG4gICAgfVxuICB9XG5cbiAgc2V0QWN0aXZlKGFjdGl2ZUl0ZW0pIHtcbiAgICBjb25zdCBpc0FjdGl2ZSA9IGFjdGl2ZUl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcylcbiAgICBpZiAoIWlzQWN0aXZlKSBhY3RpdmVJdGVtLmNsYXNzTGlzdC5hZGQodGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKVxuICB9XG5cbiAgcmVtb3ZlQ3VycmVudEFjdGl2ZSh7IGlnbm9yZSB9KSB7XG4gICAgY29uc3QgeyBocmVmQXR0cmlidXRlLCBtZW51QWN0aXZlVGFyZ2V0IH0gPSB0aGlzLm9wdGlvbnNcbiAgICBjb25zdCBpdGVtcyA9IGAke21lbnVBY3RpdmVUYXJnZXR9LmFjdGl2ZTpub3QoWyR7aHJlZkF0dHJpYnV0ZX09XCIke2lnbm9yZS5nZXRBdHRyaWJ1dGUoaHJlZkF0dHJpYnV0ZSl9XCJdKWBcbiAgICBjb25zdCBtZW51SXRlbXMgPSB0aGlzLm1lbnVMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoaXRlbXMpXG5cbiAgICBtZW51SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcykpXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=