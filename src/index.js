// import "./chart";

// const testObj = {
//   key1: "hi",
//   key2: {
//     key3: "Hello",
//   },
// };

// const greeting = testObj?.key2?.key3 || testObj.key1;
// window.addEventListener("DOMContentLoaded", () => {
//   document.body.classList.add("center");
//   const card = document.createElement("div");
//   card.classList.add("card", "center");
//   card.innerHTML = `<h2>${greeting} World!</h2>`;
//   document.body.append(card);
//   const imgCard = document.createElement("div");
//   imgCard.classList.add("card", "center", "image-card");
//   document.body.appendChild(imgCard);
// });

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

const states = {};
// console.log(states)
d3.csv("https://covidtracking.com/api/v1/states/current.csv", function (data) {
    for (let i = 0; i < data.length; i += 1) {
        const state = data[i];
        const name = state.state;
        states[`${name}`] = {
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
        }
        // console.log(states)
    }
    console.log(states)
}

);
