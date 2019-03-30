// BUDGET CONTROLLER
var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value; 
        this.percentage = -1;    
    };

    Expense.prototype.calcPercentage = function (totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function() {
        return this.percentage;
    };
    
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;     
    };

    var calculateTotal = function (type) {
        var sum = 0;
        data.allItems[type].forEach(function(res) {
            sum += res.value;
        });
        data.total[type] = sum;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        total: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };

    return {
        addItem: function (type, des, val) {

            var newItem, ID;

            // Create new id
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;   // ID = lastId + 1
            } else {
                ID = 0;
            }

            // Create new item
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // Push the item
            data.allItems[type].push(newItem);

            // Return the new item
            return newItem;
        },
        calculateBudget: function () {
            calculateTotal('inc');
            calculateTotal('exp');
            data.budget = data.total.inc - data.total.exp;
            if (data.total.inc > 0) {
                data.percentage = Math.round((data.total.exp / data.total.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },
        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.total.inc,
                totalExp: data.total.exp,
                percentage: data.percentage
            };
        },
        calculatePercentages: function () {
            data.allItems.exp.forEach(function(curr) {
                curr.calcPercentage(data.total.exp);
            });
        },
        getPercentages: function () {
            var allPerc = data.allItems.exp.map(function(cur) {
                return cur.getPercentage();
            });
            return allPerc;
        },
        deleteItem: function (type, id) {
            /*
                id = 3
                ids = [0, 1, 2, 3, 4, 5].map(currentID) = 3 --> current index position
                index = 3.indexOf(3) = 3 --> item position
                [0, 1, 2, 3, 4, 5].splice(3[itemNum], 1) => remove next item position->4, from current position->3
            */
            var ids, index;
            ids = data.allItems[type].map(function(current) {
                return current.id;    //return current index position
            });
            index = ids.indexOf(id);  // return item position of array index [indexPos.indexOf(id)=itemPos]
            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }
        },
        test: function () {
            // console.log(data);
        }
    };

})();

// UI CONTROLLER
var UIController = (function () {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };

    var formatNumber = function (num, type) {
        var numSplit, int, dec, type;
        num = Math.abs(num);        // 0 or 500(input value)
        num = num.toFixed(2);       // 0.00 or 500.00
        numSplit = num.split('.');  // ['0 or 500', '00']
        int = numSplit[0];          // 0 or 500
        if (int.length > 3) {
          int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);   // '1,000' --> substr(start, length) [extract string]
        }
        dec = numSplit[1];          // 00
        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
    };

    var nodeListForEach = function (list, callback) {
        for (i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
    };

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            }
        },
        addListItem: function (obj, type) {
            var html, newHtml, element;

            // Create HTML string with text
            if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                html = `<div class="item clearfix" id="inc-%id%">
                            <div class="item__description">%description%</div>
                            <div class="right clearfix">
                                <div class="item__value">%value%</div>
                                <div class="item__delete">
                                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                                </div>
                            </div>
                        </div>`;
            } else if (type === 'exp') {
                element = DOMStrings.expenseContainer;
                html = `<div class="item clearfix" id="exp-%id%">
                            <div class="item__description">%description%</div>
                            <div class="right clearfix">
                                <div class="item__value">%value%</div>
                                <div class="item__percentage">21%</div>
                                <div class="item__delete">
                                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                                </div>
                            </div>
                        </div>`;
            }

            // Replace the text with actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },
        getDOMStrings: function () {
            return DOMStrings;
        },
        clearFields: function () {
            var fields, arrFields;
            fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);
            arrFields = Array.prototype.slice.call(fields);
            arrFields.forEach(function(current) {
                current.value = '';
            });
            arrFields[0].focus();
        },
        displayBudget: function (obj) {
            obj.budget > 0 ? type = 'inc' : type = 'exp';
            document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMStrings.expenseLabel).textContent = formatNumber(obj.totalExp, 'exp');
            if (obj.percentage > 0) {
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMStrings.percentageLabel).textContent = '---';
            }
        },
        displaPercentage: function (percentages) {
            var fields = document.querySelectorAll(DOMStrings.expensesPercLabel);
            nodeListForEach(fields, function(current, index) {
                if(percentages[index] > 0) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }
            });
        },
        displayMonth: function () {
            var now, month, year;
            now = new Date();
            months = ['January', 'February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October', 'November', 'December'];
            month = now.getMonth();
            year = now.getFullYear();
            document.querySelector(DOMStrings.dateLabel).textContent = months[month] + ', ' + year;
        },
        changedType: function () {
            var fields = document.querySelectorAll(DOMStrings.inputType + ',' + DOMStrings.inputDescription + ',' + DOMStrings.inputValue);
            nodeListForEach(fields, function(cur) {
               cur.classList.toggle('red-focus');
            });
            document.querySelector(DOMStrings.inputBtn).classList.toggle('red');
        },
        deleteListItem: function (selectorId) {
            var el = document.getElementById(selectorId);
            el.parentNode.removeChild(el);
        }
    };

})();

// GLOBAL CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var initEventLintener = function () {
        var DOM = UICtrl.getDOMStrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
    };

    var updateBudget = function () {

        // 1. Calculate the budget
        budgetCtrl.calculateBudget();

        // 2. Return the budget
        var budget = budgetCtrl.getBudget();

        // 3. Display the budget on the UI
        UICtrl.displayBudget(budget);

    }

    var updatePercentage = function () {

        // 1. Calculate percentage
        budgetCtrl.calculatePercentages();

        // 2. Read percentage from the budget controller
        var percentages = budgetCtrl.getPercentages();

        // 3. Update the UI with the new percentage
        UICtrl.displaPercentage(percentages);
    }

    var ctrlAddItem = function () {

        var input, newItem;

        // 1. Get input data
        input = UICtrl.getInput();

        if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
            // 2. Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type);

            // 4. Clear the fields
            UICtrl.clearFields();

            // 5. Calculate and update Budget
            updateBudget();

             // 6. Calculate and update percentage 
             updatePercentage();

            document.getElementById('error').style.display = 'none';
        } else {
            document.getElementById('error').style.display = 'block';
        }

    };

    var ctrlDeleteItem = function (event) {

        var itemID, splitID, type, ID;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if (itemID) {

            // inc-1
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            budgetCtrl.test();

            // 1. Delete the item from the data structure
            budgetCtrl.deleteItem(type, ID);

            // 2. Delete the item from the UI
            UICtrl.deleteListItem(itemID);

            // 3. Update and show the new budget
            updateBudget();
            
            // 4. Update and show percentage 
            updatePercentage();
        }

    };

    return {
        init: function () {
            console.log('Application Started');
            document.getElementById('error').style.display = 'none';
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            UICtrl.displayMonth();
            initEventLintener();
        }
    };

})(budgetController, UIController);

controller.init();