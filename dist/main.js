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
    "OH": 38,
    "OK": 39,
    "OR": 40,
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
  };
  var margin = 80,
      // let margin = { top: 80, right: 180, bottom: 80, left: 180 },
  width = 1000 - 2 * margin,
      height = 600 - 2 * margin;
  console.log(margin.left);
  var svg = d3.select("#data-section").append("svg").attr("width", width + 2 * margin).attr("height", height + 2 * margin).append("g").attr("transform", "translate(".concat(margin, ", ").concat(margin, ")"));
  var x = d3.scaleBand().range([0, width]).padding(0.5);
  var xAxis = svg.append("g").attr("transform", "translate(0," + height + ")");
  var y = d3.scaleLinear().range([height, 0]);
  var yAxis = svg.append('g');

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

          if (!isNaN(parseInt(v))) {
            data.push({
              category: d,
              value: +parseInt(v)
            });
          }
        }
      }

      console.log(data);
      x.domain(data.map(function (d) {
        return d.category;
      })); // console.log(Object.keys(x))
      // console.log(x["domain"])

      xAxis.transition().duration(1000).call(d3.axisBottom(x)).attr("transform", "translate(-0.2," + height + ")").selectAll("text").attr("transform", "translate(-10,0)rotate(-45)").style("text-anchor", "end").attr('x', -8);
      var maxY = d3.max(data, function (d) {
        return d.value;
      }); // console.log(maxY)

      y.domain([0, maxY]);
      yAxis.transition().duration(1000).call(d3.axisLeft(y)); // let test1 = data = (d) => {
      //     console.log(d)
      // }
      // console.log(Object.entries(x))
      // console.log(Object.entries(y))

      console.log(x.bandwidth());
      svg.selectAll(".bar").data(data).enter().append("rect").attr("class", "bar").attr("x", function (d) {
        return x(d.category);
      }).attr("y", function (d) {
        return y(d.value);
      }).attr("width", x.bandwidth()).attr("height", function (d) {
        return height - y(d.value);
      }).style("fill", "#69b3a2");
    });
  }

  selectState("NJ");
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXRlSW5kZXgiLCJtYXJnaW4iLCJ3aWR0aCIsImhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJsZWZ0Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwieCIsInNjYWxlQmFuZCIsInJhbmdlIiwicGFkZGluZyIsInhBeGlzIiwieSIsInNjYWxlTGluZWFyIiwieUF4aXMiLCJjYXBpdGFsaXplIiwid29yZCIsIndvcmRBcnJheSIsInNwbGl0IiwibmV3V29yZCIsImZvckVhY2giLCJjaGFyIiwiaSIsInRvVXBwZXJDYXNlIiwicHVzaCIsImpvaW4iLCJzZWxlY3RTdGF0ZSIsInNlbGVjdGVkU3RhdGUiLCJjc3YiLCJyYXdEYXRhIiwic3RhdGVEYXRhIiwiZGF0YSIsIk9iamVjdCIsImVudHJpZXMiLCJkIiwidiIsImlzTmFOIiwicGFyc2VJbnQiLCJjYXRlZ29yeSIsInZhbHVlIiwiZG9tYWluIiwibWFwIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY2FsbCIsImF4aXNCb3R0b20iLCJzZWxlY3RBbGwiLCJzdHlsZSIsIm1heFkiLCJtYXgiLCJheGlzTGVmdCIsImJhbmR3aWR0aCIsImVudGVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztR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bkIsRUFPSzdDLElBUEwsQ0FPVSxRQVBWLEVBT29CLFVBQVU0QixDQUFWLEVBQWE7QUFBRSxlQUFPcEMsTUFBTSxHQUFHYyxDQUFDLENBQUNzQixDQUFDLENBQUNLLEtBQUgsQ0FBakI7QUFBMkIsT0FQOUQsRUFRS1EsS0FSTCxDQVFXLE1BUlgsRUFRbUIsU0FSbkI7QUFVSCxLQTlERDtBQStESDs7QUFDR3JCLGFBQVcsQ0FBQyxJQUFELENBQVg7QUFFSCxDQTNLRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuY29uc3Qgc3RhdGVJbmRleCA9IHtcbiAgICBcIkFLXCI6IDAsXG4gICAgXCJBTFwiOiAxLFxuICAgIFwiQVJcIjogMixcbiAgICBcIkFTXCI6IDMsXG4gICAgXCJBWlwiOiA0LFxuICAgIFwiQ0FcIjogNSxcbiAgICBcIkNPXCI6IDYsXG4gICAgXCJDVFwiOiA3LFxuICAgIFwiRENcIjogOCxcbiAgICBcIkRFXCI6IDksXG4gICAgXCJGTFwiOiAxMCxcbiAgICBcIkdBXCI6IDExLFxuICAgIFwiR1VcIjogMTIsXG4gICAgXCJISVwiOiAxMyxcbiAgICBcIklBXCI6IDE0LFxuICAgIFwiSURcIjogMTUsXG4gICAgXCJJTFwiOiAxNixcbiAgICBcIklOXCI6IDE3LFxuICAgIFwiS1NcIjogMTgsXG4gICAgXCJLWVwiOiAxOSxcbiAgICBcIkxBXCI6IDIwLFxuICAgIFwiTUFcIjogMjEsXG4gICAgXCJNRFwiOiAyMixcbiAgICBcIk1FXCI6IDIzLFxuICAgIFwiTUlcIjogMjQsXG4gICAgXCJNTlwiOiAyNSxcbiAgICBcIk1PXCI6IDI2LFxuICAgIFwiTVBcIjogMjcsXG4gICAgXCJNU1wiOiAyOCxcbiAgICBcIk1UXCI6IDI5LFxuICAgIFwiTkNcIjogMzAsXG4gICAgXCJORFwiOiAzMSxcbiAgICBcIk5FXCI6IDMyLFxuICAgIFwiTkhcIjogMzMsXG4gICAgXCJOSlwiOiAzNCxcbiAgICBcIk5NXCI6IDM1LFxuICAgIFwiTlZcIjogMzYsXG4gICAgXCJOWVwiOiAzNyxcbiAgICBcIk9IXCI6IDM4LFxuICAgIFwiT0tcIjogMzksXG4gICAgXCJPUlwiOiA0MCxcbiAgICBcIlBBXCI6IDQxLFxuICAgIFwiUFJcIjogNDIsXG4gICAgXCJSSVwiOiA0MyxcbiAgICBcIlNDXCI6IDQ0LFxuICAgIFwiU0RcIjogNDUsXG4gICAgXCJUTlwiOiA0NixcbiAgICBcIlRYXCI6IDQ3LFxuICAgIFwiVVRcIjogNDgsXG4gICAgXCJWQVwiOiA0OSxcbiAgICBcIlZJXCI6IDUwLFxuICAgIFwiVlRcIjogNTEsXG4gICAgXCJXQVwiOiA1MixcbiAgICBcIldJXCI6IDUzLFxuICAgIFwiV1ZcIjogNTQsXG4gICAgXCJXWVwiOiA1NVxufVxuXG5sZXQgbWFyZ2luID0gODAsXG4vLyBsZXQgbWFyZ2luID0geyB0b3A6IDgwLCByaWdodDogMTgwLCBib3R0b206IDgwLCBsZWZ0OiAxODAgfSxcbiAgICB3aWR0aCA9IDEwMDAgLSAyICogbWFyZ2luLFxuICAgIGhlaWdodCA9IDYwMCAtIDIgKiBtYXJnaW47XG5jb25zb2xlLmxvZyhtYXJnaW4ubGVmdClcblxubGV0IHN2ZyA9IGQzLnNlbGVjdChcIiNkYXRhLXNlY3Rpb25cIilcbiAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArICgyICogbWFyZ2luKSlcbiAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQgKyAoMiAqIG1hcmdpbikpXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7bWFyZ2lufSwgJHttYXJnaW59KWApO1xuXG5sZXQgeCA9IGQzLnNjYWxlQmFuZCgpXG4gICAgICAgIC5yYW5nZShbMCwgd2lkdGhdKVxuICAgICAgICAucGFkZGluZygwLjUpXG5cbmxldCB4QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG5cbmxldCB5ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAucmFuZ2UoW2hlaWdodCwgMF0pXG4gICAgICAgIFxuXG5sZXQgeUF4aXMgPSBzdmcuYXBwZW5kKCdnJylcblxubGV0IGNhcGl0YWxpemUgPSB3b3JkID0+IHtcbiAgICBsZXQgd29yZEFycmF5ID0gd29yZC5zcGxpdCgnJylcbiAgICBsZXQgbmV3V29yZCA9IFtdO1xuICAgIHdvcmRBcnJheS5mb3JFYWNoKChjaGFyLCBpKSA9PiB7XG4gICAgICAgIGlmIChjaGFyICE9PSBjaGFyLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIG5ld1dvcmQucHVzaChjaGFyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3V29yZC5wdXNoKCcgJyArIGNoYXIudG9VcHBlckNhc2UoKSlcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBuZXdXb3JkWzBdID0gbmV3V29yZFswXS50b1VwcGVyQ2FzZSgpXG4gICAgcmV0dXJuIG5ld1dvcmQuam9pbignJylcbn1cblxuXG5mdW5jdGlvbiBzZWxlY3RTdGF0ZShzZWxlY3RlZFN0YXRlKXsgXG5cbiAgICBkMy5jc3YoXCJodHRwczovL2NvdmlkdHJhY2tpbmcuY29tL2FwaS92MS9zdGF0ZXMvY3VycmVudC5jc3ZcIiwgZnVuY3Rpb24gKHJhd0RhdGEpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmF3RGF0YSlcbiAgICAgICAgbGV0IHN0YXRlRGF0YSA9IHJhd0RhdGFbc3RhdGVJbmRleFtzZWxlY3RlZFN0YXRlXV1cbiAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGVEYXRhKVxuICAgICAgICBsZXQgZGF0YSA9IFtdXG4gICAgICAgIC8vIHN0YXRlRGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGZvciAobGV0IFtkLHZdIG9mIE9iamVjdC5lbnRyaWVzKHN0YXRlRGF0YSkpIHtcbiAgICAgICAgICAgIGlmIChkID09PSAncG9zaXRpdmUnIHx8IGQgPT09ICduZWdhdGl2ZScgfHwgZCA9PT0gJ2RlYXRoJyB8fCBkID09PSAndG90YWxUZXN0UmVzdWx0cycgfHxcbiAgICAgICAgICAgICAgICBkID09PSAnaG9zcGl0YWxpemVkQ3VycmVudGx5JyB8fCBkID09PSAnaG9zcGl0YWxpemVkQ3VtdWxhdGl2ZScgfHwgXG4gICAgICAgICAgICAgICAgZCA9PT0gJ2luSWN1Q3VycmVudGx5JyB8fCBkID09PSAnaW5JY3VDdW11bGF0aXZlJyB8fCBkID09PSAnb25WZW50aWxhdG9yQ3VycmVudGx5JyB8fFxuICAgICAgICAgICAgICAgIGQgPT09ICdvblZlbnRpbGF0b3JDdW11bGF0aXZlJyB8fCBkID09PSAncmVjb3ZlcmVkJyB8fCBkID09PSAncmVjb3ZlcmVkJyB8fFxuICAgICAgICAgICAgICAgIGQgPT09ICdob3NwaXRhbGl6ZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGQgPSBjYXBpdGFsaXplKGQpXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQodikpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaCggeyBjYXRlZ29yeTogZCwgdmFsdWU6ICtwYXJzZUludCh2KSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgICAgICAgeC5kb21haW4oZGF0YS5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuY2F0ZWdvcnl9KSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coT2JqZWN0LmtleXMoeCkpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHhbXCJkb21haW5cIl0pXG5cbiAgICAgICAgXG4gICAgICAgIHhBeGlzLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoLTAuMixcIiArIGhlaWdodCArIFwiKVwiKVxuICAgICAgICAgICAgLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKC0xMCwwKXJvdGF0ZSgtNDUpXCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCAtOClcblxuICAgICAgICBsZXQgbWF4WSA9IGQzLm1heChkYXRhLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC52YWx1ZSB9KVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1heFkpXG5cbiAgICAgICAgeS5kb21haW4oWzAsIG1heFldKVxuXG4gICAgICAgIHlBeGlzLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcblxuICAgICAgICAvLyBsZXQgdGVzdDEgPSBkYXRhID0gKGQpID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGQpXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coT2JqZWN0LmVudHJpZXMoeCkpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKE9iamVjdC5lbnRyaWVzKHkpKVxuICAgICAgICBjb25zb2xlLmxvZyh4LmJhbmR3aWR0aCgpKVxuXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCIuYmFyXCIpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhclwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB4KGQuY2F0ZWdvcnkpfSlcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geShkLnZhbHVlKX0pXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHguYmFuZHdpZHRoKCkpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gaGVpZ2h0IC0geShkLnZhbHVlKX0pXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwiIzY5YjNhMlwiKVxuXG4gICAgfSk7XG59XG4gICAgc2VsZWN0U3RhdGUoXCJOSlwiKVxuICAgXG59KSJdLCJzb3VyY2VSb290IjoiIn0=