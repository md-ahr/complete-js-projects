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