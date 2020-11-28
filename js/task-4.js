const credits = 23580;
const pricePerDroid = 3000;
const userCancel = 'Отменено пользователем!';
const notEnoughMoney = 'Недостаточно средств на счету!';
let message;
let totalPrice;

let amount = prompt('Сколько дроидов хотите купить?');

if (amount === null) {
    message = userCancel;
} else {
    totalPrice = amount * pricePerDroid;
    
    if (credits < totalPrice) {
        message = notEnoughMoney;
    } else {
        let balance;
        balance = credits - totalPrice;
        alert(`Вы купили ${amount} дроидов, на счету осталось ${balance} кредитов.`);
    }
}
console.log(message);







