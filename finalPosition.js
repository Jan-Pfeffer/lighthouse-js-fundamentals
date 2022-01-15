const attitude = ['north', 'north', 'west', 'west', 'north', 'east', 'north']
let vertical = 0
let horizontal = 0
let loc = []

function finalPosition(attitude) {
    for (let direction of attitude) {
        if (direction === "north") {
            vertical = vertical + 1
        } else if (direction === "south") {
            vertical = vertical - 1
        } else if (direction === "east") {
            horizontal = horizontal + 1
        } else if (direction === "west") {
            horizontal = horizontal - 1
        }
    }
    loc.push(horizontal, vertical)
    return loc;
}

finalPosition(attitude);