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

        if (d === 'positive' || d === 'death' || d === 'hospitalizedCurrently' || d === 'hospitalizedCumulative' || d === 'inIcuCurrently' || d === 'inIcuCumulative' || d === 'onVentilatorCurrently' || d === 'onVentilatorCumulative' || d === 'recovered' || d === 'recovered' || d === 'hospitalized') {
          // if (d === 'positive' || d === 'negative' || d === 'death' || d === 'totalTestResults' ||
          //     d === 'hospitalizedCurrently' || d === 'hospitalizedCumulative' || 
          //     d === 'inIcuCurrently' || d === 'inIcuCumulative' || d === 'onVentilatorCurrently' ||
          //     d === 'onVentilatorCumulative' || d === 'recovered' || d === 'recovered' ||
          //     d === 'hospitalized') {
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

      var maxY = d3.max(data, function (d) {
        return d.value;
      }); // console.log(maxY)

      y.domain([0, maxY]); // let test1 = data = (d) => {
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
      yAxis.transition().duration(1000).call(d3.axisLeft(y));
      xAxis.transition().duration(1000).call(d3.axisBottom(x)).attr("transform", "translate(-0.2," + height + ")").selectAll("text").attr("transform", "translate(-10,0)rotate(-45)").style("text-anchor", "end").attr('x', -8);
      d3.select("#selectButton").selectAll("myOptions").data(Object.keys(stateIndex)).enter().append("option").text(function (d) {
        return d;
      }); // .property("selected", function (d) { return d === "NY"})

      d3.select("#selectButton").on("change", function (d) {
        var selectedOption = d3.select(this).property("value");
        selectState(selectedOption);
      });
    });
  }

  selectState("NY");
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXRlSW5kZXgiLCJtYXJnaW4iLCJ3aWR0aCIsImhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJsZWZ0Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwieCIsInNjYWxlQmFuZCIsInJhbmdlIiwicGFkZGluZyIsInhBeGlzIiwieSIsInNjYWxlTGluZWFyIiwieUF4aXMiLCJjYXBpdGFsaXplIiwid29yZCIsIndvcmRBcnJheSIsInNwbGl0IiwibmV3V29yZCIsImZvckVhY2giLCJjaGFyIiwiaSIsInRvVXBwZXJDYXNlIiwicHVzaCIsImpvaW4iLCJzZWxlY3RTdGF0ZSIsInNlbGVjdGVkU3RhdGUiLCJjc3YiLCJyYXdEYXRhIiwic3RhdGVEYXRhIiwiZGF0YSIsIk9iamVjdCIsImVudHJpZXMiLCJkIiwidiIsImlzTmFOIiwicGFyc2VJbnQiLCJjYXRlZ29yeSIsInZhbHVlIiwiZG9tYWluIiwibWFwIiwibWF4WSIsIm1heCIsImJhbmR3aWR0aCIsInNlbGVjdEFsbCIsImVudGVyIiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjYWxsIiwiYXhpc0xlZnQiLCJheGlzQm90dG9tIiwia2V5cyIsInRleHQiLCJvbiIsInNlbGVjdGVkT3B0aW9uIiwicHJvcGVydHkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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LENBR1UsV0FIVixFQUd1QixvQkFBb0JSLE1BQXBCLEdBQTZCLEdBSHBELEVBSUsrQyxTQUpMLENBSWUsTUFKZixFQUtLdkMsSUFMTCxDQUtVLFdBTFYsRUFLdUIsNkJBTHZCLEVBTUt5QyxLQU5MLENBTVcsYUFOWCxFQU0wQixLQU4xQixFQU9LekMsSUFQTCxDQU9VLEdBUFYsRUFPZSxDQUFDLENBUGhCO0FBU0FILFFBQUUsQ0FBQ0MsTUFBSCxDQUFVLGVBQVYsRUFDS3lDLFNBREwsQ0FDZSxXQURmLEVBRUtkLElBRkwsQ0FFVUMsTUFBTSxDQUFDcUIsSUFBUCxDQUFZMUQsVUFBWixDQUZWLEVBR0ttRCxLQUhMLEdBSUt6QyxNQUpMLENBSVksUUFKWixFQUtLaUQsSUFMTCxDQUtVLFVBQVVwQixDQUFWLEVBQWM7QUFBQyxlQUFPQSxDQUFQO0FBQVcsT0FMcEMsRUF6RTZFLENBK0V6RTs7QUFFSi9CLFFBQUUsQ0FBQ0MsTUFBSCxDQUFVLGVBQVYsRUFBMkJtRCxFQUEzQixDQUE4QixRQUE5QixFQUF3QyxVQUFTckIsQ0FBVCxFQUFZO0FBQ2hELFlBQUlzQixjQUFjLEdBQUdyRCxFQUFFLENBQUNDLE1BQUgsQ0FBVSxJQUFWLEVBQWdCcUQsUUFBaEIsQ0FBeUIsT0FBekIsQ0FBckI7QUFDQS9CLG1CQUFXLENBQUM4QixjQUFELENBQVg7QUFDSCxPQUhEO0FBS0gsS0F0RkQ7QUF1Rkg7O0FBQ0c5QixhQUFXLENBQUMsSUFBRCxDQUFYO0FBRUgsQ0FuTUQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cbmNvbnN0IHN0YXRlSW5kZXggPSB7XG4gICAgXCJBS1wiOiAwLFxuICAgIFwiQUxcIjogMSxcbiAgICBcIkFSXCI6IDIsXG4gICAgXCJBU1wiOiAzLFxuICAgIFwiQVpcIjogNCxcbiAgICBcIkNBXCI6IDUsXG4gICAgXCJDT1wiOiA2LFxuICAgIFwiQ1RcIjogNyxcbiAgICBcIkRDXCI6IDgsXG4gICAgXCJERVwiOiA5LFxuICAgIFwiRkxcIjogMTAsXG4gICAgXCJHQVwiOiAxMSxcbiAgICBcIkdVXCI6IDEyLFxuICAgIFwiSElcIjogMTMsXG4gICAgXCJJQVwiOiAxNCxcbiAgICBcIklEXCI6IDE1LFxuICAgIFwiSUxcIjogMTYsXG4gICAgXCJJTlwiOiAxNyxcbiAgICBcIktTXCI6IDE4LFxuICAgIFwiS1lcIjogMTksXG4gICAgXCJMQVwiOiAyMCxcbiAgICBcIk1BXCI6IDIxLFxuICAgIFwiTURcIjogMjIsXG4gICAgXCJNRVwiOiAyMyxcbiAgICBcIk1JXCI6IDI0LFxuICAgIFwiTU5cIjogMjUsXG4gICAgXCJNT1wiOiAyNixcbiAgICBcIk1QXCI6IDI3LFxuICAgIFwiTVNcIjogMjgsXG4gICAgXCJNVFwiOiAyOSxcbiAgICBcIk5DXCI6IDMwLFxuICAgIFwiTkRcIjogMzEsXG4gICAgXCJORVwiOiAzMixcbiAgICBcIk5IXCI6IDMzLFxuICAgIFwiTkpcIjogMzQsXG4gICAgXCJOTVwiOiAzNSxcbiAgICBcIk5WXCI6IDM2LFxuICAgIFwiTllcIjogMzcsXG4gICAgXCJPSFwiOiAzOCxcbiAgICBcIk9LXCI6IDM5LFxuICAgIFwiT1JcIjogNDAsXG4gICAgXCJQQVwiOiA0MSxcbiAgICBcIlBSXCI6IDQyLFxuICAgIFwiUklcIjogNDMsXG4gICAgXCJTQ1wiOiA0NCxcbiAgICBcIlNEXCI6IDQ1LFxuICAgIFwiVE5cIjogNDYsXG4gICAgXCJUWFwiOiA0NyxcbiAgICBcIlVUXCI6IDQ4LFxuICAgIFwiVkFcIjogNDksXG4gICAgXCJWSVwiOiA1MCxcbiAgICBcIlZUXCI6IDUxLFxuICAgIFwiV0FcIjogNTIsXG4gICAgXCJXSVwiOiA1MyxcbiAgICBcIldWXCI6IDU0LFxuICAgIFwiV1lcIjogNTVcbn1cblxubGV0IG1hcmdpbiA9IDgwLFxuLy8gbGV0IG1hcmdpbiA9IHsgdG9wOiA4MCwgcmlnaHQ6IDE4MCwgYm90dG9tOiA4MCwgbGVmdDogMTgwIH0sXG4gICAgd2lkdGggPSAxMDAwIC0gMiAqIG1hcmdpbixcbiAgICBoZWlnaHQgPSA2MDAgLSAyICogbWFyZ2luO1xuY29uc29sZS5sb2cobWFyZ2luLmxlZnQpXG5cbmxldCBzdmcgPSBkMy5zZWxlY3QoXCIjZGF0YS1zZWN0aW9uXCIpXG4gICAgLmFwcGVuZChcInN2Z1wiKVxuICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKyAoMiAqIG1hcmdpbikpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgKDIgKiBtYXJnaW4pKVxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke21hcmdpbn0sICR7bWFyZ2lufSlgKTtcblxubGV0IHggPSBkMy5zY2FsZUJhbmQoKVxuICAgICAgICAucmFuZ2UoWzAsIHdpZHRoXSlcbiAgICAgICAgLnBhZGRpbmcoMC41KVxuXG5sZXQgeEF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxuXG5sZXQgeSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgLnJhbmdlKFtoZWlnaHQsIDBdKVxuICAgICAgICBcblxubGV0IHlBeGlzID0gc3ZnLmFwcGVuZCgnZycpXG5cbmxldCBjYXBpdGFsaXplID0gd29yZCA9PiB7XG4gICAgbGV0IHdvcmRBcnJheSA9IHdvcmQuc3BsaXQoJycpXG4gICAgbGV0IG5ld1dvcmQgPSBbXTtcbiAgICB3b3JkQXJyYXkuZm9yRWFjaCgoY2hhciwgaSkgPT4ge1xuICAgICAgICBpZiAoY2hhciAhPT0gY2hhci50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgICBuZXdXb3JkLnB1c2goY2hhcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1dvcmQucHVzaCgnICcgKyBjaGFyLnRvVXBwZXJDYXNlKCkpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgbmV3V29yZFswXSA9IG5ld1dvcmRbMF0udG9VcHBlckNhc2UoKVxuICAgIHJldHVybiBuZXdXb3JkLmpvaW4oJycpXG59XG5cblxuZnVuY3Rpb24gc2VsZWN0U3RhdGUoc2VsZWN0ZWRTdGF0ZSl7IFxuXG4gICAgZDMuY3N2KFwiaHR0cHM6Ly9jb3ZpZHRyYWNraW5nLmNvbS9hcGkvdjEvc3RhdGVzL2N1cnJlbnQuY3N2XCIsIGZ1bmN0aW9uIChyYXdEYXRhKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJhd0RhdGEpXG4gICAgICAgIGxldCBzdGF0ZURhdGEgPSByYXdEYXRhW3N0YXRlSW5kZXhbc2VsZWN0ZWRTdGF0ZV1dXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlRGF0YSlcbiAgICAgICAgbGV0IGRhdGEgPSBbXVxuICAgICAgICAvLyBzdGF0ZURhdGEuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICBmb3IgKGxldCBbZCx2XSBvZiBPYmplY3QuZW50cmllcyhzdGF0ZURhdGEpKSB7XG4gICAgICAgICAgICBpZiAoZCA9PT0gJ3Bvc2l0aXZlJyB8fCBkID09PSAnZGVhdGgnIHx8XG4gICAgICAgICAgICAgICAgZCA9PT0gJ2hvc3BpdGFsaXplZEN1cnJlbnRseScgfHwgZCA9PT0gJ2hvc3BpdGFsaXplZEN1bXVsYXRpdmUnIHx8IFxuICAgICAgICAgICAgICAgIGQgPT09ICdpbkljdUN1cnJlbnRseScgfHwgZCA9PT0gJ2luSWN1Q3VtdWxhdGl2ZScgfHwgZCA9PT0gJ29uVmVudGlsYXRvckN1cnJlbnRseScgfHxcbiAgICAgICAgICAgICAgICBkID09PSAnb25WZW50aWxhdG9yQ3VtdWxhdGl2ZScgfHwgZCA9PT0gJ3JlY292ZXJlZCcgfHwgZCA9PT0gJ3JlY292ZXJlZCcgfHxcbiAgICAgICAgICAgICAgICBkID09PSAnaG9zcGl0YWxpemVkJykge1xuICAgICAgICAgICAgLy8gaWYgKGQgPT09ICdwb3NpdGl2ZScgfHwgZCA9PT0gJ25lZ2F0aXZlJyB8fCBkID09PSAnZGVhdGgnIHx8IGQgPT09ICd0b3RhbFRlc3RSZXN1bHRzJyB8fFxuICAgICAgICAgICAgLy8gICAgIGQgPT09ICdob3NwaXRhbGl6ZWRDdXJyZW50bHknIHx8IGQgPT09ICdob3NwaXRhbGl6ZWRDdW11bGF0aXZlJyB8fCBcbiAgICAgICAgICAgIC8vICAgICBkID09PSAnaW5JY3VDdXJyZW50bHknIHx8IGQgPT09ICdpbkljdUN1bXVsYXRpdmUnIHx8IGQgPT09ICdvblZlbnRpbGF0b3JDdXJyZW50bHknIHx8XG4gICAgICAgICAgICAvLyAgICAgZCA9PT0gJ29uVmVudGlsYXRvckN1bXVsYXRpdmUnIHx8IGQgPT09ICdyZWNvdmVyZWQnIHx8IGQgPT09ICdyZWNvdmVyZWQnIHx8XG4gICAgICAgICAgICAvLyAgICAgZCA9PT0gJ2hvc3BpdGFsaXplZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZCA9IGNhcGl0YWxpemUoZClcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludCh2KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKCB7IGNhdGVnb3J5OiBkLCB2YWx1ZTogK3BhcnNlSW50KHYpIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcblxuICAgICAgICB4LmRvbWFpbihkYXRhLm1hcChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5jYXRlZ29yeX0pKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyh4KSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coeFtcImRvbWFpblwiXSlcblxuICAgICAgICBcblxuXG4gICAgICAgIGxldCBtYXhZID0gZDMubWF4KGRhdGEsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnZhbHVlIH0pXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cobWF4WSlcblxuICAgICAgICB5LmRvbWFpbihbMCwgbWF4WV0pXG5cbiAgXG4gICAgICAgICAgICBcblxuICAgICAgICAvLyBsZXQgdGVzdDEgPSBkYXRhID0gKGQpID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGQpXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coT2JqZWN0LmVudHJpZXMoeCkpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKE9iamVjdC5lbnRyaWVzKHkpKVxuICAgICAgICBjb25zb2xlLmxvZyh4LmJhbmR3aWR0aCgpKVxuXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCIuYmFyXCIpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhclwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB4KGQuY2F0ZWdvcnkpfSlcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geShkLnZhbHVlKX0pXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHguYmFuZHdpZHRoKCkpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gaGVpZ2h0IC0geShkLnZhbHVlKX0pXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwiIzY5YjNhMlwiKVxuXG5cbiAgICAgICAgeUF4aXMudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKVxuXG4gICAgICAgIHhBeGlzLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoLTAuMixcIiArIGhlaWdodCArIFwiKVwiKVxuICAgICAgICAgICAgLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKC0xMCwwKXJvdGF0ZSgtNDUpXCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCAtOClcblxuICAgICAgICBkMy5zZWxlY3QoXCIjc2VsZWN0QnV0dG9uXCIpXG4gICAgICAgICAgICAuc2VsZWN0QWxsKFwibXlPcHRpb25zXCIpXG4gICAgICAgICAgICAuZGF0YShPYmplY3Qua2V5cyhzdGF0ZUluZGV4KSlcbiAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKFwib3B0aW9uXCIpXG4gICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgIHtyZXR1cm4gZDsgfSlcbiAgICAgICAgICAgIC8vIC5wcm9wZXJ0eShcInNlbGVjdGVkXCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBkID09PSBcIk5ZXCJ9KVxuXG4gICAgICAgIGQzLnNlbGVjdChcIiNzZWxlY3RCdXR0b25cIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gZDMuc2VsZWN0KHRoaXMpLnByb3BlcnR5KFwidmFsdWVcIilcbiAgICAgICAgICAgIHNlbGVjdFN0YXRlKHNlbGVjdGVkT3B0aW9uKVxuICAgICAgICB9KVxuXG4gICAgfSk7XG59XG4gICAgc2VsZWN0U3RhdGUoXCJOWVwiKVxuICAgXG59KSJdLCJzb3VyY2VSb290IjoiIn0=