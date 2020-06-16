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
console.log(stateNameArray)

let margin = { top: 80, right: 180, bottom: 80, left: 180 },
    width = 2960 - margin.left - margin.right,
    height = 2500 - margin.top - margin.bottom;

let svg = d3.select("#data").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

document.addEventListener("DOMContentLoaded", () => {



// const states = {};
const states = [];
// console.log(states)


d3.csv("https://covidtracking.com/api/v1/states/current.csv", function (stateData) {
    for (let i = 0; i < stateData.length; i += 1) {
        const state = stateData[i];
        const name = state.state;
        // states[`${name}`] = {
        states.push( {
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
        })
        // console.log(states)
    }

    let data = states;
    // filter year
    // let data = data.filter(function (d) { return d.Year == '2012'; });
    console.log(data)
    // Get every column value
    let elements = Object.keys(data[0])
        .filter(function (d) {
            return ((d != "abreviation") & (d != "name"));
        });
    console.log(elements)
    // let selection = elements[0];
    // console.log(selection)

    // let pairs = 
    
    let y = d3.scale.linear()
        .domain([0, d3.max(data, function (d) {
            return +d[selection];
        })])
        .range([height, 0]);

    let x = d3.scale.ordinal()
        .domain(data.map(function (d) { return d.State; }))
        .rangeBands([0, width]);


    let xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    let yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("font-size", "8px")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)");


    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    svg.selectAll("rectangle")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "rectangle")
        .attr("width", width / data.length)
        .attr("height", function (d) {
            return height - y(+d[selection]);
        })
        .attr("x", function (d, i) {
            return (width / data.length) * i;
        })
        .attr("y", function (d) {
            return y(+d[selection]);
        })
        .append("title")
        .text(function (d) {
            return d.State + " : " + d[selection];
        });

    let selector = d3.select("#drop")
        .append("select")
        .attr("id", "dropdown")
        .on("change", function (d) {
            selection = document.getElementById("dropdown");

            y.domain([0, d3.max(data, function (d) {
                return +d[selection.value];
            })]);

            yAxis.scale(y);

            d3.selectAll(".rectangle")
                .transition()
                .attr("height", function (d) {
                    return height - y(+d[selection.value]);
                })
                .attr("x", function (d, i) {
                    return (width / data.length) * i;
                })
                .attr("y", function (d) {
                    return y(+d[selection.value]);
                })
                .ease("linear")
                .select("title")
                .text(function (d) {
                    return d.State + " : " + d[selection.value];
                });

            d3.selectAll("g.y.axis")
                .transition()
                .call(yAxis);

        });

    selector.selectAll("option")
        .data(elements)
        .enter().append("option")
        .attr("value", function (d) {
            return d;
        })
        .text(function (d) {
            return d;
        })
}

);



})