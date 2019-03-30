// Basic Objects

var person = function (name, dob, job) {
    this.name = name,
    this.dob = dob,
    this.job = job
};

person.prototype.calAge = function () {
    console.log('2019' - this.dob);
};

person.prototype.lastName = 'Halim';

person1 = new person('ahr', '1994', 'rokomari');
person2 = new person('nd', '1992', 'techbd');
person3 = new person('sk', '1991', 'hrmbd');

person1.calAge();
person2.calAge();
person3.calAge();

console.log(person1.lastName);
console.log(person2.lastName);
console.log(person3.lastName);




// Create Object

var personProto = {
    calculateAge: function () {
        console.log('2019' - this.dateOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.dateOfBirth = '1995';
john.job = 'rokomari';
john.calculateAge();

var smith = Object.create(personProto, {
    name: { value: 'Smith' },
    dateOfBirth: { value: '1990' },
    job: { value: 'jhokomari' }
});
smith.calculateAge();




// Primitive vs Object

var a = 35;
var b = a;
a = 40;
console.log(a, b);

var obj1 = {
    name: 'ahr',
    age: '25'
};
var obj2 = obj1;
obj1.name = 'ndrt';
obj2.age = 40;
console.log(obj1, obj2);

var newAge = '20';
var newObj = {
    name: 'abc',
    city: 'Dhaka'
};
function change (a, b) {
    a = 38;
    b.city = 'Delhi';
}
change(newAge, newObj);
console.log(newAge);
console.log(newObj.city);




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




// Immediately Invoked Function Expressions (IIFE)

/*
function game () {
    var score = Math.random() * 10;
    console.log(Math.floor(score), score >= 5);
}
game();
*/

(function () {
    var score = Math.random() * 10;
    console.log(Math.floor(score), score >= 5);
})();

/*
(function (point) {
    var score = Math.random() * 10;
    console.log(Math.floor(score), score >= 5 - point);
})(5);
*/