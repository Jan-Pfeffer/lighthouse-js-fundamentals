/*Then, start working on your program by 
writing a loop that prints out all the numbers from 100 to 200, 
inclusive. Only move on to the next step when that works*/
let numbersArray = [100, 101, 102, 95, 75, 104, 107, 200, 203]

let x = 0
for (num in numbersArray) {
    if (numbersArray[x] >= 100 && numbersArray[x] <= 200) {
        console.log(numbersArray[x]);
    }
    x++;
}