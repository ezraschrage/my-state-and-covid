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
      // d3.selectAll("g")
      //     .exit().remove()
      // d3.selectAll("text")
      //     .exit().remove()
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
      y.domain([0, maxY * 1.2]);
      yAxis.transition().duration(1000).call(d3.axisLeft(y));
      xAxis.transition().duration(1000).call(d3.axisBottom(x)).attr("transform", "translate(-0.2," + height + ")").selectAll("text").attr("transform", "translate(-10,0)rotate(-45)").style("text-anchor", "end").attr('x', -8); //             var circles = d3.selectAll('svg').append('svg')
      //               .append('g').attr('class', 'circles').data( someData );
      // circles.enter().append('g').attr('class', 'circle')
      //                .append('circle')
      //                  .attr('cx', function(d) { return xScale(d); })
      //                  .attr('cy', function(d) { return yScale(d); })
      //                .append('text').attr('style', 'display:none;')
      //                  .text(function(d) { return d.title; })
      //                  .attr('x', function(d) { return xScale(d); })
      //                  .attr('y', function(d) { return yScale(d) + 2*radius(d); });

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

      bar.exit().remove(); // bar.append("text")
      //     .attr("class", "value")
      //     .attr('x', (a) => x(a.category) + x.bandwidth() / 2)
      //     .attr('y', (a) => y(a.value) - 10)
      //     .attr('text-anchor', 'middle')
      //     .text(function (d) { return `${(d.value)}`})

      svg.append('text').attr('class', 'y-axis-label').attr('x', -200).attr('y', margin / 3).attr('transform', 'rotate(-90)').attr('text-anchor', 'middle').text('Incidents');
      svg.append('text').attr('class', 'x-axis-label').attr('x', width / 2 + margin).attr('y', height + margin * 1.7).attr('text-anchor', 'middle').text('Categories');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXRlSW5kZXgiLCJtYXJnaW4iLCJ3aWR0aCIsImhlaWdodCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsIngiLCJzY2FsZUJhbmQiLCJyYW5nZSIsInBhZGRpbmciLCJ4QXhpcyIsInkiLCJzY2FsZUxpbmVhciIsInlBeGlzIiwic2VsZWN0QWxsIiwiZGF0YSIsIk9iamVjdCIsImtleXMiLCJlbnRlciIsInRleHQiLCJkIiwiY2FwaXRhbGl6ZSIsIndvcmQiLCJ3b3JkQXJyYXkiLCJzcGxpdCIsIm5ld1dvcmQiLCJmb3JFYWNoIiwiY2hhciIsImkiLCJ0b1VwcGVyQ2FzZSIsInB1c2giLCJqb2luIiwic2VsZWN0U3RhdGUiLCJzZWxlY3RlZFN0YXRlIiwiY3N2IiwicmF3RGF0YSIsInN0YXRlRGF0YSIsImVudHJpZXMiLCJ2IiwiaXNOYU4iLCJwYXJzZUludCIsImNhdGVnb3J5IiwidmFsdWUiLCJkb21haW4iLCJtYXAiLCJtYXhZIiwibWF4IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY2FsbCIsImF4aXNMZWZ0IiwiYXhpc0JvdHRvbSIsInN0eWxlIiwiYmFyIiwiZXhpdCIsInJlbW92ZSIsIm1lcmdlIiwiYmFuZHdpZHRoIiwib24iLCJzZWxlY3RlZE9wdGlvbiIsInByb3BlcnR5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtR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QUYzQixFQUdLTyxJQUhMLENBR1UsR0FIVixFQUdlTCxNQUFNLEdBQUdGLE1BQU0sR0FBRyxHQUhqQyxFQUlLTyxJQUpMLENBSVUsYUFKVixFQUl5QixRQUp6QixFQUtLYyxJQUxMLENBS1UsWUFMVjtBQVFILEtBeEdEO0FBeUdBakIsTUFBRSxDQUFDQyxNQUFILENBQVUsZUFBVixFQUEyQnVELEVBQTNCLENBQThCLFFBQTlCLEVBQXdDLFVBQVV0QyxDQUFWLEVBQWE7QUFDakQsVUFBSXVDLGNBQWMsR0FBR3pELEVBQUUsQ0FBQ0MsTUFBSCxDQUFVLElBQVYsRUFBZ0J5RCxRQUFoQixDQUF5QixPQUF6QixDQUFyQjtBQUNBNUIsaUJBQVcsQ0FBQzJCLGNBQUQsQ0FBWDtBQUVQLEtBSkc7QUFNSDs7QUFDRDNCLGFBQVcsQ0FBQyxJQUFELENBQVg7QUFDSCxDQS9ORCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuICAgIGNvbnN0IHN0YXRlSW5kZXggPSB7XG4gICAgICAgIFwiQUtcIjogMCxcbiAgICAgICAgXCJBTFwiOiAxLFxuICAgICAgICBcIkFSXCI6IDIsXG4gICAgICAgIFwiQVNcIjogMyxcbiAgICAgICAgXCJBWlwiOiA0LFxuICAgICAgICBcIkNBXCI6IDUsXG4gICAgICAgIFwiQ09cIjogNixcbiAgICAgICAgXCJDVFwiOiA3LFxuICAgICAgICBcIkRDXCI6IDgsXG4gICAgICAgIFwiREVcIjogOSxcbiAgICAgICAgXCJGTFwiOiAxMCxcbiAgICAgICAgXCJHQVwiOiAxMSxcbiAgICAgICAgXCJHVVwiOiAxMixcbiAgICAgICAgXCJISVwiOiAxMyxcbiAgICAgICAgXCJJQVwiOiAxNCxcbiAgICAgICAgXCJJRFwiOiAxNSxcbiAgICAgICAgXCJJTFwiOiAxNixcbiAgICAgICAgXCJJTlwiOiAxNyxcbiAgICAgICAgXCJLU1wiOiAxOCxcbiAgICAgICAgXCJLWVwiOiAxOSxcbiAgICAgICAgXCJMQVwiOiAyMCxcbiAgICAgICAgXCJNQVwiOiAyMSxcbiAgICAgICAgXCJNRFwiOiAyMixcbiAgICAgICAgXCJNRVwiOiAyMyxcbiAgICAgICAgXCJNSVwiOiAyNCxcbiAgICAgICAgXCJNTlwiOiAyNSxcbiAgICAgICAgXCJNT1wiOiAyNixcbiAgICAgICAgXCJNUFwiOiAyNyxcbiAgICAgICAgXCJNU1wiOiAyOCxcbiAgICAgICAgXCJNVFwiOiAyOSxcbiAgICAgICAgXCJOQ1wiOiAzMCxcbiAgICAgICAgXCJORFwiOiAzMSxcbiAgICAgICAgXCJORVwiOiAzMixcbiAgICAgICAgXCJOSFwiOiAzMyxcbiAgICAgICAgXCJOSlwiOiAzNCxcbiAgICAgICAgXCJOTVwiOiAzNSxcbiAgICAgICAgXCJOVlwiOiAzNixcbiAgICAgICAgXCJOWVwiOiAzNyxcbiAgICAgICAgXCJPSFwiOiAzOCxcbiAgICAgICAgXCJPS1wiOiAzOSxcbiAgICAgICAgXCJPUlwiOiA0MCxcbiAgICAgICAgXCJQQVwiOiA0MSxcbiAgICAgICAgXCJQUlwiOiA0MixcbiAgICAgICAgXCJSSVwiOiA0MyxcbiAgICAgICAgXCJTQ1wiOiA0NCxcbiAgICAgICAgXCJTRFwiOiA0NSxcbiAgICAgICAgXCJUTlwiOiA0NixcbiAgICAgICAgXCJUWFwiOiA0NyxcbiAgICAgICAgXCJVVFwiOiA0OCxcbiAgICAgICAgXCJWQVwiOiA0OSxcbiAgICAgICAgXCJWSVwiOiA1MCxcbiAgICAgICAgXCJWVFwiOiA1MSxcbiAgICAgICAgXCJXQVwiOiA1MixcbiAgICAgICAgXCJXSVwiOiA1MyxcbiAgICAgICAgXCJXVlwiOiA1NCxcbiAgICAgICAgXCJXWVwiOiA1NVxuICAgIH1cblxuICAgIGxldCBtYXJnaW4gPSAxMDAsXG4gICAgICAgIHdpZHRoID0gODAwIC0gMiAqIG1hcmdpbixcbiAgICAgICAgaGVpZ2h0ID0gNjAwIC0gMiAqIG1hcmdpbjtcblxuICAgIGxldCBzdmcgPSBkMy5zZWxlY3QoXCIjZGF0YS1zZWN0aW9uXCIpXG4gICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArICgyICogbWFyZ2luKSlcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgKDIgKiBtYXJnaW4pKVxuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7bWFyZ2lufSwgJHttYXJnaW59KWApO1xuXG4gICAgbGV0IHggPSBkMy5zY2FsZUJhbmQoKVxuICAgICAgICAucmFuZ2UoWzAsIHdpZHRoXSlcbiAgICAgICAgLnBhZGRpbmcoMC41KVxuXG4gICAgbGV0IHhBeGlzID0gc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxuXG4gICAgbGV0IHkgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5yYW5nZShbaGVpZ2h0LCAwXSlcblxuICAgIGxldCB5QXhpcyA9IHN2Zy5hcHBlbmQoJ2cnKVxuXG4gICAgZDMuc2VsZWN0KFwiI3NlbGVjdEJ1dHRvblwiKVxuICAgICAgICAuc2VsZWN0QWxsKFwibXlPcHRpb25zXCIpXG4gICAgICAgIC5kYXRhKE9iamVjdC5rZXlzKHN0YXRlSW5kZXgpKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwib3B0aW9uXCIpXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkOyB9KVxuICAgICAgICAuYXR0cihcInZhbHVlXCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBkIH0pXG5cbiAgICBsZXQgY2FwaXRhbGl6ZSA9IHdvcmQgPT4ge1xuICAgICAgICBsZXQgd29yZEFycmF5ID0gd29yZC5zcGxpdCgnJylcbiAgICAgICAgbGV0IG5ld1dvcmQgPSBbXTtcbiAgICAgICAgd29yZEFycmF5LmZvckVhY2goKGNoYXIsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChjaGFyICE9PSBjaGFyLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICBuZXdXb3JkLnB1c2goY2hhcilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3V29yZC5wdXNoKCcgJyArIGNoYXIudG9VcHBlckNhc2UoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBuZXdXb3JkWzBdID0gbmV3V29yZFswXS50b1VwcGVyQ2FzZSgpXG4gICAgICAgIHJldHVybiBuZXdXb3JkLmpvaW4oJycpXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBzZWxlY3RTdGF0ZShzZWxlY3RlZFN0YXRlKSB7IFxuXG4gICAgICAgIGQzLmNzdihcImh0dHBzOi8vY292aWR0cmFja2luZy5jb20vYXBpL3YxL3N0YXRlcy9jdXJyZW50LmNzdlwiLCBmdW5jdGlvbiAocmF3RGF0YSkge1xuICAgICAgICAgICAgLy8gZDMuc2VsZWN0QWxsKFwiZ1wiKVxuICAgICAgICAgICAgLy8gICAgIC5leGl0KCkucmVtb3ZlKClcblxuICAgICAgICAgICAgLy8gZDMuc2VsZWN0QWxsKFwidGV4dFwiKVxuICAgICAgICAgICAgLy8gICAgIC5leGl0KCkucmVtb3ZlKClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgc3RhdGVEYXRhID0gcmF3RGF0YVtzdGF0ZUluZGV4W3NlbGVjdGVkU3RhdGVdXVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGVEYXRhKVxuICAgICAgICAgICAgbGV0IGRhdGEgPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgW2QsIHZdIG9mIE9iamVjdC5lbnRyaWVzKHN0YXRlRGF0YSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZCA9PT0gJ3Bvc2l0aXZlJyB8fCBkID09PSAnZGVhdGgnIHx8XG4gICAgICAgICAgICAgICAgICAgIGQgPT09ICdob3NwaXRhbGl6ZWRDdXJyZW50bHknIHx8IGQgPT09ICdob3NwaXRhbGl6ZWRDdW11bGF0aXZlJyB8fFxuICAgICAgICAgICAgICAgICAgICBkID09PSAnaW5JY3VDdXJyZW50bHknIHx8IGQgPT09ICdpbkljdUN1bXVsYXRpdmUnIHx8IGQgPT09ICdvblZlbnRpbGF0b3JDdXJyZW50bHknIHx8XG4gICAgICAgICAgICAgICAgICAgIGQgPT09ICdvblZlbnRpbGF0b3JDdW11bGF0aXZlJyB8fCBkID09PSAncmVjb3ZlcmVkJyB8fCBkID09PSAncmVjb3ZlcmVkJyB8fFxuICAgICAgICAgICAgICAgICAgICBkID09PSAnaG9zcGl0YWxpemVkJykge1xuICAgICAgICAgICAgICAgICAgICBkID0gY2FwaXRhbGl6ZShkKVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KHYpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKHsgY2F0ZWdvcnk6IGQsIHZhbHVlOiArcGFyc2VJbnQodikgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB4LmRvbWFpbihkYXRhLm1hcChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5jYXRlZ29yeSB9KSlcblxuXG4gICAgICAgICAgICBsZXQgbWF4WSA9IGQzLm1heChkYXRhLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC52YWx1ZSB9KVxuXG5cbiAgICAgICAgICAgIHkuZG9tYWluKFswLCAobWF4WSAqIDEuMildKVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHlBeGlzLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKVxuXG4gICAgICAgICAgICB4QXhpcy50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKC0wLjIsXCIgKyBoZWlnaHQgKyBcIilcIilcbiAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKC0xMCwwKXJvdGF0ZSgtNDUpXCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcbiAgICAgICAgICAgICAgICAuYXR0cigneCcsIC04KVxuXG4vLyAgICAgICAgICAgICB2YXIgY2lyY2xlcyA9IGQzLnNlbGVjdEFsbCgnc3ZnJykuYXBwZW5kKCdzdmcnKVxuLy8gICAgICAgICAgICAgICAuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnY2lyY2xlcycpLmRhdGEoIHNvbWVEYXRhICk7XG5cbi8vIGNpcmNsZXMuZW50ZXIoKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdjaXJjbGUnKVxuLy8gICAgICAgICAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbi8vICAgICAgICAgICAgICAgICAgLmF0dHIoJ2N4JywgZnVuY3Rpb24oZCkgeyByZXR1cm4geFNjYWxlKGQpOyB9KVxuLy8gICAgICAgICAgICAgICAgICAuYXR0cignY3knLCBmdW5jdGlvbihkKSB7IHJldHVybiB5U2NhbGUoZCk7IH0pXG4vLyAgICAgICAgICAgICAgICAuYXBwZW5kKCd0ZXh0JykuYXR0cignc3R5bGUnLCAnZGlzcGxheTpub25lOycpXG4vLyAgICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudGl0bGU7IH0pXG4vLyAgICAgICAgICAgICAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24oZCkgeyByZXR1cm4geFNjYWxlKGQpOyB9KVxuLy8gICAgICAgICAgICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHlTY2FsZShkKSArIDIqcmFkaXVzKGQpOyB9KTtcblxuICAgICAgICAgICAgbGV0IGJhciA9IHN2Zy5zZWxlY3RBbGwoXCJyZWN0XCIpXG4gICAgICAgICAgICAgICAgLmRhdGEoZGF0YSlcblxuICAgICAgICAgICAgbGV0IHRleHQgPSBzdmcuc2VsZWN0QWxsKFwidGV4dFwiKVxuXG4gICAgICAgICAgICB0ZXh0LmV4aXQoKS5yZW1vdmUoKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBiYXIuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwicmVjdFwiKVxuICAgICAgICAgICAgICAgIC5tZXJnZShiYXIpXG4gICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geChkLmNhdGVnb3J5KSB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geShkLnZhbHVlKSB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgeC5iYW5kd2lkdGgoKSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gaGVpZ2h0IC0geShkLnZhbHVlKSB9KVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCIjNjliM2EyXCIpXG4gICAgICAgICAgICAgICAgIC8vICAgICAuZGVsYXkoZnVuY3Rpb24gKGQsIGkpIHsgY29uc29sZS5sb2coaSk7IHJldHVybiAoaSAqIDEwMCkgfSlcbiAgICAgICAgICAgIGJhci5leGl0KClcbiAgICAgICAgICAgICAgICAucmVtb3ZlKClcbiAgICAgICAgICAgIC8vIGJhci5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAvLyAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInZhbHVlXCIpXG4gICAgICAgICAgICAvLyAgICAgLmF0dHIoJ3gnLCAoYSkgPT4geChhLmNhdGVnb3J5KSArIHguYmFuZHdpZHRoKCkgLyAyKVxuICAgICAgICAgICAgLy8gICAgIC5hdHRyKCd5JywgKGEpID0+IHkoYS52YWx1ZSkgLSAxMClcbiAgICAgICAgICAgIC8vICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgICAgIC8vICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gYCR7KGQudmFsdWUpfWB9KVxuXG4gICAgICAgICAgICBzdmdcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCAneS1heGlzLWxhYmVsJylcbiAgICAgICAgICAgICAgICAuYXR0cigneCcsIC0yMDApXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3knLCBtYXJnaW4gLyAzKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAncm90YXRlKC05MCknKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAgICAgICAgIC50ZXh0KCdJbmNpZGVudHMnKVxuXG4gICAgICAgICAgICBzdmcuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCAneC1heGlzLWxhYmVsJylcbiAgICAgICAgICAgICAgICAuYXR0cigneCcsIHdpZHRoIC8gMiArIG1hcmdpbilcbiAgICAgICAgICAgICAgICAuYXR0cigneScsIGhlaWdodCArIG1hcmdpbiAqIDEuNylcbiAgICAgICAgICAgICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgICAgICAgICAudGV4dCgnQ2F0ZWdvcmllcycpXG4gICAgICAgIFxuICAgIFxuICAgICAgICB9KVxuICAgICAgICBkMy5zZWxlY3QoXCIjc2VsZWN0QnV0dG9uXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBkMy5zZWxlY3QodGhpcykucHJvcGVydHkoXCJ2YWx1ZVwiKVxuICAgICAgICAgICAgc2VsZWN0U3RhdGUoc2VsZWN0ZWRPcHRpb24pXG4gICAgICAgIFxuICAgIH0pO1xuXG4gICAgfVxuICAgIHNlbGVjdFN0YXRlKFwiQUtcIilcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==