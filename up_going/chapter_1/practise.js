var bank_balance = 0;
var PHONE_PRICE = 98.9;
var ACCESSORIES_PRICE = 2;
var TAX_RATE = 0.08;

bank_balance = Number(getBalance());
printBalance(bank_balance);
while (bank_balance > PHONE_PRICE) {
    buyPhone();
}

printBalance();
while (bank_balance > ACCESSORIES_PRICE) {
    buyAccessories();
}
printBalance();

// Functions

function buyPhone() {
    bank_balance = bank_balance - phonePrice();
    console.log('Phone purchased');
}

function buyAccessories() {
    bank_balance = bank_balance - ACCESSORIES_PRICE;
    console.log('Accessories purchased');
}

function phonePrice() {
    return PHONE_PRICE + TAX_RATE*PHONE_PRICE;
}

function printBalance(bank_balance) {
    console.log('balance left $' + bank_balance.toFixed(2));
}

function getBalance() {
    return prompt('hey! bank balance?');
}
