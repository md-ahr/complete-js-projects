function tipCalculation (bill) {

    let percentage;

    if (bill < 50) {
        percentage = 0.2;
    } else if (bill >= 50 && bill <= 200) {
        percentage = 0.15;
    } else {
        percentage = 0.1;
    }

    return percentage * bill;
}

let bills = [124, 48, 268];

let totalTips = [tipCalculation(bills[0]), tipCalculation(bills[1]), tipCalculation(bills[2])];

let totalPaid = [(totalTips[0]+bills[0]), (totalTips[1]+bills[1]), (totalTips[2]+bills[2])]

console.log(`Total Tip = ${totalTips} \nTotal Amount = ${totalPaid}`);