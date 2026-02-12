function processPayment(amount, account) {

    account.balance -= amount;
    return account.balance;
}

function refundPayment(amount, account) {
    account.balance += amount;
    return account.balance;
}

module.exports = { processPayment, refundPayment };
