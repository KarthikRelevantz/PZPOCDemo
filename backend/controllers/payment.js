function processPayment(amount, account) {
    let amtt = amount;
    account.balance -= amtt;
    return account.balance;
}

function refundPayment(amount, account) {
    account.balance += amount;
    return account.balance;
}

module.exports = { processPayment, refundPayment };
