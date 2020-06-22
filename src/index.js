document.addEventListener("DOMContentLoaded", () => {

const stateNames = {
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
}

let stateNameArray = Object.keys(stateNames);

let margin = { top: 80, right: 180, bottom: 80, left: 180 },
    width = 1000,
    height = 1000;

let svg = d3.select("#data-section")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

let x = d3.scaleBand()
        .range([0, width])
        .padding(1)

let xAxis = svg.append("g")
            .attr("transform", "translate(0," + height + ")")

let y = d3.scaleLinear()
        .range([height, 0])

let yAxis = svg.append('g')


let findMax = data => {
    let values = Object.values(data)
    let onlyNums = values.map(function(num) {
        if (typeof num !== "number" || isNaN(num)) {
            return 0
        } else {
            return num
        }
    })

    return Math.max(...onlyNums)
}

// function selectState(selectedState){ 

    d3.csv("https://covidtracking.com/api/v1/states/current.csv", function (data) {
        for (let i = 0; i < data.length; i += 1) {
            const state = data[i];
            const name = state.state;

            // data[`${name}`] = {
            data.forEach(function (d) {
                abreviation: name,
                d.name = stateNames[name],
                d.positive = isNaN(parseInt(state.positive)) ? 0 : parseInt(state.positive),
                dnegative = isNaN(parseInt(state.negative)) ? 0 : parseInt(state.negative),
                d.death = isNaN(parseInt(state.death)) ? 0 :  parseInt(state.death),
                d.totalTestResults = isNaN(parseInt(state.totalTestResults)) ? 0 : parseInt(state.totalTestResults),
                d.hospitalizedCurrently = isNaN(parseInt(state.hospitalizedCurrently)) ? 0 : parseInt(state.hospitalizedCurrently),
                d.hospitalizedCumulative = isNaN(parseInt(state.hospitalizedCumulative)) ? 0 : parseInt(state.hospitalizedCumulative),
                d.inIcuCurrently = isNaN(parseInt(state.inIcuCurrently)) ? 0 : parseInt(state.inIcuCurrently),
                d.inIcuCumulative = isNaN(parseInt(state.inIcuCumulative)) ? 0 : parseInt(state.inIcuCumulative),
                d.onVentilatorCurrently = isNaN(parseInt(state.onVentilatorCurrently)) ? 0 : parseInt(state.onVentilatorCurrently),
                d.onVentilatorCumulative = isNaN(parseInt(state.onVentilatorCumulative)) ? 0 : parseInt(state.onVentilatorCumulative),
                d.recovered = isNaN(parseInt(state.recovered)) ? 0 : parseInt(state.recovered),
                d.hospitalized = isNaN(parseInt(state.hospitalized)) ? 0 : parseInt(state.hospitalized)
            })
        }

        console.log(data)
        // console.log(d)

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

    });}
    
   
)