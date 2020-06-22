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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener("DOMContentLoaded", function () {
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
  var margin = {
    top: 80,
    right: 180,
    bottom: 80,
    left: 180
  },
      width = 1000,
      height = 1000;
  var svg = d3.select("#data-section").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  var x = d3.scaleBand().range([0, width]).padding(1);
  var xAxis = svg.append("g").attr("transform", "translate(0," + height + ")");
  var y = d3.scaleLinear().range([height, 0]);
  var yAxis = svg.append('g');

  var findMax = function findMax(data) {
    var values = Object.values(data);
    var onlyNums = values.map(function (num) {
      if (typeof num !== "number" || isNaN(num)) {
        return 0;
      } else {
        return num;
      }
    });
    return Math.max.apply(Math, _toConsumableArray(onlyNums));
  };

  function selectState(selectedState) {
    d3.csv("https://covidtracking.com/api/v1/states/current.csv", function (data) {
      var _loop = function _loop(i) {
        var state = data[i];
        var name = state.state; // console.log(data)
        // data[`${name}`] = {

        data.forEach(function (d) {
          abreviation: name, d.name = stateNames[name], d.positive = isNaN(parseInt(state.positive)) ? 0 : parseInt(state.positive), dnegative = isNaN(parseInt(state.negative)) ? 0 : parseInt(state.negative), d.death = isNaN(parseInt(state.death)) ? 0 : parseInt(state.death), d.totalTestResults = isNaN(parseInt(state.totalTestResults)) ? 0 : parseInt(state.totalTestResults), d.hospitalizedCurrently = isNaN(parseInt(state.hospitalizedCurrently)) ? 0 : parseInt(state.hospitalizedCurrently), d.hospitalizedCumulative = isNaN(parseInt(state.hospitalizedCumulative)) ? 0 : parseInt(state.hospitalizedCumulative), d.inIcuCurrently = isNaN(parseInt(state.inIcuCurrently)) ? 0 : parseInt(state.inIcuCurrently), d.inIcuCumulative = isNaN(parseInt(state.inIcuCumulative)) ? 0 : parseInt(state.inIcuCumulative), d.onVentilatorCurrently = isNaN(parseInt(state.onVentilatorCurrently)) ? 0 : parseInt(state.onVentilatorCurrently), d.onVentilatorCumulative = isNaN(parseInt(state.onVentilatorCumulative)) ? 0 : parseInt(state.onVentilatorCumulative), d.recovered = isNaN(parseInt(state.recovered)) ? 0 : parseInt(state.recovered), d.hospitalized = isNaN(parseInt(state.hospitalized)) ? 0 : parseInt(state.hospitalized);
        });
      };

      // console.log(data)
      for (var i = 0; i < data.length; i += 1) {
        _loop(i);
      }

      var selection = Object.keys(data[37]).filter(function (key) {
        return categories.includes(key);
      }).reduce(function (obj, key) {
        return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, key, states[37][key]));
      }, {});
    });
  }

  selectState("NY");
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXRlTmFtZXMiLCJzdGF0ZU5hbWVBcnJheSIsIk9iamVjdCIsImtleXMiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsIngiLCJzY2FsZUJhbmQiLCJyYW5nZSIsInBhZGRpbmciLCJ4QXhpcyIsInkiLCJzY2FsZUxpbmVhciIsInlBeGlzIiwiZmluZE1heCIsImRhdGEiLCJ2YWx1ZXMiLCJvbmx5TnVtcyIsIm1hcCIsIm51bSIsImlzTmFOIiwiTWF0aCIsIm1heCIsInNlbGVjdFN0YXRlIiwic2VsZWN0ZWRTdGF0ZSIsImNzdiIsImkiLCJzdGF0ZSIsIm5hbWUiLCJmb3JFYWNoIiwiZCIsImFicmV2aWF0aW9uIiwicG9zaXRpdmUiLCJwYXJzZUludCIsImRuZWdhdGl2ZSIsIm5lZ2F0aXZlIiwiZGVhdGgiLCJ0b3RhbFRlc3RSZXN1bHRzIiwiaG9zcGl0YWxpemVkQ3VycmVudGx5IiwiaG9zcGl0YWxpemVkQ3VtdWxhdGl2ZSIsImluSWN1Q3VycmVudGx5IiwiaW5JY3VDdW11bGF0aXZlIiwib25WZW50aWxhdG9yQ3VycmVudGx5Iiwib25WZW50aWxhdG9yQ3VtdWxhdGl2ZSIsInJlY292ZXJlZCIsImhvc3BpdGFsaXplZCIsImxlbmd0aCIsInNlbGVjdGlvbiIsImZpbHRlciIsImtleSIsImNhdGVnb3JpZXMiLCJpbmNsdWRlcyIsInJlZHVjZSIsIm9iaiIsInN0YXRlcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBRXBELE1BQU1DLFVBQVUsR0FBRztBQUNmLFVBQU0sU0FEUztBQUVmLFVBQU0sUUFGUztBQUdmLFVBQU0sZ0JBSFM7QUFJZixVQUFNLFNBSlM7QUFLZixVQUFNLFVBTFM7QUFNZixVQUFNLFlBTlM7QUFPZixVQUFNLFVBUFM7QUFRZixVQUFNLGFBUlM7QUFTZixVQUFNLFVBVFM7QUFVZixVQUFNLHNCQVZTO0FBV2YsVUFBTSxnQ0FYUztBQVlmLFVBQU0sU0FaUztBQWFmLFVBQU0sU0FiUztBQWNmLFVBQU0sTUFkUztBQWVmLFVBQU0sUUFmUztBQWdCZixVQUFNLE9BaEJTO0FBaUJmLFVBQU0sVUFqQlM7QUFrQmYsVUFBTSxTQWxCUztBQW1CZixVQUFNLE1BbkJTO0FBb0JmLFVBQU0sUUFwQlM7QUFxQmYsVUFBTSxVQXJCUztBQXNCZixVQUFNLFdBdEJTO0FBdUJmLFVBQU0sT0F2QlM7QUF3QmYsVUFBTSxrQkF4QlM7QUF5QmYsVUFBTSxVQXpCUztBQTBCZixVQUFNLGVBMUJTO0FBMkJmLFVBQU0sVUEzQlM7QUE0QmYsVUFBTSxXQTVCUztBQTZCZixVQUFNLGFBN0JTO0FBOEJmLFVBQU0sVUE5QlM7QUErQmYsVUFBTSxTQS9CUztBQWdDZixVQUFNLFVBaENTO0FBaUNmLFVBQU0sUUFqQ1M7QUFrQ2YsVUFBTSxlQWxDUztBQW1DZixVQUFNLFlBbkNTO0FBb0NmLFVBQU0sWUFwQ1M7QUFxQ2YsVUFBTSxVQXJDUztBQXNDZixVQUFNLGdCQXRDUztBQXVDZixVQUFNLGNBdkNTO0FBd0NmLFVBQU0sMEJBeENTO0FBeUNmLFVBQU0sTUF6Q1M7QUEwQ2YsVUFBTSxVQTFDUztBQTJDZixVQUFNLFFBM0NTO0FBNENmLFVBQU0sT0E1Q1M7QUE2Q2YsVUFBTSxjQTdDUztBQThDZixVQUFNLGFBOUNTO0FBK0NmLFVBQU0sY0EvQ1M7QUFnRGYsVUFBTSxnQkFoRFM7QUFpRGYsVUFBTSxjQWpEUztBQWtEZixVQUFNLFdBbERTO0FBbURmLFVBQU0sT0FuRFM7QUFvRGYsVUFBTSxNQXBEUztBQXFEZixVQUFNLFNBckRTO0FBc0RmLFVBQU0sZ0JBdERTO0FBdURmLFVBQU0sVUF2RFM7QUF3RGYsVUFBTSxZQXhEUztBQXlEZixVQUFNLGVBekRTO0FBMERmLFVBQU0sV0ExRFM7QUEyRGYsVUFBTTtBQTNEUyxHQUFuQjtBQThEQSxNQUFJQyxjQUFjLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxVQUFaLENBQXJCO0FBRUEsTUFBSUksTUFBTSxHQUFHO0FBQUVDLE9BQUcsRUFBRSxFQUFQO0FBQVdDLFNBQUssRUFBRSxHQUFsQjtBQUF1QkMsVUFBTSxFQUFFLEVBQS9CO0FBQW1DQyxRQUFJLEVBQUU7QUFBekMsR0FBYjtBQUFBLE1BQ0lDLEtBQUssR0FBRyxJQURaO0FBQUEsTUFFSUMsTUFBTSxHQUFHLElBRmI7QUFJQSxNQUFJQyxHQUFHLEdBQUdDLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVLGVBQVYsRUFDTEMsTUFESyxDQUNFLEtBREYsRUFFTEMsSUFGSyxDQUVBLE9BRkEsRUFFU04sS0FBSyxHQUFHTCxNQUFNLENBQUNJLElBQWYsR0FBc0JKLE1BQU0sQ0FBQ0UsS0FGdEMsRUFHTFMsSUFISyxDQUdBLFFBSEEsRUFHVUwsTUFBTSxHQUFHTixNQUFNLENBQUNDLEdBQWhCLEdBQXNCRCxNQUFNLENBQUNHLE1BSHZDLEVBSUxPLE1BSkssQ0FJRSxHQUpGLEVBS0xDLElBTEssQ0FLQSxXQUxBLEVBTUYsZUFBZVgsTUFBTSxDQUFDSSxJQUF0QixHQUE2QixHQUE3QixHQUFtQ0osTUFBTSxDQUFDQyxHQUExQyxHQUFnRCxHQU45QyxDQUFWO0FBUUEsTUFBSVcsQ0FBQyxHQUFHSixFQUFFLENBQUNLLFNBQUgsR0FDQ0MsS0FERCxDQUNPLENBQUMsQ0FBRCxFQUFJVCxLQUFKLENBRFAsRUFFQ1UsT0FGRCxDQUVTLENBRlQsQ0FBUjtBQUlBLE1BQUlDLEtBQUssR0FBR1QsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUNDQyxJQURELENBQ00sV0FETixFQUNtQixpQkFBaUJMLE1BQWpCLEdBQTBCLEdBRDdDLENBQVo7QUFHQSxNQUFJVyxDQUFDLEdBQUdULEVBQUUsQ0FBQ1UsV0FBSCxHQUNDSixLQURELENBQ08sQ0FBQ1IsTUFBRCxFQUFTLENBQVQsQ0FEUCxDQUFSO0FBR0EsTUFBSWEsS0FBSyxHQUFHWixHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLENBQVo7O0FBR0EsTUFBSVUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQUMsSUFBSSxFQUFJO0FBQ2xCLFFBQUlDLE1BQU0sR0FBR3hCLE1BQU0sQ0FBQ3dCLE1BQVAsQ0FBY0QsSUFBZCxDQUFiO0FBQ0EsUUFBSUUsUUFBUSxHQUFHRCxNQUFNLENBQUNFLEdBQVAsQ0FBVyxVQUFTQyxHQUFULEVBQWM7QUFDcEMsVUFBSSxPQUFPQSxHQUFQLEtBQWUsUUFBZixJQUEyQkMsS0FBSyxDQUFDRCxHQUFELENBQXBDLEVBQTJDO0FBQ3ZDLGVBQU8sQ0FBUDtBQUNILE9BRkQsTUFFTztBQUNILGVBQU9BLEdBQVA7QUFDSDtBQUNKLEtBTmMsQ0FBZjtBQVFBLFdBQU9FLElBQUksQ0FBQ0MsR0FBTCxPQUFBRCxJQUFJLHFCQUFRSixRQUFSLEVBQVg7QUFDSCxHQVhEOztBQWFBLFdBQVNNLFdBQVQsQ0FBcUJDLGFBQXJCLEVBQW1DO0FBRS9CdEIsTUFBRSxDQUFDdUIsR0FBSCxDQUFPLHFEQUFQLEVBQThELFVBQVVWLElBQVYsRUFBZ0I7QUFBQSxpQ0FFakVXLENBRmlFO0FBR3RFLFlBQU1DLEtBQUssR0FBR1osSUFBSSxDQUFDVyxDQUFELENBQWxCO0FBQ0EsWUFBTUUsSUFBSSxHQUFHRCxLQUFLLENBQUNBLEtBQW5CLENBSnNFLENBS3RFO0FBQ0E7O0FBQ0FaLFlBQUksQ0FBQ2MsT0FBTCxDQUFhLFVBQVVDLENBQVYsRUFBYTtBQUN0QkMscUJBQVcsRUFBRUgsSUFBSSxFQUNqQkUsQ0FBQyxDQUFDRixJQUFGLEdBQVN0QyxVQUFVLENBQUNzQyxJQUFELENBREYsRUFFakJFLENBQUMsQ0FBQ0UsUUFBRixHQUFhWixLQUFLLENBQUNhLFFBQVEsQ0FBQ04sS0FBSyxDQUFDSyxRQUFQLENBQVQsQ0FBTCxHQUFrQyxDQUFsQyxHQUFzQ0MsUUFBUSxDQUFDTixLQUFLLENBQUNLLFFBQVAsQ0FGMUMsRUFHakJFLFNBQVMsR0FBR2QsS0FBSyxDQUFDYSxRQUFRLENBQUNOLEtBQUssQ0FBQ1EsUUFBUCxDQUFULENBQUwsR0FBa0MsQ0FBbEMsR0FBc0NGLFFBQVEsQ0FBQ04sS0FBSyxDQUFDUSxRQUFQLENBSHpDLEVBSWpCTCxDQUFDLENBQUNNLEtBQUYsR0FBVWhCLEtBQUssQ0FBQ2EsUUFBUSxDQUFDTixLQUFLLENBQUNTLEtBQVAsQ0FBVCxDQUFMLEdBQStCLENBQS9CLEdBQW9DSCxRQUFRLENBQUNOLEtBQUssQ0FBQ1MsS0FBUCxDQUpyQyxFQUtqQk4sQ0FBQyxDQUFDTyxnQkFBRixHQUFxQmpCLEtBQUssQ0FBQ2EsUUFBUSxDQUFDTixLQUFLLENBQUNVLGdCQUFQLENBQVQsQ0FBTCxHQUEwQyxDQUExQyxHQUE4Q0osUUFBUSxDQUFDTixLQUFLLENBQUNVLGdCQUFQLENBTDFELEVBTWpCUCxDQUFDLENBQUNRLHFCQUFGLEdBQTBCbEIsS0FBSyxDQUFDYSxRQUFRLENBQUNOLEtBQUssQ0FBQ1cscUJBQVAsQ0FBVCxDQUFMLEdBQStDLENBQS9DLEdBQW1ETCxRQUFRLENBQUNOLEtBQUssQ0FBQ1cscUJBQVAsQ0FOcEUsRUFPakJSLENBQUMsQ0FBQ1Msc0JBQUYsR0FBMkJuQixLQUFLLENBQUNhLFFBQVEsQ0FBQ04sS0FBSyxDQUFDWSxzQkFBUCxDQUFULENBQUwsR0FBZ0QsQ0FBaEQsR0FBb0ROLFFBQVEsQ0FBQ04sS0FBSyxDQUFDWSxzQkFBUCxDQVB0RSxFQVFqQlQsQ0FBQyxDQUFDVSxjQUFGLEdBQW1CcEIsS0FBSyxDQUFDYSxRQUFRLENBQUNOLEtBQUssQ0FBQ2EsY0FBUCxDQUFULENBQUwsR0FBd0MsQ0FBeEMsR0FBNENQLFFBQVEsQ0FBQ04sS0FBSyxDQUFDYSxjQUFQLENBUnRELEVBU2pCVixDQUFDLENBQUNXLGVBQUYsR0FBb0JyQixLQUFLLENBQUNhLFFBQVEsQ0FBQ04sS0FBSyxDQUFDYyxlQUFQLENBQVQsQ0FBTCxHQUF5QyxDQUF6QyxHQUE2Q1IsUUFBUSxDQUFDTixLQUFLLENBQUNjLGVBQVAsQ0FUeEQsRUFVakJYLENBQUMsQ0FBQ1kscUJBQUYsR0FBMEJ0QixLQUFLLENBQUNhLFFBQVEsQ0FBQ04sS0FBSyxDQUFDZSxxQkFBUCxDQUFULENBQUwsR0FBK0MsQ0FBL0MsR0FBbURULFFBQVEsQ0FBQ04sS0FBSyxDQUFDZSxxQkFBUCxDQVZwRSxFQVdqQlosQ0FBQyxDQUFDYSxzQkFBRixHQUEyQnZCLEtBQUssQ0FBQ2EsUUFBUSxDQUFDTixLQUFLLENBQUNnQixzQkFBUCxDQUFULENBQUwsR0FBZ0QsQ0FBaEQsR0FBb0RWLFFBQVEsQ0FBQ04sS0FBSyxDQUFDZ0Isc0JBQVAsQ0FYdEUsRUFZakJiLENBQUMsQ0FBQ2MsU0FBRixHQUFjeEIsS0FBSyxDQUFDYSxRQUFRLENBQUNOLEtBQUssQ0FBQ2lCLFNBQVAsQ0FBVCxDQUFMLEdBQW1DLENBQW5DLEdBQXVDWCxRQUFRLENBQUNOLEtBQUssQ0FBQ2lCLFNBQVAsQ0FaNUMsRUFhakJkLENBQUMsQ0FBQ2UsWUFBRixHQUFpQnpCLEtBQUssQ0FBQ2EsUUFBUSxDQUFDTixLQUFLLENBQUNrQixZQUFQLENBQVQsQ0FBTCxHQUFzQyxDQUF0QyxHQUEwQ1osUUFBUSxDQUFDTixLQUFLLENBQUNrQixZQUFQLENBYnREO0FBY2hCLFNBZkQ7QUFQc0U7O0FBQzFFO0FBQ0EsV0FBSyxJQUFJbkIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1gsSUFBSSxDQUFDK0IsTUFBekIsRUFBaUNwQixDQUFDLElBQUksQ0FBdEMsRUFBeUM7QUFBQSxjQUFoQ0EsQ0FBZ0M7QUFxQnhDOztBQU1ELFVBQUlxQixTQUFTLEdBQUd2RCxNQUFNLENBQUNDLElBQVAsQ0FBWXNCLElBQUksQ0FBQyxFQUFELENBQWhCLEVBQ1hpQyxNQURXLENBQ0osVUFBQUMsR0FBRztBQUFBLGVBQUlDLFVBQVUsQ0FBQ0MsUUFBWCxDQUFvQkYsR0FBcEIsQ0FBSjtBQUFBLE9BREMsRUFFWEcsTUFGVyxDQUVKLFVBQUNDLEdBQUQsRUFBTUosR0FBTixFQUFjO0FBQ2xCLCtDQUNPSSxHQURQLDJCQUVLSixHQUZMLEVBRVdLLE1BQU0sQ0FBQyxFQUFELENBQU4sQ0FBV0wsR0FBWCxDQUZYO0FBSUgsT0FQVyxFQU9ULEVBUFMsQ0FBaEI7QUFTSCxLQXRDRDtBQXVDSDs7QUFDRzFCLGFBQVcsQ0FBQyxJQUFELENBQVg7QUFFSCxDQXBKRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuY29uc3Qgc3RhdGVOYW1lcyA9IHtcbiAgICBcIkFMXCI6IFwiQWxhYmFtYVwiLFxuICAgIFwiQUtcIjogXCJBbGFza2FcIixcbiAgICBcIkFTXCI6IFwiQW1lcmljYW4gU2Ftb2FcIixcbiAgICBcIkFaXCI6IFwiQXJpem9uYVwiLFxuICAgIFwiQVJcIjogXCJBcmthbnNhc1wiLFxuICAgIFwiQ0FcIjogXCJDYWxpZm9ybmlhXCIsXG4gICAgXCJDT1wiOiBcIkNvbG9yYWRvXCIsXG4gICAgXCJDVFwiOiBcIkNvbm5lY3RpY3V0XCIsXG4gICAgXCJERVwiOiBcIkRlbGF3YXJlXCIsXG4gICAgXCJEQ1wiOiBcIkRpc3RyaWN0IE9mIENvbHVtYmlhXCIsXG4gICAgXCJGTVwiOiBcIkZlZGVyYXRlZCBTdGF0ZXMgT2YgTWljcm9uZXNpYVwiLFxuICAgIFwiRkxcIjogXCJGbG9yaWRhXCIsXG4gICAgXCJHQVwiOiBcIkdlb3JnaWFcIixcbiAgICBcIkdVXCI6IFwiR3VhbVwiLFxuICAgIFwiSElcIjogXCJIYXdhaWlcIixcbiAgICBcIklEXCI6IFwiSWRhaG9cIixcbiAgICBcIklMXCI6IFwiSWxsaW5vaXNcIixcbiAgICBcIklOXCI6IFwiSW5kaWFuYVwiLFxuICAgIFwiSUFcIjogXCJJb3dhXCIsXG4gICAgXCJLU1wiOiBcIkthbnNhc1wiLFxuICAgIFwiS1lcIjogXCJLZW50dWNreVwiLFxuICAgIFwiTEFcIjogXCJMb3Vpc2lhbmFcIixcbiAgICBcIk1FXCI6IFwiTWFpbmVcIixcbiAgICBcIk1IXCI6IFwiTWFyc2hhbGwgSXNsYW5kc1wiLFxuICAgIFwiTURcIjogXCJNYXJ5bGFuZFwiLFxuICAgIFwiTUFcIjogXCJNYXNzYWNodXNldHRzXCIsXG4gICAgXCJNSVwiOiBcIk1pY2hpZ2FuXCIsXG4gICAgXCJNTlwiOiBcIk1pbm5lc290YVwiLFxuICAgIFwiTVNcIjogXCJNaXNzaXNzaXBwaVwiLFxuICAgIFwiTU9cIjogXCJNaXNzb3VyaVwiLFxuICAgIFwiTVRcIjogXCJNb250YW5hXCIsXG4gICAgXCJORVwiOiBcIk5lYnJhc2thXCIsXG4gICAgXCJOVlwiOiBcIk5ldmFkYVwiLFxuICAgIFwiTkhcIjogXCJOZXcgSGFtcHNoaXJlXCIsXG4gICAgXCJOSlwiOiBcIk5ldyBKZXJzZXlcIixcbiAgICBcIk5NXCI6IFwiTmV3IE1leGljb1wiLFxuICAgIFwiTllcIjogXCJOZXcgWW9ya1wiLFxuICAgIFwiTkNcIjogXCJOb3J0aCBDYXJvbGluYVwiLFxuICAgIFwiTkRcIjogXCJOb3J0aCBEYWtvdGFcIixcbiAgICBcIk1QXCI6IFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsXG4gICAgXCJPSFwiOiBcIk9oaW9cIixcbiAgICBcIk9LXCI6IFwiT2tsYWhvbWFcIixcbiAgICBcIk9SXCI6IFwiT3JlZ29uXCIsXG4gICAgXCJQV1wiOiBcIlBhbGF1XCIsXG4gICAgXCJQQVwiOiBcIlBlbm5zeWx2YW5pYVwiLFxuICAgIFwiUFJcIjogXCJQdWVydG8gUmljb1wiLFxuICAgIFwiUklcIjogXCJSaG9kZSBJc2xhbmRcIixcbiAgICBcIlNDXCI6IFwiU291dGggQ2Fyb2xpbmFcIixcbiAgICBcIlNEXCI6IFwiU291dGggRGFrb3RhXCIsXG4gICAgXCJUTlwiOiBcIlRlbm5lc3NlZVwiLFxuICAgIFwiVFhcIjogXCJUZXhhc1wiLFxuICAgIFwiVVRcIjogXCJVdGFoXCIsXG4gICAgXCJWVFwiOiBcIlZlcm1vbnRcIixcbiAgICBcIlZJXCI6IFwiVmlyZ2luIElzbGFuZHNcIixcbiAgICBcIlZBXCI6IFwiVmlyZ2luaWFcIixcbiAgICBcIldBXCI6IFwiV2FzaGluZ3RvblwiLFxuICAgIFwiV1ZcIjogXCJXZXN0IFZpcmdpbmlhXCIsXG4gICAgXCJXSVwiOiBcIldpc2NvbnNpblwiLFxuICAgIFwiV1lcIjogXCJXeW9taW5nXCJcbn1cblxubGV0IHN0YXRlTmFtZUFycmF5ID0gT2JqZWN0LmtleXMoc3RhdGVOYW1lcyk7XG5cbmxldCBtYXJnaW4gPSB7IHRvcDogODAsIHJpZ2h0OiAxODAsIGJvdHRvbTogODAsIGxlZnQ6IDE4MCB9LFxuICAgIHdpZHRoID0gMTAwMCxcbiAgICBoZWlnaHQgPSAxMDAwO1xuXG5sZXQgc3ZnID0gZDMuc2VsZWN0KFwiI2RhdGEtc2VjdGlvblwiKVxuICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgICBcInRyYW5zbGF0ZShcIiArIG1hcmdpbi5sZWZ0ICsgXCIsXCIgKyBtYXJnaW4udG9wICsgXCIpXCIpO1xuXG5sZXQgeCA9IGQzLnNjYWxlQmFuZCgpXG4gICAgICAgIC5yYW5nZShbMCwgd2lkdGhdKVxuICAgICAgICAucGFkZGluZygxKVxuXG5sZXQgeEF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxuXG5sZXQgeSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgLnJhbmdlKFtoZWlnaHQsIDBdKVxuXG5sZXQgeUF4aXMgPSBzdmcuYXBwZW5kKCdnJylcblxuXG5sZXQgZmluZE1heCA9IGRhdGEgPT4ge1xuICAgIGxldCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKGRhdGEpXG4gICAgbGV0IG9ubHlOdW1zID0gdmFsdWVzLm1hcChmdW5jdGlvbihudW0pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBudW0gIT09IFwibnVtYmVyXCIgfHwgaXNOYU4obnVtKSkge1xuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudW1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gTWF0aC5tYXgoLi4ub25seU51bXMpXG59XG5cbmZ1bmN0aW9uIHNlbGVjdFN0YXRlKHNlbGVjdGVkU3RhdGUpeyBcblxuICAgIGQzLmNzdihcImh0dHBzOi8vY292aWR0cmFja2luZy5jb20vYXBpL3YxL3N0YXRlcy9jdXJyZW50LmNzdlwiLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZGF0YVtpXTtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBzdGF0ZS5zdGF0ZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAvLyBkYXRhW2Ake25hbWV9YF0gPSB7XG4gICAgICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICBhYnJldmlhdGlvbjogbmFtZSxcbiAgICAgICAgICAgICAgICBkLm5hbWUgPSBzdGF0ZU5hbWVzW25hbWVdLFxuICAgICAgICAgICAgICAgIGQucG9zaXRpdmUgPSBpc05hTihwYXJzZUludChzdGF0ZS5wb3NpdGl2ZSkpID8gMCA6IHBhcnNlSW50KHN0YXRlLnBvc2l0aXZlKSxcbiAgICAgICAgICAgICAgICBkbmVnYXRpdmUgPSBpc05hTihwYXJzZUludChzdGF0ZS5uZWdhdGl2ZSkpID8gMCA6IHBhcnNlSW50KHN0YXRlLm5lZ2F0aXZlKSxcbiAgICAgICAgICAgICAgICBkLmRlYXRoID0gaXNOYU4ocGFyc2VJbnQoc3RhdGUuZGVhdGgpKSA/IDAgOiAgcGFyc2VJbnQoc3RhdGUuZGVhdGgpLFxuICAgICAgICAgICAgICAgIGQudG90YWxUZXN0UmVzdWx0cyA9IGlzTmFOKHBhcnNlSW50KHN0YXRlLnRvdGFsVGVzdFJlc3VsdHMpKSA/IDAgOiBwYXJzZUludChzdGF0ZS50b3RhbFRlc3RSZXN1bHRzKSxcbiAgICAgICAgICAgICAgICBkLmhvc3BpdGFsaXplZEN1cnJlbnRseSA9IGlzTmFOKHBhcnNlSW50KHN0YXRlLmhvc3BpdGFsaXplZEN1cnJlbnRseSkpID8gMCA6IHBhcnNlSW50KHN0YXRlLmhvc3BpdGFsaXplZEN1cnJlbnRseSksXG4gICAgICAgICAgICAgICAgZC5ob3NwaXRhbGl6ZWRDdW11bGF0aXZlID0gaXNOYU4ocGFyc2VJbnQoc3RhdGUuaG9zcGl0YWxpemVkQ3VtdWxhdGl2ZSkpID8gMCA6IHBhcnNlSW50KHN0YXRlLmhvc3BpdGFsaXplZEN1bXVsYXRpdmUpLFxuICAgICAgICAgICAgICAgIGQuaW5JY3VDdXJyZW50bHkgPSBpc05hTihwYXJzZUludChzdGF0ZS5pbkljdUN1cnJlbnRseSkpID8gMCA6IHBhcnNlSW50KHN0YXRlLmluSWN1Q3VycmVudGx5KSxcbiAgICAgICAgICAgICAgICBkLmluSWN1Q3VtdWxhdGl2ZSA9IGlzTmFOKHBhcnNlSW50KHN0YXRlLmluSWN1Q3VtdWxhdGl2ZSkpID8gMCA6IHBhcnNlSW50KHN0YXRlLmluSWN1Q3VtdWxhdGl2ZSksXG4gICAgICAgICAgICAgICAgZC5vblZlbnRpbGF0b3JDdXJyZW50bHkgPSBpc05hTihwYXJzZUludChzdGF0ZS5vblZlbnRpbGF0b3JDdXJyZW50bHkpKSA/IDAgOiBwYXJzZUludChzdGF0ZS5vblZlbnRpbGF0b3JDdXJyZW50bHkpLFxuICAgICAgICAgICAgICAgIGQub25WZW50aWxhdG9yQ3VtdWxhdGl2ZSA9IGlzTmFOKHBhcnNlSW50KHN0YXRlLm9uVmVudGlsYXRvckN1bXVsYXRpdmUpKSA/IDAgOiBwYXJzZUludChzdGF0ZS5vblZlbnRpbGF0b3JDdW11bGF0aXZlKSxcbiAgICAgICAgICAgICAgICBkLnJlY292ZXJlZCA9IGlzTmFOKHBhcnNlSW50KHN0YXRlLnJlY292ZXJlZCkpID8gMCA6IHBhcnNlSW50KHN0YXRlLnJlY292ZXJlZCksXG4gICAgICAgICAgICAgICAgZC5ob3NwaXRhbGl6ZWQgPSBpc05hTihwYXJzZUludChzdGF0ZS5ob3NwaXRhbGl6ZWQpKSA/IDAgOiBwYXJzZUludChzdGF0ZS5ob3NwaXRhbGl6ZWQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIFxuXG4gICAgICAgIFxuICAgICAgICBsZXQgc2VsZWN0aW9uID0gT2JqZWN0LmtleXMoZGF0YVszN10pXG4gICAgICAgICAgICAuZmlsdGVyKGtleSA9PiBjYXRlZ29yaWVzLmluY2x1ZGVzKGtleSkpXG4gICAgICAgICAgICAucmVkdWNlKChvYmosIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLm9iaixcbiAgICAgICAgICAgICAgICAgICAgW2tleV06IHN0YXRlc1szN11ba2V5XVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LCB7fSk7XG5cbiAgICB9KTtcbn1cbiAgICBzZWxlY3RTdGF0ZShcIk5ZXCIpXG4gICBcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==