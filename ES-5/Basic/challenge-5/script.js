let john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    amounts: function () {
        let percentage;
        this.tips = [];
        this.paid = [];
        let i;
        for (i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                percentage = 0.2;
            } else if (this.bills[i] > 50 && this.bills[i] < 200) {
                percentage = 0.15;
            } else {
                percentage = 0.1;
            }
            this.tips[i] = this.bills[i] * percentage;
            this.paid[i] = this.bills[i] + (this.bills[i] * percentage);
        }
    }
};

let mark = {
    fullName: 'Mark Fisher',
    bills: [77, 375, 110, 45],
    amounts: function () {
        let percentage;
        this.tips = [];
        this.paid = [];
        let i;
        for (i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 100) {
                percentage = 0.2;
            } else if (this.bills[i] > 100 && this.bills[i] < 300) {
                percentage = 0.1;
            } else {
                percentage = 0.25;
            }
            this.tips[i] = this.bills[i] * percentage;
            this.paid[i] = this.bills[i] + (this.bills[i] * percentage);
        }
    }
};

function getTipAverage (tips) {
    let sum = 0;
    for (i = 0; i < tips.length; i++) {
        sum += tips[i];
    }
    return sum / tips.length;
}

function getBillAverage (paid) {
    let sum = 0;
    for (i = 0; i < paid.length; i++) {
        sum += paid[i];
    }
    return sum / paid.length;
}

john.amounts();

mark.amounts();

john.tipAverage = getTipAverage(john.tips);

mark.tipAverage = getTipAverage(mark.tips);

john.billAverage = getBillAverage(john.paid);

mark.billAverage = getBillAverage(mark.paid);

console.log(john, mark);

if (john.tipAverage > mark.tipAverage) {
    console.log(`${john.fullName}'s family pays higher tips, with an average of $${john.tipAverage}`);
} else if (mark.tipAverage > john.tipAverage) {
    console.log(`${mark.fullName}'s family pays higher tips, with an average of $${mark.tipAverage}`);
} else {
    console.log(`Both family pays same tips, with an average of ${$john.tipAverage}`);
}

if (john.billAverage > mark.billAverage) {
    console.log(`${john.fullName}'s family pays higher bills, with an amount of $${john.billAverage}`);
} else if (mark.billAverage > john.billAverage) {
    console.log(`${mark.fullName}'s family pays higher amount of bills, with an amount of $${mark.billAverage}`);
} else {
    console.log(`Both family pays same amount of bills, with an amount of ${$john.billAverage}`);
}