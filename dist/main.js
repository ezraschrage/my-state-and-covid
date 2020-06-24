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
  var svg = d3.select("#data-section").append("svg").attr("width", width + 2 * margin).attr("height", height + 2 * margin).append("g").attr("transform", "translate(".concat(margin, ", ").concat(margin / 2, ")"));
  var x = d3.scaleBand().range([0, width]).padding(0.4);
  var xAxis = svg.append("g").attr("transform", "translate(0," + height + ")").attr("class", "xAxis");
  var y = d3.scaleLinear().range([height, 0]);
  var yAxis = svg.append('g').attr("class", "yAxis");
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

        if (d === 'positive' || d === 'recovered' || d === 'death' || d === 'hospitalizedCurrently' || d === 'hospitalizedCumulative' || d === 'inIcuCurrently' || d === 'inIcuCumulative' || d === 'onVentilatorCurrently' || d === 'onVentilatorCumulative' || d === 'hospitalized') {
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
      }).style("fill", "#69b3a2").on("mouseover", handleMouseOver).on("mouseout", handleMouseOut); //     .delay(function (d, i) { console.log(i); return (i * 100) })

      bar.exit().remove();

      function handleMouseOver(d, i) {
        svg.append('text').data(data).attr("class", "value").attr('x', function (d) {
          return x(d.category) + x.bandwidth() / 2;
        }).attr('y', function (d) {
          return y(d.value) - 10;
        }).attr('text-anchor', 'middle').text(function (d) {
          return "".concat(d.value);
        });
        d3.select(this).attr('fill', "darkcyan").attr('r', 10);
      }

      function handleMouseOut(d, i) {
        d3.select('.hoverVaule').remove();
        d3.select(this).attr('fill', "darksalmon").attr('r', 6);
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXRlSW5kZXgiLCJzdGF0ZU5hbWVzIiwibWFyZ2luIiwid2lkdGgiLCJoZWlnaHQiLCJzdmciLCJkMyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJ4Iiwic2NhbGVCYW5kIiwicmFuZ2UiLCJwYWRkaW5nIiwieEF4aXMiLCJ5Iiwic2NhbGVMaW5lYXIiLCJ5QXhpcyIsInNlbGVjdEFsbCIsImRhdGEiLCJPYmplY3QiLCJrZXlzIiwiZW50ZXIiLCJ0ZXh0IiwiZCIsImNhcGl0YWxpemUiLCJ3b3JkIiwid29yZEFycmF5Iiwic3BsaXQiLCJuZXdXb3JkIiwiZm9yRWFjaCIsImNoYXIiLCJpIiwidG9VcHBlckNhc2UiLCJwdXNoIiwiam9pbiIsInNlbGVjdFN0YXRlIiwic2VsZWN0ZWRTdGF0ZSIsImNzdiIsInJhd0RhdGEiLCJjb25zb2xlIiwibG9nIiwiaW5pdGlhbHMiLCJzdGF0ZURhdGEiLCJlbnRyaWVzIiwidiIsImlzTmFOIiwicGFyc2VJbnQiLCJjYXRlZ29yeSIsInZhbHVlIiwiZG9tYWluIiwibWFwIiwibWF4WSIsIm1heCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNhbGwiLCJheGlzTGVmdCIsImF4aXNCb3R0b20iLCJzdHlsZSIsImJhciIsImV4aXQiLCJyZW1vdmUiLCJtZXJnZSIsImJhbmR3aWR0aCIsIm9uIiwiaGFuZGxlTW91c2VPdmVyIiwiaGFuZGxlTW91c2VPdXQiLCJzZWxlY3RlZE9wdGlvbiIsInByb3BlcnR5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdB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QUlVLFdBSlYsRUFJdUIsYUFKdkIsRUFLS0EsSUFMTCxDQUtVLGFBTFYsRUFLeUIsUUFMekIsRUFNS2MsSUFOTCxDQU1VLFdBTlY7QUFRQWxCLFNBQUcsQ0FBQ0csTUFBSixDQUFXLE1BQVgsRUFDS0MsSUFETCxDQUNVLE9BRFYsRUFDbUIsY0FEbkIsRUFFS0EsSUFGTCxDQUVVLEdBRlYsRUFFZU4sS0FBSyxHQUFHLENBQVIsR0FBWUQsTUFGM0IsRUFHS08sSUFITCxDQUdVLEdBSFYsRUFHZUwsTUFBTSxHQUFHRixNQUFNLEdBQUcsR0FIakMsRUFJS08sSUFKTCxDQUlVLGFBSlYsRUFJeUIsUUFKekIsRUFLS2MsSUFMTCxDQUtVLFlBTFY7QUFPSCxLQTFHRDtBQTRHQWpCLE1BQUUsQ0FBQ0MsTUFBSCxDQUFVLGVBQVYsRUFBMkIwRCxFQUEzQixDQUE4QixRQUE5QixFQUF3QyxVQUFVekMsQ0FBVixFQUFhO0FBQ2pELFVBQUk0QyxjQUFjLEdBQUc5RCxFQUFFLENBQUNDLE1BQUgsQ0FBVSxJQUFWLEVBQWdCOEQsUUFBaEIsQ0FBeUIsT0FBekIsQ0FBckI7QUFDQWpDLGlCQUFXLENBQUNnQyxjQUFELENBQVg7QUFFUCxLQUpHO0FBTUg7O0FBQ0RoQyxhQUFXLENBQUMsUUFBRCxDQUFYO0FBQ0gsQ0FoU0QsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cbiAgICBjb25zdCBzdGF0ZUluZGV4ID0ge1xuICAgICAgICBcIkFLXCI6IDAsXG4gICAgICAgIFwiQUxcIjogMSxcbiAgICAgICAgXCJBUlwiOiAyLFxuICAgICAgICBcIkFTXCI6IDMsXG4gICAgICAgIFwiQVpcIjogNCxcbiAgICAgICAgXCJDQVwiOiA1LFxuICAgICAgICBcIkNPXCI6IDYsXG4gICAgICAgIFwiQ1RcIjogNyxcbiAgICAgICAgXCJEQ1wiOiA4LFxuICAgICAgICBcIkRFXCI6IDksXG4gICAgICAgIFwiRkxcIjogMTAsXG4gICAgICAgIFwiR0FcIjogMTEsXG4gICAgICAgIFwiR1VcIjogMTIsXG4gICAgICAgIFwiSElcIjogMTMsXG4gICAgICAgIFwiSUFcIjogMTQsXG4gICAgICAgIFwiSURcIjogMTUsXG4gICAgICAgIFwiSUxcIjogMTYsXG4gICAgICAgIFwiSU5cIjogMTcsXG4gICAgICAgIFwiS1NcIjogMTgsXG4gICAgICAgIFwiS1lcIjogMTksXG4gICAgICAgIFwiTEFcIjogMjAsXG4gICAgICAgIFwiTUFcIjogMjEsXG4gICAgICAgIFwiTURcIjogMjIsXG4gICAgICAgIFwiTUVcIjogMjMsXG4gICAgICAgIFwiTUlcIjogMjQsXG4gICAgICAgIFwiTU5cIjogMjUsXG4gICAgICAgIFwiTU9cIjogMjYsXG4gICAgICAgIFwiTVBcIjogMjcsXG4gICAgICAgIFwiTVNcIjogMjgsXG4gICAgICAgIFwiTVRcIjogMjksXG4gICAgICAgIFwiTkNcIjogMzAsXG4gICAgICAgIFwiTkRcIjogMzEsXG4gICAgICAgIFwiTkVcIjogMzIsXG4gICAgICAgIFwiTkhcIjogMzMsXG4gICAgICAgIFwiTkpcIjogMzQsXG4gICAgICAgIFwiTk1cIjogMzUsXG4gICAgICAgIFwiTlZcIjogMzYsXG4gICAgICAgIFwiTllcIjogMzcsXG4gICAgICAgIFwiT0hcIjogMzgsXG4gICAgICAgIFwiT0tcIjogMzksXG4gICAgICAgIFwiT1JcIjogNDAsXG4gICAgICAgIFwiUEFcIjogNDEsXG4gICAgICAgIFwiUFJcIjogNDIsXG4gICAgICAgIFwiUklcIjogNDMsXG4gICAgICAgIFwiU0NcIjogNDQsXG4gICAgICAgIFwiU0RcIjogNDUsXG4gICAgICAgIFwiVE5cIjogNDYsXG4gICAgICAgIFwiVFhcIjogNDcsXG4gICAgICAgIFwiVVRcIjogNDgsXG4gICAgICAgIFwiVkFcIjogNDksXG4gICAgICAgIFwiVklcIjogNTAsXG4gICAgICAgIFwiVlRcIjogNTEsXG4gICAgICAgIFwiV0FcIjogNTIsXG4gICAgICAgIFwiV0lcIjogNTMsXG4gICAgICAgIFwiV1ZcIjogNTQsXG4gICAgICAgIFwiV1lcIjogNTVcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0ZU5hbWVzID0ge1xuICAgICAgICBcIkFsYWJhbWFcIjogXCJBTFwiLFxuICAgICAgICBcIkFsYXNrYVwiOiBcIkFLXCIsXG4gICAgICAgIFwiQW1lcmljYW4gU2Ftb2FcIjogXCJBU1wiLFxuICAgICAgICBcIkFyaXpvbmFcIjogXCJBWlwiLFxuICAgICAgICBcIkFya2Fuc2FzXCI6IFwiQVJcIixcbiAgICAgICAgXCJDYWxpZm9ybmlhXCI6IFwiQ0FcIixcbiAgICAgICAgXCJDb2xvcmFkb1wiOiBcIkNPXCIsXG4gICAgICAgIFwiQ29ubmVjdGljdXRcIjogXCJDVFwiLFxuICAgICAgICBcIkRlbGF3YXJlXCI6IFwiREVcIixcbiAgICAgICAgXCJEaXN0cmljdCBPZiBDb2x1bWJpYVwiOiBcIkRDXCIsXG4gICAgICAgIFwiRmxvcmlkYVwiOiBcIkZMXCIsXG4gICAgICAgIFwiR2VvcmdpYVwiOiBcIkdBXCIsXG4gICAgICAgIFwiR3VhbVwiOiBcIkdVXCIsXG4gICAgICAgIFwiSGF3YWlpXCI6IFwiSElcIixcbiAgICAgICAgXCJJZGFob1wiOiBcIklEXCIsXG4gICAgICAgIFwiSWxsaW5vaXNcIjogXCJJTFwiLFxuICAgICAgICBcIkluZGlhbmFcIjogXCJJTlwiLFxuICAgICAgICBcIklvd2FcIjogXCJJQVwiLFxuICAgICAgICBcIkthbnNhc1wiOiBcIktTXCIsXG4gICAgICAgIFwiS2VudHVja3lcIjogXCJLWVwiLFxuICAgICAgICBcIkxvdWlzaWFuYVwiOiBcIkxBXCIsXG4gICAgICAgIFwiTWFpbmVcIjogXCJNRVwiLFxuICAgICAgICBcIk1hcnlsYW5kXCI6IFwiTURcIixcbiAgICAgICAgXCJNYXNzYWNodXNldHRzXCI6IFwiTUFcIixcbiAgICAgICAgXCJNaWNoaWdhblwiOiBcIk1JXCIsXG4gICAgICAgIFwiTWlubmVzb3RhXCI6IFwiTU5cIixcbiAgICAgICAgXCJNaXNzaXNzaXBwaVwiOiBcIk1TXCIsXG4gICAgICAgIFwiTWlzc291cmlcIjogXCJNT1wiLFxuICAgICAgICBcIk1vbnRhbmFcIjogXCJNVFwiLFxuICAgICAgICBcIk5lYnJhc2thXCI6IFwiTkVcIixcbiAgICAgICAgXCJOZXZhZGFcIjogXCJOVlwiLFxuICAgICAgICBcIk5ldyBIYW1wc2hpcmVcIjogXCJOSFwiLFxuICAgICAgICBcIk5ldyBKZXJzZXlcIjogXCJOSlwiLFxuICAgICAgICBcIk5ldyBNZXhpY29cIjogXCJOTVwiLFxuICAgICAgICBcIk5ldyBZb3JrXCI6IFwiTllcIixcbiAgICAgICAgXCJOb3J0aCBDYXJvbGluYVwiOiBcIk5DXCIsXG4gICAgICAgIFwiTm9ydGggRGFrb3RhXCI6IFwiTkRcIixcbiAgICAgICAgXCJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHNcIjogXCJNUFwiLFxuICAgICAgICBcIk9oaW9cIjogXCJPSFwiLFxuICAgICAgICBcIk9rbGFob21hXCI6IFwiT0tcIixcbiAgICAgICAgXCJPcmVnb25cIjogXCJPUlwiLFxuICAgICAgICBcIlBlbm5zeWx2YW5pYVwiOiBcIlBBXCIsXG4gICAgICAgIFwiUHVlcnRvIFJpY29cIjogXCJQUlwiLFxuICAgICAgICBcIlJob2RlIElzbGFuZFwiOiBcIlJJXCIsXG4gICAgICAgIFwiU291dGggQ2Fyb2xpbmFcIjogXCJTQ1wiLFxuICAgICAgICBcIlNvdXRoIERha290YVwiOiBcIlNEXCIsXG4gICAgICAgIFwiVGVubmVzc2VlXCI6IFwiVE5cIixcbiAgICAgICAgXCJUZXhhc1wiOiBcIlRYXCIsXG4gICAgICAgIFwiVXRhaFwiOiBcIlVUXCIsXG4gICAgICAgIFwiVmVybW9udFwiOiBcIlZUXCIsXG4gICAgICAgIFwiVmlyZ2luIElzbGFuZHNcIjogXCJWSVwiLFxuICAgICAgICBcIlZpcmdpbmlhXCI6IFwiVkFcIixcbiAgICAgICAgXCJXYXNoaW5ndG9uXCI6IFwiV0FcIixcbiAgICAgICAgXCJXZXN0IFZpcmdpbmlhXCI6IFwiV1ZcIixcbiAgICAgICAgXCJXaXNjb25zaW5cIjogXCJXSVwiLFxuICAgICAgICBcIld5b21pbmdcIjogXCJXWVwiXG4gICAgfVxuXG4gICAgbGV0IG1hcmdpbiA9IDcwLFxuICAgIFxuICAgICAgICB3aWR0aCA9IDgwMCAtIDIgKiBtYXJnaW4sXG4gICAgICAgIGhlaWdodCA9IDYwMCAtIDIgKiBtYXJnaW47XG5cbiAgICBsZXQgc3ZnID0gZDMuc2VsZWN0KFwiI2RhdGEtc2VjdGlvblwiKVxuICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKyAoMiAqIG1hcmdpbikpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArICgyICogbWFyZ2luKSlcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke21hcmdpbn0sICR7bWFyZ2luIC8gMn0pYCk7XG5cbiAgICBsZXQgeCA9IGQzLnNjYWxlQmFuZCgpXG4gICAgICAgIC5yYW5nZShbMCwgd2lkdGhdKVxuICAgICAgICAucGFkZGluZygwLjQpXG5cbiAgICBsZXQgeEF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4QXhpc1wiKVxuXG4gICAgbGV0IHkgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5yYW5nZShbaGVpZ2h0LCAwXSlcblxuICAgIGxldCB5QXhpcyA9IHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieUF4aXNcIilcblxuICAgIGQzLnNlbGVjdChcIiNzZWxlY3RCdXR0b25cIilcbiAgICAgICAgLnNlbGVjdEFsbChcIm15T3B0aW9uc1wiKVxuICAgICAgICAuZGF0YShPYmplY3Qua2V5cyhzdGF0ZU5hbWVzKSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcIm9wdGlvblwiKVxuICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZDsgfSlcbiAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCB9KVxuXG4gICAgbGV0IGNhcGl0YWxpemUgPSB3b3JkID0+IHtcbiAgICAgICAgbGV0IHdvcmRBcnJheSA9IHdvcmQuc3BsaXQoJycpXG4gICAgICAgIGxldCBuZXdXb3JkID0gW107XG4gICAgICAgIHdvcmRBcnJheS5mb3JFYWNoKChjaGFyLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hhciAhPT0gY2hhci50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgbmV3V29yZC5wdXNoKGNoYXIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1dvcmQucHVzaCgnICcgKyBjaGFyLnRvVXBwZXJDYXNlKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgbmV3V29yZFswXSA9IG5ld1dvcmRbMF0udG9VcHBlckNhc2UoKVxuICAgICAgICByZXR1cm4gbmV3V29yZC5qb2luKCcnKVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gc2VsZWN0U3RhdGUoc2VsZWN0ZWRTdGF0ZSkgeyBcblxuICAgICAgICBkMy5jc3YoXCJodHRwczovL2NvdmlkdHJhY2tpbmcuY29tL2FwaS92MS9zdGF0ZXMvY3VycmVudC5jc3ZcIiwgZnVuY3Rpb24gKHJhd0RhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkU3RhdGUpXG4gICAgICAgICAgICBsZXQgaW5pdGlhbHMgPSBzdGF0ZU5hbWVzW3NlbGVjdGVkU3RhdGVdXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbml0aWFscylcbiAgICAgICAgICAgIGxldCBzdGF0ZURhdGEgPSByYXdEYXRhW3N0YXRlSW5kZXhbaW5pdGlhbHNdXVxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGVEYXRhKVxuICAgICAgICAgICAgbGV0IGRhdGEgPSBbXVxuXG4gICAgICAgICAgICBmb3IgKGxldCBbZCwgdl0gb2YgT2JqZWN0LmVudHJpZXMoc3RhdGVEYXRhKSkge1xuICAgICAgICAgICAgICAgIGlmIChkID09PSAncG9zaXRpdmUnIHx8IGQgPT09ICdyZWNvdmVyZWQnIHx8IGQgPT09ICdkZWF0aCcgfHxcbiAgICAgICAgICAgICAgICAgICAgZCA9PT0gJ2hvc3BpdGFsaXplZEN1cnJlbnRseScgfHwgZCA9PT0gJ2hvc3BpdGFsaXplZEN1bXVsYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgIGQgPT09ICdpbkljdUN1cnJlbnRseScgfHwgZCA9PT0gJ2luSWN1Q3VtdWxhdGl2ZScgfHwgZCA9PT0gJ29uVmVudGlsYXRvckN1cnJlbnRseScgfHxcbiAgICAgICAgICAgICAgICAgICAgZCA9PT0gJ29uVmVudGlsYXRvckN1bXVsYXRpdmUnIHx8IFxuICAgICAgICAgICAgICAgICAgICBkID09PSAnaG9zcGl0YWxpemVkJykge1xuICAgICAgICAgICAgICAgICAgICBkID0gY2FwaXRhbGl6ZShkKVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KHYpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKHsgY2F0ZWdvcnk6IGQsIHZhbHVlOiArcGFyc2VJbnQodikgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgeC5kb21haW4oZGF0YS5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuY2F0ZWdvcnkgfSkpXG5cbiAgICAgICAgICAgIGxldCBtYXhZID0gZDMubWF4KGRhdGEsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnZhbHVlIH0pXG4gICAgICAgICAgICB5LmRvbWFpbihbMCwgKG1heFkgKiAxLjIpXSlcblxuICAgICAgICAgICAgeUF4aXMudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpXG5cbiAgICAgICAgICAgIHhBeGlzLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoLTAuMixcIiArIGhlaWdodCArIFwiKVwiKVxuICAgICAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoLTcsMClyb3RhdGUoLTIwKVwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3gnLCAtOClcblxuICAgICAgICAgICAgbGV0IGJhciA9IHN2Zy5zZWxlY3RBbGwoXCJyZWN0XCIpXG4gICAgICAgICAgICAgICAgLmRhdGEoZGF0YSlcblxuICAgICAgICAgICAgbGV0IHRleHQgPSBzdmcuc2VsZWN0QWxsKFwidGV4dFwiKVxuXG4gICAgICAgICAgICB0ZXh0LmV4aXQoKS5yZW1vdmUoKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBiYXIuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwicmVjdFwiKVxuICAgICAgICAgICAgICAgIC5tZXJnZShiYXIpXG4gICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geChkLmNhdGVnb3J5KSB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geShkLnZhbHVlKSB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgeC5iYW5kd2lkdGgoKSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gaGVpZ2h0IC0geShkLnZhbHVlKSB9KVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCIjNjliM2EyXCIpXG4gICAgICAgICAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGhhbmRsZU1vdXNlT3ZlcilcbiAgICAgICAgICAgICAgICAub24oXCJtb3VzZW91dFwiLCBoYW5kbGVNb3VzZU91dClcbiAgICAgICAgICAgICAgICAgLy8gICAgIC5kZWxheShmdW5jdGlvbiAoZCwgaSkgeyBjb25zb2xlLmxvZyhpKTsgcmV0dXJuIChpICogMTAwKSB9KVxuXG4gICAgICAgICAgICBiYXIuZXhpdCgpXG4gICAgICAgICAgICAgICAgLnJlbW92ZSgpXG5cblxuXG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNlT3ZlcihkLCBpKSB7XG4gICAgICAgICAgICAgICAgc3ZnLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ2YWx1ZVwiKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneCcsIChkKSA9PiB4KGQuY2F0ZWdvcnkpICsgeC5iYW5kd2lkdGgoKSAvIDIpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd5JywgKGQpID0+IHkoZC52YWx1ZSkgLSAxMClcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBgJHsoZC52YWx1ZSl9YCB9KVxuXG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgXCJkYXJrY3lhblwiKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigncicsIDEwKVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNlT3V0KGQsIGkpIHtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3QoJy5ob3ZlclZhdWxlJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgXCJkYXJrc2FsbW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdyJywgNilcblxuICAgICAgICAgICAgfSBcblxuXG4gICAgICAgICAgICBzdmcuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCAneS1heGlzLWxhYmVsJylcbiAgICAgICAgICAgICAgICAuYXR0cigneCcsIC1oZWlnaHQgLyAyKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd5JywgLTUwKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAncm90YXRlKC05MCknKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAgICAgICAgIC50ZXh0KCdJbmNpZGVudHMnKVxuXG4gICAgICAgICAgICBzdmcuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCAneC1heGlzLWxhYmVsJylcbiAgICAgICAgICAgICAgICAuYXR0cigneCcsIHdpZHRoIC8gMiArIG1hcmdpbilcbiAgICAgICAgICAgICAgICAuYXR0cigneScsIGhlaWdodCArIG1hcmdpbiAqIDEuNylcbiAgICAgICAgICAgICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgICAgICAgICAudGV4dCgnQ2F0ZWdvcmllcycpXG5cbiAgICAgICAgfSlcblxuICAgICAgICBkMy5zZWxlY3QoXCIjc2VsZWN0QnV0dG9uXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBkMy5zZWxlY3QodGhpcykucHJvcGVydHkoXCJ2YWx1ZVwiKVxuICAgICAgICAgICAgc2VsZWN0U3RhdGUoc2VsZWN0ZWRPcHRpb24pXG4gICAgICAgIFxuICAgIH0pO1xuXG4gICAgfVxuICAgIHNlbGVjdFN0YXRlKFwiQWxhc2thXCIpXG59KSJdLCJzb3VyY2VSb290IjoiIn0=