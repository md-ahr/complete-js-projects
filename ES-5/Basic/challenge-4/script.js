let ahr = {
    fullName: 'Abdul Halim',
    mass: 62,
    height: 5.4,
    bmi: function () {
        return ahrBMI = this.mass / (this.height * this.height);
    }
};

let nd = {
    fullName: 'Nahidul Islam',
    mass: 58,
    height: 5.2,
    bmi: function () {
        return ndBMI = this.mass / (this.height * this.height);
    }
};

if (ahr.bmi() > nd.bmi()) {
    console.log(`${ahr.fullName} has the higher BMI with ${ahr.bmi()} points`);
} else if (nd.bmi() > ahr.bmi()) {
    console.log(`${nd.fullName} has the higher BMI with ${nd.bmi()} points`);
} else {
    console.log(`They have both same BMI with ${ahr.bmi()}`);
}