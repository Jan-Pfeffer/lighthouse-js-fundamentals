let deemedAppropriate = []
    /* chooseStations(stations) 


    const stations = [
        ['Big Bear Donair', 10, 'restaurant'],
        ['Bright Lights Elementary', 50, 'school'],
        ['Moose Mountain Community Centre', 45, 'community centre']
    ];

    let deemedAppropriate = []
    let x = 0

    for (station in stations) {
        let innerArray = stations[x]
        let name = innerArray[0]
        let capacity = innerArray[1]
        let venue = innerArray[2]
        console.log(name);
        console.log(capacity);
        console.log(venue);
        x++;

    }
    */

/* If Function */

let name = 'Bright Lights Elementary'
let capacity = 20
let venue = 'jail'

if (capacity >= 20 && (venue == 'school' || venue == 'community centre')) {
    deemedAppropriate.push("Hey")
}