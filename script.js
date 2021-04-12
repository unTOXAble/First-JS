'use strict';

let money = +prompt("Ваш бюджет на месяц", "0"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");


var AppData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: "",
    income: [],
    savings: false
};

let q1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    q2 = prompt("Во сколько обойдется?", ""),
    q3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    q4 = prompt("Во сколько обойдется?", "");

AppData.expenses[q1] = q2;
AppData.expenses[q3] = q4;
alert(AppData.money / 30);