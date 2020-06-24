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
  var margin = 100,
      width = 800 - 2 * margin,
      height = 600 - 2 * margin;
  var svg = d3.select("#data-section").append("svg").attr("width", width + 2 * margin).attr("height", height + 2 * margin).append("g").attr("transform", "translate(".concat(margin, ", ").concat(margin, ")"));
  var x = d3.scaleBand().range([0, width]).padding(0.5);
  var xAxis = svg.append("g").attr("transform", "translate(0," + height + ")");
  var y = d3.scaleLinear().range([height, 0]);
  var yAxis = svg.append('g');
  d3.select("#selectButton").selectAll("myOptions").data(Object.keys(stateIndex)).enter().append("option").text(function (d) {
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
      d3.selectAll("g").exit().remove(); // d3.selectAll(".axis")
      //     .exit().remove()

      d3.selectAll("g");
      var stateData = rawData[stateIndex[selectedState]]; // console.log(stateData)

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

      x.domain(data.map(function (d) {
        return d.category;
      }));
      var maxY = d3.max(data, function (d) {
        return d.value;
      });
      y.domain([0, maxY * 1.1]);
      yAxis.transition().duration(1000).call(d3.axisLeft(y));
      xAxis.transition().duration(1000).call(d3.axisBottom(x)).attr("transform", "translate(-0.2," + height + ")").selectAll("text").attr("transform", "translate(-10,0)rotate(-45)").style("text-anchor", "end").attr('x', -8);
      var bar = svg.selectAll("rect").data(data); // bar.selectAll("rect")
      //     .transition()
      //     .duration(1000)
      //     .attr("y", function (d) { return y(d.value); })
      //     .attr("height", function (d) { return height - y(d.value); })

      bar.enter().append("rect").attr("class", "rect").merge(bar).transition().duration(1000).attr("x", function (d) {
        return x(d.category);
      }).attr("y", function (d) {
        return y(d.value);
      }).attr("width", x.bandwidth()).attr("height", function (d) {
        return height - y(d.value);
      }).style("fill", "#69b3a2"); //     .delay(function (d, i) { console.log(i); return (i * 100) })

      bar.append("text").attr("class", "value").attr('x', function (a) {
        return x(a.category) + x.bandwidth() / 2;
      }).attr('y', function (a) {
        return y(a.value) - 10;
      }).attr('text-anchor', 'middle').text(function (d) {
        return "".concat(d.value);
      });
      bar.exit().remove(); // svg.selectAll(".value").remove()
      // svg.selectAll(".bar").remove().transition(1000)
      // d3.selectAll(".value")
      //     .remove()
      // let u = svg.selectAll("rect")
      //     .data(data)
      // u.enter()
      //     .append("rect") // Add a new rect for each new elements
      //     .merge(u) // get the already existing elements as well
      //     .transition() // and apply changes to all of them
      //     .duration(1000)
      //     .attr("x", function (d) { return x(d.category); })
      //     .attr("y", function (d) { return y(d.value); })
      //     .attr("width", x.bandwidth())
      //     .attr("height", function (d) { return height - y(d.value); })
      //     .attr("fill", "#69b3a2")
      // bar.append("text")
      //     .data(data)
      //     .attr("class", "value")
      //     .attr('x', (d) => x(d.category) + x.bandwidth() / 2)
      //     .attr('y', (d) => y(d.value) - 10)
      //     .attr('text-anchor', 'middle')
      //     .text(function (d) { return `${(d.value)}` })
      // d3.selectAll("g").append("text")
      //     .attr("class", "value")
      //     .attr('x', (d) => x(d.category) + x.bandwidth() / 2)
      //     .attr('y', (d) => y(d.value) - 10)
      //     .attr('text-anchor', 'middle')
      //     .text(function (d) { return `${(d.value)}` })
      // If less group in the new dataset, I delete the ones not in use anymore
      // u
      //     .exit()
      //     .remove()
    });
    d3.select("#selectButton").on("change", function (d) {
      var selectedOption = d3.select(this).property("value");
      selectState(selectedOption);
    });
  }

  selectState("AK");
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXRlSW5kZXgiLCJtYXJnaW4iLCJ3aWR0aCIsImhlaWdodCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsIngiLCJzY2FsZUJhbmQiLCJyYW5nZSIsInBhZGRpbmciLCJ4QXhpcyIsInkiLCJzY2FsZUxpbmVhciIsInlBeGlzIiwic2VsZWN0QWxsIiwiZGF0YSIsIk9iamVjdCIsImtleXMiLCJlbnRlciIsInRleHQiLCJkIiwiY2FwaXRhbGl6ZSIsIndvcmQiLCJ3b3JkQXJyYXkiLCJzcGxpdCIsIm5ld1dvcmQiLCJmb3JFYWNoIiwiY2hhciIsImkiLCJ0b1VwcGVyQ2FzZSIsInB1c2giLCJqb2luIiwic2VsZWN0U3RhdGUiLCJzZWxlY3RlZFN0YXRlIiwiY3N2IiwicmF3RGF0YSIsImV4aXQiLCJyZW1vdmUiLCJzdGF0ZURhdGEiLCJlbnRyaWVzIiwidiIsImlzTmFOIiwicGFyc2VJbnQiLCJjYXRlZ29yeSIsInZhbHVlIiwiZG9tYWluIiwibWFwIiwibWF4WSIsIm1heCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNhbGwiLCJheGlzTGVmdCIsImF4aXNCb3R0b20iLCJzdHlsZSIsImJhciIsIm1lcmdlIiwiYmFuZHdpZHRoIiwiYSIsIm9uIiwic2VsZWN0ZWRPcHRpb24iLCJwcm9wZXJ0eSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FB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LEdBN0U2RSxDQXVGN0U7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUgsS0FqSUQ7QUFrSUFuQyxNQUFFLENBQUNDLE1BQUgsQ0FBVSxlQUFWLEVBQTJCd0QsRUFBM0IsQ0FBOEIsUUFBOUIsRUFBd0MsVUFBVXZDLENBQVYsRUFBYTtBQUNqRCxVQUFJd0MsY0FBYyxHQUFHMUQsRUFBRSxDQUFDQyxNQUFILENBQVUsSUFBVixFQUFnQjBELFFBQWhCLENBQXlCLE9BQXpCLENBQXJCO0FBQ0E3QixpQkFBVyxDQUFDNEIsY0FBRCxDQUFYO0FBRVAsS0FKRztBQU1IOztBQUNENUIsYUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNILENBeFBELEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXG4gICAgY29uc3Qgc3RhdGVJbmRleCA9IHtcbiAgICAgICAgXCJBS1wiOiAwLFxuICAgICAgICBcIkFMXCI6IDEsXG4gICAgICAgIFwiQVJcIjogMixcbiAgICAgICAgXCJBU1wiOiAzLFxuICAgICAgICBcIkFaXCI6IDQsXG4gICAgICAgIFwiQ0FcIjogNSxcbiAgICAgICAgXCJDT1wiOiA2LFxuICAgICAgICBcIkNUXCI6IDcsXG4gICAgICAgIFwiRENcIjogOCxcbiAgICAgICAgXCJERVwiOiA5LFxuICAgICAgICBcIkZMXCI6IDEwLFxuICAgICAgICBcIkdBXCI6IDExLFxuICAgICAgICBcIkdVXCI6IDEyLFxuICAgICAgICBcIkhJXCI6IDEzLFxuICAgICAgICBcIklBXCI6IDE0LFxuICAgICAgICBcIklEXCI6IDE1LFxuICAgICAgICBcIklMXCI6IDE2LFxuICAgICAgICBcIklOXCI6IDE3LFxuICAgICAgICBcIktTXCI6IDE4LFxuICAgICAgICBcIktZXCI6IDE5LFxuICAgICAgICBcIkxBXCI6IDIwLFxuICAgICAgICBcIk1BXCI6IDIxLFxuICAgICAgICBcIk1EXCI6IDIyLFxuICAgICAgICBcIk1FXCI6IDIzLFxuICAgICAgICBcIk1JXCI6IDI0LFxuICAgICAgICBcIk1OXCI6IDI1LFxuICAgICAgICBcIk1PXCI6IDI2LFxuICAgICAgICBcIk1QXCI6IDI3LFxuICAgICAgICBcIk1TXCI6IDI4LFxuICAgICAgICBcIk1UXCI6IDI5LFxuICAgICAgICBcIk5DXCI6IDMwLFxuICAgICAgICBcIk5EXCI6IDMxLFxuICAgICAgICBcIk5FXCI6IDMyLFxuICAgICAgICBcIk5IXCI6IDMzLFxuICAgICAgICBcIk5KXCI6IDM0LFxuICAgICAgICBcIk5NXCI6IDM1LFxuICAgICAgICBcIk5WXCI6IDM2LFxuICAgICAgICBcIk5ZXCI6IDM3LFxuICAgICAgICBcIk9IXCI6IDM4LFxuICAgICAgICBcIk9LXCI6IDM5LFxuICAgICAgICBcIk9SXCI6IDQwLFxuICAgICAgICBcIlBBXCI6IDQxLFxuICAgICAgICBcIlBSXCI6IDQyLFxuICAgICAgICBcIlJJXCI6IDQzLFxuICAgICAgICBcIlNDXCI6IDQ0LFxuICAgICAgICBcIlNEXCI6IDQ1LFxuICAgICAgICBcIlROXCI6IDQ2LFxuICAgICAgICBcIlRYXCI6IDQ3LFxuICAgICAgICBcIlVUXCI6IDQ4LFxuICAgICAgICBcIlZBXCI6IDQ5LFxuICAgICAgICBcIlZJXCI6IDUwLFxuICAgICAgICBcIlZUXCI6IDUxLFxuICAgICAgICBcIldBXCI6IDUyLFxuICAgICAgICBcIldJXCI6IDUzLFxuICAgICAgICBcIldWXCI6IDU0LFxuICAgICAgICBcIldZXCI6IDU1XG4gICAgfVxuXG4gICAgbGV0IG1hcmdpbiA9IDEwMCxcbiAgICAgICAgd2lkdGggPSA4MDAgLSAyICogbWFyZ2luLFxuICAgICAgICBoZWlnaHQgPSA2MDAgLSAyICogbWFyZ2luO1xuXG4gICAgbGV0IHN2ZyA9IGQzLnNlbGVjdChcIiNkYXRhLXNlY3Rpb25cIilcbiAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICsgKDIgKiBtYXJnaW4pKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQgKyAoMiAqIG1hcmdpbikpXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHttYXJnaW59LCAke21hcmdpbn0pYCk7XG5cbiAgICBsZXQgeCA9IGQzLnNjYWxlQmFuZCgpXG4gICAgICAgIC5yYW5nZShbMCwgd2lkdGhdKVxuICAgICAgICAucGFkZGluZygwLjUpXG5cbiAgICBsZXQgeEF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG5cbiAgICBsZXQgeSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgLnJhbmdlKFtoZWlnaHQsIDBdKVxuXG4gICAgbGV0IHlBeGlzID0gc3ZnLmFwcGVuZCgnZycpXG5cbiAgICBkMy5zZWxlY3QoXCIjc2VsZWN0QnV0dG9uXCIpXG4gICAgICAgIC5zZWxlY3RBbGwoXCJteU9wdGlvbnNcIilcbiAgICAgICAgLmRhdGEoT2JqZWN0LmtleXMoc3RhdGVJbmRleCkpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJvcHRpb25cIilcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQ7IH0pXG4gICAgICAgIC5hdHRyKFwidmFsdWVcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQgfSlcblxuICAgIGxldCBjYXBpdGFsaXplID0gd29yZCA9PiB7XG4gICAgICAgIGxldCB3b3JkQXJyYXkgPSB3b3JkLnNwbGl0KCcnKVxuICAgICAgICBsZXQgbmV3V29yZCA9IFtdO1xuICAgICAgICB3b3JkQXJyYXkuZm9yRWFjaCgoY2hhciwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNoYXIgIT09IGNoYXIudG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIG5ld1dvcmQucHVzaChjaGFyKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdXb3JkLnB1c2goJyAnICsgY2hhci50b1VwcGVyQ2FzZSgpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIG5ld1dvcmRbMF0gPSBuZXdXb3JkWzBdLnRvVXBwZXJDYXNlKClcbiAgICAgICAgcmV0dXJuIG5ld1dvcmQuam9pbignJylcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHNlbGVjdFN0YXRlKHNlbGVjdGVkU3RhdGUpIHsgXG5cbiAgICAgICAgZDMuY3N2KFwiaHR0cHM6Ly9jb3ZpZHRyYWNraW5nLmNvbS9hcGkvdjEvc3RhdGVzL2N1cnJlbnQuY3N2XCIsIGZ1bmN0aW9uIChyYXdEYXRhKSB7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCJnXCIpXG4gICAgICAgICAgICAgICAgLmV4aXQoKS5yZW1vdmUoKVxuXG4gICAgICAgICAgICAvLyBkMy5zZWxlY3RBbGwoXCIuYXhpc1wiKVxuICAgICAgICAgICAgLy8gICAgIC5leGl0KCkucmVtb3ZlKClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiZ1wiKVxuICAgICAgICAgICAgbGV0IHN0YXRlRGF0YSA9IHJhd0RhdGFbc3RhdGVJbmRleFtzZWxlY3RlZFN0YXRlXV1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlRGF0YSlcbiAgICAgICAgICAgIGxldCBkYXRhID0gW11cbiAgICAgICAgICAgIGZvciAobGV0IFtkLCB2XSBvZiBPYmplY3QuZW50cmllcyhzdGF0ZURhdGEpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGQgPT09ICdwb3NpdGl2ZScgfHwgZCA9PT0gJ2RlYXRoJyB8fFxuICAgICAgICAgICAgICAgICAgICBkID09PSAnaG9zcGl0YWxpemVkQ3VycmVudGx5JyB8fCBkID09PSAnaG9zcGl0YWxpemVkQ3VtdWxhdGl2ZScgfHxcbiAgICAgICAgICAgICAgICAgICAgZCA9PT0gJ2luSWN1Q3VycmVudGx5JyB8fCBkID09PSAnaW5JY3VDdW11bGF0aXZlJyB8fCBkID09PSAnb25WZW50aWxhdG9yQ3VycmVudGx5JyB8fFxuICAgICAgICAgICAgICAgICAgICBkID09PSAnb25WZW50aWxhdG9yQ3VtdWxhdGl2ZScgfHwgZCA9PT0gJ3JlY292ZXJlZCcgfHwgZCA9PT0gJ3JlY292ZXJlZCcgfHxcbiAgICAgICAgICAgICAgICAgICAgZCA9PT0gJ2hvc3BpdGFsaXplZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZCA9IGNhcGl0YWxpemUoZClcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludCh2KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaCh7IGNhdGVnb3J5OiBkLCB2YWx1ZTogK3BhcnNlSW50KHYpIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgeC5kb21haW4oZGF0YS5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuY2F0ZWdvcnkgfSkpXG5cblxuICAgICAgICAgICAgbGV0IG1heFkgPSBkMy5tYXgoZGF0YSwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQudmFsdWUgfSlcblxuXG4gICAgICAgICAgICB5LmRvbWFpbihbMCwgKG1heFkgKiAxLjEpXSlcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICB5QXhpcy50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcblxuICAgICAgICAgICAgeEF4aXMudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgtMC4yLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgICAgICAgICAgLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgtMTAsMClyb3RhdGUoLTQ1KVwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3gnLCAtOClcblxuICAgICAgICAgICAgbGV0IGJhciA9IHN2Zy5zZWxlY3RBbGwoXCJyZWN0XCIpXG4gICAgICAgICAgICAgICAgLmRhdGEoZGF0YSlcblxuICAgICAgICAgICAgLy8gYmFyLnNlbGVjdEFsbChcInJlY3RcIilcbiAgICAgICAgICAgIC8vICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAvLyAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgICAgICAvLyAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5KGQudmFsdWUpOyB9KVxuICAgICAgICAgICAgLy8gICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBoZWlnaHQgLSB5KGQudmFsdWUpOyB9KVxuICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYmFyLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJyZWN0XCIpXG4gICAgICAgICAgICAgICAgLm1lcmdlKGJhcilcbiAgICAgICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB4KGQuY2F0ZWdvcnkpIH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5KGQudmFsdWUpIH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB4LmJhbmR3aWR0aCgpKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBoZWlnaHQgLSB5KGQudmFsdWUpIH0pXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIiM2OWIzYTJcIilcbiAgICAgICAgICAgICAgICAgLy8gICAgIC5kZWxheShmdW5jdGlvbiAoZCwgaSkgeyBjb25zb2xlLmxvZyhpKTsgcmV0dXJuIChpICogMTAwKSB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBiYXIuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ2YWx1ZVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd4JywgKGEpID0+IHgoYS5jYXRlZ29yeSkgKyB4LmJhbmR3aWR0aCgpIC8gMilcbiAgICAgICAgICAgICAgICAuYXR0cigneScsIChhKSA9PiB5KGEudmFsdWUpIC0gMTApXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGAkeyhkLnZhbHVlKX1gfSlcblxuICAgICAgICAgICAgYmFyLmV4aXQoKVxuICAgICAgICAgICAgICAgIC5yZW1vdmUoKVxuICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgXG5cblxuXG4gICAgICAgICAgICAvLyBzdmcuc2VsZWN0QWxsKFwiLnZhbHVlXCIpLnJlbW92ZSgpXG4gICAgICAgICAgICAvLyBzdmcuc2VsZWN0QWxsKFwiLmJhclwiKS5yZW1vdmUoKS50cmFuc2l0aW9uKDEwMDApXG4gICAgICAgICAgICAvLyBkMy5zZWxlY3RBbGwoXCIudmFsdWVcIilcbiAgICAgICAgICAgIC8vICAgICAucmVtb3ZlKClcblxuICAgICAgICAgICAgLy8gbGV0IHUgPSBzdmcuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgICAgICAgICAgLy8gICAgIC5kYXRhKGRhdGEpXG5cbiAgICAgICAgICAgIC8vIHUuZW50ZXIoKVxuICAgICAgICAgICAgLy8gICAgIC5hcHBlbmQoXCJyZWN0XCIpIC8vIEFkZCBhIG5ldyByZWN0IGZvciBlYWNoIG5ldyBlbGVtZW50c1xuICAgICAgICAgICAgLy8gICAgIC5tZXJnZSh1KSAvLyBnZXQgdGhlIGFscmVhZHkgZXhpc3RpbmcgZWxlbWVudHMgYXMgd2VsbFxuICAgICAgICAgICAgLy8gICAgIC50cmFuc2l0aW9uKCkgLy8gYW5kIGFwcGx5IGNoYW5nZXMgdG8gYWxsIG9mIHRoZW1cbiAgICAgICAgICAgIC8vICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAgIC8vICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHgoZC5jYXRlZ29yeSk7IH0pXG4gICAgICAgICAgICAvLyAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5KGQudmFsdWUpOyB9KVxuICAgICAgICAgICAgLy8gICAgIC5hdHRyKFwid2lkdGhcIiwgeC5iYW5kd2lkdGgoKSlcbiAgICAgICAgICAgIC8vICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gaGVpZ2h0IC0geShkLnZhbHVlKTsgfSlcbiAgICAgICAgICAgIC8vICAgICAuYXR0cihcImZpbGxcIiwgXCIjNjliM2EyXCIpXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC8vIGJhci5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAvLyAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC8vICAgICAuYXR0cihcImNsYXNzXCIsIFwidmFsdWVcIilcbiAgICAgICAgICAgIC8vICAgICAuYXR0cigneCcsIChkKSA9PiB4KGQuY2F0ZWdvcnkpICsgeC5iYW5kd2lkdGgoKSAvIDIpXG4gICAgICAgICAgICAvLyAgICAgLmF0dHIoJ3knLCAoZCkgPT4geShkLnZhbHVlKSAtIDEwKVxuICAgICAgICAgICAgLy8gICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAgICAgLy8gICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBgJHsoZC52YWx1ZSl9YCB9KVxuXG4gICAgICAgICAgICAvLyBkMy5zZWxlY3RBbGwoXCJnXCIpLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC8vICAgICAuYXR0cihcImNsYXNzXCIsIFwidmFsdWVcIilcbiAgICAgICAgICAgIC8vICAgICAuYXR0cigneCcsIChkKSA9PiB4KGQuY2F0ZWdvcnkpICsgeC5iYW5kd2lkdGgoKSAvIDIpXG4gICAgICAgICAgICAvLyAgICAgLmF0dHIoJ3knLCAoZCkgPT4geShkLnZhbHVlKSAtIDEwKVxuICAgICAgICAgICAgLy8gICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAgICAgLy8gICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBgJHsoZC52YWx1ZSl9YCB9KVxuXG4gICAgICAgICAgICAvLyBJZiBsZXNzIGdyb3VwIGluIHRoZSBuZXcgZGF0YXNldCwgSSBkZWxldGUgdGhlIG9uZXMgbm90IGluIHVzZSBhbnltb3JlXG4gICAgICAgICAgICAvLyB1XG4gICAgICAgICAgICAvLyAgICAgLmV4aXQoKVxuICAgICAgICAgICAgLy8gICAgIC5yZW1vdmUoKVxuICAgICAgICBcblxuXG4gICAgICAgIH0pXG4gICAgICAgIGQzLnNlbGVjdChcIiNzZWxlY3RCdXR0b25cIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZE9wdGlvbiA9IGQzLnNlbGVjdCh0aGlzKS5wcm9wZXJ0eShcInZhbHVlXCIpXG4gICAgICAgICAgICBzZWxlY3RTdGF0ZShzZWxlY3RlZE9wdGlvbilcbiAgICAgICAgXG4gICAgfSk7XG5cbiAgICB9XG4gICAgc2VsZWN0U3RhdGUoXCJBS1wiKVxufSkiXSwic291cmNlUm9vdCI6IiJ9