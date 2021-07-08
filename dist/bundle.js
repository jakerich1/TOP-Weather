/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Roboto\", sans-serif;\n}\n\nhtml,\nbody {\n  min-height: 100%;\n}\n\nbody {\n  background: #4a4969;\n  background: linear-gradient(180deg, #4a4969 0%, #7072ab 50%, #cd82a0 100%);\n  padding: 1em;\n}\n@media only screen and (max-width: 1120px) {\n  body {\n    padding: 0;\n  }\n}\nbody .container {\n  width: 80%;\n  margin: auto;\n}\n@media only screen and (max-width: 1120px) {\n  body .container {\n    width: 100%;\n  }\n  body .container > * {\n    border-radius: 0 !important;\n  }\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  background: #ffffff33;\n  padding: 0.5em;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 36px;\n  color: white;\n  border-radius: 16px;\n}\n@media only screen and (max-width: 860px) {\n  header {\n    flex-direction: column;\n  }\n}\n@media only screen and (max-width: 500px) {\n  header {\n    padding: 0;\n  }\n}\nheader .search-cont {\n  display: flex;\n  align-items: stretch;\n}\nheader .search-cont > * {\n  display: block;\n}\n@media only screen and (max-width: 860px) {\n  header .search-cont {\n    margin-top: 0.5em;\n  }\n}\nheader .search-cont span {\n  margin-right: 10px;\n  font-weight: 100;\n}\n@media only screen and (max-width: 500px) {\n  header .search-cont span {\n    display: none;\n  }\n}\nheader .search-cont input {\n  width: 270px;\n  border: none;\n  border-bottom: 1px solid #ffffff;\n  background: none;\n  font-size: 30px;\n  font-weight: 100;\n  color: #ffffff;\n}\n@media only screen and (max-width: 500px) {\n  header .search-cont input {\n    width: 200px;\n    font-size: 20px;\n  }\n}\nheader .search-cont input:focus {\n  outline: none;\n}\nheader .search-cont button {\n  border: 1px solid #ffffff;\n  background: none;\n  padding: 0 0.5em;\n  color: #ffffff;\n  font-weight: 100;\n  font-size: 24px;\n  cursor: pointer;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n  transition: all 0.15s ease-in-out;\n}\n@media only screen and (max-width: 500px) {\n  header .search-cont button {\n    font-size: 20px;\n  }\n}\nheader .search-cont button:hover {\n  background: #ffffff33;\n}\nheader .summary-cont {\n  display: flex;\n  align-items: center;\n}\n@media only screen and (max-width: 860px) {\n  header .summary-cont {\n    margin-top: 8px;\n  }\n}\nheader .summary-cont > * {\n  display: block;\n  font-weight: 300;\n}\nheader .summary-cont .weather-label {\n  font-size: 24px;\n  margin-right: 16px;\n}\nheader .summary-cont .temp-label {\n  font-size: 62px;\n  margin-right: 16px;\n}\n@media only screen and (max-width: 500px) {\n  header .summary-cont .temp-label {\n    font-size: 36px;\n  }\n}\nheader .summary-cont .hilo-label {\n  font-size: 24px;\n}\n\nmain {\n  display: flex;\n  width: 100%;\n  background: #ffffff33;\n  padding: 0.5em;\n  border-radius: 16px;\n  margin-top: 16px;\n  font-size: 36px;\n  color: white;\n}\nmain .snap-frame {\n  display: flex;\n  width: 100%;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  padding: 0 0 8px 0;\n  scroll-snap-type: x mandatory;\n}\nmain .snap-frame .snap-block {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5em;\n  background: #ffffff33;\n  border-radius: 8px;\n  margin-right: 8px;\n  scroll-snap-align: center;\n}\n@media only screen and (max-width: 500px) {\n  main .snap-frame .snap-block {\n    padding: 0.25em;\n  }\n}\nmain .snap-frame .snap-block .block-time {\n  font-weight: 300;\n  font-size: 18px;\n}\nmain .snap-frame .snap-block .block-rain {\n  font-weight: 700;\n  font-size: 16px;\n  color: #5656a7;\n}\nmain .snap-frame .snap-block .block-weather {\n  font-weight: 300;\n  font-size: 21px;\n}\nmain .snap-frame .snap-block .block-temp {\n  font-weight: 300;\n  font-size: 21px;\n}\n\n.week {\n  width: 100%;\n  background: #ffffff33;\n  padding: 0.5em;\n  border-radius: 16px;\n  margin-top: 16px;\n  font-size: 36px;\n  color: white;\n}\n.week #seven-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.week #seven-table td,\n.week #seven-table th {\n  text-align: left;\n  font-weight: 500;\n  font-size: 32px;\n  padding: 0.25em 0;\n}\n@media only screen and (max-width: 600px) {\n  .week #seven-table thead {\n    display: none;\n  }\n}\n.week #seven-table thead tr {\n  border-bottom: 1px solid #ffffff;\n}\n.week #seven-table tbody tr {\n  border-bottom: 1px solid #ffffff44;\n}\n.week #seven-table tbody tr td {\n  padding: 1em 1em 1em 0;\n  font-size: 18px;\n  font-weight: 300;\n}", "",{"version":3,"sources":["webpack://./src/style/_base.scss","webpack://./src/style/style.scss","webpack://./src/style/layout/_header.scss","webpack://./src/style/layout/_main.scss","webpack://./src/style/layout/_week.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;EACA,iCAAA;ACEJ;;ADCA;;EAEI,gBAAA;ACEJ;;ADCA;EACI,mBAAA;EACA,0EAAA;EACA,YAAA;ACEJ;ADAI;EALJ;IAMQ,UAAA;ECGN;AACF;ADDI;EACI,UAAA;EACA,YAAA;ACGR;ADDQ;EAJJ;IAKQ,WAAA;ECIV;EDFU;IACI,2BAAA;ECId;AACF;;AClCA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,WAAA;EACA,qBAAA;EACA,cAAA;EACA,iCAAA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;ADqCJ;ACnCI;EACI;IACI,sBAAA;EDqCV;AACF;AClCI;EACI;IACI,UAAA;EDoCV;AACF;ACjCI;EACI,aAAA;EACA,oBAAA;ADmCR;ACjCQ;EACI,cAAA;ADmCZ;AChCQ;EACI;IACI,iBAAA;EDkCd;AACF;AC/BQ;EACI,kBAAA;EACA,gBAAA;ADiCZ;AC/BY;EACI;IACI,aAAA;EDiClB;AACF;AC7BQ;EACI,YAAA;EACA,YAAA;EACA,gCAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,cAAA;AD+BZ;AC7BY;EACI;IACI,YAAA;IACA,eAAA;ED+BlB;AACF;AC5BY;EACI,aAAA;AD8BhB;AC1BQ;EACI,yBAAA;EACA,gBAAA;EACA,gBAAA;EACA,cAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,4BAAA;EACA,+BAAA;EACA,iCAAA;AD4BZ;AC1BY;EACI;IACI,eAAA;ED4BlB;AACF;ACzBY;EACI,qBAAA;AD2BhB;ACtBI;EACI,aAAA;EACA,mBAAA;ADwBR;ACtBQ;EACI;IACI,eAAA;EDwBd;AACF;ACrBQ;EACI,cAAA;EACA,gBAAA;ADuBZ;ACpBQ;EACI,eAAA;EACA,kBAAA;ADsBZ;ACnBQ;EACI,eAAA;EACA,kBAAA;ADqBZ;ACnBY;EACI;IACI,eAAA;EDqBlB;AACF;ACjBQ;EACI,eAAA;ADmBZ;;AEjJA;EACI,aAAA;EACA,WAAA;EACA,qBAAA;EACA,cAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,YAAA;AFoJJ;AElJI;EACI,aAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,6BAAA;AFoJR;AElJQ;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAAA;EACA,qBAAA;EACA,kBAAA;EACA,iBAAA;EACA,yBAAA;AFoJZ;AElJY;EACI;IACI,eAAA;EFoJlB;AACF;AEjJY;EACI,gBAAA;EACA,eAAA;AFmJhB;AEhJY;EACI,gBAAA;EACA,eAAA;EACA,cAAA;AFkJhB;AE/IY;EACI,gBAAA;EACA,eAAA;AFiJhB;AE9IY;EACI,gBAAA;EACA,eAAA;AFgJhB;;AGrMA;EACI,WAAA;EACA,qBAAA;EACA,cAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,YAAA;AHwMJ;AGtMI;EACI,WAAA;EACA,yBAAA;AHwMR;AGtMQ;;EAEI,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;AHwMZ;AGnMY;EACI;IACI,aAAA;EHqMlB;AACF;AGlMY;EACI,gCAAA;AHoMhB;AG9LY;EACI,kCAAA;AHgMhB;AG9LgB;EACI,sBAAA;EACA,eAAA;EACA,gBAAA;AHgMpB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n}\n\nhtml,\nbody {\n    min-height: 100%;\n}\n\nbody {\n    background: rgb(74, 73, 105);\n    background: linear-gradient(180deg, rgba(74, 73, 105, 1) 0%, rgba(112, 114, 171, 1) 50%, rgba(205, 130, 160, 1) 100%);\n    padding: 1em;\n\n    @media only screen and (max-width: 1120px) {\n        padding: 0;    \n    }\n\n    .container {\n        width: 80%;\n        margin: auto;\n\n        @media only screen and (max-width: 1120px) {\n            width: 100%;    \n\n            &>*{\n                border-radius: 0 !important;\n            }\n        }\n    }\n}","@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');\n@import './base';\n@import './layout/header';\n@import './layout/main';\n@import './layout/week';\n","header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    background: #ffffff33;\n    padding: 0.5em;\n    font-family: 'Roboto', sans-serif;\n    font-size: 36px;\n    color: white;\n    border-radius: 16px;\n\n    @media only screen and (max-width: 860px) {\n        & {\n            flex-direction: column;\n        }\n    }\n\n    @media only screen and (max-width: 500px) {\n        & {\n            padding: 0;\n        }\n    }\n\n    .search-cont {\n        display: flex;\n        align-items: stretch;\n\n        &>* {\n            display: block;\n        }\n\n        @media only screen and (max-width: 860px) {\n            & {\n                margin-top: 0.5em;\n            }\n        }\n\n        span {\n            margin-right: 10px;\n            font-weight: 100;\n\n            @media only screen and (max-width: 500px) {\n                & {\n                    display: none;\n                }\n            }\n        }\n\n        input {\n            width: 270px;\n            border: none;\n            border-bottom: 1px solid #ffffff;\n            background: none;\n            font-size: 30px;\n            font-weight: 100;\n            color: #ffffff;\n\n            @media only screen and (max-width: 500px) {\n                & {\n                    width: 200px;\n                    font-size: 20px;\n                }\n            }\n\n            &:focus {\n                outline: none;\n            }\n        }\n\n        button {\n            border: 1px solid #ffffff;\n            background: none;\n            padding: 0 0.5em;\n            color: #ffffff;\n            font-weight: 100;\n            font-size: 24px;\n            cursor: pointer;\n            border-top-right-radius: 8px;\n            border-bottom-right-radius: 8px;\n            transition: all 0.15s ease-in-out;\n\n            @media only screen and (max-width: 500px) {\n                & {\n                    font-size: 20px;\n                }\n            }\n\n            &:hover {\n                background: #ffffff33;\n            }\n        }\n    }\n\n    .summary-cont {\n        display: flex;\n        align-items: center;\n\n        @media only screen and (max-width: 860px) {\n            & {\n                margin-top: 8px;\n            }\n        }\n\n        &>* {\n            display: block;\n            font-weight: 300;\n        }\n\n        .weather-label {\n            font-size: 24px;\n            margin-right: 16px;\n        }\n\n        .temp-label {\n            font-size: 62px;\n            margin-right: 16px;\n\n            @media only screen and (max-width: 500px) {\n                & {\n                    font-size: 36px;\n                }\n            }\n        }\n\n        .hilo-label {\n            font-size: 24px;\n        }\n    }\n}","main {\n    display: flex;\n    width: 100%;\n    background: #ffffff33;\n    padding: 0.5em;\n    border-radius: 16px;\n    margin-top: 16px;\n    font-size: 36px;\n    color: white;\n\n    .snap-frame {\n        display: flex;\n        width: 100%;\n        overflow-x: scroll;\n        overflow-y: hidden;\n        padding: 0 0 8px 0;\n        scroll-snap-type: x mandatory;\n\n        .snap-block {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n            padding: 0.5em;\n            background: #ffffff33;\n            border-radius: 8px;\n            margin-right: 8px;\n            scroll-snap-align: center;\n\n            @media only screen and (max-width: 500px) {\n                & {\n                    padding: 0.25em;\n                }\n            }\n\n            .block-time {\n                font-weight: 300;\n                font-size: 18px;\n            }\n\n            .block-rain {\n                font-weight: 700;\n                font-size: 16px;\n                color: rgb(86, 86, 167);\n            }\n\n            .block-weather {\n                font-weight: 300;\n                font-size: 21px;\n            }\n\n            .block-temp {\n                font-weight: 300;\n                font-size: 21px;\n            }\n        }\n    }\n}",".week {\n    width: 100%;\n    background: #ffffff33;\n    padding: 0.5em;\n    border-radius: 16px;\n    margin-top: 16px;\n    font-size: 36px;\n    color: white;\n\n    #seven-table {\n        width: 100%;\n        border-collapse: collapse;\n\n        td,\n        th {\n            text-align: left;\n            font-weight: 500;\n            font-size: 32px;\n            padding: 0.25em 0;\n        }\n\n        thead {\n\n            @media only screen and (max-width: 600px) {\n                & {\n                    display: none;\n                }\n            }\n\n            tr {\n                border-bottom: 1px solid #ffffff;\n            }\n        }\n\n        tbody {\n\n            tr {\n                border-bottom: 1px solid #ffffff44;\n\n                td {\n                    padding: 1em 1em 1em 0;\n                    font-size: 18px;\n                    font-weight: 300;\n                }\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
function header() {
  const headerContainer = document.createElement('header');

  // Search container
  const searchContainer = document.createElement('div');
  searchContainer.className = 'search-cont';

  const searchLabel = document.createElement('span');
  searchLabel.id = 'search-label';
  searchLabel.innerText = 'City:';
  searchContainer.appendChild(searchLabel);

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Enter city name';
  searchContainer.appendChild(searchInput);

  const searchButton = document.createElement('button');
  searchButton.innerText = 'search';
  searchContainer.appendChild(searchButton);

  headerContainer.appendChild(searchContainer);

  // Summary weather data
  const summaryContainer = document.createElement('div');
  summaryContainer.className = 'summary-cont';

  const weatherLabel = document.createElement('span');
  weatherLabel.className = 'weather-label';
  weatherLabel.innerText = 'Cloudy';
  summaryContainer.appendChild(weatherLabel);

  const tempLabel = document.createElement('span');
  tempLabel.className = 'temp-label';
  tempLabel.innerText = '19°';
  summaryContainer.appendChild(tempLabel);

  const hiloLabel = document.createElement('span');
  hiloLabel.className = 'hilo-label';
  hiloLabel.innerText = 'H:21 L:13°';
  summaryContainer.appendChild(hiloLabel);

  headerContainer.appendChild(summaryContainer);

  return headerContainer;
}


/***/ }),

/***/ "./src/components/main.js":
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ twentyFourHr)
/* harmony export */ });
function twentyFourHr() {
  const twentyFourHrContainer = document.createElement('main');

  // Scroll snap container
  const snapWrap = document.createElement('div');
  snapWrap.className = 'snap-frame';

  for (let i = 0; i < 24; i += 1) {
    const element = document.createElement('div');
    element.className = 'snap-block';

    // Time label
    const time = document.createElement('div');
    time.className = 'block-time';
    time.innerText = i;
    element.appendChild(time);

    // Rain label
    const rain = document.createElement('div');
    rain.innerText = '36%';
    rain.className = 'block-rain';
    element.appendChild(rain);

    // Temperature label
    const weather = document.createElement('div');
    weather.innerText = 'sunny';
    weather.className = 'block-weather';
    element.appendChild(weather);

    // Temperature label
    const temp = document.createElement('div');
    temp.innerText = '20°';
    temp.className = 'block-temp';
    element.appendChild(temp);

    snapWrap.appendChild(element);
  }

  twentyFourHrContainer.appendChild(snapWrap);

  return twentyFourHrContainer;
}


/***/ }),

/***/ "./src/components/week.js":
/*!********************************!*\
  !*** ./src/components/week.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ week)
/* harmony export */ });
function week() {
  const weekContainer = document.createElement('div');
  weekContainer.className = 'week';

  // Table container
  const table = document.createElement('table');
  table.id = 'seven-table';

  // Table heading
  const tableHead = document.createElement('thead');
  const tHeadRow = document.createElement('tr');
  const dayCol = document.createElement('th');
  dayCol.innerText = 'Day';
  tHeadRow.appendChild(dayCol);
  const weatherCol = document.createElement('th');
  weatherCol.innerText = 'Weather';
  tHeadRow.appendChild(weatherCol);
  const rainCol = document.createElement('th');
  rainCol.innerText = 'Rain';
  tHeadRow.appendChild(rainCol);
  const tempCol = document.createElement('th');
  tempCol.innerText = 'Temperature';
  tHeadRow.appendChild(tempCol);
  tableHead.appendChild(tHeadRow);
  table.appendChild(tableHead);

  // Table body
  const tableBody = document.createElement('tbody');
  table.appendChild(tableBody);

  // Row

  for (let i = 0; i < 7; i += 1) {
    const body1 = document.createElement('tr');
    const r1c1 = document.createElement('td');
    r1c1.innerText = 'Monday';
    body1.appendChild(r1c1);
    const r1c2 = document.createElement('td');
    r1c2.innerText = 'Sunny';
    body1.appendChild(r1c2);
    const r1c3 = document.createElement('td');
    r1c3.innerText = '43%';
    body1.appendChild(r1c3);
    const r1c4 = document.createElement('td');
    r1c4.innerText = '19°';
    body1.appendChild(r1c4);
    tableBody.appendChild(body1);
  }

  weekContainer.appendChild(table);

  return weekContainer;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.scss */ "./src/style/style.scss");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ "./src/components/header.js");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main */ "./src/components/main.js");
/* harmony import */ var _components_week__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/week */ "./src/components/week.js");





function component() {
  const container = document.createElement('div');
  container.classList.add('container');

  container.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_1__.default)());
  container.appendChild((0,_components_main__WEBPACK_IMPORTED_MODULE_2__.default)());
  container.appendChild((0,_components_week__WEBPACK_IMPORTED_MODULE_3__.default)());

  return container;
}

document.body.appendChild(component());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UT1AtV2VhdGhlci8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzIiwid2VicGFjazovL1RPUC1XZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9UT1AtV2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL1RPUC1XZWF0aGVyLy4vc3JjL3N0eWxlL3N0eWxlLnNjc3M/NzQ3ZSIsIndlYnBhY2s6Ly9UT1AtV2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qcyIsIndlYnBhY2s6Ly9UT1AtV2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9UT1AtV2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9UT1AtV2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL1RPUC1XZWF0aGVyLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL1RPUC1XZWF0aGVyLy4vc3JjL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly9UT1AtV2VhdGhlci8uL3NyYy9jb21wb25lbnRzL3dlZWsuanMiLCJ3ZWJwYWNrOi8vVE9QLVdlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVE9QLVdlYXRoZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vVE9QLVdlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1RPUC1XZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVE9QLVdlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9UT1AtV2VhdGhlci8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLCtHQUErRyxJQUFJLElBQUksSUFBSSxrQkFBa0I7QUFDN0k7QUFDQSw2Q0FBNkMsY0FBYyxlQUFlLDJCQUEyQix3Q0FBd0MsR0FBRyxpQkFBaUIscUJBQXFCLEdBQUcsVUFBVSx3QkFBd0IsK0VBQStFLGlCQUFpQixHQUFHLDhDQUE4QyxVQUFVLGlCQUFpQixLQUFLLEdBQUcsbUJBQW1CLGVBQWUsaUJBQWlCLEdBQUcsOENBQThDLHFCQUFxQixrQkFBa0IsS0FBSyx5QkFBeUIsa0NBQWtDLEtBQUssR0FBRyxZQUFZLGtCQUFrQixtQ0FBbUMsd0JBQXdCLGdCQUFnQiwwQkFBMEIsbUJBQW1CLHdDQUF3QyxvQkFBb0IsaUJBQWlCLHdCQUF3QixHQUFHLDZDQUE2QyxZQUFZLDZCQUE2QixLQUFLLEdBQUcsNkNBQTZDLFlBQVksaUJBQWlCLEtBQUssR0FBRyx1QkFBdUIsa0JBQWtCLHlCQUF5QixHQUFHLDJCQUEyQixtQkFBbUIsR0FBRyw2Q0FBNkMseUJBQXlCLHdCQUF3QixLQUFLLEdBQUcsNEJBQTRCLHVCQUF1QixxQkFBcUIsR0FBRyw2Q0FBNkMsOEJBQThCLG9CQUFvQixLQUFLLEdBQUcsNkJBQTZCLGlCQUFpQixpQkFBaUIscUNBQXFDLHFCQUFxQixvQkFBb0IscUJBQXFCLG1CQUFtQixHQUFHLDZDQUE2QywrQkFBK0IsbUJBQW1CLHNCQUFzQixLQUFLLEdBQUcsbUNBQW1DLGtCQUFrQixHQUFHLDhCQUE4Qiw4QkFBOEIscUJBQXFCLHFCQUFxQixtQkFBbUIscUJBQXFCLG9CQUFvQixvQkFBb0IsaUNBQWlDLG9DQUFvQyxzQ0FBc0MsR0FBRyw2Q0FBNkMsZ0NBQWdDLHNCQUFzQixLQUFLLEdBQUcsb0NBQW9DLDBCQUEwQixHQUFHLHdCQUF3QixrQkFBa0Isd0JBQXdCLEdBQUcsNkNBQTZDLDBCQUEwQixzQkFBc0IsS0FBSyxHQUFHLDRCQUE0QixtQkFBbUIscUJBQXFCLEdBQUcsdUNBQXVDLG9CQUFvQix1QkFBdUIsR0FBRyxvQ0FBb0Msb0JBQW9CLHVCQUF1QixHQUFHLDZDQUE2QyxzQ0FBc0Msc0JBQXNCLEtBQUssR0FBRyxvQ0FBb0Msb0JBQW9CLEdBQUcsVUFBVSxrQkFBa0IsZ0JBQWdCLDBCQUEwQixtQkFBbUIsd0JBQXdCLHFCQUFxQixvQkFBb0IsaUJBQWlCLEdBQUcsb0JBQW9CLGtCQUFrQixnQkFBZ0IsdUJBQXVCLHVCQUF1Qix1QkFBdUIsa0NBQWtDLEdBQUcsZ0NBQWdDLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixtQkFBbUIsMEJBQTBCLHVCQUF1QixzQkFBc0IsOEJBQThCLEdBQUcsNkNBQTZDLGtDQUFrQyxzQkFBc0IsS0FBSyxHQUFHLDRDQUE0QyxxQkFBcUIsb0JBQW9CLEdBQUcsNENBQTRDLHFCQUFxQixvQkFBb0IsbUJBQW1CLEdBQUcsK0NBQStDLHFCQUFxQixvQkFBb0IsR0FBRyw0Q0FBNEMscUJBQXFCLG9CQUFvQixHQUFHLFdBQVcsZ0JBQWdCLDBCQUEwQixtQkFBbUIsd0JBQXdCLHFCQUFxQixvQkFBb0IsaUJBQWlCLEdBQUcsc0JBQXNCLGdCQUFnQiw4QkFBOEIsR0FBRyxpREFBaUQscUJBQXFCLHFCQUFxQixvQkFBb0Isc0JBQXNCLEdBQUcsNkNBQTZDLDhCQUE4QixvQkFBb0IsS0FBSyxHQUFHLCtCQUErQixxQ0FBcUMsR0FBRywrQkFBK0IsdUNBQXVDLEdBQUcsa0NBQWtDLDJCQUEyQixvQkFBb0IscUJBQXFCLEdBQUcsT0FBTywwUEFBMFAsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssTUFBTSxXQUFXLFVBQVUs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O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7O1VDcERBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNONEI7QUFDYTtBQUNJO0FBQ1I7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsMkRBQU07QUFDOUIsd0JBQXdCLHlEQUFZO0FBQ3BDLHdCQUF3Qix5REFBSTs7QUFFNUI7QUFDQTs7QUFFQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogIzRhNDk2OTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM0YTQ5NjkgMCUsICM3MDcyYWIgNTAlLCAjY2Q4MmEwIDEwMCUpO1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMjBweCkge1xcbiAgYm9keSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxufVxcbmJvZHkgLmNvbnRhaW5lciB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMjBweCkge1xcbiAgYm9keSAuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICBib2R5IC5jb250YWluZXIgPiAqIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmYzMztcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NjBweCkge1xcbiAgaGVhZGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG59XFxuaGVhZGVyIC5zZWFyY2gtY29udCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcbmhlYWRlciAuc2VhcmNoLWNvbnQgPiAqIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg2MHB4KSB7XFxuICBoZWFkZXIgLnNlYXJjaC1jb250IHtcXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XFxuICB9XFxufVxcbmhlYWRlciAuc2VhcmNoLWNvbnQgc3BhbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICBoZWFkZXIgLnNlYXJjaC1jb250IHNwYW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5oZWFkZXIgLnNlYXJjaC1jb250IGlucHV0IHtcXG4gIHdpZHRoOiAyNzBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgaGVhZGVyIC5zZWFyY2gtY29udCBpbnB1dCB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgfVxcbn1cXG5oZWFkZXIgLnNlYXJjaC1jb250IGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbmhlYWRlciAuc2VhcmNoLWNvbnQgYnV0dG9uIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgcGFkZGluZzogMCAwLjVlbTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICBoZWFkZXIgLnNlYXJjaC1jb250IGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG59XFxuaGVhZGVyIC5zZWFyY2gtY29udCBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjMzO1xcbn1cXG5oZWFkZXIgLnN1bW1hcnktY29udCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NjBweCkge1xcbiAgaGVhZGVyIC5zdW1tYXJ5LWNvbnQge1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICB9XFxufVxcbmhlYWRlciAuc3VtbWFyeS1jb250ID4gKiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcbmhlYWRlciAuc3VtbWFyeS1jb250IC53ZWF0aGVyLWxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIG1hcmdpbi1yaWdodDogMTZweDtcXG59XFxuaGVhZGVyIC5zdW1tYXJ5LWNvbnQgLnRlbXAtbGFiZWwge1xcbiAgZm9udC1zaXplOiA2MnB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICBoZWFkZXIgLnN1bW1hcnktY29udCAudGVtcC1sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gIH1cXG59XFxuaGVhZGVyIC5zdW1tYXJ5LWNvbnQgLmhpbG8tbGFiZWwge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmYzMztcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbm1haW4gLnNuYXAtZnJhbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgcGFkZGluZzogMCAwIDhweCAwO1xcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XFxufVxcbm1haW4gLnNuYXAtZnJhbWUgLnNuYXAtYmxvY2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmYzMztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IGNlbnRlcjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgbWFpbiAuc25hcC1mcmFtZSAuc25hcC1ibG9jayB7XFxuICAgIHBhZGRpbmc6IDAuMjVlbTtcXG4gIH1cXG59XFxubWFpbiAuc25hcC1mcmFtZSAuc25hcC1ibG9jayAuYmxvY2stdGltZSB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5tYWluIC5zbmFwLWZyYW1lIC5zbmFwLWJsb2NrIC5ibG9jay1yYWluIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogIzU2NTZhNztcXG59XFxubWFpbiAuc25hcC1mcmFtZSAuc25hcC1ibG9jayAuYmxvY2std2VhdGhlciB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbn1cXG5tYWluIC5zbmFwLWZyYW1lIC5zbmFwLWJsb2NrIC5ibG9jay10ZW1wIHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXNpemU6IDIxcHg7XFxufVxcblxcbi53ZWVrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjMzO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLndlZWsgI3NldmVuLXRhYmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuLndlZWsgI3NldmVuLXRhYmxlIHRkLFxcbi53ZWVrICNzZXZlbi10YWJsZSB0aCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIHBhZGRpbmc6IDAuMjVlbSAwO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAud2VlayAjc2V2ZW4tdGFibGUgdGhlYWQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG4ud2VlayAjc2V2ZW4tdGFibGUgdGhlYWQgdHIge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmY7XFxufVxcbi53ZWVrICNzZXZlbi10YWJsZSB0Ym9keSB0ciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjQ0O1xcbn1cXG4ud2VlayAjc2V2ZW4tdGFibGUgdGJvZHkgdHIgdGQge1xcbiAgcGFkZGluZzogMWVtIDFlbSAxZW0gMDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9fYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL2xheW91dC9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9sYXlvdXQvX21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL2xheW91dC9fd2Vlay5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FD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Q0EsZUFBQTtFQUNBLGdCQUFBO0FIZ01wQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzQsIDczLCAxMDUpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDc0LCA3MywgMTA1LCAxKSAwJSwgcmdiYSgxMTIsIDExNCwgMTcxLCAxKSA1MCUsIHJnYmEoMjA1LCAxMzAsIDE2MCwgMSkgMTAwJSk7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTIwcHgpIHtcXG4gICAgICAgIHBhZGRpbmc6IDA7ICAgIFxcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG5cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEyMHB4KSB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7ICAgIFxcblxcbiAgICAgICAgICAgICY+KntcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cIixcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCAnLi9iYXNlJztcXG5AaW1wb3J0ICcuL2xheW91dC9oZWFkZXInO1xcbkBpbXBvcnQgJy4vbGF5b3V0L21haW4nO1xcbkBpbXBvcnQgJy4vbGF5b3V0L3dlZWsnO1xcblwiLFwiaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjMzO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NjBweCkge1xcbiAgICAgICAgJiB7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgICAgICAmIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5zZWFyY2gtY29udCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuXFxuICAgICAgICAmPioge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NjBweCkge1xcbiAgICAgICAgICAgICYge1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcXG5cXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgICAgICAgICAgICAgICYge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGlucHV0IHtcXG4gICAgICAgICAgICB3aWR0aDogMjcwcHg7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XFxuXFxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAgICAgICAgICAgICAmIHtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmOmZvY3VzIHtcXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAuNWVtO1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xcblxcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgICAgICAgICAgICAgJiB7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYzMztcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnN1bW1hcnktY29udCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODYwcHgpIHtcXG4gICAgICAgICAgICAmIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY+KiB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC53ZWF0aGVyLWxhYmVsIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRlbXAtbGFiZWwge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjJweDtcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XFxuXFxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAgICAgICAgICAgICAmIHtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5oaWxvLWxhYmVsIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICB9XFxuICAgIH1cXG59XCIsXCJtYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYzMztcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbiAgICAuc25hcC1mcmFtZSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgICAgICBwYWRkaW5nOiAwIDAgOHB4IDA7XFxuICAgICAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcXG5cXG4gICAgICAgIC5zbmFwLWJsb2NrIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmMzM7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgICAgICAgICAgIHNjcm9sbC1zbmFwLWFsaWduOiBjZW50ZXI7XFxuXFxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAgICAgICAgICAgICAmIHtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVlbTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuYmxvY2stdGltZSB7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmJsb2NrLXJhaW4ge1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoODYsIDg2LCAxNjcpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuYmxvY2std2VhdGhlciB7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmJsb2NrLXRlbXAge1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVwiLFwiLndlZWsge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjMzO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgICNzZXZlbi10YWJsZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFxuICAgICAgICB0ZCxcXG4gICAgICAgIHRoIHtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVlbSAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgdGhlYWQge1xcblxcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgICAgICAgICAgJiB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHRyIHtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmY7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgdGJvZHkge1xcblxcbiAgICAgICAgICAgIHRyIHtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmY0NDtcXG5cXG4gICAgICAgICAgICAgICAgdGQge1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMWVtIDFlbSAxZW0gMDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBnZXRUYXJnZXQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRUYXJnZXQuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYXJnZXQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgLy8gU2VhcmNoIGNvbnRhaW5lclxuICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VhcmNoQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzZWFyY2gtY29udCc7XG5cbiAgY29uc3Qgc2VhcmNoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNlYXJjaExhYmVsLmlkID0gJ3NlYXJjaC1sYWJlbCc7XG4gIHNlYXJjaExhYmVsLmlubmVyVGV4dCA9ICdDaXR5Oic7XG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hMYWJlbCk7XG5cbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzZWFyY2hJbnB1dC50eXBlID0gJ3RleHQnO1xuICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBjaXR5IG5hbWUnO1xuICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpO1xuXG4gIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzZWFyY2hCdXR0b24uaW5uZXJUZXh0ID0gJ3NlYXJjaCc7XG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hCdXR0b24pO1xuXG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hDb250YWluZXIpO1xuXG4gIC8vIFN1bW1hcnkgd2VhdGhlciBkYXRhXG4gIGNvbnN0IHN1bW1hcnlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3VtbWFyeUNvbnRhaW5lci5jbGFzc05hbWUgPSAnc3VtbWFyeS1jb250JztcblxuICBjb25zdCB3ZWF0aGVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHdlYXRoZXJMYWJlbC5jbGFzc05hbWUgPSAnd2VhdGhlci1sYWJlbCc7XG4gIHdlYXRoZXJMYWJlbC5pbm5lclRleHQgPSAnQ2xvdWR5JztcbiAgc3VtbWFyeUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyTGFiZWwpO1xuXG4gIGNvbnN0IHRlbXBMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgdGVtcExhYmVsLmNsYXNzTmFtZSA9ICd0ZW1wLWxhYmVsJztcbiAgdGVtcExhYmVsLmlubmVyVGV4dCA9ICcxOcKwJztcbiAgc3VtbWFyeUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wTGFiZWwpO1xuXG4gIGNvbnN0IGhpbG9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaGlsb0xhYmVsLmNsYXNzTmFtZSA9ICdoaWxvLWxhYmVsJztcbiAgaGlsb0xhYmVsLmlubmVyVGV4dCA9ICdIOjIxIEw6MTPCsCc7XG4gIHN1bW1hcnlDb250YWluZXIuYXBwZW5kQ2hpbGQoaGlsb0xhYmVsKTtcblxuICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VtbWFyeUNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGhlYWRlckNvbnRhaW5lcjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHR3ZW50eUZvdXJIcigpIHtcbiAgY29uc3QgdHdlbnR5Rm91ckhyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG4gIC8vIFNjcm9sbCBzbmFwIGNvbnRhaW5lclxuICBjb25zdCBzbmFwV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzbmFwV3JhcC5jbGFzc05hbWUgPSAnc25hcC1mcmFtZSc7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSArPSAxKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gJ3NuYXAtYmxvY2snO1xuXG4gICAgLy8gVGltZSBsYWJlbFxuICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aW1lLmNsYXNzTmFtZSA9ICdibG9jay10aW1lJztcbiAgICB0aW1lLmlubmVyVGV4dCA9IGk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aW1lKTtcblxuICAgIC8vIFJhaW4gbGFiZWxcbiAgICBjb25zdCByYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmFpbi5pbm5lclRleHQgPSAnMzYlJztcbiAgICByYWluLmNsYXNzTmFtZSA9ICdibG9jay1yYWluJztcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHJhaW4pO1xuXG4gICAgLy8gVGVtcGVyYXR1cmUgbGFiZWxcbiAgICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2VhdGhlci5pbm5lclRleHQgPSAnc3VubnknO1xuICAgIHdlYXRoZXIuY2xhc3NOYW1lID0gJ2Jsb2NrLXdlYXRoZXInO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQod2VhdGhlcik7XG5cbiAgICAvLyBUZW1wZXJhdHVyZSBsYWJlbFxuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZW1wLmlubmVyVGV4dCA9ICcyMMKwJztcbiAgICB0ZW1wLmNsYXNzTmFtZSA9ICdibG9jay10ZW1wJztcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRlbXApO1xuXG4gICAgc25hcFdyYXAuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH1cblxuICB0d2VudHlGb3VySHJDb250YWluZXIuYXBwZW5kQ2hpbGQoc25hcFdyYXApO1xuXG4gIHJldHVybiB0d2VudHlGb3VySHJDb250YWluZXI7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3ZWVrKCkge1xuICBjb25zdCB3ZWVrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdlZWtDb250YWluZXIuY2xhc3NOYW1lID0gJ3dlZWsnO1xuXG4gIC8vIFRhYmxlIGNvbnRhaW5lclxuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gIHRhYmxlLmlkID0gJ3NldmVuLXRhYmxlJztcblxuICAvLyBUYWJsZSBoZWFkaW5nXG4gIGNvbnN0IHRhYmxlSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJyk7XG4gIGNvbnN0IHRIZWFkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgY29uc3QgZGF5Q29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgZGF5Q29sLmlubmVyVGV4dCA9ICdEYXknO1xuICB0SGVhZFJvdy5hcHBlbmRDaGlsZChkYXlDb2wpO1xuICBjb25zdCB3ZWF0aGVyQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgd2VhdGhlckNvbC5pbm5lclRleHQgPSAnV2VhdGhlcic7XG4gIHRIZWFkUm93LmFwcGVuZENoaWxkKHdlYXRoZXJDb2wpO1xuICBjb25zdCByYWluQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgcmFpbkNvbC5pbm5lclRleHQgPSAnUmFpbic7XG4gIHRIZWFkUm93LmFwcGVuZENoaWxkKHJhaW5Db2wpO1xuICBjb25zdCB0ZW1wQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgdGVtcENvbC5pbm5lclRleHQgPSAnVGVtcGVyYXR1cmUnO1xuICB0SGVhZFJvdy5hcHBlbmRDaGlsZCh0ZW1wQ29sKTtcbiAgdGFibGVIZWFkLmFwcGVuZENoaWxkKHRIZWFkUm93KTtcbiAgdGFibGUuYXBwZW5kQ2hpbGQodGFibGVIZWFkKTtcblxuICAvLyBUYWJsZSBib2R5XG4gIGNvbnN0IHRhYmxlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG4gIHRhYmxlLmFwcGVuZENoaWxkKHRhYmxlQm9keSk7XG5cbiAgLy8gUm93XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpICs9IDEpIHtcbiAgICBjb25zdCBib2R5MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgY29uc3QgcjFjMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgcjFjMS5pbm5lclRleHQgPSAnTW9uZGF5JztcbiAgICBib2R5MS5hcHBlbmRDaGlsZChyMWMxKTtcbiAgICBjb25zdCByMWMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICByMWMyLmlubmVyVGV4dCA9ICdTdW5ueSc7XG4gICAgYm9keTEuYXBwZW5kQ2hpbGQocjFjMik7XG4gICAgY29uc3QgcjFjMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgcjFjMy5pbm5lclRleHQgPSAnNDMlJztcbiAgICBib2R5MS5hcHBlbmRDaGlsZChyMWMzKTtcbiAgICBjb25zdCByMWM0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICByMWM0LmlubmVyVGV4dCA9ICcxOcKwJztcbiAgICBib2R5MS5hcHBlbmRDaGlsZChyMWM0KTtcbiAgICB0YWJsZUJvZHkuYXBwZW5kQ2hpbGQoYm9keTEpO1xuICB9XG5cbiAgd2Vla0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJsZSk7XG5cbiAgcmV0dXJuIHdlZWtDb250YWluZXI7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlL3N0eWxlLnNjc3MnO1xuaW1wb3J0IGhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCB0d2VudHlGb3VySHIgZnJvbSAnLi9jb21wb25lbnRzL21haW4nO1xuaW1wb3J0IHdlZWsgZnJvbSAnLi9jb21wb25lbnRzL3dlZWsnO1xuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHR3ZW50eUZvdXJIcigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdlZWsoKSk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9