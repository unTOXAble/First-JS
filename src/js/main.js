'use.strict';

let startButton = document.getElementById('start'),

    budgetValue = document.getElementsByClassName('budget-value'),
    daybudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthsavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearsavingsValue = document.getElementsByClassName('yearsavings-value'),

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesItemBtn = document.getElementsByTagName('expenses-item-btn'),
    countBudgetBtn = document.getElementsByTagName('count-budget-btn'),
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    chooseIncome = document.querySelector('#income'),
    savingsCheckbox = document.querySelector('#savings'),
    chooseSum = document.querySelector('#sum'),
    choosePercent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц", "50000");
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-11-23");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц", "0");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let item = prompt("Введите обязательную статью расходов в этом месяце", "Еда"),
                sum = prompt("Во сколько обойдется?", "1000");

            if (item != "" && sum != "" && typeof(item) != null && typeof(sum) != null) {
                console.log("done");
                appData.expenses[item] = sum;
            } else {
                console.log("false");
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.dayMoney = (appData.budget / 30).toFixed(1);
        alert("Ежедневный бюджет составляет: " + appData.dayMoney);
    },
    checkSaving: function() {
        if (appData.savings == true) {
            let save = +prompt("Каков размер ваших накоплений", ""),
                percent = +prompt("Под какой процент хранятся ваши накопления", "");

            appData.monthIncome = save * percent / 100 / 12;
            alert("Размер вашего пассивного дохода в месяц составляет" + appData.monthIncome);
        }
    },
    detectLevel: function() {
        if (appData.dayMoney < 500) {
            alert("Ты бич ссаный");
        } else if (appData.dayMoney > 500 && appData.dayMoney < 3000) {
            alert("Неплохо живешь");
        } else if (appData.dayMoney > 3000) {
            alert("Нихуя ты баклажан");
        } else {
            alert("Ошибка");
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            appData.optionalExpenses[i + 1] = prompt("Статья необязательных расходов", "");
        }
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {
            let items = prompt("Укажите объекты дополнительного дохода через запятую", "Аренда, Сексуальное рабство, Подработка");
            if (typeof(items) == "string" && items != "") {
                console.log("chooseIncome: done");
                appData.income = items.split(", ");
                let addItem = prompt("Может быть вы что то еще добавите?", "Рэкет бомжей");
                if (typeof(addItem != null)) {
                    appData.income.push(addItem);
                }
                appData.income.sort();
            } else {
                console.log("chooseIncome: false");
                i--;
            }
        }
        appData.income.forEach(function(item, i, income) {
            alert(i + 1 + " Способы доп. заработка: " + item);
        });
    }
};

for (let property in appData) {
    console.log("Наша программа включает в себя данные: " + property);
}