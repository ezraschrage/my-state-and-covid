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

      var data = []; // stateData.forEach(function (d) {

      for (var _i = 0, _Object$entries = Object.entries(stateData); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            d = _Object$entries$_i[0],
            v = _Object$entries$_i[1];

        if (d === 'positive' || d === 'negative' || d === 'death' || d === 'totalTestResults' || d === 'hospitalizedCurrently' || d === 'hospitalizedCumulative' || d === 'inIcuCurrently' || d === 'inIcuCumulative' || d === 'onVentilatorCurrently' || d === 'onVentilatorCumulative' || d === 'recovered' || d === 'recovered' || d === 'hospitalized') {
          d = capitalize(d);
          data.push({
            category: d,
            value: isNaN(parseInt(v)) ? +0 : +parseInt(v)
          });
        }
      }

      console.log(data);
      x.domain(data.map(function (d) {
        return d.category;
      })); // console.log(Object.keys(x))
      // console.log(x["domain"])
      // xAxis.transition()
      //     .duration(1000)
      //     .call(d3.axisBottom(x))
      //     .attr("transform", "translate(-0.2," + height + ")")
      //     .selectAll("text")
      //     .attr("transform", "translate(-10,0)rotate(-45)")
      //     .style("text-anchor", "end")
      //     .attr('x', -8)

      var maxY = d3.max(data, function (d) {
        return d.value;
      }); // console.log(maxY)

      y.domain([0, maxY]); // yAxis.transition()
      //     .duration(1000)
      //     .call(d3.axisLeft(y))
      // let test1 = data = (d) => {
      //     console.log(d)
      // }
      // console.log(Object.entries(x))
      // console.log(Object.entries(y))

      console.log(x.bandwidth());
      svg.selectAll(".bar").data(data).enter().append("rect").attr("class", "bar") // .attr("x", function (d, i) { return x(data[i])})
      .attr("x", function (d) {
        return x(d.category);
      }).attr("y", function (d) {
        return y(d.value);
      }).attr("width", 100).attr("height", function (d) {
        return height - y(d.value);
      }).style("fill", "#69b3a2");
      svg.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(x)); // add the y Axis

      svg.append("g").call(d3.axisLeft(y)); // for (let i = 0; i < data.length; i += 1) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXRlSW5kZXgiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsIngiLCJzY2FsZUJhbmQiLCJyYW5nZSIsInBhZGRpbmciLCJ4QXhpcyIsInkiLCJzY2FsZUxpbmVhciIsInlBeGlzIiwiY2FwaXRhbGl6ZSIsIndvcmQiLCJ3b3JkQXJyYXkiLCJzcGxpdCIsIm5ld1dvcmQiLCJmb3JFYWNoIiwiY2hhciIsImkiLCJ0b1VwcGVyQ2FzZSIsInB1c2giLCJqb2luIiwic2VsZWN0U3RhdGUiLCJzZWxlY3RlZFN0YXRlIiwiY3N2IiwicmF3RGF0YSIsInN0YXRlRGF0YSIsImRhdGEiLCJPYmplY3QiLCJlbnRyaWVzIiwiZCIsInYiLCJjYXRlZ29yeSIsInZhbHVlIiwiaXNOYU4iLCJwYXJzZUludCIsImNvbnNvbGUiLCJsb2ciLCJkb21haW4iLCJtYXAiLCJtYXhZIiwibWF4IiwiYmFuZHdpZHRoIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJzdHlsZSIsImNhbGwiLCJheGlzQm90dG9tIiwiYXhpc0xlZnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FB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S0FUTCxDQVNXLE1BVFgsRUFTbUIsU0FUbkI7QUFXQS9DLFNBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFDS0MsSUFETCxDQUNVLFdBRFYsRUFDdUIsaUJBQWlCTCxNQUFqQixHQUEwQixHQURqRCxFQUVLaUQsSUFGTCxDQUVVL0MsRUFBRSxDQUFDZ0QsVUFBSCxDQUFjNUMsQ0FBZCxDQUZWLEVBN0Q2RSxDQWlFN0U7O0FBQ0FMLFNBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFDSzZDLElBREwsQ0FDVS9DLEVBQUUsQ0FBQ2lELFFBQUgsQ0FBWXhDLENBQVosQ0FEVixFQWxFNkUsQ0FxRTdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUgsS0E1R0Q7QUE2R0g7O0FBQ0djLGFBQVcsQ0FBQyxJQUFELENBQVg7QUFFSCxDQXhPRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuY29uc3Qgc3RhdGVJbmRleCA9IHtcbiAgICBcIkFLXCI6IDAsXG4gICAgXCJBTFwiOiAxLFxuICAgIFwiQVJcIjogMixcbiAgICBcIkFTXCI6IDMsXG4gICAgXCJBWlwiOiA0LFxuICAgIFwiQ0FcIjogNSxcbiAgICBcIkNPXCI6IDYsXG4gICAgXCJDVFwiOiA3LFxuICAgIFwiRENcIjogOCxcbiAgICBcIkRFXCI6IDksXG4gICAgLy8gXCJGTVwiOiBcIkZlZGVyYXRlZCBTdGF0ZXMgT2YgTWljcm9uZXNpYVwiLFxuICAgIFwiRkxcIjogMTAsXG4gICAgXCJHQVwiOiAxMSxcbiAgICBcIkdVXCI6IDEyLFxuICAgIFwiSElcIjogMTMsXG4gICAgXCJJQVwiOiAxNCxcbiAgICBcIklEXCI6IDE1LFxuICAgIFwiSUxcIjogMTYsXG4gICAgXCJJTlwiOiAxNyxcbiAgICBcIktTXCI6IDE4LFxuICAgIFwiS1lcIjogMTksXG4gICAgXCJMQVwiOiAyMCxcbiAgICBcIk1BXCI6IDIxLFxuICAgIFwiTURcIjogMjIsXG4gICAgXCJNRVwiOiAyMyxcbiAgICBcIk1JXCI6IDI0LFxuICAgIFwiTU5cIjogMjUsXG4gICAgXCJNT1wiOiAyNixcbiAgICBcIk1QXCI6IDI3LFxuICAgIFwiTVNcIjogMjgsXG4gICAgXCJNVFwiOiAyOSxcbiAgICBcIk5DXCI6IDMwLFxuICAgIFwiTkRcIjogMzEsXG4gICAgXCJORVwiOiAzMixcbiAgICBcIk5IXCI6IDMzLFxuICAgIFwiTkpcIjogMzQsXG4gICAgXCJOTVwiOiAzNSxcbiAgICBcIk5WXCI6IDM2LFxuICAgIFwiTllcIjogMzcsXG4gICAgLy8gXCJNUFwiOiBcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kc1wiLFxuICAgIFwiT0hcIjogMzgsXG4gICAgXCJPS1wiOiAzOSxcbiAgICBcIk9SXCI6IDQwLFxuICAgIC8vIFwiUFdcIjogXCJQYWxhdVwiLFxuICAgIFwiUEFcIjogNDEsXG4gICAgXCJQUlwiOiA0MixcbiAgICBcIlJJXCI6IDQzLFxuICAgIFwiU0NcIjogNDQsXG4gICAgXCJTRFwiOiA0NSxcbiAgICBcIlROXCI6IDQ2LFxuICAgIFwiVFhcIjogNDcsXG4gICAgXCJVVFwiOiA0OCxcbiAgICBcIlZBXCI6IDQ5LFxuICAgIFwiVklcIjogNTAsXG4gICAgXCJWVFwiOiA1MSxcbiAgICBcIldBXCI6IDUyLFxuICAgIFwiV0lcIjogNTMsXG4gICAgXCJXVlwiOiA1NCxcbiAgICBcIldZXCI6IDU1XG59XG5cbi8vIGxldCBzdGF0ZU5hbWVBcnJheSA9IE9iamVjdC5rZXlzKHN0YXRlTmFtZXMpO1xuXG5sZXQgbWFyZ2luID0geyB0b3A6IDgwLCByaWdodDogMTgwLCBib3R0b206IDgwLCBsZWZ0OiAxODAgfSxcbiAgICB3aWR0aCA9IDEwMDAsXG4gICAgaGVpZ2h0ID0gMTAwMDtcblxubGV0IHN2ZyA9IGQzLnNlbGVjdChcIiNkYXRhLXNlY3Rpb25cIilcbiAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKVxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxubGV0IHggPSBkMy5zY2FsZUJhbmQoKVxuICAgICAgICAucmFuZ2UoWzAsIHdpZHRoXSlcbiAgICAgICAgLnBhZGRpbmcoMSlcblxubGV0IHhBeGlzID0gc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcblxubGV0IHkgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5yYW5nZShbaGVpZ2h0LCAwXSlcblxubGV0IHlBeGlzID0gc3ZnLmFwcGVuZCgnZycpXG5cbiAgICAvLyBsZXQgZmluZE1heCA9IGRhdGEgPT4ge1xuICAgIC8vICAgICBsZXQgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXRhKVxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZXMpXG4gICAgLy8gICAgIGxldCBvbmx5TnVtcyA9IHZhbHVlcy5tYXAoZnVuY3Rpb24gKG51bSkge1xuICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2codHlwZW9mIG51bSA9PT0gXCJudW1iZXJcIilcbiAgICAvLyAgICAgICAgIGlmICh0eXBlb2YgbnVtICE9PSBcIm51bWJlclwiIHx8IGlzTmFOKG51bSkpIHtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gMFxuICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gbnVtXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0pXG5cbmxldCBjYXBpdGFsaXplID0gd29yZCA9PiB7XG4gICAgbGV0IHdvcmRBcnJheSA9IHdvcmQuc3BsaXQoJycpXG4gICAgbGV0IG5ld1dvcmQgPSBbXTtcbiAgICB3b3JkQXJyYXkuZm9yRWFjaCgoY2hhciwgaSkgPT4ge1xuICAgICAgICBpZiAoY2hhciAhPT0gY2hhci50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgICBuZXdXb3JkLnB1c2goY2hhcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1dvcmQucHVzaCgnICcgKyBjaGFyLnRvVXBwZXJDYXNlKCkpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgbmV3V29yZFswXSA9IG5ld1dvcmRbMF0udG9VcHBlckNhc2UoKVxuICAgIHJldHVybiBuZXdXb3JkLmpvaW4oJycpXG59XG5cblxuZnVuY3Rpb24gc2VsZWN0U3RhdGUoc2VsZWN0ZWRTdGF0ZSl7IFxuXG4gICAgZDMuY3N2KFwiaHR0cHM6Ly9jb3ZpZHRyYWNraW5nLmNvbS9hcGkvdjEvc3RhdGVzL2N1cnJlbnQuY3N2XCIsIGZ1bmN0aW9uIChyYXdEYXRhKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJhd0RhdGEpXG4gICAgICAgIGxldCBzdGF0ZURhdGEgPSByYXdEYXRhW3N0YXRlSW5kZXhbc2VsZWN0ZWRTdGF0ZV1dXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlRGF0YSlcbiAgICAgICAgbGV0IGRhdGEgPSBbXVxuICAgICAgICAvLyBzdGF0ZURhdGEuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICBmb3IgKGxldCBbZCx2XSBvZiBPYmplY3QuZW50cmllcyhzdGF0ZURhdGEpKSB7XG4gICAgICAgICAgICBpZiAoZCA9PT0gJ3Bvc2l0aXZlJyB8fCBkID09PSAnbmVnYXRpdmUnIHx8IGQgPT09ICdkZWF0aCcgfHwgZCA9PT0gJ3RvdGFsVGVzdFJlc3VsdHMnIHx8XG4gICAgICAgICAgICAgICAgZCA9PT0gJ2hvc3BpdGFsaXplZEN1cnJlbnRseScgfHwgZCA9PT0gJ2hvc3BpdGFsaXplZEN1bXVsYXRpdmUnIHx8IFxuICAgICAgICAgICAgICAgIGQgPT09ICdpbkljdUN1cnJlbnRseScgfHwgZCA9PT0gJ2luSWN1Q3VtdWxhdGl2ZScgfHwgZCA9PT0gJ29uVmVudGlsYXRvckN1cnJlbnRseScgfHxcbiAgICAgICAgICAgICAgICBkID09PSAnb25WZW50aWxhdG9yQ3VtdWxhdGl2ZScgfHwgZCA9PT0gJ3JlY292ZXJlZCcgfHwgZCA9PT0gJ3JlY292ZXJlZCcgfHxcbiAgICAgICAgICAgICAgICBkID09PSAnaG9zcGl0YWxpemVkJykge1xuICAgICAgICAgICAgICAgICAgICBkID0gY2FwaXRhbGl6ZShkKVxuICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goIHsgY2F0ZWdvcnk6IGQsIHZhbHVlOiBpc05hTihwYXJzZUludCh2KSkgPyArMCA6ICtwYXJzZUludCh2KSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcblxuICAgICAgICB4LmRvbWFpbihkYXRhLm1hcChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5jYXRlZ29yeX0pKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyh4KSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coeFtcImRvbWFpblwiXSlcblxuICAgICAgICBcbiAgICAgICAgLy8geEF4aXMudHJhbnNpdGlvbigpXG4gICAgICAgIC8vICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgLy8gICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXG4gICAgICAgIC8vICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgtMC4yLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgIC8vICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVxuICAgICAgICAvLyAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoLTEwLDApcm90YXRlKC00NSlcIilcbiAgICAgICAgLy8gICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAgIC8vICAgICAuYXR0cigneCcsIC04KVxuXG4gICAgICAgIGxldCBtYXhZID0gZDMubWF4KGRhdGEsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnZhbHVlIH0pXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cobWF4WSlcblxuICAgICAgICB5LmRvbWFpbihbMCwgbWF4WV0pXG5cbiAgICAgICAgLy8geUF4aXMudHJhbnNpdGlvbigpXG4gICAgICAgIC8vICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgLy8gICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKVxuXG4gICAgICAgIC8vIGxldCB0ZXN0MSA9IGRhdGEgPSAoZCkgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZClcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhPYmplY3QuZW50cmllcyh4KSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coT2JqZWN0LmVudHJpZXMoeSkpXG4gICAgICAgIGNvbnNvbGUubG9nKHguYmFuZHdpZHRoKCkpXG5cbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcIi5iYXJcIilcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFyXCIpXG4gICAgICAgICAgICAvLyAuYXR0cihcInhcIiwgZnVuY3Rpb24gKGQsIGkpIHsgcmV0dXJuIHgoZGF0YVtpXSl9KVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB4KGQuY2F0ZWdvcnkpfSlcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geShkLnZhbHVlKX0pXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIDEwMClcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBoZWlnaHQgLSB5KGQudmFsdWUpfSlcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCIjNjliM2EyXCIpXG5cbiAgICAgICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpO1xuXG4gICAgICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSk7XG5cbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIC8vICAgICBjb25zdCBzdGF0ZSA9IGRhdGFbaV07XG4gICAgICAgIC8vICAgICBjb25zdCBuYW1lID0gc3RhdGUuc3RhdGU7XG4gICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAvLyAgICAgLy8gZGF0YVtgJHtuYW1lfWBdID0ge1xuICAgICAgICAvLyAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIC8vICAgICAgICAgZC5hYnJldmlhdGlvbiA9IG5hbWUsXG4gICAgICAgIC8vICAgICAgICAgZC5uYW1lID0gc3RhdGVOYW1lc1tuYW1lXSxcbiAgICAgICAgLy8gICAgICAgICBkLnBvc2l0aXZlID0gaXNOYU4ocGFyc2VJbnQoc3RhdGUucG9zaXRpdmUpKSA/IDAgOiBwYXJzZUludChzdGF0ZS5wb3NpdGl2ZSksXG4gICAgICAgIC8vICAgICAgICAgZG5lZ2F0aXZlID0gaXNOYU4ocGFyc2VJbnQoc3RhdGUubmVnYXRpdmUpKSA/IDAgOiBwYXJzZUludChzdGF0ZS5uZWdhdGl2ZSksXG4gICAgICAgIC8vICAgICAgICAgZC5kZWF0aCA9IGlzTmFOKHBhcnNlSW50KHN0YXRlLmRlYXRoKSkgPyAwIDogIHBhcnNlSW50KHN0YXRlLmRlYXRoKSxcbiAgICAgICAgLy8gICAgICAgICBkLnRvdGFsVGVzdFJlc3VsdHMgPSBpc05hTihwYXJzZUludChzdGF0ZS50b3RhbFRlc3RSZXN1bHRzKSkgPyAwIDogcGFyc2VJbnQoc3RhdGUudG90YWxUZXN0UmVzdWx0cyksXG4gICAgICAgIC8vICAgICAgICAgZC5ob3NwaXRhbGl6ZWRDdXJyZW50bHkgPSBpc05hTihwYXJzZUludChzdGF0ZS5ob3NwaXRhbGl6ZWRDdXJyZW50bHkpKSA/IDAgOiBwYXJzZUludChzdGF0ZS5ob3NwaXRhbGl6ZWRDdXJyZW50bHkpLFxuICAgICAgICAvLyAgICAgICAgIGQuaG9zcGl0YWxpemVkQ3VtdWxhdGl2ZSA9IGlzTmFOKHBhcnNlSW50KHN0YXRlLmhvc3BpdGFsaXplZEN1bXVsYXRpdmUpKSA/IDAgOiBwYXJzZUludChzdGF0ZS5ob3NwaXRhbGl6ZWRDdW11bGF0aXZlKSxcbiAgICAgICAgLy8gICAgICAgICBkLmluSWN1Q3VycmVudGx5ID0gaXNOYU4ocGFyc2VJbnQoc3RhdGUuaW5JY3VDdXJyZW50bHkpKSA/IDAgOiBwYXJzZUludChzdGF0ZS5pbkljdUN1cnJlbnRseSksXG4gICAgICAgIC8vICAgICAgICAgZC5pbkljdUN1bXVsYXRpdmUgPSBpc05hTihwYXJzZUludChzdGF0ZS5pbkljdUN1bXVsYXRpdmUpKSA/IDAgOiBwYXJzZUludChzdGF0ZS5pbkljdUN1bXVsYXRpdmUpLFxuICAgICAgICAvLyAgICAgICAgIGQub25WZW50aWxhdG9yQ3VycmVudGx5ID0gaXNOYU4ocGFyc2VJbnQoc3RhdGUub25WZW50aWxhdG9yQ3VycmVudGx5KSkgPyAwIDogcGFyc2VJbnQoc3RhdGUub25WZW50aWxhdG9yQ3VycmVudGx5KSxcbiAgICAgICAgLy8gICAgICAgICBkLm9uVmVudGlsYXRvckN1bXVsYXRpdmUgPSBpc05hTihwYXJzZUludChzdGF0ZS5vblZlbnRpbGF0b3JDdW11bGF0aXZlKSkgPyAwIDogcGFyc2VJbnQoc3RhdGUub25WZW50aWxhdG9yQ3VtdWxhdGl2ZSksXG4gICAgICAgIC8vICAgICAgICAgZC5yZWNvdmVyZWQgPSBpc05hTihwYXJzZUludChzdGF0ZS5yZWNvdmVyZWQpKSA/IDAgOiBwYXJzZUludChzdGF0ZS5yZWNvdmVyZWQpLFxuICAgICAgICAvLyAgICAgICAgIGQuaG9zcGl0YWxpemVkID0gaXNOYU4ocGFyc2VJbnQoc3RhdGUuaG9zcGl0YWxpemVkKSkgPyAwIDogcGFyc2VJbnQoc3RhdGUuaG9zcGl0YWxpemVkKVxuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gfVxuICAgICAgICBcblxuICAgICAgICBcbiAgICAgICAgLy8gbGV0IGNhdGVnb3JpZXMgPSBPYmplY3Qua2V5cyhzdGF0ZXNbMF0pXG4gICAgICAgIC8vICAgICAuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuICgoZCAhPSBcImFicmV2aWF0aW9uXCIpICYgKGQgIT0gXCJuYW1lXCIpKTtcbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gbGV0IHNlbGVjdGlvbiA9IE9iamVjdC5rZXlzKGRhdGFbMzddKVxuICAgICAgICAvLyAgICAgLmZpbHRlcihrZXkgPT4gY2F0ZWdvcmllcy5pbmNsdWRlcyhrZXkpKVxuICAgICAgICAvLyAgICAgLnJlZHVjZSgob2JqLCBrZXkpID0+IHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4ge1xuICAgICAgICAvLyAgICAgICAgICAgICAuLi5vYmosXG4gICAgICAgIC8vICAgICAgICAgICAgIFtrZXldOiBzdGF0ZXNbMzddW2tleV1cbiAgICAgICAgLy8gICAgICAgICB9O1xuICAgICAgICAvLyAgICAgfSwge30pO1xuXG4gICAgfSk7XG59XG4gICAgc2VsZWN0U3RhdGUoXCJOSlwiKVxuICAgXG59KSJdLCJzb3VyY2VSb290IjoiIn0=