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
    var bar = svg.selectAll().data(data).enter().append("g");
    bar.append("rect").attr("class", "bar").attr("x", function (d) {
      return x(d.category);
    }).attr("width", x.bandwidth()).style("fill", "#69b3a2").attr("height", function (d) {
      return height - y(0);
    }).attr("y", function (d) {
      return y(0);
    });
    bar.selectAll("rect").transition().duration(1000).attr("y", function (d) {
      return y(d.value);
    }).attr("height", function (d) {
      return height - y(d.value);
    }).delay(function (d, i) {
      console.log(i);
      return i * 100;
    });
    bar.append("text").attr("class", "value").attr('x', function (d) {
      return x(d.category) + x.bandwidth() / 2;
    }).attr('y', function (d) {
      return y(d.value) - 10;
    }).attr('text-anchor', 'middle').text(function (d) {
      return "".concat(d.value);
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
      xAxis.transition().duration(1000).call(d3.axisBottom(x)).attr("transform", "translate(-0.2," + height + ")").selectAll("text").attr("transform", "translate(-10,0)rotate(-45)").style("text-anchor", "end").attr('x', -8); // svg.selectAll(".value").remove()
      // svg.selectAll(".bar").remove().transition(1000)

      d3.selectAll(".value").remove();
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
      }).attr("fill", "#69b3a2");
      bar.append("text").data(data).attr("class", "value").attr('x', function (d) {
        return x(d.category) + x.bandwidth() / 2;
      }).attr('y', function (d) {
        return y(d.value) - 10;
      }).attr('text-anchor', 'middle').text(function (d) {
        return "".concat(d.value);
      }); // d3.selectAll("g").append("text")
      //     .attr("class", "value")
      //     .attr('x', (d) => x(d.category) + x.bandwidth() / 2)
      //     .attr('y', (d) => y(d.value) - 10)
      //     .attr('text-anchor', 'middle')
      //     .text(function (d) { return `${(d.value)}` })
      // If less group in the new dataset, I delete the ones not in use anymore

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXRlSW5kZXgiLCJtYXJnaW4iLCJ3aWR0aCIsImhlaWdodCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInNlbGVjdEFsbCIsImRhdGEiLCJPYmplY3QiLCJrZXlzIiwiZW50ZXIiLCJ0ZXh0IiwiZCIsImNhcGl0YWxpemUiLCJ3b3JkIiwid29yZEFycmF5Iiwic3BsaXQiLCJuZXdXb3JkIiwiZm9yRWFjaCIsImNoYXIiLCJpIiwidG9VcHBlckNhc2UiLCJwdXNoIiwiam9pbiIsImNzdiIsInJhd0RhdGEiLCJjb25zb2xlIiwibG9nIiwic3RhdGVEYXRhIiwiZW50cmllcyIsInYiLCJpc05hTiIsInBhcnNlSW50IiwiY2F0ZWdvcnkiLCJ2YWx1ZSIsIngiLCJzY2FsZUJhbmQiLCJyYW5nZSIsInBhZGRpbmciLCJ4QXhpcyIsInkiLCJzY2FsZUxpbmVhciIsInlBeGlzIiwiZG9tYWluIiwibWFwIiwibWF4WSIsIm1heCIsImJhbmR3aWR0aCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNhbGwiLCJheGlzTGVmdCIsImF4aXNCb3R0b20iLCJzdHlsZSIsImJhciIsImRlbGF5Iiwic2VsZWN0U3RhdGUiLCJzZWxlY3RlZFN0YXRlIiwicmVtb3ZlIiwidSIsIm1lcmdlIiwiZXhpdCIsIm9uIiwic2VsZWN0ZWRPcHRpb24iLCJwcm9wZXJ0eSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdD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QUEsZUFBT3VCLENBQUMsQ0FBQ3ZCLENBQUMsQ0FBQ3FCLFFBQUgsQ0FBRCxHQUFnQkUsQ0FBQyxDQUFDWSxTQUFGLEtBQWdCLENBQXZDO0FBQUEsT0FIZixFQUlLMUMsSUFKTCxDQUlVLEdBSlYsRUFJZSxVQUFDTyxDQUFEO0FBQUEsZUFBTzRCLENBQUMsQ0FBQzVCLENBQUMsQ0FBQ3NCLEtBQUgsQ0FBRCxHQUFhLEVBQXBCO0FBQUEsT0FKZixFQUtLN0IsSUFMTCxDQUtVLGFBTFYsRUFLeUIsUUFMekIsRUFNS00sSUFOTCxDQU1VLFVBQVVDLENBQVYsRUFBYTtBQUFFLHlCQUFXQSxDQUFDLENBQUNzQixLQUFiO0FBQXVCLE9BTmhELEVBaEUrQixDQXdFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0F5QixPQUFDLENBQ0lFLElBREwsR0FFS0gsTUFGTCxHQWhGK0IsQ0FtRi9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVSDs7QUFFRHhELE1BQUUsQ0FBQ0MsTUFBSCxDQUFVLGVBQVYsRUFBMkIyRCxFQUEzQixDQUE4QixRQUE5QixFQUF3QyxVQUFVbEQsQ0FBVixFQUFhO0FBQ2pELFVBQUltRCxjQUFjLEdBQUc3RCxFQUFFLENBQUNDLE1BQUgsQ0FBVSxJQUFWLEVBQWdCNkQsUUFBaEIsQ0FBeUIsT0FBekIsQ0FBckI7QUFDQVIsaUJBQVcsQ0FBQ08sY0FBRCxDQUFYO0FBQ0gsS0FIRCxFQWxONkUsQ0FzTjdFO0FBQ0gsR0F2TkQ7QUEyTkgsQ0E3VEQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cbmNvbnN0IHN0YXRlSW5kZXggPSB7XG4gICAgXCJBS1wiOiAwLFxuICAgIFwiQUxcIjogMSxcbiAgICBcIkFSXCI6IDIsXG4gICAgXCJBU1wiOiAzLFxuICAgIFwiQVpcIjogNCxcbiAgICBcIkNBXCI6IDUsXG4gICAgXCJDT1wiOiA2LFxuICAgIFwiQ1RcIjogNyxcbiAgICBcIkRDXCI6IDgsXG4gICAgXCJERVwiOiA5LFxuICAgIFwiRkxcIjogMTAsXG4gICAgXCJHQVwiOiAxMSxcbiAgICBcIkdVXCI6IDEyLFxuICAgIFwiSElcIjogMTMsXG4gICAgXCJJQVwiOiAxNCxcbiAgICBcIklEXCI6IDE1LFxuICAgIFwiSUxcIjogMTYsXG4gICAgXCJJTlwiOiAxNyxcbiAgICBcIktTXCI6IDE4LFxuICAgIFwiS1lcIjogMTksXG4gICAgXCJMQVwiOiAyMCxcbiAgICBcIk1BXCI6IDIxLFxuICAgIFwiTURcIjogMjIsXG4gICAgXCJNRVwiOiAyMyxcbiAgICBcIk1JXCI6IDI0LFxuICAgIFwiTU5cIjogMjUsXG4gICAgXCJNT1wiOiAyNixcbiAgICBcIk1QXCI6IDI3LFxuICAgIFwiTVNcIjogMjgsXG4gICAgXCJNVFwiOiAyOSxcbiAgICBcIk5DXCI6IDMwLFxuICAgIFwiTkRcIjogMzEsXG4gICAgXCJORVwiOiAzMixcbiAgICBcIk5IXCI6IDMzLFxuICAgIFwiTkpcIjogMzQsXG4gICAgXCJOTVwiOiAzNSxcbiAgICBcIk5WXCI6IDM2LFxuICAgIFwiTllcIjogMzcsXG4gICAgXCJPSFwiOiAzOCxcbiAgICBcIk9LXCI6IDM5LFxuICAgIFwiT1JcIjogNDAsXG4gICAgXCJQQVwiOiA0MSxcbiAgICBcIlBSXCI6IDQyLFxuICAgIFwiUklcIjogNDMsXG4gICAgXCJTQ1wiOiA0NCxcbiAgICBcIlNEXCI6IDQ1LFxuICAgIFwiVE5cIjogNDYsXG4gICAgXCJUWFwiOiA0NyxcbiAgICBcIlVUXCI6IDQ4LFxuICAgIFwiVkFcIjogNDksXG4gICAgXCJWSVwiOiA1MCxcbiAgICBcIlZUXCI6IDUxLFxuICAgIFwiV0FcIjogNTIsXG4gICAgXCJXSVwiOiA1MyxcbiAgICBcIldWXCI6IDU0LFxuICAgIFwiV1lcIjogNTVcbn1cblxubGV0IG1hcmdpbiA9IDEwMCxcbiAgICB3aWR0aCA9IDgwMCAtIDIgKiBtYXJnaW4sXG4gICAgaGVpZ2h0ID0gNjAwIC0gMiAqIG1hcmdpbjtcblxubGV0IHN2ZyA9IGQzLnNlbGVjdChcIiNkYXRhLXNlY3Rpb25cIilcbiAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArICgyICogbWFyZ2luKSlcbiAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQgKyAoMiAqIG1hcmdpbikpXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7bWFyZ2lufSwgJHttYXJnaW59KWApO1xuXG4gICAgZDMuc2VsZWN0KFwiI3NlbGVjdEJ1dHRvblwiKVxuICAgICAgICAuc2VsZWN0QWxsKFwibXlPcHRpb25zXCIpXG4gICAgICAgIC5kYXRhKE9iamVjdC5rZXlzKHN0YXRlSW5kZXgpKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwib3B0aW9uXCIpXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkOyB9KVxuICAgICAgICAuYXR0cihcInZhbHVlXCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBkIH0pXG5cbmxldCBjYXBpdGFsaXplID0gd29yZCA9PiB7XG4gICAgbGV0IHdvcmRBcnJheSA9IHdvcmQuc3BsaXQoJycpXG4gICAgbGV0IG5ld1dvcmQgPSBbXTtcbiAgICB3b3JkQXJyYXkuZm9yRWFjaCgoY2hhciwgaSkgPT4ge1xuICAgICAgICBpZiAoY2hhciAhPT0gY2hhci50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgICBuZXdXb3JkLnB1c2goY2hhcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1dvcmQucHVzaCgnICcgKyBjaGFyLnRvVXBwZXJDYXNlKCkpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgbmV3V29yZFswXSA9IG5ld1dvcmRbMF0udG9VcHBlckNhc2UoKVxuICAgIHJldHVybiBuZXdXb3JkLmpvaW4oJycpXG59XG5cblxuXG5cbiAgICBkMy5jc3YoXCJodHRwczovL2NvdmlkdHJhY2tpbmcuY29tL2FwaS92MS9zdGF0ZXMvY3VycmVudC5jc3ZcIiwgZnVuY3Rpb24gKHJhd0RhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmF3RGF0YSlcblxuXG4gICAgICAgIGxldCBzdGF0ZURhdGEgPSByYXdEYXRhW3N0YXRlSW5kZXhbXCJBS1wiXV1cbiAgICAgICAgXG4gICAgICAgIGxldCBkYXRhID0gW11cbiAgICAgICAgZm9yIChsZXQgW2QsIHZdIG9mIE9iamVjdC5lbnRyaWVzKHN0YXRlRGF0YSkpIHtcbiAgICAgICAgICAgIGlmIChkID09PSAncG9zaXRpdmUnIHx8IGQgPT09ICdkZWF0aCcgfHxcbiAgICAgICAgICAgICAgICBkID09PSAnaG9zcGl0YWxpemVkQ3VycmVudGx5JyB8fCBkID09PSAnaG9zcGl0YWxpemVkQ3VtdWxhdGl2ZScgfHxcbiAgICAgICAgICAgICAgICBkID09PSAnaW5JY3VDdXJyZW50bHknIHx8IGQgPT09ICdpbkljdUN1bXVsYXRpdmUnIHx8IGQgPT09ICdvblZlbnRpbGF0b3JDdXJyZW50bHknIHx8XG4gICAgICAgICAgICAgICAgZCA9PT0gJ29uVmVudGlsYXRvckN1bXVsYXRpdmUnIHx8IGQgPT09ICdyZWNvdmVyZWQnIHx8IGQgPT09ICdyZWNvdmVyZWQnIHx8XG4gICAgICAgICAgICAgICAgZCA9PT0gJ2hvc3BpdGFsaXplZCcpIHtcbiAgICAgICAgICAgICAgICBkID0gY2FwaXRhbGl6ZShkKVxuICAgICAgICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQodikpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaCh7IGNhdGVnb3J5OiBkLCB2YWx1ZTogK3BhcnNlSW50KHYpIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHggPSBkMy5zY2FsZUJhbmQoKVxuICAgICAgICAgICAgLnJhbmdlKFswLCB3aWR0aF0pXG4gICAgICAgICAgICAucGFkZGluZygwLjUpXG5cbiAgICAgICAgbGV0IHhBeGlzID0gc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcblxuICAgICAgICBsZXQgeSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgIC5yYW5nZShbaGVpZ2h0LCAwXSlcblxuXG4gICAgICAgIGxldCB5QXhpcyA9IHN2Zy5hcHBlbmQoJ2cnKVxuXG4gICAgICAgIHguZG9tYWluKGRhdGEubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLmNhdGVnb3J5IH0pKVxuXG4gICAgICAgIGxldCBtYXhZID0gZDMubWF4KGRhdGEsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnZhbHVlIH0pXG5cbiAgICAgICAgeS5kb21haW4oWzAsIChtYXhZICogMS4xKV0pXG5cbiAgICAgICAgY29uc29sZS5sb2coeC5iYW5kd2lkdGgoKSlcblxuICAgICAgICAvLyB5QXhpcy5jYWxsKGQzLmF4aXNMZWZ0KHkpKVxuICAgICAgICB5QXhpcy50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpXG5cbiAgICAgICAgLy8geEF4aXMuY2FsbChkMy5heGlzQm90dG9tKHgpKVxuICAgICAgICAvLyAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoLTAuMixcIiArIGhlaWdodCArIFwiKVwiKVxuICAgICAgICAvLyAgICAgLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAgICAgLy8gICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKC0xMCwwKXJvdGF0ZSgtNDUpXCIpXG4gICAgICAgIC8vICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAgICAgICAvLyAgICAgLmF0dHIoJ3gnLCAtOClcbiAgICAgICAgeEF4aXMudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgtMC4yLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoLTEwLDApcm90YXRlKC00NSlcIilcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAgICAgICAuYXR0cigneCcsIC04KVxuXG4gICAgICAgIGxldCBiYXIgPSBzdmcuc2VsZWN0QWxsKClcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgXG4gICAgICAgIGJhci5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFyXCIpXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHgoZC5jYXRlZ29yeSkgfSlcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgeC5iYW5kd2lkdGgoKSlcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCIjNjliM2EyXCIpICAgICAgICAgICAgXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gaGVpZ2h0IC0geSgwKSB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5KDApIH0pXG4gICAgICAgICAgICBcblxuICAgICAgICBiYXIuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHkoZC52YWx1ZSk7IH0pXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gaGVpZ2h0IC0geShkLnZhbHVlKTsgfSlcbiAgICAgICAgICAgIC5kZWxheShmdW5jdGlvbiAoZCwgaSkgeyBjb25zb2xlLmxvZyhpKTsgcmV0dXJuIChpICogMTAwKSB9KVxuXG4gICAgICAgIGJhci5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwidmFsdWVcIilcbiAgICAgICAgICAgIC5hdHRyKCd4JywgKGQpID0+IHgoZC5jYXRlZ29yeSkgKyB4LmJhbmR3aWR0aCgpIC8gMilcbiAgICAgICAgICAgIC5hdHRyKCd5JywgKGQpID0+IHkoZC52YWx1ZSkgLSAxMClcbiAgICAgICAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGAkeyhkLnZhbHVlKX1gfSlcbiAgICAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy8gc3ZnLnNlbGVjdEFsbChcIi5iYXJcIilcbiAgICAgICAgLy8gICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC8vICAgICAuZW50ZXIoKS5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgIC8vICAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFyXCIpXG4gICAgICAgIC8vICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC8vICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgLy8gICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geChkLmNhdGVnb3J5KSB9KVxuICAgICAgICAvLyAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5KGQudmFsdWUpIH0pXG4gICAgICAgIC8vICAgICAuYXR0cihcIndpZHRoXCIsIHguYmFuZHdpZHRoKCkpXG4gICAgICAgIC8vICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gaGVpZ2h0IC0geShkLnZhbHVlKSB9KVxuICAgICAgICAvLyAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIiM2OWIzYTJcIilcblxuXG5cblxuICAgICAgICBmdW5jdGlvbiBzZWxlY3RTdGF0ZShzZWxlY3RlZFN0YXRlKXsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBzdGF0ZURhdGEgPSByYXdEYXRhW3N0YXRlSW5kZXhbc2VsZWN0ZWRTdGF0ZV1dXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZURhdGEpXG4gICAgICAgICAgICBsZXQgZGF0YSA9IFtdXG4gICAgICAgICAgICBmb3IgKGxldCBbZCwgdl0gb2YgT2JqZWN0LmVudHJpZXMoc3RhdGVEYXRhKSkge1xuICAgICAgICAgICAgICAgIGlmIChkID09PSAncG9zaXRpdmUnIHx8IGQgPT09ICdkZWF0aCcgfHxcbiAgICAgICAgICAgICAgICAgICAgZCA9PT0gJ2hvc3BpdGFsaXplZEN1cnJlbnRseScgfHwgZCA9PT0gJ2hvc3BpdGFsaXplZEN1bXVsYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgIGQgPT09ICdpbkljdUN1cnJlbnRseScgfHwgZCA9PT0gJ2luSWN1Q3VtdWxhdGl2ZScgfHwgZCA9PT0gJ29uVmVudGlsYXRvckN1cnJlbnRseScgfHxcbiAgICAgICAgICAgICAgICAgICAgZCA9PT0gJ29uVmVudGlsYXRvckN1bXVsYXRpdmUnIHx8IGQgPT09ICdyZWNvdmVyZWQnIHx8IGQgPT09ICdyZWNvdmVyZWQnIHx8XG4gICAgICAgICAgICAgICAgICAgIGQgPT09ICdob3NwaXRhbGl6ZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGQgPSBjYXBpdGFsaXplKGQpXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQodikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goeyBjYXRlZ29yeTogZCwgdmFsdWU6ICtwYXJzZUludCh2KSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcblxuICAgICAgICAgICAgbGV0IHggPSBkMy5zY2FsZUJhbmQoKVxuICAgICAgICAgICAgICAgIC5yYW5nZShbMCwgd2lkdGhdKVxuICAgICAgICAgICAgICAgIC5wYWRkaW5nKDAuNSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgeC5kb21haW4oZGF0YS5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuY2F0ZWdvcnl9KSlcblxuICAgICAgICAgICAgbGV0IG1heFkgPSBkMy5tYXgoZGF0YSwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQudmFsdWUgfSlcblxuICAgICAgICAgICAgeS5kb21haW4oWzAsIChtYXhZICogMS4xKV0pXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHguYmFuZHdpZHRoKCkpXG5cbiAgICAgICAgICAgIHlBeGlzLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKVxuXG4gICAgICAgICAgICB4QXhpcy50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKC0wLjIsXCIgKyBoZWlnaHQgKyBcIilcIilcbiAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKC0xMCwwKXJvdGF0ZSgtNDUpXCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcbiAgICAgICAgICAgICAgICAuYXR0cigneCcsIC04KVxuXG4gICAgICAgICAgICAvLyBzdmcuc2VsZWN0QWxsKFwiLnZhbHVlXCIpLnJlbW92ZSgpXG4gICAgICAgICAgICAvLyBzdmcuc2VsZWN0QWxsKFwiLmJhclwiKS5yZW1vdmUoKS50cmFuc2l0aW9uKDEwMDApXG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIudmFsdWVcIilcbiAgICAgICAgICAgICAgICAucmVtb3ZlKClcblxuICAgICAgICAgICAgbGV0IHUgPSBzdmcuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgICAgICAgICAgICAgIC5kYXRhKGRhdGEpXG5cbiAgICAgICAgICAgIHUuZW50ZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJyZWN0XCIpIC8vIEFkZCBhIG5ldyByZWN0IGZvciBlYWNoIG5ldyBlbGVtZW50c1xuICAgICAgICAgICAgICAgIC5tZXJnZSh1KSAvLyBnZXQgdGhlIGFscmVhZHkgZXhpc3RpbmcgZWxlbWVudHMgYXMgd2VsbFxuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKCkgLy8gYW5kIGFwcGx5IGNoYW5nZXMgdG8gYWxsIG9mIHRoZW1cbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHgoZC5jYXRlZ29yeSk7IH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5KGQudmFsdWUpOyB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgeC5iYW5kd2lkdGgoKSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gaGVpZ2h0IC0geShkLnZhbHVlKTsgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCIjNjliM2EyXCIpXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGJhci5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwidmFsdWVcIilcbiAgICAgICAgICAgICAgICAuYXR0cigneCcsIChkKSA9PiB4KGQuY2F0ZWdvcnkpICsgeC5iYW5kd2lkdGgoKSAvIDIpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3knLCAoZCkgPT4geShkLnZhbHVlKSAtIDEwKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBgJHsoZC52YWx1ZSl9YCB9KVxuXG4gICAgICAgICAgICAvLyBkMy5zZWxlY3RBbGwoXCJnXCIpLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC8vICAgICAuYXR0cihcImNsYXNzXCIsIFwidmFsdWVcIilcbiAgICAgICAgICAgIC8vICAgICAuYXR0cigneCcsIChkKSA9PiB4KGQuY2F0ZWdvcnkpICsgeC5iYW5kd2lkdGgoKSAvIDIpXG4gICAgICAgICAgICAvLyAgICAgLmF0dHIoJ3knLCAoZCkgPT4geShkLnZhbHVlKSAtIDEwKVxuICAgICAgICAgICAgLy8gICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAgICAgLy8gICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBgJHsoZC52YWx1ZSl9YCB9KVxuXG4gICAgICAgICAgICAvLyBJZiBsZXNzIGdyb3VwIGluIHRoZSBuZXcgZGF0YXNldCwgSSBkZWxldGUgdGhlIG9uZXMgbm90IGluIHVzZSBhbnltb3JlXG4gICAgICAgICAgICB1XG4gICAgICAgICAgICAgICAgLmV4aXQoKVxuICAgICAgICAgICAgICAgIC5yZW1vdmUoKVxuICAgICAgICAgICAgLy8gc3ZnLnNlbGVjdEFsbChcIi5iYXJcIilcbiAgICAgICAgICAgIC8vICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLy8gICAgIC5lbnRlcigpLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgICAgIC8vICAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFyXCIpXG4gICAgICAgICAgICAvLyAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLy8gICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAgICAgLy8gICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geChkLmNhdGVnb3J5KX0pXG4gICAgICAgICAgICAvLyAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5KGQudmFsdWUpfSlcbiAgICAgICAgICAgIC8vICAgICAuYXR0cihcIndpZHRoXCIsIHguYmFuZHdpZHRoKCkpXG4gICAgICAgICAgICAvLyAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGhlaWdodCAtIHkoZC52YWx1ZSl9KVxuICAgICAgICAgICAgLy8gICAgIC5zdHlsZShcImZpbGxcIiwgXCIjODAwMDgwXCIpXG4gICAgICAgICAgICAgICAgXG5cblxuXG5cblxuXG5cblxuICAgICAgICB9XG5cbiAgICAgICAgZDMuc2VsZWN0KFwiI3NlbGVjdEJ1dHRvblwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gZDMuc2VsZWN0KHRoaXMpLnByb3BlcnR5KFwidmFsdWVcIilcbiAgICAgICAgICAgIHNlbGVjdFN0YXRlKHNlbGVjdGVkT3B0aW9uKVxuICAgICAgICB9KVxuICAgICAgICAvLyBzZWxlY3RTdGF0ZShcIk5ZXCIpXG4gICAgfSk7XG5cbiAgICBcbiAgIFxufSkiXSwic291cmNlUm9vdCI6IiJ9