document.addEventListener("DOMContentLoaded", () => {

const stateIndex = {
    "AK": 0,
    "AL": 1,
    "AR": 2,
    "AS": 3,
    "AZ": 4,
    "CA": 5,
    "CO": 6,
    "CT": 7,
    "DC": 8,
    "DE": 9,
    // "FM": "Federated States Of Micronesia",
    "FL": 10,
    "GA": 11,
    "GU": 12,
    "HI": 13,
    "IA": 14,
    "ID": 15,
    "IL": 16,
    "IN": 17,
    "KS": 18,
    "KY": 19,
    "LA": 20,
    "MA": 21,
    "MD": 22,
    "ME": 23,
    "MI": 24,
    "MN": 25,
    "MO": 26,
    "MP": 27,
    "MS": 28,
    "MT": 29,
    "NC": 30,
    "ND": 31,
    "NE": 32,
    "NH": 33,
    "NJ": 34,
    "NM": 35,
    "NV": 36,
    "NY": 37,
    // "MP": "Northern Mariana Islands",
    "OH": 38,
    "OK": 39,
    "OR": 40,
    // "PW": "Palau",
    "PA": 41,
    "PR": 42,
    "RI": 43,
    "SC": 44,
    "SD": 45,
    "TN": 46,
    "TX": 47,
    "UT": 48,
    "VA": 49,
    "VI": 50,
    "VT": 51,
    "WA": 52,
    "WI": 53,
    "WV": 54,
    "WY": 55
}

// let stateNameArray = Object.keys(stateNames);

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

    // let findMax = data => {
    //     let values = Object.values(data)
    //     // console.log(values)
    //     let onlyNums = values.map(function (num) {
    //         // console.log(typeof num === "number")
    //         if (typeof num !== "number" || isNaN(num)) {
    //             return 0
    //         } else {
    //             return num
    //         }
    //     })

let capitalize = word => {
    let wordArray = word.split('')
    let newWord = [];
    wordArray.forEach((char, i) => {
        if (char !== char.toUpperCase()) {
            newWord.push(char)
        } else {
            newWord.push(' ' + char.toUpperCase())
        }
    })

    newWord[0] = newWord[0].toUpperCase()
    return newWord.join('')
}


function selectState(selectedState){ 

    d3.csv("https://covidtracking.com/api/v1/states/current.csv", function (rawData) {
        // console.log(rawData)
        let stateData = rawData[stateIndex[selectedState]]
        // console.log(stateData)
        let data = []
        // stateData.forEach(function (d) {
        for (let [d,v] of Object.entries(stateData)) {
            if (d === 'positive' || d === 'negative' || d === 'death' || d === 'totalTestResults' ||
                d === 'hospitalizedCurrently' || d === 'hospitalizedCumulative' || 
                d === 'inIcuCurrently' || d === 'inIcuCumulative' || d === 'onVentilatorCurrently' ||
                d === 'onVentilatorCumulative' || d === 'recovered' || d === 'recovered' ||
                d === 'hospitalized') {
                    d = capitalize(d)
                    data.push( { category: d, value: isNaN(parseInt(v)) ? +0 : +parseInt(v) })
            }
        }

        console.log(data)

        x.domain(data.map(function (d) { return d.category}))
        // console.log(Object.keys(x))
        // console.log(x["domain"])

        
        // xAxis.transition()
        //     .duration(1000)
        //     .call(d3.axisBottom(x))
        //     .attr("transform", "translate(-0.2," + height + ")")
        //     .selectAll("text")
        //     .attr("transform", "translate(-10,0)rotate(-45)")
        //     .style("text-anchor", "end")
        //     .attr('x', -8)

        let maxY = d3.max(data, function (d) { return d.value })

        // console.log(maxY)

        y.domain([0, maxY])

        // yAxis.transition()
        //     .duration(1000)
        //     .call(d3.axisLeft(y))

        // let test1 = data = (d) => {
        //     console.log(d)
        // }
        // console.log(Object.entries(x))
        // console.log(Object.entries(y))
        console.log(x.bandwidth())

        svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            // .attr("x", function (d, i) { return x(data[i])})
            .attr("x", function (d) { return x(d.category)})
            .attr("y", function (d) { return y(d.value)})
            .attr("width", 100)
            .attr("height", function (d) { return height - y(d.value)})
            .style("fill", "#69b3a2")

        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        // add the y Axis
        svg.append("g")
            .call(d3.axisLeft(y));

        // for (let i = 0; i < data.length; i += 1) {
        //     const state = data[i];
        //     const name = state.state;
        //     // console.log(data)
        //     // data[`${name}`] = {
        //     data.forEach(function (d) {
        //         d.abreviation = name,
        //         d.name = stateNames[name],
        //         d.positive = isNaN(parseInt(state.positive)) ? 0 : parseInt(state.positive),
        //         dnegative = isNaN(parseInt(state.negative)) ? 0 : parseInt(state.negative),
        //         d.death = isNaN(parseInt(state.death)) ? 0 :  parseInt(state.death),
        //         d.totalTestResults = isNaN(parseInt(state.totalTestResults)) ? 0 : parseInt(state.totalTestResults),
        //         d.hospitalizedCurrently = isNaN(parseInt(state.hospitalizedCurrently)) ? 0 : parseInt(state.hospitalizedCurrently),
        //         d.hospitalizedCumulative = isNaN(parseInt(state.hospitalizedCumulative)) ? 0 : parseInt(state.hospitalizedCumulative),
        //         d.inIcuCurrently = isNaN(parseInt(state.inIcuCurrently)) ? 0 : parseInt(state.inIcuCurrently),
        //         d.inIcuCumulative = isNaN(parseInt(state.inIcuCumulative)) ? 0 : parseInt(state.inIcuCumulative),
        //         d.onVentilatorCurrently = isNaN(parseInt(state.onVentilatorCurrently)) ? 0 : parseInt(state.onVentilatorCurrently),
        //         d.onVentilatorCumulative = isNaN(parseInt(state.onVentilatorCumulative)) ? 0 : parseInt(state.onVentilatorCumulative),
        //         d.recovered = isNaN(parseInt(state.recovered)) ? 0 : parseInt(state.recovered),
        //         d.hospitalized = isNaN(parseInt(state.hospitalized)) ? 0 : parseInt(state.hospitalized)
        //     })
        // }
        

        
        // let categories = Object.keys(states[0])
        //     .filter(function (d) {
        //         return ((d != "abreviation") & (d != "name"));
        //     });
        
        // let selection = Object.keys(data[37])
        //     .filter(key => categories.includes(key))
        //     .reduce((obj, key) => {
        //         return {
        //             ...obj,
        //             [key]: states[37][key]
        //         };
        //     }, {});

    });
}
    selectState("NJ")
   
})