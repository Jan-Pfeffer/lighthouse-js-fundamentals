let x = 0;
let deemedAppropriate = []

const stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ["Bright Lights Elementary", 50, 'school'],
    ['Moose Mountain Community Centre', 10, 'community centre']
];

function chooseStations(stations) {
    const arrayLength = stations.length;
    while (x < arrayLength) {
        let innerArray = stations[x];
        let name = innerArray[0];
        let capacity = innerArray[1];
        let venue = innerArray[2];
        if (capacity >= 20 && (venue == 'school' || venue == 'community centre')) {
            deemedAppropriate.push(name);
        }
        x++;
    }
    return deemedAppropriate;

}

console.log(chooseStations(stations));