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
  }; // function selectState(selectedState){ 


  d3.csv("https://covidtracking.com/api/v1/states/current.csv", function (data) {
    var _loop = function _loop(i) {
      var state = data[i];
      var name = state.state; // data[`${name}`] = {

      data.forEach(function (d) {
        abreviation: name, d.name = stateNames[name], d.positive = isNaN(parseInt(state.positive)) ? 0 : parseInt(state.positive), dnegative = isNaN(parseInt(state.negative)) ? 0 : parseInt(state.negative), d.death = isNaN(parseInt(state.death)) ? 0 : parseInt(state.death), d.totalTestResults = isNaN(parseInt(state.totalTestResults)) ? 0 : parseInt(state.totalTestResults), d.hospitalizedCurrently = isNaN(parseInt(state.hospitalizedCurrently)) ? 0 : parseInt(state.hospitalizedCurrently), d.hospitalizedCumulative = isNaN(parseInt(state.hospitalizedCumulative)) ? 0 : parseInt(state.hospitalizedCumulative), d.inIcuCurrently = isNaN(parseInt(state.inIcuCurrently)) ? 0 : parseInt(state.inIcuCurrently), d.inIcuCumulative = isNaN(parseInt(state.inIcuCumulative)) ? 0 : parseInt(state.inIcuCumulative), d.onVentilatorCurrently = isNaN(parseInt(state.onVentilatorCurrently)) ? 0 : parseInt(state.onVentilatorCurrently), d.onVentilatorCumulative = isNaN(parseInt(state.onVentilatorCumulative)) ? 0 : parseInt(state.onVentilatorCumulative), d.recovered = isNaN(parseInt(state.recovered)) ? 0 : parseInt(state.recovered), d.hospitalized = isNaN(parseInt(state.hospitalized)) ? 0 : parseInt(state.hospitalized);
      });
    };

    for (var i = 0; i < data.length; i += 1) {
      _loop(i);
    }

    console.log(data); // console.log(d)
    // let categories = Object.keys(data[0])
    // .filter(function (d) {
    //     return ((d != "abreviation") & (d != "name"));
    // });
    // let selection = Object.keys(data[37])
    //     .filter(key => categories.includes(key))
    //     .reduce((obj, key) => {
    //         return {
    //             ...obj,
    //             [key]: states[37][key]
    //         };
    //     }, {});
  });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXRlTmFtZXMiLCJzdGF0ZU5hbWVBcnJheSIsIk9iamVjdCIsImtleXMiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsIngiLCJzY2FsZUJhbmQiLCJyYW5nZSIsInBhZGRpbmciLCJ4QXhpcyIsInkiLCJzY2FsZUxpbmVhciIsInlBeGlzIiwiZmluZE1heCIsImRhdGEiLCJ2YWx1ZXMiLCJvbmx5TnVtcyIsIm1hcCIsIm51bSIsImlzTmFOIiwiTWF0aCIsIm1heCIsImNzdiIsImkiLCJzdGF0ZSIsIm5hbWUiLCJmb3JFYWNoIiwiZCIsImFicmV2aWF0aW9uIiwicG9zaXRpdmUiLCJwYXJzZUludCIsImRuZWdhdGl2ZSIsIm5lZ2F0aXZlIiwiZGVhdGgiLCJ0b3RhbFRlc3RSZXN1bHRzIiwiaG9zcGl0YWxpemVkQ3VycmVudGx5IiwiaG9zcGl0YWxpemVkQ3VtdWxhdGl2ZSIsImluSWN1Q3VycmVudGx5IiwiaW5JY3VDdW11bGF0aXZlIiwib25WZW50aWxhdG9yQ3VycmVudGx5Iiwib25WZW50aWxhdG9yQ3VtdWxhdGl2ZSIsInJlY292ZXJlZCIsImhvc3BpdGFsaXplZCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFD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LENBQXRDLEdBQTBDWixRQUFRLENBQUNOLEtBQUssQ0FBQ2tCLFlBQVAsQ0FidEQ7QUFjaEIsT0FmRDtBQU5zRTs7QUFDMUUsU0FBSyxJQUFJbkIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1QsSUFBSSxDQUFDNkIsTUFBekIsRUFBaUNwQixDQUFDLElBQUksQ0FBdEMsRUFBeUM7QUFBQSxZQUFoQ0EsQ0FBZ0M7QUFxQnhDOztBQUVEcUIsV0FBTyxDQUFDQyxHQUFSLENBQVkvQixJQUFaLEVBeEIwRSxDQXlCMUU7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSCxHQXpDRDtBQXlDSSxDQW5KUixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuY29uc3Qgc3RhdGVOYW1lcyA9IHtcbiAgICBcIkFMXCI6IFwiQWxhYmFtYVwiLFxuICAgIFwiQUtcIjogXCJBbGFza2FcIixcbiAgICBcIkFTXCI6IFwiQW1lcmljYW4gU2Ftb2FcIixcbiAgICBcIkFaXCI6IFwiQXJpem9uYVwiLFxuICAgIFwiQVJcIjogXCJBcmthbnNhc1wiLFxuICAgIFwiQ0FcIjogXCJDYWxpZm9ybmlhXCIsXG4gICAgXCJDT1wiOiBcIkNvbG9yYWRvXCIsXG4gICAgXCJDVFwiOiBcIkNvbm5lY3RpY3V0XCIsXG4gICAgXCJERVwiOiBcIkRlbGF3YXJlXCIsXG4gICAgXCJEQ1wiOiBcIkRpc3RyaWN0IE9mIENvbHVtYmlhXCIsXG4gICAgXCJGTVwiOiBcIkZlZGVyYXRlZCBTdGF0ZXMgT2YgTWljcm9uZXNpYVwiLFxuICAgIFwiRkxcIjogXCJGbG9yaWRhXCIsXG4gICAgXCJHQVwiOiBcIkdlb3JnaWFcIixcbiAgICBcIkdVXCI6IFwiR3VhbVwiLFxuICAgIFwiSElcIjogXCJIYXdhaWlcIixcbiAgICBcIklEXCI6IFwiSWRhaG9cIixcbiAgICBcIklMXCI6IFwiSWxsaW5vaXNcIixcbiAgICBcIklOXCI6IFwiSW5kaWFuYVwiLFxuICAgIFwiSUFcIjogXCJJb3dhXCIsXG4gICAgXCJLU1wiOiBcIkthbnNhc1wiLFxuICAgIFwiS1lcIjogXCJLZW50dWNreVwiLFxuICAgIFwiTEFcIjogXCJMb3Vpc2lhbmFcIixcbiAgICBcIk1FXCI6IFwiTWFpbmVcIixcbiAgICBcIk1IXCI6IFwiTWFyc2hhbGwgSXNsYW5kc1wiLFxuICAgIFwiTURcIjogXCJNYXJ5bGFuZFwiLFxuICAgIFwiTUFcIjogXCJNYXNzYWNodXNldHRzXCIsXG4gICAgXCJNSVwiOiBcIk1pY2hpZ2FuXCIsXG4gICAgXCJNTlwiOiBcIk1pbm5lc290YVwiLFxuICAgIFwiTVNcIjogXCJNaXNzaXNzaXBwaVwiLFxuICAgIFwiTU9cIjogXCJNaXNzb3VyaVwiLFxuICAgIFwiTVRcIjogXCJNb250YW5hXCIsXG4gICAgXCJORVwiOiBcIk5lYnJhc2thXCIsXG4gICAgXCJOVlwiOiBcIk5ldmFkYVwiLFxuICAgIFwiTkhcIjogXCJOZXcgSGFtcHNoaXJlXCIsXG4gICAgXCJOSlwiOiBcIk5ldyBKZXJzZXlcIixcbiAgICBcIk5NXCI6IFwiTmV3IE1leGljb1wiLFxuICAgIFwiTllcIjogXCJOZXcgWW9ya1wiLFxuICAgIFwiTkNcIjogXCJOb3J0aCBDYXJvbGluYVwiLFxuICAgIFwiTkRcIjogXCJOb3J0aCBEYWtvdGFcIixcbiAgICBcIk1QXCI6IFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsXG4gICAgXCJPSFwiOiBcIk9oaW9cIixcbiAgICBcIk9LXCI6IFwiT2tsYWhvbWFcIixcbiAgICBcIk9SXCI6IFwiT3JlZ29uXCIsXG4gICAgXCJQV1wiOiBcIlBhbGF1XCIsXG4gICAgXCJQQVwiOiBcIlBlbm5zeWx2YW5pYVwiLFxuICAgIFwiUFJcIjogXCJQdWVydG8gUmljb1wiLFxuICAgIFwiUklcIjogXCJSaG9kZSBJc2xhbmRcIixcbiAgICBcIlNDXCI6IFwiU291dGggQ2Fyb2xpbmFcIixcbiAgICBcIlNEXCI6IFwiU291dGggRGFrb3RhXCIsXG4gICAgXCJUTlwiOiBcIlRlbm5lc3NlZVwiLFxuICAgIFwiVFhcIjogXCJUZXhhc1wiLFxuICAgIFwiVVRcIjogXCJVdGFoXCIsXG4gICAgXCJWVFwiOiBcIlZlcm1vbnRcIixcbiAgICBcIlZJXCI6IFwiVmlyZ2luIElzbGFuZHNcIixcbiAgICBcIlZBXCI6IFwiVmlyZ2luaWFcIixcbiAgICBcIldBXCI6IFwiV2FzaGluZ3RvblwiLFxuICAgIFwiV1ZcIjogXCJXZXN0IFZpcmdpbmlhXCIsXG4gICAgXCJXSVwiOiBcIldpc2NvbnNpblwiLFxuICAgIFwiV1lcIjogXCJXeW9taW5nXCJcbn1cblxubGV0IHN0YXRlTmFtZUFycmF5ID0gT2JqZWN0LmtleXMoc3RhdGVOYW1lcyk7XG5cbmxldCBtYXJnaW4gPSB7IHRvcDogODAsIHJpZ2h0OiAxODAsIGJvdHRvbTogODAsIGxlZnQ6IDE4MCB9LFxuICAgIHdpZHRoID0gMTAwMCxcbiAgICBoZWlnaHQgPSAxMDAwO1xuXG5sZXQgc3ZnID0gZDMuc2VsZWN0KFwiI2RhdGEtc2VjdGlvblwiKVxuICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgICBcInRyYW5zbGF0ZShcIiArIG1hcmdpbi5sZWZ0ICsgXCIsXCIgKyBtYXJnaW4udG9wICsgXCIpXCIpO1xuXG5sZXQgeCA9IGQzLnNjYWxlQmFuZCgpXG4gICAgICAgIC5yYW5nZShbMCwgd2lkdGhdKVxuICAgICAgICAucGFkZGluZygxKVxuXG5sZXQgeEF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxuXG5sZXQgeSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgLnJhbmdlKFtoZWlnaHQsIDBdKVxuXG5sZXQgeUF4aXMgPSBzdmcuYXBwZW5kKCdnJylcblxuXG5sZXQgZmluZE1heCA9IGRhdGEgPT4ge1xuICAgIGxldCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKGRhdGEpXG4gICAgbGV0IG9ubHlOdW1zID0gdmFsdWVzLm1hcChmdW5jdGlvbihudW0pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBudW0gIT09IFwibnVtYmVyXCIgfHwgaXNOYU4obnVtKSkge1xuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudW1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gTWF0aC5tYXgoLi4ub25seU51bXMpXG59XG5cbi8vIGZ1bmN0aW9uIHNlbGVjdFN0YXRlKHNlbGVjdGVkU3RhdGUpeyBcblxuICAgIGQzLmNzdihcImh0dHBzOi8vY292aWR0cmFja2luZy5jb20vYXBpL3YxL3N0YXRlcy9jdXJyZW50LmNzdlwiLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZGF0YVtpXTtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBzdGF0ZS5zdGF0ZTtcblxuICAgICAgICAgICAgLy8gZGF0YVtgJHtuYW1lfWBdID0ge1xuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgYWJyZXZpYXRpb246IG5hbWUsXG4gICAgICAgICAgICAgICAgZC5uYW1lID0gc3RhdGVOYW1lc1tuYW1lXSxcbiAgICAgICAgICAgICAgICBkLnBvc2l0aXZlID0gaXNOYU4ocGFyc2VJbnQoc3RhdGUucG9zaXRpdmUpKSA/IDAgOiBwYXJzZUludChzdGF0ZS5wb3NpdGl2ZSksXG4gICAgICAgICAgICAgICAgZG5lZ2F0aXZlID0gaXNOYU4ocGFyc2VJbnQoc3RhdGUubmVnYXRpdmUpKSA/IDAgOiBwYXJzZUludChzdGF0ZS5uZWdhdGl2ZSksXG4gICAgICAgICAgICAgICAgZC5kZWF0aCA9IGlzTmFOKHBhcnNlSW50KHN0YXRlLmRlYXRoKSkgPyAwIDogIHBhcnNlSW50KHN0YXRlLmRlYXRoKSxcbiAgICAgICAgICAgICAgICBkLnRvdGFsVGVzdFJlc3VsdHMgPSBpc05hTihwYXJzZUludChzdGF0ZS50b3RhbFRlc3RSZXN1bHRzKSkgPyAwIDogcGFyc2VJbnQoc3RhdGUudG90YWxUZXN0UmVzdWx0cyksXG4gICAgICAgICAgICAgICAgZC5ob3NwaXRhbGl6ZWRDdXJyZW50bHkgPSBpc05hTihwYXJzZUludChzdGF0ZS5ob3NwaXRhbGl6ZWRDdXJyZW50bHkpKSA/IDAgOiBwYXJzZUludChzdGF0ZS5ob3NwaXRhbGl6ZWRDdXJyZW50bHkpLFxuICAgICAgICAgICAgICAgIGQuaG9zcGl0YWxpemVkQ3VtdWxhdGl2ZSA9IGlzTmFOKHBhcnNlSW50KHN0YXRlLmhvc3BpdGFsaXplZEN1bXVsYXRpdmUpKSA/IDAgOiBwYXJzZUludChzdGF0ZS5ob3NwaXRhbGl6ZWRDdW11bGF0aXZlKSxcbiAgICAgICAgICAgICAgICBkLmluSWN1Q3VycmVudGx5ID0gaXNOYU4ocGFyc2VJbnQoc3RhdGUuaW5JY3VDdXJyZW50bHkpKSA/IDAgOiBwYXJzZUludChzdGF0ZS5pbkljdUN1cnJlbnRseSksXG4gICAgICAgICAgICAgICAgZC5pbkljdUN1bXVsYXRpdmUgPSBpc05hTihwYXJzZUludChzdGF0ZS5pbkljdUN1bXVsYXRpdmUpKSA/IDAgOiBwYXJzZUludChzdGF0ZS5pbkljdUN1bXVsYXRpdmUpLFxuICAgICAgICAgICAgICAgIGQub25WZW50aWxhdG9yQ3VycmVudGx5ID0gaXNOYU4ocGFyc2VJbnQoc3RhdGUub25WZW50aWxhdG9yQ3VycmVudGx5KSkgPyAwIDogcGFyc2VJbnQoc3RhdGUub25WZW50aWxhdG9yQ3VycmVudGx5KSxcbiAgICAgICAgICAgICAgICBkLm9uVmVudGlsYXRvckN1bXVsYXRpdmUgPSBpc05hTihwYXJzZUludChzdGF0ZS5vblZlbnRpbGF0b3JDdW11bGF0aXZlKSkgPyAwIDogcGFyc2VJbnQoc3RhdGUub25WZW50aWxhdG9yQ3VtdWxhdGl2ZSksXG4gICAgICAgICAgICAgICAgZC5yZWNvdmVyZWQgPSBpc05hTihwYXJzZUludChzdGF0ZS5yZWNvdmVyZWQpKSA/IDAgOiBwYXJzZUludChzdGF0ZS5yZWNvdmVyZWQpLFxuICAgICAgICAgICAgICAgIGQuaG9zcGl0YWxpemVkID0gaXNOYU4ocGFyc2VJbnQoc3RhdGUuaG9zcGl0YWxpemVkKSkgPyAwIDogcGFyc2VJbnQoc3RhdGUuaG9zcGl0YWxpemVkKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGQpXG5cbiAgICAgICAgLy8gbGV0IGNhdGVnb3JpZXMgPSBPYmplY3Qua2V5cyhkYXRhWzBdKVxuICAgICAgICAvLyAuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIC8vICAgICByZXR1cm4gKChkICE9IFwiYWJyZXZpYXRpb25cIikgJiAoZCAhPSBcIm5hbWVcIikpO1xuICAgICAgICAvLyB9KTtcblxuICAgICAgICAvLyBsZXQgc2VsZWN0aW9uID0gT2JqZWN0LmtleXMoZGF0YVszN10pXG4gICAgICAgIC8vICAgICAuZmlsdGVyKGtleSA9PiBjYXRlZ29yaWVzLmluY2x1ZGVzKGtleSkpXG4gICAgICAgIC8vICAgICAucmVkdWNlKChvYmosIGtleSkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIC4uLm9iaixcbiAgICAgICAgLy8gICAgICAgICAgICAgW2tleV06IHN0YXRlc1szN11ba2V5XVxuICAgICAgICAvLyAgICAgICAgIH07XG4gICAgICAgIC8vICAgICB9LCB7fSk7XG5cbiAgICB9KTt9XG4gICAgXG4gICBcbikiXSwic291cmNlUm9vdCI6IiJ9