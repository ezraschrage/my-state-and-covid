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
/******/ 	__webpack_require__.p = "/dist/";
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
/*! no static exports found */
/***/ (function(module, exports) {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

document.addEventListener("DOMContentLoaded", function () {
  var stateIndex = {
    "AK": 0,
    "AL": 1,
    "AR": 2,
    "AS": 3,
    "AZ": 4,
    "CA": 5,
    "CO": 6,
    "CT": 7,
    "DC": 8,
    "DE": 9,
    // "FM": "Federated States Of Micronesia",
    "FL": 10,
    "GA": 11,
    "GU": 12,
    "HI": 13,
    "IA": 14,
    "ID": 15,
    "IL": 16,
    "IN": 17,
    "KS": 18,
    "KY": 19,
    "LA": 20,
    "MA": 21,
    "MD": 22,
    "ME": 23,
    "MI": 24,
    "MN": 25,
    "MO": 26,
    "MP": 27,
    "MS": 28,
    "MT": 29,
    "NC": 30,
    "ND": 31,
    "NE": 32,
    "NH": 33,
    "NJ": 34,
    "NM": 35,
    "NV": 36,
    "NY": 37,
    // "MP": "Northern Mariana Islands",
    "OH": 38,
    "OK": 39,
    "OR": 40,
    // "PW": "Palau",
    "PA": 41,
    "PR": 42,
    "RI": 43,
    "SC": 44,
    "SD": 45,
    "TN": 46,
    "TX": 47,
    "UT": 48,
    "VA": 49,
    "VI": 50,
    "VT": 51,
    "WA": 52,
    "WI": 53,
    "WV": 54,
    "WY": 55
  }; // let stateNameArray = Object.keys(stateNames);

  var margin = {
    top: 80,
    right: 180,
    bottom: 80,
    left: 180
  },
      width = 1000,
      height = 1000;
  var svg = d3.select("#data-section").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  var x = d3.scaleBand().range([0, width]).padding(1);
  var xAxis = svg.append("g").attr("transform", "translate(0," + height + ")");
  var y = d3.scaleLinear().range([height, 0]);
  var yAxis = svg.append('g'); // let findMax = data => {
  //     let values = Object.values(data)
  //     // console.log(values)
  //     let onlyNums = values.map(function (num) {
  //         // console.log(typeof num === "number")
  //         if (typeof num !== "number" || isNaN(num)) {
  //             return 0
  //         } else {
  //             return num
  //         }
  //     })

  function selectState(selectedState) {
    d3.csv("https://covidtracking.com/api/v1/states/current.csv", function (rawData) {
      // console.log(rawData)
      var stateData = rawData[stateIndex[selectedState]]; // console.log(stateData)

      var data = {}; // stateData.forEach(function (d) {

      for (var _i = 0, _Object$entries = Object.entries(stateData); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            d = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        if (d === 'positive' || d === 'negative' || d === 'death' || d === 'totalTestResults' || d === 'hospitalizedCurrently' || d === 'hospitalizedCumulative' || d === 'inIcuCurrently' || d === 'inIcuCumulative' || d === 'onVentilatorCurrently' || d === 'onVentilatorCumulative' || d === 'recovered' || d === 'recovered' || d === 'hospitalized') {
          data[d] = isNaN(parseInt(value)) ? 0 : parseInt(value);
        }
      }

      console.log(data);
      x.domain(Object.keys(data));
      console.log(Object.keys(data)); // console.log(data)
      // for (let i = 0; i < data.length; i += 1) {
      //     const state = data[i];
      //     const name = state.state;
      //     // console.log(data)
      //     // data[`${name}`] = {
      //     data.forEach(function (d) {
      //         d.abreviation = name,
      //         d.name = stateNames[name],
      //         d.positive = isNaN(parseInt(state.positive)) ? 0 : parseInt(state.positive),
      //         dnegative = isNaN(parseInt(state.negative)) ? 0 : parseInt(state.negative),
      //         d.death = isNaN(parseInt(state.death)) ? 0 :  parseInt(state.death),
      //         d.totalTestResults = isNaN(parseInt(state.totalTestResults)) ? 0 : parseInt(state.totalTestResults),
      //         d.hospitalizedCurrently = isNaN(parseInt(state.hospitalizedCurrently)) ? 0 : parseInt(state.hospitalizedCurrently),
      //         d.hospitalizedCumulative = isNaN(parseInt(state.hospitalizedCumulative)) ? 0 : parseInt(state.hospitalizedCumulative),
      //         d.inIcuCurrently = isNaN(parseInt(state.inIcuCurrently)) ? 0 : parseInt(state.inIcuCurrently),
      //         d.inIcuCumulative = isNaN(parseInt(state.inIcuCumulative)) ? 0 : parseInt(state.inIcuCumulative),
      //         d.onVentilatorCurrently = isNaN(parseInt(state.onVentilatorCurrently)) ? 0 : parseInt(state.onVentilatorCurrently),
      //         d.onVentilatorCumulative = isNaN(parseInt(state.onVentilatorCumulative)) ? 0 : parseInt(state.onVentilatorCumulative),
      //         d.recovered = isNaN(parseInt(state.recovered)) ? 0 : parseInt(state.recovered),
      //         d.hospitalized = isNaN(parseInt(state.hospitalized)) ? 0 : parseInt(state.hospitalized)
      //     })
      // }
      // let categories = Object.keys(states[0])
      //     .filter(function (d) {
      //         return ((d != "abreviation") & (d != "name"));
      //     });
      // let selection = Object.keys(data[37])
      //     .filter(key => categories.includes(key))
      //     .reduce((obj, key) => {
      //         return {
      //             ...obj,
      //             [key]: states[37][key]
      //         };
      //     }, {});
    });
  }

  selectState("NY");
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXRlSW5kZXgiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsIngiLCJzY2FsZUJhbmQiLCJyYW5nZSIsInBhZGRpbmciLCJ4QXhpcyIsInkiLCJzY2FsZUxpbmVhciIsInlBeGlzIiwic2VsZWN0U3RhdGUiLCJzZWxlY3RlZFN0YXRlIiwiY3N2IiwicmF3RGF0YSIsInN0YXRlRGF0YSIsImRhdGEiLCJPYmplY3QiLCJlbnRyaWVzIiwiZCIsInZhbHVlIiwiaXNOYU4iLCJwYXJzZUludCIsImNvbnNvbGUiLCJsb2ciLCJkb21haW4iLCJrZXlzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFB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QUwsR0FBeUIsQ0FBekIsR0FBNkJFLFFBQVEsQ0FBQ0YsS0FBRCxDQUEvQztBQUNQO0FBQ0o7O0FBRURHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZUixJQUFaO0FBRUFiLE9BQUMsQ0FBQ3NCLE1BQUYsQ0FBU1IsTUFBTSxDQUFDUyxJQUFQLENBQVlWLElBQVosQ0FBVDtBQUNBTyxhQUFPLENBQUNDLEdBQVIsQ0FBWVAsTUFBTSxDQUFDUyxJQUFQLENBQVlWLElBQVosQ0FBWixFQW5CNkUsQ0FzQjdFO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSCxLQS9ERDtBQWdFSDs7QUFDR0wsYUFBVyxDQUFDLElBQUQsQ0FBWDtBQUVILENBN0tELEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXG5jb25zdCBzdGF0ZUluZGV4ID0ge1xuICAgIFwiQUtcIjogMCxcbiAgICBcIkFMXCI6IDEsXG4gICAgXCJBUlwiOiAyLFxuICAgIFwiQVNcIjogMyxcbiAgICBcIkFaXCI6IDQsXG4gICAgXCJDQVwiOiA1LFxuICAgIFwiQ09cIjogNixcbiAgICBcIkNUXCI6IDcsXG4gICAgXCJEQ1wiOiA4LFxuICAgIFwiREVcIjogOSxcbiAgICAvLyBcIkZNXCI6IFwiRmVkZXJhdGVkIFN0YXRlcyBPZiBNaWNyb25lc2lhXCIsXG4gICAgXCJGTFwiOiAxMCxcbiAgICBcIkdBXCI6IDExLFxuICAgIFwiR1VcIjogMTIsXG4gICAgXCJISVwiOiAxMyxcbiAgICBcIklBXCI6IDE0LFxuICAgIFwiSURcIjogMTUsXG4gICAgXCJJTFwiOiAxNixcbiAgICBcIklOXCI6IDE3LFxuICAgIFwiS1NcIjogMTgsXG4gICAgXCJLWVwiOiAxOSxcbiAgICBcIkxBXCI6IDIwLFxuICAgIFwiTUFcIjogMjEsXG4gICAgXCJNRFwiOiAyMixcbiAgICBcIk1FXCI6IDIzLFxuICAgIFwiTUlcIjogMjQsXG4gICAgXCJNTlwiOiAyNSxcbiAgICBcIk1PXCI6IDI2LFxuICAgIFwiTVBcIjogMjcsXG4gICAgXCJNU1wiOiAyOCxcbiAgICBcIk1UXCI6IDI5LFxuICAgIFwiTkNcIjogMzAsXG4gICAgXCJORFwiOiAzMSxcbiAgICBcIk5FXCI6IDMyLFxuICAgIFwiTkhcIjogMzMsXG4gICAgXCJOSlwiOiAzNCxcbiAgICBcIk5NXCI6IDM1LFxuICAgIFwiTlZcIjogMzYsXG4gICAgXCJOWVwiOiAzNyxcbiAgICAvLyBcIk1QXCI6IFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsXG4gICAgXCJPSFwiOiAzOCxcbiAgICBcIk9LXCI6IDM5LFxuICAgIFwiT1JcIjogNDAsXG4gICAgLy8gXCJQV1wiOiBcIlBhbGF1XCIsXG4gICAgXCJQQVwiOiA0MSxcbiAgICBcIlBSXCI6IDQyLFxuICAgIFwiUklcIjogNDMsXG4gICAgXCJTQ1wiOiA0NCxcbiAgICBcIlNEXCI6IDQ1LFxuICAgIFwiVE5cIjogNDYsXG4gICAgXCJUWFwiOiA0NyxcbiAgICBcIlVUXCI6IDQ4LFxuICAgIFwiVkFcIjogNDksXG4gICAgXCJWSVwiOiA1MCxcbiAgICBcIlZUXCI6IDUxLFxuICAgIFwiV0FcIjogNTIsXG4gICAgXCJXSVwiOiA1MyxcbiAgICBcIldWXCI6IDU0LFxuICAgIFwiV1lcIjogNTVcbn1cblxuLy8gbGV0IHN0YXRlTmFtZUFycmF5ID0gT2JqZWN0LmtleXMoc3RhdGVOYW1lcyk7XG5cbmxldCBtYXJnaW4gPSB7IHRvcDogODAsIHJpZ2h0OiAxODAsIGJvdHRvbTogODAsIGxlZnQ6IDE4MCB9LFxuICAgIHdpZHRoID0gMTAwMCxcbiAgICBoZWlnaHQgPSAxMDAwO1xuXG5sZXQgc3ZnID0gZDMuc2VsZWN0KFwiI2RhdGEtc2VjdGlvblwiKVxuICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgICBcInRyYW5zbGF0ZShcIiArIG1hcmdpbi5sZWZ0ICsgXCIsXCIgKyBtYXJnaW4udG9wICsgXCIpXCIpO1xuXG5sZXQgeCA9IGQzLnNjYWxlQmFuZCgpXG4gICAgICAgIC5yYW5nZShbMCwgd2lkdGhdKVxuICAgICAgICAucGFkZGluZygxKVxuXG5sZXQgeEF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxuXG5sZXQgeSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgLnJhbmdlKFtoZWlnaHQsIDBdKVxuXG5sZXQgeUF4aXMgPSBzdmcuYXBwZW5kKCdnJylcblxuICAgIC8vIGxldCBmaW5kTWF4ID0gZGF0YSA9PiB7XG4gICAgLy8gICAgIGxldCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKGRhdGEpXG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlcylcbiAgICAvLyAgICAgbGV0IG9ubHlOdW1zID0gdmFsdWVzLm1hcChmdW5jdGlvbiAobnVtKSB7XG4gICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgbnVtID09PSBcIm51bWJlclwiKVxuICAgIC8vICAgICAgICAgaWYgKHR5cGVvZiBudW0gIT09IFwibnVtYmVyXCIgfHwgaXNOYU4obnVtKSkge1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiAwXG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiBudW1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSlcblxuXG5cbmZ1bmN0aW9uIHNlbGVjdFN0YXRlKHNlbGVjdGVkU3RhdGUpeyBcblxuICAgIGQzLmNzdihcImh0dHBzOi8vY292aWR0cmFja2luZy5jb20vYXBpL3YxL3N0YXRlcy9jdXJyZW50LmNzdlwiLCBmdW5jdGlvbiAocmF3RGF0YSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyYXdEYXRhKVxuICAgICAgICBsZXQgc3RhdGVEYXRhID0gcmF3RGF0YVtzdGF0ZUluZGV4W3NlbGVjdGVkU3RhdGVdXVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZURhdGEpXG4gICAgICAgIGxldCBkYXRhID0ge31cbiAgICAgICAgLy8gc3RhdGVEYXRhLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgZm9yIChsZXQgW2QsdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHN0YXRlRGF0YSkpIHtcbiAgICAgICAgICAgIGlmIChkID09PSAncG9zaXRpdmUnIHx8IGQgPT09ICduZWdhdGl2ZScgfHwgZCA9PT0gJ2RlYXRoJyB8fCBkID09PSAndG90YWxUZXN0UmVzdWx0cycgfHxcbiAgICAgICAgICAgICAgICBkID09PSAnaG9zcGl0YWxpemVkQ3VycmVudGx5JyB8fCBkID09PSAnaG9zcGl0YWxpemVkQ3VtdWxhdGl2ZScgfHwgXG4gICAgICAgICAgICAgICAgZCA9PT0gJ2luSWN1Q3VycmVudGx5JyB8fCBkID09PSAnaW5JY3VDdW11bGF0aXZlJyB8fCBkID09PSAnb25WZW50aWxhdG9yQ3VycmVudGx5JyB8fFxuICAgICAgICAgICAgICAgIGQgPT09ICdvblZlbnRpbGF0b3JDdW11bGF0aXZlJyB8fCBkID09PSAncmVjb3ZlcmVkJyB8fCBkID09PSAncmVjb3ZlcmVkJyB8fFxuICAgICAgICAgICAgICAgIGQgPT09ICdob3NwaXRhbGl6ZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFbZF0gPSBpc05hTihwYXJzZUludCh2YWx1ZSkpID8gMCA6IHBhcnNlSW50KHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcblxuICAgICAgICB4LmRvbWFpbihPYmplY3Qua2V5cyhkYXRhKSlcbiAgICAgICAgY29uc29sZS5sb2coT2JqZWN0LmtleXMoZGF0YSkpXG5cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAvLyAgICAgY29uc3Qgc3RhdGUgPSBkYXRhW2ldO1xuICAgICAgICAvLyAgICAgY29uc3QgbmFtZSA9IHN0YXRlLnN0YXRlO1xuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgLy8gICAgIC8vIGRhdGFbYCR7bmFtZX1gXSA9IHtcbiAgICAgICAgLy8gICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICAvLyAgICAgICAgIGQuYWJyZXZpYXRpb24gPSBuYW1lLFxuICAgICAgICAvLyAgICAgICAgIGQubmFtZSA9IHN0YXRlTmFtZXNbbmFtZV0sXG4gICAgICAgIC8vICAgICAgICAgZC5wb3NpdGl2ZSA9IGlzTmFOKHBhcnNlSW50KHN0YXRlLnBvc2l0aXZlKSkgPyAwIDogcGFyc2VJbnQoc3RhdGUucG9zaXRpdmUpLFxuICAgICAgICAvLyAgICAgICAgIGRuZWdhdGl2ZSA9IGlzTmFOKHBhcnNlSW50KHN0YXRlLm5lZ2F0aXZlKSkgPyAwIDogcGFyc2VJbnQoc3RhdGUubmVnYXRpdmUpLFxuICAgICAgICAvLyAgICAgICAgIGQuZGVhdGggPSBpc05hTihwYXJzZUludChzdGF0ZS5kZWF0aCkpID8gMCA6ICBwYXJzZUludChzdGF0ZS5kZWF0aCksXG4gICAgICAgIC8vICAgICAgICAgZC50b3RhbFRlc3RSZXN1bHRzID0gaXNOYU4ocGFyc2VJbnQoc3RhdGUudG90YWxUZXN0UmVzdWx0cykpID8gMCA6IHBhcnNlSW50KHN0YXRlLnRvdGFsVGVzdFJlc3VsdHMpLFxuICAgICAgICAvLyAgICAgICAgIGQuaG9zcGl0YWxpemVkQ3VycmVudGx5ID0gaXNOYU4ocGFyc2VJbnQoc3RhdGUuaG9zcGl0YWxpemVkQ3VycmVudGx5KSkgPyAwIDogcGFyc2VJbnQoc3RhdGUuaG9zcGl0YWxpemVkQ3VycmVudGx5KSxcbiAgICAgICAgLy8gICAgICAgICBkLmhvc3BpdGFsaXplZEN1bXVsYXRpdmUgPSBpc05hTihwYXJzZUludChzdGF0ZS5ob3NwaXRhbGl6ZWRDdW11bGF0aXZlKSkgPyAwIDogcGFyc2VJbnQoc3RhdGUuaG9zcGl0YWxpemVkQ3VtdWxhdGl2ZSksXG4gICAgICAgIC8vICAgICAgICAgZC5pbkljdUN1cnJlbnRseSA9IGlzTmFOKHBhcnNlSW50KHN0YXRlLmluSWN1Q3VycmVudGx5KSkgPyAwIDogcGFyc2VJbnQoc3RhdGUuaW5JY3VDdXJyZW50bHkpLFxuICAgICAgICAvLyAgICAgICAgIGQuaW5JY3VDdW11bGF0aXZlID0gaXNOYU4ocGFyc2VJbnQoc3RhdGUuaW5JY3VDdW11bGF0aXZlKSkgPyAwIDogcGFyc2VJbnQoc3RhdGUuaW5JY3VDdW11bGF0aXZlKSxcbiAgICAgICAgLy8gICAgICAgICBkLm9uVmVudGlsYXRvckN1cnJlbnRseSA9IGlzTmFOKHBhcnNlSW50KHN0YXRlLm9uVmVudGlsYXRvckN1cnJlbnRseSkpID8gMCA6IHBhcnNlSW50KHN0YXRlLm9uVmVudGlsYXRvckN1cnJlbnRseSksXG4gICAgICAgIC8vICAgICAgICAgZC5vblZlbnRpbGF0b3JDdW11bGF0aXZlID0gaXNOYU4ocGFyc2VJbnQoc3RhdGUub25WZW50aWxhdG9yQ3VtdWxhdGl2ZSkpID8gMCA6IHBhcnNlSW50KHN0YXRlLm9uVmVudGlsYXRvckN1bXVsYXRpdmUpLFxuICAgICAgICAvLyAgICAgICAgIGQucmVjb3ZlcmVkID0gaXNOYU4ocGFyc2VJbnQoc3RhdGUucmVjb3ZlcmVkKSkgPyAwIDogcGFyc2VJbnQoc3RhdGUucmVjb3ZlcmVkKSxcbiAgICAgICAgLy8gICAgICAgICBkLmhvc3BpdGFsaXplZCA9IGlzTmFOKHBhcnNlSW50KHN0YXRlLmhvc3BpdGFsaXplZCkpID8gMCA6IHBhcnNlSW50KHN0YXRlLmhvc3BpdGFsaXplZClcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vIH1cbiAgICAgICAgXG5cbiAgICAgICAgXG4gICAgICAgIC8vIGxldCBjYXRlZ29yaWVzID0gT2JqZWN0LmtleXMoc3RhdGVzWzBdKVxuICAgICAgICAvLyAgICAgLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiAoKGQgIT0gXCJhYnJldmlhdGlvblwiKSAmIChkICE9IFwibmFtZVwiKSk7XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIGxldCBzZWxlY3Rpb24gPSBPYmplY3Qua2V5cyhkYXRhWzM3XSlcbiAgICAgICAgLy8gICAgIC5maWx0ZXIoa2V5ID0+IGNhdGVnb3JpZXMuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgLy8gICAgIC5yZWR1Y2UoKG9iaiwga2V5KSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgLi4ub2JqLFxuICAgICAgICAvLyAgICAgICAgICAgICBba2V5XTogc3RhdGVzWzM3XVtrZXldXG4gICAgICAgIC8vICAgICAgICAgfTtcbiAgICAgICAgLy8gICAgIH0sIHt9KTtcblxuICAgIH0pO1xufVxuICAgIHNlbGVjdFN0YXRlKFwiTllcIilcbiAgIFxufSkiXSwic291cmNlUm9vdCI6IiJ9