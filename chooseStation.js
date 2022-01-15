let deemedAppropriate = []
let x = 0;
/*chooseStations(stations)*/


const stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre']
];


for (station in stations) {
    let innerArray = stations[x]
    let name = innerArray[0]
    let capacity = innerArray[1]
    let venue = innerArray[2]
    if (capacity >= 20 && (venue == 'school' || venue == 'community centre')) {
        deemedAppropriate.push(name)
    }
    x++;

}

console.log(deemedAppropriate);