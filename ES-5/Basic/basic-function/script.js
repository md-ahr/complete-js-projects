// Calculate Retirement Age

function getAge (birthYear) {
    return (2019 - birthYear);
}

function getRetirementAge (year, fullName) {
    let currentAge = getAge(year);
    let age = '65' - currentAge;
    document.write(`${fullName} retirement within ${age} years <br><br>`);
}

getRetirementAge('1994', 'Abdul Halim');

getRetirementAge('1992', 'Nahidul Islam');

getRetirementAge('1991', 'Johir Raihan');




// Find Profession

let profession = function (job, name) {

    switch(job) {
        case 'corporator':
            return `${name} place job to others people`;
        case 'designer':
            return `${name} draw creative design`;
        case 'developer':
            return `${name} solve programming problems`;
        default:
            return `${name} does something others`;
    }

}

console.log(profession('developer', 'Abdul Halim'));

console.log(profession('designer', 'Nahidul Islam'));

console.log(profession('corporator', 'Johir Raihan'));