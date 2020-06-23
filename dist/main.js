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
    console.log(rawData);
    var stateData = rawData[stateIndex["AK"]];
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
    console.log(x.bandwidth()); // yAxis.call(d3.axisLeft(y))

    yAxis.transition().duration(1000).call(d3.axisLeft(y)); // xAxis.call(d3.axisBottom(x))
    //     .attr("transform", "translate(-0.2," + height + ")")
    //     .selectAll("text")
    //     .attr("transform", "translate(-10,0)rotate(-45)")
    //     .style("text-anchor", "end")
    //     .attr('x', -8)

    xAxis.transition().duration(1000).call(d3.axisBottom(x)).attr("transform", "translate(-0.2," + height + ")").selectAll("text").attr("transform", "translate(-10,0)rotate(-45)").style("text-anchor", "end").attr('x', -8);
    svg.selectAll(".bar").data(data).enter().append("rect").attr("class", "bar").attr("x", function (d) {
      return x(d.category);
    }).attr("width", x.bandwidth()).style("fill", "#69b3a2").attr("height", function (d) {
      return height - y(0);
    }).attr("y", function (d) {
      return y(0);
    });
    svg.selectAll("rect").transition().duration(1000).attr("y", function (d) {
      return y(d.value);
    }).attr("height", function (d) {
      return height - y(d.value);
    }).delay(function (d, i) {
      console.log(i);
      return i * 100;
    }); // svg.selectAll(".bar")
    //     .data(data)
    //     .enter().append("rect")
    //     .attr("class", "bar")
    //     .transition()
    //     .duration(1000)
    //     .attr("x", function (d) { return x(d.category) })
    //     .attr("y", function (d) { return y(d.value) })
    //     .attr("width", x.bandwidth())
    //     .attr("height", function (d) { return height - y(d.value) })
    //     .style("fill", "#69b3a2")

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
      x.domain(data.map(function (d) {
        return d.category;
      }));
      var maxY = d3.max(data, function (d) {
        return d.value;
      });
      y.domain([0, maxY * 1.1]);
      console.log(x.bandwidth());
      yAxis.transition().duration(1000).call(d3.axisLeft(y));
      xAxis.transition().duration(1000).call(d3.axisBottom(x)).attr("transform", "translate(-0.2," + height + ")").selectAll("text").attr("transform", "translate(-10,0)rotate(-45)").style("text-anchor", "end").attr('x', -8); // svg.selectAll(".bar").remove().transition(1000)

      var u = svg.selectAll("rect").data(data);
      u.enter().append("rect") // Add a new rect for each new elements
      .merge(u) // get the already existing elements as well
      .transition() // and apply changes to all of them
      .duration(1000).attr("x", function (d) {
        return x(d.category);
      }).attr("y", function (d) {
        return y(d.value);
      }).attr("width", x.bandwidth()).attr("height", function (d) {
        return height - y(d.value);
      }).attr("fill", "#69b3a2"); // If less group in the new dataset, I delete the ones not in use anymore

      u.exit().remove(); // svg.selectAll(".bar")
      //     .data(data)
      //     .enter().append("rect")
      //     .attr("class", "bar")
      //     .transition()
      //     .duration(1000)
      //     .attr("x", function (d) { return x(d.category)})
      //     .attr("y", function (d) { return y(d.value)})
      //     .attr("width", x.bandwidth())
      //     .attr("height", function (d) { return height - y(d.value)})
      //     .style("fill", "#800080")
    }

    d3.select("#selectButton").on("change", function (d) {
      var selectedOption = d3.select(this).property("value");
      selectState(selectedOption);
    }); // selectState("NY")
  });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXRlSW5kZXgiLCJtYXJnaW4iLCJ3aWR0aCIsImhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJsZWZ0Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwic2VsZWN0QWxsIiwiZGF0YSIsIk9iamVjdCIsImtleXMiLCJlbnRlciIsInRleHQiLCJkIiwiY2FwaXRhbGl6ZSIsIndvcmQiLCJ3b3JkQXJyYXkiLCJzcGxpdCIsIm5ld1dvcmQiLCJmb3JFYWNoIiwiY2hhciIsImkiLCJ0b1VwcGVyQ2FzZSIsInB1c2giLCJqb2luIiwiY3N2IiwicmF3RGF0YSIsInN0YXRlRGF0YSIsImVudHJpZXMiLCJ2IiwiaXNOYU4iLCJwYXJzZUludCIsImNhdGVnb3J5IiwidmFsdWUiLCJ4Iiwic2NhbGVCYW5kIiwicmFuZ2UiLCJwYWRkaW5nIiwieEF4aXMiLCJ5Iiwic2NhbGVMaW5lYXIiLCJ5QXhpcyIsImRvbWFpbiIsIm1hcCIsIm1heFkiLCJtYXgiLCJiYW5kd2lkdGgiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjYWxsIiwiYXhpc0xlZnQiLCJheGlzQm90dG9tIiwic3R5bGUiLCJkZWxheSIsInNlbGVjdFN0YXRlIiwic2VsZWN0ZWRTdGF0ZSIsInUiLCJtZXJnZSIsImV4aXQiLCJyZW1vdmUiLCJvbiIsInNlbGVjdGVkT3B0aW9uIiwicHJvcGVydHkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxn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Q0FBQ3JCLENBQUMsQ0FBQ21CLFFBQUgsQ0FBUjtBQUF1QixPQU5yRCxFQU9LMUIsSUFQTCxDQU9VLEdBUFYsRUFPZSxVQUFVTyxDQUFWLEVBQWE7QUFBRSxlQUFPMEIsQ0FBQyxDQUFDMUIsQ0FBQyxDQUFDb0IsS0FBSCxDQUFSO0FBQW9CLE9BUGxELEVBUUszQixJQVJMLENBUVUsT0FSVixFQVFtQjRCLENBQUMsQ0FBQ1ksU0FBRixFQVJuQixFQVNLeEMsSUFUTCxDQVNVLFFBVFYsRUFTb0IsVUFBVU8sQ0FBVixFQUFhO0FBQUUsZUFBT2YsTUFBTSxHQUFHeUMsQ0FBQyxDQUFDMUIsQ0FBQyxDQUFDb0IsS0FBSCxDQUFqQjtBQUE2QixPQVRoRSxFQVVLM0IsSUFWTCxDQVVVLE1BVlYsRUFVa0IsU0FWbEIsRUFoRCtCLENBNEQvQjs7QUFDQWtELE9BQUMsQ0FDSUUsSUFETCxHQUVLQyxNQUZMLEdBN0QrQixDQWdFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVIOztBQUVEeEQsTUFBRSxDQUFDQyxNQUFILENBQVUsZUFBVixFQUEyQndELEVBQTNCLENBQThCLFFBQTlCLEVBQXdDLFVBQVUvQyxDQUFWLEVBQWE7QUFDakQsVUFBSWdELGNBQWMsR0FBRzFELEVBQUUsQ0FBQ0MsTUFBSCxDQUFVLElBQVYsRUFBZ0IwRCxRQUFoQixDQUF5QixPQUF6QixDQUFyQjtBQUNBUixpQkFBVyxDQUFDTyxjQUFELENBQVg7QUFDSCxLQUhELEVBbkw2RSxDQXVMN0U7QUFDSCxHQXhMRDtBQTRMSCxDQWxTRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuY29uc3Qgc3RhdGVJbmRleCA9IHtcbiAgICBcIkFLXCI6IDAsXG4gICAgXCJBTFwiOiAxLFxuICAgIFwiQVJcIjogMixcbiAgICBcIkFTXCI6IDMsXG4gICAgXCJBWlwiOiA0LFxuICAgIFwiQ0FcIjogNSxcbiAgICBcIkNPXCI6IDYsXG4gICAgXCJDVFwiOiA3LFxuICAgIFwiRENcIjogOCxcbiAgICBcIkRFXCI6IDksXG4gICAgXCJGTFwiOiAxMCxcbiAgICBcIkdBXCI6IDExLFxuICAgIFwiR1VcIjogMTIsXG4gICAgXCJISVwiOiAxMyxcbiAgICBcIklBXCI6IDE0LFxuICAgIFwiSURcIjogMTUsXG4gICAgXCJJTFwiOiAxNixcbiAgICBcIklOXCI6IDE3LFxuICAgIFwiS1NcIjogMTgsXG4gICAgXCJLWVwiOiAxOSxcbiAgICBcIkxBXCI6IDIwLFxuICAgIFwiTUFcIjogMjEsXG4gICAgXCJNRFwiOiAyMixcbiAgICBcIk1FXCI6IDIzLFxuICAgIFwiTUlcIjogMjQsXG4gICAgXCJNTlwiOiAyNSxcbiAgICBcIk1PXCI6IDI2LFxuICAgIFwiTVBcIjogMjcsXG4gICAgXCJNU1wiOiAyOCxcbiAgICBcIk1UXCI6IDI5LFxuICAgIFwiTkNcIjogMzAsXG4gICAgXCJORFwiOiAzMSxcbiAgICBcIk5FXCI6IDMyLFxuICAgIFwiTkhcIjogMzMsXG4gICAgXCJOSlwiOiAzNCxcbiAgICBcIk5NXCI6IDM1LFxuICAgIFwiTlZcIjogMzYsXG4gICAgXCJOWVwiOiAzNyxcbiAgICBcIk9IXCI6IDM4LFxuICAgIFwiT0tcIjogMzksXG4gICAgXCJPUlwiOiA0MCxcbiAgICBcIlBBXCI6IDQxLFxuICAgIFwiUFJcIjogNDIsXG4gICAgXCJSSVwiOiA0MyxcbiAgICBcIlNDXCI6IDQ0LFxuICAgIFwiU0RcIjogNDUsXG4gICAgXCJUTlwiOiA0NixcbiAgICBcIlRYXCI6IDQ3LFxuICAgIFwiVVRcIjogNDgsXG4gICAgXCJWQVwiOiA0OSxcbiAgICBcIlZJXCI6IDUwLFxuICAgIFwiVlRcIjogNTEsXG4gICAgXCJXQVwiOiA1MixcbiAgICBcIldJXCI6IDUzLFxuICAgIFwiV1ZcIjogNTQsXG4gICAgXCJXWVwiOiA1NVxufVxuXG5sZXQgbWFyZ2luID0gODAsXG4vLyBsZXQgbWFyZ2luID0geyB0b3A6IDgwLCByaWdodDogMTgwLCBib3R0b206IDgwLCBsZWZ0OiAxODAgfSxcbiAgICB3aWR0aCA9IDgwMCAtIDIgKiBtYXJnaW4sXG4gICAgaGVpZ2h0ID0gNjAwIC0gMiAqIG1hcmdpbjtcbmNvbnNvbGUubG9nKG1hcmdpbi5sZWZ0KVxuXG5sZXQgc3ZnID0gZDMuc2VsZWN0KFwiI2RhdGEtc2VjdGlvblwiKVxuICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICsgKDIgKiBtYXJnaW4pKVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArICgyICogbWFyZ2luKSlcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHttYXJnaW59LCAke21hcmdpbn0pYCk7XG5cbiAgICBkMy5zZWxlY3QoXCIjc2VsZWN0QnV0dG9uXCIpXG4gICAgICAgIC5zZWxlY3RBbGwoXCJteU9wdGlvbnNcIilcbiAgICAgICAgLmRhdGEoT2JqZWN0LmtleXMoc3RhdGVJbmRleCkpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJvcHRpb25cIilcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQ7IH0pXG4gICAgICAgIC5hdHRyKFwidmFsdWVcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQgfSlcbiAgICAvLyAucHJvcGVydHkoXCJzZWxlY3RlZFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCA9PT0gXCJOWVwifSlcblxuXG5sZXQgY2FwaXRhbGl6ZSA9IHdvcmQgPT4ge1xuICAgIGxldCB3b3JkQXJyYXkgPSB3b3JkLnNwbGl0KCcnKVxuICAgIGxldCBuZXdXb3JkID0gW107XG4gICAgd29yZEFycmF5LmZvckVhY2goKGNoYXIsIGkpID0+IHtcbiAgICAgICAgaWYgKGNoYXIgIT09IGNoYXIudG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgICAgbmV3V29yZC5wdXNoKGNoYXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdXb3JkLnB1c2goJyAnICsgY2hhci50b1VwcGVyQ2FzZSgpKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIG5ld1dvcmRbMF0gPSBuZXdXb3JkWzBdLnRvVXBwZXJDYXNlKClcbiAgICByZXR1cm4gbmV3V29yZC5qb2luKCcnKVxufVxuXG5cblxuXG4gICAgZDMuY3N2KFwiaHR0cHM6Ly9jb3ZpZHRyYWNraW5nLmNvbS9hcGkvdjEvc3RhdGVzL2N1cnJlbnQuY3N2XCIsIGZ1bmN0aW9uIChyYXdEYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJhd0RhdGEpXG5cblxuICAgICAgICBsZXQgc3RhdGVEYXRhID0gcmF3RGF0YVtzdGF0ZUluZGV4W1wiQUtcIl1dXG4gICAgICAgIFxuICAgICAgICBsZXQgZGF0YSA9IFtdXG4gICAgICAgIGZvciAobGV0IFtkLCB2XSBvZiBPYmplY3QuZW50cmllcyhzdGF0ZURhdGEpKSB7XG4gICAgICAgICAgICBpZiAoZCA9PT0gJ3Bvc2l0aXZlJyB8fCBkID09PSAnZGVhdGgnIHx8XG4gICAgICAgICAgICAgICAgZCA9PT0gJ2hvc3BpdGFsaXplZEN1cnJlbnRseScgfHwgZCA9PT0gJ2hvc3BpdGFsaXplZEN1bXVsYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgZCA9PT0gJ2luSWN1Q3VycmVudGx5JyB8fCBkID09PSAnaW5JY3VDdW11bGF0aXZlJyB8fCBkID09PSAnb25WZW50aWxhdG9yQ3VycmVudGx5JyB8fFxuICAgICAgICAgICAgICAgIGQgPT09ICdvblZlbnRpbGF0b3JDdW11bGF0aXZlJyB8fCBkID09PSAncmVjb3ZlcmVkJyB8fCBkID09PSAncmVjb3ZlcmVkJyB8fFxuICAgICAgICAgICAgICAgIGQgPT09ICdob3NwaXRhbGl6ZWQnKSB7XG4gICAgICAgICAgICAgICAgZCA9IGNhcGl0YWxpemUoZClcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KHYpKSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goeyBjYXRlZ29yeTogZCwgdmFsdWU6ICtwYXJzZUludCh2KSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB4ID0gZDMuc2NhbGVCYW5kKClcbiAgICAgICAgICAgIC5yYW5nZShbMCwgd2lkdGhdKVxuICAgICAgICAgICAgLnBhZGRpbmcoMC41KVxuXG4gICAgICAgIGxldCB4QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG5cbiAgICAgICAgbGV0IHkgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAucmFuZ2UoW2hlaWdodCwgMF0pXG5cblxuICAgICAgICBsZXQgeUF4aXMgPSBzdmcuYXBwZW5kKCdnJylcblxuICAgICAgICB4LmRvbWFpbihkYXRhLm1hcChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5jYXRlZ29yeSB9KSlcblxuICAgICAgICBsZXQgbWF4WSA9IGQzLm1heChkYXRhLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC52YWx1ZSB9KVxuXG4gICAgICAgIHkuZG9tYWluKFswLCAobWF4WSAqIDEuMSldKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHguYmFuZHdpZHRoKCkpXG5cbiAgICAgICAgLy8geUF4aXMuY2FsbChkMy5heGlzTGVmdCh5KSlcbiAgICAgICAgeUF4aXMudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKVxuXG4gICAgICAgIC8vIHhBeGlzLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgICAgLy8gICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKC0wLjIsXCIgKyBoZWlnaHQgKyBcIilcIilcbiAgICAgICAgLy8gICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG4gICAgICAgIC8vICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgtMTAsMClyb3RhdGUoLTQ1KVwiKVxuICAgICAgICAvLyAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcbiAgICAgICAgLy8gICAgIC5hdHRyKCd4JywgLTgpXG4gICAgICAgIHhBeGlzLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoLTAuMixcIiArIGhlaWdodCArIFwiKVwiKVxuICAgICAgICAgICAgLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKC0xMCwwKXJvdGF0ZSgtNDUpXCIpXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCAtOClcblxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwiLmJhclwiKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXJcIilcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geChkLmNhdGVnb3J5KSB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB4LmJhbmR3aWR0aCgpKVxuICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIiM2OWIzYTJcIikgICAgICAgICAgICBcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBoZWlnaHQgLSB5KDApIH0pXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHkoMCkgfSlcbiAgICAgICAgICAgIFxuXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJyZWN0XCIpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geShkLnZhbHVlKTsgfSlcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBoZWlnaHQgLSB5KGQudmFsdWUpOyB9KVxuICAgICAgICAgICAgLmRlbGF5KGZ1bmN0aW9uIChkLCBpKSB7IGNvbnNvbGUubG9nKGkpOyByZXR1cm4gKGkgKiAxMDApIH0pXG4gICAgICAgIC8vIHN2Zy5zZWxlY3RBbGwoXCIuYmFyXCIpXG4gICAgICAgIC8vICAgICAuZGF0YShkYXRhKVxuICAgICAgICAvLyAgICAgLmVudGVyKCkuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAvLyAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhclwiKVxuICAgICAgICAvLyAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAvLyAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgIC8vICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHgoZC5jYXRlZ29yeSkgfSlcbiAgICAgICAgLy8gICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geShkLnZhbHVlKSB9KVxuICAgICAgICAvLyAgICAgLmF0dHIoXCJ3aWR0aFwiLCB4LmJhbmR3aWR0aCgpKVxuICAgICAgICAvLyAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGhlaWdodCAtIHkoZC52YWx1ZSkgfSlcbiAgICAgICAgLy8gICAgIC5zdHlsZShcImZpbGxcIiwgXCIjNjliM2EyXCIpXG5cblxuXG5cbiAgICAgICAgZnVuY3Rpb24gc2VsZWN0U3RhdGUoc2VsZWN0ZWRTdGF0ZSl7IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgc3RhdGVEYXRhID0gcmF3RGF0YVtzdGF0ZUluZGV4W3NlbGVjdGVkU3RhdGVdXVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGVEYXRhKVxuICAgICAgICAgICAgbGV0IGRhdGEgPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgW2QsIHZdIG9mIE9iamVjdC5lbnRyaWVzKHN0YXRlRGF0YSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZCA9PT0gJ3Bvc2l0aXZlJyB8fCBkID09PSAnZGVhdGgnIHx8XG4gICAgICAgICAgICAgICAgICAgIGQgPT09ICdob3NwaXRhbGl6ZWRDdXJyZW50bHknIHx8IGQgPT09ICdob3NwaXRhbGl6ZWRDdW11bGF0aXZlJyB8fFxuICAgICAgICAgICAgICAgICAgICBkID09PSAnaW5JY3VDdXJyZW50bHknIHx8IGQgPT09ICdpbkljdUN1bXVsYXRpdmUnIHx8IGQgPT09ICdvblZlbnRpbGF0b3JDdXJyZW50bHknIHx8XG4gICAgICAgICAgICAgICAgICAgIGQgPT09ICdvblZlbnRpbGF0b3JDdW11bGF0aXZlJyB8fCBkID09PSAncmVjb3ZlcmVkJyB8fCBkID09PSAncmVjb3ZlcmVkJyB8fFxuICAgICAgICAgICAgICAgICAgICBkID09PSAnaG9zcGl0YWxpemVkJykge1xuICAgICAgICAgICAgICAgICAgICBkID0gY2FwaXRhbGl6ZShkKVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KHYpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKHsgY2F0ZWdvcnk6IGQsIHZhbHVlOiArcGFyc2VJbnQodikgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgICAgICAgICAgIGxldCB4ID0gZDMuc2NhbGVCYW5kKClcbiAgICAgICAgICAgICAgICAucmFuZ2UoWzAsIHdpZHRoXSlcbiAgICAgICAgICAgICAgICAucGFkZGluZygwLjUpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHguZG9tYWluKGRhdGEubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLmNhdGVnb3J5fSkpXG5cbiAgICAgICAgICAgIGxldCBtYXhZID0gZDMubWF4KGRhdGEsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnZhbHVlIH0pXG5cbiAgICAgICAgICAgIHkuZG9tYWluKFswLCAobWF4WSAqIDEuMSldKVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh4LmJhbmR3aWR0aCgpKVxuXG4gICAgICAgICAgICB5QXhpcy50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcblxuICAgICAgICAgICAgeEF4aXMudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgtMC4yLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgICAgICAgICAgLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgtMTAsMClyb3RhdGUoLTQ1KVwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3gnLCAtOClcblxuICAgICAgICAgICAgLy8gc3ZnLnNlbGVjdEFsbChcIi5iYXJcIikucmVtb3ZlKCkudHJhbnNpdGlvbigxMDAwKVxuICAgICAgICAgICAgbGV0IHUgPSBzdmcuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgICAgICAgICAgICAgIC5kYXRhKGRhdGEpXG5cbiAgICAgICAgICAgIHVcbiAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJyZWN0XCIpIC8vIEFkZCBhIG5ldyByZWN0IGZvciBlYWNoIG5ldyBlbGVtZW50c1xuICAgICAgICAgICAgICAgIC5tZXJnZSh1KSAvLyBnZXQgdGhlIGFscmVhZHkgZXhpc3RpbmcgZWxlbWVudHMgYXMgd2VsbFxuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKCkgLy8gYW5kIGFwcGx5IGNoYW5nZXMgdG8gYWxsIG9mIHRoZW1cbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHgoZC5jYXRlZ29yeSk7IH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5KGQudmFsdWUpOyB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgeC5iYW5kd2lkdGgoKSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gaGVpZ2h0IC0geShkLnZhbHVlKTsgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCIjNjliM2EyXCIpXG5cbiAgICAgICAgICAgIC8vIElmIGxlc3MgZ3JvdXAgaW4gdGhlIG5ldyBkYXRhc2V0LCBJIGRlbGV0ZSB0aGUgb25lcyBub3QgaW4gdXNlIGFueW1vcmVcbiAgICAgICAgICAgIHVcbiAgICAgICAgICAgICAgICAuZXhpdCgpXG4gICAgICAgICAgICAgICAgLnJlbW92ZSgpXG4gICAgICAgICAgICAvLyBzdmcuc2VsZWN0QWxsKFwiLmJhclwiKVxuICAgICAgICAgICAgLy8gICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAvLyAgICAgLmVudGVyKCkuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgICAgLy8gICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXJcIilcbiAgICAgICAgICAgIC8vICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAvLyAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgICAgICAvLyAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB4KGQuY2F0ZWdvcnkpfSlcbiAgICAgICAgICAgIC8vICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHkoZC52YWx1ZSl9KVxuICAgICAgICAgICAgLy8gICAgIC5hdHRyKFwid2lkdGhcIiwgeC5iYW5kd2lkdGgoKSlcbiAgICAgICAgICAgIC8vICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gaGVpZ2h0IC0geShkLnZhbHVlKX0pXG4gICAgICAgICAgICAvLyAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIiM4MDAwODBcIilcbiAgICAgICAgICAgICAgICBcblxuXG5cblxuXG5cblxuXG4gICAgICAgIH1cblxuICAgICAgICBkMy5zZWxlY3QoXCIjc2VsZWN0QnV0dG9uXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBkMy5zZWxlY3QodGhpcykucHJvcGVydHkoXCJ2YWx1ZVwiKVxuICAgICAgICAgICAgc2VsZWN0U3RhdGUoc2VsZWN0ZWRPcHRpb24pXG4gICAgICAgIH0pXG4gICAgICAgIC8vIHNlbGVjdFN0YXRlKFwiTllcIilcbiAgICB9KTtcblxuICAgIFxuICAgXG59KSJdLCJzb3VyY2VSb290IjoiIn0=