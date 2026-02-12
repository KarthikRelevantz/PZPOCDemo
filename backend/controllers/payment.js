function processPayment(amount, account) {
    if (amount <= 0) {
        throw new Error("Invalid payment amount");
    }
    account.balance -= amount;
    return account.balance;
}

function refundPayment(amount, account) {
    account.balance += amount;
    return account.balance;
}

module.exports = { processPayment, refundPayment };
