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

/*
Next, pick a condition you want to start with, for example printing out "Loopy" 
instead of multiples of 3. Figure out how you're going to check whether a number 
is a multiple of 3, then write your if statement. To verify that it works, consider 
calculating a few multiples of 3 by hand in a notebook (for example, 102, 105, 108, etc.), 
then making sure they're being replaced with "Loopy" in your output. */

let number = 14
let devidedByThree = number / 3
let devidedByFour = number / 4


if (devidedByThree % 1 === 0) {
    console.log('Loopy');
}