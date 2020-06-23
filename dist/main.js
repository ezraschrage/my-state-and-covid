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
  width = 800 - 2 * margin,
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
    y.domain([0, maxY * 1.1]);
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
      x.domain(data.map(function (d) {
        return d.category;
      }));
      var maxY = d3.max(data, function (d) {
        return d.value;
      });
      y.domain([0, maxY * 1.1]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXRlSW5kZXgiLCJtYXJnaW4iLCJ3aWR0aCIsImhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJsZWZ0Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwic2VsZWN0QWxsIiwiZGF0YSIsIk9iamVjdCIsImtleXMiLCJlbnRlciIsInRleHQiLCJkIiwiY2FwaXRhbGl6ZSIsIndvcmQiLCJ3b3JkQXJyYXkiLCJzcGxpdCIsIm5ld1dvcmQiLCJmb3JFYWNoIiwiY2hhciIsImkiLCJ0b1VwcGVyQ2FzZSIsInB1c2giLCJqb2luIiwiY3N2IiwicmF3RGF0YSIsInN0YXRlRGF0YSIsImVudHJpZXMiLCJ2IiwiaXNOYU4iLCJwYXJzZUludCIsImNhdGVnb3J5IiwidmFsdWUiLCJ4Iiwic2NhbGVCYW5kIiwicmFuZ2UiLCJwYWRkaW5nIiwieEF4aXMiLCJ5Iiwic2NhbGVMaW5lYXIiLCJ5QXhpcyIsImRvbWFpbiIsIm1hcCIsIm1heFkiLCJtYXgiLCJiYW5kd2lkdGgiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjYWxsIiwiYXhpc0xlZnQiLCJheGlzQm90dG9tIiwic3R5bGUiLCJzZWxlY3RTdGF0ZSIsInNlbGVjdGVkU3RhdGUiLCJvbiIsInNlbGVjdGVkT3B0aW9uIiwicHJvcGVydHkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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QUosQ0FBYyxNQUFkLEVBQ0tDLElBREwsQ0FDVUEsSUFEVixFQUVLdUMsVUFGTCxHQUdLQyxRQUhMLENBR2MsSUFIZCxFQUlLMUMsSUFKTCxDQUlVLEdBSlYsRUFJZSxVQUFVTyxDQUFWLEVBQWE7QUFBRSxlQUFPcUIsQ0FBQyxDQUFDckIsQ0FBQyxDQUFDbUIsUUFBSCxDQUFSO0FBQXFCLE9BSm5ELEVBS0sxQixJQUxMLENBS1UsR0FMVixFQUtlLFVBQVVPLENBQVYsRUFBYTtBQUFFLGVBQU8wQixDQUFDLENBQUMxQixDQUFDLENBQUNvQixLQUFILENBQVI7QUFBa0IsT0FMaEQsRUFNSzNCLElBTkwsQ0FNVSxPQU5WLEVBTW1CNEIsQ0FBQyxDQUFDWSxTQUFGLEVBTm5CLEVBT0t4QyxJQVBMLENBT1UsUUFQVixFQU9vQixVQUFVTyxDQUFWLEVBQWE7QUFBRSxlQUFPZixNQUFNLEdBQUd5QyxDQUFDLENBQUMxQixDQUFDLENBQUNvQixLQUFILENBQWpCO0FBQTJCLE9BUDlELEVBUUttQixLQVJMLENBUVcsTUFSWCxFQVFtQixTQVJuQjtBQWtCSDs7QUFFRGpELE1BQUUsQ0FBQ0MsTUFBSCxDQUFVLGVBQVYsRUFBMkJtRCxFQUEzQixDQUE4QixRQUE5QixFQUF3QyxVQUFVMUMsQ0FBVixFQUFhO0FBQ2pELFVBQUkyQyxjQUFjLEdBQUdyRCxFQUFFLENBQUNDLE1BQUgsQ0FBVSxJQUFWLEVBQWdCcUQsUUFBaEIsQ0FBeUIsT0FBekIsQ0FBckI7QUFDQUosaUJBQVcsQ0FBQ0csY0FBRCxDQUFYO0FBQ0gsS0FIRCxFQW5JNkUsQ0F1STdFO0FBQ0gsR0F4SUQ7QUE0SUgsQ0FsUEQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cbmNvbnN0IHN0YXRlSW5kZXggPSB7XG4gICAgXCJBS1wiOiAwLFxuICAgIFwiQUxcIjogMSxcbiAgICBcIkFSXCI6IDIsXG4gICAgXCJBU1wiOiAzLFxuICAgIFwiQVpcIjogNCxcbiAgICBcIkNBXCI6IDUsXG4gICAgXCJDT1wiOiA2LFxuICAgIFwiQ1RcIjogNyxcbiAgICBcIkRDXCI6IDgsXG4gICAgXCJERVwiOiA5LFxuICAgIFwiRkxcIjogMTAsXG4gICAgXCJHQVwiOiAxMSxcbiAgICBcIkdVXCI6IDEyLFxuICAgIFwiSElcIjogMTMsXG4gICAgXCJJQVwiOiAxNCxcbiAgICBcIklEXCI6IDE1LFxuICAgIFwiSUxcIjogMTYsXG4gICAgXCJJTlwiOiAxNyxcbiAgICBcIktTXCI6IDE4LFxuICAgIFwiS1lcIjogMTksXG4gICAgXCJMQVwiOiAyMCxcbiAgICBcIk1BXCI6IDIxLFxuICAgIFwiTURcIjogMjIsXG4gICAgXCJNRVwiOiAyMyxcbiAgICBcIk1JXCI6IDI0LFxuICAgIFwiTU5cIjogMjUsXG4gICAgXCJNT1wiOiAyNixcbiAgICBcIk1QXCI6IDI3LFxuICAgIFwiTVNcIjogMjgsXG4gICAgXCJNVFwiOiAyOSxcbiAgICBcIk5DXCI6IDMwLFxuICAgIFwiTkRcIjogMzEsXG4gICAgXCJORVwiOiAzMixcbiAgICBcIk5IXCI6IDMzLFxuICAgIFwiTkpcIjogMzQsXG4gICAgXCJOTVwiOiAzNSxcbiAgICBcIk5WXCI6IDM2LFxuICAgIFwiTllcIjogMzcsXG4gICAgXCJPSFwiOiAzOCxcbiAgICBcIk9LXCI6IDM5LFxuICAgIFwiT1JcIjogNDAsXG4gICAgXCJQQVwiOiA0MSxcbiAgICBcIlBSXCI6IDQyLFxuICAgIFwiUklcIjogNDMsXG4gICAgXCJTQ1wiOiA0NCxcbiAgICBcIlNEXCI6IDQ1LFxuICAgIFwiVE5cIjogNDYsXG4gICAgXCJUWFwiOiA0NyxcbiAgICBcIlVUXCI6IDQ4LFxuICAgIFwiVkFcIjogNDksXG4gICAgXCJWSVwiOiA1MCxcbiAgICBcIlZUXCI6IDUxLFxuICAgIFwiV0FcIjogNTIsXG4gICAgXCJXSVwiOiA1MyxcbiAgICBcIldWXCI6IDU0LFxuICAgIFwiV1lcIjogNTVcbn1cblxubGV0IG1hcmdpbiA9IDgwLFxuLy8gbGV0IG1hcmdpbiA9IHsgdG9wOiA4MCwgcmlnaHQ6IDE4MCwgYm90dG9tOiA4MCwgbGVmdDogMTgwIH0sXG4gICAgd2lkdGggPSA4MDAgLSAyICogbWFyZ2luLFxuICAgIGhlaWdodCA9IDYwMCAtIDIgKiBtYXJnaW47XG5jb25zb2xlLmxvZyhtYXJnaW4ubGVmdClcblxubGV0IHN2ZyA9IGQzLnNlbGVjdChcIiNkYXRhLXNlY3Rpb25cIilcbiAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArICgyICogbWFyZ2luKSlcbiAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQgKyAoMiAqIG1hcmdpbikpXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7bWFyZ2lufSwgJHttYXJnaW59KWApO1xuXG4gICAgZDMuc2VsZWN0KFwiI3NlbGVjdEJ1dHRvblwiKVxuICAgICAgICAuc2VsZWN0QWxsKFwibXlPcHRpb25zXCIpXG4gICAgICAgIC5kYXRhKE9iamVjdC5rZXlzKHN0YXRlSW5kZXgpKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwib3B0aW9uXCIpXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkOyB9KVxuICAgICAgICAuYXR0cihcInZhbHVlXCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBkIH0pXG4gICAgLy8gLnByb3BlcnR5KFwic2VsZWN0ZWRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQgPT09IFwiTllcIn0pXG5cblxubGV0IGNhcGl0YWxpemUgPSB3b3JkID0+IHtcbiAgICBsZXQgd29yZEFycmF5ID0gd29yZC5zcGxpdCgnJylcbiAgICBsZXQgbmV3V29yZCA9IFtdO1xuICAgIHdvcmRBcnJheS5mb3JFYWNoKChjaGFyLCBpKSA9PiB7XG4gICAgICAgIGlmIChjaGFyICE9PSBjaGFyLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIG5ld1dvcmQucHVzaChjaGFyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3V29yZC5wdXNoKCcgJyArIGNoYXIudG9VcHBlckNhc2UoKSlcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBuZXdXb3JkWzBdID0gbmV3V29yZFswXS50b1VwcGVyQ2FzZSgpXG4gICAgcmV0dXJuIG5ld1dvcmQuam9pbignJylcbn1cblxuXG5cblxuICAgIGQzLmNzdihcImh0dHBzOi8vY292aWR0cmFja2luZy5jb20vYXBpL3YxL3N0YXRlcy9jdXJyZW50LmNzdlwiLCBmdW5jdGlvbiAocmF3RGF0YSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyYXdEYXRhKVxuXG5cbiAgICAgICAgbGV0IHN0YXRlRGF0YSA9IHJhd0RhdGFbc3RhdGVJbmRleFtcIk5ZXCJdXVxuICAgICAgICBcbiAgICAgICAgbGV0IGRhdGEgPSBbXVxuICAgICAgICBmb3IgKGxldCBbZCwgdl0gb2YgT2JqZWN0LmVudHJpZXMoc3RhdGVEYXRhKSkge1xuICAgICAgICAgICAgaWYgKGQgPT09ICdwb3NpdGl2ZScgfHwgZCA9PT0gJ2RlYXRoJyB8fFxuICAgICAgICAgICAgICAgIGQgPT09ICdob3NwaXRhbGl6ZWRDdXJyZW50bHknIHx8IGQgPT09ICdob3NwaXRhbGl6ZWRDdW11bGF0aXZlJyB8fFxuICAgICAgICAgICAgICAgIGQgPT09ICdpbkljdUN1cnJlbnRseScgfHwgZCA9PT0gJ2luSWN1Q3VtdWxhdGl2ZScgfHwgZCA9PT0gJ29uVmVudGlsYXRvckN1cnJlbnRseScgfHxcbiAgICAgICAgICAgICAgICBkID09PSAnb25WZW50aWxhdG9yQ3VtdWxhdGl2ZScgfHwgZCA9PT0gJ3JlY292ZXJlZCcgfHwgZCA9PT0gJ3JlY292ZXJlZCcgfHxcbiAgICAgICAgICAgICAgICBkID09PSAnaG9zcGl0YWxpemVkJykge1xuICAgICAgICAgICAgICAgIGQgPSBjYXBpdGFsaXplKGQpXG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludCh2KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKHsgY2F0ZWdvcnk6IGQsIHZhbHVlOiArcGFyc2VJbnQodikgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgeCA9IGQzLnNjYWxlQmFuZCgpXG4gICAgICAgICAgICAucmFuZ2UoWzAsIHdpZHRoXSlcbiAgICAgICAgICAgIC5wYWRkaW5nKDAuNSlcblxuICAgICAgICBsZXQgeEF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxuXG4gICAgICAgIGxldCB5ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgLnJhbmdlKFtoZWlnaHQsIDBdKVxuXG5cbiAgICAgICAgbGV0IHlBeGlzID0gc3ZnLmFwcGVuZCgnZycpXG5cbiAgICAgICAgeC5kb21haW4oZGF0YS5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuY2F0ZWdvcnkgfSkpXG5cbiAgICAgICAgbGV0IG1heFkgPSBkMy5tYXgoZGF0YSwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQudmFsdWUgfSlcblxuICAgICAgICB5LmRvbWFpbihbMCwgKG1heFkgKiAxLjEpXSlcblxuICAgICAgICBjb25zb2xlLmxvZyh4LmJhbmR3aWR0aCgpKVxuXG4gICAgICAgIHlBeGlzLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcblxuICAgICAgICB4QXhpcy50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKC0wLjIsXCIgKyBoZWlnaHQgKyBcIilcIilcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgtMTAsMClyb3RhdGUoLTQ1KVwiKVxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcbiAgICAgICAgICAgIC5hdHRyKCd4JywgLTgpXG5cbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcIi5iYXJcIilcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFyXCIpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geChkLmNhdGVnb3J5KSB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5KGQudmFsdWUpIH0pXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHguYmFuZHdpZHRoKCkpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gaGVpZ2h0IC0geShkLnZhbHVlKSB9KVxuICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIiM2OWIzYTJcIilcblxuXG5cblxuICAgICAgICBmdW5jdGlvbiBzZWxlY3RTdGF0ZShzZWxlY3RlZFN0YXRlKXsgXG5cbiAgICAgICAgICAgIGxldCBzdGF0ZURhdGEgPSByYXdEYXRhW3N0YXRlSW5kZXhbc2VsZWN0ZWRTdGF0ZV1dXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZURhdGEpXG4gICAgICAgICAgICBsZXQgZGF0YSA9IFtdXG4gICAgICAgICAgICBmb3IgKGxldCBbZCwgdl0gb2YgT2JqZWN0LmVudHJpZXMoc3RhdGVEYXRhKSkge1xuICAgICAgICAgICAgICAgIGlmIChkID09PSAncG9zaXRpdmUnIHx8IGQgPT09ICdkZWF0aCcgfHxcbiAgICAgICAgICAgICAgICAgICAgZCA9PT0gJ2hvc3BpdGFsaXplZEN1cnJlbnRseScgfHwgZCA9PT0gJ2hvc3BpdGFsaXplZEN1bXVsYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgIGQgPT09ICdpbkljdUN1cnJlbnRseScgfHwgZCA9PT0gJ2luSWN1Q3VtdWxhdGl2ZScgfHwgZCA9PT0gJ29uVmVudGlsYXRvckN1cnJlbnRseScgfHxcbiAgICAgICAgICAgICAgICAgICAgZCA9PT0gJ29uVmVudGlsYXRvckN1bXVsYXRpdmUnIHx8IGQgPT09ICdyZWNvdmVyZWQnIHx8IGQgPT09ICdyZWNvdmVyZWQnIHx8XG4gICAgICAgICAgICAgICAgICAgIGQgPT09ICdob3NwaXRhbGl6ZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGQgPSBjYXBpdGFsaXplKGQpXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQodikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goeyBjYXRlZ29yeTogZCwgdmFsdWU6ICtwYXJzZUludCh2KSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcblxuICAgICAgICAgICAgeC5kb21haW4oZGF0YS5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuY2F0ZWdvcnl9KSlcblxuICAgICAgICAgICAgbGV0IG1heFkgPSBkMy5tYXgoZGF0YSwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQudmFsdWUgfSlcblxuICAgICAgICAgICAgeS5kb21haW4oWzAsIChtYXhZICogMS4xKV0pXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHguYmFuZHdpZHRoKCkpXG5cbiAgICAgICAgICAgIHlBeGlzLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKVxuXG4gICAgICAgICAgICB4QXhpcy50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKC0wLjIsXCIgKyBoZWlnaHQgKyBcIilcIilcbiAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKC0xMCwwKXJvdGF0ZSgtNDUpXCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcbiAgICAgICAgICAgICAgICAuYXR0cigneCcsIC04KVxuXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgc3ZnLnNlbGVjdEFsbChcIi5iYXJcIilcbiAgICAgICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHgoZC5jYXRlZ29yeSl9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geShkLnZhbHVlKX0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB4LmJhbmR3aWR0aCgpKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBoZWlnaHQgLSB5KGQudmFsdWUpfSlcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwiIzY5YjNhMlwiKVxuICAgICAgICAgICAgICAgIFxuXG5cblxuXG5cblxuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGQzLnNlbGVjdChcIiNzZWxlY3RCdXR0b25cIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZE9wdGlvbiA9IGQzLnNlbGVjdCh0aGlzKS5wcm9wZXJ0eShcInZhbHVlXCIpXG4gICAgICAgICAgICBzZWxlY3RTdGF0ZShzZWxlY3RlZE9wdGlvbilcbiAgICAgICAgfSlcbiAgICAgICAgLy8gc2VsZWN0U3RhdGUoXCJOWVwiKVxuICAgIH0pO1xuXG4gICAgXG4gICBcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==