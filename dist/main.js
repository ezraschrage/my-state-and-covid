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
  d3.select("#selectButton").selectAll("myOptions").data(Object.keys(stateIndex)).enter().append("option").text(function (d) {
    return d;
  }).attr("value", function (d) {
    return d;
  }); // .property("selected", function (d) { return d === "NY"})

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

  d3.csv("https://covidtracking.com/api/v1/states/current.csv", function (rawData) {
    // console.log(rawData)
    var stateData = rawData[stateIndex["NY"]];
    var data = [];

    for (var _i = 0, _Object$entries = Object.entries(stateData); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          d = _Object$entries$_i[0],
          v = _Object$entries$_i[1];

      if (d === 'positive' || d === 'death' || d === 'hospitalizedCurrently' || d === 'hospitalizedCumulative' || d === 'inIcuCurrently' || d === 'inIcuCumulative' || d === 'onVentilatorCurrently' || d === 'onVentilatorCumulative' || d === 'recovered' || d === 'recovered' || d === 'hospitalized') {
        d = capitalize(d);

        if (!isNaN(parseInt(v))) {
          data.push({
            category: d,
            value: +parseInt(v)
          });
        }
      }
    }

    var x = d3.scaleBand().range([0, width]).padding(0.5);
    var xAxis = svg.append("g").attr("transform", "translate(0," + height + ")");
    var y = d3.scaleLinear().range([height, 0]);
    var yAxis = svg.append('g');
    x.domain(data.map(function (d) {
      return d.category;
    }));
    var maxY = d3.max(data, function (d) {
      return d.value;
    });
    y.domain([0, maxY]);
    console.log(x.bandwidth());
    yAxis.transition().duration(1000).call(d3.axisLeft(y));
    xAxis.transition().duration(1000).call(d3.axisBottom(x)).attr("transform", "translate(-0.2," + height + ")").selectAll("text").attr("transform", "translate(-10,0)rotate(-45)").style("text-anchor", "end").attr('x', -8);
    svg.selectAll(".bar").data(data).enter().append("rect").attr("class", "bar").transition().duration(1000).attr("x", function (d) {
      return x(d.category);
    }).attr("y", function (d) {
      return y(d.value);
    }).attr("width", x.bandwidth()).attr("height", function (d) {
      return height - y(d.value);
    }).style("fill", "#69b3a2");

    function selectState(selectedState) {
      var stateData = rawData[stateIndex[selectedState]]; // console.log(stateData)

      var data = [];

      for (var _i2 = 0, _Object$entries2 = Object.entries(stateData); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            _d2 = _Object$entries2$_i[0],
            _v = _Object$entries2$_i[1];

        if (_d2 === 'positive' || _d2 === 'death' || _d2 === 'hospitalizedCurrently' || _d2 === 'hospitalizedCumulative' || _d2 === 'inIcuCurrently' || _d2 === 'inIcuCumulative' || _d2 === 'onVentilatorCurrently' || _d2 === 'onVentilatorCumulative' || _d2 === 'recovered' || _d2 === 'recovered' || _d2 === 'hospitalized') {
          _d2 = capitalize(_d2);

          if (!isNaN(parseInt(_v))) {
            data.push({
              category: _d2,
              value: +parseInt(_v)
            });
          }
        }
      }

      console.log(data);
      var x = d3.scaleBand().range([0, width]).padding(0.5);
      var xAxis = svg.append("g").attr("transform", "translate(0," + height + ")");
      var y = d3.scaleLinear().range([height, 0]);
      var yAxis = svg.append('g');
      x.domain(data.map(function (d) {
        return d.category;
      }));
      var maxY = d3.max(data, function (d) {
        return d.value;
      });
      y.domain([0, maxY]);
      console.log(x.bandwidth());
      yAxis.transition().duration(1000).call(d3.axisLeft(y));
      xAxis.transition().duration(1000).call(d3.axisBottom(x)).attr("transform", "translate(-0.2," + height + ")").selectAll("text").attr("transform", "translate(-10,0)rotate(-45)").style("text-anchor", "end").attr('x', -8);
      svg.selectAll(".bar").data(data).transition().duration(1000).attr("x", function (d) {
        return x(d.category);
      }).attr("y", function (d) {
        return y(d.value);
      }).attr("width", x.bandwidth()).attr("height", function (d) {
        return height - y(d.value);
      }).style("fill", "#69b3a2");
    }

    d3.select("#selectButton").on("change", function (d) {
      var selectedOption = d3.select(this).property("value");
      selectState(selectedOption);
    }); // selectState("NY")
  });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXRlSW5kZXgiLCJtYXJnaW4iLCJ3aWR0aCIsImhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJsZWZ0Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwic2VsZWN0QWxsIiwiZGF0YSIsIk9iamVjdCIsImtleXMiLCJlbnRlciIsInRleHQiLCJkIiwiY2FwaXRhbGl6ZSIsIndvcmQiLCJ3b3JkQXJyYXkiLCJzcGxpdCIsIm5ld1dvcmQiLCJmb3JFYWNoIiwiY2hhciIsImkiLCJ0b1VwcGVyQ2FzZSIsInB1c2giLCJqb2luIiwiY3N2IiwicmF3RGF0YSIsInN0YXRlRGF0YSIsImVudHJpZXMiLCJ2IiwiaXNOYU4iLCJwYXJzZUludCIsImNhdGVnb3J5IiwidmFsdWUiLCJ4Iiwic2NhbGVCYW5kIiwicmFuZ2UiLCJwYWRkaW5nIiwieEF4aXMiLCJ5Iiwic2NhbGVMaW5lYXIiLCJ5QXhpcyIsImRvbWFpbiIsIm1hcCIsIm1heFkiLCJtYXgiLCJiYW5kd2lkdGgiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjYWxsIiwiYXhpc0xlZnQiLCJheGlzQm90dG9tIiwic3R5bGUiLCJzZWxlY3RTdGF0ZSIsInNlbGVjdGVkU3RhdGUiLCJvbiIsInNlbGVjdGVkT3B0aW9uIiwicHJvcGVydHkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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QUFDakQsVUFBSTJDLGNBQWMsR0FBR3JELEVBQUUsQ0FBQ0MsTUFBSCxDQUFVLElBQVYsRUFBZ0JxRCxRQUFoQixDQUF5QixPQUF6QixDQUFyQjtBQUNBSixpQkFBVyxDQUFDRyxjQUFELENBQVg7QUFDSCxLQUhELEVBaEo2RSxDQW9KN0U7QUFDSCxHQXJKRDtBQXlKSCxDQS9QRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuY29uc3Qgc3RhdGVJbmRleCA9IHtcbiAgICBcIkFLXCI6IDAsXG4gICAgXCJBTFwiOiAxLFxuICAgIFwiQVJcIjogMixcbiAgICBcIkFTXCI6IDMsXG4gICAgXCJBWlwiOiA0LFxuICAgIFwiQ0FcIjogNSxcbiAgICBcIkNPXCI6IDYsXG4gICAgXCJDVFwiOiA3LFxuICAgIFwiRENcIjogOCxcbiAgICBcIkRFXCI6IDksXG4gICAgXCJGTFwiOiAxMCxcbiAgICBcIkdBXCI6IDExLFxuICAgIFwiR1VcIjogMTIsXG4gICAgXCJISVwiOiAxMyxcbiAgICBcIklBXCI6IDE0LFxuICAgIFwiSURcIjogMTUsXG4gICAgXCJJTFwiOiAxNixcbiAgICBcIklOXCI6IDE3LFxuICAgIFwiS1NcIjogMTgsXG4gICAgXCJLWVwiOiAxOSxcbiAgICBcIkxBXCI6IDIwLFxuICAgIFwiTUFcIjogMjEsXG4gICAgXCJNRFwiOiAyMixcbiAgICBcIk1FXCI6IDIzLFxuICAgIFwiTUlcIjogMjQsXG4gICAgXCJNTlwiOiAyNSxcbiAgICBcIk1PXCI6IDI2LFxuICAgIFwiTVBcIjogMjcsXG4gICAgXCJNU1wiOiAyOCxcbiAgICBcIk1UXCI6IDI5LFxuICAgIFwiTkNcIjogMzAsXG4gICAgXCJORFwiOiAzMSxcbiAgICBcIk5FXCI6IDMyLFxuICAgIFwiTkhcIjogMzMsXG4gICAgXCJOSlwiOiAzNCxcbiAgICBcIk5NXCI6IDM1LFxuICAgIFwiTlZcIjogMzYsXG4gICAgXCJOWVwiOiAzNyxcbiAgICBcIk9IXCI6IDM4LFxuICAgIFwiT0tcIjogMzksXG4gICAgXCJPUlwiOiA0MCxcbiAgICBcIlBBXCI6IDQxLFxuICAgIFwiUFJcIjogNDIsXG4gICAgXCJSSVwiOiA0MyxcbiAgICBcIlNDXCI6IDQ0LFxuICAgIFwiU0RcIjogNDUsXG4gICAgXCJUTlwiOiA0NixcbiAgICBcIlRYXCI6IDQ3LFxuICAgIFwiVVRcIjogNDgsXG4gICAgXCJWQVwiOiA0OSxcbiAgICBcIlZJXCI6IDUwLFxuICAgIFwiVlRcIjogNTEsXG4gICAgXCJXQVwiOiA1MixcbiAgICBcIldJXCI6IDUzLFxuICAgIFwiV1ZcIjogNTQsXG4gICAgXCJXWVwiOiA1NVxufVxuXG5sZXQgbWFyZ2luID0gODAsXG4vLyBsZXQgbWFyZ2luID0geyB0b3A6IDgwLCByaWdodDogMTgwLCBib3R0b206IDgwLCBsZWZ0OiAxODAgfSxcbiAgICB3aWR0aCA9IDEwMDAgLSAyICogbWFyZ2luLFxuICAgIGhlaWdodCA9IDYwMCAtIDIgKiBtYXJnaW47XG5jb25zb2xlLmxvZyhtYXJnaW4ubGVmdClcblxubGV0IHN2ZyA9IGQzLnNlbGVjdChcIiNkYXRhLXNlY3Rpb25cIilcbiAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArICgyICogbWFyZ2luKSlcbiAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQgKyAoMiAqIG1hcmdpbikpXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7bWFyZ2lufSwgJHttYXJnaW59KWApO1xuXG4gICAgZDMuc2VsZWN0KFwiI3NlbGVjdEJ1dHRvblwiKVxuICAgICAgICAuc2VsZWN0QWxsKFwibXlPcHRpb25zXCIpXG4gICAgICAgIC5kYXRhKE9iamVjdC5rZXlzKHN0YXRlSW5kZXgpKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwib3B0aW9uXCIpXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkOyB9KVxuICAgICAgICAuYXR0cihcInZhbHVlXCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBkIH0pXG4gICAgLy8gLnByb3BlcnR5KFwic2VsZWN0ZWRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQgPT09IFwiTllcIn0pXG5cblxubGV0IGNhcGl0YWxpemUgPSB3b3JkID0+IHtcbiAgICBsZXQgd29yZEFycmF5ID0gd29yZC5zcGxpdCgnJylcbiAgICBsZXQgbmV3V29yZCA9IFtdO1xuICAgIHdvcmRBcnJheS5mb3JFYWNoKChjaGFyLCBpKSA9PiB7XG4gICAgICAgIGlmIChjaGFyICE9PSBjaGFyLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIG5ld1dvcmQucHVzaChjaGFyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3V29yZC5wdXNoKCcgJyArIGNoYXIudG9VcHBlckNhc2UoKSlcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBuZXdXb3JkWzBdID0gbmV3V29yZFswXS50b1VwcGVyQ2FzZSgpXG4gICAgcmV0dXJuIG5ld1dvcmQuam9pbignJylcbn1cblxuXG5cblxuICAgIGQzLmNzdihcImh0dHBzOi8vY292aWR0cmFja2luZy5jb20vYXBpL3YxL3N0YXRlcy9jdXJyZW50LmNzdlwiLCBmdW5jdGlvbiAocmF3RGF0YSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyYXdEYXRhKVxuXG5cbiAgICAgICAgbGV0IHN0YXRlRGF0YSA9IHJhd0RhdGFbc3RhdGVJbmRleFtcIk5ZXCJdXVxuICAgICAgICBcbiAgICAgICAgbGV0IGRhdGEgPSBbXVxuICAgICAgICBmb3IgKGxldCBbZCwgdl0gb2YgT2JqZWN0LmVudHJpZXMoc3RhdGVEYXRhKSkge1xuICAgICAgICAgICAgaWYgKGQgPT09ICdwb3NpdGl2ZScgfHwgZCA9PT0gJ2RlYXRoJyB8fFxuICAgICAgICAgICAgICAgIGQgPT09ICdob3NwaXRhbGl6ZWRDdXJyZW50bHknIHx8IGQgPT09ICdob3NwaXRhbGl6ZWRDdW11bGF0aXZlJyB8fFxuICAgICAgICAgICAgICAgIGQgPT09ICdpbkljdUN1cnJlbnRseScgfHwgZCA9PT0gJ2luSWN1Q3VtdWxhdGl2ZScgfHwgZCA9PT0gJ29uVmVudGlsYXRvckN1cnJlbnRseScgfHxcbiAgICAgICAgICAgICAgICBkID09PSAnb25WZW50aWxhdG9yQ3VtdWxhdGl2ZScgfHwgZCA9PT0gJ3JlY292ZXJlZCcgfHwgZCA9PT0gJ3JlY292ZXJlZCcgfHxcbiAgICAgICAgICAgICAgICBkID09PSAnaG9zcGl0YWxpemVkJykge1xuICAgICAgICAgICAgICAgIGQgPSBjYXBpdGFsaXplKGQpXG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludCh2KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKHsgY2F0ZWdvcnk6IGQsIHZhbHVlOiArcGFyc2VJbnQodikgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgeCA9IGQzLnNjYWxlQmFuZCgpXG4gICAgICAgICAgICAucmFuZ2UoWzAsIHdpZHRoXSlcbiAgICAgICAgICAgIC5wYWRkaW5nKDAuNSlcblxuICAgICAgICBsZXQgeEF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxuXG4gICAgICAgIGxldCB5ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgLnJhbmdlKFtoZWlnaHQsIDBdKVxuXG5cbiAgICAgICAgbGV0IHlBeGlzID0gc3ZnLmFwcGVuZCgnZycpXG5cbiAgICAgICAgeC5kb21haW4oZGF0YS5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuY2F0ZWdvcnkgfSkpXG5cbiAgICAgICAgbGV0IG1heFkgPSBkMy5tYXgoZGF0YSwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQudmFsdWUgfSlcblxuICAgICAgICB5LmRvbWFpbihbMCwgbWF4WV0pXG5cbiAgICAgICAgY29uc29sZS5sb2coeC5iYW5kd2lkdGgoKSlcblxuICAgICAgICB5QXhpcy50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpXG5cbiAgICAgICAgeEF4aXMudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgtMC4yLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoLTEwLDApcm90YXRlKC00NSlcIilcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAgICAgICAuYXR0cigneCcsIC04KVxuXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCIuYmFyXCIpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhclwiKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHgoZC5jYXRlZ29yeSkgfSlcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geShkLnZhbHVlKSB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB4LmJhbmR3aWR0aCgpKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGhlaWdodCAtIHkoZC52YWx1ZSkgfSlcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCIjNjliM2EyXCIpXG5cblxuXG5cbiAgICAgICAgZnVuY3Rpb24gc2VsZWN0U3RhdGUoc2VsZWN0ZWRTdGF0ZSl7IFxuXG4gICAgICAgICAgICBsZXQgc3RhdGVEYXRhID0gcmF3RGF0YVtzdGF0ZUluZGV4W3NlbGVjdGVkU3RhdGVdXVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGVEYXRhKVxuICAgICAgICAgICAgbGV0IGRhdGEgPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgW2QsIHZdIG9mIE9iamVjdC5lbnRyaWVzKHN0YXRlRGF0YSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZCA9PT0gJ3Bvc2l0aXZlJyB8fCBkID09PSAnZGVhdGgnIHx8XG4gICAgICAgICAgICAgICAgICAgIGQgPT09ICdob3NwaXRhbGl6ZWRDdXJyZW50bHknIHx8IGQgPT09ICdob3NwaXRhbGl6ZWRDdW11bGF0aXZlJyB8fFxuICAgICAgICAgICAgICAgICAgICBkID09PSAnaW5JY3VDdXJyZW50bHknIHx8IGQgPT09ICdpbkljdUN1bXVsYXRpdmUnIHx8IGQgPT09ICdvblZlbnRpbGF0b3JDdXJyZW50bHknIHx8XG4gICAgICAgICAgICAgICAgICAgIGQgPT09ICdvblZlbnRpbGF0b3JDdW11bGF0aXZlJyB8fCBkID09PSAncmVjb3ZlcmVkJyB8fCBkID09PSAncmVjb3ZlcmVkJyB8fFxuICAgICAgICAgICAgICAgICAgICBkID09PSAnaG9zcGl0YWxpemVkJykge1xuICAgICAgICAgICAgICAgICAgICBkID0gY2FwaXRhbGl6ZShkKVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KHYpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKHsgY2F0ZWdvcnk6IGQsIHZhbHVlOiArcGFyc2VJbnQodikgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgICAgICAgICAgIGxldCB4ID0gZDMuc2NhbGVCYW5kKClcbiAgICAgICAgICAgICAgICAucmFuZ2UoWzAsIHdpZHRoXSlcbiAgICAgICAgICAgICAgICAucGFkZGluZygwLjUpXG5cbiAgICAgICAgICAgIGxldCB4QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxuXG4gICAgICAgICAgICBsZXQgeSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgICAgICAucmFuZ2UoW2hlaWdodCwgMF0pXG5cblxuICAgICAgICAgICAgbGV0IHlBeGlzID0gc3ZnLmFwcGVuZCgnZycpXG5cbiAgICAgICAgICAgIHguZG9tYWluKGRhdGEubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLmNhdGVnb3J5fSkpXG5cbiAgICAgICAgICAgIGxldCBtYXhZID0gZDMubWF4KGRhdGEsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnZhbHVlIH0pXG5cbiAgICAgICAgICAgIHkuZG9tYWluKFswLCBtYXhZXSlcblxuICAgICAgICAgICAgY29uc29sZS5sb2coeC5iYW5kd2lkdGgoKSlcblxuICAgICAgICAgICAgeUF4aXMudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpXG5cbiAgICAgICAgICAgIHhBeGlzLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoLTAuMixcIiArIGhlaWdodCArIFwiKVwiKVxuICAgICAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoLTEwLDApcm90YXRlKC00NSlcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd4JywgLTgpXG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBzdmcuc2VsZWN0QWxsKFwiLmJhclwiKVxuICAgICAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geChkLmNhdGVnb3J5KX0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5KGQudmFsdWUpfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHguYmFuZHdpZHRoKCkpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGhlaWdodCAtIHkoZC52YWx1ZSl9KVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCIjNjliM2EyXCIpXG4gICAgICAgICAgICAgICAgXG5cblxuXG5cblxuXG5cblxuICAgICAgICB9XG5cbiAgICAgICAgZDMuc2VsZWN0KFwiI3NlbGVjdEJ1dHRvblwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gZDMuc2VsZWN0KHRoaXMpLnByb3BlcnR5KFwidmFsdWVcIilcbiAgICAgICAgICAgIHNlbGVjdFN0YXRlKHNlbGVjdGVkT3B0aW9uKVxuICAgICAgICB9KVxuICAgICAgICAvLyBzZWxlY3RTdGF0ZShcIk5ZXCIpXG4gICAgfSk7XG5cbiAgICBcbiAgIFxufSkiXSwic291cmNlUm9vdCI6IiJ9