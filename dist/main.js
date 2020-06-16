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
var svg = d3.select("#data").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")"); // document.addEventListener("DOMContentLoaded", () => {
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
  // let y = d3.scale.linear()
  //     .domain([0, d3.max(data, function (d) {
  //         return +d[selection];
  //     })])
  //     .range([height, 0]);
  // let x = d3.scale.ordinal()
  //     .domain(data.map(function (d) { return d.State; }))
  //     .rangeBands([0, width]);
  // let xAxis = d3.svg.axis()
  //     .scale(x)
  //     .orient("bottom");
  // let yAxis = d3.svg.axis()
  //     .scale(y)
  //     .orient("left");
  // svg.append("g")
  //     .attr("class", "x axis")
  //     .attr("transform", "translate(0," + height + ")")
  //     .call(xAxis)
  //     .selectAll("text")
  //     .style("font-size", "8px")
  //     .style("text-anchor", "end")
  //     .attr("dx", "-.8em")
  //     .attr("dy", "-.55em")
  //     .attr("transform", "rotate(-90)");
  // svg.append("g")
  //     .attr("class", "y axis")
  //     .call(yAxis);
  // svg.selectAll("rectangle")
  //     .data(data)
  //     .enter()
  //     .append("rect")
  //     .attr("class", "rectangle")
  //     .attr("width", width / data.length)
  //     .attr("height", function (d) {
  //         return height - y(+d[selection]);
  //     })
  //     .attr("x", function (d, i) {
  //         return (width / data.length) * i;
  //     })
  //     .attr("y", function (d) {
  //         return y(+d[selection]);
  //     })
  //     .append("title")
  //     .text(function (d) {
  //         return d.State + " : " + d[selection];
  //     });
  // let selector = d3.select("#drop")
  //     .append("select")
  //     .attr("id", "dropdown")
  //     .on("change", function (d) {
  //         selection = document.getElementById("dropdown");
  //         y.domain([0, d3.max(data, function (d) {
  //             return +d[selection.value];
  //         })]);
  //         yAxis.scale(y);
  //         d3.selectAll(".rectangle")
  //             .transition()
  //             .attr("height", function (d) {
  //                 return height - y(+d[selection.value]);
  //             })
  //             .attr("x", function (d, i) {
  //                 return (width / data.length) * i;
  //             })
  //             .attr("y", function (d) {
  //                 return y(+d[selection.value]);
  //             })
  //             .ease("linear")
  //             .select("title")
  //             .text(function (d) {
  //                 return d.State + " : " + d[selection.value];
  //             });
  //         d3.selectAll("g.y.axis")
  //             .transition()
  //             .call(yAxis);
  //     });
  // selector.selectAll("option")
  //     .data(elements)
  //     .enter().append("option")
  //     .attr("value", function (d) {
  //         return d;
  //     })
  //     .text(function (d) {
  //         return d;
  //     })
}); // })

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInN0YXRlTmFtZXMiLCJzdGF0ZU5hbWVBcnJheSIsIk9iamVjdCIsImtleXMiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJzdmciLCJkMyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJzdGF0ZXMiLCJjc3YiLCJzdGF0ZURhdGEiLCJpIiwibGVuZ3RoIiwic3RhdGUiLCJuYW1lIiwicHVzaCIsImFicmV2aWF0aW9uIiwicG9zaXRpdmUiLCJwYXJzZUludCIsIm5lZ2F0aXZlIiwiZGVhdGgiLCJ0b3RhbFRlc3RSZXN1bHRzIiwiaG9zcGl0YWxpemVkQ3VycmVudGx5IiwiaG9zcGl0YWxpemVkQ3VtdWxhdGl2ZSIsImluSWN1Q3VycmVudGx5IiwiaW5JY3VDdW11bGF0aXZlIiwib25WZW50aWxhdG9yQ3VycmVudGx5Iiwib25WZW50aWxhdG9yQ3VtdWxhdGl2ZSIsInJlY292ZXJlZCIsImhvc3BpdGFsaXplZCIsImRhdGEiLCJlbGVtZW50cyIsImZpbHRlciIsImQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5Qyxp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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxDQTFJRCxFLENBZ0pBLEsiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3Qgc3RhdGVOYW1lcyA9IHtcbiAgICBcIkFMXCI6IFwiQWxhYmFtYVwiLFxuICAgIFwiQUtcIjogXCJBbGFza2FcIixcbiAgICBcIkFTXCI6IFwiQW1lcmljYW4gU2Ftb2FcIixcbiAgICBcIkFaXCI6IFwiQXJpem9uYVwiLFxuICAgIFwiQVJcIjogXCJBcmthbnNhc1wiLFxuICAgIFwiQ0FcIjogXCJDYWxpZm9ybmlhXCIsXG4gICAgXCJDT1wiOiBcIkNvbG9yYWRvXCIsXG4gICAgXCJDVFwiOiBcIkNvbm5lY3RpY3V0XCIsXG4gICAgXCJERVwiOiBcIkRlbGF3YXJlXCIsXG4gICAgXCJEQ1wiOiBcIkRpc3RyaWN0IE9mIENvbHVtYmlhXCIsXG4gICAgXCJGTVwiOiBcIkZlZGVyYXRlZCBTdGF0ZXMgT2YgTWljcm9uZXNpYVwiLFxuICAgIFwiRkxcIjogXCJGbG9yaWRhXCIsXG4gICAgXCJHQVwiOiBcIkdlb3JnaWFcIixcbiAgICBcIkdVXCI6IFwiR3VhbVwiLFxuICAgIFwiSElcIjogXCJIYXdhaWlcIixcbiAgICBcIklEXCI6IFwiSWRhaG9cIixcbiAgICBcIklMXCI6IFwiSWxsaW5vaXNcIixcbiAgICBcIklOXCI6IFwiSW5kaWFuYVwiLFxuICAgIFwiSUFcIjogXCJJb3dhXCIsXG4gICAgXCJLU1wiOiBcIkthbnNhc1wiLFxuICAgIFwiS1lcIjogXCJLZW50dWNreVwiLFxuICAgIFwiTEFcIjogXCJMb3Vpc2lhbmFcIixcbiAgICBcIk1FXCI6IFwiTWFpbmVcIixcbiAgICBcIk1IXCI6IFwiTWFyc2hhbGwgSXNsYW5kc1wiLFxuICAgIFwiTURcIjogXCJNYXJ5bGFuZFwiLFxuICAgIFwiTUFcIjogXCJNYXNzYWNodXNldHRzXCIsXG4gICAgXCJNSVwiOiBcIk1pY2hpZ2FuXCIsXG4gICAgXCJNTlwiOiBcIk1pbm5lc290YVwiLFxuICAgIFwiTVNcIjogXCJNaXNzaXNzaXBwaVwiLFxuICAgIFwiTU9cIjogXCJNaXNzb3VyaVwiLFxuICAgIFwiTVRcIjogXCJNb250YW5hXCIsXG4gICAgXCJORVwiOiBcIk5lYnJhc2thXCIsXG4gICAgXCJOVlwiOiBcIk5ldmFkYVwiLFxuICAgIFwiTkhcIjogXCJOZXcgSGFtcHNoaXJlXCIsXG4gICAgXCJOSlwiOiBcIk5ldyBKZXJzZXlcIixcbiAgICBcIk5NXCI6IFwiTmV3IE1leGljb1wiLFxuICAgIFwiTllcIjogXCJOZXcgWW9ya1wiLFxuICAgIFwiTkNcIjogXCJOb3J0aCBDYXJvbGluYVwiLFxuICAgIFwiTkRcIjogXCJOb3J0aCBEYWtvdGFcIixcbiAgICBcIk1QXCI6IFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsXG4gICAgXCJPSFwiOiBcIk9oaW9cIixcbiAgICBcIk9LXCI6IFwiT2tsYWhvbWFcIixcbiAgICBcIk9SXCI6IFwiT3JlZ29uXCIsXG4gICAgXCJQV1wiOiBcIlBhbGF1XCIsXG4gICAgXCJQQVwiOiBcIlBlbm5zeWx2YW5pYVwiLFxuICAgIFwiUFJcIjogXCJQdWVydG8gUmljb1wiLFxuICAgIFwiUklcIjogXCJSaG9kZSBJc2xhbmRcIixcbiAgICBcIlNDXCI6IFwiU291dGggQ2Fyb2xpbmFcIixcbiAgICBcIlNEXCI6IFwiU291dGggRGFrb3RhXCIsXG4gICAgXCJUTlwiOiBcIlRlbm5lc3NlZVwiLFxuICAgIFwiVFhcIjogXCJUZXhhc1wiLFxuICAgIFwiVVRcIjogXCJVdGFoXCIsXG4gICAgXCJWVFwiOiBcIlZlcm1vbnRcIixcbiAgICBcIlZJXCI6IFwiVmlyZ2luIElzbGFuZHNcIixcbiAgICBcIlZBXCI6IFwiVmlyZ2luaWFcIixcbiAgICBcIldBXCI6IFwiV2FzaGluZ3RvblwiLFxuICAgIFwiV1ZcIjogXCJXZXN0IFZpcmdpbmlhXCIsXG4gICAgXCJXSVwiOiBcIldpc2NvbnNpblwiLFxuICAgIFwiV1lcIjogXCJXeW9taW5nXCJcbn1cblxubGV0IHN0YXRlTmFtZUFycmF5ID0gT2JqZWN0LmtleXMoc3RhdGVOYW1lcyk7XG5jb25zb2xlLmxvZyhzdGF0ZU5hbWVBcnJheSlcblxubGV0IG1hcmdpbiA9IHsgdG9wOiA4MCwgcmlnaHQ6IDE4MCwgYm90dG9tOiA4MCwgbGVmdDogMTgwIH0sXG4gICAgd2lkdGggPSAyOTYwIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQsXG4gICAgaGVpZ2h0ID0gMjUwMCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG5sZXQgc3ZnID0gZDMuc2VsZWN0KFwiI2RhdGFcIikuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKVxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXG5cblxuLy8gY29uc3Qgc3RhdGVzID0ge307XG5jb25zdCBzdGF0ZXMgPSBbXTtcbi8vIGNvbnNvbGUubG9nKHN0YXRlcylcblxuXG5kMy5jc3YoXCJodHRwczovL2NvdmlkdHJhY2tpbmcuY29tL2FwaS92MS9zdGF0ZXMvY3VycmVudC5jc3ZcIiwgZnVuY3Rpb24gKHN0YXRlRGF0YSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGVEYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gc3RhdGVEYXRhW2ldO1xuICAgICAgICBjb25zdCBuYW1lID0gc3RhdGUuc3RhdGU7XG4gICAgICAgIC8vIHN0YXRlc1tgJHtuYW1lfWBdID0ge1xuICAgICAgICBzdGF0ZXMucHVzaCgge1xuICAgICAgICAgICAgYWJyZXZpYXRpb246IG5hbWUsXG4gICAgICAgICAgICBuYW1lOiBzdGF0ZU5hbWVzW25hbWVdLFxuICAgICAgICAgICAgcG9zaXRpdmU6IHBhcnNlSW50KHN0YXRlLnBvc2l0aXZlKSxcbiAgICAgICAgICAgIG5lZ2F0aXZlOiBwYXJzZUludChzdGF0ZS5uZWdhdGl2ZSksXG4gICAgICAgICAgICBkZWF0aDogcGFyc2VJbnQoc3RhdGUuZGVhdGgpLFxuICAgICAgICAgICAgdG90YWxUZXN0UmVzdWx0czogcGFyc2VJbnQoc3RhdGUudG90YWxUZXN0UmVzdWx0cyksXG4gICAgICAgICAgICBob3NwaXRhbGl6ZWRDdXJyZW50bHk6IHBhcnNlSW50KHN0YXRlLmhvc3BpdGFsaXplZEN1cnJlbnRseSksXG4gICAgICAgICAgICBob3NwaXRhbGl6ZWRDdW11bGF0aXZlOiBwYXJzZUludChzdGF0ZS5ob3NwaXRhbGl6ZWRDdW11bGF0aXZlKSxcbiAgICAgICAgICAgIGluSWN1Q3VycmVudGx5OiBwYXJzZUludChzdGF0ZS5pbkljdUN1cnJlbnRseSksXG4gICAgICAgICAgICBpbkljdUN1bXVsYXRpdmU6IHBhcnNlSW50KHN0YXRlLmluSWN1Q3VtdWxhdGl2ZSksXG4gICAgICAgICAgICBvblZlbnRpbGF0b3JDdXJyZW50bHk6IHBhcnNlSW50KHN0YXRlLm9uVmVudGlsYXRvckN1cnJlbnRseSksXG4gICAgICAgICAgICBvblZlbnRpbGF0b3JDdW11bGF0aXZlOiBwYXJzZUludChzdGF0ZS5vblZlbnRpbGF0b3JDdW11bGF0aXZlKSxcbiAgICAgICAgICAgIHJlY292ZXJlZDogcGFyc2VJbnQoc3RhdGUucmVjb3ZlcmVkKSxcbiAgICAgICAgICAgIGhvc3BpdGFsaXplZDogcGFyc2VJbnQoc3RhdGUuaG9zcGl0YWxpemVkKVxuICAgICAgICB9KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZXMpXG4gICAgfVxuXG4gICAgbGV0IGRhdGEgPSBzdGF0ZXM7XG4gICAgLy8gZmlsdGVyIHllYXJcbiAgICAvLyBsZXQgZGF0YSA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLlllYXIgPT0gJzIwMTInOyB9KTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIC8vIEdldCBldmVyeSBjb2x1bW4gdmFsdWVcbiAgICBsZXQgZWxlbWVudHMgPSBPYmplY3Qua2V5cyhkYXRhWzBdKVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gKChkICE9IFwiYWJyZXZpYXRpb25cIikgJiAoZCAhPSBcIm5hbWVcIikpO1xuICAgICAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50cylcbiAgICAvLyBsZXQgc2VsZWN0aW9uID0gZWxlbWVudHNbMF07XG4gICAgLy8gY29uc29sZS5sb2coc2VsZWN0aW9uKVxuXG4gICAgLy8gbGV0IHBhaXJzID0gXG4gICAgXG4gICAgLy8gbGV0IHkgPSBkMy5zY2FsZS5saW5lYXIoKVxuICAgIC8vICAgICAuZG9tYWluKFswLCBkMy5tYXgoZGF0YSwgZnVuY3Rpb24gKGQpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiArZFtzZWxlY3Rpb25dO1xuICAgIC8vICAgICB9KV0pXG4gICAgLy8gICAgIC5yYW5nZShbaGVpZ2h0LCAwXSk7XG5cbiAgICAvLyBsZXQgeCA9IGQzLnNjYWxlLm9yZGluYWwoKVxuICAgIC8vICAgICAuZG9tYWluKGRhdGEubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLlN0YXRlOyB9KSlcbiAgICAvLyAgICAgLnJhbmdlQmFuZHMoWzAsIHdpZHRoXSk7XG5cblxuICAgIC8vIGxldCB4QXhpcyA9IGQzLnN2Zy5heGlzKClcbiAgICAvLyAgICAgLnNjYWxlKHgpXG4gICAgLy8gICAgIC5vcmllbnQoXCJib3R0b21cIik7XG5cbiAgICAvLyBsZXQgeUF4aXMgPSBkMy5zdmcuYXhpcygpXG4gICAgLy8gICAgIC5zY2FsZSh5KVxuICAgIC8vICAgICAub3JpZW50KFwibGVmdFwiKTtcblxuICAgIC8vIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgLy8gICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4IGF4aXNcIilcbiAgICAvLyAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxuICAgIC8vICAgICAuY2FsbCh4QXhpcylcbiAgICAvLyAgICAgLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAvLyAgICAgLnN0eWxlKFwiZm9udC1zaXplXCIsIFwiOHB4XCIpXG4gICAgLy8gICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgLy8gICAgIC5hdHRyKFwiZHhcIiwgXCItLjhlbVwiKVxuICAgIC8vICAgICAuYXR0cihcImR5XCIsIFwiLS41NWVtXCIpXG4gICAgLy8gICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIik7XG5cblxuICAgIC8vIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgLy8gICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5IGF4aXNcIilcbiAgICAvLyAgICAgLmNhbGwoeUF4aXMpO1xuXG4gICAgLy8gc3ZnLnNlbGVjdEFsbChcInJlY3RhbmdsZVwiKVxuICAgIC8vICAgICAuZGF0YShkYXRhKVxuICAgIC8vICAgICAuZW50ZXIoKVxuICAgIC8vICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgIC8vICAgICAuYXR0cihcImNsYXNzXCIsIFwicmVjdGFuZ2xlXCIpXG4gICAgLy8gICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggLyBkYXRhLmxlbmd0aClcbiAgICAvLyAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiBoZWlnaHQgLSB5KCtkW3NlbGVjdGlvbl0pO1xuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiAod2lkdGggLyBkYXRhLmxlbmd0aCkgKiBpO1xuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiB5KCtkW3NlbGVjdGlvbl0pO1xuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAuYXBwZW5kKFwidGl0bGVcIilcbiAgICAvLyAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiBkLlN0YXRlICsgXCIgOiBcIiArIGRbc2VsZWN0aW9uXTtcbiAgICAvLyAgICAgfSk7XG5cbiAgICAvLyBsZXQgc2VsZWN0b3IgPSBkMy5zZWxlY3QoXCIjZHJvcFwiKVxuICAgIC8vICAgICAuYXBwZW5kKFwic2VsZWN0XCIpXG4gICAgLy8gICAgIC5hdHRyKFwiaWRcIiwgXCJkcm9wZG93blwiKVxuICAgIC8vICAgICAub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAvLyAgICAgICAgIHNlbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd25cIik7XG5cbiAgICAvLyAgICAgICAgIHkuZG9tYWluKFswLCBkMy5tYXgoZGF0YSwgZnVuY3Rpb24gKGQpIHtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gK2Rbc2VsZWN0aW9uLnZhbHVlXTtcbiAgICAvLyAgICAgICAgIH0pXSk7XG5cbiAgICAvLyAgICAgICAgIHlBeGlzLnNjYWxlKHkpO1xuXG4gICAgLy8gICAgICAgICBkMy5zZWxlY3RBbGwoXCIucmVjdGFuZ2xlXCIpXG4gICAgLy8gICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgIC8vICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiBoZWlnaHQgLSB5KCtkW3NlbGVjdGlvbi52YWx1ZV0pO1xuICAgIC8vICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiAod2lkdGggLyBkYXRhLmxlbmd0aCkgKiBpO1xuICAgIC8vICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiB5KCtkW3NlbGVjdGlvbi52YWx1ZV0pO1xuICAgIC8vICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAgICAgLmVhc2UoXCJsaW5lYXJcIilcbiAgICAvLyAgICAgICAgICAgICAuc2VsZWN0KFwidGl0bGVcIilcbiAgICAvLyAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gZC5TdGF0ZSArIFwiIDogXCIgKyBkW3NlbGVjdGlvbi52YWx1ZV07XG4gICAgLy8gICAgICAgICAgICAgfSk7XG5cbiAgICAvLyAgICAgICAgIGQzLnNlbGVjdEFsbChcImcueS5heGlzXCIpXG4gICAgLy8gICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgIC8vICAgICAgICAgICAgIC5jYWxsKHlBeGlzKTtcblxuICAgIC8vICAgICB9KTtcblxuICAgIC8vIHNlbGVjdG9yLnNlbGVjdEFsbChcIm9wdGlvblwiKVxuICAgIC8vICAgICAuZGF0YShlbGVtZW50cylcbiAgICAvLyAgICAgLmVudGVyKCkuYXBwZW5kKFwib3B0aW9uXCIpXG4gICAgLy8gICAgIC5hdHRyKFwidmFsdWVcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiBkO1xuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgIC8vICAgICAgICAgcmV0dXJuIGQ7XG4gICAgLy8gICAgIH0pXG59XG5cbik7XG5cblxuXG4vLyB9KSJdLCJzb3VyY2VSb290IjoiIn0=