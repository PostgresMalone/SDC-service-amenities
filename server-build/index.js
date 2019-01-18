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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/components/amenities.jsx":
/*!*****************************************!*\
  !*** ./client/components/amenities.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _imagesList_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imagesList.jsx */ \"./client/components/imagesList.jsx\");\n/* harmony import */ var _imagesDefault_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imagesDefault.jsx */ \"./client/components/imagesDefault.jsx\");\n/* harmony import */ var _styles_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css.js */ \"./client/components/styles.css.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\n\n\n\nvar Amenities =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Amenities, _React$Component);\n\n  function Amenities(props) {\n    var _this;\n\n    _classCallCheck(this, Amenities);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Amenities).call(this, props));\n    _this.toggleModal = _this.toggleModal.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.scroll = _this.scroll.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.buttonRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n    _this.topRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n    _this.state = {\n      show: false,\n      specialAmenities: {},\n      essentialAmenities: {},\n      totalAmenities: {},\n      toShow: 0,\n      total: 0,\n      urls: {},\n      showState: false\n    };\n    return _this;\n  }\n\n  _createClass(Amenities, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var that = this;\n      jquery__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({\n        url: \"\".concat(document.URL, \"/amenities\")\n      }).done(function (data) {\n        data.special = {};\n        data.essential = {};\n\n        for (var amenity in data.amenities) {\n          if (data.isSpecial[amenity]) {\n            data.special[amenity] = data.amenities[amenity];\n          } else {\n            data.essential[amenity] = data.amenities[amenity];\n          }\n        }\n\n        var total = _objectSpread({}, data.special, data.essential);\n\n        var count = 0;\n\n        for (var key in total) {\n          total[key] ? count++ : null;\n        }\n\n        var toShow = count < 1 ? count : Math.floor(count * 0.6);\n        that.setState({\n          specialAmenities: data.special,\n          essentialAmenities: data.essential,\n          totalAmenities: total,\n          toShow: toShow,\n          total: count,\n          urls: data.URLs\n        });\n      });\n    }\n  }, {\n    key: \"toggleModal\",\n    value: function toggleModal() {\n      if (!this.state.show) {\n        document.body.style.overflow = 'hidden';\n      } else {\n        document.body.style.overflow = 'scroll';\n      }\n\n      this.scroll();\n      this.setState({\n        show: !this.state.show\n      });\n    }\n  }, {\n    key: \"scroll\",\n    value: function scroll() {\n      var that = this;\n      window.scrollTo({\n        top: that.topRef.current.offsetTop,\n        behavior: \"smooth\"\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        ref: this.topRef\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_imagesList_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        special: this.state.specialAmenities,\n        essential: this.state.essentialAmenities,\n        images: this.state.urls,\n        toggle: this.toggleModal,\n        show: this.state.show,\n        scroll: this.scroll\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_imagesDefault_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        total: this.state.totalAmenities,\n        toShow: this.state.toShow,\n        images: this.state.urls\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        style: _styles_css_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].initialButton,\n        ref: this.buttonRef,\n        onMouseOver: function onMouseOver() {\n          return _this2.buttonRef.current.style.textDecoration = 'underline';\n        },\n        onMouseOut: function onMouseOut() {\n          return _this2.buttonRef.current.style.textDecoration = 'none';\n        },\n        onClick: this.toggleModal\n      }, \"Show All \", this.state.total, \" Amenities\"));\n    }\n  }]);\n\n  return Amenities;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Amenities);\n\n//# sourceURL=webpack:///./client/components/amenities.jsx?");

/***/ }),

/***/ "./client/components/imagesDefault.jsx":
/*!*********************************************!*\
  !*** ./client/components/imagesDefault.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css.js */ \"./client/components/styles.css.js\");\n\n\n\nvar imagesDefault = function imagesDefault(props) {\n  var count = 0;\n  var toMap = {};\n\n  for (var key in props.total) {\n    if (props.total[key] && count <= props.toShow) {\n      toMap[key] = props.total[key];\n      count++;\n    }\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: _styles_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].container\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    style: _styles_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].headfonts\n  }, \"Amenities\"), Object.keys(toMap).map(function (amenity) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: amenity,\n      style: {\n        height: '104px',\n        width: '156px'\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      style: _styles_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initialImage,\n      name: amenity,\n      src: props.images[amenity]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: _styles_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initialText\n    }, amenity));\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (imagesDefault);\n\n//# sourceURL=webpack:///./client/components/imagesDefault.jsx?");

/***/ }),

/***/ "./client/components/imagesList.jsx":
/*!******************************************!*\
  !*** ./client/components/imagesList.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css.js */ \"./client/components/styles.css.js\");\n\n\n\nvar imagesList = function imagesList(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: props.show ? _styles_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].modalShow : _styles_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].modalHide\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    style: _styles_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].imageList\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      display: 'block',\n      paddingBottom: '50px'\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    style: _styles_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].modalButton,\n    onClick: function onClick() {\n      props.scroll();\n      props.toggle();\n    }\n  }, \"<\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: _styles_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].modalEntry\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    style: _styles_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].presentTextHeader\n  }, \"Special to this loft\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    style: _styles_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].presentTextHeader\n  }, \"This home has these unique amenities\"), Object.keys(props.special).map(function (amenity) {\n    return props.special[amenity] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: amenity,\n      style: _styles_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].modalEntry\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      style: _styles_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].presentText\n    }, amenity), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      name: amenity,\n      src: props.images[amenity],\n      style: _styles_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].presentImage\n    })) : null;\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    style: _styles_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].presentTextHeader\n  }, \"Essential Amenities\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    style: _styles_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].presentTextHeader\n  }, \"This Airbnb Plus home comes with these amenities\"), Object.keys(props.essential).map(function (amenity) {\n    return props.essential[amenity] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: amenity,\n      style: _styles_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].modalEntry\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      style: _styles_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].presentText\n    }, amenity), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      name: amenity,\n      src: props.images[amenity],\n      style: _styles_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].presentImage\n    })) : null;\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    style: _styles_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].presentTextHeader\n  }, \"Not available\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    style: _styles_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].presentTextHeader\n  }, \"This home doesn't have these amenities\"), Object.keys(props.special).map(function (amenity) {\n    return props.special[amenity] ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: amenity,\n      style: _styles_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].modalEntry\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      style: _styles_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].notPresentText\n    }, amenity), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      name: amenity,\n      src: props.images[amenity],\n      style: _styles_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].notPresentImage\n    }));\n  }), Object.keys(props.essential).map(function (amenity) {\n    return props.essential[amenity] ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: amenity,\n      style: _styles_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].modalEntry\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      style: _styles_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].notPresentText\n    }, amenity), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      name: amenity,\n      src: props.images[amenity],\n      style: _styles_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].notPresentImage\n    }));\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (imagesList);\n\n//# sourceURL=webpack:///./client/components/imagesList.jsx?");

/***/ }),

/***/ "./client/components/styles.css.js":
/*!*****************************************!*\
  !*** ./client/components/styles.css.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar fonts = {\n  fontFamily: 'Circular,\"Helvetica Neue\",Helvetica,Arial,sans-serif',\n  fontSize: '16px',\n  lineHeight: '1.43',\n  color: '#484848',\n  textAlign: 'center'\n};\nvar headfonts = {\n  fontFamily: 'Circular,\"Helvetica Neue\",Helvetica,Arial,sans-serif',\n  fontSize: '36px',\n  lineHeight: '40px',\n  color: '#484848',\n  gridColumn: '1/7',\n  paddingBottom: '20px'\n};\nvar initialImage = {\n  border: '0',\n  boxSizing: 'border-box',\n  width: '100%',\n  height: '100%',\n  verticalAlign: 'middle'\n};\nvar initialText = {\n  fontFamily: 'Circular,\"Helvetica Neue\",Helvetica,Arial,sans-serif',\n  lineHeight: '24px',\n  maxHeight: '48px',\n  overflow: 'hidden',\n  textoverflow: 'ellipsis',\n  boxAlign: 'center',\n  fontSize: '16px',\n  color: '#484848',\n  textAlign: 'center'\n};\nvar modalButton = {\n  backgroundColor: 'white',\n  top: '0',\n  left: '0',\n  border: '0px',\n  padding: '0px',\n  margin: '0px',\n  fontFamily: 'Circular,\"Helvetica Neue\",Helvetica,Arial,sans-serif',\n  fontSize: '40px',\n  color: '#484848',\n  textAlign: 'center',\n  cursor: 'pointer'\n};\nvar initialButton = {\n  backgroundColor: '#fff',\n  fontFamily: 'system-ui',\n  fontWeight: 'bold',\n  fontSize: '20px',\n  color: '#A61D55',\n  border: '0px',\n  margin: '0px',\n  padding: '0px',\n  textAlign: 'left',\n  cursor: 'pointer'\n};\nvar imageList = {\n  position: 'sticky',\n  background: 'white',\n  width: 'auto',\n  margin: 'auto',\n  height: 'auto',\n  fontFamily: 'Circular,\"Helvetica Neue\",Helvetica,Arial,sans-serif',\n  fontSize: '16px',\n  lineHeight: '1.43',\n  color: '#484848'\n};\nvar notPresentText = {\n  width: '300px',\n  gridColumn: '1/3',\n  opacity: '0.5',\n  textDecoration: 'line-through',\n  fontFamily: 'Circular,\"Helvetica Neue\",Helvetica,Arial,sans-serif',\n  fontSize: '16px',\n  lineHeight: '1.43',\n  color: '#484848'\n};\nvar notPresentImage = {\n  gridColumn: '3',\n  opacity: '0.5',\n  height: '64px',\n  width: '64px'\n};\nvar container = {\n  display: 'grid',\n  gridTemplateColumns: 'auto auto auto auto auto auto',\n  gridRowGap: '20px',\n  marginBottom: '100px'\n};\nvar presentTextHeader = {\n  paddingBottom: '10px',\n  gridColumn: '1/5',\n  textAlign: 'left',\n  fontFamily: 'Circular,\"Helvetica Neue\",Helvetica,Arial,sans-serif',\n  fontSize: '24px',\n  lineHeight: '1.43',\n  color: '#484848'\n};\nvar presentText = {\n  width: '300px',\n  gridColumn: '1/3',\n  textAlign: 'left',\n  fontFamily: 'Circular,\"Helvetica Neue\",Helvetica,Arial,sans-serif',\n  fontSize: '16px',\n  lineHeight: '1.43',\n  color: '#484848'\n};\nvar presentImage = {\n  height: '64px',\n  width: '64px'\n};\nvar modalContainer = {\n  display: 'grid',\n  gridTemplateColumns: 'auto auto auto auto auto',\n  gridRowGap: '20px',\n  marginBottom: '100px'\n};\nvar modalEntry = {\n  display: 'grid',\n  marginLeft: '100px',\n  marginBottom: '20px',\n  gridTemplateColumns: 'auto auto auto auto auto',\n  gridColumn: '1/5'\n};\nvar modalShow = {\n  margin: 'auto',\n  position: 'fixed',\n  bottom: '0',\n  right: '0',\n  overflow: 'scroll',\n  zIndex: '1000000',\n  width: '100%',\n  height: '100%',\n  background: 'rgba(0, 0, 0, 0.6)',\n  display: 'block'\n};\nvar modalHide = {\n  display: 'none'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  container: container,\n  fonts: fonts,\n  headfonts: headfonts,\n  modalButton: modalButton,\n  modalShow: modalShow,\n  modalHide: modalHide,\n  modalContainer: modalContainer,\n  modalEntry: modalEntry,\n  presentImage: presentImage,\n  notPresentText: notPresentText,\n  notPresentImage: notPresentImage,\n  presentText: presentText,\n  presentTextHeader: presentTextHeader,\n  imageList: imageList,\n  initialImage: initialImage,\n  initialText: initialText,\n  initialButton: initialButton\n});\n\n//# sourceURL=webpack:///./client/components/styles.css.js?");

/***/ }),

/***/ "./queries/config.js":
/*!***************************!*\
  !*** ./queries/config.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  user: 'lucasparreiradefariaborges',\n  host: 'localhost',\n  database: 'ROOMSAMENITIES',\n  password: ''\n};\n\n//# sourceURL=webpack:///./queries/config.js?");

/***/ }),

/***/ "./queries/queries.js":
/*!****************************!*\
  !*** ./queries/queries.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar _require = __webpack_require__(/*! pg */ \"pg\"),\n    Pool = _require.Pool;\n\nvar redis = __webpack_require__(/*! redis */ \"redis\");\n\nvar bluebird = __webpack_require__(/*! bluebird */ \"bluebird\");\n\nvar _require2 = __webpack_require__(/*! ./config.js */ \"./queries/config.js\"),\n    user = _require2.user,\n    host = _require2.host,\n    database = _require2.database,\n    password = _require2.password;\n\nbluebird.promisifyAll(redis.RedisClient.prototype);\nbluebird.promisifyAll(redis.Multi.prototype);\n\nvar startConnectionToRedis = function startConnectionToRedis() {\n  var client = redis.createClient();\n  client.on(\"error\", function (err) {\n    console.log(\"Error \" + err);\n  });\n  var result = {};\n  result.client = client;\n\n  result.quitConnection = function () {\n    client.quit();\n  };\n\n  return result;\n};\n\nvar startConnectionToDB = function startConnectionToDB() {\n  var pool = new Pool({\n    user: user,\n    host: host,\n    database: database,\n    password: password\n  });\n  pool.on('error', function (err) {\n    console.log('Error', err);\n  });\n  var result = {};\n  result.pool = pool;\n\n  result.endConnection = function () {\n    pool.end();\n  };\n\n  return result;\n};\n\nvar getAmenities =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(roomId, res, data) {\n    var _startConnectionToRed, client, quitConnection, redisResult, _startConnectionToDB, pool, endConnection, _ref2, rows;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _startConnectionToRed = startConnectionToRedis(), client = _startConnectionToRed.client, quitConnection = _startConnectionToRed.quitConnection;\n            _context.next = 3;\n            return client.getAsync(roomId);\n\n          case 3:\n            redisResult = _context.sent;\n\n            if (!redisResult) {\n              _context.next = 10;\n              break;\n            }\n\n            quitConnection();\n            res.status(200);\n            data.amenities = JSON.parse(redisResult).amenities;\n            res.json(data);\n            return _context.abrupt(\"return\");\n\n          case 10:\n            _startConnectionToDB = startConnectionToDB(), pool = _startConnectionToDB.pool, endConnection = _startConnectionToDB.endConnection;\n            _context.next = 13;\n            return pool.query(\"SELECT * FROM rooms WHERE id = \".concat(roomId));\n\n          case 13:\n            _ref2 = _context.sent;\n            rows = _ref2.rows;\n            delete rows[0].id;\n            delete rows[0].roomname;\n            endConnection();\n\n            if (!(rows.length === 0)) {\n              _context.next = 23;\n              break;\n            }\n\n            res.status(404);\n            res.send('The room searched doesn\\'t exist!');\n            _context.next = 28;\n            break;\n\n          case 23:\n            res.status(200);\n            data.amenities = rows[0];\n            res.json(data);\n            _context.next = 28;\n            return client.setAsync(roomId, JSON.stringify(data));\n\n          case 28:\n            quitConnection();\n\n          case 29:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  return function getAmenities(_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar getPicturesAmenities =\n/*#__PURE__*/\nfunction () {\n  var _ref3 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(data) {\n    var _startConnectionToDB2, pool, endConnection, _ref4, rows, urls, index, item;\n\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _startConnectionToDB2 = startConnectionToDB(), pool = _startConnectionToDB2.pool, endConnection = _startConnectionToDB2.endConnection;\n            _context2.next = 3;\n            return pool.query(\"SELECT * FROM amenities\");\n\n          case 3:\n            _ref4 = _context2.sent;\n            rows = _ref4.rows;\n            urls = {};\n            data.isSpecial = {};\n\n            for (index in rows) {\n              item = rows[index];\n              urls[item.amenityname] = item.url;\n              data.isSpecial[item.amenityname] = item.isspecial;\n            }\n\n            endConnection();\n            data.URLs = urls;\n\n          case 10:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, this);\n  }));\n\n  return function getPicturesAmenities(_x4) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\nvar postAmenities =\n/*#__PURE__*/\nfunction () {\n  var _ref5 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee3(amenities, res) {\n    var _startConnectionToDB3, pool, endConnection, columns, values;\n\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _startConnectionToDB3 = startConnectionToDB(), pool = _startConnectionToDB3.pool, endConnection = _startConnectionToDB3.endConnection;\n            columns = Object.keys(amenities).join(', ');\n            values = Object.values(amenities).join(', '); // uncomment the following lines if the DB is already seeded\n            // const { rows } = await pool.query(`SELECT MAX(id) FROM rooms`);\n            // const nextId = Number(rows[0].max) + 1;\n\n            _context3.next = 5;\n            return pool.query(\"INSERT INTO rooms (\".concat(columns, \") VALUES (\").concat(values, \")\")).then(function () {\n              res.status(201);\n              res.send('Room row created succesfully!');\n            }).catch(function (err) {\n              console.log('ERROR', err);\n              res.status(400);\n              res.send('You are trying to insert a property which is not available!');\n            });\n\n          case 5:\n            endConnection();\n\n          case 6:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, this);\n  }));\n\n  return function postAmenities(_x5, _x6) {\n    return _ref5.apply(this, arguments);\n  };\n}();\n\nvar updateAmenities =\n/*#__PURE__*/\nfunction () {\n  var _ref6 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee4(roomId, amenities, res) {\n    var _startConnectionToDB4, pool, endConnection, keyValuePairs, amenity;\n\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _startConnectionToDB4 = startConnectionToDB(), pool = _startConnectionToDB4.pool, endConnection = _startConnectionToDB4.endConnection;\n            keyValuePairs = [];\n\n            for (amenity in amenities) {\n              keyValuePairs.push(\"\".concat(amenity, \" = \").concat(amenities[amenity]));\n            }\n\n            _context4.next = 5;\n            return pool.query(\"UPDATE rooms SET \".concat(keyValuePairs.join(', '), \" WHERE id = \").concat(roomId)).then(function (_ref7) {\n              var rowCount = _ref7.rowCount;\n\n              if (!rowCount) {\n                res.status(404);\n                res.send('The room you tried to update doesn\\'t exist.');\n              } else {\n                res.status(200);\n                res.send('Room updated succesfully!');\n              }\n            }).catch(function (err) {\n              console.log('ERROR', err);\n              res.send('The property you are trying to update doesn\\'t exist.');\n            });\n\n          case 5:\n            endConnection();\n\n          case 6:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4, this);\n  }));\n\n  return function updateAmenities(_x7, _x8, _x9) {\n    return _ref6.apply(this, arguments);\n  };\n}();\n\nvar deleteRoom =\n/*#__PURE__*/\nfunction () {\n  var _ref8 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee5(roomId, res) {\n    var _startConnectionToDB5, pool, endConnection, result;\n\n    return regeneratorRuntime.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _startConnectionToDB5 = startConnectionToDB(), pool = _startConnectionToDB5.pool, endConnection = _startConnectionToDB5.endConnection;\n            _context5.next = 3;\n            return pool.query(\"DELETE FROM rooms WHERE id = \".concat(roomId));\n\n          case 3:\n            result = _context5.sent;\n\n            if (!result.rowCount) {\n              res.status(404);\n              res.send('The room you tried to delete doesn\\'t exist!');\n            } else {\n              res.status(200);\n              res.send('Room deleted succesfully!');\n            }\n\n            endConnection();\n\n          case 6:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5, this);\n  }));\n\n  return function deleteRoom(_x10, _x11) {\n    return _ref8.apply(this, arguments);\n  };\n}();\n\nmodule.exports = {\n  getAmenities: getAmenities,\n  getPicturesAmenities: getPicturesAmenities,\n  postAmenities: postAmenities,\n  updateAmenities: updateAmenities,\n  deleteRoom: deleteRoom\n};\n\n//# sourceURL=webpack:///./queries/queries.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n__webpack_require__(/*! newrelic */ \"newrelic\");\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\nvar Express = __webpack_require__(/*! express */ \"express\");\n\nvar BodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar Path = __webpack_require__(/*! path */ \"path\");\n\nvar Partials = __webpack_require__(/*! express-partials */ \"express-partials\");\n\nvar _Promise = __webpack_require__(/*! bluebird */ \"bluebird\");\n\nvar React = __webpack_require__(/*! react */ \"react\");\n\nvar _require = __webpack_require__(/*! react-dom/server */ \"react-dom/server\"),\n    renderToString = _require.renderToString;\n\nvar Amenities = __webpack_require__(/*! ../client/components/amenities.jsx */ \"./client/components/amenities.jsx\");\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar path = __webpack_require__(/*! path */ \"path\"); // const db = require('../database/db.js');\n\n\nvar app = Express();\nvar port = 4420; // import query functions\n\nvar _require2 = __webpack_require__(/*! ../queries/queries.js */ \"./queries/queries.js\"),\n    getAmenities = _require2.getAmenities,\n    getPicturesAmenities = _require2.getPicturesAmenities,\n    postAmenities = _require2.postAmenities,\n    updateAmenities = _require2.updateAmenities,\n    deleteRoom = _require2.deleteRoom; // app.use(Express.static(__dirname + '/../public'));\n\n\napp.use(BodyParser.json());\napp.use(BodyParser.urlencoded({\n  extended: true\n}));\napp.get('/', function (req, res) {\n  // res.sendFile(Path.resolve(__dirname + '/../public/index.html'));\n  var reactDOM = renderToString(React.createElement(Amenities, null)); // const indexFile = path.resolve('../public/index.html');\n  // fs.readFile('../public/index.html', 'utf8', (err, data) => {\n  //   if (err) {\n  //     console.error('Something went wrong:', err);\n  //     return res.status(500).send('Oops, better luck next time!');\n  //   }\n  //   res.writeHead( 200, { \"Content-Type\": \"text/html\" });\n  //   return res.send(\n  //     data.replace('<div id=\"Amenities\"></div>', `<div id=\"Amenities\">${reactDOM}</div>`)\n  //   );\n  // });\n\n  res.end(htmlTemplate(reactDOM)); // res.end('<h1>Hello World!</h1>');\n});\napp.get('/:Id', function (req, res) {\n  res.sendFile(Path.resolve(__dirname + '/../public/index.html'));\n});\napp.get('/:Id/amenities/',\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var Id, data;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            Id = req.params.Id;\n            data = {};\n            _context.next = 4;\n            return getPicturesAmenities(data);\n\n          case 4:\n            getAmenities(Id, res, data);\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\napp.get('//amenities/',\n/*#__PURE__*/\nfunction () {\n  var _ref2 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(req, res) {\n    var data;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            data = {};\n            _context2.next = 3;\n            return getPicturesAmenities(data);\n\n          case 3:\n            getAmenities(2, res, data);\n\n          case 4:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, this);\n  }));\n\n  return function (_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}()); // get amenities for one room\n\napp.get('/rooms/:roomId', function (req, res) {\n  var roomId = req.params.roomId;\n  getAmenities(roomId, res, {});\n}); // create a new room row in the table\n\napp.post('/rooms', function (req, res) {\n  var amenities = req.body;\n  postAmenities(amenities, res);\n}); // update the amenities of one room\n\napp.patch('/rooms/:roomId', function (req, res) {\n  var roomId = req.params.roomId;\n  var amenities = req.body.amenities;\n  updateAmenities(roomId, amenities, res);\n}); // delete a new room row in the table\n\napp.delete('/rooms/:roomId', function (req, res) {\n  var roomId = req.params.roomId;\n  deleteRoom(roomId, res);\n});\napp.listen(port, function () {\n  return console.log('server is listening at port:' + port);\n});\n\nvar htmlTemplate = function htmlTemplate(reactDOM) {\n  return \"\\n<!DOCTYPE html>\\n  <html>\\n    <head>\\n    </head>\\n    <body>\\n      <div id=\\\"Amenities\\\">\".concat(reactDOM, \"</div>\\n      <script type=\\\"text/javascript\\\" src=\\\"bundle.js\\\"></script>\\n    </body>\\n  </html>\\n  \");\n};\n\nmodule.exports.app = app;\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bluebird\");\n\n//# sourceURL=webpack:///external_%22bluebird%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-partials":
/*!***********************************!*\
  !*** external "express-partials" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-partials\");\n\n//# sourceURL=webpack:///external_%22express-partials%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jquery\");\n\n//# sourceURL=webpack:///external_%22jquery%22?");

/***/ }),

/***/ "newrelic":
/*!***************************!*\
  !*** external "newrelic" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"newrelic\");\n\n//# sourceURL=webpack:///external_%22newrelic%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pg\");\n\n//# sourceURL=webpack:///external_%22pg%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redis\");\n\n//# sourceURL=webpack:///external_%22redis%22?");

/***/ })

/******/ });