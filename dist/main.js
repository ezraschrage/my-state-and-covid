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
  var margin = 100;
  horizontalMargin = 120, verticalMargin = 100, width = 1080 - 2 * horizontalMargin, height = 700 - 2 * verticalMargin;
  console.log(height);
  var svg = d3.select("#data-section").append("svg").attr("width", width + 2 * horizontalMargin).attr("height", height + 2 * margin).append("g").attr("transform", "translate(".concat(horizontalMargin, ", ").concat(margin / 2, ")"));
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
      var initials = stateNames[selectedState];
      var stateData = rawData[stateIndex[initials]];
      var data = [];
      var death = 0;
      var updated = "";

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
            if (d === "Death") death = v;
          }
        } else if (d === "dateChecked") updated = v;
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
      bar.exit().remove();
      bar.enter().append("rect") // .attr("class", "rect")
      .attr("y", function (d) {
        return y(0);
      }).merge(bar) // .attr("y", function (d) { return y(0) })
      // .attr("transform", function (d) { return x(d.category) })
      // .attr("y", function (d) {
      //     return y(0);
      // })
      // .attr("height", 0)
      // .ease(d3.easeBounceOut)
      // .ease('linear')
      .attr("x", function (d) {
        return x(d.category);
      }) // .attr("y", function (d) { return y(0) })
      .transition().duration(1000).attr("y", function (d) {
        return y(d.value);
      }).attr("width", x.bandwidth()).attr("height", function (d) {
        return height - y(d.value);
      }).style("fill", "#69b3a2");
      svg.append('text').attr('class', 'y-axis-label').attr('x', -height / 2).attr('y', -80).attr('transform', 'rotate(-90)').attr('text-anchor', 'middle').text('Reported Cases');
      svg.append('text').attr('class', 'x-axis-label').attr('x', width / 3 + horizontalMargin).attr('y', height + verticalMargin).attr('text-anchor', 'middle').text('Categories');
      d3.select("deaths").remove().exit();
      var deathText = d3.select(".state-name").append("deaths");
      deathText.append("text").text("Total deaths in ".concat(selectedState, ": ").concat(death));
      d3.select("updated").remove().exit();
      var updatedText = d3.select(".updated").append("updated");
      var date = new Date(updated.slice(0, 10));
      var prettyDate = "".concat(date.getMonth() + 1, "-").concat(date.getDate(), "-").concat(date.getFullYear());
      updatedText.append("text").text("Information last updated on ".concat(prettyDate)).style("text-decoration", "none"); // let table_plot = makeTable()
      //     .data(data)
      //     // .sortBy('pval', true)
      //     .filterCols(['col', 'x', 'y']);
      // d3.select('.table-box').call(table_plot);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXRlSW5kZXgiLCJzdGF0ZU5hbWVzIiwibWFyZ2luIiwiaG9yaXpvbnRhbE1hcmdpbiIsInZlcnRpY2FsTWFyZ2luIiwid2lkdGgiLCJoZWlnaHQiLCJjb25zb2xlIiwibG9nIiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwieCIsInNjYWxlQmFuZCIsInJhbmdlIiwicGFkZGluZyIsInhBeGlzIiwieSIsInNjYWxlTGluZWFyIiwieUF4aXMiLCJzZWxlY3RBbGwiLCJkYXRhIiwiT2JqZWN0Iiwia2V5cyIsImVudGVyIiwidGV4dCIsImQiLCJjYXBpdGFsaXplIiwid29yZCIsIndvcmRBcnJheSIsInNwbGl0IiwibmV3V29yZCIsImZvckVhY2giLCJjaGFyIiwiaSIsInRvVXBwZXJDYXNlIiwicHVzaCIsImpvaW4iLCJzZWxlY3RTdGF0ZSIsInNlbGVjdGVkU3RhdGUiLCJjc3YiLCJyYXdEYXRhIiwiaW5pdGlhbHMiLCJzdGF0ZURhdGEiLCJkZWF0aCIsInVwZGF0ZWQiLCJlbnRyaWVzIiwidiIsImlzTmFOIiwicGFyc2VJbnQiLCJjYXRlZ29yeSIsInZhbHVlIiwiZG9tYWluIiwibWFwIiwibWF4WSIsIm1heCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNhbGwiLCJheGlzTGVmdCIsImF4aXNCb3R0b20iLCJzdHlsZSIsImJhciIsImV4aXQiLCJyZW1vdmUiLCJtZXJnZSIsImJhbmR3aWR0aCIsImRlYXRoVGV4dCIsInVwZGF0ZWRUZXh0IiwiZGF0ZSIsIkRhdGUiLCJzbGljZSIsInByZXR0eURhdGUiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsIm9uIiwic2VsZWN0ZWRPcHRpb24iLCJwcm9wZXJ0eSJdLCJtYXBwaW5ncyI6IjtR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TUFBakIsRUFDU2UsSUFEVCwyQkFDaUNjLGFBRGpDLGVBQ21ESyxLQURuRDtBQUlBcEMsUUFBRSxDQUFDQyxNQUFILENBQVUsU0FBVixFQUFxQnVELE1BQXJCLEdBQThCRCxJQUE5QjtBQUNBLFVBQUlLLFdBQVcsR0FBRzVELEVBQUUsQ0FBQ0MsTUFBSCxDQUFVLFVBQVYsRUFBc0JDLE1BQXRCLENBQTZCLFNBQTdCLENBQWxCO0FBRUEsVUFBSTJELElBQUksR0FBRyxJQUFJQyxJQUFKLENBQVN6QixPQUFPLENBQUMwQixLQUFSLENBQWMsQ0FBZCxFQUFnQixFQUFoQixDQUFULENBQVg7QUFDQSxVQUFJQyxVQUFVLGFBQU1ILElBQUksQ0FBQ0ksUUFBTCxLQUFrQixDQUF4QixjQUE2QkosSUFBSSxDQUFDSyxPQUFMLEVBQTdCLGNBQStDTCxJQUFJLENBQUNNLFdBQUwsRUFBL0MsQ0FBZDtBQUVBUCxpQkFBVyxDQUFDMUQsTUFBWixDQUFtQixNQUFuQixFQUNLZSxJQURMLHVDQUN5QytDLFVBRHpDLEdBRUtYLEtBRkwsQ0FFVyxpQkFGWCxFQUU4QixNQUY5QixFQXhHNkUsQ0E2RzdFO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHSCxLQXJIRDtBQXVIQXJELE1BQUUsQ0FBQ0MsTUFBSCxDQUFVLGVBQVYsRUFBMkJtRSxFQUEzQixDQUE4QixRQUE5QixFQUF3QyxVQUFVbEQsQ0FBVixFQUFhO0FBQ2pELFVBQUltRCxjQUFjLEdBQUdyRSxFQUFFLENBQUNDLE1BQUgsQ0FBVSxJQUFWLEVBQWdCcUUsUUFBaEIsQ0FBeUIsT0FBekIsQ0FBckI7QUFDQXhDLGlCQUFXLENBQUN1QyxjQUFELENBQVg7QUFHUCxLQUxHO0FBT0g7O0FBQ0R2QyxhQUFXLENBQUMsUUFBRCxDQUFYO0FBQ0gsQ0EvU0QsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cbiAgICBjb25zdCBzdGF0ZUluZGV4ID0ge1xuICAgICAgICBcIkFLXCI6IDAsXG4gICAgICAgIFwiQUxcIjogMSxcbiAgICAgICAgXCJBUlwiOiAyLFxuICAgICAgICBcIkFTXCI6IDMsXG4gICAgICAgIFwiQVpcIjogNCxcbiAgICAgICAgXCJDQVwiOiA1LFxuICAgICAgICBcIkNPXCI6IDYsXG4gICAgICAgIFwiQ1RcIjogNyxcbiAgICAgICAgXCJEQ1wiOiA4LFxuICAgICAgICBcIkRFXCI6IDksXG4gICAgICAgIFwiRkxcIjogMTAsXG4gICAgICAgIFwiR0FcIjogMTEsXG4gICAgICAgIFwiR1VcIjogMTIsXG4gICAgICAgIFwiSElcIjogMTMsXG4gICAgICAgIFwiSUFcIjogMTQsXG4gICAgICAgIFwiSURcIjogMTUsXG4gICAgICAgIFwiSUxcIjogMTYsXG4gICAgICAgIFwiSU5cIjogMTcsXG4gICAgICAgIFwiS1NcIjogMTgsXG4gICAgICAgIFwiS1lcIjogMTksXG4gICAgICAgIFwiTEFcIjogMjAsXG4gICAgICAgIFwiTUFcIjogMjEsXG4gICAgICAgIFwiTURcIjogMjIsXG4gICAgICAgIFwiTUVcIjogMjMsXG4gICAgICAgIFwiTUlcIjogMjQsXG4gICAgICAgIFwiTU5cIjogMjUsXG4gICAgICAgIFwiTU9cIjogMjYsXG4gICAgICAgIFwiTVBcIjogMjcsXG4gICAgICAgIFwiTVNcIjogMjgsXG4gICAgICAgIFwiTVRcIjogMjksXG4gICAgICAgIFwiTkNcIjogMzAsXG4gICAgICAgIFwiTkRcIjogMzEsXG4gICAgICAgIFwiTkVcIjogMzIsXG4gICAgICAgIFwiTkhcIjogMzMsXG4gICAgICAgIFwiTkpcIjogMzQsXG4gICAgICAgIFwiTk1cIjogMzUsXG4gICAgICAgIFwiTlZcIjogMzYsXG4gICAgICAgIFwiTllcIjogMzcsXG4gICAgICAgIFwiT0hcIjogMzgsXG4gICAgICAgIFwiT0tcIjogMzksXG4gICAgICAgIFwiT1JcIjogNDAsXG4gICAgICAgIFwiUEFcIjogNDEsXG4gICAgICAgIFwiUFJcIjogNDIsXG4gICAgICAgIFwiUklcIjogNDMsXG4gICAgICAgIFwiU0NcIjogNDQsXG4gICAgICAgIFwiU0RcIjogNDUsXG4gICAgICAgIFwiVE5cIjogNDYsXG4gICAgICAgIFwiVFhcIjogNDcsXG4gICAgICAgIFwiVVRcIjogNDgsXG4gICAgICAgIFwiVkFcIjogNDksXG4gICAgICAgIFwiVklcIjogNTAsXG4gICAgICAgIFwiVlRcIjogNTEsXG4gICAgICAgIFwiV0FcIjogNTIsXG4gICAgICAgIFwiV0lcIjogNTMsXG4gICAgICAgIFwiV1ZcIjogNTQsXG4gICAgICAgIFwiV1lcIjogNTVcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0ZU5hbWVzID0ge1xuICAgICAgICBcIkFsYWJhbWFcIjogXCJBTFwiLFxuICAgICAgICBcIkFsYXNrYVwiOiBcIkFLXCIsXG4gICAgICAgIFwiQW1lcmljYW4gU2Ftb2FcIjogXCJBU1wiLFxuICAgICAgICBcIkFyaXpvbmFcIjogXCJBWlwiLFxuICAgICAgICBcIkFya2Fuc2FzXCI6IFwiQVJcIixcbiAgICAgICAgXCJDYWxpZm9ybmlhXCI6IFwiQ0FcIixcbiAgICAgICAgXCJDb2xvcmFkb1wiOiBcIkNPXCIsXG4gICAgICAgIFwiQ29ubmVjdGljdXRcIjogXCJDVFwiLFxuICAgICAgICBcIkRlbGF3YXJlXCI6IFwiREVcIixcbiAgICAgICAgXCJEaXN0cmljdCBPZiBDb2x1bWJpYVwiOiBcIkRDXCIsXG4gICAgICAgIFwiRmxvcmlkYVwiOiBcIkZMXCIsXG4gICAgICAgIFwiR2VvcmdpYVwiOiBcIkdBXCIsXG4gICAgICAgIFwiR3VhbVwiOiBcIkdVXCIsXG4gICAgICAgIFwiSGF3YWlpXCI6IFwiSElcIixcbiAgICAgICAgXCJJZGFob1wiOiBcIklEXCIsXG4gICAgICAgIFwiSWxsaW5vaXNcIjogXCJJTFwiLFxuICAgICAgICBcIkluZGlhbmFcIjogXCJJTlwiLFxuICAgICAgICBcIklvd2FcIjogXCJJQVwiLFxuICAgICAgICBcIkthbnNhc1wiOiBcIktTXCIsXG4gICAgICAgIFwiS2VudHVja3lcIjogXCJLWVwiLFxuICAgICAgICBcIkxvdWlzaWFuYVwiOiBcIkxBXCIsXG4gICAgICAgIFwiTWFpbmVcIjogXCJNRVwiLFxuICAgICAgICBcIk1hcnlsYW5kXCI6IFwiTURcIixcbiAgICAgICAgXCJNYXNzYWNodXNldHRzXCI6IFwiTUFcIixcbiAgICAgICAgXCJNaWNoaWdhblwiOiBcIk1JXCIsXG4gICAgICAgIFwiTWlubmVzb3RhXCI6IFwiTU5cIixcbiAgICAgICAgXCJNaXNzaXNzaXBwaVwiOiBcIk1TXCIsXG4gICAgICAgIFwiTWlzc291cmlcIjogXCJNT1wiLFxuICAgICAgICBcIk1vbnRhbmFcIjogXCJNVFwiLFxuICAgICAgICBcIk5lYnJhc2thXCI6IFwiTkVcIixcbiAgICAgICAgXCJOZXZhZGFcIjogXCJOVlwiLFxuICAgICAgICBcIk5ldyBIYW1wc2hpcmVcIjogXCJOSFwiLFxuICAgICAgICBcIk5ldyBKZXJzZXlcIjogXCJOSlwiLFxuICAgICAgICBcIk5ldyBNZXhpY29cIjogXCJOTVwiLFxuICAgICAgICBcIk5ldyBZb3JrXCI6IFwiTllcIixcbiAgICAgICAgXCJOb3J0aCBDYXJvbGluYVwiOiBcIk5DXCIsXG4gICAgICAgIFwiTm9ydGggRGFrb3RhXCI6IFwiTkRcIixcbiAgICAgICAgXCJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHNcIjogXCJNUFwiLFxuICAgICAgICBcIk9oaW9cIjogXCJPSFwiLFxuICAgICAgICBcIk9rbGFob21hXCI6IFwiT0tcIixcbiAgICAgICAgXCJPcmVnb25cIjogXCJPUlwiLFxuICAgICAgICBcIlBlbm5zeWx2YW5pYVwiOiBcIlBBXCIsXG4gICAgICAgIFwiUHVlcnRvIFJpY29cIjogXCJQUlwiLFxuICAgICAgICBcIlJob2RlIElzbGFuZFwiOiBcIlJJXCIsXG4gICAgICAgIFwiU291dGggQ2Fyb2xpbmFcIjogXCJTQ1wiLFxuICAgICAgICBcIlNvdXRoIERha290YVwiOiBcIlNEXCIsXG4gICAgICAgIFwiVGVubmVzc2VlXCI6IFwiVE5cIixcbiAgICAgICAgXCJUZXhhc1wiOiBcIlRYXCIsXG4gICAgICAgIFwiVXRhaFwiOiBcIlVUXCIsXG4gICAgICAgIFwiVmVybW9udFwiOiBcIlZUXCIsXG4gICAgICAgIFwiVmlyZ2luIElzbGFuZHNcIjogXCJWSVwiLFxuICAgICAgICBcIlZpcmdpbmlhXCI6IFwiVkFcIixcbiAgICAgICAgXCJXYXNoaW5ndG9uXCI6IFwiV0FcIixcbiAgICAgICAgXCJXZXN0IFZpcmdpbmlhXCI6IFwiV1ZcIixcbiAgICAgICAgXCJXaXNjb25zaW5cIjogXCJXSVwiLFxuICAgICAgICBcIld5b21pbmdcIjogXCJXWVwiXG4gICAgfVxuXG4gICAgbGV0IG1hcmdpbiA9IDEwMFxuICAgICAgICBob3Jpem9udGFsTWFyZ2luID0gMTIwLFxuICAgICAgICB2ZXJ0aWNhbE1hcmdpbiA9IDEwMCxcbiAgICAgICAgd2lkdGggPSAxMDgwIC0gMiAqIGhvcml6b250YWxNYXJnaW4sXG4gICAgICAgIGhlaWdodCA9IDcwMCAtIDIgKiB2ZXJ0aWNhbE1hcmdpbjtcblxuICAgIGNvbnNvbGUubG9nKGhlaWdodClcblxuICAgIGxldCBzdmcgPSBkMy5zZWxlY3QoXCIjZGF0YS1zZWN0aW9uXCIpXG4gICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArICgyICogaG9yaXpvbnRhbE1hcmdpbikpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArICgyICogbWFyZ2luKSlcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke2hvcml6b250YWxNYXJnaW59LCAke21hcmdpbiAvIDJ9KWApO1xuXG4gICAgbGV0IHggPSBkMy5zY2FsZUJhbmQoKVxuICAgICAgICAucmFuZ2UoWzAsIHdpZHRoXSlcbiAgICAgICAgLnBhZGRpbmcoMC40KVxuXG4gICAgbGV0IHhBeGlzID0gc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieEF4aXNcIilcblxuICAgIGxldCB5ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAucmFuZ2UoW2hlaWdodCwgMF0pXG5cbiAgICBsZXQgeUF4aXMgPSBzdmcuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInlBeGlzXCIpXG5cbiAgICBkMy5zZWxlY3QoXCIjc2VsZWN0QnV0dG9uXCIpXG4gICAgICAgIC5zZWxlY3RBbGwoXCJteU9wdGlvbnNcIilcbiAgICAgICAgLmRhdGEoT2JqZWN0LmtleXMoc3RhdGVOYW1lcykpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJvcHRpb25cIilcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQ7IH0pXG4gICAgICAgIC5hdHRyKFwidmFsdWVcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQgfSlcblxuICAgIGxldCBjYXBpdGFsaXplID0gd29yZCA9PiB7XG4gICAgICAgIGxldCB3b3JkQXJyYXkgPSB3b3JkLnNwbGl0KCcnKVxuICAgICAgICBsZXQgbmV3V29yZCA9IFtdO1xuICAgICAgICB3b3JkQXJyYXkuZm9yRWFjaCgoY2hhciwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNoYXIgIT09IGNoYXIudG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIG5ld1dvcmQucHVzaChjaGFyKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdXb3JkLnB1c2goJyAnICsgY2hhci50b1VwcGVyQ2FzZSgpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIG5ld1dvcmRbMF0gPSBuZXdXb3JkWzBdLnRvVXBwZXJDYXNlKClcbiAgICAgICAgcmV0dXJuIG5ld1dvcmQuam9pbignJylcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHNlbGVjdFN0YXRlKHNlbGVjdGVkU3RhdGUpIHsgXG5cbiAgICAgICAgZDMuY3N2KFwiaHR0cHM6Ly9jb3ZpZHRyYWNraW5nLmNvbS9hcGkvdjEvc3RhdGVzL2N1cnJlbnQuY3N2XCIsIGZ1bmN0aW9uIChyYXdEYXRhKSB7XG4gICAgICAgICAgICBsZXQgaW5pdGlhbHMgPSBzdGF0ZU5hbWVzW3NlbGVjdGVkU3RhdGVdXG4gICAgICAgICAgICBsZXQgc3RhdGVEYXRhID0gcmF3RGF0YVtzdGF0ZUluZGV4W2luaXRpYWxzXV1cbiAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgZGF0YSA9IFtdXG4gICAgICAgICAgICBsZXQgZGVhdGggPSAwXG4gICAgICAgICAgICBsZXQgdXBkYXRlZCA9IFwiXCJcblxuICAgICAgICAgICAgZm9yIChsZXQgW2QsIHZdIG9mIE9iamVjdC5lbnRyaWVzKHN0YXRlRGF0YSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZCA9PT0gJ3Bvc2l0aXZlJyB8fCBkID09PSAncmVjb3ZlcmVkJyB8fCBkID09PSAnZGVhdGgnIHx8XG4gICAgICAgICAgICAgICAgICAgIGQgPT09ICdob3NwaXRhbGl6ZWRDdXJyZW50bHknIHx8IGQgPT09ICdob3NwaXRhbGl6ZWRDdW11bGF0aXZlJyB8fFxuICAgICAgICAgICAgICAgICAgICBkID09PSAnaW5JY3VDdXJyZW50bHknIHx8IGQgPT09ICdpbkljdUN1bXVsYXRpdmUnIHx8IGQgPT09ICdvblZlbnRpbGF0b3JDdXJyZW50bHknIHx8XG4gICAgICAgICAgICAgICAgICAgIGQgPT09ICdvblZlbnRpbGF0b3JDdW11bGF0aXZlJyB8fCBcbiAgICAgICAgICAgICAgICAgICAgZCA9PT0gJ2hvc3BpdGFsaXplZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZCA9IGNhcGl0YWxpemUoZClcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludCh2KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaCh7IGNhdGVnb3J5OiBkLCB2YWx1ZTogK3BhcnNlSW50KHYpIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZCA9PT0gXCJEZWF0aFwiKSBkZWF0aCA9IHYgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZCA9PT0gXCJkYXRlQ2hlY2tlZFwiKSB1cGRhdGVkID0gdlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIHguZG9tYWluKGRhdGEubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLmNhdGVnb3J5IH0pKVxuXG4gICAgICAgICAgICBsZXQgbWF4WSA9IGQzLm1heChkYXRhLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC52YWx1ZSB9KVxuICAgICAgICAgICAgeS5kb21haW4oWzAsIChtYXhZICogMS4yKV0pXG5cbiAgICAgICAgICAgIHlBeGlzLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKVxuXG4gICAgICAgICAgICB4QXhpcy50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKC0wLjIsXCIgKyBoZWlnaHQgKyBcIilcIilcbiAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKC03LDApcm90YXRlKC0yMClcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd4JywgLTgpXG5cbiAgICAgICAgICAgIGxldCBiYXIgPSBzdmcuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgICAgICAgICAgICAgIC5kYXRhKGRhdGEpXG5cbiAgICAgICAgICAgIGxldCB0ZXh0ID0gc3ZnLnNlbGVjdEFsbChcInRleHRcIilcblxuICAgICAgICAgICAgdGV4dC5leGl0KCkucmVtb3ZlKClcblxuICAgICAgICAgICAgYmFyLmV4aXQoKS5yZW1vdmUoKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBiYXIuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgICAgICAgICAvLyAuYXR0cihcImNsYXNzXCIsIFwicmVjdFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geSgwKSB9KVxuICAgICAgICAgICAgICAgIC5tZXJnZShiYXIpXG4gICAgICAgICAgICAgICAgLy8gLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5KDApIH0pXG4gICAgICAgICAgICAgICAgLy8gLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHgoZC5jYXRlZ29yeSkgfSlcbiAgICAgICAgICAgICAgICAvLyAuYXR0cihcInlcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIHkoMCk7XG4gICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgICAgICAvLyAuYXR0cihcImhlaWdodFwiLCAwKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIC5lYXNlKGQzLmVhc2VCb3VuY2VPdXQpXG4gICAgICAgICAgICAgICAgLy8gLmVhc2UoJ2xpbmVhcicpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB4KGQuY2F0ZWdvcnkpIH0pXG4gICAgICAgICAgICAgICAgLy8gLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5KDApIH0pXG4gICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geShkLnZhbHVlKSB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgeC5iYW5kd2lkdGgoKSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gaGVpZ2h0IC0geShkLnZhbHVlKSB9KVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCIjNjliM2EyXCIpXG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBzdmcuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCAneS1heGlzLWxhYmVsJylcbiAgICAgICAgICAgICAgICAuYXR0cigneCcsIC1oZWlnaHQgLyAyKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd5JywgLTgwKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAncm90YXRlKC05MCknKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAgICAgICAgIC50ZXh0KCdSZXBvcnRlZCBDYXNlcycpXG5cbiAgICAgICAgICAgIHN2Zy5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICd4LWF4aXMtbGFiZWwnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd4Jywgd2lkdGggLyAzICsgaG9yaXpvbnRhbE1hcmdpbilcbiAgICAgICAgICAgICAgICAuYXR0cigneScsIGhlaWdodCArIHZlcnRpY2FsTWFyZ2luKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAgICAgICAgIC50ZXh0KCdDYXRlZ29yaWVzJylcblxuICAgICAgICAgICAgZDMuc2VsZWN0KFwiZGVhdGhzXCIpLnJlbW92ZSgpLmV4aXQoKVxuICAgICAgICAgICAgbGV0IGRlYXRoVGV4dCA9IGQzLnNlbGVjdChcIi5zdGF0ZS1uYW1lXCIpLmFwcGVuZChcImRlYXRoc1wiKVxuXG4gICAgICAgICAgICBkZWF0aFRleHQuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgICAgICAgICAudGV4dChgVG90YWwgZGVhdGhzIGluICR7c2VsZWN0ZWRTdGF0ZX06ICR7ZGVhdGh9YClcbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGQzLnNlbGVjdChcInVwZGF0ZWRcIikucmVtb3ZlKCkuZXhpdCgpXG4gICAgICAgICAgICBsZXQgdXBkYXRlZFRleHQgPSBkMy5zZWxlY3QoXCIudXBkYXRlZFwiKS5hcHBlbmQoXCJ1cGRhdGVkXCIpXG5cbiAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUodXBkYXRlZC5zbGljZSgwLDEwKSlcbiAgICAgICAgICAgIGxldCBwcmV0dHlEYXRlID0gYCR7ZGF0ZS5nZXRNb250aCgpICsgMX0tJHtkYXRlLmdldERhdGUoKX0tJHtkYXRlLmdldEZ1bGxZZWFyKCl9YFxuXG4gICAgICAgICAgICB1cGRhdGVkVGV4dC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgLnRleHQoYEluZm9ybWF0aW9uIGxhc3QgdXBkYXRlZCBvbiAke3ByZXR0eURhdGV9YClcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWRlY29yYXRpb25cIiwgXCJub25lXCIpXG5cblxuICAgICAgICAgICAgLy8gbGV0IHRhYmxlX3Bsb3QgPSBtYWtlVGFibGUoKVxuICAgICAgICAgICAgLy8gICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAvLyAgICAgLy8gLnNvcnRCeSgncHZhbCcsIHRydWUpXG4gICAgICAgICAgICAvLyAgICAgLmZpbHRlckNvbHMoWydjb2wnLCAneCcsICd5J10pO1xuXG4gICAgICAgICAgICAvLyBkMy5zZWxlY3QoJy50YWJsZS1ib3gnKS5jYWxsKHRhYmxlX3Bsb3QpO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgfSlcblxuICAgICAgICBkMy5zZWxlY3QoXCIjc2VsZWN0QnV0dG9uXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBkMy5zZWxlY3QodGhpcykucHJvcGVydHkoXCJ2YWx1ZVwiKVxuICAgICAgICAgICAgc2VsZWN0U3RhdGUoc2VsZWN0ZWRPcHRpb24pXG4gICAgICAgICAgICBcbiAgICAgICAgXG4gICAgfSk7XG5cbiAgICB9XG4gICAgc2VsZWN0U3RhdGUoXCJBbGFza2FcIilcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==