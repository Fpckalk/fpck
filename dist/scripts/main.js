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
      document.querySelector('.nav-toggler').addEventListener('click', function (event) {
        return Fpck.toggleMobileMenu(event);
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
  }, {
    key: "toggleMobileMenu",
    value: function toggleMobileMenu(event) {
      var button = event.currentTarget;
      var buttonIcon = button.querySelector('i');
      var body = document.querySelector('body');

      if (body.classList.contains('menu-toggled')) {
        body.classList.remove('menu-toggled');
        buttonIcon.classList.remove('fa-times');
      } else {
        body.classList.add('menu-toggled');
        buttonIcon.classList.add('fa-times');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL21haW4uc2Nzcz8yYWVkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc2Nyb2xsc3B5L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLXNjcm9sbHNweS9zcmMvc2Nyb2xsc3B5LmpzIl0sIm5hbWVzIjpbIkZwY2siLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRTY3JvbGxDbGFzcyIsInNjcm9sbFNweSIsInNlY3Rpb25DbGFzcyIsIm1lbnVBY3RpdmVUYXJnZXQiLCJvZmZzZXQiLCJxdWVyeVNlbGVjdG9yIiwiZXZlbnQiLCJ0b2dnbGVNb2JpbGVNZW51IiwiYm9keSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJidXR0b24iLCJjdXJyZW50VGFyZ2V0IiwiYnV0dG9uSWNvbiIsImNvbnRhaW5zIiwiaW5pdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gs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Y2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgc2Nyb2xsU3B5IGZyb20gJ3NpbXBsZS1zY3JvbGxzcHknO1xyXG5cclxuY2xhc3MgRnBjayB7XHJcbiAgc3RhdGljIGluaXQoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiBGcGNrLnNldFNjcm9sbENsYXNzKCkpO1xyXG4gICAgc2Nyb2xsU3B5KCcubWFpbi1tZW51Jywge1xyXG4gICAgICBzZWN0aW9uQ2xhc3M6ICdkaXZbaWRdJyxcclxuICAgICAgbWVudUFjdGl2ZVRhcmdldDogJy5tYWluLW1lbnUgYScsXHJcbiAgICAgIG9mZnNldDogMTAwLFxyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi10b2dnbGVyJylcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gRnBjay50b2dnbGVNb2JpbGVNZW51KGV2ZW50KSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0U2Nyb2xsQ2xhc3MoKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcclxuXHJcbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IDUwKSB7XHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRvZ2dsZU1vYmlsZU1lbnUoZXZlbnQpIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBjb25zdCBidXR0b25JY29uID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ2knKTtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcblxyXG4gICAgaWYgKGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LXRvZ2dsZWQnKSkge1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtdG9nZ2xlZCcpO1xyXG4gICAgICBidXR0b25JY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXRpbWVzJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ21lbnUtdG9nZ2xlZCcpO1xyXG4gICAgICBidXR0b25JY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXRpbWVzJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5GcGNrLmluaXQoKTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSAoZWwsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHsgU2Nyb2xsU3B5IH0gPSByZXF1aXJlKCcuL3Njcm9sbHNweScpXG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgU2Nyb2xsU3B5KGVsLCBvcHRpb25zKVxuXG4gICAgd2luZG93Lm9ubG9hZCA9IGluc3RhbmNlLm9uU2Nyb2xsKClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4gaW5zdGFuY2Uub25TY3JvbGwoKSlcblxuICAgIHJldHVybiBpbnN0YW5jZVxufVxuIiwiZXhwb3J0IGNsYXNzIFNjcm9sbFNweSB7XG4gIGNvbnN0cnVjdG9yKG1lbnUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICghbWVudSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaXJzdCBhcmd1bWVudCBpcyBxdWVyeSBzZWxlY3RvciB0byB5b3VyIG5hdmlnYXRpb24uJylcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlY29uZCBhcmd1bWVudCBtdXN0IGJlIGluc3RhbmNlIG9mIE9iamVjdC4nKVxuICAgIH1cblxuICAgIGxldCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIHNlY3Rpb25DbGFzczogJy5zY3JvbGxzcHknLFxuICAgICAgbWVudUFjdGl2ZVRhcmdldDogJ2xpID4gYScsXG4gICAgICBvZmZzZXQ6IDAsXG4gICAgICBocmVmQXR0cmlidXRlOiAnaHJlZicsXG4gICAgICBhY3RpdmVDbGFzczogJ2FjdGl2ZSdcbiAgICB9XG5cbiAgICB0aGlzLm1lbnVMaXN0ID0gbWVudSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gbWVudSA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWVudSlcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucylcbiAgICB0aGlzLnNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLm9wdGlvbnMuc2VjdGlvbkNsYXNzKVxuICB9XG5cbiAgb25TY3JvbGwoKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IHRoaXMuZ2V0U2VjdGlvbkluVmlldygpXG4gICAgY29uc3QgbWVudUl0ZW0gPSB0aGlzLmdldE1lbnVJdGVtQnlTZWN0aW9uKHNlY3Rpb24pXG5cbiAgICBpZiAobWVudUl0ZW0pIHtcbiAgICAgIHRoaXMucmVtb3ZlQ3VycmVudEFjdGl2ZSh7IGlnbm9yZTogbWVudUl0ZW0gfSlcbiAgICAgIHRoaXMuc2V0QWN0aXZlKG1lbnVJdGVtKVxuICAgIH1cbiAgfVxuXG4gIGdldE1lbnVJdGVtQnlTZWN0aW9uKHNlY3Rpb24pIHtcbiAgICBpZiAoIXNlY3Rpb24pIHJldHVyblxuICAgIGNvbnN0IHNlY3Rpb25JZCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKCdpZCcpXG4gICAgcmV0dXJuIHRoaXMubWVudUxpc3QucXVlcnlTZWxlY3RvcihgWyR7dGhpcy5vcHRpb25zLmhyZWZBdHRyaWJ1dGV9PVwiIyR7c2VjdGlvbklkfVwiXWApXG4gIH1cblxuICBnZXRTZWN0aW9uSW5WaWV3KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc3RhcnRBdCA9IHRoaXMuc2VjdGlvbnNbaV0ub2Zmc2V0VG9wXG4gICAgICBjb25zdCBlbmRBdCA9IHN0YXJ0QXQgKyB0aGlzLnNlY3Rpb25zW2ldLm9mZnNldEhlaWdodFxuICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3ApICsgdGhpcy5vcHRpb25zLm9mZnNldFxuICAgICAgY29uc3QgaXNJblZpZXcgPSBjdXJyZW50UG9zaXRpb24gPiBzdGFydEF0ICYmIGN1cnJlbnRQb3NpdGlvbiA8PSBlbmRBdFxuICAgICAgaWYgKGlzSW5WaWV3KSByZXR1cm4gdGhpcy5zZWN0aW9uc1tpXVxuICAgIH1cbiAgfVxuXG4gIHNldEFjdGl2ZShhY3RpdmVJdGVtKSB7XG4gICAgY29uc3QgaXNBY3RpdmUgPSBhY3RpdmVJdGVtLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3MpXG4gICAgaWYgKCFpc0FjdGl2ZSkgYWN0aXZlSXRlbS5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcylcbiAgfVxuXG4gIHJlbW92ZUN1cnJlbnRBY3RpdmUoeyBpZ25vcmUgfSkge1xuICAgIGNvbnN0IHsgaHJlZkF0dHJpYnV0ZSwgbWVudUFjdGl2ZVRhcmdldCB9ID0gdGhpcy5vcHRpb25zXG4gICAgY29uc3QgaXRlbXMgPSBgJHttZW51QWN0aXZlVGFyZ2V0fS5hY3RpdmU6bm90KFske2hyZWZBdHRyaWJ1dGV9PVwiJHtpZ25vcmUuZ2V0QXR0cmlidXRlKGhyZWZBdHRyaWJ1dGUpfVwiXSlgXG4gICAgY29uc3QgbWVudUl0ZW1zID0gdGhpcy5tZW51TGlzdC5xdWVyeVNlbGVjdG9yQWxsKGl0ZW1zKVxuXG4gICAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3MpKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9