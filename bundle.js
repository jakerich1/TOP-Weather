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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Roboto\", sans-serif;\n}\n\nhtml,\nbody {\n  min-height: 100%;\n}\n\nbody {\n  background: #4a4969;\n  background: linear-gradient(180deg, #4a4969 0%, #7072ab 50%, #cd82a0 100%);\n  padding: 1em;\n}\n@media only screen and (max-width: 1120px) {\n  body {\n    padding: 0;\n  }\n}\nbody .container {\n  width: 80%;\n  margin: auto;\n}\n@media only screen and (max-width: 1120px) {\n  body .container {\n    width: 100%;\n  }\n  body .container > * {\n    border-radius: 0 !important;\n  }\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  background: #ffffff33;\n  padding: 0.5em;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 36px;\n  color: white;\n  border-radius: 16px;\n}\n@media only screen and (max-width: 880px) {\n  header {\n    flex-direction: column;\n  }\n}\n@media only screen and (max-width: 500px) {\n  header {\n    padding: 0;\n  }\n}\nheader .search-cont {\n  display: flex;\n  align-items: stretch;\n}\nheader .search-cont > * {\n  display: block;\n}\n@media only screen and (max-width: 860px) {\n  header .search-cont {\n    margin-top: 0.5em;\n  }\n}\nheader .search-cont span {\n  margin-right: 10px;\n  font-weight: 100;\n}\n@media only screen and (max-width: 500px) {\n  header .search-cont span {\n    display: none;\n  }\n}\nheader .search-cont input {\n  width: 270px;\n  border: none;\n  border-bottom: 1px solid #ffffff;\n  background: none;\n  font-size: 30px;\n  font-weight: 100;\n  color: #ffffff;\n}\n@media only screen and (max-width: 500px) {\n  header .search-cont input {\n    width: 200px;\n    font-size: 20px;\n  }\n}\nheader .search-cont input:focus {\n  outline: none;\n}\nheader .search-cont button {\n  border: 1px solid #ffffff;\n  background: none;\n  padding: 0 0.5em;\n  color: #ffffff;\n  font-weight: 100;\n  font-size: 24px;\n  cursor: pointer;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n  transition: all 0.15s ease-in-out;\n}\n@media only screen and (max-width: 500px) {\n  header .search-cont button {\n    font-size: 20px;\n  }\n}\nheader .search-cont button:hover {\n  background: #ffffff33;\n}\nheader .summary-cont {\n  display: flex;\n  align-items: center;\n}\n@media only screen and (max-width: 860px) {\n  header .summary-cont {\n    margin-top: 8px;\n  }\n}\nheader .summary-cont > * {\n  display: block;\n  font-weight: 300;\n}\nheader .summary-cont .weather-label {\n  font-size: 24px;\n  margin-right: 16px;\n}\nheader .summary-cont .temp-label {\n  font-size: 62px;\n  margin-right: 16px;\n}\n@media only screen and (max-width: 500px) {\n  header .summary-cont .temp-label {\n    font-size: 36px;\n  }\n}\nheader .summary-cont .hilo-label {\n  font-size: 24px;\n}\n\nmain {\n  display: flex;\n  width: 100%;\n  background: #ffffff33;\n  padding: 0.5em;\n  border-radius: 16px;\n  margin-top: 16px;\n  font-size: 36px;\n  color: white;\n}\nmain .snap-frame {\n  display: flex;\n  width: 100%;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  padding: 0 0 8px 0;\n  scroll-snap-type: x mandatory;\n}\nmain .snap-frame .snap-block {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  justify-content: space-between;\n  padding: 0.5em;\n  background: #ffffff33;\n  border-radius: 8px;\n  margin-right: 8px;\n  scroll-snap-align: center;\n}\n@media only screen and (max-width: 500px) {\n  main .snap-frame .snap-block {\n    padding: 0.25em;\n  }\n}\nmain .snap-frame .snap-block .block-time {\n  font-weight: 300;\n  font-size: 18px;\n}\nmain .snap-frame .snap-block .block-rain {\n  font-weight: 700;\n  font-size: 16px;\n  color: #5656a7;\n}\nmain .snap-frame .snap-block .block-weather {\n  font-weight: 300;\n  font-size: 21px;\n}\nmain .snap-frame .snap-block .block-temp {\n  font-weight: 300;\n  font-size: 21px;\n}\n\n.week {\n  width: 100%;\n  background: #ffffff33;\n  padding: 0.5em;\n  border-radius: 16px;\n  margin-top: 16px;\n  font-size: 36px;\n  color: white;\n}\n.week #seven-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.week #seven-table td,\n.week #seven-table th {\n  text-align: left;\n  font-weight: 500;\n  font-size: 32px;\n  padding: 0.25em 0;\n}\n@media only screen and (max-width: 600px) {\n  .week #seven-table thead {\n    display: none;\n  }\n}\n.week #seven-table thead tr {\n  border-bottom: 1px solid #ffffff;\n}\n.week #seven-table tbody tr {\n  border-bottom: 1px solid #ffffff44;\n}\n.week #seven-table tbody tr td {\n  padding: 1em 1em 1em 0;\n  font-size: 18px;\n  font-weight: 300;\n}", "",{"version":3,"sources":["webpack://./src/style/_base.scss","webpack://./src/style/style.scss","webpack://./src/style/layout/_header.scss","webpack://./src/style/layout/_main.scss","webpack://./src/style/layout/_week.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;EACA,iCAAA;ACEJ;;ADCA;;EAEI,gBAAA;ACEJ;;ADCA;EACI,mBAAA;EACA,0EAAA;EACA,YAAA;ACEJ;ADAI;EALJ;IAMQ,UAAA;ECGN;AACF;ADDI;EACI,UAAA;EACA,YAAA;ACGR;ADDQ;EAJJ;IAKQ,WAAA;ECIV;EDFU;IACI,2BAAA;ECId;AACF;;AClCA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,WAAA;EACA,qBAAA;EACA,cAAA;EACA,iCAAA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;ADqCJ;ACnCI;EACI;IACI,sBAAA;EDqCV;AACF;AClCI;EACI;IACI,UAAA;EDoCV;AACF;ACjCI;EACI,aAAA;EACA,oBAAA;ADmCR;ACjCQ;EACI,cAAA;ADmCZ;AChCQ;EACI;IACI,iBAAA;EDkCd;AACF;AC/BQ;EACI,kBAAA;EACA,gBAAA;ADiCZ;AC/BY;EACI;IACI,aAAA;EDiClB;AACF;AC7BQ;EACI,YAAA;EACA,YAAA;EACA,gCAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,cAAA;AD+BZ;AC7BY;EACI;IACI,YAAA;IACA,eAAA;ED+BlB;AACF;AC5BY;EACI,aAAA;AD8BhB;AC1BQ;EACI,yBAAA;EACA,gBAAA;EACA,gBAAA;EACA,cAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,4BAAA;EACA,+BAAA;EACA,iCAAA;AD4BZ;AC1BY;EACI;IACI,eAAA;ED4BlB;AACF;ACzBY;EACI,qBAAA;AD2BhB;ACtBI;EACI,aAAA;EACA,mBAAA;ADwBR;ACtBQ;EACI;IACI,eAAA;EDwBd;AACF;ACrBQ;EACI,cAAA;EACA,gBAAA;ADuBZ;ACpBQ;EACI,eAAA;EACA,kBAAA;ADsBZ;ACnBQ;EACI,eAAA;EACA,kBAAA;ADqBZ;ACnBY;EACI;IACI,eAAA;EDqBlB;AACF;ACjBQ;EACI,eAAA;ADmBZ;;AEjJA;EACI,aAAA;EACA,WAAA;EACA,qBAAA;EACA,cAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,YAAA;AFoJJ;AElJI;EACI,aAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,6BAAA;AFoJR;AElJQ;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,8BAAA;EACA,cAAA;EACA,qBAAA;EACA,kBAAA;EACA,iBAAA;EACA,yBAAA;AFoJZ;AElJY;EACI;IACI,eAAA;EFoJlB;AACF;AEjJY;EACI,gBAAA;EACA,eAAA;AFmJhB;AEhJY;EACI,gBAAA;EACA,eAAA;EACA,cAAA;AFkJhB;AE/IY;EACI,gBAAA;EACA,eAAA;AFiJhB;AE9IY;EACI,gBAAA;EACA,eAAA;AFgJhB;;AGtMA;EACI,WAAA;EACA,qBAAA;EACA,cAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,YAAA;AHyMJ;AGvMI;EACI,WAAA;EACA,yBAAA;AHyMR;AGvMQ;;EAEI,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;AHyMZ;AGpMY;EACI;IACI,aAAA;EHsMlB;AACF;AGnMY;EACI,gCAAA;AHqMhB;AG/LY;EACI,kCAAA;AHiMhB;AG/LgB;EACI,sBAAA;EACA,eAAA;EACA,gBAAA;AHiMpB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n}\n\nhtml,\nbody {\n    min-height: 100%;\n}\n\nbody {\n    background: rgb(74, 73, 105);\n    background: linear-gradient(180deg, rgba(74, 73, 105, 1) 0%, rgba(112, 114, 171, 1) 50%, rgba(205, 130, 160, 1) 100%);\n    padding: 1em;\n\n    @media only screen and (max-width: 1120px) {\n        padding: 0;    \n    }\n\n    .container {\n        width: 80%;\n        margin: auto;\n\n        @media only screen and (max-width: 1120px) {\n            width: 100%;    \n\n            &>*{\n                border-radius: 0 !important;\n            }\n        }\n    }\n}","@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');\n@import './base';\n@import './layout/header';\n@import './layout/main';\n@import './layout/week';\n","header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    background: #ffffff33;\n    padding: 0.5em;\n    font-family: 'Roboto', sans-serif;\n    font-size: 36px;\n    color: white;\n    border-radius: 16px;\n\n    @media only screen and (max-width: 880px) {\n        & {\n            flex-direction: column;\n        }\n    }\n\n    @media only screen and (max-width: 500px) {\n        & {\n            padding: 0;\n        }\n    }\n\n    .search-cont {\n        display: flex;\n        align-items: stretch;\n\n        &>* {\n            display: block;\n        }\n\n        @media only screen and (max-width: 860px) {\n            & {\n                margin-top: 0.5em;\n            }\n        }\n\n        span {\n            margin-right: 10px;\n            font-weight: 100;\n\n            @media only screen and (max-width: 500px) {\n                & {\n                    display: none;\n                }\n            }\n        }\n\n        input {\n            width: 270px;\n            border: none;\n            border-bottom: 1px solid #ffffff;\n            background: none;\n            font-size: 30px;\n            font-weight: 100;\n            color: #ffffff;\n\n            @media only screen and (max-width: 500px) {\n                & {\n                    width: 200px;\n                    font-size: 20px;\n                }\n            }\n\n            &:focus {\n                outline: none;\n            }\n        }\n\n        button {\n            border: 1px solid #ffffff;\n            background: none;\n            padding: 0 0.5em;\n            color: #ffffff;\n            font-weight: 100;\n            font-size: 24px;\n            cursor: pointer;\n            border-top-right-radius: 8px;\n            border-bottom-right-radius: 8px;\n            transition: all 0.15s ease-in-out;\n\n            @media only screen and (max-width: 500px) {\n                & {\n                    font-size: 20px;\n                }\n            }\n\n            &:hover {\n                background: #ffffff33;\n            }\n        }\n    }\n\n    .summary-cont {\n        display: flex;\n        align-items: center;\n\n        @media only screen and (max-width: 860px) {\n            & {\n                margin-top: 8px;\n            }\n        }\n\n        &>* {\n            display: block;\n            font-weight: 300;\n        }\n\n        .weather-label {\n            font-size: 24px;\n            margin-right: 16px;\n        }\n\n        .temp-label {\n            font-size: 62px;\n            margin-right: 16px;\n\n            @media only screen and (max-width: 500px) {\n                & {\n                    font-size: 36px;\n                }\n            }\n        }\n\n        .hilo-label {\n            font-size: 24px;\n        }\n    }\n}","main {\n    display: flex;\n    width: 100%;\n    background: #ffffff33;\n    padding: 0.5em;\n    border-radius: 16px;\n    margin-top: 16px;\n    font-size: 36px;\n    color: white;\n\n    .snap-frame {\n        display: flex;\n        width: 100%;\n        overflow-x: scroll;\n        overflow-y: hidden;\n        padding: 0 0 8px 0;\n        scroll-snap-type: x mandatory;\n\n        .snap-block {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            text-align: center;\n            justify-content: space-between;\n            padding: 0.5em;\n            background: #ffffff33;\n            border-radius: 8px;\n            margin-right: 8px;\n            scroll-snap-align: center;\n\n            @media only screen and (max-width: 500px) {\n                & {\n                    padding: 0.25em;\n                }\n            }\n\n            .block-time {\n                font-weight: 300;\n                font-size: 18px;\n            }\n\n            .block-rain {\n                font-weight: 700;\n                font-size: 16px;\n                color: rgb(86, 86, 167);\n            }\n\n            .block-weather {\n                font-weight: 300;\n                font-size: 21px;\n            }\n\n            .block-temp {\n                font-weight: 300;\n                font-size: 21px;\n            }\n        }\n    }\n}",".week {\n    width: 100%;\n    background: #ffffff33;\n    padding: 0.5em;\n    border-radius: 16px;\n    margin-top: 16px;\n    font-size: 36px;\n    color: white;\n\n    #seven-table {\n        width: 100%;\n        border-collapse: collapse;\n\n        td,\n        th {\n            text-align: left;\n            font-weight: 500;\n            font-size: 32px;\n            padding: 0.25em 0;\n        }\n\n        thead {\n\n            @media only screen and (max-width: 600px) {\n                & {\n                    display: none;\n                }\n            }\n\n            tr {\n                border-bottom: 1px solid #ffffff;\n            }\n        }\n\n        tbody {\n\n            tr {\n                border-bottom: 1px solid #ffffff44;\n\n                td {\n                    padding: 1em 1em 1em 0;\n                    font-size: 18px;\n                    font-weight: 300;\n                }\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
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
  searchInput.id = 'sInput';
  searchInput.placeholder = 'Enter city name';
  searchContainer.appendChild(searchInput);

  const searchButton = document.createElement('button');
  searchButton.innerText = 'search';
  searchButton.id = 'sButton';
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


/***/ }),

/***/ "./src/controllers/DOMcontroller.js":
/*!******************************************!*\
  !*** ./src/controllers/DOMcontroller.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DOMcontroller = (function factory() {
  function setLoading() {
    const searchButton = document.querySelector('#sButton');
    searchButton.innerHTML = '...loading';
  }

  function setSearch() {
    const searchButton = document.querySelector('#sButton');
    searchButton.innerHTML = 'search';
  }

  function setHeadWeather(content) {
    const headerWeather = document.querySelector('.weather-label');
    headerWeather.innerHTML = content;
  }

  function setHeadTemp(content) {
    const headerTemp = document.querySelector('.temp-label');
    headerTemp.innerHTML = content;
  }

  function setHeadHiLo(content) {
    const headerHiLo = document.querySelector('.hilo-label');
    headerHiLo.innerHTML = content;
  }

  function setScroll(content) {
    // Scrollable wrapper
    const scrollArea = document.querySelector('.snap-frame');
    scrollArea.innerHTML = '';

    for (let i = 0; i < content.length; i += 1) {
      const hourTemp = Math.round(content[i].temp);
      const hourWeather = content[i].weather[0].main;
      const hourTime = new Date(new Date().setHours(new Date().getHours() + i)).getHours();
      const hourRain = Math.round((content[i].pop) * 100);

      const element = document.createElement('div');
      element.className = 'snap-block';

      // Time label
      const time = document.createElement('div');
      time.className = 'block-time';
      time.innerText = hourTime;
      element.appendChild(time);

      // Rain label
      const rain = document.createElement('div');
      rain.innerText = `${hourRain}%`;
      rain.className = 'block-rain';
      element.appendChild(rain);

      // Temperature label
      const weather = document.createElement('div');
      weather.innerText = hourWeather;
      weather.className = 'block-weather';
      element.appendChild(weather);

      // Temperature label
      const temp = document.createElement('div');
      temp.innerText = `${hourTemp}°`;
      temp.className = 'block-temp';
      element.appendChild(temp);

      scrollArea.appendChild(element);
    }
  }

  function setDays(content) {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';
    const dailyDate = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    for (let i = 1; i < content.length; i += 1) {
      dailyDate.setDate(dailyDate.getDate() + 1);

      const dailyRain = Math.round((content[i].pop) * 100);
      const dailyTemp = Math.round(content[i].temp.day);
      const dailyWeather = content[i].weather[0].description;
      const body1 = document.createElement('tr');

      const r1c1 = document.createElement('td');
      r1c1.innerText = days[dailyDate.getDay()];
      body1.appendChild(r1c1);

      const r1c2 = document.createElement('td');
      r1c2.innerText = dailyWeather;
      body1.appendChild(r1c2);

      const r1c3 = document.createElement('td');
      r1c3.innerText = `${dailyRain}%`;
      body1.appendChild(r1c3);

      const r1c4 = document.createElement('td');
      r1c4.innerText = `${dailyTemp}°`;
      body1.appendChild(r1c4);

      tableBody.appendChild(body1);
    }
  }

  return {
    setLoading,
    setSearch,
    setHeadWeather,
    setHeadTemp,
    setHeadHiLo,
    setScroll,
    setDays,
  };
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMcontroller);


/***/ }),

/***/ "./src/controllers/controller.js":
/*!***************************************!*\
  !*** ./src/controllers/controller.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMcontroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMcontroller */ "./src/controllers/DOMcontroller.js");


const controller = (function factory() {
  async function getWeather(lat, lon) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=12e3d57611d7008bed26d747d8731449&units=metric`, {
      mode: 'cors',
    });
    const baseData = await response.json();

    // Handle the data
    const currentWeather = baseData.current.weather[0].description;
    const currentTemp = `${Math.round(baseData.current.temp)}°`;
    const currentHiLo = `H:${Math.round(baseData.daily[0].temp.max)}° L:${Math.round((baseData.daily[0].temp.min))}°`;
    const hourlyArray = baseData.hourly;
    const dailyArray = baseData.daily;

    // Set header values
    _DOMcontroller__WEBPACK_IMPORTED_MODULE_0__.default.setHeadWeather(currentWeather);
    _DOMcontroller__WEBPACK_IMPORTED_MODULE_0__.default.setHeadTemp(currentTemp);
    _DOMcontroller__WEBPACK_IMPORTED_MODULE_0__.default.setHeadHiLo(currentHiLo);

    // Set 24hr values
    _DOMcontroller__WEBPACK_IMPORTED_MODULE_0__.default.setScroll(hourlyArray);

    // Set daily values
    _DOMcontroller__WEBPACK_IMPORTED_MODULE_0__.default.setDays(dailyArray);
  }

  async function searchCoord(city) {
    if (city === '') {
      throw new Error('Empty input');
    } else {
      _DOMcontroller__WEBPACK_IMPORTED_MODULE_0__.default.setLoading();
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=12e3d57611d7008bed26d747d8731449`, {
        mode: 'cors',
      });
      const baseData = await response.json();
      try {
        const { lat } = baseData.coord;
        const { lon } = baseData.coord;
        await getWeather(lat, lon);
      } catch {
        // If the search term returns no data
        throw new Error('SEarch term returned no data');
      }
      _DOMcontroller__WEBPACK_IMPORTED_MODULE_0__.default.setSearch();
    }
  }

  return {
    searchCoord,
  };
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controller);


/***/ }),

/***/ "./src/controllers/listeners.js":
/*!**************************************!*\
  !*** ./src/controllers/listeners.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/controllers/controller.js");


const listener = (function factory() {
  function staticElements() {
    const searchInput = document.querySelector('#sInput');
    const searchButton = document.querySelector('#sButton');
    searchButton.addEventListener('click', () => {
      _controller__WEBPACK_IMPORTED_MODULE_0__.default.searchCoord(searchInput.value);
    });
  }

  return {
    staticElements,
  };
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listener);


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
/* harmony import */ var _controllers_listeners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/listeners */ "./src/controllers/listeners.js");
/* harmony import */ var _controllers_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/controller */ "./src/controllers/controller.js");







function component() {
  const container = document.createElement('div');
  container.classList.add('container');

  container.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_1__.default)());
  container.appendChild((0,_components_main__WEBPACK_IMPORTED_MODULE_2__.default)());
  container.appendChild((0,_components_week__WEBPACK_IMPORTED_MODULE_3__.default)());

  return container;
}

document.body.appendChild(component());
_controllers_listeners__WEBPACK_IMPORTED_MODULE_4__.default.staticElements();
_controllers_controller__WEBPACK_IMPORTED_MODULE_5__.default.searchCoord('London');
document.querySelector('#sInput').value = 'London';

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UT1AtV2VhdGhlci8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzIiwid2VicGFjazovL1RPUC1XZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9UT1AtV2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL1RPUC1XZWF0aGVyLy4vc3JjL3N0eWxlL3N0eWxlLnNjc3M/NzQ3ZSIsIndlYnBhY2s6Ly9UT1AtV2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qcyIsIndlYnBhY2s6Ly9UT1AtV2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9UT1AtV2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9UT1AtV2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL1RPUC1XZWF0aGVyLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL1RPUC1XZWF0aGVyLy4vc3JjL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly9UT1AtV2VhdGhlci8uL3NyYy9jb21wb25lbnRzL3dlZWsuanMiLCJ3ZWJwYWNrOi8vVE9QLVdlYXRoZXIvLi9zcmMvY29udHJvbGxlcnMvRE9NY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9UT1AtV2VhdGhlci8uL3NyYy9jb250cm9sbGVycy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL1RPUC1XZWF0aGVyLy4vc3JjL2NvbnRyb2xsZXJzL2xpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly9UT1AtV2VhdGhlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9UT1AtV2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9UT1AtV2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVE9QLVdlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9UT1AtV2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1RPUC1XZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YsK0dBQStHLElBQUksSUFBSSxJQUFJLGtCQUFrQjtBQUM3STtBQUNBLDZDQUE2QyxjQUFjLGVBQWUsMkJBQTJCLHdDQUF3QyxHQUFHLGlCQUFpQixxQkFBcUIsR0FBRyxVQUFVLHdCQUF3QiwrRUFBK0UsaUJBQWlCLEdBQUcsOENBQThDLFVBQVUsaUJBQWlCLEtBQUssR0FBRyxtQkFBbUIsZUFBZSxpQkFBaUIsR0FBRyw4Q0FBOEMscUJBQXFCLGtCQUFrQixLQUFLLHlCQUF5QixrQ0FBa0MsS0FBSyxHQUFHLFlBQVksa0JBQWtCLG1DQUFtQyx3QkFBd0IsZ0JBQWdCLDBCQUEwQixtQkFBbUIsd0NBQXdDLG9CQUFvQixpQkFBaUIsd0JBQXdCLEdBQUcsNkNBQTZDLFlBQVksNkJBQTZCLEtBQUssR0FBRyw2Q0FBNkMsWUFBWSxpQkFBaUIsS0FBSyxHQUFHLHVCQUF1QixrQkFBa0IseUJBQXlCLEdBQUcsMkJBQTJCLG1CQUFtQixHQUFHLDZDQUE2Qyx5QkFBeUIs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Q1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ040QjtBQUNhO0FBQ0k7QUFDUjtBQUNVO0FBQ0c7O0FBRWxEO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsMkRBQU07QUFDOUIsd0JBQXdCLHlEQUFZO0FBQ3BDLHdCQUF3Qix5REFBSTs7QUFFNUI7QUFDQTs7QUFFQTtBQUNBLDBFQUF1QjtBQUN2Qix3RUFBc0I7QUFDdEIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAxMDA7MzAwOzQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6ICM0YTQ5Njk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNGE0OTY5IDAlLCAjNzA3MmFiIDUwJSwgI2NkODJhMCAxMDAlKTtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTIwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbn1cXG5ib2R5IC5jb250YWluZXIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTIwcHgpIHtcXG4gIGJvZHkgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgYm9keSAuY29udGFpbmVyID4gKiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmMzM7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxufVxcbmhlYWRlciAuc2VhcmNoLWNvbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG5oZWFkZXIgLnNlYXJjaC1jb250ID4gKiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NjBweCkge1xcbiAgaGVhZGVyIC5zZWFyY2gtY29udCB7XFxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgfVxcbn1cXG5oZWFkZXIgLnNlYXJjaC1jb250IHNwYW4ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgaGVhZGVyIC5zZWFyY2gtY29udCBzcGFuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuaGVhZGVyIC5zZWFyY2gtY29udCBpbnB1dCB7XFxuICB3aWR0aDogMjcwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIGhlYWRlciAuc2VhcmNoLWNvbnQgaW5wdXQge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG59XFxuaGVhZGVyIC5zZWFyY2gtY29udCBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5oZWFkZXIgLnNlYXJjaC1jb250IGJ1dHRvbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIHBhZGRpbmc6IDAgMC41ZW07XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgaGVhZGVyIC5zZWFyY2gtY29udCBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9XFxufVxcbmhlYWRlciAuc2VhcmNoLWNvbnQgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmYzMztcXG59XFxuaGVhZGVyIC5zdW1tYXJ5LWNvbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODYwcHgpIHtcXG4gIGhlYWRlciAuc3VtbWFyeS1jb250IHtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbiAgfVxcbn1cXG5oZWFkZXIgLnN1bW1hcnktY29udCA+ICoge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5oZWFkZXIgLnN1bW1hcnktY29udCAud2VhdGhlci1sYWJlbCB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XFxufVxcbmhlYWRlciAuc3VtbWFyeS1jb250IC50ZW1wLWxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogNjJweDtcXG4gIG1hcmdpbi1yaWdodDogMTZweDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgaGVhZGVyIC5zdW1tYXJ5LWNvbnQgLnRlbXAtbGFiZWwge1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICB9XFxufVxcbmhlYWRlciAuc3VtbWFyeS1jb250IC5oaWxvLWxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmMzM7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5tYWluIC5zbmFwLWZyYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDAgMCA4cHggMDtcXG4gIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xcbn1cXG5tYWluIC5zbmFwLWZyYW1lIC5zbmFwLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjMzO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICBtYWluIC5zbmFwLWZyYW1lIC5zbmFwLWJsb2NrIHtcXG4gICAgcGFkZGluZzogMC4yNWVtO1xcbiAgfVxcbn1cXG5tYWluIC5zbmFwLWZyYW1lIC5zbmFwLWJsb2NrIC5ibG9jay10aW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcbm1haW4gLnNuYXAtZnJhbWUgLnNuYXAtYmxvY2sgLmJsb2NrLXJhaW4ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjNTY1NmE3O1xcbn1cXG5tYWluIC5zbmFwLWZyYW1lIC5zbmFwLWJsb2NrIC5ibG9jay13ZWF0aGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXNpemU6IDIxcHg7XFxufVxcbm1haW4gLnNuYXAtZnJhbWUgLnNuYXAtYmxvY2sgLmJsb2NrLXRlbXAge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc2l6ZTogMjFweDtcXG59XFxuXFxuLndlZWsge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmMzM7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4ud2VlayAjc2V2ZW4tdGFibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG4ud2VlayAjc2V2ZW4tdGFibGUgdGQsXFxuLndlZWsgI3NldmVuLXRhYmxlIHRoIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgcGFkZGluZzogMC4yNWVtIDA7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC53ZWVrICNzZXZlbi10YWJsZSB0aGVhZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbi53ZWVrICNzZXZlbi10YWJsZSB0aGVhZCB0ciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcXG59XFxuLndlZWsgI3NldmVuLXRhYmxlIHRib2R5IHRyIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmNDQ7XFxufVxcbi53ZWVrICNzZXZlbi10YWJsZSB0Ym9keSB0ciB0ZCB7XFxuICBwYWRkaW5nOiAxZW0gMWVtIDFlbSAwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL19iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvbGF5b3V0L19oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL2xheW91dC9fbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvbGF5b3V0L193ZWVrLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7QUNFSjs7QURDQTs7RUFFSSxnQkFBQTtBQ0VKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSwwRUFBQTtFQUNBLFlBQUE7QUNFSjtBREFJO0VBTEo7SUFNUSxVQUFBO0VDR047QUFDRjtBRERJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNHUjtBRERRO0VBSko7SUFLUSxXQUFBO0VDSVY7RURGVTtJQUNJLDJCQUFBO0VDSWQ7QUFDRjs7QUNsQ0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QURxQ0o7QUNuQ0k7RUFDSTtJQUNJLHNCQUFBO0VEcUNWO0FBQ0Y7QUNsQ0k7RUFDSTtJQUNJLFVBQUE7RURvQ1Y7QUFDRjtBQ2pDSTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtBRG1DUjtBQ2pDUTtFQUNJLGNBQUE7QURtQ1o7QUNoQ1E7RUFDSTtJQUNJLGlCQUFBO0VEa0NkO0FBQ0Y7QUMvQlE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FEaUNaO0FDL0JZO0VBQ0k7SUFDSSxhQUFBO0VEaUNsQjtBQUNGO0FDN0JRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRCtCWjtBQzdCWTtFQUNJO0lBQ0ksWUFBQTtJQUNBLGVBQUE7RUQrQmxCO0FBQ0Y7QUM1Qlk7RUFDSSxhQUFBO0FEOEJoQjtBQzFCUTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0FENEJaO0FDMUJZO0VBQ0k7SUFDSSxlQUFBO0VENEJsQjtBQUNGO0FDekJZO0VBQ0kscUJBQUE7QUQyQmhCO0FDdEJJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FEd0JSO0FDdEJRO0VBQ0k7SUFDSSxlQUFBO0VEd0JkO0FBQ0Y7QUNyQlE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUR1Qlo7QUNwQlE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QURzQlo7QUNuQlE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QURxQlo7QUNuQlk7RUFDSTtJQUNJLGVBQUE7RURxQmxCO0FBQ0Y7QUNqQlE7RUFDSSxlQUFBO0FEbUJaOztBRWpKQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FGb0pKO0FFbEpJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBRm9KUjtBRWxKUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBRm9KWjtBRWxKWTtFQUNJO0lBQ0ksZUFBQTtFRm9KbEI7QUFDRjtBRWpKWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBRm1KaEI7QUVoSlk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FGa0poQjtBRS9JWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBRmlKaEI7QUU5SVk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUZnSmhCOztBR3RNQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUh5TUo7QUd2TUk7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QUh5TVI7QUd2TVE7O0VBRUksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBSHlNWjtBR3BNWTtFQUNJO0lBQ0ksYUFBQTtFSHNNbEI7QUFDRjtBR25NWTtFQUNJLGdDQUFBO0FIcU1oQjtBRy9MWTtFQUNJLGtDQUFBO0FIaU1oQjtBRy9MZ0I7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBSGlNcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDc0LCA3MywgMTA1KTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg3NCwgNzMsIDEwNSwgMSkgMCUsIHJnYmEoMTEyLCAxMTQsIDE3MSwgMSkgNTAlLCByZ2JhKDIwNSwgMTMwLCAxNjAsIDEpIDEwMCUpO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEyMHB4KSB7XFxuICAgICAgICBwYWRkaW5nOiAwOyAgICBcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMjBweCkge1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlOyAgICBcXG5cXG4gICAgICAgICAgICAmPip7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XCIsXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAxMDA7MzAwOzQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgJy4vYmFzZSc7XFxuQGltcG9ydCAnLi9sYXlvdXQvaGVhZGVyJztcXG5AaW1wb3J0ICcuL2xheW91dC9tYWluJztcXG5AaW1wb3J0ICcuL2xheW91dC93ZWVrJztcXG5cIixcImhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYzMztcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcXG4gICAgICAgICYge1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAgICAgJiB7XFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuc2VhcmNoLWNvbnQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcblxcbiAgICAgICAgJj4qIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODYwcHgpIHtcXG4gICAgICAgICAgICAmIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41ZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAgICAgICAgICAgICAmIHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICBpbnB1dCB7XFxuICAgICAgICAgICAgd2lkdGg6IDI3MHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xcblxcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgICAgICAgICAgICAgJiB7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJjpmb2N1cyB7XFxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICAgICAgcGFkZGluZzogMCAwLjVlbTtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcXG5cXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgICAgICAgICAgICAgICYge1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmMzM7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5zdW1tYXJ5LWNvbnQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg2MHB4KSB7XFxuICAgICAgICAgICAgJiB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmPioge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAud2VhdGhlci1sYWJlbCB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50ZW1wLWxhYmVsIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDYycHg7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcblxcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgICAgICAgICAgICAgJiB7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuaGlsby1sYWJlbCB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVwiLFwibWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmMzM7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgLnNuYXAtZnJhbWUge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICAgICAgcGFkZGluZzogMCAwIDhweCAwO1xcbiAgICAgICAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XFxuXFxuICAgICAgICAuc25hcC1ibG9jayB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmMzM7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgICAgICAgICAgIHNjcm9sbC1zbmFwLWFsaWduOiBjZW50ZXI7XFxuXFxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAgICAgICAgICAgICAmIHtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVlbTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuYmxvY2stdGltZSB7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmJsb2NrLXJhaW4ge1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoODYsIDg2LCAxNjcpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuYmxvY2std2VhdGhlciB7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmJsb2NrLXRlbXAge1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVwiLFwiLndlZWsge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjMzO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgICNzZXZlbi10YWJsZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFxuICAgICAgICB0ZCxcXG4gICAgICAgIHRoIHtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVlbSAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgdGhlYWQge1xcblxcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgICAgICAgICAgJiB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHRyIHtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmY7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgdGJvZHkge1xcblxcbiAgICAgICAgICAgIHRyIHtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmY0NDtcXG5cXG4gICAgICAgICAgICAgICAgdGQge1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMWVtIDFlbSAxZW0gMDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBnZXRUYXJnZXQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRUYXJnZXQuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYXJnZXQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgLy8gU2VhcmNoIGNvbnRhaW5lclxuICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VhcmNoQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzZWFyY2gtY29udCc7XG5cbiAgY29uc3Qgc2VhcmNoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNlYXJjaExhYmVsLmlkID0gJ3NlYXJjaC1sYWJlbCc7XG4gIHNlYXJjaExhYmVsLmlubmVyVGV4dCA9ICdDaXR5Oic7XG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hMYWJlbCk7XG5cbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzZWFyY2hJbnB1dC50eXBlID0gJ3RleHQnO1xuICBzZWFyY2hJbnB1dC5pZCA9ICdzSW5wdXQnO1xuICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBjaXR5IG5hbWUnO1xuICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpO1xuXG4gIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzZWFyY2hCdXR0b24uaW5uZXJUZXh0ID0gJ3NlYXJjaCc7XG4gIHNlYXJjaEJ1dHRvbi5pZCA9ICdzQnV0dG9uJztcbiAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaEJ1dHRvbik7XG5cbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaENvbnRhaW5lcik7XG5cbiAgLy8gU3VtbWFyeSB3ZWF0aGVyIGRhdGFcbiAgY29uc3Qgc3VtbWFyeUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdW1tYXJ5Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdzdW1tYXJ5LWNvbnQnO1xuXG4gIGNvbnN0IHdlYXRoZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgd2VhdGhlckxhYmVsLmNsYXNzTmFtZSA9ICd3ZWF0aGVyLWxhYmVsJztcbiAgd2VhdGhlckxhYmVsLmlubmVyVGV4dCA9ICdDbG91ZHknO1xuICBzdW1tYXJ5Q29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJMYWJlbCk7XG5cbiAgY29uc3QgdGVtcExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0ZW1wTGFiZWwuY2xhc3NOYW1lID0gJ3RlbXAtbGFiZWwnO1xuICB0ZW1wTGFiZWwuaW5uZXJUZXh0ID0gJzE5wrAnO1xuICBzdW1tYXJ5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBMYWJlbCk7XG5cbiAgY29uc3QgaGlsb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBoaWxvTGFiZWwuY2xhc3NOYW1lID0gJ2hpbG8tbGFiZWwnO1xuICBoaWxvTGFiZWwuaW5uZXJUZXh0ID0gJ0g6MjEgTDoxM8KwJztcbiAgc3VtbWFyeUNvbnRhaW5lci5hcHBlbmRDaGlsZChoaWxvTGFiZWwpO1xuXG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzdW1tYXJ5Q29udGFpbmVyKTtcblxuICByZXR1cm4gaGVhZGVyQ29udGFpbmVyO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHdlbnR5Rm91ckhyKCkge1xuICBjb25zdCB0d2VudHlGb3VySHJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbiAgLy8gU2Nyb2xsIHNuYXAgY29udGFpbmVyXG4gIGNvbnN0IHNuYXBXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNuYXBXcmFwLmNsYXNzTmFtZSA9ICdzbmFwLWZyYW1lJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpICs9IDEpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSAnc25hcC1ibG9jayc7XG5cbiAgICAvLyBUaW1lIGxhYmVsXG4gICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpbWUuY2xhc3NOYW1lID0gJ2Jsb2NrLXRpbWUnO1xuICAgIHRpbWUuaW5uZXJUZXh0ID0gaTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRpbWUpO1xuXG4gICAgLy8gUmFpbiBsYWJlbFxuICAgIGNvbnN0IHJhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByYWluLmlubmVyVGV4dCA9ICczNiUnO1xuICAgIHJhaW4uY2xhc3NOYW1lID0gJ2Jsb2NrLXJhaW4nO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocmFpbik7XG5cbiAgICAvLyBUZW1wZXJhdHVyZSBsYWJlbFxuICAgIGNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWF0aGVyLmlubmVyVGV4dCA9ICdzdW5ueSc7XG4gICAgd2VhdGhlci5jbGFzc05hbWUgPSAnYmxvY2std2VhdGhlcic7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZCh3ZWF0aGVyKTtcblxuICAgIC8vIFRlbXBlcmF0dXJlIGxhYmVsXG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlbXAuaW5uZXJUZXh0ID0gJzIwwrAnO1xuICAgIHRlbXAuY2xhc3NOYW1lID0gJ2Jsb2NrLXRlbXAnO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGVtcCk7XG5cbiAgICBzbmFwV3JhcC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfVxuXG4gIHR3ZW50eUZvdXJIckNvbnRhaW5lci5hcHBlbmRDaGlsZChzbmFwV3JhcCk7XG5cbiAgcmV0dXJuIHR3ZW50eUZvdXJIckNvbnRhaW5lcjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdlZWsoKSB7XG4gIGNvbnN0IHdlZWtDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2Vla0NvbnRhaW5lci5jbGFzc05hbWUgPSAnd2Vlayc7XG5cbiAgLy8gVGFibGUgY29udGFpbmVyXG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgdGFibGUuaWQgPSAnc2V2ZW4tdGFibGUnO1xuXG4gIC8vIFRhYmxlIGhlYWRpbmdcbiAgY29uc3QgdGFibGVIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGhlYWQnKTtcbiAgY29uc3QgdEhlYWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuXG4gIGNvbnN0IGRheUNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gIGRheUNvbC5pbm5lclRleHQgPSAnRGF5JztcbiAgdEhlYWRSb3cuYXBwZW5kQ2hpbGQoZGF5Q29sKTtcblxuICBjb25zdCB3ZWF0aGVyQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgd2VhdGhlckNvbC5pbm5lclRleHQgPSAnV2VhdGhlcic7XG4gIHRIZWFkUm93LmFwcGVuZENoaWxkKHdlYXRoZXJDb2wpO1xuXG4gIGNvbnN0IHJhaW5Db2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICByYWluQ29sLmlubmVyVGV4dCA9ICdSYWluJztcbiAgdEhlYWRSb3cuYXBwZW5kQ2hpbGQocmFpbkNvbCk7XG5cbiAgY29uc3QgdGVtcENvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gIHRlbXBDb2wuaW5uZXJUZXh0ID0gJ1RlbXBlcmF0dXJlJztcbiAgdEhlYWRSb3cuYXBwZW5kQ2hpbGQodGVtcENvbCk7XG5cbiAgdGFibGVIZWFkLmFwcGVuZENoaWxkKHRIZWFkUm93KTtcbiAgdGFibGUuYXBwZW5kQ2hpbGQodGFibGVIZWFkKTtcblxuICAvLyBUYWJsZSBib2R5XG4gIGNvbnN0IHRhYmxlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG4gIHRhYmxlLmFwcGVuZENoaWxkKHRhYmxlQm9keSk7XG5cbiAgLy8gUm93XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpICs9IDEpIHtcbiAgICBjb25zdCBib2R5MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG5cbiAgICBjb25zdCByMWMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICByMWMxLmlubmVyVGV4dCA9ICdNb25kYXknO1xuICAgIGJvZHkxLmFwcGVuZENoaWxkKHIxYzEpO1xuXG4gICAgY29uc3QgcjFjMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgcjFjMi5pbm5lclRleHQgPSAnU3VubnknO1xuICAgIGJvZHkxLmFwcGVuZENoaWxkKHIxYzIpO1xuXG4gICAgY29uc3QgcjFjMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgcjFjMy5pbm5lclRleHQgPSAnNDMlJztcbiAgICBib2R5MS5hcHBlbmRDaGlsZChyMWMzKTtcblxuICAgIGNvbnN0IHIxYzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIHIxYzQuaW5uZXJUZXh0ID0gJzE5wrAnO1xuICAgIGJvZHkxLmFwcGVuZENoaWxkKHIxYzQpO1xuXG4gICAgdGFibGVCb2R5LmFwcGVuZENoaWxkKGJvZHkxKTtcbiAgfVxuXG4gIHdlZWtDb250YWluZXIuYXBwZW5kQ2hpbGQodGFibGUpO1xuXG4gIHJldHVybiB3ZWVrQ29udGFpbmVyO1xufVxuIiwiY29uc3QgRE9NY29udHJvbGxlciA9IChmdW5jdGlvbiBmYWN0b3J5KCkge1xuICBmdW5jdGlvbiBzZXRMb2FkaW5nKCkge1xuICAgIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzQnV0dG9uJyk7XG4gICAgc2VhcmNoQnV0dG9uLmlubmVySFRNTCA9ICcuLi5sb2FkaW5nJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFNlYXJjaCgpIHtcbiAgICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc0J1dHRvbicpO1xuICAgIHNlYXJjaEJ1dHRvbi5pbm5lckhUTUwgPSAnc2VhcmNoJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEhlYWRXZWF0aGVyKGNvbnRlbnQpIHtcbiAgICBjb25zdCBoZWFkZXJXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItbGFiZWwnKTtcbiAgICBoZWFkZXJXZWF0aGVyLmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRIZWFkVGVtcChjb250ZW50KSB7XG4gICAgY29uc3QgaGVhZGVyVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wLWxhYmVsJyk7XG4gICAgaGVhZGVyVGVtcC5pbm5lckhUTUwgPSBjb250ZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0SGVhZEhpTG8oY29udGVudCkge1xuICAgIGNvbnN0IGhlYWRlckhpTG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlsby1sYWJlbCcpO1xuICAgIGhlYWRlckhpTG8uaW5uZXJIVE1MID0gY29udGVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFNjcm9sbChjb250ZW50KSB7XG4gICAgLy8gU2Nyb2xsYWJsZSB3cmFwcGVyXG4gICAgY29uc3Qgc2Nyb2xsQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbmFwLWZyYW1lJyk7XG4gICAgc2Nyb2xsQXJlYS5pbm5lckhUTUwgPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgaG91clRlbXAgPSBNYXRoLnJvdW5kKGNvbnRlbnRbaV0udGVtcCk7XG4gICAgICBjb25zdCBob3VyV2VhdGhlciA9IGNvbnRlbnRbaV0ud2VhdGhlclswXS5tYWluO1xuICAgICAgY29uc3QgaG91clRpbWUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLnNldEhvdXJzKG5ldyBEYXRlKCkuZ2V0SG91cnMoKSArIGkpKS5nZXRIb3VycygpO1xuICAgICAgY29uc3QgaG91clJhaW4gPSBNYXRoLnJvdW5kKChjb250ZW50W2ldLnBvcCkgKiAxMDApO1xuXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSA9ICdzbmFwLWJsb2NrJztcblxuICAgICAgLy8gVGltZSBsYWJlbFxuICAgICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGltZS5jbGFzc05hbWUgPSAnYmxvY2stdGltZSc7XG4gICAgICB0aW1lLmlubmVyVGV4dCA9IGhvdXJUaW1lO1xuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aW1lKTtcblxuICAgICAgLy8gUmFpbiBsYWJlbFxuICAgICAgY29uc3QgcmFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcmFpbi5pbm5lclRleHQgPSBgJHtob3VyUmFpbn0lYDtcbiAgICAgIHJhaW4uY2xhc3NOYW1lID0gJ2Jsb2NrLXJhaW4nO1xuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChyYWluKTtcblxuICAgICAgLy8gVGVtcGVyYXR1cmUgbGFiZWxcbiAgICAgIGNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHdlYXRoZXIuaW5uZXJUZXh0ID0gaG91cldlYXRoZXI7XG4gICAgICB3ZWF0aGVyLmNsYXNzTmFtZSA9ICdibG9jay13ZWF0aGVyJztcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQod2VhdGhlcik7XG5cbiAgICAgIC8vIFRlbXBlcmF0dXJlIGxhYmVsXG4gICAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0ZW1wLmlubmVyVGV4dCA9IGAke2hvdXJUZW1wfcKwYDtcbiAgICAgIHRlbXAuY2xhc3NOYW1lID0gJ2Jsb2NrLXRlbXAnO1xuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0ZW1wKTtcblxuICAgICAgc2Nyb2xsQXJlYS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXREYXlzKGNvbnRlbnQpIHtcbiAgICBjb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0Ym9keScpO1xuICAgIHRhYmxlQm9keS5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBkYWlseURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRheXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGNvbnRlbnQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGRhaWx5RGF0ZS5zZXREYXRlKGRhaWx5RGF0ZS5nZXREYXRlKCkgKyAxKTtcblxuICAgICAgY29uc3QgZGFpbHlSYWluID0gTWF0aC5yb3VuZCgoY29udGVudFtpXS5wb3ApICogMTAwKTtcbiAgICAgIGNvbnN0IGRhaWx5VGVtcCA9IE1hdGgucm91bmQoY29udGVudFtpXS50ZW1wLmRheSk7XG4gICAgICBjb25zdCBkYWlseVdlYXRoZXIgPSBjb250ZW50W2ldLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgICBjb25zdCBib2R5MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG5cbiAgICAgIGNvbnN0IHIxYzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgcjFjMS5pbm5lclRleHQgPSBkYXlzW2RhaWx5RGF0ZS5nZXREYXkoKV07XG4gICAgICBib2R5MS5hcHBlbmRDaGlsZChyMWMxKTtcblxuICAgICAgY29uc3QgcjFjMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICByMWMyLmlubmVyVGV4dCA9IGRhaWx5V2VhdGhlcjtcbiAgICAgIGJvZHkxLmFwcGVuZENoaWxkKHIxYzIpO1xuXG4gICAgICBjb25zdCByMWMzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgIHIxYzMuaW5uZXJUZXh0ID0gYCR7ZGFpbHlSYWlufSVgO1xuICAgICAgYm9keTEuYXBwZW5kQ2hpbGQocjFjMyk7XG5cbiAgICAgIGNvbnN0IHIxYzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgcjFjNC5pbm5lclRleHQgPSBgJHtkYWlseVRlbXB9wrBgO1xuICAgICAgYm9keTEuYXBwZW5kQ2hpbGQocjFjNCk7XG5cbiAgICAgIHRhYmxlQm9keS5hcHBlbmRDaGlsZChib2R5MSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRMb2FkaW5nLFxuICAgIHNldFNlYXJjaCxcbiAgICBzZXRIZWFkV2VhdGhlcixcbiAgICBzZXRIZWFkVGVtcCxcbiAgICBzZXRIZWFkSGlMbyxcbiAgICBzZXRTY3JvbGwsXG4gICAgc2V0RGF5cyxcbiAgfTtcbn0oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IERPTWNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgRE9NY29udHJvbGxlciBmcm9tICcuL0RPTWNvbnRyb2xsZXInO1xuXG5jb25zdCBjb250cm9sbGVyID0gKGZ1bmN0aW9uIGZhY3RvcnkoKSB7XG4gIGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobGF0LCBsb24pIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mZXhjbHVkZT1taW51dGVseSZhcHBpZD0xMmUzZDU3NjExZDcwMDhiZWQyNmQ3NDdkODczMTQ0OSZ1bml0cz1tZXRyaWNgLCB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgfSk7XG4gICAgY29uc3QgYmFzZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAvLyBIYW5kbGUgdGhlIGRhdGFcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGJhc2VEYXRhLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICBjb25zdCBjdXJyZW50VGVtcCA9IGAke01hdGgucm91bmQoYmFzZURhdGEuY3VycmVudC50ZW1wKX3CsGA7XG4gICAgY29uc3QgY3VycmVudEhpTG8gPSBgSDoke01hdGgucm91bmQoYmFzZURhdGEuZGFpbHlbMF0udGVtcC5tYXgpfcKwIEw6JHtNYXRoLnJvdW5kKChiYXNlRGF0YS5kYWlseVswXS50ZW1wLm1pbikpfcKwYDtcbiAgICBjb25zdCBob3VybHlBcnJheSA9IGJhc2VEYXRhLmhvdXJseTtcbiAgICBjb25zdCBkYWlseUFycmF5ID0gYmFzZURhdGEuZGFpbHk7XG5cbiAgICAvLyBTZXQgaGVhZGVyIHZhbHVlc1xuICAgIERPTWNvbnRyb2xsZXIuc2V0SGVhZFdlYXRoZXIoY3VycmVudFdlYXRoZXIpO1xuICAgIERPTWNvbnRyb2xsZXIuc2V0SGVhZFRlbXAoY3VycmVudFRlbXApO1xuICAgIERPTWNvbnRyb2xsZXIuc2V0SGVhZEhpTG8oY3VycmVudEhpTG8pO1xuXG4gICAgLy8gU2V0IDI0aHIgdmFsdWVzXG4gICAgRE9NY29udHJvbGxlci5zZXRTY3JvbGwoaG91cmx5QXJyYXkpO1xuXG4gICAgLy8gU2V0IGRhaWx5IHZhbHVlc1xuICAgIERPTWNvbnRyb2xsZXIuc2V0RGF5cyhkYWlseUFycmF5KTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHNlYXJjaENvb3JkKGNpdHkpIHtcbiAgICBpZiAoY2l0eSA9PT0gJycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRW1wdHkgaW5wdXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgRE9NY29udHJvbGxlci5zZXRMb2FkaW5nKCk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0xMmUzZDU3NjExZDcwMDhiZWQyNmQ3NDdkODczMTQ0OWAsIHtcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBiYXNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgbGF0IH0gPSBiYXNlRGF0YS5jb29yZDtcbiAgICAgICAgY29uc3QgeyBsb24gfSA9IGJhc2VEYXRhLmNvb3JkO1xuICAgICAgICBhd2FpdCBnZXRXZWF0aGVyKGxhdCwgbG9uKTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBJZiB0aGUgc2VhcmNoIHRlcm0gcmV0dXJucyBubyBkYXRhXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU0VhcmNoIHRlcm0gcmV0dXJuZWQgbm8gZGF0YScpO1xuICAgICAgfVxuICAgICAgRE9NY29udHJvbGxlci5zZXRTZWFyY2goKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNlYXJjaENvb3JkLFxuICB9O1xufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgY29udHJvbGxlcjtcbiIsImltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XG5cbmNvbnN0IGxpc3RlbmVyID0gKGZ1bmN0aW9uIGZhY3RvcnkoKSB7XG4gIGZ1bmN0aW9uIHN0YXRpY0VsZW1lbnRzKCkge1xuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NJbnB1dCcpO1xuICAgIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzQnV0dG9uJyk7XG4gICAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29udHJvbGxlci5zZWFyY2hDb29yZChzZWFyY2hJbnB1dC52YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0YXRpY0VsZW1lbnRzLFxuICB9O1xufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgbGlzdGVuZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlL3N0eWxlLnNjc3MnO1xuaW1wb3J0IGhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCB0d2VudHlGb3VySHIgZnJvbSAnLi9jb21wb25lbnRzL21haW4nO1xuaW1wb3J0IHdlZWsgZnJvbSAnLi9jb21wb25lbnRzL3dlZWsnO1xuaW1wb3J0IGxpc3RlbmVyIGZyb20gJy4vY29udHJvbGxlcnMvbGlzdGVuZXJzJztcbmltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvY29udHJvbGxlcic7XG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodHdlbnR5Rm91ckhyKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VlaygpKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcbmxpc3RlbmVyLnN0YXRpY0VsZW1lbnRzKCk7XG5jb250cm9sbGVyLnNlYXJjaENvb3JkKCdMb25kb24nKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzSW5wdXQnKS52YWx1ZSA9ICdMb25kb24nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==