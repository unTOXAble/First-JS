let money = +prompt("Ваш бюджет на месяц", "0"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-11-23");

let appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: "",
    income: [],
    savings: false
};

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

appData.dayMoney = appData.money / 30;
alert("Ежедневный бюджет составляет: " + appData.dayMoney);

if (appData.dayMoney < 500) {
    alert("Ты бич ссаный");
} else if (appData.dayMoney > 500 && appData.dayMoney < 3000) {
    alert("Неплохо живешь");
} else if (appData.dayMoney > 3000) {
    alert("Нихуя ты баклажан");
} else {
    alert("Ошибка");
}