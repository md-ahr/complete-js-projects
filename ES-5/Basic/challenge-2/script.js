
let johnAverage = (89 + 120 + 103) / 3;

let mikeAverage = (116 + 94 + 123) / 3;

let maryAverage = (97 + 134 + 105) / 3;

console.log(`John's: ${johnAverage} \nMike's: ${mikeAverage} \nMary's: ${maryAverage}`);

if (johnAverage > mikeAverage && johnAverage > maryAverage) {
    console.log(`John's team wins with ${johnAverage} points`);
} else if(mikeAverage > johnAverage && mikeAverage > maryAverage) {
    console.log(`Mike's team win with ${mikeAverage} points`);
} else if(maryAverage > johnAverage && maryAverage > mikeAverage) {
    console.log(`Mary's team win with ${maryAverage} points`);
} else {
    console.log(`There is a draw`);
}