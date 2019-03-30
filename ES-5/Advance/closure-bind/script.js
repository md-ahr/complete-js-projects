// Closure

function retirement (retirementAge) {
    var a = ' years left untill retirement';
    return function (dateOfBirth) {
        var age = 2019 - dateOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementBD = retirement(60);
var retirementENG = retirement(62);

retirementUS(1994);
retirementBD(1994);
retirementENG(1994);



function interviewQues (job) {
    return function (name) {
        if (job === 'designer') {
            console.log(`Hey ${name}, Can you tell us about ui/ux?`);
        } else if (job === 'developer') {
            console.log(`Hey ${name}, What is angular js?`);
        } else {
            console.log(`Hey ${name}, What do you do?`);
        }
    }
}

interviewQues('developer')('Abdul Halim');
interviewQues('designer')('Nahidul Islam');
interviewQues('hrm')('Johir Raihan');




// Call(), Bind() & Apply()

var john = {
    name: 'John Smith',
    age: '25',
    job: 'web developer',
    presentation: function (style, time) {
        if (style === 'formal') {
            console.log(`Good ${time}, ladies and gentleman! I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old.`);
        } else {
            console.log(`Hey, What's up? I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old. Have a nice ${time}.`);
        }
    }
};

var emily = {
    name: 'Emily Catherine',
    age: '21',
    job: 'graphics designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

john.presentation.apply(emily, ['friendly', 'night']);

john.presentation.bind(emily, 'formal')('morning');

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('noon');



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

function isAdult (limit, age) {
    return age >= limit;
}

var ages = calculateArray(years, calculateAllAge);

var isAdult = calculateArray(ages, isAdult.bind(this, 20));

console.log(ages);

console.log(isAdult);