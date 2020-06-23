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

  var capitalize = function capitalize(word) {
    var wordArray = word.split('');
    var newWord = [];
    wordArray.forEach(function (char, i) {
      if (char !== char.toUpperCase()) {
        newWord.push(char);
      } else {
        newWord.push(' ' + char.toUpperCase());
      }
    });
    newWord[0] = newWord[0].toUpperCase();
    return newWord.join('');
  };

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
          d = capitalize(d);
          data[d] = isNaN(parseInt(value)) ? 0 : +parseInt(value);
        }
      }

      console.log(data);
      x.domain(Object.keys(data)); // console.log(Object.keys(x))
      // console.log(x["domain"])

      xAxis.transition().duration(1000).call(d3.axisBottom(x)).attr("transform", "translate(-0.2," + height + ")").selectAll("text").attr("transform", "translate(-10,0)rotate(-45)").style("text-anchor", "end").attr('x', -8);
      var maxY = d3.max(Object.values(data)); // console.log(maxY)

      y.domain([0, maxY]);
      yAxis.transition().duration(1000).call(d3.axisLeft(y)); // let test1 = data = (d) => {
      //     console.log(d)
      // }
      // console.log(Object.entries(x))
      // console.log(Object.entries(y))

      console.log(x.bandwidth());
      svg.selectAll(".bar").data(data).enter().append("rect").attr("class", "bar") // .attr("x", function (d, i) { return x(data[i])})
      .attr("x", function (d) {
        return x(d);
      }).attr("y", function (d, i) {
        return Object.values(y[i]);
      }).attr("width", x.bandwidth()).attr("height", function (d, i) {
        return height - y(d);
      }).style("fill", "#69b3a2"); // for (let i = 0; i < data.length; i += 1) {
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

  selectState("NJ");
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXRlSW5kZXgiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsIngiLCJzY2FsZUJhbmQiLCJyYW5nZSIsInBhZGRpbmciLCJ4QXhpcyIsInkiLCJzY2FsZUxpbmVhciIsInlBeGlzIiwiY2FwaXRhbGl6ZSIsIndvcmQiLCJ3b3JkQXJyYXkiLCJzcGxpdCIsIm5ld1dvcmQiLCJmb3JFYWNoIiwiY2hhciIsImkiLCJ0b1VwcGVyQ2FzZSIsInB1c2giLCJqb2luIiwic2VsZWN0U3RhdGUiLCJzZWxlY3RlZFN0YXRlIiwiY3N2IiwicmF3RGF0YSIsInN0YXRlRGF0YSIsImRhdGEiLCJPYmplY3QiLCJlbnRyaWVzIiwiZCIsInZhbHVlIiwiaXNOYU4iLCJwYXJzZUludCIsImNvbnNvbGUiLCJsb2ciLCJkb21haW4iLCJrZXlzIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY2FsbCIsImF4aXNCb3R0b20iLCJzZWxlY3RBbGwiLCJzdHlsZSIsIm1heFkiLCJtYXgiLCJ2YWx1ZXMiLCJheGlzTGVmdCIsImJhbmR3aWR0aCIsImVudGVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlE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LEVBQWU7QUFBRSxlQUFPVSxNQUFNLENBQUNrQixNQUFQLENBQWN0QyxDQUFDLENBQUNVLENBQUQsQ0FBZixDQUFQO0FBQTJCLE9BTjNELEVBT0toQixJQVBMLENBT1UsT0FQVixFQU9tQkMsQ0FBQyxDQUFDNkMsU0FBRixFQVBuQixFQVFLOUMsSUFSTCxDQVFVLFFBUlYsRUFRb0IsVUFBVTRCLENBQVYsRUFBWVosQ0FBWixFQUFlO0FBQUUsZUFBT3JCLE1BQU0sR0FBR1csQ0FBQyxDQUFDc0IsQ0FBRCxDQUFqQjtBQUFxQixPQVIxRCxFQVNLYSxLQVRMLENBU1csTUFUWCxFQVNtQixTQVRuQixFQWxENkUsQ0E2RDdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUgsS0FwR0Q7QUFxR0g7O0FBQ0dyQixhQUFXLENBQUMsSUFBRCxDQUFYO0FBRUgsQ0FoT0QsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cbmNvbnN0IHN0YXRlSW5kZXggPSB7XG4gICAgXCJBS1wiOiAwLFxuICAgIFwiQUxcIjogMSxcbiAgICBcIkFSXCI6IDIsXG4gICAgXCJBU1wiOiAzLFxuICAgIFwiQVpcIjogNCxcbiAgICBcIkNBXCI6IDUsXG4gICAgXCJDT1wiOiA2LFxuICAgIFwiQ1RcIjogNyxcbiAgICBcIkRDXCI6IDgsXG4gICAgXCJERVwiOiA5LFxuICAgIC8vIFwiRk1cIjogXCJGZWRlcmF0ZWQgU3RhdGVzIE9mIE1pY3JvbmVzaWFcIixcbiAgICBcIkZMXCI6IDEwLFxuICAgIFwiR0FcIjogMTEsXG4gICAgXCJHVVwiOiAxMixcbiAgICBcIkhJXCI6IDEzLFxuICAgIFwiSUFcIjogMTQsXG4gICAgXCJJRFwiOiAxNSxcbiAgICBcIklMXCI6IDE2LFxuICAgIFwiSU5cIjogMTcsXG4gICAgXCJLU1wiOiAxOCxcbiAgICBcIktZXCI6IDE5LFxuICAgIFwiTEFcIjogMjAsXG4gICAgXCJNQVwiOiAyMSxcbiAgICBcIk1EXCI6IDIyLFxuICAgIFwiTUVcIjogMjMsXG4gICAgXCJNSVwiOiAyNCxcbiAgICBcIk1OXCI6IDI1LFxuICAgIFwiTU9cIjogMjYsXG4gICAgXCJNUFwiOiAyNyxcbiAgICBcIk1TXCI6IDI4LFxuICAgIFwiTVRcIjogMjksXG4gICAgXCJOQ1wiOiAzMCxcbiAgICBcIk5EXCI6IDMxLFxuICAgIFwiTkVcIjogMzIsXG4gICAgXCJOSFwiOiAzMyxcbiAgICBcIk5KXCI6IDM0LFxuICAgIFwiTk1cIjogMzUsXG4gICAgXCJOVlwiOiAzNixcbiAgICBcIk5ZXCI6IDM3LFxuICAgIC8vIFwiTVBcIjogXCJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHNcIixcbiAgICBcIk9IXCI6IDM4LFxuICAgIFwiT0tcIjogMzksXG4gICAgXCJPUlwiOiA0MCxcbiAgICAvLyBcIlBXXCI6IFwiUGFsYXVcIixcbiAgICBcIlBBXCI6IDQxLFxuICAgIFwiUFJcIjogNDIsXG4gICAgXCJSSVwiOiA0MyxcbiAgICBcIlNDXCI6IDQ0LFxuICAgIFwiU0RcIjogNDUsXG4gICAgXCJUTlwiOiA0NixcbiAgICBcIlRYXCI6IDQ3LFxuICAgIFwiVVRcIjogNDgsXG4gICAgXCJWQVwiOiA0OSxcbiAgICBcIlZJXCI6IDUwLFxuICAgIFwiVlRcIjogNTEsXG4gICAgXCJXQVwiOiA1MixcbiAgICBcIldJXCI6IDUzLFxuICAgIFwiV1ZcIjogNTQsXG4gICAgXCJXWVwiOiA1NVxufVxuXG4vLyBsZXQgc3RhdGVOYW1lQXJyYXkgPSBPYmplY3Qua2V5cyhzdGF0ZU5hbWVzKTtcblxubGV0IG1hcmdpbiA9IHsgdG9wOiA4MCwgcmlnaHQ6IDE4MCwgYm90dG9tOiA4MCwgbGVmdDogMTgwIH0sXG4gICAgd2lkdGggPSAxMDAwLFxuICAgIGhlaWdodCA9IDEwMDA7XG5cbmxldCBzdmcgPSBkMy5zZWxlY3QoXCIjZGF0YS1zZWN0aW9uXCIpXG4gICAgLmFwcGVuZChcInN2Z1wiKVxuICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcbiAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSlcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsXG4gICAgICAgIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIik7XG5cbmxldCB4ID0gZDMuc2NhbGVCYW5kKClcbiAgICAgICAgLnJhbmdlKFswLCB3aWR0aF0pXG4gICAgICAgIC5wYWRkaW5nKDEpXG5cbmxldCB4QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG5cbmxldCB5ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAucmFuZ2UoW2hlaWdodCwgMF0pXG5cbmxldCB5QXhpcyA9IHN2Zy5hcHBlbmQoJ2cnKVxuXG4gICAgLy8gbGV0IGZpbmRNYXggPSBkYXRhID0+IHtcbiAgICAvLyAgICAgbGV0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMoZGF0YSlcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2codmFsdWVzKVxuICAgIC8vICAgICBsZXQgb25seU51bXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uIChudW0pIHtcbiAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiBudW0gPT09IFwibnVtYmVyXCIpXG4gICAgLy8gICAgICAgICBpZiAodHlwZW9mIG51bSAhPT0gXCJudW1iZXJcIiB8fCBpc05hTihudW0pKSB7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIG51bVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9KVxuXG5sZXQgY2FwaXRhbGl6ZSA9IHdvcmQgPT4ge1xuICAgIGxldCB3b3JkQXJyYXkgPSB3b3JkLnNwbGl0KCcnKVxuICAgIGxldCBuZXdXb3JkID0gW107XG4gICAgd29yZEFycmF5LmZvckVhY2goKGNoYXIsIGkpID0+IHtcbiAgICAgICAgaWYgKGNoYXIgIT09IGNoYXIudG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgICAgbmV3V29yZC5wdXNoKGNoYXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdXb3JkLnB1c2goJyAnICsgY2hhci50b1VwcGVyQ2FzZSgpKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIG5ld1dvcmRbMF0gPSBuZXdXb3JkWzBdLnRvVXBwZXJDYXNlKClcbiAgICByZXR1cm4gbmV3V29yZC5qb2luKCcnKVxufVxuXG5cbmZ1bmN0aW9uIHNlbGVjdFN0YXRlKHNlbGVjdGVkU3RhdGUpeyBcblxuICAgIGQzLmNzdihcImh0dHBzOi8vY292aWR0cmFja2luZy5jb20vYXBpL3YxL3N0YXRlcy9jdXJyZW50LmNzdlwiLCBmdW5jdGlvbiAocmF3RGF0YSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyYXdEYXRhKVxuICAgICAgICBsZXQgc3RhdGVEYXRhID0gcmF3RGF0YVtzdGF0ZUluZGV4W3NlbGVjdGVkU3RhdGVdXVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZURhdGEpXG4gICAgICAgIGxldCBkYXRhID0ge31cbiAgICAgICAgLy8gc3RhdGVEYXRhLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgZm9yIChsZXQgW2QsdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHN0YXRlRGF0YSkpIHtcbiAgICAgICAgICAgIGlmIChkID09PSAncG9zaXRpdmUnIHx8IGQgPT09ICduZWdhdGl2ZScgfHwgZCA9PT0gJ2RlYXRoJyB8fCBkID09PSAndG90YWxUZXN0UmVzdWx0cycgfHxcbiAgICAgICAgICAgICAgICBkID09PSAnaG9zcGl0YWxpemVkQ3VycmVudGx5JyB8fCBkID09PSAnaG9zcGl0YWxpemVkQ3VtdWxhdGl2ZScgfHwgXG4gICAgICAgICAgICAgICAgZCA9PT0gJ2luSWN1Q3VycmVudGx5JyB8fCBkID09PSAnaW5JY3VDdW11bGF0aXZlJyB8fCBkID09PSAnb25WZW50aWxhdG9yQ3VycmVudGx5JyB8fFxuICAgICAgICAgICAgICAgIGQgPT09ICdvblZlbnRpbGF0b3JDdW11bGF0aXZlJyB8fCBkID09PSAncmVjb3ZlcmVkJyB8fCBkID09PSAncmVjb3ZlcmVkJyB8fFxuICAgICAgICAgICAgICAgIGQgPT09ICdob3NwaXRhbGl6ZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGQgPSBjYXBpdGFsaXplKGQpXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbZF0gPSBpc05hTihwYXJzZUludCh2YWx1ZSkpID8gMCA6ICtwYXJzZUludCh2YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgICAgICAgeC5kb21haW4oT2JqZWN0LmtleXMoZGF0YSkpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKHgpKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh4W1wiZG9tYWluXCJdKVxuXG4gICAgICAgIFxuICAgICAgICB4QXhpcy50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKC0wLjIsXCIgKyBoZWlnaHQgKyBcIilcIilcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgtMTAsMClyb3RhdGUoLTQ1KVwiKVxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcbiAgICAgICAgICAgIC5hdHRyKCd4JywgLTgpXG5cbiAgICAgICAgbGV0IG1heFkgPSBkMy5tYXgoT2JqZWN0LnZhbHVlcyhkYXRhKSlcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhtYXhZKVxuXG4gICAgICAgIHkuZG9tYWluKFswLCBtYXhZXSlcblxuICAgICAgICB5QXhpcy50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpXG5cbiAgICAgICAgLy8gbGV0IHRlc3QxID0gZGF0YSA9IChkKSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhkKVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKE9iamVjdC5lbnRyaWVzKHgpKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhPYmplY3QuZW50cmllcyh5KSlcbiAgICAgICAgY29uc29sZS5sb2coeC5iYW5kd2lkdGgoKSlcblxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwiLmJhclwiKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXJcIilcbiAgICAgICAgICAgIC8vIC5hdHRyKFwieFwiLCBmdW5jdGlvbiAoZCwgaSkgeyByZXR1cm4geChkYXRhW2ldKX0pXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHgoZCl9KVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkLGkpIHsgcmV0dXJuIE9iamVjdC52YWx1ZXMoeVtpXSl9KVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB4LmJhbmR3aWR0aCgpKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQsaSkgeyByZXR1cm4gaGVpZ2h0IC0geShkKX0pXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwiIzY5YjNhMlwiKVxuXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAvLyAgICAgY29uc3Qgc3RhdGUgPSBkYXRhW2ldO1xuICAgICAgICAvLyAgICAgY29uc3QgbmFtZSA9IHN0YXRlLnN0YXRlO1xuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgLy8gICAgIC8vIGRhdGFbYCR7bmFtZX1gXSA9IHtcbiAgICAgICAgLy8gICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICAvLyAgICAgICAgIGQuYWJyZXZpYXRpb24gPSBuYW1lLFxuICAgICAgICAvLyAgICAgICAgIGQubmFtZSA9IHN0YXRlTmFtZXNbbmFtZV0sXG4gICAgICAgIC8vICAgICAgICAgZC5wb3NpdGl2ZSA9IGlzTmFOKHBhcnNlSW50KHN0YXRlLnBvc2l0aXZlKSkgPyAwIDogcGFyc2VJbnQoc3RhdGUucG9zaXRpdmUpLFxuICAgICAgICAvLyAgICAgICAgIGRuZWdhdGl2ZSA9IGlzTmFOKHBhcnNlSW50KHN0YXRlLm5lZ2F0aXZlKSkgPyAwIDogcGFyc2VJbnQoc3RhdGUubmVnYXRpdmUpLFxuICAgICAgICAvLyAgICAgICAgIGQuZGVhdGggPSBpc05hTihwYXJzZUludChzdGF0ZS5kZWF0aCkpID8gMCA6ICBwYXJzZUludChzdGF0ZS5kZWF0aCksXG4gICAgICAgIC8vICAgICAgICAgZC50b3RhbFRlc3RSZXN1bHRzID0gaXNOYU4ocGFyc2VJbnQoc3RhdGUudG90YWxUZXN0UmVzdWx0cykpID8gMCA6IHBhcnNlSW50KHN0YXRlLnRvdGFsVGVzdFJlc3VsdHMpLFxuICAgICAgICAvLyAgICAgICAgIGQuaG9zcGl0YWxpemVkQ3VycmVudGx5ID0gaXNOYU4ocGFyc2VJbnQoc3RhdGUuaG9zcGl0YWxpemVkQ3VycmVudGx5KSkgPyAwIDogcGFyc2VJbnQoc3RhdGUuaG9zcGl0YWxpemVkQ3VycmVudGx5KSxcbiAgICAgICAgLy8gICAgICAgICBkLmhvc3BpdGFsaXplZEN1bXVsYXRpdmUgPSBpc05hTihwYXJzZUludChzdGF0ZS5ob3NwaXRhbGl6ZWRDdW11bGF0aXZlKSkgPyAwIDogcGFyc2VJbnQoc3RhdGUuaG9zcGl0YWxpemVkQ3VtdWxhdGl2ZSksXG4gICAgICAgIC8vICAgICAgICAgZC5pbkljdUN1cnJlbnRseSA9IGlzTmFOKHBhcnNlSW50KHN0YXRlLmluSWN1Q3VycmVudGx5KSkgPyAwIDogcGFyc2VJbnQoc3RhdGUuaW5JY3VDdXJyZW50bHkpLFxuICAgICAgICAvLyAgICAgICAgIGQuaW5JY3VDdW11bGF0aXZlID0gaXNOYU4ocGFyc2VJbnQoc3RhdGUuaW5JY3VDdW11bGF0aXZlKSkgPyAwIDogcGFyc2VJbnQoc3RhdGUuaW5JY3VDdW11bGF0aXZlKSxcbiAgICAgICAgLy8gICAgICAgICBkLm9uVmVudGlsYXRvckN1cnJlbnRseSA9IGlzTmFOKHBhcnNlSW50KHN0YXRlLm9uVmVudGlsYXRvckN1cnJlbnRseSkpID8gMCA6IHBhcnNlSW50KHN0YXRlLm9uVmVudGlsYXRvckN1cnJlbnRseSksXG4gICAgICAgIC8vICAgICAgICAgZC5vblZlbnRpbGF0b3JDdW11bGF0aXZlID0gaXNOYU4ocGFyc2VJbnQoc3RhdGUub25WZW50aWxhdG9yQ3VtdWxhdGl2ZSkpID8gMCA6IHBhcnNlSW50KHN0YXRlLm9uVmVudGlsYXRvckN1bXVsYXRpdmUpLFxuICAgICAgICAvLyAgICAgICAgIGQucmVjb3ZlcmVkID0gaXNOYU4ocGFyc2VJbnQoc3RhdGUucmVjb3ZlcmVkKSkgPyAwIDogcGFyc2VJbnQoc3RhdGUucmVjb3ZlcmVkKSxcbiAgICAgICAgLy8gICAgICAgICBkLmhvc3BpdGFsaXplZCA9IGlzTmFOKHBhcnNlSW50KHN0YXRlLmhvc3BpdGFsaXplZCkpID8gMCA6IHBhcnNlSW50KHN0YXRlLmhvc3BpdGFsaXplZClcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vIH1cbiAgICAgICAgXG5cbiAgICAgICAgXG4gICAgICAgIC8vIGxldCBjYXRlZ29yaWVzID0gT2JqZWN0LmtleXMoc3RhdGVzWzBdKVxuICAgICAgICAvLyAgICAgLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiAoKGQgIT0gXCJhYnJldmlhdGlvblwiKSAmIChkICE9IFwibmFtZVwiKSk7XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIGxldCBzZWxlY3Rpb24gPSBPYmplY3Qua2V5cyhkYXRhWzM3XSlcbiAgICAgICAgLy8gICAgIC5maWx0ZXIoa2V5ID0+IGNhdGVnb3JpZXMuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgLy8gICAgIC5yZWR1Y2UoKG9iaiwga2V5KSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgLi4ub2JqLFxuICAgICAgICAvLyAgICAgICAgICAgICBba2V5XTogc3RhdGVzWzM3XVtrZXldXG4gICAgICAgIC8vICAgICAgICAgfTtcbiAgICAgICAgLy8gICAgIH0sIHt9KTtcblxuICAgIH0pO1xufVxuICAgIHNlbGVjdFN0YXRlKFwiTkpcIilcbiAgIFxufSkiXSwic291cmNlUm9vdCI6IiJ9