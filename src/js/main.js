'use.strict';

let startButton = document.getElementById('start'),

    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    expensesItem = document.getElementsByClassName('expenses-item'),
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    chooseIncome = document.querySelector('#income'),
    savingsCheckbox = document.querySelector('#savings'),
    chooseSum = document.querySelector('#sum'),
    choosePercent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


expensesItemBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBudgetBtn.disabled = true;

startButton.addEventListener('click', function() {
    let money, time;

    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-11-23");
    money = +prompt("Ваш бюджет на месяц", "50000");


    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц", "0");
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = appData.budget.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesItemBtn.disabled = false;
    optionalExpensesBtn.disabled = false;

});

expensesItemBtn.addEventListener('click', function() {

    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let item = expensesItem[i].value,
            val = expensesItem[++i].value;

        if (item != "" && val != "" && typeof(item) != null && typeof(val) != null) {
            console.log("done");
            appData.expenses[item] = val;
            sum += +val;
        } else {
            console.log("false");
            i--;
        }
    }
    expensesValue.textContent = sum;
    countBudgetBtn.disabled = false;
});

optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
    }
});

countBudgetBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
        appData.dayMoney = ((appData.budget - +expensesValue.textContent) / 30).toFixed(1);
        dayBudgetValue.textContent = appData.dayMoney;

        if (appData.dayMoney < 500) {
            levelValue.textContent = "Ты бич ссаный";
        } else if (appData.dayMoney > 500 && appData.dayMoney < 3000) {
            levelValue.textContent = "Жить можно";
        } else if (appData.dayMoney > 3000) {
            levelValue.textContent = "Нихуя ты баклажан";
        } else {
            levelValue.textContent = "Ошибка";
        }
    } else {
        levelValue.textContent = "Ошибка, введите данные дохода";
    }

});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

savingsCheckbox.addEventListener('click', function() {
    if (appData.savings == false) {
        appData.savings = true;
    } else {
        appData.savings = false;
    }
});

chooseSum.addEventListener('input', function() {
    if (appData.savings == true) {
        let save = chooseSum.value,
            percent = choosePercent.value;

        appData.monthIncome = +(save * percent / 100 / 12);
        appData.yearIncome = +(save * percent / 100);

        monthSavingsValue.textContent = appData.monthIncome;
        yearSavingsValue.textContent = appData.yearIncome;
    }
});


choosePercent.addEventListener('input', function() {
    if (appData.savings == true) {
        let save = chooseSum.value,
            percent = choosePercent.value;

        appData.monthIncome = +(save * percent / 100 / 12);
        appData.yearIncome = +(save * percent / 100);

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: '',
    timeData: '',
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,



}