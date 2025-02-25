document.getElementById('add-money-box').addEventListener('click', function(){
    document.getElementById('cashOut').style.display="none";
    document.getElementById('addMoney').style.display='block';
    document.getElementById('transaction').style.display = 'none';
    
})
document.getElementById('cashOut-box').addEventListener('click', function(){
    document.getElementById('cashOut').style.display="block";
    document.getElementById('addMoney').style.display='none';
    document.getElementById('transaction').style.display = 'none';
    
})

document.getElementById('transaction-box').addEventListener('click', function(){
    document.getElementById('cashOut').style.display = 'none';
    document.getElementById('addMoney').style.display = 'none';
    document.getElementById('transaction').style.display = 'block';
})