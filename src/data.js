let states = {};
console.log(states)
d3.csv("https://covidtracking.com/api/v1/states/current.csv", function (data) {
    for (let i = 0; i < data.length; i += 1) {
        // console.log(data[i].positive);
        // console.log(data[i].negative);
        // console.log(data[i])
        let state = data[i];
        let name = state.state;
        // console.log(name)
        // console.log(typeof states)
        states[`${name}`] = {
            positive: state.positive,
            negative: state.negative,
            death: state.deadth,
            totalTestResults: state.totalTestResults,
            hospitalizedCurrently: state.hospitalizedCurrently,
            hospitalizedCumulative: state.hospitalizedCumulative,
            inIcuCurrently: state.inIcuCurrently,
            inIcuCumulative: state.inIcuCumulative,	
            onVentilatorCurrently: state.onVentilatorCurrently,
            onVentilatorCumulative: state.onVentilatorCumulative,
            recovered: state.recovered, 
            hospitalized: state.hospitalized



        }        
    }
});