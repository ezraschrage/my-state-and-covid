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
var stateNameArray = Object.keys(stateNames); // console.log(stateNameArray)

var margin = {
  top: 80,
  right: 180,
  bottom: 80,
  left: 180
},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
var canvas = d3.select("#data-section").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
document.addEventListener("DOMContentLoaded", function () {
  // const states = {};
  var states = []; // console.log(data)

  d3.csv("https://covidtracking.com/api/v1/states/current.csv", function (stateData) {
    for (var i = 0; i < stateData.length; i += 1) {
      var state = stateData[i];
      var name = state.state; // data[`${name}`] = {

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
      }); // console.log(data)
    } // filter year
    // let data = data.filter(function (d) { return d.Year == '2012'; });


    console.log(states); // Get every column value

    var elements = Object.keys(states[0]).filter(function (d) {
      return d != "abreviation" & d != "name";
    });
    console.log(elements); // var x = d3.scaleOrdinal()
    //     .domain(data.map(function (d) { return d.name; }))
    //     .rangeRoundBands([0, width], 0.1);
    // In d3 v4
    // It should have been:
    // var x = d3.scaleBand()
    //     .rangeRound([0, width])
    //     .padding(0.1);

    var xScale = d3.scaleBand().rangeRound([0, width]).padding(0.1); // let xScale = d3.scaleOrdinal()
    //     .domain(elements)
    //     rangeRoundBands([0, width], 0.1);

    var yScale = d3.scaleLinear().domain([0, d3.max(states, function (d) {
      return +d[elements[0]];
    })]).range([height, 0]);
    var xAxis = d3.svg.axis().scale(xScale).orient("bottom");
    canvas.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);
    var yAxis = d3.svg.axis().scale(yScale).orient("left");
    var yAxisHandleForUpdate = canvas.append("g").attr("class", "y axis").call(yAxis);
    yAxisHandleForUpdate.append("text").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", ".71em").style("text-anchor", "end").text("Value");

    var updateBars = function updateBars(data) {
      yScale.domain(d3.extent(data));
      yAxisHandleForUpdate.call(yAxis);
      var bars = canvas.selectAll(".bar").data(data);
      bars.enter().append("rect").attr("class", "bar").attr("x", function (d, i) {
        return xScale(elements[i]);
      }).attr("width", xScale.rangeBand()).attr("y", function (d, i) {
        return height - yScale(d);
      });
      bars.transition().duration(250).attr("y", function (d, i) {
        return yScale(d);
      }).attr("height", function (d, i) {
        return height - yScale(d);
      });
      bars.exit().remove();
    };

    var dropdownChange = function dropdownChange() {
      var newState = d3.select(this).property("value"),
          newData = states[newState];
      updateBars(newState);
    };

    var dropdown = d3.select("#data-section").insert("select", "svg").on("change", dropdownChange);
    dropdown.selectAll("option").data(stateNameArray).enter().append("option").attr("value", function (d) {
      return d;
    }).text(function (d) {
      return d[0].toUpperCase() + d.slice(1, d.length);
    });
    var initialData = states[stateNames[0]];
    updateBars(initialData); // // let selection = elements[0];
    // // console.log(selection)
    // // let pairs = 
    // // let y = d3.scale.linear()
    // //     .domain([0, d3.max(data, function (d) {
    // //         return +d[selection];
    // //     })])
    // //     .range([height, 0]);
    // // let x = d3.scale.ordinal()
    // //     .domain(data.map(function (d) { return d.State; }))
    // //     .rangeBands([0, width]);
    // // Make x scale
    // let x = d3.scale.ordinal()
    //     .domain(elements)
    //     .rangeRoundBands([0, width], 0.1);
    // // Make y scale, the domain will be defined on bar update
    // let y = d3.scale.linear()
    //     .range([height, 0]);
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
  });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInN0YXRlTmFtZXMiLCJzdGF0ZU5hbWVBcnJheSIsIk9iamVjdCIsImtleXMiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsImNhbnZhcyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXRlcyIsImNzdiIsInN0YXRlRGF0YSIsImkiLCJsZW5ndGgiLCJzdGF0ZSIsIm5hbWUiLCJwdXNoIiwiYWJyZXZpYXRpb24iLCJwb3NpdGl2ZSIsInBhcnNlSW50IiwibmVnYXRpdmUiLCJkZWF0aCIsInRvdGFsVGVzdFJlc3VsdHMiLCJob3NwaXRhbGl6ZWRDdXJyZW50bHkiLCJob3NwaXRhbGl6ZWRDdW11bGF0aXZlIiwiaW5JY3VDdXJyZW50bHkiLCJpbkljdUN1bXVsYXRpdmUiLCJvblZlbnRpbGF0b3JDdXJyZW50bHkiLCJvblZlbnRpbGF0b3JDdW11bGF0aXZlIiwicmVjb3ZlcmVkIiwiaG9zcGl0YWxpemVkIiwiY29uc29sZSIsImxvZyIsImVsZW1lbnRzIiwiZmlsdGVyIiwiZCIsInhTY2FsZSIsInNjYWxlQmFuZCIsInJhbmdlUm91bmQiLCJwYWRkaW5nIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJtYXgiLCJyYW5nZSIsInhBeGlzIiwic3ZnIiwiYXhpcyIsInNjYWxlIiwib3JpZW50IiwiY2FsbCIsInlBeGlzIiwieUF4aXNIYW5kbGVGb3JVcGRhdGUiLCJzdHlsZSIsInRleHQiLCJ1cGRhdGVCYXJzIiwiZGF0YSIsImV4dGVudCIsImJhcnMiLCJzZWxlY3RBbGwiLCJlbnRlciIsInJhbmdlQmFuZCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4aXQiLCJyZW1vdmUiLCJkcm9wZG93bkNoYW5nZSIsIm5ld1N0YXRlIiwicHJvcGVydHkiLCJuZXdEYXRhIiwiZHJvcGRvd24iLCJpbnNlcnQiLCJvbiIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJpbml0aWFsRGF0YSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLElBQU1BLFVBQVUsR0FBRztBQUNmLFFBQU0sU0FEUztBQUVmLFFBQU0sUUFGUztBQUdmLFFBQU0sZ0JBSFM7QUFJZixRQUFNLFNBSlM7QUFLZixRQUFNLFVBTFM7QUFNZixRQUFNLFlBTlM7QUFPZixRQUFNLFVBUFM7QUFRZixRQUFNLGFBUlM7QUFTZixRQUFNLFVBVFM7QUFVZixRQUFNLHNCQVZTO0FBV2YsUUFBTSxnQ0FYUztBQVlmLFFBQU0sU0FaUztBQWFmLFFBQU0sU0FiUztBQWNmLFFBQU0sTUFkUztBQWVmLFFBQU0sUUFmUztBQWdCZixRQUFNLE9BaEJTO0FBaUJmLFFBQU0sVUFqQlM7QUFrQmYsUUFBTSxTQWxC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QUFDQWdFLGNBQVUsQ0FBQ29CLFdBQUQsQ0FBVixDQTVIK0UsQ0E4SC9FO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsR0E5T0Q7QUFvUEMsQ0E3UEQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBzdGF0ZU5hbWVzID0ge1xuICAgIFwiQUxcIjogXCJBbGFiYW1hXCIsXG4gICAgXCJBS1wiOiBcIkFsYXNrYVwiLFxuICAgIFwiQVNcIjogXCJBbWVyaWNhbiBTYW1vYVwiLFxuICAgIFwiQVpcIjogXCJBcml6b25hXCIsXG4gICAgXCJBUlwiOiBcIkFya2Fuc2FzXCIsXG4gICAgXCJDQVwiOiBcIkNhbGlmb3JuaWFcIixcbiAgICBcIkNPXCI6IFwiQ29sb3JhZG9cIixcbiAgICBcIkNUXCI6IFwiQ29ubmVjdGljdXRcIixcbiAgICBcIkRFXCI6IFwiRGVsYXdhcmVcIixcbiAgICBcIkRDXCI6IFwiRGlzdHJpY3QgT2YgQ29sdW1iaWFcIixcbiAgICBcIkZNXCI6IFwiRmVkZXJhdGVkIFN0YXRlcyBPZiBNaWNyb25lc2lhXCIsXG4gICAgXCJGTFwiOiBcIkZsb3JpZGFcIixcbiAgICBcIkdBXCI6IFwiR2VvcmdpYVwiLFxuICAgIFwiR1VcIjogXCJHdWFtXCIsXG4gICAgXCJISVwiOiBcIkhhd2FpaVwiLFxuICAgIFwiSURcIjogXCJJZGFob1wiLFxuICAgIFwiSUxcIjogXCJJbGxpbm9pc1wiLFxuICAgIFwiSU5cIjogXCJJbmRpYW5hXCIsXG4gICAgXCJJQVwiOiBcIklvd2FcIixcbiAgICBcIktTXCI6IFwiS2Fuc2FzXCIsXG4gICAgXCJLWVwiOiBcIktlbnR1Y2t5XCIsXG4gICAgXCJMQVwiOiBcIkxvdWlzaWFuYVwiLFxuICAgIFwiTUVcIjogXCJNYWluZVwiLFxuICAgIFwiTUhcIjogXCJNYXJzaGFsbCBJc2xhbmRzXCIsXG4gICAgXCJNRFwiOiBcIk1hcnlsYW5kXCIsXG4gICAgXCJNQVwiOiBcIk1hc3NhY2h1c2V0dHNcIixcbiAgICBcIk1JXCI6IFwiTWljaGlnYW5cIixcbiAgICBcIk1OXCI6IFwiTWlubmVzb3RhXCIsXG4gICAgXCJNU1wiOiBcIk1pc3Npc3NpcHBpXCIsXG4gICAgXCJNT1wiOiBcIk1pc3NvdXJpXCIsXG4gICAgXCJNVFwiOiBcIk1vbnRhbmFcIixcbiAgICBcIk5FXCI6IFwiTmVicmFza2FcIixcbiAgICBcIk5WXCI6IFwiTmV2YWRhXCIsXG4gICAgXCJOSFwiOiBcIk5ldyBIYW1wc2hpcmVcIixcbiAgICBcIk5KXCI6IFwiTmV3IEplcnNleVwiLFxuICAgIFwiTk1cIjogXCJOZXcgTWV4aWNvXCIsXG4gICAgXCJOWVwiOiBcIk5ldyBZb3JrXCIsXG4gICAgXCJOQ1wiOiBcIk5vcnRoIENhcm9saW5hXCIsXG4gICAgXCJORFwiOiBcIk5vcnRoIERha290YVwiLFxuICAgIFwiTVBcIjogXCJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHNcIixcbiAgICBcIk9IXCI6IFwiT2hpb1wiLFxuICAgIFwiT0tcIjogXCJPa2xhaG9tYVwiLFxuICAgIFwiT1JcIjogXCJPcmVnb25cIixcbiAgICBcIlBXXCI6IFwiUGFsYXVcIixcbiAgICBcIlBBXCI6IFwiUGVubnN5bHZhbmlhXCIsXG4gICAgXCJQUlwiOiBcIlB1ZXJ0byBSaWNvXCIsXG4gICAgXCJSSVwiOiBcIlJob2RlIElzbGFuZFwiLFxuICAgIFwiU0NcIjogXCJTb3V0aCBDYXJvbGluYVwiLFxuICAgIFwiU0RcIjogXCJTb3V0aCBEYWtvdGFcIixcbiAgICBcIlROXCI6IFwiVGVubmVzc2VlXCIsXG4gICAgXCJUWFwiOiBcIlRleGFzXCIsXG4gICAgXCJVVFwiOiBcIlV0YWhcIixcbiAgICBcIlZUXCI6IFwiVmVybW9udFwiLFxuICAgIFwiVklcIjogXCJWaXJnaW4gSXNsYW5kc1wiLFxuICAgIFwiVkFcIjogXCJWaXJnaW5pYVwiLFxuICAgIFwiV0FcIjogXCJXYXNoaW5ndG9uXCIsXG4gICAgXCJXVlwiOiBcIldlc3QgVmlyZ2luaWFcIixcbiAgICBcIldJXCI6IFwiV2lzY29uc2luXCIsXG4gICAgXCJXWVwiOiBcIld5b21pbmdcIlxufVxuXG5sZXQgc3RhdGVOYW1lQXJyYXkgPSBPYmplY3Qua2V5cyhzdGF0ZU5hbWVzKTtcbi8vIGNvbnNvbGUubG9nKHN0YXRlTmFtZUFycmF5KVxuXG5sZXQgbWFyZ2luID0geyB0b3A6IDgwLCByaWdodDogMTgwLCBib3R0b206IDgwLCBsZWZ0OiAxODAgfSxcbiAgICB3aWR0aCA9IDk2MCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0LFxuICAgIGhlaWdodCA9IDUwMCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG5sZXQgY2FudmFzID0gZDMuc2VsZWN0KFwiI2RhdGEtc2VjdGlvblwiKS5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1hcmdpbi5sZWZ0ICsgXCIsXCIgKyBtYXJnaW4udG9wICsgXCIpXCIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cblxuXG4vLyBjb25zdCBzdGF0ZXMgPSB7fTtcbmNvbnN0IHN0YXRlcyA9IFtdO1xuLy8gY29uc29sZS5sb2coZGF0YSlcblxuXG5kMy5jc3YoXCJodHRwczovL2NvdmlkdHJhY2tpbmcuY29tL2FwaS92MS9zdGF0ZXMvY3VycmVudC5jc3ZcIiwgZnVuY3Rpb24gKHN0YXRlRGF0YSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGVEYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gc3RhdGVEYXRhW2ldO1xuICAgICAgICBjb25zdCBuYW1lID0gc3RhdGUuc3RhdGU7XG4gICAgICAgIC8vIGRhdGFbYCR7bmFtZX1gXSA9IHtcbiAgICAgICAgc3RhdGVzLnB1c2goIHtcbiAgICAgICAgICAgIGFicmV2aWF0aW9uOiBuYW1lLFxuICAgICAgICAgICAgbmFtZTogc3RhdGVOYW1lc1tuYW1lXSxcbiAgICAgICAgICAgIHBvc2l0aXZlOiBwYXJzZUludChzdGF0ZS5wb3NpdGl2ZSksXG4gICAgICAgICAgICBuZWdhdGl2ZTogcGFyc2VJbnQoc3RhdGUubmVnYXRpdmUpLFxuICAgICAgICAgICAgZGVhdGg6IHBhcnNlSW50KHN0YXRlLmRlYXRoKSxcbiAgICAgICAgICAgIHRvdGFsVGVzdFJlc3VsdHM6IHBhcnNlSW50KHN0YXRlLnRvdGFsVGVzdFJlc3VsdHMpLFxuICAgICAgICAgICAgaG9zcGl0YWxpemVkQ3VycmVudGx5OiBwYXJzZUludChzdGF0ZS5ob3NwaXRhbGl6ZWRDdXJyZW50bHkpLFxuICAgICAgICAgICAgaG9zcGl0YWxpemVkQ3VtdWxhdGl2ZTogcGFyc2VJbnQoc3RhdGUuaG9zcGl0YWxpemVkQ3VtdWxhdGl2ZSksXG4gICAgICAgICAgICBpbkljdUN1cnJlbnRseTogcGFyc2VJbnQoc3RhdGUuaW5JY3VDdXJyZW50bHkpLFxuICAgICAgICAgICAgaW5JY3VDdW11bGF0aXZlOiBwYXJzZUludChzdGF0ZS5pbkljdUN1bXVsYXRpdmUpLFxuICAgICAgICAgICAgb25WZW50aWxhdG9yQ3VycmVudGx5OiBwYXJzZUludChzdGF0ZS5vblZlbnRpbGF0b3JDdXJyZW50bHkpLFxuICAgICAgICAgICAgb25WZW50aWxhdG9yQ3VtdWxhdGl2ZTogcGFyc2VJbnQoc3RhdGUub25WZW50aWxhdG9yQ3VtdWxhdGl2ZSksXG4gICAgICAgICAgICByZWNvdmVyZWQ6IHBhcnNlSW50KHN0YXRlLnJlY292ZXJlZCksXG4gICAgICAgICAgICBob3NwaXRhbGl6ZWQ6IHBhcnNlSW50KHN0YXRlLmhvc3BpdGFsaXplZClcbiAgICAgICAgfSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICB9XG5cbiAgICBcbiAgICAvLyBmaWx0ZXIgeWVhclxuICAgIC8vIGxldCBkYXRhID0gZGF0YS5maWx0ZXIoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuWWVhciA9PSAnMjAxMic7IH0pO1xuICAgIGNvbnNvbGUubG9nKHN0YXRlcylcbiAgICAvLyBHZXQgZXZlcnkgY29sdW1uIHZhbHVlXG4gICAgbGV0IGVsZW1lbnRzID0gT2JqZWN0LmtleXMoc3RhdGVzWzBdKVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gKChkICE9IFwiYWJyZXZpYXRpb25cIikgJiAoZCAhPSBcIm5hbWVcIikpO1xuICAgICAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50cylcblxuICAgIC8vIHZhciB4ID0gZDMuc2NhbGVPcmRpbmFsKClcbiAgICAvLyAgICAgLmRvbWFpbihkYXRhLm1hcChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5uYW1lOyB9KSlcbiAgICAvLyAgICAgLnJhbmdlUm91bmRCYW5kcyhbMCwgd2lkdGhdLCAwLjEpO1xuICAgIC8vIEluIGQzIHY0XG5cbiAgICAvLyBJdCBzaG91bGQgaGF2ZSBiZWVuOlxuXG4gICAgLy8gdmFyIHggPSBkMy5zY2FsZUJhbmQoKVxuICAgIC8vICAgICAucmFuZ2VSb3VuZChbMCwgd2lkdGhdKVxuICAgIC8vICAgICAucGFkZGluZygwLjEpO1xuICAgIFxuICAgIGxldCB4U2NhbGUgPSBkMy5zY2FsZUJhbmQoKVxuICAgICAgICAucmFuZ2VSb3VuZChbMCwgd2lkdGhdKVxuICAgICAgICAucGFkZGluZygwLjEpXG4gICAgLy8gbGV0IHhTY2FsZSA9IGQzLnNjYWxlT3JkaW5hbCgpXG4gICAgLy8gICAgIC5kb21haW4oZWxlbWVudHMpXG4gICAgLy8gICAgIHJhbmdlUm91bmRCYW5kcyhbMCwgd2lkdGhdLCAwLjEpO1xuXG4gICAgbGV0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgLmRvbWFpbihbMCwgZDMubWF4KHN0YXRlcywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgcmV0dXJuICtkW2VsZW1lbnRzWzBdXVxuICAgICAgICB9KV0pXG4gICAgICAgIC5yYW5nZShbaGVpZ2h0LCAwXSk7XG5cbiAgICBsZXQgeEF4aXMgPSBkMy5zdmcuYXhpcygpXG4gICAgICAgIC5zY2FsZSh4U2NhbGUpXG4gICAgICAgIC5vcmllbnQoXCJib3R0b21cIik7XG5cbiAgICBjYW52YXMuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieCBheGlzXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcbiAgICAgICAgLmNhbGwoeEF4aXMpO1xuXG4gICAgbGV0IHlBeGlzID0gZDMuc3ZnLmF4aXMoKVxuICAgICAgICAuc2NhbGUoeVNjYWxlKVxuICAgICAgICAub3JpZW50KFwibGVmdFwiKTtcblxuICAgIGxldCB5QXhpc0hhbmRsZUZvclVwZGF0ZSA9IGNhbnZhcy5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5IGF4aXNcIilcbiAgICAgICAgLmNhbGwoeUF4aXMpXG5cbiAgICB5QXhpc0hhbmRsZUZvclVwZGF0ZS5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIDYpXG4gICAgICAgIC5hdHRyKFwiZHlcIiwgXCIuNzFlbVwiKVxuICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAgICAgICAudGV4dChcIlZhbHVlXCIpXG5cbiAgICBsZXQgdXBkYXRlQmFycyA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgeVNjYWxlLmRvbWFpbiggZDMuZXh0ZW50KGRhdGEpICk7XG4gICAgICAgIHlBeGlzSGFuZGxlRm9yVXBkYXRlLmNhbGwoeUF4aXMpO1xuXG4gICAgICAgIGxldCBiYXJzID0gY2FudmFzLnNlbGVjdEFsbChcIi5iYXJcIikuZGF0YShkYXRhKTtcblxuICAgICAgICBiYXJzLmVudGVyKClcbiAgICAgICAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhclwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkLGkpIHsgcmV0dXJuIHhTY2FsZSggZWxlbWVudHNbaV0gKTsgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHhTY2FsZS5yYW5nZUJhbmQoKSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gaGVpZ2h0IC0geVNjYWxlKGQpOyB9KTtcblxuICAgICAgICBiYXJzXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkLGkpIHsgcmV0dXJuIHlTY2FsZShkKTsgfSlcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uKGQsaSkgeyByZXR1cm4gaGVpZ2h0IC0geVNjYWxlKGQpOyB9KTtcblxuICAgICAgICBiYXJzLmV4aXQoKS5yZW1vdmUoKTtcbiAgICB9O1xuXG4gICAgbGV0IGRyb3Bkb3duQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IGQzLnNlbGVjdCh0aGlzKS5wcm9wZXJ0eShcInZhbHVlXCIpLFxuICAgICAgICAgICAgbmV3RGF0YSA9IHN0YXRlc1tuZXdTdGF0ZV07XG5cbiAgICAgICAgdXBkYXRlQmFycyhuZXdTdGF0ZSk7XG4gICAgfTtcblxuICAgIGxldCBkcm9wZG93biA9IGQzLnNlbGVjdChcIiNkYXRhLXNlY3Rpb25cIilcbiAgICAgICAgLmluc2VydChcInNlbGVjdFwiLCBcInN2Z1wiKVxuICAgICAgICAub24oXCJjaGFuZ2VcIiwgZHJvcGRvd25DaGFuZ2UpO1xuXG4gICAgZHJvcGRvd24uc2VsZWN0QWxsKFwib3B0aW9uXCIpXG4gICAgICAgIC5kYXRhKHN0YXRlTmFtZUFycmF5KVxuICAgICAgICAuZW50ZXIoKS5hcHBlbmQoXCJvcHRpb25cIilcbiAgICAgICAgLmF0dHIoXCJ2YWx1ZVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZDsgfSlcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkWzBdLnRvVXBwZXJDYXNlKCkgKyBkLnNsaWNlKDEsZC5sZW5ndGgpO1xuICAgICAgICB9KTtcblxuICAgIGxldCBpbml0aWFsRGF0YSA9IHN0YXRlc1sgc3RhdGVOYW1lc1swXSBdO1xuICAgIHVwZGF0ZUJhcnMoaW5pdGlhbERhdGEpO1xuXG4gICAgLy8gLy8gbGV0IHNlbGVjdGlvbiA9IGVsZW1lbnRzWzBdO1xuICAgIC8vIC8vIGNvbnNvbGUubG9nKHNlbGVjdGlvbilcblxuICAgIC8vIC8vIGxldCBwYWlycyA9IFxuICAgIFxuICAgIC8vIC8vIGxldCB5ID0gZDMuc2NhbGUubGluZWFyKClcbiAgICAvLyAvLyAgICAgLmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIGZ1bmN0aW9uIChkKSB7XG4gICAgLy8gLy8gICAgICAgICByZXR1cm4gK2Rbc2VsZWN0aW9uXTtcbiAgICAvLyAvLyAgICAgfSldKVxuICAgIC8vIC8vICAgICAucmFuZ2UoW2hlaWdodCwgMF0pO1xuXG4gICAgLy8gLy8gbGV0IHggPSBkMy5zY2FsZS5vcmRpbmFsKClcbiAgICAvLyAvLyAgICAgLmRvbWFpbihkYXRhLm1hcChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5TdGF0ZTsgfSkpXG4gICAgLy8gLy8gICAgIC5yYW5nZUJhbmRzKFswLCB3aWR0aF0pO1xuXG4gICAgLy8gLy8gTWFrZSB4IHNjYWxlXG4gICAgLy8gbGV0IHggPSBkMy5zY2FsZS5vcmRpbmFsKClcbiAgICAvLyAgICAgLmRvbWFpbihlbGVtZW50cylcbiAgICAvLyAgICAgLnJhbmdlUm91bmRCYW5kcyhbMCwgd2lkdGhdLCAwLjEpO1xuXG4gICAgLy8gLy8gTWFrZSB5IHNjYWxlLCB0aGUgZG9tYWluIHdpbGwgYmUgZGVmaW5lZCBvbiBiYXIgdXBkYXRlXG4gICAgLy8gbGV0IHkgPSBkMy5zY2FsZS5saW5lYXIoKVxuICAgIC8vICAgICAucmFuZ2UoW2hlaWdodCwgMF0pO1xuICAgICAgICBcbiAgICAvLyBsZXQgeEF4aXMgPSBkMy5zdmcuYXhpcygpXG4gICAgLy8gICAgIC5zY2FsZSh4KVxuICAgIC8vICAgICAub3JpZW50KFwiYm90dG9tXCIpO1xuXG4gICAgLy8gbGV0IHlBeGlzID0gZDMuc3ZnLmF4aXMoKVxuICAgIC8vICAgICAuc2NhbGUoeSlcbiAgICAvLyAgICAgLm9yaWVudChcImxlZnRcIik7XG5cbiAgICAvLyBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgIC8vICAgICAuYXR0cihcImNsYXNzXCIsIFwieCBheGlzXCIpXG4gICAgLy8gICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcbiAgICAvLyAgICAgLmNhbGwoeEF4aXMpXG4gICAgLy8gICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG4gICAgLy8gICAgIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjhweFwiKVxuICAgIC8vICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAgIC8vICAgICAuYXR0cihcImR4XCIsIFwiLS44ZW1cIilcbiAgICAvLyAgICAgLmF0dHIoXCJkeVwiLCBcIi0uNTVlbVwiKVxuICAgIC8vICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpO1xuXG5cbiAgICAvLyBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgIC8vICAgICAuYXR0cihcImNsYXNzXCIsIFwieSBheGlzXCIpXG4gICAgLy8gICAgIC5jYWxsKHlBeGlzKTtcblxuICAgIC8vIHN2Zy5zZWxlY3RBbGwoXCJyZWN0YW5nbGVcIilcbiAgICAvLyAgICAgLmRhdGEoZGF0YSlcbiAgICAvLyAgICAgLmVudGVyKClcbiAgICAvLyAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAvLyAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInJlY3RhbmdsZVwiKVxuICAgIC8vICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoIC8gZGF0YS5sZW5ndGgpXG4gICAgLy8gICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgLy8gICAgICAgICByZXR1cm4gaGVpZ2h0IC0geSgrZFtzZWxlY3Rpb25dKTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgLy8gICAgICAgICByZXR1cm4gKHdpZHRoIC8gZGF0YS5sZW5ndGgpICogaTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgLy8gICAgICAgICByZXR1cm4geSgrZFtzZWxlY3Rpb25dKTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgLmFwcGVuZChcInRpdGxlXCIpXG4gICAgLy8gICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgLy8gICAgICAgICByZXR1cm4gZC5TdGF0ZSArIFwiIDogXCIgKyBkW3NlbGVjdGlvbl07XG4gICAgLy8gICAgIH0pO1xuXG4gICAgLy8gbGV0IHNlbGVjdG9yID0gZDMuc2VsZWN0KFwiI2Ryb3BcIilcbiAgICAvLyAgICAgLmFwcGVuZChcInNlbGVjdFwiKVxuICAgIC8vICAgICAuYXR0cihcImlkXCIsIFwiZHJvcGRvd25cIilcbiAgICAvLyAgICAgLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgLy8gICAgICAgICBzZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duXCIpO1xuXG4gICAgLy8gICAgICAgICB5LmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIGZ1bmN0aW9uIChkKSB7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuICtkW3NlbGVjdGlvbi52YWx1ZV07XG4gICAgLy8gICAgICAgICB9KV0pO1xuXG4gICAgLy8gICAgICAgICB5QXhpcy5zY2FsZSh5KTtcblxuICAgIC8vICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLnJlY3RhbmdsZVwiKVxuICAgIC8vICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAvLyAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbiAoZCkge1xuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gaGVpZ2h0IC0geSgrZFtzZWxlY3Rpb24udmFsdWVdKTtcbiAgICAvLyAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gKHdpZHRoIC8gZGF0YS5sZW5ndGgpICogaTtcbiAgICAvLyAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkge1xuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4geSgrZFtzZWxlY3Rpb24udmFsdWVdKTtcbiAgICAvLyAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgICAgIC5lYXNlKFwibGluZWFyXCIpXG4gICAgLy8gICAgICAgICAgICAgLnNlbGVjdChcInRpdGxlXCIpXG4gICAgLy8gICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIGQuU3RhdGUgKyBcIiA6IFwiICsgZFtzZWxlY3Rpb24udmFsdWVdO1xuICAgIC8vICAgICAgICAgICAgIH0pO1xuXG4gICAgLy8gICAgICAgICBkMy5zZWxlY3RBbGwoXCJnLnkuYXhpc1wiKVxuICAgIC8vICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAvLyAgICAgICAgICAgICAuY2FsbCh5QXhpcyk7XG5cbiAgICAvLyAgICAgfSk7XG5cbiAgICAvLyBzZWxlY3Rvci5zZWxlY3RBbGwoXCJvcHRpb25cIilcbiAgICAvLyAgICAgLmRhdGEoZWxlbWVudHMpXG4gICAgLy8gICAgIC5lbnRlcigpLmFwcGVuZChcIm9wdGlvblwiKVxuICAgIC8vICAgICAuYXR0cihcInZhbHVlXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgLy8gICAgICAgICByZXR1cm4gZDtcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiBkO1xuICAgIC8vICAgICB9KVxufVxuXG4pO1xuXG5cblxufSkiXSwic291cmNlUm9vdCI6IiJ9