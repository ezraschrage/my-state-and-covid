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
        "OH": 38,
        "OK": 39,
        "OR": 40,
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

    const stateNames = {
        "Alabama": "AL",
        "Alaska": "AK",
        "American Samoa": "AS",
        "Arizona": "AZ",
        "Arkansas": "AR",
        "California": "CA",
        "Colorado": "CO",
        "Connecticut": "CT",
        "Delaware": "DE",
        "District Of Columbia": "DC",
        "Florida": "FL",
        "Georgia": "GA",
        "Guam": "GU",
        "Hawaii": "HI",
        "Idaho": "ID",
        "Illinois": "IL",
        "Indiana": "IN",
        "Iowa": "IA",
        "Kansas": "KS",
        "Kentucky": "KY",
        "Louisiana": "LA",
        "Maine": "ME",
        "Maryland": "MD",
        "Massachusetts": "MA",
        "Michigan": "MI",
        "Minnesota": "MN",
        "Mississippi": "MS",
        "Missouri": "MO",
        "Montana": "MT",
        "Nebraska": "NE",
        "Nevada": "NV",
        "New Hampshire": "NH",
        "New Jersey": "NJ",
        "New Mexico": "NM",
        "New York": "NY",
        "North Carolina": "NC",
        "North Dakota": "ND",
        "Northern Mariana Islands": "MP",
        "Ohio": "OH",
        "Oklahoma": "OK",
        "Oregon": "OR",
        "Pennsylvania": "PA",
        "Puerto Rico": "PR",
        "Rhode Island": "RI",
        "South Carolina": "SC",
        "South Dakota": "SD",
        "Tennessee": "TN",
        "Texas": "TX",
        "Utah": "UT",
        "Vermont": "VT",
        "Virgin Islands": "VI",
        "Virginia": "VA",
        "Washington": "WA",
        "West Virginia": "WV",
        "Wisconsin": "WI",
        "Wyoming": "WY"
    }

    let margin = 100
        horizontalMargin = 120,
        verticalMargin = 100,
        width = 900 - 2 * horizontalMargin,
        height = 700 - 2 * verticalMargin;

    let svg = d3.select("#data-section")
        .append("svg")
        .attr("width", width + (2 * horizontalMargin))
        .attr("height", height + (2 * margin))
        .append("g")
        .attr("transform", `translate(${horizontalMargin}, ${margin / 2})`);

    let x = d3.scaleBand()
        .range([0, width])
        .padding(0.4)

    let xAxis = svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .attr("class", "xAxis")

    let y = d3.scaleLinear()
        .range([height, 0])

    let yAxis = svg.append('g')
        .attr("class", "yAxis")

    d3.select("#selectButton")
        .selectAll("myOptions")
        .data(Object.keys(stateNames))
        .enter()
        .append("option")
        .text(function (d) { return d; })
        .attr("value", function (d) { return d })

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


    function selectState(selectedState) { 

        d3.csv("https://covidtracking.com/api/v1/states/current.csv", function (rawData) {
            let initials = stateNames[selectedState]
            let stateData = rawData[stateIndex[initials]]
            let data = []

            for (let [d, v] of Object.entries(stateData)) {
                if (d === 'positive' || d === 'recovered' || d === 'death' ||
                    d === 'hospitalizedCurrently' || d === 'hospitalizedCumulative' ||
                    d === 'inIcuCurrently' || d === 'inIcuCumulative' || d === 'onVentilatorCurrently' ||
                    d === 'onVentilatorCumulative' || 
                    d === 'hospitalized') {
                    d = capitalize(d)
                    if (!isNaN(parseInt(v))) {
                        data.push({ category: d, value: +parseInt(v) })
                    }
                }
            }

            x.domain(data.map(function (d) { return d.category }))

            let maxY = d3.max(data, function (d) { return d.value })
            y.domain([0, (maxY * 1.2)])

            yAxis.transition()
                .duration(1000)
                .call(d3.axisLeft(y))

            xAxis.transition()
                .duration(1000)
                .call(d3.axisBottom(x))
                .attr("transform", "translate(-0.2," + height + ")")
                .selectAll("text")
                .attr("transform", "translate(-7,0)rotate(-20)")
                .style("text-anchor", "end")
                .attr('x', -8)

            let bar = svg.selectAll("rect")
                .data(data)

            let text = svg.selectAll("text")

            text.exit().remove()
            
            bar.enter()
            .append("rect")
                .attr("class", "rect")
                .merge(bar)
                .transition()
                .duration(1000)
                .attr("x", function (d) { return x(d.category) })
                .attr("y", function (d) { return y(d.value) })
                .attr("width", x.bandwidth())
                .attr("height", function (d) { return height - y(d.value) })
                .style("fill", "#69b3a2")

            bar.exit()
                .remove()

            svg.append('text')
                .attr('class', 'y-axis-label')
                .attr('x', -height / 2)
                .attr('y', -80)
                .attr('transform', 'rotate(-90)')
                .attr('text-anchor', 'middle')
                .text('Reported Cases')

            svg.append('text')
                .attr('class', 'x-axis-label')
                .attr('x', width / 3 + horizontalMargin)
                .attr('y', height + verticalMargin)
                .attr('text-anchor', 'middle')
                .text('Categories')

            

        })

        d3.select("#selectButton").on("change", function (d) {
            let selectedOption = d3.select(this).property("value")
            selectState(selectedOption)
        
    });

    }
    selectState("Alaska")
})