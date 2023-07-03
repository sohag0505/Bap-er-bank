// step-1 get the even listener to the deposite button
document.getElementById('btn-deposite').addEventListener('click', function() {
    // step-=2 get the deposite amount from the deposite input field
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);

    // step-3 get the current deposit total amount
    // for non-input
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositeTotalString = depositTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);
    // step-4 add the number to the deposite
    const currentDepositeAmount = newDepositeAmount + previousDepositeTotal;
    depositTotalElement.innerText = currentDepositeAmount;

    // step-5 get balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;

    balanceTotalElement.innerText = currentBalanceTotal;

    // step-7 clear deposit filed
    depositeField.value = " ";
})