document.getElementById('cashOut').style.display="none";
document.getElementById('transaction').style.display = 'none';
document.getElementById('sendMoney').style.display = 'none';
document.getElementById('get-bonus').style.display = 'none';
document.getElementById('payBill').style.display = 'none';


document.getElementById('add-money-box').addEventListener('click', function(){
    document.getElementById('cashOut').style.display="none";
    document.getElementById('addMoney').style.display='block';
    document.getElementById('transaction').style.display = 'none';
    document.getElementById('sendMoney').style.display = 'none';
    document.getElementById('get-bonus').style.display = 'none';
    document.getElementById('payBill').style.display = 'none';
    
})
document.getElementById('cashOut-box').addEventListener('click', function(){
    document.getElementById('cashOut').style.display="block";
    document.getElementById('addMoney').style.display='none';
    document.getElementById('transaction').style.display = 'none';
    document.getElementById('sendMoney').style.display = 'none';
    document.getElementById('get-bonus').style.display = 'none';
    document.getElementById('payBill').style.display = 'none';
    
})

document.getElementById('transaction-box').addEventListener('click', function(){
    document.getElementById('cashOut').style.display = 'none';
    document.getElementById('addMoney').style.display = 'none';
    document.getElementById('transaction').style.display = 'block';
    document.getElementById('sendMoney').style.display = 'none';
    document.getElementById('get-bonus').style.display = 'none';
    document.getElementById('payBill').style.display = 'none';
})

document.getElementById('sendMoney-card').addEventListener('click', function(){
    document.getElementById('cashOut').style.display = 'none';
    document.getElementById('addMoney').style.display = 'none';
    document.getElementById('transaction').style.display = 'none';
    document.getElementById('sendMoney').style.display = 'block';
    document.getElementById('get-bonus').style.display = 'none';
    document.getElementById('payBill').style.display = 'none';
})

document.getElementById('bonus-card').addEventListener('click', function(){
    document.getElementById('cashOut').style.display = 'none';
    document.getElementById('addMoney').style.display = 'none';
    document.getElementById('transaction').style.display = 'none';
    document.getElementById('sendMoney').style.display = 'none';
    document.getElementById('get-bonus').style.display = 'block';
    document.getElementById('payBill').style.display = 'none';
})

document.getElementById('payBill-card').addEventListener('click', function(){
    document.getElementById('cashOut').style.display = 'none';
    document.getElementById('addMoney').style.display = 'none';
    document.getElementById('transaction').style.display = 'none';
    document.getElementById('sendMoney').style.display = 'none';
    document.getElementById('get-bonus').style.display = 'none';
    document.getElementById('payBill').style.display = 'block';
})

