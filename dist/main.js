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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observable */ \"./src/observable.js\");\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observer */ \"./src/observer.js\");\n\n\n\n/**\n * Class repesenting a Circle observer\n *\n * @class Circle\n * @extends {Observer}\n */\nclass Circle extends _observer__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  /**\n   * Update background color of circle\n   *\n   * @param {string} color new color\n   * @memberof Circle\n   */\n  update(color) {\n    this.element.style.backgroundColor = color;\n  }\n}\n\n/**\n * Class repesenting a ColorText observer\n *\n * @class ColorText\n * @extends {Observer}\n */\nclass ColorText extends _observer__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  /**\n   * Update text data and color\n   *\n   * @param {string} color new color\n   * @memberof ColorText\n   */\n  update(color) {\n    this.element.style.color = color;\n    this.element.innerText = `Color: ${color}`;\n  }\n}\n\nconst colorPicker = document.getElementById('color-picker');\n\nconst circle1 = new Circle('circle-1');\nconst circle2 = new Circle('circle-2');\nconst circle3 = new Circle('circle-3');\nconst colorText = new ColorText('color-text');\n\nconst colorObservable = new _observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nconst observers = []; // Array for iterations with all observers\n\nobservers.push(circle1);\nobservers.push(circle2);\nobservers.push(circle3);\nobservers.push(colorText);\n\nobservers.forEach((observer) => {\n  colorObservable.subscribe(observer);\n});\n\nobservers.forEach((observer) => {\n  observer.buttons[0].addEventListener('click', () => {\n    colorObservable.subscribe(observer);\n  });\n  observer.buttons[1].addEventListener('click', () => {\n    colorObservable.unsubscribe(observer);\n  });\n});\n\ncolorPicker.addEventListener('change', (e) => {\n  colorObservable.broadcast(e.target.value);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/observable.js":
/*!***************************!*\
  !*** ./src/observable.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** Class representing a Subject */\nclass Observable {\n  constructor() {\n    this.observers = [];\n  }\n\n  /**\n   * Add subscriber to observers array\n   *\n   * @param {Object} obj object that is added to the array\n   * @memberof Observable\n   */\n  subscribe(obj) {\n    this.observers.push(obj);\n  }\n\n  /**\n   * Remove subscriber to observers array\n   *\n   * @param {Object} obj object that is removed from the array\n   * @memberof Observable\n   */\n  unsubscribe(obj) {\n    const tmpArr = this.observers.slice();\n    this.observers = tmpArr.filter(subcriber => subcriber !== obj);\n  }\n\n  /**\n   * Notify all observers in the array about some event\n   *\n   * @param {*} data data that is passed to observer's function\n   * @memberof Observable\n   */\n  broadcast(data) {\n    // If subscriber's element wasn't found then skip it\n    this.observers.forEach(subscriber => (subscriber.element ? subscriber.update(data) : false));\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Observable);\n\n\n//# sourceURL=webpack:///./src/observable.js?");

/***/ }),

/***/ "./src/observer.js":
/*!*************************!*\
  !*** ./src/observer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** Class representing a Observer */\nclass Observer {\n  constructor(id) {\n    this.element = document.getElementById(id);\n    this.buttons = this.element.previousElementSibling.getElementsByTagName('button');\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Observer);\n\n\n//# sourceURL=webpack:///./src/observer.js?");

/***/ })

/******/ });