// First Class Function - Passing as Argument

var years = [1992, 1994, 1991, 1987, 1996, 2004];

function calculateArray (arr, fn) {
    var ageArr = [];
    for (var i = 0; i < arr.length; i++) {
        ageArr.push(fn(arr[i]));
    }
    return ageArr;
}

function calculateAllAge (dateOfBirth) {
    return (2019 - dateOfBirth);
}

function isAdult (age) {
    return age > 18;
}

function heartRate (age) {
    if (age >= 18 && age <= 60) {
        return Math.round(206.9 - (0.67 * age) );
    } else {
        return -1;
    }
}

var ages = calculateArray(years, calculateAllAge);

var isAdult = calculateArray(ages, isAdult);

var bitRate = calculateArray(ages, heartRate);

console.log(ages);

console.log(isAdult);

console.log(bitRate);




// First Class Function - Function as Return

function interviewQues (job) {
    if (job === 'designer') {
        return function (name) {
            console.log(`Hey ${name}, Can you tell us about ui/ux?`);
        }
    } else if (job === 'developer') {
        return function (name) {
            console.log(`Hey ${name}, What is angular js?`);
        }
    } else {
        return function (name) {
            console.log(`Hey ${name}, What do you do?`);
        }
    }
}

var developer = interviewQues('developer');
developer('Abdul Halim');

interviewQues('designer')('Nahidul Islam');

interviewQues('hrm')('Johir Raihan');
