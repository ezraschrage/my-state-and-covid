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
  var yAxis = svg.append('g');

  function selectState(selectedState) {
    d3.csv("https://covidtracking.com/api/v1/states/current.csv", function (rawData) {
      console.log(rawData);
      var data = Object.keys(rawData[0]).filter(function (d) {
        return d != "abreviation" & d != "name";
      }); // console.log(data)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXRlSW5kZXgiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsIngiLCJzY2FsZUJhbmQiLCJyYW5nZSIsInBhZGRpbmciLCJ4QXhpcyIsInkiLCJzY2FsZUxpbmVhciIsInlBeGlzIiwic2VsZWN0U3RhdGUiLCJzZWxlY3RlZFN0YXRlIiwiY3N2IiwicmF3RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsImQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xG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RCxDQUNPLENBQUNSLE1BQUQsRUFBUyxDQUFULENBRFAsQ0FBUjtBQUdBLE1BQUlhLEtBQUssR0FBR1osR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxDQUFaOztBQUVBLFdBQVNVLFdBQVQsQ0FBcUJDLGFBQXJCLEVBQW1DO0FBRS9CYixNQUFFLENBQUNjLEdBQUgsQ0FBTyxxREFBUCxFQUE4RCxVQUFVQyxPQUFWLEVBQW1CO0FBQzdFQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUNBLFVBQUlHLElBQUksR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlMLE9BQU8sQ0FBQyxDQUFELENBQW5CLEVBQ05NLE1BRE0sQ0FDQyxVQUFVQyxDQUFWLEVBQWE7QUFDakIsZUFBU0EsQ0FBQyxJQUFJLGFBQU4sR0FBd0JBLENBQUMsSUFBSSxNQUFyQztBQUNILE9BSE0sQ0FBWCxDQUY2RSxDQU96RTtBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUgsS0FoREQ7QUFpREg7O0FBQ0dWLGFBQVcsQ0FBQyxJQUFELENBQVg7QUFFSCxDQWhKRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuY29uc3Qgc3RhdGVJbmRleCA9IHtcbiAgICBcIkFLXCI6IDAsXG4gICAgXCJBTFwiOiAxLFxuICAgIFwiQVJcIjogMixcbiAgICBcIkFTXCI6IDMsXG4gICAgXCJBWlwiOiA0LFxuICAgIFwiQ0FcIjogNSxcbiAgICBcIkNPXCI6IDYsXG4gICAgXCJDVFwiOiA3LFxuICAgIFwiRENcIjogOCxcbiAgICBcIkRFXCI6IDksXG4gICAgLy8gXCJGTVwiOiBcIkZlZGVyYXRlZCBTdGF0ZXMgT2YgTWljcm9uZXNpYVwiLFxuICAgIFwiRkxcIjogMTAsXG4gICAgXCJHQVwiOiAxMSxcbiAgICBcIkdVXCI6IDEyLFxuICAgIFwiSElcIjogMTMsXG4gICAgXCJJQVwiOiAxNCxcbiAgICBcIklEXCI6IDE1LFxuICAgIFwiSUxcIjogMTYsXG4gICAgXCJJTlwiOiAxNyxcbiAgICBcIktTXCI6IDE4LFxuICAgIFwiS1lcIjogMTksXG4gICAgXCJMQVwiOiAyMCxcbiAgICBcIk1BXCI6IDIxLFxuICAgIFwiTURcIjogMjIsXG4gICAgXCJNRVwiOiAyMyxcbiAgICBcIk1JXCI6IDI0LFxuICAgIFwiTU5cIjogMjUsXG4gICAgXCJNT1wiOiAyNixcbiAgICBcIk1QXCI6IDI3LFxuICAgIFwiTVNcIjogMjgsXG4gICAgXCJNVFwiOiAyOSxcbiAgICBcIk5DXCI6IDMwLFxuICAgIFwiTkRcIjogMzEsXG4gICAgXCJORVwiOiAzMixcbiAgICBcIk5IXCI6IDMzLFxuICAgIFwiTkpcIjogMzQsXG4gICAgXCJOTVwiOiAzNSxcbiAgICBcIk5WXCI6IDM2LFxuICAgIFwiTllcIjogMzcsXG4gICAgLy8gXCJNUFwiOiBcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kc1wiLFxuICAgIFwiT0hcIjogMzgsXG4gICAgXCJPS1wiOiAzOSxcbiAgICBcIk9SXCI6IDQwLFxuICAgIC8vIFwiUFdcIjogXCJQYWxhdVwiLFxuICAgIFwiUEFcIjogNDEsXG4gICAgXCJQUlwiOiA0MixcbiAgICBcIlJJXCI6IDQzLFxuICAgIFwiU0NcIjogNDQsXG4gICAgXCJTRFwiOiA0NSxcbiAgICBcIlROXCI6IDQ2LFxuICAgIFwiVFhcIjogNDcsXG4gICAgXCJVVFwiOiA0OCxcbiAgICBcIlZBXCI6IDQ5LFxuICAgIFwiVklcIjogNTAsXG4gICAgXCJWVFwiOiA1MSxcbiAgICBcIldBXCI6IDUyLFxuICAgIFwiV0lcIjogNTMsXG4gICAgXCJXVlwiOiA1NCxcbiAgICBcIldZXCI6IDU1XG59XG5cbi8vIGxldCBzdGF0ZU5hbWVBcnJheSA9IE9iamVjdC5rZXlzKHN0YXRlTmFtZXMpO1xuXG5sZXQgbWFyZ2luID0geyB0b3A6IDgwLCByaWdodDogMTgwLCBib3R0b206IDgwLCBsZWZ0OiAxODAgfSxcbiAgICB3aWR0aCA9IDEwMDAsXG4gICAgaGVpZ2h0ID0gMTAwMDtcblxubGV0IHN2ZyA9IGQzLnNlbGVjdChcIiNkYXRhLXNlY3Rpb25cIilcbiAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKVxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxubGV0IHggPSBkMy5zY2FsZUJhbmQoKVxuICAgICAgICAucmFuZ2UoWzAsIHdpZHRoXSlcbiAgICAgICAgLnBhZGRpbmcoMSlcblxubGV0IHhBeGlzID0gc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcblxubGV0IHkgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5yYW5nZShbaGVpZ2h0LCAwXSlcblxubGV0IHlBeGlzID0gc3ZnLmFwcGVuZCgnZycpXG5cbmZ1bmN0aW9uIHNlbGVjdFN0YXRlKHNlbGVjdGVkU3RhdGUpeyBcblxuICAgIGQzLmNzdihcImh0dHBzOi8vY292aWR0cmFja2luZy5jb20vYXBpL3YxL3N0YXRlcy9jdXJyZW50LmNzdlwiLCBmdW5jdGlvbiAocmF3RGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhyYXdEYXRhKVxuICAgICAgICBsZXQgZGF0YSA9IE9iamVjdC5rZXlzKHJhd0RhdGFbMF0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgoZCAhPSBcImFicmV2aWF0aW9uXCIpICYgKGQgIT0gXCJuYW1lXCIpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAvLyAgICAgY29uc3Qgc3RhdGUgPSBkYXRhW2ldO1xuICAgICAgICAvLyAgICAgY29uc3QgbmFtZSA9IHN0YXRlLnN0YXRlO1xuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgLy8gICAgIC8vIGRhdGFbYCR7bmFtZX1gXSA9IHtcbiAgICAgICAgLy8gICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICAvLyAgICAgICAgIGQuYWJyZXZpYXRpb24gPSBuYW1lLFxuICAgICAgICAvLyAgICAgICAgIGQubmFtZSA9IHN0YXRlTmFtZXNbbmFtZV0sXG4gICAgICAgIC8vICAgICAgICAgZC5wb3NpdGl2ZSA9IGlzTmFOKHBhcnNlSW50KHN0YXRlLnBvc2l0aXZlKSkgPyAwIDogcGFyc2VJbnQoc3RhdGUucG9zaXRpdmUpLFxuICAgICAgICAvLyAgICAgICAgIGRuZWdhdGl2ZSA9IGlzTmFOKHBhcnNlSW50KHN0YXRlLm5lZ2F0aXZlKSkgPyAwIDogcGFyc2VJbnQoc3RhdGUubmVnYXRpdmUpLFxuICAgICAgICAvLyAgICAgICAgIGQuZGVhdGggPSBpc05hTihwYXJzZUludChzdGF0ZS5kZWF0aCkpID8gMCA6ICBwYXJzZUludChzdGF0ZS5kZWF0aCksXG4gICAgICAgIC8vICAgICAgICAgZC50b3RhbFRlc3RSZXN1bHRzID0gaXNOYU4ocGFyc2VJbnQoc3RhdGUudG90YWxUZXN0UmVzdWx0cykpID8gMCA6IHBhcnNlSW50KHN0YXRlLnRvdGFsVGVzdFJlc3VsdHMpLFxuICAgICAgICAvLyAgICAgICAgIGQuaG9zcGl0YWxpemVkQ3VycmVudGx5ID0gaXNOYU4ocGFyc2VJbnQoc3RhdGUuaG9zcGl0YWxpemVkQ3VycmVudGx5KSkgPyAwIDogcGFyc2VJbnQoc3RhdGUuaG9zcGl0YWxpemVkQ3VycmVudGx5KSxcbiAgICAgICAgLy8gICAgICAgICBkLmhvc3BpdGFsaXplZEN1bXVsYXRpdmUgPSBpc05hTihwYXJzZUludChzdGF0ZS5ob3NwaXRhbGl6ZWRDdW11bGF0aXZlKSkgPyAwIDogcGFyc2VJbnQoc3RhdGUuaG9zcGl0YWxpemVkQ3VtdWxhdGl2ZSksXG4gICAgICAgIC8vICAgICAgICAgZC5pbkljdUN1cnJlbnRseSA9IGlzTmFOKHBhcnNlSW50KHN0YXRlLmluSWN1Q3VycmVudGx5KSkgPyAwIDogcGFyc2VJbnQoc3RhdGUuaW5JY3VDdXJyZW50bHkpLFxuICAgICAgICAvLyAgICAgICAgIGQuaW5JY3VDdW11bGF0aXZlID0gaXNOYU4ocGFyc2VJbnQoc3RhdGUuaW5JY3VDdW11bGF0aXZlKSkgPyAwIDogcGFyc2VJbnQoc3RhdGUuaW5JY3VDdW11bGF0aXZlKSxcbiAgICAgICAgLy8gICAgICAgICBkLm9uVmVudGlsYXRvckN1cnJlbnRseSA9IGlzTmFOKHBhcnNlSW50KHN0YXRlLm9uVmVudGlsYXRvckN1cnJlbnRseSkpID8gMCA6IHBhcnNlSW50KHN0YXRlLm9uVmVudGlsYXRvckN1cnJlbnRseSksXG4gICAgICAgIC8vICAgICAgICAgZC5vblZlbnRpbGF0b3JDdW11bGF0aXZlID0gaXNOYU4ocGFyc2VJbnQoc3RhdGUub25WZW50aWxhdG9yQ3VtdWxhdGl2ZSkpID8gMCA6IHBhcnNlSW50KHN0YXRlLm9uVmVudGlsYXRvckN1bXVsYXRpdmUpLFxuICAgICAgICAvLyAgICAgICAgIGQucmVjb3ZlcmVkID0gaXNOYU4ocGFyc2VJbnQoc3RhdGUucmVjb3ZlcmVkKSkgPyAwIDogcGFyc2VJbnQoc3RhdGUucmVjb3ZlcmVkKSxcbiAgICAgICAgLy8gICAgICAgICBkLmhvc3BpdGFsaXplZCA9IGlzTmFOKHBhcnNlSW50KHN0YXRlLmhvc3BpdGFsaXplZCkpID8gMCA6IHBhcnNlSW50KHN0YXRlLmhvc3BpdGFsaXplZClcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vIH1cbiAgICAgICAgXG5cbiAgICAgICAgXG4gICAgICAgIC8vIGxldCBjYXRlZ29yaWVzID0gT2JqZWN0LmtleXMoc3RhdGVzWzBdKVxuICAgICAgICAvLyAgICAgLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiAoKGQgIT0gXCJhYnJldmlhdGlvblwiKSAmIChkICE9IFwibmFtZVwiKSk7XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIGxldCBzZWxlY3Rpb24gPSBPYmplY3Qua2V5cyhkYXRhWzM3XSlcbiAgICAgICAgLy8gICAgIC5maWx0ZXIoa2V5ID0+IGNhdGVnb3JpZXMuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgLy8gICAgIC5yZWR1Y2UoKG9iaiwga2V5KSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgLi4ub2JqLFxuICAgICAgICAvLyAgICAgICAgICAgICBba2V5XTogc3RhdGVzWzM3XVtrZXldXG4gICAgICAgIC8vICAgICAgICAgfTtcbiAgICAgICAgLy8gICAgIH0sIHt9KTtcblxuICAgIH0pO1xufVxuICAgIHNlbGVjdFN0YXRlKFwiTllcIilcbiAgIFxufSkiXSwic291cmNlUm9vdCI6IiJ9