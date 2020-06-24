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
  var stateNames = {
    "Alabama": "AL",
    "Alaska": "AK",
    "American Samoa": "AS",
    "Arizona": "AZ",
    "Arkansas": "AR",
    "California": "CA",
    "Colorado": "CO",
    "Connecticut": "CT",
    "Delaware": "DE",
    "District Of Columbia": "DC",
    "Florida": "FL",
    "Georgia": "GA",
    "Guam": "GU",
    "Hawaii": "HI",
    "Idaho": "ID",
    "Illinois": "IL",
    "Indiana": "IN",
    "Iowa": "IA",
    "Kansas": "KS",
    "Kentucky": "KY",
    "Louisiana": "LA",
    "Maine": "ME",
    "Maryland": "MD",
    "Massachusetts": "MA",
    "Michigan": "MI",
    "Minnesota": "MN",
    "Mississippi": "MS",
    "Missouri": "MO",
    "Montana": "MT",
    "Nebraska": "NE",
    "Nevada": "NV",
    "New Hampshire": "NH",
    "New Jersey": "NJ",
    "New Mexico": "NM",
    "New York": "NY",
    "North Carolina": "NC",
    "North Dakota": "ND",
    "Northern Mariana Islands": "MP",
    "Ohio": "OH",
    "Oklahoma": "OK",
    "Oregon": "OR",
    "Pennsylvania": "PA",
    "Puerto Rico": "PR",
    "Rhode Island": "RI",
    "South Carolina": "SC",
    "South Dakota": "SD",
    "Tennessee": "TN",
    "Texas": "TX",
    "Utah": "UT",
    "Vermont": "VT",
    "Virgin Islands": "VI",
    "Virginia": "VA",
    "Washington": "WA",
    "West Virginia": "WV",
    "Wisconsin": "WI",
    "Wyoming": "WY"
  };
  var margin = 70,
      width = 800 - 2 * margin,
      height = 600 - 2 * margin;
  var svg = d3.select("#data-section").append("svg").attr("width", width + 2 * margin).attr("height", height + 2 * margin).append("g").attr("transform", "translate(".concat(margin, ", ").concat(margin, ")"));
  var x = d3.scaleBand().range([0, width]).padding(0.4);
  var xAxis = svg.append("g").attr("transform", "translate(0," + height + ")");
  var y = d3.scaleLinear().range([height, 0]);
  var yAxis = svg.append('g');
  d3.select("#selectButton").selectAll("myOptions").data(Object.keys(stateNames)).enter().append("option").text(function (d) {
    return d;
  }).attr("value", function (d) {
    return d;
  });

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
      console.log(selectedState);
      var initials = stateNames[selectedState];
      console.log(initials);
      var stateData = rawData[stateIndex[initials]];
      console.log(stateData);
      var data = [];

      for (var _i = 0, _Object$entries = Object.entries(stateData); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            d = _Object$entries$_i[0],
            v = _Object$entries$_i[1];

        if (d === 'positive' || d === 'death' || d === 'hospitalizedCurrently' || d === 'hospitalizedCumulative' || d === 'inIcuCurrently' || d === 'inIcuCumulative' || d === 'onVentilatorCurrently' || d === 'onVentilatorCumulative' || d === 'recovered' || d === 'hospitalized') {
          d = capitalize(d);

          if (!isNaN(parseInt(v))) {
            data.push({
              category: d,
              value: +parseInt(v)
            });
          }
        }
      }

      x.domain(data.map(function (d) {
        return d.category;
      }));
      var maxY = d3.max(data, function (d) {
        return d.value;
      });
      y.domain([0, maxY * 1.2]);
      yAxis.transition().duration(1000).call(d3.axisLeft(y));
      xAxis.transition().duration(1000).call(d3.axisBottom(x)).attr("transform", "translate(-0.2," + height + ")").selectAll("text").attr("transform", "translate(-7,0)rotate(-20)").style("text-anchor", "end").attr('x', -8);
      var bar = svg.selectAll("rect").data(data);
      var text = svg.selectAll("text");
      text.exit().remove();
      bar.enter().append("rect").attr("class", "rect").merge(bar).transition().duration(1000).attr("x", function (d) {
        return x(d.category);
      }).attr("y", function (d) {
        return y(d.value);
      }).attr("width", x.bandwidth()).attr("height", function (d) {
        return height - y(d.value);
      }).style("fill", "#69b3a2"); //     .delay(function (d, i) { console.log(i); return (i * 100) })

      bar.exit().remove();
      svg.append('text').attr('class', 'y-axis-label').attr('x', -height / 2).attr('y', -50).attr('transform', 'rotate(-90)').attr('text-anchor', 'middle').text('Incidents');
      svg.append('text').attr('class', 'x-axis-label').attr('x', width / 2 + margin).attr('y', height + margin * 1.7).attr('text-anchor', 'middle').text('Categories');
    });
    d3.select("#selectButton").on("change", function (d) {
      var selectedOption = d3.select(this).property("value");
      selectState(selectedOption);
    });
  }

  selectState("Alaska");
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXRlSW5kZXgiLCJzdGF0ZU5hbWVzIiwibWFyZ2luIiwid2lkdGgiLCJoZWlnaHQiLCJzdmciLCJkMyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJ4Iiwic2NhbGVCYW5kIiwicmFuZ2UiLCJwYWRkaW5nIiwieEF4aXMiLCJ5Iiwic2NhbGVMaW5lYXIiLCJ5QXhpcyIsInNlbGVjdEFsbCIsImRhdGEiLCJPYmplY3QiLCJrZXlzIiwiZW50ZXIiLCJ0ZXh0IiwiZCIsImNhcGl0YWxpemUiLCJ3b3JkIiwid29yZEFycmF5Iiwic3BsaXQiLCJuZXdXb3JkIiwiZm9yRWFjaCIsImNoYXIiLCJpIiwidG9VcHBlckNhc2UiLCJwdXNoIiwiam9pbiIsInNlbGVjdFN0YXRlIiwic2VsZWN0ZWRTdGF0ZSIsImNzdiIsInJhd0RhdGEiLCJjb25zb2xlIiwibG9nIiwiaW5pdGlhbHMiLCJzdGF0ZURhdGEiLCJlbnRyaWVzIiwidiIsImlzTmFOIiwicGFyc2VJbnQiLCJjYXRlZ29yeSIsInZhbHVlIiwiZG9tYWluIiwibWFwIiwibWF4WSIsIm1heCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNhbGwiLCJheGlzTGVmdCIsImF4aXNCb3R0b20iLCJzdHlsZSIsImJhciIsImV4aXQiLCJyZW1vdmUiLCJtZXJnZSIsImJhbmR3aWR0aCIsIm9uIiwic2VsZWN0ZWRPcHRpb24iLCJwcm9wZXJ0eSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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S2MsSUFQTCxDQU9VLFdBUFY7QUFTQWxCLFNBQUcsQ0FBQ0csTUFBSixDQUFXLE1BQVgsRUFDS0MsSUFETCxDQUNVLE9BRFYsRUFDbUIsY0FEbkIsRUFFS0EsSUFGTCxDQUVVLEdBRlYsRUFFZU4sS0FBSyxHQUFHLENBQVIsR0FBWUQsTUFGM0IsRUFHS08sSUFITCxDQUdVLEdBSFYsRUFHZUwsTUFBTSxHQUFHRixNQUFNLEdBQUcsR0FIakMsRUFJS08sSUFKTCxDQUlVLGFBSlYsRUFJeUIsUUFKekIsRUFLS2MsSUFMTCxDQUtVLFlBTFY7QUFPSCxLQTlFRDtBQWdGQWpCLE1BQUUsQ0FBQ0MsTUFBSCxDQUFVLGVBQVYsRUFBMkIwRCxFQUEzQixDQUE4QixRQUE5QixFQUF3QyxVQUFVekMsQ0FBVixFQUFhO0FBQ2pELFVBQUkwQyxjQUFjLEdBQUc1RCxFQUFFLENBQUNDLE1BQUgsQ0FBVSxJQUFWLEVBQWdCNEQsUUFBaEIsQ0FBeUIsT0FBekIsQ0FBckI7QUFDQS9CLGlCQUFXLENBQUM4QixjQUFELENBQVg7QUFFUCxLQUpHO0FBTUg7O0FBQ0Q5QixhQUFXLENBQUMsUUFBRCxDQUFYO0FBQ0gsQ0FqUUQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cbiAgICBjb25zdCBzdGF0ZUluZGV4ID0ge1xuICAgICAgICBcIkFLXCI6IDAsXG4gICAgICAgIFwiQUxcIjogMSxcbiAgICAgICAgXCJBUlwiOiAyLFxuICAgICAgICBcIkFTXCI6IDMsXG4gICAgICAgIFwiQVpcIjogNCxcbiAgICAgICAgXCJDQVwiOiA1LFxuICAgICAgICBcIkNPXCI6IDYsXG4gICAgICAgIFwiQ1RcIjogNyxcbiAgICAgICAgXCJEQ1wiOiA4LFxuICAgICAgICBcIkRFXCI6IDksXG4gICAgICAgIFwiRkxcIjogMTAsXG4gICAgICAgIFwiR0FcIjogMTEsXG4gICAgICAgIFwiR1VcIjogMTIsXG4gICAgICAgIFwiSElcIjogMTMsXG4gICAgICAgIFwiSUFcIjogMTQsXG4gICAgICAgIFwiSURcIjogMTUsXG4gICAgICAgIFwiSUxcIjogMTYsXG4gICAgICAgIFwiSU5cIjogMTcsXG4gICAgICAgIFwiS1NcIjogMTgsXG4gICAgICAgIFwiS1lcIjogMTksXG4gICAgICAgIFwiTEFcIjogMjAsXG4gICAgICAgIFwiTUFcIjogMjEsXG4gICAgICAgIFwiTURcIjogMjIsXG4gICAgICAgIFwiTUVcIjogMjMsXG4gICAgICAgIFwiTUlcIjogMjQsXG4gICAgICAgIFwiTU5cIjogMjUsXG4gICAgICAgIFwiTU9cIjogMjYsXG4gICAgICAgIFwiTVBcIjogMjcsXG4gICAgICAgIFwiTVNcIjogMjgsXG4gICAgICAgIFwiTVRcIjogMjksXG4gICAgICAgIFwiTkNcIjogMzAsXG4gICAgICAgIFwiTkRcIjogMzEsXG4gICAgICAgIFwiTkVcIjogMzIsXG4gICAgICAgIFwiTkhcIjogMzMsXG4gICAgICAgIFwiTkpcIjogMzQsXG4gICAgICAgIFwiTk1cIjogMzUsXG4gICAgICAgIFwiTlZcIjogMzYsXG4gICAgICAgIFwiTllcIjogMzcsXG4gICAgICAgIFwiT0hcIjogMzgsXG4gICAgICAgIFwiT0tcIjogMzksXG4gICAgICAgIFwiT1JcIjogNDAsXG4gICAgICAgIFwiUEFcIjogNDEsXG4gICAgICAgIFwiUFJcIjogNDIsXG4gICAgICAgIFwiUklcIjogNDMsXG4gICAgICAgIFwiU0NcIjogNDQsXG4gICAgICAgIFwiU0RcIjogNDUsXG4gICAgICAgIFwiVE5cIjogNDYsXG4gICAgICAgIFwiVFhcIjogNDcsXG4gICAgICAgIFwiVVRcIjogNDgsXG4gICAgICAgIFwiVkFcIjogNDksXG4gICAgICAgIFwiVklcIjogNTAsXG4gICAgICAgIFwiVlRcIjogNTEsXG4gICAgICAgIFwiV0FcIjogNTIsXG4gICAgICAgIFwiV0lcIjogNTMsXG4gICAgICAgIFwiV1ZcIjogNTQsXG4gICAgICAgIFwiV1lcIjogNTVcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0ZU5hbWVzID0ge1xuICAgICAgICBcIkFsYWJhbWFcIjogXCJBTFwiLFxuICAgICAgICBcIkFsYXNrYVwiOiBcIkFLXCIsXG4gICAgICAgIFwiQW1lcmljYW4gU2Ftb2FcIjogXCJBU1wiLFxuICAgICAgICBcIkFyaXpvbmFcIjogXCJBWlwiLFxuICAgICAgICBcIkFya2Fuc2FzXCI6IFwiQVJcIixcbiAgICAgICAgXCJDYWxpZm9ybmlhXCI6IFwiQ0FcIixcbiAgICAgICAgXCJDb2xvcmFkb1wiOiBcIkNPXCIsXG4gICAgICAgIFwiQ29ubmVjdGljdXRcIjogXCJDVFwiLFxuICAgICAgICBcIkRlbGF3YXJlXCI6IFwiREVcIixcbiAgICAgICAgXCJEaXN0cmljdCBPZiBDb2x1bWJpYVwiOiBcIkRDXCIsXG4gICAgICAgIFwiRmxvcmlkYVwiOiBcIkZMXCIsXG4gICAgICAgIFwiR2VvcmdpYVwiOiBcIkdBXCIsXG4gICAgICAgIFwiR3VhbVwiOiBcIkdVXCIsXG4gICAgICAgIFwiSGF3YWlpXCI6IFwiSElcIixcbiAgICAgICAgXCJJZGFob1wiOiBcIklEXCIsXG4gICAgICAgIFwiSWxsaW5vaXNcIjogXCJJTFwiLFxuICAgICAgICBcIkluZGlhbmFcIjogXCJJTlwiLFxuICAgICAgICBcIklvd2FcIjogXCJJQVwiLFxuICAgICAgICBcIkthbnNhc1wiOiBcIktTXCIsXG4gICAgICAgIFwiS2VudHVja3lcIjogXCJLWVwiLFxuICAgICAgICBcIkxvdWlzaWFuYVwiOiBcIkxBXCIsXG4gICAgICAgIFwiTWFpbmVcIjogXCJNRVwiLFxuICAgICAgICBcIk1hcnlsYW5kXCI6IFwiTURcIixcbiAgICAgICAgXCJNYXNzYWNodXNldHRzXCI6IFwiTUFcIixcbiAgICAgICAgXCJNaWNoaWdhblwiOiBcIk1JXCIsXG4gICAgICAgIFwiTWlubmVzb3RhXCI6IFwiTU5cIixcbiAgICAgICAgXCJNaXNzaXNzaXBwaVwiOiBcIk1TXCIsXG4gICAgICAgIFwiTWlzc291cmlcIjogXCJNT1wiLFxuICAgICAgICBcIk1vbnRhbmFcIjogXCJNVFwiLFxuICAgICAgICBcIk5lYnJhc2thXCI6IFwiTkVcIixcbiAgICAgICAgXCJOZXZhZGFcIjogXCJOVlwiLFxuICAgICAgICBcIk5ldyBIYW1wc2hpcmVcIjogXCJOSFwiLFxuICAgICAgICBcIk5ldyBKZXJzZXlcIjogXCJOSlwiLFxuICAgICAgICBcIk5ldyBNZXhpY29cIjogXCJOTVwiLFxuICAgICAgICBcIk5ldyBZb3JrXCI6IFwiTllcIixcbiAgICAgICAgXCJOb3J0aCBDYXJvbGluYVwiOiBcIk5DXCIsXG4gICAgICAgIFwiTm9ydGggRGFrb3RhXCI6IFwiTkRcIixcbiAgICAgICAgXCJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHNcIjogXCJNUFwiLFxuICAgICAgICBcIk9oaW9cIjogXCJPSFwiLFxuICAgICAgICBcIk9rbGFob21hXCI6IFwiT0tcIixcbiAgICAgICAgXCJPcmVnb25cIjogXCJPUlwiLFxuICAgICAgICBcIlBlbm5zeWx2YW5pYVwiOiBcIlBBXCIsXG4gICAgICAgIFwiUHVlcnRvIFJpY29cIjogXCJQUlwiLFxuICAgICAgICBcIlJob2RlIElzbGFuZFwiOiBcIlJJXCIsXG4gICAgICAgIFwiU291dGggQ2Fyb2xpbmFcIjogXCJTQ1wiLFxuICAgICAgICBcIlNvdXRoIERha290YVwiOiBcIlNEXCIsXG4gICAgICAgIFwiVGVubmVzc2VlXCI6IFwiVE5cIixcbiAgICAgICAgXCJUZXhhc1wiOiBcIlRYXCIsXG4gICAgICAgIFwiVXRhaFwiOiBcIlVUXCIsXG4gICAgICAgIFwiVmVybW9udFwiOiBcIlZUXCIsXG4gICAgICAgIFwiVmlyZ2luIElzbGFuZHNcIjogXCJWSVwiLFxuICAgICAgICBcIlZpcmdpbmlhXCI6IFwiVkFcIixcbiAgICAgICAgXCJXYXNoaW5ndG9uXCI6IFwiV0FcIixcbiAgICAgICAgXCJXZXN0IFZpcmdpbmlhXCI6IFwiV1ZcIixcbiAgICAgICAgXCJXaXNjb25zaW5cIjogXCJXSVwiLFxuICAgICAgICBcIld5b21pbmdcIjogXCJXWVwiXG4gICAgfVxuXG4gICAgbGV0IG1hcmdpbiA9IDcwLFxuICAgICAgICB3aWR0aCA9IDgwMCAtIDIgKiBtYXJnaW4sXG4gICAgICAgIGhlaWdodCA9IDYwMCAtIDIgKiBtYXJnaW47XG5cbiAgICBsZXQgc3ZnID0gZDMuc2VsZWN0KFwiI2RhdGEtc2VjdGlvblwiKVxuICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKyAoMiAqIG1hcmdpbikpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArICgyICogbWFyZ2luKSlcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke21hcmdpbn0sICR7bWFyZ2lufSlgKTtcblxuICAgIGxldCB4ID0gZDMuc2NhbGVCYW5kKClcbiAgICAgICAgLnJhbmdlKFswLCB3aWR0aF0pXG4gICAgICAgIC5wYWRkaW5nKDAuNClcblxuICAgIGxldCB4QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcblxuICAgIGxldCB5ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAucmFuZ2UoW2hlaWdodCwgMF0pXG5cbiAgICBsZXQgeUF4aXMgPSBzdmcuYXBwZW5kKCdnJylcblxuICAgIGQzLnNlbGVjdChcIiNzZWxlY3RCdXR0b25cIilcbiAgICAgICAgLnNlbGVjdEFsbChcIm15T3B0aW9uc1wiKVxuICAgICAgICAuZGF0YShPYmplY3Qua2V5cyhzdGF0ZU5hbWVzKSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcIm9wdGlvblwiKVxuICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZDsgfSlcbiAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCB9KVxuXG4gICAgbGV0IGNhcGl0YWxpemUgPSB3b3JkID0+IHtcbiAgICAgICAgbGV0IHdvcmRBcnJheSA9IHdvcmQuc3BsaXQoJycpXG4gICAgICAgIGxldCBuZXdXb3JkID0gW107XG4gICAgICAgIHdvcmRBcnJheS5mb3JFYWNoKChjaGFyLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hhciAhPT0gY2hhci50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgbmV3V29yZC5wdXNoKGNoYXIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1dvcmQucHVzaCgnICcgKyBjaGFyLnRvVXBwZXJDYXNlKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgbmV3V29yZFswXSA9IG5ld1dvcmRbMF0udG9VcHBlckNhc2UoKVxuICAgICAgICByZXR1cm4gbmV3V29yZC5qb2luKCcnKVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gc2VsZWN0U3RhdGUoc2VsZWN0ZWRTdGF0ZSkgeyBcblxuICAgICAgICBkMy5jc3YoXCJodHRwczovL2NvdmlkdHJhY2tpbmcuY29tL2FwaS92MS9zdGF0ZXMvY3VycmVudC5jc3ZcIiwgZnVuY3Rpb24gKHJhd0RhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkU3RhdGUpXG4gICAgICAgICAgICBsZXQgaW5pdGlhbHMgPSBzdGF0ZU5hbWVzW3NlbGVjdGVkU3RhdGVdXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbml0aWFscylcbiAgICAgICAgICAgIGxldCBzdGF0ZURhdGEgPSByYXdEYXRhW3N0YXRlSW5kZXhbaW5pdGlhbHNdXVxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGVEYXRhKVxuICAgICAgICAgICAgbGV0IGRhdGEgPSBbXVxuXG4gICAgICAgICAgICBmb3IgKGxldCBbZCwgdl0gb2YgT2JqZWN0LmVudHJpZXMoc3RhdGVEYXRhKSkge1xuICAgICAgICAgICAgICAgIGlmIChkID09PSAncG9zaXRpdmUnIHx8IGQgPT09ICdkZWF0aCcgfHxcbiAgICAgICAgICAgICAgICAgICAgZCA9PT0gJ2hvc3BpdGFsaXplZEN1cnJlbnRseScgfHwgZCA9PT0gJ2hvc3BpdGFsaXplZEN1bXVsYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgIGQgPT09ICdpbkljdUN1cnJlbnRseScgfHwgZCA9PT0gJ2luSWN1Q3VtdWxhdGl2ZScgfHwgZCA9PT0gJ29uVmVudGlsYXRvckN1cnJlbnRseScgfHxcbiAgICAgICAgICAgICAgICAgICAgZCA9PT0gJ29uVmVudGlsYXRvckN1bXVsYXRpdmUnIHx8IGQgPT09ICdyZWNvdmVyZWQnIHx8XG4gICAgICAgICAgICAgICAgICAgIGQgPT09ICdob3NwaXRhbGl6ZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGQgPSBjYXBpdGFsaXplKGQpXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQodikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goeyBjYXRlZ29yeTogZCwgdmFsdWU6ICtwYXJzZUludCh2KSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB4LmRvbWFpbihkYXRhLm1hcChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5jYXRlZ29yeSB9KSlcblxuICAgICAgICAgICAgbGV0IG1heFkgPSBkMy5tYXgoZGF0YSwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQudmFsdWUgfSlcbiAgICAgICAgICAgIHkuZG9tYWluKFswLCAobWF4WSAqIDEuMildKVxuXG4gICAgICAgICAgICB5QXhpcy50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcblxuICAgICAgICAgICAgeEF4aXMudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgtMC4yLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgICAgICAgICAgLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgtNywwKXJvdGF0ZSgtMjApXCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcbiAgICAgICAgICAgICAgICAuYXR0cigneCcsIC04KVxuXG4gICAgICAgICAgICBsZXQgYmFyID0gc3ZnLnNlbGVjdEFsbChcInJlY3RcIilcbiAgICAgICAgICAgICAgICAuZGF0YShkYXRhKVxuXG4gICAgICAgICAgICBsZXQgdGV4dCA9IHN2Zy5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG5cbiAgICAgICAgICAgIHRleHQuZXhpdCgpLnJlbW92ZSgpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJhci5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJyZWN0XCIpXG4gICAgICAgICAgICAgICAgLm1lcmdlKGJhcilcbiAgICAgICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB4KGQuY2F0ZWdvcnkpIH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5KGQudmFsdWUpIH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB4LmJhbmR3aWR0aCgpKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBoZWlnaHQgLSB5KGQudmFsdWUpIH0pXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIiM2OWIzYTJcIilcbiAgICAgICAgICAgICAgICAgLy8gICAgIC5kZWxheShmdW5jdGlvbiAoZCwgaSkgeyBjb25zb2xlLmxvZyhpKTsgcmV0dXJuIChpICogMTAwKSB9KVxuXG4gICAgICAgICAgICBiYXIuZXhpdCgpXG4gICAgICAgICAgICAgICAgLnJlbW92ZSgpXG5cbiAgICAgICAgICAgIHN2Z1xuICAgICAgICAgICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICd5LWF4aXMtbGFiZWwnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd4JywgLWhlaWdodCAvIDIpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3knLCAtNTApXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICdyb3RhdGUoLTkwKScpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAgICAgICAgICAgLnRleHQoJ0luY2lkZW50cycpXG5cbiAgICAgICAgICAgIHN2Zy5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICd4LWF4aXMtbGFiZWwnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd4Jywgd2lkdGggLyAyICsgbWFyZ2luKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd5JywgaGVpZ2h0ICsgbWFyZ2luICogMS43KVxuICAgICAgICAgICAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAgICAgICAgIC50ZXh0KCdDYXRlZ29yaWVzJylcblxuICAgICAgICB9KVxuXG4gICAgICAgIGQzLnNlbGVjdChcIiNzZWxlY3RCdXR0b25cIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZE9wdGlvbiA9IGQzLnNlbGVjdCh0aGlzKS5wcm9wZXJ0eShcInZhbHVlXCIpXG4gICAgICAgICAgICBzZWxlY3RTdGF0ZShzZWxlY3RlZE9wdGlvbilcbiAgICAgICAgXG4gICAgfSk7XG5cbiAgICB9XG4gICAgc2VsZWN0U3RhdGUoXCJBbGFza2FcIilcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==