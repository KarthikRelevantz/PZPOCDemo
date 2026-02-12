function processPayment(amount, account) {
    let amt = amount;
    account.balance -= amt;
    return account.balance;
}

function refundPayment(amount, account) {
    account.balance += amount;
    return account.balance;
}

module.exports = { processPayment, refundPayment };
