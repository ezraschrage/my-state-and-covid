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
// console.log(stateNameArray)

let margin = { top: 80, right: 180, bottom: 80, left: 180 },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

let svg = d3.select("#data-section")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

let findMax = data => {
    let values = Object.values(data)
    // console.log(values)
    let onlyNums = values.map(function(num) {
        // console.log(typeof num === "number")
        if (typeof num !== "number" || isNaN(num)) {
            return 0
        } else {
            return num
        }
    })

    // console.log(onlyNums)

    // console.log(Math.max(...onlyNums))
    return Math.max(...onlyNums)
}

document.addEventListener("DOMContentLoaded", () => {



// const states = {};
const states = [];
// console.log(data)


d3.csv("https://covidtracking.com/api/v1/states/current.csv", function (stateData) {
    for (let i = 0; i < stateData.length; i += 1) {
        const state = stateData[i];
        const name = state.state;
        // console.log(isNaN(parseInt(state.onVentilatorCumulative))),

        // data[`${name}`] = {
        states.push( {
            abreviation: name,
            name: stateNames[name],
            positive: isNaN(parseInt(state.positive)) ? 0 : parseInt(state.positive),
            negative: isNaN(parseInt(state.negative)) ? 0 : parseInt(state.negative),
            death: isNaN(parseInt(state.death)) ? 0 :  parseInt(state.death),
            totalTestResults: isNaN(parseInt(state.totalTestResults)) ? 0 : parseInt(state.totalTestResults),
            hospitalizedCurrently: isNaN(parseInt(state.hospitalizedCurrently)) ? 0 : parseInt(state.hospitalizedCurrently),
            hospitalizedCumulative: isNaN(parseInt(state.hospitalizedCumulative)) ? 0 : parseInt(state.hospitalizedCumulative),
            inIcuCurrently: isNaN(parseInt(state.inIcuCurrently)) ? 0 : parseInt(state.inIcuCurrently),
            inIcuCumulative: isNaN(parseInt(state.inIcuCumulative)) ? 0 : parseInt(state.inIcuCumulative),
            onVentilatorCurrently: isNaN(parseInt(state.onVentilatorCurrently)) ? 0 : parseInt(state.onVentilatorCurrently),
            onVentilatorCumulative: isNaN(parseInt(state.onVentilatorCumulative)) ? 0 : parseInt(state.onVentilatorCumulative),
            recovered: isNaN(parseInt(state.recovered)) ? 0 : parseInt(state.recovered),
            hospitalized: isNaN(parseInt(state.hospitalized)) ? 0 : parseInt(state.hospitalized)
        })
        // console.log(data)
    }
        console.log(states[37])

        // console.log(findMax(states[1]))

        let categories = Object.keys(states[0])
        .filter(function (d) {
            return ((d != "abreviation") & (d != "name"));
        });
    console.log(categories)

    let selection = states[37]

    // console.log(findMax(selection))

    d3.select("#selectButton")
        .selectAll('myOptions')
        .data(stateNameArray)
        .enter()
        .append('option')
        .text(function (d) { return d; })
        .attr("value", function (d) { return d; })

    var x = d3.scaleBand()
        .range([0, width])
        .padding(0.1);

    var y = d3.scaleLinear()
        .range([height, 0]);

    x.domain(categories)
    y.domain([0, findMax(selection)])

    svg.selectAll(".bar")
        .data(states)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d, i) { return x(d[i]); })
        .attr("width", x.bandwidth())
        .attr("y", function (d) { return y(d)})
        .attr("height", function (d, i) { return height - y(categories[i]);})

    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // add the y Axis
    svg.append("g")
        .call(d3.axisLeft(y));

    // let x = d3.scaleLinear()
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
}

);



})