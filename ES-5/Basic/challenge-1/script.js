const massOfJohn = 62;
const heightOfJohn = 5.4;

const massOfMark = 60;
const heightOfMark = 5.1;

let bmiOfJohn = massOfJohn / (heightOfJohn * heightOfJohn);

let bmiOfMark = massOfMark / (heightOfMark * heightOfMark);

console.log(`Mark: ${bmiOfMark}, John: ${bmiOfJohn}`);

let compare = bmiOfMark > bmiOfJohn;

console.log(`Is Mark's BMI higher than John's? ${compare}`);