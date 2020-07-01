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
      bar.enter().append("rect").attr("y", function (d) {
        return y(0);
      }).merge(bar).attr("x", function (d) {
        return x(d.category);
      }).transition().duration(1000).attr("y", function (d) {
        return y(d.value);
      }).attr("width", x.bandwidth()).attr("height", function (d) {
        return height - y(d.value);
      }).style("fill", "#69b3a2");
      d3.selectAll("rect").on("mouseover", mouseEnter).on("mouseout", mouseLeave);

      function mouseEnter(d, i) {
        svg.append('text').attr('class', 'hoverVaule').attr("x", x(d.category) + x.bandwidth() / 4).attr("y", y(d.value) - 20).text(d.value).style("color", "#69b3a2"); // d3.select(this)
        //     .attr('fill', "darkcyan")
        //     .attr('r', 10)
      }

      function mouseLeave(d, i) {
        d3.select('.hoverVaule').remove(); // d3.select(this)
        //     .attr('fill', "darksalmon")
        //     .attr('r', 6)
      }

      svg.append('text').attr('class', 'y-axis-label').attr('x', -height / 2).attr('y', -80).attr('transform', 'rotate(-90)').attr('text-anchor', 'middle').text('Reported Cases');
      svg.append('text').attr('class', 'x-axis-label').attr('x', width / 3 + horizontalMargin).attr('y', height + verticalMargin).attr('text-anchor', 'middle').text('Categories');
      d3.select("deaths").remove().exit();
      var deathText = d3.select(".state-name").append("deaths");
      deathText.append("text").text("Total deaths in ".concat(selectedState, ": ").concat(death));
      d3.select("updated").remove().exit();
      var updatedText = d3.select(".updated").append("updated");
      var date = new Date(updated.slice(0, 10));
      var prettyDate = "".concat(date.getMonth() + 1, "-").concat(date.getDate(), "-").concat(date.getFullYear());
      updatedText.append("text").text("Information last updated on ".concat(prettyDate)).style("text-decoration", "none");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXRlSW5kZXgiLCJzdGF0ZU5hbWVzIiwibWFyZ2luIiwiaG9yaXpvbnRhbE1hcmdpbiIsInZlcnRpY2FsTWFyZ2luIiwid2lkdGgiLCJoZWlnaHQiLCJzdmciLCJkMyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJ4Iiwic2NhbGVCYW5kIiwicmFuZ2UiLCJwYWRkaW5nIiwieEF4aXMiLCJ5Iiwic2NhbGVMaW5lYXIiLCJ5QXhpcyIsInNlbGVjdEFsbCIsImRhdGEiLCJPYmplY3QiLCJrZXlzIiwiZW50ZXIiLCJ0ZXh0IiwiZCIsImNhcGl0YWxpemUiLCJ3b3JkIiwid29yZEFycmF5Iiwic3BsaXQiLCJuZXdXb3JkIiwiZm9yRWFjaCIsImNoYXIiLCJpIiwidG9VcHBlckNhc2UiLCJwdXNoIiwiam9pbiIsInNlbGVjdFN0YXRlIiwic2VsZWN0ZWRTdGF0ZSIsImNzdiIsInJhd0RhdGEiLCJpbml0aWFscyIsInN0YXRlRGF0YSIsImRlYXRoIiwidXBkYXRlZCIsImVudHJpZXMiLCJ2IiwiaXNOYU4iLCJwYXJzZUludCIsImNhdGVnb3J5IiwidmFsdWUiLCJkb21haW4iLCJtYXAiLCJtYXhZIiwibWF4IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY2FsbCIsImF4aXNMZWZ0IiwiYXhpc0JvdHRvbSIsInN0eWxlIiwiYmFyIiwiZXhpdCIsInJlbW92ZSIsIm1lcmdlIiwiYmFuZHdpZHRoIiwib24iLCJtb3VzZUVudGVyIiwibW91c2VMZWF2ZSIsImRlYXRoVGV4dCIsInVwZGF0ZWRUZXh0IiwiZGF0ZSIsIkRhdGUiLCJzbGljZSIsInByZXR0eURhdGUiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsInNlbGVjdGVkT3B0aW9uIiwicHJvcGVydHkiXSwibWFw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QUFtQixNQUFuQixFQUNLZSxJQURMLHVDQUN5Q2tELFVBRHpDLEdBRUtkLEtBRkwsQ0FFVyxpQkFGWCxFQUU4QixNQUY5QjtBQU1ILEtBNUhEO0FBOEhBckQsTUFBRSxDQUFDQyxNQUFILENBQVUsZUFBVixFQUEyQjBELEVBQTNCLENBQThCLFFBQTlCLEVBQXdDLFVBQVV6QyxDQUFWLEVBQWE7QUFDakQsVUFBSXFELGNBQWMsR0FBR3ZFLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVLElBQVYsRUFBZ0J1RSxRQUFoQixDQUF5QixPQUF6QixDQUFyQjtBQUNBMUMsaUJBQVcsQ0FBQ3lDLGNBQUQsQ0FBWDtBQUdQLEtBTEc7QUFPSDs7QUFDRHpDLGFBQVcsQ0FBQyxRQUFELENBQVg7QUFDSCxDQXBURCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuICAgIGNvbnN0IHN0YXRlSW5kZXggPSB7XG4gICAgICAgIFwiQUtcIjogMCxcbiAgICAgICAgXCJBTFwiOiAxLFxuICAgICAgICBcIkFSXCI6IDIsXG4gICAgICAgIFwiQVNcIjogMyxcbiAgICAgICAgXCJBWlwiOiA0LFxuICAgICAgICBcIkNBXCI6IDUsXG4gICAgICAgIFwiQ09cIjogNixcbiAgICAgICAgXCJDVFwiOiA3LFxuICAgICAgICBcIkRDXCI6IDgsXG4gICAgICAgIFwiREVcIjogOSxcbiAgICAgICAgXCJGTFwiOiAxMCxcbiAgICAgICAgXCJHQVwiOiAxMSxcbiAgICAgICAgXCJHVVwiOiAxMixcbiAgICAgICAgXCJISVwiOiAxMyxcbiAgICAgICAgXCJJQVwiOiAxNCxcbiAgICAgICAgXCJJRFwiOiAxNSxcbiAgICAgICAgXCJJTFwiOiAxNixcbiAgICAgICAgXCJJTlwiOiAxNyxcbiAgICAgICAgXCJLU1wiOiAxOCxcbiAgICAgICAgXCJLWVwiOiAxOSxcbiAgICAgICAgXCJMQVwiOiAyMCxcbiAgICAgICAgXCJNQVwiOiAyMSxcbiAgICAgICAgXCJNRFwiOiAyMixcbiAgICAgICAgXCJNRVwiOiAyMyxcbiAgICAgICAgXCJNSVwiOiAyNCxcbiAgICAgICAgXCJNTlwiOiAyNSxcbiAgICAgICAgXCJNT1wiOiAyNixcbiAgICAgICAgXCJNUFwiOiAyNyxcbiAgICAgICAgXCJNU1wiOiAyOCxcbiAgICAgICAgXCJNVFwiOiAyOSxcbiAgICAgICAgXCJOQ1wiOiAzMCxcbiAgICAgICAgXCJORFwiOiAzMSxcbiAgICAgICAgXCJORVwiOiAzMixcbiAgICAgICAgXCJOSFwiOiAzMyxcbiAgICAgICAgXCJOSlwiOiAzNCxcbiAgICAgICAgXCJOTVwiOiAzNSxcbiAgICAgICAgXCJOVlwiOiAzNixcbiAgICAgICAgXCJOWVwiOiAzNyxcbiAgICAgICAgXCJPSFwiOiAzOCxcbiAgICAgICAgXCJPS1wiOiAzOSxcbiAgICAgICAgXCJPUlwiOiA0MCxcbiAgICAgICAgXCJQQVwiOiA0MSxcbiAgICAgICAgXCJQUlwiOiA0MixcbiAgICAgICAgXCJSSVwiOiA0MyxcbiAgICAgICAgXCJTQ1wiOiA0NCxcbiAgICAgICAgXCJTRFwiOiA0NSxcbiAgICAgICAgXCJUTlwiOiA0NixcbiAgICAgICAgXCJUWFwiOiA0NyxcbiAgICAgICAgXCJVVFwiOiA0OCxcbiAgICAgICAgXCJWQVwiOiA0OSxcbiAgICAgICAgXCJWSVwiOiA1MCxcbiAgICAgICAgXCJWVFwiOiA1MSxcbiAgICAgICAgXCJXQVwiOiA1MixcbiAgICAgICAgXCJXSVwiOiA1MyxcbiAgICAgICAgXCJXVlwiOiA1NCxcbiAgICAgICAgXCJXWVwiOiA1NVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlTmFtZXMgPSB7XG4gICAgICAgIFwiQWxhYmFtYVwiOiBcIkFMXCIsXG4gICAgICAgIFwiQWxhc2thXCI6IFwiQUtcIixcbiAgICAgICAgXCJBbWVyaWNhbiBTYW1vYVwiOiBcIkFTXCIsXG4gICAgICAgIFwiQXJpem9uYVwiOiBcIkFaXCIsXG4gICAgICAgIFwiQXJrYW5zYXNcIjogXCJBUlwiLFxuICAgICAgICBcIkNhbGlmb3JuaWFcIjogXCJDQVwiLFxuICAgICAgICBcIkNvbG9yYWRvXCI6IFwiQ09cIixcbiAgICAgICAgXCJDb25uZWN0aWN1dFwiOiBcIkNUXCIsXG4gICAgICAgIFwiRGVsYXdhcmVcIjogXCJERVwiLFxuICAgICAgICBcIkRpc3RyaWN0IE9mIENvbHVtYmlhXCI6IFwiRENcIixcbiAgICAgICAgXCJGbG9yaWRhXCI6IFwiRkxcIixcbiAgICAgICAgXCJHZW9yZ2lhXCI6IFwiR0FcIixcbiAgICAgICAgXCJHdWFtXCI6IFwiR1VcIixcbiAgICAgICAgXCJIYXdhaWlcIjogXCJISVwiLFxuICAgICAgICBcIklkYWhvXCI6IFwiSURcIixcbiAgICAgICAgXCJJbGxpbm9pc1wiOiBcIklMXCIsXG4gICAgICAgIFwiSW5kaWFuYVwiOiBcIklOXCIsXG4gICAgICAgIFwiSW93YVwiOiBcIklBXCIsXG4gICAgICAgIFwiS2Fuc2FzXCI6IFwiS1NcIixcbiAgICAgICAgXCJLZW50dWNreVwiOiBcIktZXCIsXG4gICAgICAgIFwiTG91aXNpYW5hXCI6IFwiTEFcIixcbiAgICAgICAgXCJNYWluZVwiOiBcIk1FXCIsXG4gICAgICAgIFwiTWFyeWxhbmRcIjogXCJNRFwiLFxuICAgICAgICBcIk1hc3NhY2h1c2V0dHNcIjogXCJNQVwiLFxuICAgICAgICBcIk1pY2hpZ2FuXCI6IFwiTUlcIixcbiAgICAgICAgXCJNaW5uZXNvdGFcIjogXCJNTlwiLFxuICAgICAgICBcIk1pc3Npc3NpcHBpXCI6IFwiTVNcIixcbiAgICAgICAgXCJNaXNzb3VyaVwiOiBcIk1PXCIsXG4gICAgICAgIFwiTW9udGFuYVwiOiBcIk1UXCIsXG4gICAgICAgIFwiTmVicmFza2FcIjogXCJORVwiLFxuICAgICAgICBcIk5ldmFkYVwiOiBcIk5WXCIsXG4gICAgICAgIFwiTmV3IEhhbXBzaGlyZVwiOiBcIk5IXCIsXG4gICAgICAgIFwiTmV3IEplcnNleVwiOiBcIk5KXCIsXG4gICAgICAgIFwiTmV3IE1leGljb1wiOiBcIk5NXCIsXG4gICAgICAgIFwiTmV3IFlvcmtcIjogXCJOWVwiLFxuICAgICAgICBcIk5vcnRoIENhcm9saW5hXCI6IFwiTkNcIixcbiAgICAgICAgXCJOb3J0aCBEYWtvdGFcIjogXCJORFwiLFxuICAgICAgICBcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kc1wiOiBcIk1QXCIsXG4gICAgICAgIFwiT2hpb1wiOiBcIk9IXCIsXG4gICAgICAgIFwiT2tsYWhvbWFcIjogXCJPS1wiLFxuICAgICAgICBcIk9yZWdvblwiOiBcIk9SXCIsXG4gICAgICAgIFwiUGVubnN5bHZhbmlhXCI6IFwiUEFcIixcbiAgICAgICAgXCJQdWVydG8gUmljb1wiOiBcIlBSXCIsXG4gICAgICAgIFwiUmhvZGUgSXNsYW5kXCI6IFwiUklcIixcbiAgICAgICAgXCJTb3V0aCBDYXJvbGluYVwiOiBcIlNDXCIsXG4gICAgICAgIFwiU291dGggRGFrb3RhXCI6IFwiU0RcIixcbiAgICAgICAgXCJUZW5uZXNzZWVcIjogXCJUTlwiLFxuICAgICAgICBcIlRleGFzXCI6IFwiVFhcIixcbiAgICAgICAgXCJVdGFoXCI6IFwiVVRcIixcbiAgICAgICAgXCJWZXJtb250XCI6IFwiVlRcIixcbiAgICAgICAgXCJWaXJnaW4gSXNsYW5kc1wiOiBcIlZJXCIsXG4gICAgICAgIFwiVmlyZ2luaWFcIjogXCJWQVwiLFxuICAgICAgICBcIldhc2hpbmd0b25cIjogXCJXQVwiLFxuICAgICAgICBcIldlc3QgVmlyZ2luaWFcIjogXCJXVlwiLFxuICAgICAgICBcIldpc2NvbnNpblwiOiBcIldJXCIsXG4gICAgICAgIFwiV3lvbWluZ1wiOiBcIldZXCJcbiAgICB9XG5cbiAgICBsZXQgbWFyZ2luID0gMTAwXG4gICAgICAgIGhvcml6b250YWxNYXJnaW4gPSAxMjAsXG4gICAgICAgIHZlcnRpY2FsTWFyZ2luID0gMTAwLFxuICAgICAgICB3aWR0aCA9IDEwODAgLSAyICogaG9yaXpvbnRhbE1hcmdpbixcbiAgICAgICAgaGVpZ2h0ID0gNzAwIC0gMiAqIHZlcnRpY2FsTWFyZ2luO1xuXG4gICAgbGV0IHN2ZyA9IGQzLnNlbGVjdChcIiNkYXRhLXNlY3Rpb25cIilcbiAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICsgKDIgKiBob3Jpem9udGFsTWFyZ2luKSlcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgKDIgKiBtYXJnaW4pKVxuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7aG9yaXpvbnRhbE1hcmdpbn0sICR7bWFyZ2luIC8gMn0pYCk7XG5cbiAgICBsZXQgeCA9IGQzLnNjYWxlQmFuZCgpXG4gICAgICAgIC5yYW5nZShbMCwgd2lkdGhdKVxuICAgICAgICAucGFkZGluZygwLjQpXG5cbiAgICBsZXQgeEF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4QXhpc1wiKVxuXG4gICAgbGV0IHkgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5yYW5nZShbaGVpZ2h0LCAwXSlcblxuICAgIGxldCB5QXhpcyA9IHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieUF4aXNcIilcblxuICAgIGQzLnNlbGVjdChcIiNzZWxlY3RCdXR0b25cIilcbiAgICAgICAgLnNlbGVjdEFsbChcIm15T3B0aW9uc1wiKVxuICAgICAgICAuZGF0YShPYmplY3Qua2V5cyhzdGF0ZU5hbWVzKSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcIm9wdGlvblwiKVxuICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZDsgfSlcbiAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCB9KVxuXG4gICAgbGV0IGNhcGl0YWxpemUgPSB3b3JkID0+IHtcbiAgICAgICAgbGV0IHdvcmRBcnJheSA9IHdvcmQuc3BsaXQoJycpXG4gICAgICAgIGxldCBuZXdXb3JkID0gW107XG4gICAgICAgIHdvcmRBcnJheS5mb3JFYWNoKChjaGFyLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hhciAhPT0gY2hhci50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgbmV3V29yZC5wdXNoKGNoYXIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1dvcmQucHVzaCgnICcgKyBjaGFyLnRvVXBwZXJDYXNlKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgbmV3V29yZFswXSA9IG5ld1dvcmRbMF0udG9VcHBlckNhc2UoKVxuICAgICAgICByZXR1cm4gbmV3V29yZC5qb2luKCcnKVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gc2VsZWN0U3RhdGUoc2VsZWN0ZWRTdGF0ZSkgeyBcblxuICAgICAgICBkMy5jc3YoXCJodHRwczovL2NvdmlkdHJhY2tpbmcuY29tL2FwaS92MS9zdGF0ZXMvY3VycmVudC5jc3ZcIiwgZnVuY3Rpb24gKHJhd0RhdGEpIHtcbiAgICAgICAgICAgIGxldCBpbml0aWFscyA9IHN0YXRlTmFtZXNbc2VsZWN0ZWRTdGF0ZV1cbiAgICAgICAgICAgIGxldCBzdGF0ZURhdGEgPSByYXdEYXRhW3N0YXRlSW5kZXhbaW5pdGlhbHNdXVxuICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBkYXRhID0gW11cbiAgICAgICAgICAgIGxldCBkZWF0aCA9IDBcbiAgICAgICAgICAgIGxldCB1cGRhdGVkID0gXCJcIlxuXG4gICAgICAgICAgICBmb3IgKGxldCBbZCwgdl0gb2YgT2JqZWN0LmVudHJpZXMoc3RhdGVEYXRhKSkge1xuICAgICAgICAgICAgICAgIGlmIChkID09PSAncG9zaXRpdmUnIHx8IGQgPT09ICdyZWNvdmVyZWQnIHx8IGQgPT09ICdkZWF0aCcgfHxcbiAgICAgICAgICAgICAgICAgICAgZCA9PT0gJ2hvc3BpdGFsaXplZEN1cnJlbnRseScgfHwgZCA9PT0gJ2hvc3BpdGFsaXplZEN1bXVsYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgIGQgPT09ICdpbkljdUN1cnJlbnRseScgfHwgZCA9PT0gJ2luSWN1Q3VtdWxhdGl2ZScgfHwgZCA9PT0gJ29uVmVudGlsYXRvckN1cnJlbnRseScgfHxcbiAgICAgICAgICAgICAgICAgICAgZCA9PT0gJ29uVmVudGlsYXRvckN1bXVsYXRpdmUnIHx8IFxuICAgICAgICAgICAgICAgICAgICBkID09PSAnaG9zcGl0YWxpemVkJykge1xuICAgICAgICAgICAgICAgICAgICBkID0gY2FwaXRhbGl6ZShkKVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KHYpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKHsgY2F0ZWdvcnk6IGQsIHZhbHVlOiArcGFyc2VJbnQodikgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkID09PSBcIkRlYXRoXCIpIGRlYXRoID0gdiBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkID09PSBcImRhdGVDaGVja2VkXCIpIHVwZGF0ZWQgPSB2XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHguZG9tYWluKGRhdGEubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLmNhdGVnb3J5IH0pKVxuXG4gICAgICAgICAgICBsZXQgbWF4WSA9IGQzLm1heChkYXRhLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC52YWx1ZSB9KVxuICAgICAgICAgICAgeS5kb21haW4oWzAsIChtYXhZICogMS4yKV0pXG5cbiAgICAgICAgICAgIHlBeGlzLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKVxuXG4gICAgICAgICAgICB4QXhpcy50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKC0wLjIsXCIgKyBoZWlnaHQgKyBcIilcIilcbiAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKC03LDApcm90YXRlKC0yMClcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd4JywgLTgpXG5cbiAgICAgICAgICAgIGxldCBiYXIgPSBzdmcuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgICAgICAgICAgICAgIC5kYXRhKGRhdGEpXG5cbiAgICAgICAgICAgIGxldCB0ZXh0ID0gc3ZnLnNlbGVjdEFsbChcInRleHRcIilcblxuICAgICAgICAgICAgdGV4dC5leGl0KCkucmVtb3ZlKClcblxuICAgICAgICAgICAgYmFyLmV4aXQoKS5yZW1vdmUoKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBiYXIuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHkoMCkgfSlcbiAgICAgICAgICAgICAgICAubWVyZ2UoYmFyKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geChkLmNhdGVnb3J5KSB9KVxuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHkoZC52YWx1ZSkgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHguYmFuZHdpZHRoKCkpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGhlaWdodCAtIHkoZC52YWx1ZSkgfSlcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwiIzY5YjNhMlwiKVxuICAgICAgICAgIFxuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgICAgICAgICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBtb3VzZUVudGVyKVxuICAgICAgICAgICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIG1vdXNlTGVhdmUpXG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vdXNlRW50ZXIoZCwgaSkge1xuICAgICAgICAgICAgICAgIHN2Zy5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnaG92ZXJWYXVsZScpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCB4KGQuY2F0ZWdvcnkpICsgeC5iYW5kd2lkdGgoKSAvIDQpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCB5KGQudmFsdWUpIC0gMjApXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KGQudmFsdWUgKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJjb2xvclwiLCBcIiM2OWIzYTJcIilcblxuICAgICAgICAgICAgICAgIC8vIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAgIC8vICAgICAuYXR0cignZmlsbCcsIFwiZGFya2N5YW5cIilcbiAgICAgICAgICAgICAgICAvLyAgICAgLmF0dHIoJ3InLCAxMClcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBtb3VzZUxlYXZlKGQsIGkpIHtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3QoJy5ob3ZlclZhdWxlJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgLy8gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgICAgLy8gICAgIC5hdHRyKCdmaWxsJywgXCJkYXJrc2FsbW9uXCIpXG4gICAgICAgICAgICAgICAgLy8gICAgIC5hdHRyKCdyJywgNilcblxuICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIHN2Zy5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICd5LWF4aXMtbGFiZWwnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd4JywgLWhlaWdodCAvIDIpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3knLCAtODApXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICdyb3RhdGUoLTkwKScpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAgICAgICAgICAgLnRleHQoJ1JlcG9ydGVkIENhc2VzJylcblxuICAgICAgICAgICAgc3ZnLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3gtYXhpcy1sYWJlbCcpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3gnLCB3aWR0aCAvIDMgKyBob3Jpem9udGFsTWFyZ2luKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd5JywgaGVpZ2h0ICsgdmVydGljYWxNYXJnaW4pXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAgICAgICAgICAgLnRleHQoJ0NhdGVnb3JpZXMnKVxuXG4gICAgICAgICAgICBkMy5zZWxlY3QoXCJkZWF0aHNcIikucmVtb3ZlKCkuZXhpdCgpXG4gICAgICAgICAgICBsZXQgZGVhdGhUZXh0ID0gZDMuc2VsZWN0KFwiLnN0YXRlLW5hbWVcIikuYXBwZW5kKFwiZGVhdGhzXCIpXG5cbiAgICAgICAgICAgIGRlYXRoVGV4dC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KGBUb3RhbCBkZWF0aHMgaW4gJHtzZWxlY3RlZFN0YXRlfTogJHtkZWF0aH1gKVxuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgZDMuc2VsZWN0KFwidXBkYXRlZFwiKS5yZW1vdmUoKS5leGl0KClcbiAgICAgICAgICAgIGxldCB1cGRhdGVkVGV4dCA9IGQzLnNlbGVjdChcIi51cGRhdGVkXCIpLmFwcGVuZChcInVwZGF0ZWRcIilcblxuICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh1cGRhdGVkLnNsaWNlKDAsMTApKVxuICAgICAgICAgICAgbGV0IHByZXR0eURhdGUgPSBgJHtkYXRlLmdldE1vbnRoKCkgKyAxfS0ke2RhdGUuZ2V0RGF0ZSgpfS0ke2RhdGUuZ2V0RnVsbFllYXIoKX1gXG5cbiAgICAgICAgICAgIHVwZGF0ZWRUZXh0LmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgICAgICAudGV4dChgSW5mb3JtYXRpb24gbGFzdCB1cGRhdGVkIG9uICR7cHJldHR5RGF0ZX1gKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcInRleHQtZGVjb3JhdGlvblwiLCBcIm5vbmVcIilcblxuICAgICAgICAgICAgXG5cbiAgICAgICAgfSlcblxuICAgICAgICBkMy5zZWxlY3QoXCIjc2VsZWN0QnV0dG9uXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBkMy5zZWxlY3QodGhpcykucHJvcGVydHkoXCJ2YWx1ZVwiKVxuICAgICAgICAgICAgc2VsZWN0U3RhdGUoc2VsZWN0ZWRPcHRpb24pXG4gICAgICAgICAgICBcbiAgICAgICAgXG4gICAgfSk7XG5cbiAgICB9XG4gICAgc2VsZWN0U3RhdGUoXCJBbGFza2FcIilcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==