// Print Document

function printDoc () {
    window.print();
}



// Arrow or Lamda Function

const years = [1991, 1994, 1992];
let ages = years.map((el, index) => `${index + 1}: ${2019 - el}`);
console.log(ages);

let viewAges = years.map((el, index) => {
    let date = new Date();
    let now = date.getFullYear();
    return `${index + 1}: ${now - el}`;
});
console.log(viewAges);



// Destructuring

let arr = [10, 5, 8];
let [a, b, c] = arr;
console.log(a, b, c);

let obj = {
    name: 'ahr',
    age: 25
};

// let {name, age} = obj;
// console.log(name, age);

let {name: nm, age: ag} = obj;
console.log(nm, ag);

function calcAge (year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}
[age2, retirement] = calcAge(1994);
console.log(`Age: ${age2}, Retirement At: ${retirement}`);



// Working With Array

let box = document.querySelectorAll('.box');
console.log(box);

let arrBox = Array.from(box);
console.log(arrBox);

arrBox.forEach(res => {
    console.log(res);
    res.style.backgroundColor = 'skyblue';
});

for (const list of arrBox) {
    console.log(list);
    if (list.className.includes('red')) {
        list.style.backgroundColor = 'red';
    }
}

let anyArr = [24, 17, 22, 18, 19, 14];
let checkAge = anyArr.filter(cur => cur >= 18);
// let checkAge = anyArr.every(cur => cur >= 18);
// let checkAge = anyArr.some(cur => cur >= 18);
// let checkAge = anyArr.map(cur => cur >= 18);
// let checkAge = anyArr.findIndex(cur => cur >= 18);
// let checkAge = anyArr.find(cur => cur >= 18);
console.log(checkAge);



// Spread Operator

let someAges = [24, 28, 32, 21, 25];
function sumOfAges(a, b, c, d, e) {
    return a+b+c+d+e;
}
// let result = sumOfAges.apply(null, someAges);
let result = sumOfAges(...someAges);
console.log(result);

let family1 = ['ahr', 'nd', 'sk'];
let family2 = ['abc', 'xyz'];
// let joinFamily = family1.concat(family2);
let joinFamily = [...family1, ...family2];
console.log(joinFamily);



// Rest Parameter

function getAge (limit, ...years) {
    years.forEach(element => {
        console.log((2019 - element) >= limit);
    });
}
getAge(18, 1997, 2000, 2002, 2005, 2009);



// Default Parameter

function person (name, age, nationality, dept='blank') {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
    this.dept = dept;
}
let newPerson = new person('ahr', '25', 'bd');
console.log(newPerson);
let newPerson2 = new person('nd', '27', 'any', 'special');
console.log(newPerson2);



// Working With Maps

const question = new Map();

question.set('question', 'How easy the answer?');
question.set(1, 'normal');
question.set(2, 'very easy');
question.set(3, 'very hard');
question.set('correct', 2);
question.set(true, 'Correct answer');
question.set(false, 'Wong Answer, Please try again...');

console.log(question.get('question'));

// console.log(question.size, question);

// if(question.has(4)) {
//     // question.delete(2)
//     console.log('found...');
// } else {
//     console.log('not found...');
// }

// console.log(question.size, question);

// question.clear();

// console.log(question.size, question);

for (let [key, value] of question.entries()) {
    // console.log(`${key} : ${value}`);
    if (typeof key === 'number') {
        console.log(`${key} : ${value}`);
    }
}

// let ans = parseInt(prompt('Enter the correct answer!'));
// console.log(question.get(ans === question.get('correct')));




// Working With Classes

class Person {
    constructor(name, dob, district) {
        this. name = name;
        this.dob = dob;
        this.district = district;
    }
    calculateAge() {
        var myAge = new Date().getFullYear() - this.dob;
        console.log(`Hi ${this.name}, your age is ${myAge} and you live in ${this.district}.`);
        return myAge;
    }
    static greeting() {
        console.log('Hello boy!');
    }
}
const info = new Person('ahr', 1994, 'Rajshahi');
info.calculateAge();
Person.greeting();

class Player extends Person {
    constructor(name, dob, district, games, medals) {
        super(name, dob, district);
        this.age = super.calculateAge();
        this.games = games;
        this.medals = medals;
    }
    wonMedal() {
        this.medals++;
        console.log(`Congratulation ${this.name}, your age is ${this.age}, you live in ${this.district}, you are a ${this.games} and you won ${this.medals} medals.`)
    }
}

const palyerInfo = new Player('John', 1992, 'USA', 'swimmer', 5);
palyerInfo.wonMedal();