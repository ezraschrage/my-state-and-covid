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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
var stateNameArray = Object.keys(stateNames); // console.log(stateNameArray)

var margin = {
  top: 80,
  right: 180,
  bottom: 80,
  left: 180
},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
var svg = d3.select("#data-section").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var findMax = function findMax(data) {
  var values = Object.values(data); // console.log(values)

  var onlyNums = values.map(function (num) {
    // console.log(typeof num === "number")
    if (typeof num !== "number" || isNaN(num)) {
      return 0;
    } else {
      return num;
    }
  }); // console.log(onlyNums)
  // console.log(Math.max(...onlyNums))

  return Math.max.apply(Math, _toConsumableArray(onlyNums));
};

document.addEventListener("DOMContentLoaded", function () {
  // const states = {};
  var states = []; // console.log(data)

  d3.csv("https://covidtracking.com/api/v1/states/current.csv", function (stateData) {
    for (var i = 0; i < stateData.length; i += 1) {
      var state = stateData[i];
      var name = state.state; // console.log(isNaN(parseInt(state.onVentilatorCumulative))),
      // data[`${name}`] = {

      states.push({
        abreviation: name,
        name: stateNames[name],
        positive: isNaN(parseInt(state.positive)) ? 0 : parseInt(state.positive),
        negative: isNaN(parseInt(state.negative)) ? 0 : parseInt(state.negative),
        death: isNaN(parseInt(state.death)) ? 0 : parseInt(state.death),
        totalTestResults: isNaN(parseInt(state.totalTestResults)) ? 0 : parseInt(state.totalTestResults),
        hospitalizedCurrently: isNaN(parseInt(state.hospitalizedCurrently)) ? 0 : parseInt(state.hospitalizedCurrently),
        hospitalizedCumulative: isNaN(parseInt(state.hospitalizedCumulative)) ? 0 : parseInt(state.hospitalizedCumulative),
        inIcuCurrently: isNaN(parseInt(state.inIcuCurrently)) ? 0 : parseInt(state.inIcuCurrently),
        inIcuCumulative: isNaN(parseInt(state.inIcuCumulative)) ? 0 : parseInt(state.inIcuCumulative),
        onVentilatorCurrently: isNaN(parseInt(state.onVentilatorCurrently)) ? 0 : parseInt(state.onVentilatorCurrently),
        onVentilatorCumulative: isNaN(parseInt(state.onVentilatorCumulative)) ? 0 : parseInt(state.onVentilatorCumulative),
        recovered: isNaN(parseInt(state.recovered)) ? 0 : parseInt(state.recovered),
        hospitalized: isNaN(parseInt(state.hospitalized)) ? 0 : parseInt(state.hospitalized)
      }); // console.log(data)
    }

    console.log(states[37]); // console.log(findMax(states[1]))

    var categories = Object.keys(states[0]).filter(function (d) {
      return d != "abreviation" & d != "name";
    });
    console.log(categories);
    var selection = states[37]; // console.log(findMax(selection))

    d3.select("#selectButton").selectAll('myOptions').data(stateNameArray).enter().append('option').text(function (d) {
      return d;
    }).attr("value", function (d) {
      return d;
    });
    var x = d3.scaleBand().range([0, width]).padding(0.1);
    var y = d3.scaleLinear().range([height, 0]);
    x.domain(categories);
    y.domain([0, findMax(selection)]);
    svg.selectAll(".bar").data(states).enter().append("rect").attr("class", "bar").attr("x", function (d, i) {
      return x(d[i]);
    }).attr("width", x.bandwidth()).attr("y", function (d) {
      return y(d);
    }).attr("height", function (d, i) {
      return height - y(categories[i]);
    });
    svg.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(x)); // add the y Axis

    svg.append("g").call(d3.axisLeft(y)); // let x = d3.scaleLinear()
    //     .domain(elements)
    //     .range([0, width ]);
    // svg.append("g")
    //     .attr("transform", "translate(0," + height + ")")
    //     .call(d3.axisBottom(x));
    // let histogram = d3.histogram()
    //     .value(function(d) { return d})
    //     .domain(x.domain())
    //     .thresholds(x.ticks(70))
    // let bins = histogram(states);
    // let y = d3.scaleLinear()
    //     .domain([0,20])
    //     .range([ height, 0 ]);
    // svg.append("g")
    //     .call(d3.axisLeft(y));
    // svg.selectAll("rect")
    //     .data(bins)
    //     .enter()
    //     .append("rect")
    //     .attr("x", 1)
    //     .attr("transform", function (d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
    //     .attr("width", function (d) { return x(d.x1) - x(d.x0) - 1; })
    //     .attr("height", function (d) { return height - y(d.length); })
    //     .style("fill", "#69b3a2")
    // function update(selectedGroup) {
    //     let dataFilter = data.map(function(d) return {time: })
    // }
    // d3.select("#selectButton").on("change", function(d) {
    //     let selectedOption = d3.select(this).property("value")
    //     PaymentRequestUpdateEvent(selectedOption)
    // })
    // filter year
    // let data = data.filter(function (d) { return d.Year == '2012'; });
    //     console.log(states)
    //     // Get every column value
    //     let elements = Object.keys(states[0])
    //         .filter(function (d) {
    //             return ((d != "abreviation") & (d != "name"));
    //         });
    //     console.log(elements)
    //     // var x = d3.scaleOrdinal()
    //     //     .domain(data.map(function (d) { return d.name; }))
    //     //     .rangeRoundBands([0, width], 0.1);
    //     // In d3 v4
    //     // It should have been:
    //     // var x = d3.scaleBand()
    //     //     .rangeRound([0, width])
    //     //     .padding(0.1);
    //     let xScale = d3.scaleBand()
    //         .rangeRound([0, width])
    //         .padding(0.1)
    //     // let xScale = d3.scaleOrdinal()
    //     //     .domain(elements)
    //     //     rangeRoundBands([0, width], 0.1);
    //     let yScale = d3.scaleLinear()
    //         .domain([0, d3.max(states, function(d) {
    //             return +d[elements[0]]
    //         })])
    //         .range([height, 0]);
    //     let xAxis = d3.svg.axis()
    //         .scale(xScale)
    //         .orient("bottom");
    //     canvas.append("g")
    //         .attr("class", "x axis")
    //         .attr("transform", "translate(0," + height + ")")
    //         .call(xAxis);
    //     let yAxis = d3.svg.axis()
    //         .scale(yScale)
    //         .orient("left");
    //     let yAxisHandleForUpdate = canvas.append("g")
    //         .attr("class", "y axis")
    //         .call(yAxis)
    //     yAxisHandleForUpdate.append("text")
    //         .attr("transform", "rotate(-90)")
    //         .attr("y", 6)
    //         .attr("dy", ".71em")
    //         .style("text-anchor", "end")
    //         .text("Value")
    //     let updateBars = function(data) {
    //         yScale.domain( d3.extent(data) );
    //         yAxisHandleForUpdate.call(yAxis);
    //         let bars = canvas.selectAll(".bar").data(data);
    //         bars.enter()
    //             .append("rect")
    //                 .attr("class", "bar")
    //                 .attr("x", function(d,i) { return xScale( elements[i] ); })
    //                 .attr("width", xScale.rangeBand())
    //                 .attr("y", function(d, i) { return height - yScale(d); });
    //         bars
    //             .transition().duration(250)
    //             .attr("y", function(d,i) { return yScale(d); })
    //             .attr("height", function(d,i) { return height - yScale(d); });
    //         bars.exit().remove();
    //     };
    //     let dropdownChange = function() {
    //         let newState = d3.select(this).property("value"),
    //             newData = states[newState];
    //         updateBars(newState);
    //     };
    //     let dropdown = d3.select("#data-section")
    //         .insert("select", "svg")
    //         .on("change", dropdownChange);
    //     dropdown.selectAll("option")
    //         .data(stateNameArray)
    //         .enter().append("option")
    //         .attr("value", function (d) { return d; })
    //         .text(function (d) {
    //             return d[0].toUpperCase() + d.slice(1,d.length);
    //         });
    //     let initialData = states[ stateNames[0] ];
    //     updateBars(initialData);
    //     // // let selection = elements[0];
    //     // // console.log(selection)
    //     // // let pairs = 
    //     // // let y = d3.scale.linear()
    //     // //     .domain([0, d3.max(data, function (d) {
    //     // //         return +d[selection];
    //     // //     })])
    //     // //     .range([height, 0]);
    //     // // let x = d3.scale.ordinal()
    //     // //     .domain(data.map(function (d) { return d.State; }))
    //     // //     .rangeBands([0, width]);
    //     // // Make x scale
    //     // let x = d3.scale.ordinal()
    //     //     .domain(elements)
    //     //     .rangeRoundBands([0, width], 0.1);
    //     // // Make y scale, the domain will be defined on bar update
    //     // let y = d3.scale.linear()
    //     //     .range([height, 0]);
    //     // let xAxis = d3.svg.axis()
    //     //     .scale(x)
    //     //     .orient("bottom");
    //     // let yAxis = d3.svg.axis()
    //     //     .scale(y)
    //     //     .orient("left");
    //     // svg.append("g")
    //     //     .attr("class", "x axis")
    //     //     .attr("transform", "translate(0," + height + ")")
    //     //     .call(xAxis)
    //     //     .selectAll("text")
    //     //     .style("font-size", "8px")
    //     //     .style("text-anchor", "end")
    //     //     .attr("dx", "-.8em")
    //     //     .attr("dy", "-.55em")
    //     //     .attr("transform", "rotate(-90)");
    //     // svg.append("g")
    //     //     .attr("class", "y axis")
    //     //     .call(yAxis);
    //     // svg.selectAll("rectangle")
    //     //     .data(data)
    //     //     .enter()
    //     //     .append("rect")
    //     //     .attr("class", "rectangle")
    //     //     .attr("width", width / data.length)
    //     //     .attr("height", function (d) {
    //     //         return height - y(+d[selection]);
    //     //     })
    //     //     .attr("x", function (d, i) {
    //     //         return (width / data.length) * i;
    //     //     })
    //     //     .attr("y", function (d) {
    //     //         return y(+d[selection]);
    //     //     })
    //     //     .append("title")
    //     //     .text(function (d) {
    //     //         return d.State + " : " + d[selection];
    //     //     });
    //     // let selector = d3.select("#drop")
    //     //     .append("select")
    //     //     .attr("id", "dropdown")
    //     //     .on("change", function (d) {
    //     //         selection = document.getElementById("dropdown");
    //     //         y.domain([0, d3.max(data, function (d) {
    //     //             return +d[selection.value];
    //     //         })]);
    //     //         yAxis.scale(y);
    //     //         d3.selectAll(".rectangle")
    //     //             .transition()
    //     //             .attr("height", function (d) {
    //     //                 return height - y(+d[selection.value]);
    //     //             })
    //     //             .attr("x", function (d, i) {
    //     //                 return (width / data.length) * i;
    //     //             })
    //     //             .attr("y", function (d) {
    //     //                 return y(+d[selection.value]);
    //     //             })
    //     //             .ease("linear")
    //     //             .select("title")
    //     //             .text(function (d) {
    //     //                 return d.State + " : " + d[selection.value];
    //     //             });
    //     //         d3.selectAll("g.y.axis")
    //     //             .transition()
    //     //             .call(yAxis);
    //     //     });
    //     // selector.selectAll("option")
    //     //     .data(elements)
    //     //     .enter().append("option")
    //     //     .attr("value", function (d) {
    //     //         return d;
    //     //     })
    //     //     .text(function (d) {
    //     //         return d;
    //     //     })
  });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInN0YXRlTmFtZXMiLCJzdGF0ZU5hbWVBcnJheSIsIk9iamVjdCIsImtleXMiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsImZpbmRNYXgiLCJkYXRhIiwidmFsdWVzIiwib25seU51bXMiLCJtYXAiLCJudW0iLCJpc05hTiIsIk1hdGgiLCJtYXgiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGF0ZXMiLCJjc3YiLCJzdGF0ZURhdGEiLCJpIiwibGVuZ3RoIiwic3RhdGUiLCJuYW1lIiwicHVzaCIsImFicmV2aWF0aW9uIiwicG9zaXRpdmUiLCJwYXJzZUludCIsIm5lZ2F0aXZlIiwiZGVhdGgiLCJ0b3RhbFRlc3RSZXN1bHRzIiwiaG9zcGl0YWxpemVkQ3VycmVudGx5IiwiaG9zcGl0YWxpemVkQ3VtdWxhdGl2ZSIsImluSWN1Q3VycmVudGx5IiwiaW5JY3VDdW11bGF0aXZlIiwib25WZW50aWxhdG9yQ3VycmVudGx5Iiwib25WZW50aWxhdG9yQ3VtdWxhdGl2ZSIsInJlY292ZXJlZCIsImhvc3BpdGFsaXplZCIsImNvbnNvbGUiLCJsb2ciLCJjYXRlZ29yaWVzIiwiZmlsdGVyIiwiZCIsInNlbGVjdGlvbiIsInNlbGVjdEFsbCIsImVudGVyIiwidGV4dCIsIngiLCJzY2FsZUJhbmQiLCJyYW5nZSIsInBhZGRpbmciLCJ5Iiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJiYW5kd2lkdGgiLCJjYWxsIiwiYXhpc0JvdHRvbSIsImF4aXNMZWZ0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsVUFBVSxHQUFHO0FBQ2YsUUFBTSxTQURTO0FBRWYsUUFBTSxRQUZTO0FBR2YsUUFBTSxnQkFIUztBQUlmLFFBQU0sU0FKUztBQUtmLFFBQU0sVUFMUztBQU1mLFFBQU0sWUFOUztBQU9mLFFBQU0sVUFQUztBQVFmLFFBQU0sYUFSUztBQVNmLFFBQU0sVUFUUztBQVVmLFFBQU0sc0JBVlM7QUFXZixRQUFNLGdDQVhTO0FBWWYsUUFBTSxTQVpTO0FBYWYsUUFBTSxTQWJTO0FBY2YsUUFBTSxNQWRTO0FBZWYsUUFBTSxRQWZTO0FBZ0JmLFFBQU0sT0FoQlM7QUFpQmYsUUFBTSxVQWpCUztBQWtCZixRQUFNLFNBbEJTO0FBbUJmLFFBQU0sTUFuQlM7QUFvQmYsUUFBTSxRQXBCUztBQXFCZixRQUFNLFVBckJTO0FBc0JmLFFBQU0sV0F0QlM7QUF1QmYsUUFBTSxPQXZCUztBQXdCZixRQUFNLGtCQXhCUztBQXlCZixRQUFNLFVBekJTO0FBMEJmLFFBQU0sZUExQlM7QUEyQmYsUUFBTSxVQTNCUztBQTRCZixRQUFNLFdBNUJTO0FBNkJmLFFBQU0sYUE3QlM7QUE4QmYsUUFBTSxVQTlCUztBQStCZixRQUFNLFNBL0JTO0FBZ0NmLFFBQU0sVUFoQ1M7QUFpQ2YsUUFBTSxRQWpDUztBQWtDZixRQUFNLGVBbENTO0FBbUNmLFFBQU0sWUFuQ1M7QUFvQ2YsUUFBTSxZQXBDUztBQXFDZixRQUFNLFVBckNTO0FBc0NmLFFBQU0sZ0JBdENTO0FBdUNmLFFBQU0sY0F2Q1M7QUF3Q2YsUUFBTSwwQkF4Q1M7QUF5Q2YsUUFBTSxNQXpDUztBQTBDZixRQUFNLFVBMUNTO0FBMkNmLFFBQU0sUUEzQ1M7QUE0Q2YsUUFBTSxPQTVDUztBQTZDZixRQUFNLGNBN0NTO0FBOENmLFFBQU0sYUE5Q1M7QUErQ2YsUUFBTSxjQS9DUztBQWdEZixRQUFNLGdCQWhEUztBQWlEZixRQUFNLGNBakRTO0FBa0RmLFFBQU0sV0FsRFM7QUFtRGYsUUFBTSxPQW5EUztBQW9EZixRQUFNLE1BcERTO0FBcURmLFFBQU0sU0FyRFM7QUFzRGYsUUFBTSxnQkF0RFM7QUF1RGYsUUFBTSxVQXZEUztBQXdEZixRQUFNLFlBeERTO0FBeURmLFFBQU0sZUF6RFM7QUEwRGYsUUFBTSxXQTFEUztBQTJEZixRQUFNO0FBM0RTLENBQW5CO0FBOERBLElBQUlDLGNBQWMsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlILFVBQVosQ0FBckIsQyxDQUNBOztBQUVBLElBQUlJLE1BQU0sR0FBRztBQUFFQyxLQUFHLEVBQUUsRUFBUDtBQUFXQyxPQUFLLEVBQUUsR0FBbEI7QUFBdUJDLFFBQU0sRUFBRSxFQUEvQjtBQUFtQ0MsTUFBSSxFQUFFO0FBQXpDLENBQWI7QUFBQSxJQUNJQyxLQUFLLEdBQUcsTUFBTUwsTUFBTSxDQUFDSSxJQUFiLEdBQW9CSixNQUFNLENBQUNFLEtBRHZDO0FBQUEsSUFFSUksTUFBTSxHQUFHLE1BQU1OLE1BQU0sQ0FBQ0MsR0FBYixHQUFtQkQsTUFBTSxDQUFDRyxNQUZ2QztBQUlBLElBQUlJLEdBQUcsR0FBR0MsRUFBRSxDQUFDQyxNQUFILENBQVUsZUFBVixFQUNMQyxNQURLLENBQ0UsS0FERixFQUVMQyxJQUZLLENBRUEsT0FGQSxFQUVTTixLQUFLLEdBQUdMLE1BQU0sQ0FBQ0ksSUFBZixHQUFzQkosTUFBTSxDQUFDRSxLQUZ0QyxFQUdMUyxJQUhLLENBR0EsUUFIQSxFQUdVTCxNQUFNLEdBQUdOLE1BQU0sQ0FBQ0MsR0FBaEIsR0FBc0JELE1BQU0sQ0FBQ0csTUFIdkMsRUFJTE8sTUFKSyxDQUlFLEdBSkYsRUFLTEMsSUFMSyxDQUtBLFdBTEEsRUFNRixlQUFlWCxNQUFNLENBQUNJLElBQXRCLEdBQTZCLEdBQTdCLEdBQW1DSixNQUFNLENBQUNDLEdBQTFDLEdBQWdELEdBTjlDLENBQVY7O0FBUUEsSUFBSVcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQUMsSUFBSSxFQUFJO0FBQ2xCLE1BQUlDLE1BQU0sR0FBR2hCLE1BQU0sQ0FBQ2dCLE1BQVAsQ0FBY0QsSUFBZCxDQUFiLENBRGtCLENBRWxCOztBQUNBLE1BQUlFLFFBQVEsR0FBR0QsTUFBTSxDQUFDRSxHQUFQLENBQVcsVUFBU0MsR0FBVCxFQUFjO0FBQ3BDO0FBQ0EsUUFBSSxPQUFPQSxHQUFQLEtBQWUsUUFBZixJQUEyQkMsS0FBSyxDQUFDRCxHQUFELENBQXBDLEVBQTJDO0FBQ3ZDLGFBQU8sQ0FBUDtBQUNILEtBRkQsTUFFTztBQUNILGFBQU9BLEdBQVA7QUFDSDtBQUNKLEdBUGMsQ0FBZixDQUhrQixDQVlsQjtBQUVBOztBQUNBLFNBQU9FLElBQUksQ0FBQ0MsR0FBTCxPQUFBRCxJQUFJLHFCQUFRSixRQUFSLEVBQVg7QUFDSCxDQWhCRDs7QUFrQkFNLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFJcEQ7QUFDQSxNQUFNQyxNQUFNLEdBQUcsRUFBZixDQUxvRCxDQU1wRDs7QUFHQWYsSUFBRSxDQUFDZ0IsR0FBSCxDQUFPLHFEQUFQLEVBQThELFVBQVVDLFNBQVYsRUFBcUI7QUFDL0UsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxTQUFTLENBQUNFLE1BQTlCLEVBQXNDRCxDQUFDLElBQUksQ0FBM0MsRUFBOEM7QUFDMUMsVUFBTUUsS0FBSyxHQUFHSCxTQUFTLENBQUNDLENBQUQsQ0FBdkI7QUFDQSxVQUFNRyxJQUFJLEdBQUdELEtBQUssQ0FBQ0EsS0FBbkIsQ0FGMEMsQ0FHMUM7QUFFQTs7QUFDQUwsWUFBTSxDQUFDTyxJQUFQLENBQWE7QUFDVEMsbUJBQVcsRUFBRUYsSUFESjtBQUVUQSxZQUFJLEVBQUVqQyxVQUFVLENBQUNpQyxJQUFELENBRlA7QUFHVEcsZ0JBQVEsRUFBRWQsS0FBSyxDQUFDZSxRQUFRLENBQUNMLEtBQUssQ0FBQ0ksUUFBUCxDQUFULENBQUwsR0FBa0MsQ0FBbEMsR0FBc0NDLFFBQVEsQ0FBQ0wsS0FBSyxDQUFDSSxRQUFQLENBSC9DO0FBSVRFLGdCQUFRLEVBQUVoQixLQUFLLENBQUNlLFFBQVEsQ0FBQ0wsS0FBSyxDQUFDTSxRQUFQLENBQVQsQ0FBTCxHQUFrQyxDQUFsQyxHQUFzQ0QsUUFBUSxDQUFDTCxLQUFLLENBQUNNLFFBQVAsQ0FKL0M7QUFLVEMsYUFBSyxFQUFFakIsS0FBSyxDQUFDZSxRQUFRLENBQUNMLEtBQUssQ0FBQ08sS0FBUCxDQUFULENBQUwsR0FBK0IsQ0FBL0IsR0FBb0NGLFFBQVEsQ0FBQ0wsS0FBSyxDQUFDTyxLQUFQLENBTDFDO0FBTVRDLHdCQUFnQixFQUFFbEIsS0FBSyxDQUFDZSxRQUFRLENBQUNMLEtBQUssQ0FBQ1EsZ0JBQVAsQ0FBVCxDQUFMLEdBQTBDLENBQTFDLEdBQThDSCxRQUFRLENBQUNMLEtBQUssQ0FBQ1EsZ0JBQVAsQ0FOL0Q7QUFPVEMsNkJBQXFCLEVBQUVuQixLQUFLLENBQUNlLFFBQVEsQ0FBQ0wsS0FBSyxDQUFDUyxxQkFBUCxDQUFULENBQUwsR0FBK0MsQ0FBL0MsR0FBbURKLFFBQVEsQ0FBQ0wsS0FBSyxDQUFDUyxxQkFBUCxDQVB6RTtBQVFUQyw4QkFBc0IsRUFBRXBCLEtBQUssQ0FBQ2UsUUFBUSxDQUFDTCxLQUFLLENBQUNVLHNCQUFQLENBQVQsQ0FBTCxHQUFnRCxDQUFoRCxHQUFvREwsUUFBUSxDQUFDTCxLQUFLLENBQUNVLHNCQUFQLENBUjNFO0FBU1RDLHNCQUFjLEVBQUVyQixLQUFLLENBQUNlLFFBQVEsQ0FBQ0wsS0FBSyxDQUFDVyxjQUFQLENBQVQsQ0FBTCxHQUF3QyxDQUF4QyxHQUE0Q04sUUFBUSxDQUFDTCxLQUFLLENBQUNXLGNBQVAsQ0FUM0Q7QUFVVEMsdUJBQWUsRUFBRXRCLEtBQUssQ0FBQ2UsUUFBUSxDQUFDTCxLQUFLLENBQUNZLGVBQVAsQ0FBVCxDQUFMLEdBQXlDLENBQXpDLEdBQTZDUCxRQUFRLENBQUNMLEtBQUssQ0FBQ1ksZUFBUCxDQVY3RDtBQVdUQyw2QkFBcUIsRUFBRXZCLEtBQUssQ0FBQ2UsUUFBUSxDQUFDTCxLQUFLLENBQUNhLHFCQUFQLENBQVQsQ0FBTCxHQUErQyxDQUEvQyxHQUFtRFIsUUFBUSxDQUFDTCxLQUFLLENBQUNhLHFCQUFQLENBWHpFO0FBWVRDLDhCQUFzQixFQUFFeEIsS0FBSyxDQUFDZSxRQUFRLENBQUNMLEtBQUssQ0FBQ2Msc0JBQVAsQ0FBVCxDQUFMLEdBQWdELENBQWhELEdBQW9EVCxRQUFRLENBQUNMLEtBQUssQ0FBQ2Msc0JBQVAsQ0FaM0U7QUFhVEMsaUJBQVMsRUFBRXpCLEtBQUssQ0FBQ2UsUUFBUSxDQUFDTCxLQUFLLENBQUNlLFNBQVAsQ0FBVCxDQUFMLEdBQW1DLENBQW5DLEdBQXVDVixRQUFRLENBQUNMLEtBQUssQ0FBQ2UsU0FBUCxDQWJqRDtBQWNUQyxvQkFBWSxFQUFFMUIsS0FBSyxDQUFDZSxRQUFRLENBQUNMLEtBQUssQ0FBQ2dCLFlBQVAsQ0FBVCxDQUFMLEdBQXNDLENBQXRDLEdBQTBDWCxRQUFRLENBQUNMLEtBQUssQ0FBQ2dCLFlBQVA7QUFkdkQsT0FBYixFQU4wQyxDQXNCMUM7QUFDSDs7QUFDR0MsV0FBTyxDQUFDQyxHQUFSLENBQVl2QixNQUFNLENBQUMsRUFBRCxDQUFsQixFQXpCMkUsQ0EyQjNFOztBQUVBLFFBQUl3QixVQUFVLEdBQUdqRCxNQUFNLENBQUNDLElBQVAsQ0FBWXdCLE1BQU0sQ0FBQyxDQUFELENBQWxCLEVBQ2hCeUIsTUFEZ0IsQ0FDVCxVQUFVQyxDQUFWLEVBQWE7QUFDakIsYUFBU0EsQ0FBQyxJQUFJLGFBQU4sR0FBd0JBLENBQUMsSUFBSSxNQUFyQztBQUNILEtBSGdCLENBQWpCO0FBSUpKLFdBQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUFaO0FBRUEsUUFBSUcsU0FBUyxHQUFHM0IsTUFBTSxDQUFDLEVBQUQsQ0FBdEIsQ0FuQytFLENBcUMvRTs7QUFFQWYsTUFBRSxDQUFDQyxNQUFILENBQVUsZUFBVixFQUNLMEMsU0FETCxDQUNlLFdBRGYsRUFFS3RDLElBRkwsQ0FFVWhCLGNBRlYsRUFHS3VELEtBSEwsR0FJSzFDLE1BSkwsQ0FJWSxRQUpaLEVBS0syQyxJQUxMLENBS1UsVUFBVUosQ0FBVixFQUFhO0FBQUUsYUFBT0EsQ0FBUDtBQUFXLEtBTHBDLEVBTUt0QyxJQU5MLENBTVUsT0FOVixFQU1tQixVQUFVc0MsQ0FBVixFQUFhO0FBQUUsYUFBT0EsQ0FBUDtBQUFXLEtBTjdDO0FBUUEsUUFBSUssQ0FBQyxHQUFHOUMsRUFBRSxDQUFDK0MsU0FBSCxHQUNIQyxLQURHLENBQ0csQ0FBQyxDQUFELEVBQUluRCxLQUFKLENBREgsRUFFSG9ELE9BRkcsQ0FFSyxHQUZMLENBQVI7QUFJQSxRQUFJQyxDQUFDLEdBQUdsRCxFQUFFLENBQUNtRCxXQUFILEdBQ0hILEtBREcsQ0FDRyxDQUFDbEQsTUFBRCxFQUFTLENBQVQsQ0FESCxDQUFSO0FBR0FnRCxLQUFDLENBQUNNLE1BQUYsQ0FBU2IsVUFBVDtBQUNBVyxLQUFDLENBQUNFLE1BQUYsQ0FBUyxDQUFDLENBQUQsRUFBSWhELE9BQU8sQ0FBQ3NDLFNBQUQsQ0FBWCxDQUFUO0FBRUEzQyxPQUFHLENBQUM0QyxTQUFKLENBQWMsTUFBZCxFQUNLdEMsSUFETCxDQUNVVSxNQURWLEVBRUs2QixLQUZMLEdBRWExQyxNQUZiLENBRW9CLE1BRnBCLEVBR0tDLElBSEwsQ0FHVSxPQUhWLEVBR21CLEtBSG5CLEVBSUtBLElBSkwsQ0FJVSxHQUpWLEVBSWUsVUFBVXNDLENBQVYsRUFBYXZCLENBQWIsRUFBZ0I7QUFBRSxhQUFPNEIsQ0FBQyxDQUFDTCxDQUFDLENBQUN2QixDQUFELENBQUYsQ0FBUjtBQUFpQixLQUpsRCxFQUtLZixJQUxMLENBS1UsT0FMVixFQUttQjJDLENBQUMsQ0FBQ08sU0FBRixFQUxuQixFQU1LbEQsSUFOTCxDQU1VLEdBTlYsRUFNZSxVQUFVc0MsQ0FBVixFQUFhO0FBQUUsYUFBT1MsQ0FBQyxDQUFDVCxDQUFELENBQVI7QUFBWSxLQU4xQyxFQU9LdEMsSUFQTCxDQU9VLFFBUFYsRUFPb0IsVUFBVXNDLENBQVYsRUFBYXZCLENBQWIsRUFBZ0I7QUFBRSxhQUFPcEIsTUFBTSxHQUFHb0QsQ0FBQyxDQUFDWCxVQUFVLENBQUNyQixDQUFELENBQVgsQ0FBakI7QUFBa0MsS0FQeEU7QUFTQW5CLE9BQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFDS0MsSUFETCxDQUNVLFdBRFYsRUFDdUIsaUJBQWlCTCxNQUFqQixHQUEwQixHQURqRCxFQUVLd0QsSUFGTCxDQUVVdEQsRUFBRSxDQUFDdUQsVUFBSCxDQUFjVCxDQUFkLENBRlYsRUFsRStFLENBc0UvRTs7QUFDQS9DLE9BQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFDS29ELElBREwsQ0FDVXRELEVBQUUsQ0FBQ3dELFFBQUgsQ0FBWU4sQ0FBWixDQURWLEVBdkUrRSxDQTBFL0U7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVSTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVKO0FBQ0E7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDLEdBaFZEO0FBc1ZDLENBL1ZELEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3Qgc3RhdGVOYW1lcyA9IHtcbiAgICBcIkFMXCI6IFwiQWxhYmFtYVwiLFxuICAgIFwiQUtcIjogXCJBbGFza2FcIixcbiAgICBcIkFTXCI6IFwiQW1lcmljYW4gU2Ftb2FcIixcbiAgICBcIkFaXCI6IFwiQXJpem9uYVwiLFxuICAgIFwiQVJcIjogXCJBcmthbnNhc1wiLFxuICAgIFwiQ0FcIjogXCJDYWxpZm9ybmlhXCIsXG4gICAgXCJDT1wiOiBcIkNvbG9yYWRvXCIsXG4gICAgXCJDVFwiOiBcIkNvbm5lY3RpY3V0XCIsXG4gICAgXCJERVwiOiBcIkRlbGF3YXJlXCIsXG4gICAgXCJEQ1wiOiBcIkRpc3RyaWN0IE9mIENvbHVtYmlhXCIsXG4gICAgXCJGTVwiOiBcIkZlZGVyYXRlZCBTdGF0ZXMgT2YgTWljcm9uZXNpYVwiLFxuICAgIFwiRkxcIjogXCJGbG9yaWRhXCIsXG4gICAgXCJHQVwiOiBcIkdlb3JnaWFcIixcbiAgICBcIkdVXCI6IFwiR3VhbVwiLFxuICAgIFwiSElcIjogXCJIYXdhaWlcIixcbiAgICBcIklEXCI6IFwiSWRhaG9cIixcbiAgICBcIklMXCI6IFwiSWxsaW5vaXNcIixcbiAgICBcIklOXCI6IFwiSW5kaWFuYVwiLFxuICAgIFwiSUFcIjogXCJJb3dhXCIsXG4gICAgXCJLU1wiOiBcIkthbnNhc1wiLFxuICAgIFwiS1lcIjogXCJLZW50dWNreVwiLFxuICAgIFwiTEFcIjogXCJMb3Vpc2lhbmFcIixcbiAgICBcIk1FXCI6IFwiTWFpbmVcIixcbiAgICBcIk1IXCI6IFwiTWFyc2hhbGwgSXNsYW5kc1wiLFxuICAgIFwiTURcIjogXCJNYXJ5bGFuZFwiLFxuICAgIFwiTUFcIjogXCJNYXNzYWNodXNldHRzXCIsXG4gICAgXCJNSVwiOiBcIk1pY2hpZ2FuXCIsXG4gICAgXCJNTlwiOiBcIk1pbm5lc290YVwiLFxuICAgIFwiTVNcIjogXCJNaXNzaXNzaXBwaVwiLFxuICAgIFwiTU9cIjogXCJNaXNzb3VyaVwiLFxuICAgIFwiTVRcIjogXCJNb250YW5hXCIsXG4gICAgXCJORVwiOiBcIk5lYnJhc2thXCIsXG4gICAgXCJOVlwiOiBcIk5ldmFkYVwiLFxuICAgIFwiTkhcIjogXCJOZXcgSGFtcHNoaXJlXCIsXG4gICAgXCJOSlwiOiBcIk5ldyBKZXJzZXlcIixcbiAgICBcIk5NXCI6IFwiTmV3IE1leGljb1wiLFxuICAgIFwiTllcIjogXCJOZXcgWW9ya1wiLFxuICAgIFwiTkNcIjogXCJOb3J0aCBDYXJvbGluYVwiLFxuICAgIFwiTkRcIjogXCJOb3J0aCBEYWtvdGFcIixcbiAgICBcIk1QXCI6IFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsXG4gICAgXCJPSFwiOiBcIk9oaW9cIixcbiAgICBcIk9LXCI6IFwiT2tsYWhvbWFcIixcbiAgICBcIk9SXCI6IFwiT3JlZ29uXCIsXG4gICAgXCJQV1wiOiBcIlBhbGF1XCIsXG4gICAgXCJQQVwiOiBcIlBlbm5zeWx2YW5pYVwiLFxuICAgIFwiUFJcIjogXCJQdWVydG8gUmljb1wiLFxuICAgIFwiUklcIjogXCJSaG9kZSBJc2xhbmRcIixcbiAgICBcIlNDXCI6IFwiU291dGggQ2Fyb2xpbmFcIixcbiAgICBcIlNEXCI6IFwiU291dGggRGFrb3RhXCIsXG4gICAgXCJUTlwiOiBcIlRlbm5lc3NlZVwiLFxuICAgIFwiVFhcIjogXCJUZXhhc1wiLFxuICAgIFwiVVRcIjogXCJVdGFoXCIsXG4gICAgXCJWVFwiOiBcIlZlcm1vbnRcIixcbiAgICBcIlZJXCI6IFwiVmlyZ2luIElzbGFuZHNcIixcbiAgICBcIlZBXCI6IFwiVmlyZ2luaWFcIixcbiAgICBcIldBXCI6IFwiV2FzaGluZ3RvblwiLFxuICAgIFwiV1ZcIjogXCJXZXN0IFZpcmdpbmlhXCIsXG4gICAgXCJXSVwiOiBcIldpc2NvbnNpblwiLFxuICAgIFwiV1lcIjogXCJXeW9taW5nXCJcbn1cblxubGV0IHN0YXRlTmFtZUFycmF5ID0gT2JqZWN0LmtleXMoc3RhdGVOYW1lcyk7XG4vLyBjb25zb2xlLmxvZyhzdGF0ZU5hbWVBcnJheSlcblxubGV0IG1hcmdpbiA9IHsgdG9wOiA4MCwgcmlnaHQ6IDE4MCwgYm90dG9tOiA4MCwgbGVmdDogMTgwIH0sXG4gICAgd2lkdGggPSA5NjAgLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodCxcbiAgICBoZWlnaHQgPSA1MDAgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxubGV0IHN2ZyA9IGQzLnNlbGVjdChcIiNkYXRhLXNlY3Rpb25cIilcbiAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKVxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxubGV0IGZpbmRNYXggPSBkYXRhID0+IHtcbiAgICBsZXQgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXRhKVxuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlcylcbiAgICBsZXQgb25seU51bXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uKG51bSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgbnVtID09PSBcIm51bWJlclwiKVxuICAgICAgICBpZiAodHlwZW9mIG51bSAhPT0gXCJudW1iZXJcIiB8fCBpc05hTihudW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8vIGNvbnNvbGUubG9nKG9ubHlOdW1zKVxuXG4gICAgLy8gY29uc29sZS5sb2coTWF0aC5tYXgoLi4ub25seU51bXMpKVxuICAgIHJldHVybiBNYXRoLm1heCguLi5vbmx5TnVtcylcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXG5cblxuLy8gY29uc3Qgc3RhdGVzID0ge307XG5jb25zdCBzdGF0ZXMgPSBbXTtcbi8vIGNvbnNvbGUubG9nKGRhdGEpXG5cblxuZDMuY3N2KFwiaHR0cHM6Ly9jb3ZpZHRyYWNraW5nLmNvbS9hcGkvdjEvc3RhdGVzL2N1cnJlbnQuY3N2XCIsIGZ1bmN0aW9uIChzdGF0ZURhdGEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlRGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHN0YXRlRGF0YVtpXTtcbiAgICAgICAgY29uc3QgbmFtZSA9IHN0YXRlLnN0YXRlO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpc05hTihwYXJzZUludChzdGF0ZS5vblZlbnRpbGF0b3JDdW11bGF0aXZlKSkpLFxuXG4gICAgICAgIC8vIGRhdGFbYCR7bmFtZX1gXSA9IHtcbiAgICAgICAgc3RhdGVzLnB1c2goIHtcbiAgICAgICAgICAgIGFicmV2aWF0aW9uOiBuYW1lLFxuICAgICAgICAgICAgbmFtZTogc3RhdGVOYW1lc1tuYW1lXSxcbiAgICAgICAgICAgIHBvc2l0aXZlOiBpc05hTihwYXJzZUludChzdGF0ZS5wb3NpdGl2ZSkpID8gMCA6IHBhcnNlSW50KHN0YXRlLnBvc2l0aXZlKSxcbiAgICAgICAgICAgIG5lZ2F0aXZlOiBpc05hTihwYXJzZUludChzdGF0ZS5uZWdhdGl2ZSkpID8gMCA6IHBhcnNlSW50KHN0YXRlLm5lZ2F0aXZlKSxcbiAgICAgICAgICAgIGRlYXRoOiBpc05hTihwYXJzZUludChzdGF0ZS5kZWF0aCkpID8gMCA6ICBwYXJzZUludChzdGF0ZS5kZWF0aCksXG4gICAgICAgICAgICB0b3RhbFRlc3RSZXN1bHRzOiBpc05hTihwYXJzZUludChzdGF0ZS50b3RhbFRlc3RSZXN1bHRzKSkgPyAwIDogcGFyc2VJbnQoc3RhdGUudG90YWxUZXN0UmVzdWx0cyksXG4gICAgICAgICAgICBob3NwaXRhbGl6ZWRDdXJyZW50bHk6IGlzTmFOKHBhcnNlSW50KHN0YXRlLmhvc3BpdGFsaXplZEN1cnJlbnRseSkpID8gMCA6IHBhcnNlSW50KHN0YXRlLmhvc3BpdGFsaXplZEN1cnJlbnRseSksXG4gICAgICAgICAgICBob3NwaXRhbGl6ZWRDdW11bGF0aXZlOiBpc05hTihwYXJzZUludChzdGF0ZS5ob3NwaXRhbGl6ZWRDdW11bGF0aXZlKSkgPyAwIDogcGFyc2VJbnQoc3RhdGUuaG9zcGl0YWxpemVkQ3VtdWxhdGl2ZSksXG4gICAgICAgICAgICBpbkljdUN1cnJlbnRseTogaXNOYU4ocGFyc2VJbnQoc3RhdGUuaW5JY3VDdXJyZW50bHkpKSA/IDAgOiBwYXJzZUludChzdGF0ZS5pbkljdUN1cnJlbnRseSksXG4gICAgICAgICAgICBpbkljdUN1bXVsYXRpdmU6IGlzTmFOKHBhcnNlSW50KHN0YXRlLmluSWN1Q3VtdWxhdGl2ZSkpID8gMCA6IHBhcnNlSW50KHN0YXRlLmluSWN1Q3VtdWxhdGl2ZSksXG4gICAgICAgICAgICBvblZlbnRpbGF0b3JDdXJyZW50bHk6IGlzTmFOKHBhcnNlSW50KHN0YXRlLm9uVmVudGlsYXRvckN1cnJlbnRseSkpID8gMCA6IHBhcnNlSW50KHN0YXRlLm9uVmVudGlsYXRvckN1cnJlbnRseSksXG4gICAgICAgICAgICBvblZlbnRpbGF0b3JDdW11bGF0aXZlOiBpc05hTihwYXJzZUludChzdGF0ZS5vblZlbnRpbGF0b3JDdW11bGF0aXZlKSkgPyAwIDogcGFyc2VJbnQoc3RhdGUub25WZW50aWxhdG9yQ3VtdWxhdGl2ZSksXG4gICAgICAgICAgICByZWNvdmVyZWQ6IGlzTmFOKHBhcnNlSW50KHN0YXRlLnJlY292ZXJlZCkpID8gMCA6IHBhcnNlSW50KHN0YXRlLnJlY292ZXJlZCksXG4gICAgICAgICAgICBob3NwaXRhbGl6ZWQ6IGlzTmFOKHBhcnNlSW50KHN0YXRlLmhvc3BpdGFsaXplZCkpID8gMCA6IHBhcnNlSW50KHN0YXRlLmhvc3BpdGFsaXplZClcbiAgICAgICAgfSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXRlc1szN10pXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coZmluZE1heChzdGF0ZXNbMV0pKVxuXG4gICAgICAgIGxldCBjYXRlZ29yaWVzID0gT2JqZWN0LmtleXMoc3RhdGVzWzBdKVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gKChkICE9IFwiYWJyZXZpYXRpb25cIikgJiAoZCAhPSBcIm5hbWVcIikpO1xuICAgICAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzKVxuXG4gICAgbGV0IHNlbGVjdGlvbiA9IHN0YXRlc1szN11cblxuICAgIC8vIGNvbnNvbGUubG9nKGZpbmRNYXgoc2VsZWN0aW9uKSlcblxuICAgIGQzLnNlbGVjdChcIiNzZWxlY3RCdXR0b25cIilcbiAgICAgICAgLnNlbGVjdEFsbCgnbXlPcHRpb25zJylcbiAgICAgICAgLmRhdGEoc3RhdGVOYW1lQXJyYXkpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ29wdGlvbicpXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkOyB9KVxuICAgICAgICAuYXR0cihcInZhbHVlXCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBkOyB9KVxuXG4gICAgdmFyIHggPSBkMy5zY2FsZUJhbmQoKVxuICAgICAgICAucmFuZ2UoWzAsIHdpZHRoXSlcbiAgICAgICAgLnBhZGRpbmcoMC4xKTtcblxuICAgIHZhciB5ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAucmFuZ2UoW2hlaWdodCwgMF0pO1xuXG4gICAgeC5kb21haW4oY2F0ZWdvcmllcylcbiAgICB5LmRvbWFpbihbMCwgZmluZE1heChzZWxlY3Rpb24pXSlcblxuICAgIHN2Zy5zZWxlY3RBbGwoXCIuYmFyXCIpXG4gICAgICAgIC5kYXRhKHN0YXRlcylcbiAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFyXCIpXG4gICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbiAoZCwgaSkgeyByZXR1cm4geChkW2ldKTsgfSlcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB4LmJhbmR3aWR0aCgpKVxuICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHkoZCl9KVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCwgaSkgeyByZXR1cm4gaGVpZ2h0IC0geShjYXRlZ29yaWVzW2ldKTt9KVxuXG4gICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxuICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpO1xuXG4gICAgLy8gbGV0IHggPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgLy8gICAgIC5kb21haW4oZWxlbWVudHMpXG4gICAgLy8gICAgIC5yYW5nZShbMCwgd2lkdGggXSk7XG5cbiAgICAvLyBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgIC8vICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gICAgLy8gICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpO1xuXG4gICAgLy8gbGV0IGhpc3RvZ3JhbSA9IGQzLmhpc3RvZ3JhbSgpXG4gICAgLy8gICAgIC52YWx1ZShmdW5jdGlvbihkKSB7IHJldHVybiBkfSlcbiAgICAvLyAgICAgLmRvbWFpbih4LmRvbWFpbigpKVxuICAgIC8vICAgICAudGhyZXNob2xkcyh4LnRpY2tzKDcwKSlcblxuICAgIC8vIGxldCBiaW5zID0gaGlzdG9ncmFtKHN0YXRlcyk7XG5cbiAgICAvLyBsZXQgeSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAvLyAgICAgLmRvbWFpbihbMCwyMF0pXG4gICAgLy8gICAgIC5yYW5nZShbIGhlaWdodCwgMCBdKTtcbiAgICAvLyBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgIC8vICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSk7XG5cbiAgICAvLyBzdmcuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgIC8vICAgICAuZGF0YShiaW5zKVxuICAgIC8vICAgICAuZW50ZXIoKVxuICAgIC8vICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgIC8vICAgICAuYXR0cihcInhcIiwgMSlcbiAgICAvLyAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgeChkLngwKSArIFwiLFwiICsgeShkLmxlbmd0aCkgKyBcIilcIjsgfSlcbiAgICAvLyAgICAgLmF0dHIoXCJ3aWR0aFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geChkLngxKSAtIHgoZC54MCkgLSAxOyB9KVxuICAgIC8vICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gaGVpZ2h0IC0geShkLmxlbmd0aCk7IH0pXG4gICAgLy8gICAgIC5zdHlsZShcImZpbGxcIiwgXCIjNjliM2EyXCIpXG5cblxuXG5cblxuXG5cblxuXG4gICAgICAgIC8vIGZ1bmN0aW9uIHVwZGF0ZShzZWxlY3RlZEdyb3VwKSB7XG4gICAgICAgIC8vICAgICBsZXQgZGF0YUZpbHRlciA9IGRhdGEubWFwKGZ1bmN0aW9uKGQpIHJldHVybiB7dGltZTogfSlcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGQzLnNlbGVjdChcIiNzZWxlY3RCdXR0b25cIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAvLyAgICAgbGV0IHNlbGVjdGVkT3B0aW9uID0gZDMuc2VsZWN0KHRoaXMpLnByb3BlcnR5KFwidmFsdWVcIilcblxuICAgICAgICAvLyAgICAgUGF5bWVudFJlcXVlc3RVcGRhdGVFdmVudChzZWxlY3RlZE9wdGlvbilcbiAgICAgICAgLy8gfSlcbiAgICBcbiAgICAvLyBmaWx0ZXIgeWVhclxuICAgIC8vIGxldCBkYXRhID0gZGF0YS5maWx0ZXIoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuWWVhciA9PSAnMjAxMic7IH0pO1xuLy8gICAgIGNvbnNvbGUubG9nKHN0YXRlcylcbi8vICAgICAvLyBHZXQgZXZlcnkgY29sdW1uIHZhbHVlXG4vLyAgICAgbGV0IGVsZW1lbnRzID0gT2JqZWN0LmtleXMoc3RhdGVzWzBdKVxuLy8gICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gKChkICE9IFwiYWJyZXZpYXRpb25cIikgJiAoZCAhPSBcIm5hbWVcIikpO1xuLy8gICAgICAgICB9KTtcbi8vICAgICBjb25zb2xlLmxvZyhlbGVtZW50cylcblxuLy8gICAgIC8vIHZhciB4ID0gZDMuc2NhbGVPcmRpbmFsKClcbi8vICAgICAvLyAgICAgLmRvbWFpbihkYXRhLm1hcChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5uYW1lOyB9KSlcbi8vICAgICAvLyAgICAgLnJhbmdlUm91bmRCYW5kcyhbMCwgd2lkdGhdLCAwLjEpO1xuLy8gICAgIC8vIEluIGQzIHY0XG5cbi8vICAgICAvLyBJdCBzaG91bGQgaGF2ZSBiZWVuOlxuXG4vLyAgICAgLy8gdmFyIHggPSBkMy5zY2FsZUJhbmQoKVxuLy8gICAgIC8vICAgICAucmFuZ2VSb3VuZChbMCwgd2lkdGhdKVxuLy8gICAgIC8vICAgICAucGFkZGluZygwLjEpO1xuICAgIFxuLy8gICAgIGxldCB4U2NhbGUgPSBkMy5zY2FsZUJhbmQoKVxuLy8gICAgICAgICAucmFuZ2VSb3VuZChbMCwgd2lkdGhdKVxuLy8gICAgICAgICAucGFkZGluZygwLjEpXG4vLyAgICAgLy8gbGV0IHhTY2FsZSA9IGQzLnNjYWxlT3JkaW5hbCgpXG4vLyAgICAgLy8gICAgIC5kb21haW4oZWxlbWVudHMpXG4vLyAgICAgLy8gICAgIHJhbmdlUm91bmRCYW5kcyhbMCwgd2lkdGhdLCAwLjEpO1xuXG4vLyAgICAgbGV0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbi8vICAgICAgICAgLmRvbWFpbihbMCwgZDMubWF4KHN0YXRlcywgZnVuY3Rpb24oZCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuICtkW2VsZW1lbnRzWzBdXVxuLy8gICAgICAgICB9KV0pXG4vLyAgICAgICAgIC5yYW5nZShbaGVpZ2h0LCAwXSk7XG5cbi8vICAgICBsZXQgeEF4aXMgPSBkMy5zdmcuYXhpcygpXG4vLyAgICAgICAgIC5zY2FsZSh4U2NhbGUpXG4vLyAgICAgICAgIC5vcmllbnQoXCJib3R0b21cIik7XG5cbi8vICAgICBjYW52YXMuYXBwZW5kKFwiZ1wiKVxuLy8gICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieCBheGlzXCIpXG4vLyAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcbi8vICAgICAgICAgLmNhbGwoeEF4aXMpO1xuXG4vLyAgICAgbGV0IHlBeGlzID0gZDMuc3ZnLmF4aXMoKVxuLy8gICAgICAgICAuc2NhbGUoeVNjYWxlKVxuLy8gICAgICAgICAub3JpZW50KFwibGVmdFwiKTtcblxuLy8gICAgIGxldCB5QXhpc0hhbmRsZUZvclVwZGF0ZSA9IGNhbnZhcy5hcHBlbmQoXCJnXCIpXG4vLyAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5IGF4aXNcIilcbi8vICAgICAgICAgLmNhbGwoeUF4aXMpXG5cbi8vICAgICB5QXhpc0hhbmRsZUZvclVwZGF0ZS5hcHBlbmQoXCJ0ZXh0XCIpXG4vLyAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbi8vICAgICAgICAgLmF0dHIoXCJ5XCIsIDYpXG4vLyAgICAgICAgIC5hdHRyKFwiZHlcIiwgXCIuNzFlbVwiKVxuLy8gICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuLy8gICAgICAgICAudGV4dChcIlZhbHVlXCIpXG5cbi8vICAgICBsZXQgdXBkYXRlQmFycyA9IGZ1bmN0aW9uKGRhdGEpIHtcbi8vICAgICAgICAgeVNjYWxlLmRvbWFpbiggZDMuZXh0ZW50KGRhdGEpICk7XG4vLyAgICAgICAgIHlBeGlzSGFuZGxlRm9yVXBkYXRlLmNhbGwoeUF4aXMpO1xuXG4vLyAgICAgICAgIGxldCBiYXJzID0gY2FudmFzLnNlbGVjdEFsbChcIi5iYXJcIikuZGF0YShkYXRhKTtcblxuLy8gICAgICAgICBiYXJzLmVudGVyKClcbi8vICAgICAgICAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4vLyAgICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhclwiKVxuLy8gICAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkLGkpIHsgcmV0dXJuIHhTY2FsZSggZWxlbWVudHNbaV0gKTsgfSlcbi8vICAgICAgICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHhTY2FsZS5yYW5nZUJhbmQoKSlcbi8vICAgICAgICAgICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gaGVpZ2h0IC0geVNjYWxlKGQpOyB9KTtcblxuLy8gICAgICAgICBiYXJzXG4vLyAgICAgICAgICAgICAudHJhbnNpdGlvbigpLmR1cmF0aW9uKDI1MClcbi8vICAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkLGkpIHsgcmV0dXJuIHlTY2FsZShkKTsgfSlcbi8vICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uKGQsaSkgeyByZXR1cm4gaGVpZ2h0IC0geVNjYWxlKGQpOyB9KTtcblxuLy8gICAgICAgICBiYXJzLmV4aXQoKS5yZW1vdmUoKTtcbi8vICAgICB9O1xuXG4vLyAgICAgbGV0IGRyb3Bkb3duQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgIGxldCBuZXdTdGF0ZSA9IGQzLnNlbGVjdCh0aGlzKS5wcm9wZXJ0eShcInZhbHVlXCIpLFxuLy8gICAgICAgICAgICAgbmV3RGF0YSA9IHN0YXRlc1tuZXdTdGF0ZV07XG5cbi8vICAgICAgICAgdXBkYXRlQmFycyhuZXdTdGF0ZSk7XG4vLyAgICAgfTtcblxuLy8gICAgIGxldCBkcm9wZG93biA9IGQzLnNlbGVjdChcIiNkYXRhLXNlY3Rpb25cIilcbi8vICAgICAgICAgLmluc2VydChcInNlbGVjdFwiLCBcInN2Z1wiKVxuLy8gICAgICAgICAub24oXCJjaGFuZ2VcIiwgZHJvcGRvd25DaGFuZ2UpO1xuXG4vLyAgICAgZHJvcGRvd24uc2VsZWN0QWxsKFwib3B0aW9uXCIpXG4vLyAgICAgICAgIC5kYXRhKHN0YXRlTmFtZUFycmF5KVxuLy8gICAgICAgICAuZW50ZXIoKS5hcHBlbmQoXCJvcHRpb25cIilcbi8vICAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZDsgfSlcbi8vICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbi8vICAgICAgICAgICAgIHJldHVybiBkWzBdLnRvVXBwZXJDYXNlKCkgKyBkLnNsaWNlKDEsZC5sZW5ndGgpO1xuLy8gICAgICAgICB9KTtcblxuLy8gICAgIGxldCBpbml0aWFsRGF0YSA9IHN0YXRlc1sgc3RhdGVOYW1lc1swXSBdO1xuLy8gICAgIHVwZGF0ZUJhcnMoaW5pdGlhbERhdGEpO1xuXG4vLyAgICAgLy8gLy8gbGV0IHNlbGVjdGlvbiA9IGVsZW1lbnRzWzBdO1xuLy8gICAgIC8vIC8vIGNvbnNvbGUubG9nKHNlbGVjdGlvbilcblxuLy8gICAgIC8vIC8vIGxldCBwYWlycyA9IFxuICAgIFxuLy8gICAgIC8vIC8vIGxldCB5ID0gZDMuc2NhbGUubGluZWFyKClcbi8vICAgICAvLyAvLyAgICAgLmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIGZ1bmN0aW9uIChkKSB7XG4vLyAgICAgLy8gLy8gICAgICAgICByZXR1cm4gK2Rbc2VsZWN0aW9uXTtcbi8vICAgICAvLyAvLyAgICAgfSldKVxuLy8gICAgIC8vIC8vICAgICAucmFuZ2UoW2hlaWdodCwgMF0pO1xuXG4vLyAgICAgLy8gLy8gbGV0IHggPSBkMy5zY2FsZS5vcmRpbmFsKClcbi8vICAgICAvLyAvLyAgICAgLmRvbWFpbihkYXRhLm1hcChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5TdGF0ZTsgfSkpXG4vLyAgICAgLy8gLy8gICAgIC5yYW5nZUJhbmRzKFswLCB3aWR0aF0pO1xuXG4vLyAgICAgLy8gLy8gTWFrZSB4IHNjYWxlXG4vLyAgICAgLy8gbGV0IHggPSBkMy5zY2FsZS5vcmRpbmFsKClcbi8vICAgICAvLyAgICAgLmRvbWFpbihlbGVtZW50cylcbi8vICAgICAvLyAgICAgLnJhbmdlUm91bmRCYW5kcyhbMCwgd2lkdGhdLCAwLjEpO1xuXG4vLyAgICAgLy8gLy8gTWFrZSB5IHNjYWxlLCB0aGUgZG9tYWluIHdpbGwgYmUgZGVmaW5lZCBvbiBiYXIgdXBkYXRlXG4vLyAgICAgLy8gbGV0IHkgPSBkMy5zY2FsZS5saW5lYXIoKVxuLy8gICAgIC8vICAgICAucmFuZ2UoW2hlaWdodCwgMF0pO1xuICAgICAgICBcbi8vICAgICAvLyBsZXQgeEF4aXMgPSBkMy5zdmcuYXhpcygpXG4vLyAgICAgLy8gICAgIC5zY2FsZSh4KVxuLy8gICAgIC8vICAgICAub3JpZW50KFwiYm90dG9tXCIpO1xuXG4vLyAgICAgLy8gbGV0IHlBeGlzID0gZDMuc3ZnLmF4aXMoKVxuLy8gICAgIC8vICAgICAuc2NhbGUoeSlcbi8vICAgICAvLyAgICAgLm9yaWVudChcImxlZnRcIik7XG5cbi8vICAgICAvLyBzdmcuYXBwZW5kKFwiZ1wiKVxuLy8gICAgIC8vICAgICAuYXR0cihcImNsYXNzXCIsIFwieCBheGlzXCIpXG4vLyAgICAgLy8gICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcbi8vICAgICAvLyAgICAgLmNhbGwoeEF4aXMpXG4vLyAgICAgLy8gICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG4vLyAgICAgLy8gICAgIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjhweFwiKVxuLy8gICAgIC8vICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuLy8gICAgIC8vICAgICAuYXR0cihcImR4XCIsIFwiLS44ZW1cIilcbi8vICAgICAvLyAgICAgLmF0dHIoXCJkeVwiLCBcIi0uNTVlbVwiKVxuLy8gICAgIC8vICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpO1xuXG5cbi8vICAgICAvLyBzdmcuYXBwZW5kKFwiZ1wiKVxuLy8gICAgIC8vICAgICAuYXR0cihcImNsYXNzXCIsIFwieSBheGlzXCIpXG4vLyAgICAgLy8gICAgIC5jYWxsKHlBeGlzKTtcblxuLy8gICAgIC8vIHN2Zy5zZWxlY3RBbGwoXCJyZWN0YW5nbGVcIilcbi8vICAgICAvLyAgICAgLmRhdGEoZGF0YSlcbi8vICAgICAvLyAgICAgLmVudGVyKClcbi8vICAgICAvLyAgICAgLmFwcGVuZChcInJlY3RcIilcbi8vICAgICAvLyAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInJlY3RhbmdsZVwiKVxuLy8gICAgIC8vICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoIC8gZGF0YS5sZW5ndGgpXG4vLyAgICAgLy8gICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7XG4vLyAgICAgLy8gICAgICAgICByZXR1cm4gaGVpZ2h0IC0geSgrZFtzZWxlY3Rpb25dKTtcbi8vICAgICAvLyAgICAgfSlcbi8vICAgICAvLyAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4vLyAgICAgLy8gICAgICAgICByZXR1cm4gKHdpZHRoIC8gZGF0YS5sZW5ndGgpICogaTtcbi8vICAgICAvLyAgICAgfSlcbi8vICAgICAvLyAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7XG4vLyAgICAgLy8gICAgICAgICByZXR1cm4geSgrZFtzZWxlY3Rpb25dKTtcbi8vICAgICAvLyAgICAgfSlcbi8vICAgICAvLyAgICAgLmFwcGVuZChcInRpdGxlXCIpXG4vLyAgICAgLy8gICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4vLyAgICAgLy8gICAgICAgICByZXR1cm4gZC5TdGF0ZSArIFwiIDogXCIgKyBkW3NlbGVjdGlvbl07XG4vLyAgICAgLy8gICAgIH0pO1xuXG4vLyAgICAgLy8gbGV0IHNlbGVjdG9yID0gZDMuc2VsZWN0KFwiI2Ryb3BcIilcbi8vICAgICAvLyAgICAgLmFwcGVuZChcInNlbGVjdFwiKVxuLy8gICAgIC8vICAgICAuYXR0cihcImlkXCIsIFwiZHJvcGRvd25cIilcbi8vICAgICAvLyAgICAgLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChkKSB7XG4vLyAgICAgLy8gICAgICAgICBzZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duXCIpO1xuXG4vLyAgICAgLy8gICAgICAgICB5LmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIGZ1bmN0aW9uIChkKSB7XG4vLyAgICAgLy8gICAgICAgICAgICAgcmV0dXJuICtkW3NlbGVjdGlvbi52YWx1ZV07XG4vLyAgICAgLy8gICAgICAgICB9KV0pO1xuXG4vLyAgICAgLy8gICAgICAgICB5QXhpcy5zY2FsZSh5KTtcblxuLy8gICAgIC8vICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLnJlY3RhbmdsZVwiKVxuLy8gICAgIC8vICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbi8vICAgICAvLyAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkge1xuLy8gICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gaGVpZ2h0IC0geSgrZFtzZWxlY3Rpb24udmFsdWVdKTtcbi8vICAgICAvLyAgICAgICAgICAgICB9KVxuLy8gICAgIC8vICAgICAgICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbiAoZCwgaSkge1xuLy8gICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gKHdpZHRoIC8gZGF0YS5sZW5ndGgpICogaTtcbi8vICAgICAvLyAgICAgICAgICAgICB9KVxuLy8gICAgIC8vICAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkge1xuLy8gICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4geSgrZFtzZWxlY3Rpb24udmFsdWVdKTtcbi8vICAgICAvLyAgICAgICAgICAgICB9KVxuLy8gICAgIC8vICAgICAgICAgICAgIC5lYXNlKFwibGluZWFyXCIpXG4vLyAgICAgLy8gICAgICAgICAgICAgLnNlbGVjdChcInRpdGxlXCIpXG4vLyAgICAgLy8gICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbi8vICAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIGQuU3RhdGUgKyBcIiA6IFwiICsgZFtzZWxlY3Rpb24udmFsdWVdO1xuLy8gICAgIC8vICAgICAgICAgICAgIH0pO1xuXG4vLyAgICAgLy8gICAgICAgICBkMy5zZWxlY3RBbGwoXCJnLnkuYXhpc1wiKVxuLy8gICAgIC8vICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbi8vICAgICAvLyAgICAgICAgICAgICAuY2FsbCh5QXhpcyk7XG5cbi8vICAgICAvLyAgICAgfSk7XG5cbi8vICAgICAvLyBzZWxlY3Rvci5zZWxlY3RBbGwoXCJvcHRpb25cIilcbi8vICAgICAvLyAgICAgLmRhdGEoZWxlbWVudHMpXG4vLyAgICAgLy8gICAgIC5lbnRlcigpLmFwcGVuZChcIm9wdGlvblwiKVxuLy8gICAgIC8vICAgICAuYXR0cihcInZhbHVlXCIsIGZ1bmN0aW9uIChkKSB7XG4vLyAgICAgLy8gICAgICAgICByZXR1cm4gZDtcbi8vICAgICAvLyAgICAgfSlcbi8vICAgICAvLyAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbi8vICAgICAvLyAgICAgICAgIHJldHVybiBkO1xuLy8gICAgIC8vICAgICB9KVxufVxuXG4pO1xuXG5cblxufSkiXSwic291cmNlUm9vdCI6IiJ9