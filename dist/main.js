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

var stateNames = {
  "AL": "Alabama",
  "AK": "Alaska",
  "AS": "American Samoa",
  "AZ": "Arizona",
  "AR": "Arkansas",
  "CA": "California",
  "CO": "Colorado",
  "CT": "Connecticut",
  "DE": "Delaware",
  "DC": "District Of Columbia",
  "FM": "Federated States Of Micronesia",
  "FL": "Florida",
  "GA": "Georgia",
  "GU": "Guam",
  "HI": "Hawaii",
  "ID": "Idaho",
  "IL": "Illinois",
  "IN": "Indiana",
  "IA": "Iowa",
  "KS": "Kansas",
  "KY": "Kentucky",
  "LA": "Louisiana",
  "ME": "Maine",
  "MH": "Marshall Islands",
  "MD": "Maryland",
  "MA": "Massachusetts",
  "MI": "Michigan",
  "MN": "Minnesota",
  "MS": "Mississippi",
  "MO": "Missouri",
  "MT": "Montana",
  "NE": "Nebraska",
  "NV": "Nevada",
  "NH": "New Hampshire",
  "NJ": "New Jersey",
  "NM": "New Mexico",
  "NY": "New York",
  "NC": "North Carolina",
  "ND": "North Dakota",
  "MP": "Northern Mariana Islands",
  "OH": "Ohio",
  "OK": "Oklahoma",
  "OR": "Oregon",
  "PW": "Palau",
  "PA": "Pennsylvania",
  "PR": "Puerto Rico",
  "RI": "Rhode Island",
  "SC": "South Carolina",
  "SD": "South Dakota",
  "TN": "Tennessee",
  "TX": "Texas",
  "UT": "Utah",
  "VT": "Vermont",
  "VI": "Virgin Islands",
  "VA": "Virginia",
  "WA": "Washington",
  "WV": "West Virginia",
  "WI": "Wisconsin",
  "WY": "Wyoming"
};
var stateNameArray = Object.keys(stateNames);
console.log(stateNameArray);
var margin = {
  top: 80,
  right: 180,
  bottom: 80,
  left: 180
},
    width = 2960 - margin.left - margin.right,
    height = 2500 - margin.top - margin.bottom;
var svg = d3.select("#data").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
document.addEventListener("DOMContentLoaded", function () {
  // const states = {};
  var states = []; // console.log(states)

  d3.csv("https://covidtracking.com/api/v1/states/current.csv", function (stateData) {
    for (var i = 0; i < stateData.length; i += 1) {
      var state = stateData[i];
      var name = state.state; // states[`${name}`] = {

      states.push({
        abreviation: name,
        name: stateNames[name],
        positive: parseInt(state.positive),
        negative: parseInt(state.negative),
        death: parseInt(state.death),
        totalTestResults: parseInt(state.totalTestResults),
        hospitalizedCurrently: parseInt(state.hospitalizedCurrently),
        hospitalizedCumulative: parseInt(state.hospitalizedCumulative),
        inIcuCurrently: parseInt(state.inIcuCurrently),
        inIcuCumulative: parseInt(state.inIcuCumulative),
        onVentilatorCurrently: parseInt(state.onVentilatorCurrently),
        onVentilatorCumulative: parseInt(state.onVentilatorCumulative),
        recovered: parseInt(state.recovered),
        hospitalized: parseInt(state.hospitalized)
      }); // console.log(states)
    }

    var data = states; // filter year
    // let data = data.filter(function (d) { return d.Year == '2012'; });

    console.log(data); // Get every column value

    var elements = Object.keys(data[0]).filter(function (d) {
      return d != "abreviation" & d != "name";
    });
    console.log(elements); // let selection = elements[0];
    // console.log(selection)
    // let pairs = 

    var y = d3.scale.linear().domain([0, d3.max(data, function (d) {
      return +d[selection];
    })]).range([height, 0]);
    var x = d3.scale.ordinal().domain(data.map(function (d) {
      return d.State;
    })).rangeBands([0, width]);
    var xAxis = d3.svg.axis().scale(x).orient("bottom");
    var yAxis = d3.svg.axis().scale(y).orient("left");
    svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis).selectAll("text").style("font-size", "8px").style("text-anchor", "end").attr("dx", "-.8em").attr("dy", "-.55em").attr("transform", "rotate(-90)");
    svg.append("g").attr("class", "y axis").call(yAxis);
    svg.selectAll("rectangle").data(data).enter().append("rect").attr("class", "rectangle").attr("width", width / data.length).attr("height", function (d) {
      return height - y(+d[selection]);
    }).attr("x", function (d, i) {
      return width / data.length * i;
    }).attr("y", function (d) {
      return y(+d[selection]);
    }).append("title").text(function (d) {
      return d.State + " : " + d[selection];
    });
    var selector = d3.select("#drop").append("select").attr("id", "dropdown").on("change", function (d) {
      selection = document.getElementById("dropdown");
      y.domain([0, d3.max(data, function (d) {
        return +d[selection.value];
      })]);
      yAxis.scale(y);
      d3.selectAll(".rectangle").transition().attr("height", function (d) {
        return height - y(+d[selection.value]);
      }).attr("x", function (d, i) {
        return width / data.length * i;
      }).attr("y", function (d) {
        return y(+d[selection.value]);
      }).ease("linear").select("title").text(function (d) {
        return d.State + " : " + d[selection.value];
      });
      d3.selectAll("g.y.axis").transition().call(yAxis);
    });
    selector.selectAll("option").data(elements).enter().append("option").attr("value", function (d) {
      return d;
    }).text(function (d) {
      return d;
    });
  });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInN0YXRlTmFtZXMiLCJzdGF0ZU5hbWVBcnJheSIsIk9iamVjdCIsImtleXMiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJzdmciLCJkMyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGF0ZXMiLCJjc3YiLCJzdGF0ZURhdGEiLCJpIiwibGVuZ3RoIiwic3RhdGUiLCJuYW1lIiwicHVzaCIsImFicmV2aWF0aW9uIiwicG9zaXRpdmUiLCJwYXJzZUludCIsIm5lZ2F0aXZlIiwiZGVhdGgiLCJ0b3RhbFRlc3RSZXN1bHRzIiwiaG9zcGl0YWxpemVkQ3VycmVudGx5IiwiaG9zcGl0YWxpemVkQ3VtdWxhdGl2ZSIsImluSWN1Q3VycmVudGx5IiwiaW5JY3VDdW11bGF0aXZlIiwib25WZW50aWxhdG9yQ3VycmVudGx5Iiwib25WZW50aWxhdG9yQ3VtdWxhdGl2ZSIsInJlY292ZXJlZCIsImhvc3BpdGFsaXplZCIsImRhdGEiLCJlbGVtZW50cyIsImZpbHRlciIsImQiLCJ5Iiwic2NhbGUiLCJsaW5lYXIiLCJkb21haW4iLCJtYXgiLCJzZWxlY3Rpb24iLCJyYW5nZSIsIngiLCJvcmRpbmFsIiwibWFwIiwiU3RhdGUiLCJyYW5nZUJhbmRzIiwieEF4aXMiLCJheGlzIiwib3JpZW50IiwieUF4aXMiLCJjYWxsIiwic2VsZWN0QWxsIiwic3R5bGUiLCJlbnRlciIsInRleHQiLCJzZWxlY3RvciIsIm9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInRyYW5zaXRpb24iLCJlYXNlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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VjtBQUlILEtBakNVLENBQWY7QUFtQ0FNLFlBQVEsQ0FBQ0osU0FBVCxDQUFtQixRQUFuQixFQUNLckIsSUFETCxDQUNVQyxRQURWLEVBRUtzQixLQUZMLEdBRWFqRCxNQUZiLENBRW9CLFFBRnBCLEVBR0tDLElBSEwsQ0FHVSxPQUhWLEVBR21CLFVBQVU0QixDQUFWLEVBQWE7QUFDeEIsYUFBT0EsQ0FBUDtBQUNILEtBTEwsRUFNS3FCLElBTkwsQ0FNVSxVQUFVckIsQ0FBVixFQUFhO0FBQ2YsYUFBT0EsQ0FBUDtBQUNILEtBUkw7QUFTSCxHQTFJRDtBQWdKQyxDQXpKRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IHN0YXRlTmFtZXMgPSB7XG4gICAgXCJBTFwiOiBcIkFsYWJhbWFcIixcbiAgICBcIkFLXCI6IFwiQWxhc2thXCIsXG4gICAgXCJBU1wiOiBcIkFtZXJpY2FuIFNhbW9hXCIsXG4gICAgXCJBWlwiOiBcIkFyaXpvbmFcIixcbiAgICBcIkFSXCI6IFwiQXJrYW5zYXNcIixcbiAgICBcIkNBXCI6IFwiQ2FsaWZvcm5pYVwiLFxuICAgIFwiQ09cIjogXCJDb2xvcmFkb1wiLFxuICAgIFwiQ1RcIjogXCJDb25uZWN0aWN1dFwiLFxuICAgIFwiREVcIjogXCJEZWxhd2FyZVwiLFxuICAgIFwiRENcIjogXCJEaXN0cmljdCBPZiBDb2x1bWJpYVwiLFxuICAgIFwiRk1cIjogXCJGZWRlcmF0ZWQgU3RhdGVzIE9mIE1pY3JvbmVzaWFcIixcbiAgICBcIkZMXCI6IFwiRmxvcmlkYVwiLFxuICAgIFwiR0FcIjogXCJHZW9yZ2lhXCIsXG4gICAgXCJHVVwiOiBcIkd1YW1cIixcbiAgICBcIkhJXCI6IFwiSGF3YWlpXCIsXG4gICAgXCJJRFwiOiBcIklkYWhvXCIsXG4gICAgXCJJTFwiOiBcIklsbGlub2lzXCIsXG4gICAgXCJJTlwiOiBcIkluZGlhbmFcIixcbiAgICBcIklBXCI6IFwiSW93YVwiLFxuICAgIFwiS1NcIjogXCJLYW5zYXNcIixcbiAgICBcIktZXCI6IFwiS2VudHVja3lcIixcbiAgICBcIkxBXCI6IFwiTG91aXNpYW5hXCIsXG4gICAgXCJNRVwiOiBcIk1haW5lXCIsXG4gICAgXCJNSFwiOiBcIk1hcnNoYWxsIElzbGFuZHNcIixcbiAgICBcIk1EXCI6IFwiTWFyeWxhbmRcIixcbiAgICBcIk1BXCI6IFwiTWFzc2FjaHVzZXR0c1wiLFxuICAgIFwiTUlcIjogXCJNaWNoaWdhblwiLFxuICAgIFwiTU5cIjogXCJNaW5uZXNvdGFcIixcbiAgICBcIk1TXCI6IFwiTWlzc2lzc2lwcGlcIixcbiAgICBcIk1PXCI6IFwiTWlzc291cmlcIixcbiAgICBcIk1UXCI6IFwiTW9udGFuYVwiLFxuICAgIFwiTkVcIjogXCJOZWJyYXNrYVwiLFxuICAgIFwiTlZcIjogXCJOZXZhZGFcIixcbiAgICBcIk5IXCI6IFwiTmV3IEhhbXBzaGlyZVwiLFxuICAgIFwiTkpcIjogXCJOZXcgSmVyc2V5XCIsXG4gICAgXCJOTVwiOiBcIk5ldyBNZXhpY29cIixcbiAgICBcIk5ZXCI6IFwiTmV3IFlvcmtcIixcbiAgICBcIk5DXCI6IFwiTm9ydGggQ2Fyb2xpbmFcIixcbiAgICBcIk5EXCI6IFwiTm9ydGggRGFrb3RhXCIsXG4gICAgXCJNUFwiOiBcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kc1wiLFxuICAgIFwiT0hcIjogXCJPaGlvXCIsXG4gICAgXCJPS1wiOiBcIk9rbGFob21hXCIsXG4gICAgXCJPUlwiOiBcIk9yZWdvblwiLFxuICAgIFwiUFdcIjogXCJQYWxhdVwiLFxuICAgIFwiUEFcIjogXCJQZW5uc3lsdmFuaWFcIixcbiAgICBcIlBSXCI6IFwiUHVlcnRvIFJpY29cIixcbiAgICBcIlJJXCI6IFwiUmhvZGUgSXNsYW5kXCIsXG4gICAgXCJTQ1wiOiBcIlNvdXRoIENhcm9saW5hXCIsXG4gICAgXCJTRFwiOiBcIlNvdXRoIERha290YVwiLFxuICAgIFwiVE5cIjogXCJUZW5uZXNzZWVcIixcbiAgICBcIlRYXCI6IFwiVGV4YXNcIixcbiAgICBcIlVUXCI6IFwiVXRhaFwiLFxuICAgIFwiVlRcIjogXCJWZXJtb250XCIsXG4gICAgXCJWSVwiOiBcIlZpcmdpbiBJc2xhbmRzXCIsXG4gICAgXCJWQVwiOiBcIlZpcmdpbmlhXCIsXG4gICAgXCJXQVwiOiBcIldhc2hpbmd0b25cIixcbiAgICBcIldWXCI6IFwiV2VzdCBWaXJnaW5pYVwiLFxuICAgIFwiV0lcIjogXCJXaXNjb25zaW5cIixcbiAgICBcIldZXCI6IFwiV3lvbWluZ1wiXG59XG5cbmxldCBzdGF0ZU5hbWVBcnJheSA9IE9iamVjdC5rZXlzKHN0YXRlTmFtZXMpO1xuY29uc29sZS5sb2coc3RhdGVOYW1lQXJyYXkpXG5cbmxldCBtYXJnaW4gPSB7IHRvcDogODAsIHJpZ2h0OiAxODAsIGJvdHRvbTogODAsIGxlZnQ6IDE4MCB9LFxuICAgIHdpZHRoID0gMjk2MCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0LFxuICAgIGhlaWdodCA9IDI1MDAgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxubGV0IHN2ZyA9IGQzLnNlbGVjdChcIiNkYXRhXCIpLmFwcGVuZChcInN2Z1wiKVxuICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcbiAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSlcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuXG5cbi8vIGNvbnN0IHN0YXRlcyA9IHt9O1xuY29uc3Qgc3RhdGVzID0gW107XG4vLyBjb25zb2xlLmxvZyhzdGF0ZXMpXG5cblxuZDMuY3N2KFwiaHR0cHM6Ly9jb3ZpZHRyYWNraW5nLmNvbS9hcGkvdjEvc3RhdGVzL2N1cnJlbnQuY3N2XCIsIGZ1bmN0aW9uIChzdGF0ZURhdGEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlRGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHN0YXRlRGF0YVtpXTtcbiAgICAgICAgY29uc3QgbmFtZSA9IHN0YXRlLnN0YXRlO1xuICAgICAgICAvLyBzdGF0ZXNbYCR7bmFtZX1gXSA9IHtcbiAgICAgICAgc3RhdGVzLnB1c2goIHtcbiAgICAgICAgICAgIGFicmV2aWF0aW9uOiBuYW1lLFxuICAgICAgICAgICAgbmFtZTogc3RhdGVOYW1lc1tuYW1lXSxcbiAgICAgICAgICAgIHBvc2l0aXZlOiBwYXJzZUludChzdGF0ZS5wb3NpdGl2ZSksXG4gICAgICAgICAgICBuZWdhdGl2ZTogcGFyc2VJbnQoc3RhdGUubmVnYXRpdmUpLFxuICAgICAgICAgICAgZGVhdGg6IHBhcnNlSW50KHN0YXRlLmRlYXRoKSxcbiAgICAgICAgICAgIHRvdGFsVGVzdFJlc3VsdHM6IHBhcnNlSW50KHN0YXRlLnRvdGFsVGVzdFJlc3VsdHMpLFxuICAgICAgICAgICAgaG9zcGl0YWxpemVkQ3VycmVudGx5OiBwYXJzZUludChzdGF0ZS5ob3NwaXRhbGl6ZWRDdXJyZW50bHkpLFxuICAgICAgICAgICAgaG9zcGl0YWxpemVkQ3VtdWxhdGl2ZTogcGFyc2VJbnQoc3RhdGUuaG9zcGl0YWxpemVkQ3VtdWxhdGl2ZSksXG4gICAgICAgICAgICBpbkljdUN1cnJlbnRseTogcGFyc2VJbnQoc3RhdGUuaW5JY3VDdXJyZW50bHkpLFxuICAgICAgICAgICAgaW5JY3VDdW11bGF0aXZlOiBwYXJzZUludChzdGF0ZS5pbkljdUN1bXVsYXRpdmUpLFxuICAgICAgICAgICAgb25WZW50aWxhdG9yQ3VycmVudGx5OiBwYXJzZUludChzdGF0ZS5vblZlbnRpbGF0b3JDdXJyZW50bHkpLFxuICAgICAgICAgICAgb25WZW50aWxhdG9yQ3VtdWxhdGl2ZTogcGFyc2VJbnQoc3RhdGUub25WZW50aWxhdG9yQ3VtdWxhdGl2ZSksXG4gICAgICAgICAgICByZWNvdmVyZWQ6IHBhcnNlSW50KHN0YXRlLnJlY292ZXJlZCksXG4gICAgICAgICAgICBob3NwaXRhbGl6ZWQ6IHBhcnNlSW50KHN0YXRlLmhvc3BpdGFsaXplZClcbiAgICAgICAgfSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGVzKVxuICAgIH1cblxuICAgIGxldCBkYXRhID0gc3RhdGVzO1xuICAgIC8vIGZpbHRlciB5ZWFyXG4gICAgLy8gbGV0IGRhdGEgPSBkYXRhLmZpbHRlcihmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5ZZWFyID09ICcyMDEyJzsgfSk7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAvLyBHZXQgZXZlcnkgY29sdW1uIHZhbHVlXG4gICAgbGV0IGVsZW1lbnRzID0gT2JqZWN0LmtleXMoZGF0YVswXSlcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuICgoZCAhPSBcImFicmV2aWF0aW9uXCIpICYgKGQgIT0gXCJuYW1lXCIpKTtcbiAgICAgICAgfSk7XG4gICAgY29uc29sZS5sb2coZWxlbWVudHMpXG4gICAgLy8gbGV0IHNlbGVjdGlvbiA9IGVsZW1lbnRzWzBdO1xuICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGlvbilcblxuICAgIC8vIGxldCBwYWlycyA9IFxuICAgIFxuICAgIGxldCB5ID0gZDMuc2NhbGUubGluZWFyKClcbiAgICAgICAgLmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gK2Rbc2VsZWN0aW9uXTtcbiAgICAgICAgfSldKVxuICAgICAgICAucmFuZ2UoW2hlaWdodCwgMF0pO1xuXG4gICAgbGV0IHggPSBkMy5zY2FsZS5vcmRpbmFsKClcbiAgICAgICAgLmRvbWFpbihkYXRhLm1hcChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5TdGF0ZTsgfSkpXG4gICAgICAgIC5yYW5nZUJhbmRzKFswLCB3aWR0aF0pO1xuXG5cbiAgICBsZXQgeEF4aXMgPSBkMy5zdmcuYXhpcygpXG4gICAgICAgIC5zY2FsZSh4KVxuICAgICAgICAub3JpZW50KFwiYm90dG9tXCIpO1xuXG4gICAgbGV0IHlBeGlzID0gZDMuc3ZnLmF4aXMoKVxuICAgICAgICAuc2NhbGUoeSlcbiAgICAgICAgLm9yaWVudChcImxlZnRcIik7XG5cbiAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieCBheGlzXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcbiAgICAgICAgLmNhbGwoeEF4aXMpXG4gICAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG4gICAgICAgIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjhweFwiKVxuICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAgICAgICAuYXR0cihcImR4XCIsIFwiLS44ZW1cIilcbiAgICAgICAgLmF0dHIoXCJkeVwiLCBcIi0uNTVlbVwiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpO1xuXG5cbiAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieSBheGlzXCIpXG4gICAgICAgIC5jYWxsKHlBeGlzKTtcblxuICAgIHN2Zy5zZWxlY3RBbGwoXCJyZWN0YW5nbGVcIilcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInJlY3RhbmdsZVwiKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoIC8gZGF0YS5sZW5ndGgpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gaGVpZ2h0IC0geSgrZFtzZWxlY3Rpb25dKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gKHdpZHRoIC8gZGF0YS5sZW5ndGgpICogaTtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4geSgrZFtzZWxlY3Rpb25dKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmFwcGVuZChcInRpdGxlXCIpXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZC5TdGF0ZSArIFwiIDogXCIgKyBkW3NlbGVjdGlvbl07XG4gICAgICAgIH0pO1xuXG4gICAgbGV0IHNlbGVjdG9yID0gZDMuc2VsZWN0KFwiI2Ryb3BcIilcbiAgICAgICAgLmFwcGVuZChcInNlbGVjdFwiKVxuICAgICAgICAuYXR0cihcImlkXCIsIFwiZHJvcGRvd25cIilcbiAgICAgICAgLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBzZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duXCIpO1xuXG4gICAgICAgICAgICB5LmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICtkW3NlbGVjdGlvbi52YWx1ZV07XG4gICAgICAgICAgICB9KV0pO1xuXG4gICAgICAgICAgICB5QXhpcy5zY2FsZSh5KTtcblxuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLnJlY3RhbmdsZVwiKVxuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGVpZ2h0IC0geSgrZFtzZWxlY3Rpb24udmFsdWVdKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHdpZHRoIC8gZGF0YS5sZW5ndGgpICogaTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geSgrZFtzZWxlY3Rpb24udmFsdWVdKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5lYXNlKFwibGluZWFyXCIpXG4gICAgICAgICAgICAgICAgLnNlbGVjdChcInRpdGxlXCIpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQuU3RhdGUgKyBcIiA6IFwiICsgZFtzZWxlY3Rpb24udmFsdWVdO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCJnLnkuYXhpc1wiKVxuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuY2FsbCh5QXhpcyk7XG5cbiAgICAgICAgfSk7XG5cbiAgICBzZWxlY3Rvci5zZWxlY3RBbGwoXCJvcHRpb25cIilcbiAgICAgICAgLmRhdGEoZWxlbWVudHMpXG4gICAgICAgIC5lbnRlcigpLmFwcGVuZChcIm9wdGlvblwiKVxuICAgICAgICAuYXR0cihcInZhbHVlXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfSlcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICB9KVxufVxuXG4pO1xuXG5cblxufSkiXSwic291cmNlUm9vdCI6IiJ9