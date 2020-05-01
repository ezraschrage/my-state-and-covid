let states = {};
// console.log(states)
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
            positive: parseInt(state.positive),
            negative: parseInt(state.negative),
            death: parseInt(state.deadth),
            totalTestResults: parseInt(state.totalTestResults),
            hospitalizedCurrently: parseInt(state.hospitalizedCurrently),
            hospitalizedCumulative: parseInt(state.hospitalizedCumulative),
            inIcuCurrently: parseInt(state.inIcuCurrently),
            inIcuCumulative: parseInt(state.inIcuCumulative),	
            onVentilatorCurrently: parseInt(state.onVentilatorCurrently),
            onVentilatorCumulative: parseInt(state.onVentilatorCumulative),
            recovered: parseInt(state.recovered), 
            hospitalized: parseInt(state.hospitalized)
        }        
    }
});
