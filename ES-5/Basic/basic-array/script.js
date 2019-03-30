let arr = ['ahr', 25, 'developer', 'Bangladesh', true];

arr.push('demo');
arr.unshift('test');
console.log(arr);

arr.pop();
arr.shift();
console.log(arr);

let isDeveloper = (arr.indexOf('developer') > -1) ? 'He is a developer' : 'He is not a developer';
document.write(isDeveloper);