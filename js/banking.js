function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const depositeValue = inputField.value;
    const newDepositAmount = parseFloat(depositeValue);

    // clear the deposit input field
    inputField.value = '';

    return newDepositAmount;
}

function updateTotalField(inputFieldTotal,amount){
    // debugger;
    const totalField = document.getElementById(inputFieldTotal);
    const previousTotal = totalField.innerText;
    const previousDepositAmount = parseFloat(previousTotal);
    totalField.innerText  = previousDepositAmount + amount;
}


function updateBalance(newDepositAmount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if(isAdd==true){
        balanceTotal.innerText = previousBalanceTotal + newDepositAmount;
    }else{
        balanceTotal.innerText = previousBalanceTotal - newDepositAmount;
    }
}

// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    
    const newDepositAmount = getInputValue('deposit-input');
    updateTotalField('deposit-total',newDepositAmount);
    updateBalance(newDepositAmount,true)

});

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
 
    const newWithdrawAmount=getInputValue('withdraw-input')
    updateTotalField('withdraw-total', newWithdrawAmount)
    updateBalance(newWithdrawAmount,false)

})