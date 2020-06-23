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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXRlSW5kZXgiLCJtYXJnaW4iLCJ3aWR0aCIsImhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJsZWZ0Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwieCIsInNjYWxlQmFuZCIsInJhbmdlIiwicGFkZGluZyIsInhBeGlzIiwieSIsInNjYWxlTGluZWFyIiwieUF4aXMiLCJjYXBpdGFsaXplIiwid29yZCIsIndvcmRBcnJheSIsInNwbGl0IiwibmV3V29yZCIsImZvckVhY2giLCJjaGFyIiwiaSIsInRvVXBwZXJDYXNlIiwicHVzaCIsImpvaW4iLCJzZWxlY3RTdGF0ZSIsInNlbGVjdGVkU3RhdGUiLCJjc3YiLCJyYXdEYXRhIiwic3RhdGVEYXRhIiwiZGF0YSIsIk9iamVjdCIsImVudHJpZXMiLCJkIiwidiIsImlzTmFOIiwicGFyc2VJbnQiLCJjYXRlZ29yeSIsInZhbHVlIiwiZG9tYWluIiwibWFwIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY2FsbCIsImF4aXNCb3R0b20iLCJzZWxlY3RBbGwiLCJzdHlsZSIsIm1heFkiLCJtYXgiLCJheGlzTGVmdCIsImJhbmR3aWR0aCIsImVudGVyIiwia2V5cyIsInRleHQiLCJvbiIsInNlbGVjdGVkT3B0aW9uIiwicHJvcGVydHkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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TW1CQyxDQUFDLENBQUM0QyxTQUFGLEVBTm5CLEVBT0s3QyxJQVBMLENBT1UsUUFQVixFQU9vQixVQUFVNEIsQ0FBVixFQUFhO0FBQUUsZUFBT3BDLE1BQU0sR0FBR2MsQ0FBQyxDQUFDc0IsQ0FBQyxDQUFDSyxLQUFILENBQWpCO0FBQTJCLE9BUDlELEVBUUtRLEtBUkwsQ0FRVyxNQVJYLEVBUW1CLFNBUm5CO0FBVUE1QyxRQUFFLENBQUNDLE1BQUgsQ0FBVSxlQUFWLEVBQ0swQyxTQURMLENBQ2UsV0FEZixFQUVLZixJQUZMLENBRVVDLE1BQU0sQ0FBQ3FCLElBQVAsQ0FBWTFELFVBQVosQ0FGVixFQUdLeUQsS0FITCxHQUlLL0MsTUFKTCxDQUlZLFFBSlosRUFLS2lELElBTEwsQ0FLVSxVQUFVcEIsQ0FBVixFQUFjO0FBQUMsZUFBT0EsQ0FBUDtBQUFXLE9BTHBDLEVBbkU2RSxDQXlFekU7O0FBRUovQixRQUFFLENBQUNDLE1BQUgsQ0FBVSxlQUFWLEVBQTJCbUQsRUFBM0IsQ0FBOEIsUUFBOUIsRUFBd0MsVUFBU3JCLENBQVQsRUFBWTtBQUNoRCxZQUFJc0IsY0FBYyxHQUFHckQsRUFBRSxDQUFDQyxNQUFILENBQVUsSUFBVixFQUFnQnFELFFBQWhCLENBQXlCLE9BQXpCLENBQXJCO0FBQ0EvQixtQkFBVyxDQUFDOEIsY0FBRCxDQUFYO0FBQ0gsT0FIRDtBQUtILEtBaEZEO0FBaUZIOztBQUNHOUIsYUFBVyxDQUFDLElBQUQsQ0FBWDtBQUVILENBN0xELEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXG5jb25zdCBzdGF0ZUluZGV4ID0ge1xuICAgIFwiQUtcIjogMCxcbiAgICBcIkFMXCI6IDEsXG4gICAgXCJBUlwiOiAyLFxuICAgIFwiQVNcIjogMyxcbiAgICBcIkFaXCI6IDQsXG4gICAgXCJDQVwiOiA1LFxuICAgIFwiQ09cIjogNixcbiAgICBcIkNUXCI6IDcsXG4gICAgXCJEQ1wiOiA4LFxuICAgIFwiREVcIjogOSxcbiAgICBcIkZMXCI6IDEwLFxuICAgIFwiR0FcIjogMTEsXG4gICAgXCJHVVwiOiAxMixcbiAgICBcIkhJXCI6IDEzLFxuICAgIFwiSUFcIjogMTQsXG4gICAgXCJJRFwiOiAxNSxcbiAgICBcIklMXCI6IDE2LFxuICAgIFwiSU5cIjogMTcsXG4gICAgXCJLU1wiOiAxOCxcbiAgICBcIktZXCI6IDE5LFxuICAgIFwiTEFcIjogMjAsXG4gICAgXCJNQVwiOiAyMSxcbiAgICBcIk1EXCI6IDIyLFxuICAgIFwiTUVcIjogMjMsXG4gICAgXCJNSVwiOiAyNCxcbiAgICBcIk1OXCI6IDI1LFxuICAgIFwiTU9cIjogMjYsXG4gICAgXCJNUFwiOiAyNyxcbiAgICBcIk1TXCI6IDI4LFxuICAgIFwiTVRcIjogMjksXG4gICAgXCJOQ1wiOiAzMCxcbiAgICBcIk5EXCI6IDMxLFxuICAgIFwiTkVcIjogMzIsXG4gICAgXCJOSFwiOiAzMyxcbiAgICBcIk5KXCI6IDM0LFxuICAgIFwiTk1cIjogMzUsXG4gICAgXCJOVlwiOiAzNixcbiAgICBcIk5ZXCI6IDM3LFxuICAgIFwiT0hcIjogMzgsXG4gICAgXCJPS1wiOiAzOSxcbiAgICBcIk9SXCI6IDQwLFxuICAgIFwiUEFcIjogNDEsXG4gICAgXCJQUlwiOiA0MixcbiAgICBcIlJJXCI6IDQzLFxuICAgIFwiU0NcIjogNDQsXG4gICAgXCJTRFwiOiA0NSxcbiAgICBcIlROXCI6IDQ2LFxuICAgIFwiVFhcIjogNDcsXG4gICAgXCJVVFwiOiA0OCxcbiAgICBcIlZBXCI6IDQ5LFxuICAgIFwiVklcIjogNTAsXG4gICAgXCJWVFwiOiA1MSxcbiAgICBcIldBXCI6IDUyLFxuICAgIFwiV0lcIjogNTMsXG4gICAgXCJXVlwiOiA1NCxcbiAgICBcIldZXCI6IDU1XG59XG5cbmxldCBtYXJnaW4gPSA4MCxcbi8vIGxldCBtYXJnaW4gPSB7IHRvcDogODAsIHJpZ2h0OiAxODAsIGJvdHRvbTogODAsIGxlZnQ6IDE4MCB9LFxuICAgIHdpZHRoID0gMTAwMCAtIDIgKiBtYXJnaW4sXG4gICAgaGVpZ2h0ID0gNjAwIC0gMiAqIG1hcmdpbjtcbmNvbnNvbGUubG9nKG1hcmdpbi5sZWZ0KVxuXG5sZXQgc3ZnID0gZDMuc2VsZWN0KFwiI2RhdGEtc2VjdGlvblwiKVxuICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICsgKDIgKiBtYXJnaW4pKVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArICgyICogbWFyZ2luKSlcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHttYXJnaW59LCAke21hcmdpbn0pYCk7XG5cbmxldCB4ID0gZDMuc2NhbGVCYW5kKClcbiAgICAgICAgLnJhbmdlKFswLCB3aWR0aF0pXG4gICAgICAgIC5wYWRkaW5nKDAuNSlcblxubGV0IHhBeGlzID0gc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcblxubGV0IHkgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5yYW5nZShbaGVpZ2h0LCAwXSlcbiAgICAgICAgXG5cbmxldCB5QXhpcyA9IHN2Zy5hcHBlbmQoJ2cnKVxuXG5sZXQgY2FwaXRhbGl6ZSA9IHdvcmQgPT4ge1xuICAgIGxldCB3b3JkQXJyYXkgPSB3b3JkLnNwbGl0KCcnKVxuICAgIGxldCBuZXdXb3JkID0gW107XG4gICAgd29yZEFycmF5LmZvckVhY2goKGNoYXIsIGkpID0+IHtcbiAgICAgICAgaWYgKGNoYXIgIT09IGNoYXIudG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgICAgbmV3V29yZC5wdXNoKGNoYXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdXb3JkLnB1c2goJyAnICsgY2hhci50b1VwcGVyQ2FzZSgpKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIG5ld1dvcmRbMF0gPSBuZXdXb3JkWzBdLnRvVXBwZXJDYXNlKClcbiAgICByZXR1cm4gbmV3V29yZC5qb2luKCcnKVxufVxuXG5cbmZ1bmN0aW9uIHNlbGVjdFN0YXRlKHNlbGVjdGVkU3RhdGUpeyBcblxuICAgIGQzLmNzdihcImh0dHBzOi8vY292aWR0cmFja2luZy5jb20vYXBpL3YxL3N0YXRlcy9jdXJyZW50LmNzdlwiLCBmdW5jdGlvbiAocmF3RGF0YSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyYXdEYXRhKVxuICAgICAgICBsZXQgc3RhdGVEYXRhID0gcmF3RGF0YVtzdGF0ZUluZGV4W3NlbGVjdGVkU3RhdGVdXVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZURhdGEpXG4gICAgICAgIGxldCBkYXRhID0gW11cbiAgICAgICAgLy8gc3RhdGVEYXRhLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgZm9yIChsZXQgW2Qsdl0gb2YgT2JqZWN0LmVudHJpZXMoc3RhdGVEYXRhKSkge1xuICAgICAgICAgICAgaWYgKGQgPT09ICdwb3NpdGl2ZScgfHwgZCA9PT0gJ2RlYXRoJyB8fFxuICAgICAgICAgICAgICAgIGQgPT09ICdob3NwaXRhbGl6ZWRDdXJyZW50bHknIHx8IGQgPT09ICdob3NwaXRhbGl6ZWRDdW11bGF0aXZlJyB8fCBcbiAgICAgICAgICAgICAgICBkID09PSAnaW5JY3VDdXJyZW50bHknIHx8IGQgPT09ICdpbkljdUN1bXVsYXRpdmUnIHx8IGQgPT09ICdvblZlbnRpbGF0b3JDdXJyZW50bHknIHx8XG4gICAgICAgICAgICAgICAgZCA9PT0gJ29uVmVudGlsYXRvckN1bXVsYXRpdmUnIHx8IGQgPT09ICdyZWNvdmVyZWQnIHx8IGQgPT09ICdyZWNvdmVyZWQnIHx8XG4gICAgICAgICAgICAgICAgZCA9PT0gJ2hvc3BpdGFsaXplZCcpIHtcbiAgICAgICAgICAgIC8vIGlmIChkID09PSAncG9zaXRpdmUnIHx8IGQgPT09ICduZWdhdGl2ZScgfHwgZCA9PT0gJ2RlYXRoJyB8fCBkID09PSAndG90YWxUZXN0UmVzdWx0cycgfHxcbiAgICAgICAgICAgIC8vICAgICBkID09PSAnaG9zcGl0YWxpemVkQ3VycmVudGx5JyB8fCBkID09PSAnaG9zcGl0YWxpemVkQ3VtdWxhdGl2ZScgfHwgXG4gICAgICAgICAgICAvLyAgICAgZCA9PT0gJ2luSWN1Q3VycmVudGx5JyB8fCBkID09PSAnaW5JY3VDdW11bGF0aXZlJyB8fCBkID09PSAnb25WZW50aWxhdG9yQ3VycmVudGx5JyB8fFxuICAgICAgICAgICAgLy8gICAgIGQgPT09ICdvblZlbnRpbGF0b3JDdW11bGF0aXZlJyB8fCBkID09PSAncmVjb3ZlcmVkJyB8fCBkID09PSAncmVjb3ZlcmVkJyB8fFxuICAgICAgICAgICAgLy8gICAgIGQgPT09ICdob3NwaXRhbGl6ZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGQgPSBjYXBpdGFsaXplKGQpXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQodikpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaCggeyBjYXRlZ29yeTogZCwgdmFsdWU6ICtwYXJzZUludCh2KSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgICAgICAgeC5kb21haW4oZGF0YS5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuY2F0ZWdvcnl9KSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coT2JqZWN0LmtleXMoeCkpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHhbXCJkb21haW5cIl0pXG5cbiAgICAgICAgXG4gICAgICAgIHhBeGlzLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoLTAuMixcIiArIGhlaWdodCArIFwiKVwiKVxuICAgICAgICAgICAgLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKC0xMCwwKXJvdGF0ZSgtNDUpXCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCAtOClcblxuICAgICAgICBsZXQgbWF4WSA9IGQzLm1heChkYXRhLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC52YWx1ZSB9KVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1heFkpXG5cbiAgICAgICAgeS5kb21haW4oWzAsIG1heFldKVxuXG4gICAgICAgIHlBeGlzLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcblxuICAgICAgICAvLyBsZXQgdGVzdDEgPSBkYXRhID0gKGQpID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGQpXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coT2JqZWN0LmVudHJpZXMoeCkpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKE9iamVjdC5lbnRyaWVzKHkpKVxuICAgICAgICBjb25zb2xlLmxvZyh4LmJhbmR3aWR0aCgpKVxuXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCIuYmFyXCIpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhclwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB4KGQuY2F0ZWdvcnkpfSlcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geShkLnZhbHVlKX0pXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHguYmFuZHdpZHRoKCkpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gaGVpZ2h0IC0geShkLnZhbHVlKX0pXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwiIzY5YjNhMlwiKVxuXG4gICAgICAgIGQzLnNlbGVjdChcIiNzZWxlY3RCdXR0b25cIilcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJteU9wdGlvbnNcIilcbiAgICAgICAgICAgIC5kYXRhKE9iamVjdC5rZXlzKHN0YXRlSW5kZXgpKVxuICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgIC5hcHBlbmQoXCJvcHRpb25cIilcbiAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSAge3JldHVybiBkOyB9KVxuICAgICAgICAgICAgLy8gLnByb3BlcnR5KFwic2VsZWN0ZWRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQgPT09IFwiTllcIn0pXG5cbiAgICAgICAgZDMuc2VsZWN0KFwiI3NlbGVjdEJ1dHRvblwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBkMy5zZWxlY3QodGhpcykucHJvcGVydHkoXCJ2YWx1ZVwiKVxuICAgICAgICAgICAgc2VsZWN0U3RhdGUoc2VsZWN0ZWRPcHRpb24pXG4gICAgICAgIH0pXG5cbiAgICB9KTtcbn1cbiAgICBzZWxlY3RTdGF0ZShcIk5ZXCIpXG4gICBcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==