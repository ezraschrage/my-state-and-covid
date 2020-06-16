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
    width = 1960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
var svg = d3.select("#data").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")"); // document.addEventListener("DOMContentLoaded", () => {
// const states = {};

var states = []; // console.log(states)
// d3.csv("https://covidtracking.com/api/v1/states/current.csv", function (stateData) {
//     for (let i = 0; i < stateData.length; i += 1) {
//         const state = stateData[i];
//         const name = state.state;
//         // states[`${name}`] = {
//         states.push( {
//             abreviation: name,
//             name: stateNames[name],
//             positive: parseInt(state.positive),
//             negative: parseInt(state.negative),
//             death: parseInt(state.death),
//             totalTestResults: parseInt(state.totalTestResults),
//             hospitalizedCurrently: parseInt(state.hospitalizedCurrently),
//             hospitalizedCumulative: parseInt(state.hospitalizedCumulative),
//             inIcuCurrently: parseInt(state.inIcuCurrently),
//             inIcuCumulative: parseInt(state.inIcuCumulative),
//             onVentilatorCurrently: parseInt(state.onVentilatorCurrently),
//             onVentilatorCumulative: parseInt(state.onVentilatorCumulative),
//             recovered: parseInt(state.recovered),
//             hospitalized: parseInt(state.hospitalized)
//         })
//         // console.log(states)
//     }
//     let data = states;
//     // filter year
//     // let data = data.filter(function (d) { return d.Year == '2012'; });
//     console.log(data)
//     // Get every column value
//     let elements = Object.keys(data[0])
//         .filter(function (d) {
//             return ((d != "abreviation") & (d != "name"));
//         });
//     console.log(elements)
//     // let selection = elements[0];
//     // console.log(selection)
//     // let pairs = 
//     let y = d3.scale.linear()
//         .domain([0, d3.max(data, function (d) {
//             return +d[selection];
//         })])
//         .range([height, 0]);
//     let x = d3.scale.ordinal()
//         .domain(data.map(function (d) { return d.State; }))
//         .rangeBands([0, width]);
//     let xAxis = d3.svg.axis()
//         .scale(x)
//         .orient("bottom");
//     let yAxis = d3.svg.axis()
//         .scale(y)
//         .orient("left");
//     svg.append("g")
//         .attr("class", "x axis")
//         .attr("transform", "translate(0," + height + ")")
//         .call(xAxis)
//         .selectAll("text")
//         .style("font-size", "8px")
//         .style("text-anchor", "end")
//         .attr("dx", "-.8em")
//         .attr("dy", "-.55em")
//         .attr("transform", "rotate(-90)");
//     svg.append("g")
//         .attr("class", "y axis")
//         .call(yAxis);
//     svg.selectAll("rectangle")
//         .data(data)
//         .enter()
//         .append("rect")
//         .attr("class", "rectangle")
//         .attr("width", width / data.length)
//         .attr("height", function (d) {
//             return height - y(+d[selection]);
//         })
//         .attr("x", function (d, i) {
//             return (width / data.length) * i;
//         })
//         .attr("y", function (d) {
//             return y(+d[selection]);
//         })
//         .append("title")
//         .text(function (d) {
//             return d.State + " : " + d[selection];
//         });
//     let selector = d3.select("#drop")
//         .append("select")
//         .attr("id", "dropdown")
//         .on("change", function (d) {
//             selection = document.getElementById("dropdown");
//             y.domain([0, d3.max(data, function (d) {
//                 return +d[selection.value];
//             })]);
//             yAxis.scale(y);
//             d3.selectAll(".rectangle")
//                 .transition()
//                 .attr("height", function (d) {
//                     return height - y(+d[selection.value]);
//                 })
//                 .attr("x", function (d, i) {
//                     return (width / data.length) * i;
//                 })
//                 .attr("y", function (d) {
//                     return y(+d[selection.value]);
//                 })
//                 .ease("linear")
//                 .select("title")
//                 .text(function (d) {
//                     return d.State + " : " + d[selection.value];
//                 });
//             d3.selectAll("g.y.axis")
//                 .transition()
//                 .call(yAxis);
//         });
//     selector.selectAll("option")
//         .data(elements)
//         .enter().append("option")
//         .attr("value", function (d) {
//             return d;
//         })
//         .text(function (d) {
//             return d;
//         })
// }
// );
// })

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInN0YXRlTmFtZXMiLCJzdGF0ZU5hbWVBcnJheSIsIk9iamVjdCIsImtleXMiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJzdmciLCJkMyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJzdGF0ZXMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFNQSxVQUFVLEdBQUc7QUFDZixRQUFNLFNBRFM7QUFFZixRQUFNLFFBRlM7QUFHZixRQUFNLGdCQUhTO0FBSWYsUUFBTSxTQUpTO0FBS2YsUUFBTSxVQUxTO0FBTWYsUUFBTSxZQU5TO0FBT2YsUUFBTSxVQVBTO0FBUWYsUUFBTSxhQVJT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QUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQSxLIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IHN0YXRlTmFtZXMgPSB7XG4gICAgXCJBTFwiOiBcIkFsYWJhbWFcIixcbiAgICBcIkFLXCI6IFwiQWxhc2thXCIsXG4gICAgXCJBU1wiOiBcIkFtZXJpY2FuIFNhbW9hXCIsXG4gICAgXCJBWlwiOiBcIkFyaXpvbmFcIixcbiAgICBcIkFSXCI6IFwiQXJrYW5zYXNcIixcbiAgICBcIkNBXCI6IFwiQ2FsaWZvcm5pYVwiLFxuICAgIFwiQ09cIjogXCJDb2xvcmFkb1wiLFxuICAgIFwiQ1RcIjogXCJDb25uZWN0aWN1dFwiLFxuICAgIFwiREVcIjogXCJEZWxhd2FyZVwiLFxuICAgIFwiRENcIjogXCJEaXN0cmljdCBPZiBDb2x1bWJpYVwiLFxuICAgIFwiRk1cIjogXCJGZWRlcmF0ZWQgU3RhdGVzIE9mIE1pY3JvbmVzaWFcIixcbiAgICBcIkZMXCI6IFwiRmxvcmlkYVwiLFxuICAgIFwiR0FcIjogXCJHZW9yZ2lhXCIsXG4gICAgXCJHVVwiOiBcIkd1YW1cIixcbiAgICBcIkhJXCI6IFwiSGF3YWlpXCIsXG4gICAgXCJJRFwiOiBcIklkYWhvXCIsXG4gICAgXCJJTFwiOiBcIklsbGlub2lzXCIsXG4gICAgXCJJTlwiOiBcIkluZGlhbmFcIixcbiAgICBcIklBXCI6IFwiSW93YVwiLFxuICAgIFwiS1NcIjogXCJLYW5zYXNcIixcbiAgICBcIktZXCI6IFwiS2VudHVja3lcIixcbiAgICBcIkxBXCI6IFwiTG91aXNpYW5hXCIsXG4gICAgXCJNRVwiOiBcIk1haW5lXCIsXG4gICAgXCJNSFwiOiBcIk1hcnNoYWxsIElzbGFuZHNcIixcbiAgICBcIk1EXCI6IFwiTWFyeWxhbmRcIixcbiAgICBcIk1BXCI6IFwiTWFzc2FjaHVzZXR0c1wiLFxuICAgIFwiTUlcIjogXCJNaWNoaWdhblwiLFxuICAgIFwiTU5cIjogXCJNaW5uZXNvdGFcIixcbiAgICBcIk1TXCI6IFwiTWlzc2lzc2lwcGlcIixcbiAgICBcIk1PXCI6IFwiTWlzc291cmlcIixcbiAgICBcIk1UXCI6IFwiTW9udGFuYVwiLFxuICAgIFwiTkVcIjogXCJOZWJyYXNrYVwiLFxuICAgIFwiTlZcIjogXCJOZXZhZGFcIixcbiAgICBcIk5IXCI6IFwiTmV3IEhhbXBzaGlyZVwiLFxuICAgIFwiTkpcIjogXCJOZXcgSmVyc2V5XCIsXG4gICAgXCJOTVwiOiBcIk5ldyBNZXhpY29cIixcbiAgICBcIk5ZXCI6IFwiTmV3IFlvcmtcIixcbiAgICBcIk5DXCI6IFwiTm9ydGggQ2Fyb2xpbmFcIixcbiAgICBcIk5EXCI6IFwiTm9ydGggRGFrb3RhXCIsXG4gICAgXCJNUFwiOiBcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kc1wiLFxuICAgIFwiT0hcIjogXCJPaGlvXCIsXG4gICAgXCJPS1wiOiBcIk9rbGFob21hXCIsXG4gICAgXCJPUlwiOiBcIk9yZWdvblwiLFxuICAgIFwiUFdcIjogXCJQYWxhdVwiLFxuICAgIFwiUEFcIjogXCJQZW5uc3lsdmFuaWFcIixcbiAgICBcIlBSXCI6IFwiUHVlcnRvIFJpY29cIixcbiAgICBcIlJJXCI6IFwiUmhvZGUgSXNsYW5kXCIsXG4gICAgXCJTQ1wiOiBcIlNvdXRoIENhcm9saW5hXCIsXG4gICAgXCJTRFwiOiBcIlNvdXRoIERha290YVwiLFxuICAgIFwiVE5cIjogXCJUZW5uZXNzZWVcIixcbiAgICBcIlRYXCI6IFwiVGV4YXNcIixcbiAgICBcIlVUXCI6IFwiVXRhaFwiLFxuICAgIFwiVlRcIjogXCJWZXJtb250XCIsXG4gICAgXCJWSVwiOiBcIlZpcmdpbiBJc2xhbmRzXCIsXG4gICAgXCJWQVwiOiBcIlZpcmdpbmlhXCIsXG4gICAgXCJXQVwiOiBcIldhc2hpbmd0b25cIixcbiAgICBcIldWXCI6IFwiV2VzdCBWaXJnaW5pYVwiLFxuICAgIFwiV0lcIjogXCJXaXNjb25zaW5cIixcbiAgICBcIldZXCI6IFwiV3lvbWluZ1wiXG59XG5cbmxldCBzdGF0ZU5hbWVBcnJheSA9IE9iamVjdC5rZXlzKHN0YXRlTmFtZXMpO1xuY29uc29sZS5sb2coc3RhdGVOYW1lQXJyYXkpXG5cbmxldCBtYXJnaW4gPSB7IHRvcDogODAsIHJpZ2h0OiAxODAsIGJvdHRvbTogODAsIGxlZnQ6IDE4MCB9LFxuICAgIHdpZHRoID0gMTk2MCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0LFxuICAgIGhlaWdodCA9IDUwMCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG5sZXQgc3ZnID0gZDMuc2VsZWN0KFwiI2RhdGFcIikuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKVxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXG5cblxuLy8gY29uc3Qgc3RhdGVzID0ge307XG5jb25zdCBzdGF0ZXMgPSBbXTtcbi8vIGNvbnNvbGUubG9nKHN0YXRlcylcblxuXG4vLyBkMy5jc3YoXCJodHRwczovL2NvdmlkdHJhY2tpbmcuY29tL2FwaS92MS9zdGF0ZXMvY3VycmVudC5jc3ZcIiwgZnVuY3Rpb24gKHN0YXRlRGF0YSkge1xuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGVEYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4vLyAgICAgICAgIGNvbnN0IHN0YXRlID0gc3RhdGVEYXRhW2ldO1xuLy8gICAgICAgICBjb25zdCBuYW1lID0gc3RhdGUuc3RhdGU7XG4vLyAgICAgICAgIC8vIHN0YXRlc1tgJHtuYW1lfWBdID0ge1xuLy8gICAgICAgICBzdGF0ZXMucHVzaCgge1xuLy8gICAgICAgICAgICAgYWJyZXZpYXRpb246IG5hbWUsXG4vLyAgICAgICAgICAgICBuYW1lOiBzdGF0ZU5hbWVzW25hbWVdLFxuLy8gICAgICAgICAgICAgcG9zaXRpdmU6IHBhcnNlSW50KHN0YXRlLnBvc2l0aXZlKSxcbi8vICAgICAgICAgICAgIG5lZ2F0aXZlOiBwYXJzZUludChzdGF0ZS5uZWdhdGl2ZSksXG4vLyAgICAgICAgICAgICBkZWF0aDogcGFyc2VJbnQoc3RhdGUuZGVhdGgpLFxuLy8gICAgICAgICAgICAgdG90YWxUZXN0UmVzdWx0czogcGFyc2VJbnQoc3RhdGUudG90YWxUZXN0UmVzdWx0cyksXG4vLyAgICAgICAgICAgICBob3NwaXRhbGl6ZWRDdXJyZW50bHk6IHBhcnNlSW50KHN0YXRlLmhvc3BpdGFsaXplZEN1cnJlbnRseSksXG4vLyAgICAgICAgICAgICBob3NwaXRhbGl6ZWRDdW11bGF0aXZlOiBwYXJzZUludChzdGF0ZS5ob3NwaXRhbGl6ZWRDdW11bGF0aXZlKSxcbi8vICAgICAgICAgICAgIGluSWN1Q3VycmVudGx5OiBwYXJzZUludChzdGF0ZS5pbkljdUN1cnJlbnRseSksXG4vLyAgICAgICAgICAgICBpbkljdUN1bXVsYXRpdmU6IHBhcnNlSW50KHN0YXRlLmluSWN1Q3VtdWxhdGl2ZSksXG4vLyAgICAgICAgICAgICBvblZlbnRpbGF0b3JDdXJyZW50bHk6IHBhcnNlSW50KHN0YXRlLm9uVmVudGlsYXRvckN1cnJlbnRseSksXG4vLyAgICAgICAgICAgICBvblZlbnRpbGF0b3JDdW11bGF0aXZlOiBwYXJzZUludChzdGF0ZS5vblZlbnRpbGF0b3JDdW11bGF0aXZlKSxcbi8vICAgICAgICAgICAgIHJlY292ZXJlZDogcGFyc2VJbnQoc3RhdGUucmVjb3ZlcmVkKSxcbi8vICAgICAgICAgICAgIGhvc3BpdGFsaXplZDogcGFyc2VJbnQoc3RhdGUuaG9zcGl0YWxpemVkKVxuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZXMpXG4vLyAgICAgfVxuXG4vLyAgICAgbGV0IGRhdGEgPSBzdGF0ZXM7XG4vLyAgICAgLy8gZmlsdGVyIHllYXJcbi8vICAgICAvLyBsZXQgZGF0YSA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLlllYXIgPT0gJzIwMTInOyB9KTtcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKVxuLy8gICAgIC8vIEdldCBldmVyeSBjb2x1bW4gdmFsdWVcbi8vICAgICBsZXQgZWxlbWVudHMgPSBPYmplY3Qua2V5cyhkYXRhWzBdKVxuLy8gICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gKChkICE9IFwiYWJyZXZpYXRpb25cIikgJiAoZCAhPSBcIm5hbWVcIikpO1xuLy8gICAgICAgICB9KTtcbi8vICAgICBjb25zb2xlLmxvZyhlbGVtZW50cylcbi8vICAgICAvLyBsZXQgc2VsZWN0aW9uID0gZWxlbWVudHNbMF07XG4vLyAgICAgLy8gY29uc29sZS5sb2coc2VsZWN0aW9uKVxuXG4vLyAgICAgLy8gbGV0IHBhaXJzID0gXG4gICAgXG4vLyAgICAgbGV0IHkgPSBkMy5zY2FsZS5saW5lYXIoKVxuLy8gICAgICAgICAuZG9tYWluKFswLCBkMy5tYXgoZGF0YSwgZnVuY3Rpb24gKGQpIHtcbi8vICAgICAgICAgICAgIHJldHVybiArZFtzZWxlY3Rpb25dO1xuLy8gICAgICAgICB9KV0pXG4vLyAgICAgICAgIC5yYW5nZShbaGVpZ2h0LCAwXSk7XG5cbi8vICAgICBsZXQgeCA9IGQzLnNjYWxlLm9yZGluYWwoKVxuLy8gICAgICAgICAuZG9tYWluKGRhdGEubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLlN0YXRlOyB9KSlcbi8vICAgICAgICAgLnJhbmdlQmFuZHMoWzAsIHdpZHRoXSk7XG5cblxuLy8gICAgIGxldCB4QXhpcyA9IGQzLnN2Zy5heGlzKClcbi8vICAgICAgICAgLnNjYWxlKHgpXG4vLyAgICAgICAgIC5vcmllbnQoXCJib3R0b21cIik7XG5cbi8vICAgICBsZXQgeUF4aXMgPSBkMy5zdmcuYXhpcygpXG4vLyAgICAgICAgIC5zY2FsZSh5KVxuLy8gICAgICAgICAub3JpZW50KFwibGVmdFwiKTtcblxuLy8gICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4vLyAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4IGF4aXNcIilcbi8vICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxuLy8gICAgICAgICAuY2FsbCh4QXhpcylcbi8vICAgICAgICAgLnNlbGVjdEFsbChcInRleHRcIilcbi8vICAgICAgICAgLnN0eWxlKFwiZm9udC1zaXplXCIsIFwiOHB4XCIpXG4vLyAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4vLyAgICAgICAgIC5hdHRyKFwiZHhcIiwgXCItLjhlbVwiKVxuLy8gICAgICAgICAuYXR0cihcImR5XCIsIFwiLS41NWVtXCIpXG4vLyAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIik7XG5cblxuLy8gICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4vLyAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5IGF4aXNcIilcbi8vICAgICAgICAgLmNhbGwoeUF4aXMpO1xuXG4vLyAgICAgc3ZnLnNlbGVjdEFsbChcInJlY3RhbmdsZVwiKVxuLy8gICAgICAgICAuZGF0YShkYXRhKVxuLy8gICAgICAgICAuZW50ZXIoKVxuLy8gICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxuLy8gICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwicmVjdGFuZ2xlXCIpXG4vLyAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggLyBkYXRhLmxlbmd0aClcbi8vICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQpIHtcbi8vICAgICAgICAgICAgIHJldHVybiBoZWlnaHQgLSB5KCtkW3NlbGVjdGlvbl0pO1xuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24gKGQsIGkpIHtcbi8vICAgICAgICAgICAgIHJldHVybiAod2lkdGggLyBkYXRhLmxlbmd0aCkgKiBpO1xuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24gKGQpIHtcbi8vICAgICAgICAgICAgIHJldHVybiB5KCtkW3NlbGVjdGlvbl0pO1xuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAuYXBwZW5kKFwidGl0bGVcIilcbi8vICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbi8vICAgICAgICAgICAgIHJldHVybiBkLlN0YXRlICsgXCIgOiBcIiArIGRbc2VsZWN0aW9uXTtcbi8vICAgICAgICAgfSk7XG5cbi8vICAgICBsZXQgc2VsZWN0b3IgPSBkMy5zZWxlY3QoXCIjZHJvcFwiKVxuLy8gICAgICAgICAuYXBwZW5kKFwic2VsZWN0XCIpXG4vLyAgICAgICAgIC5hdHRyKFwiaWRcIiwgXCJkcm9wZG93blwiKVxuLy8gICAgICAgICAub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGQpIHtcbi8vICAgICAgICAgICAgIHNlbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd25cIik7XG5cbi8vICAgICAgICAgICAgIHkuZG9tYWluKFswLCBkMy5tYXgoZGF0YSwgZnVuY3Rpb24gKGQpIHtcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gK2Rbc2VsZWN0aW9uLnZhbHVlXTtcbi8vICAgICAgICAgICAgIH0pXSk7XG5cbi8vICAgICAgICAgICAgIHlBeGlzLnNjYWxlKHkpO1xuXG4vLyAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIucmVjdGFuZ2xlXCIpXG4vLyAgICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuLy8gICAgICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoZWlnaHQgLSB5KCtkW3NlbGVjdGlvbi52YWx1ZV0pO1xuLy8gICAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiAod2lkdGggLyBkYXRhLmxlbmd0aCkgKiBpO1xuLy8gICAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiB5KCtkW3NlbGVjdGlvbi52YWx1ZV0pO1xuLy8gICAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAgICAgLmVhc2UoXCJsaW5lYXJcIilcbi8vICAgICAgICAgICAgICAgICAuc2VsZWN0KFwidGl0bGVcIilcbi8vICAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZC5TdGF0ZSArIFwiIDogXCIgKyBkW3NlbGVjdGlvbi52YWx1ZV07XG4vLyAgICAgICAgICAgICAgICAgfSk7XG5cbi8vICAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcImcueS5heGlzXCIpXG4vLyAgICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuLy8gICAgICAgICAgICAgICAgIC5jYWxsKHlBeGlzKTtcblxuLy8gICAgICAgICB9KTtcblxuLy8gICAgIHNlbGVjdG9yLnNlbGVjdEFsbChcIm9wdGlvblwiKVxuLy8gICAgICAgICAuZGF0YShlbGVtZW50cylcbi8vICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwib3B0aW9uXCIpXG4vLyAgICAgICAgIC5hdHRyKFwidmFsdWVcIiwgZnVuY3Rpb24gKGQpIHtcbi8vICAgICAgICAgICAgIHJldHVybiBkO1xuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIGQ7XG4vLyAgICAgICAgIH0pXG4vLyB9XG5cbi8vICk7XG5cblxuXG4vLyB9KSJdLCJzb3VyY2VSb290IjoiIn0=