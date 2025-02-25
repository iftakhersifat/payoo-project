document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const amount =document.getElementById('amount-to-add').value;
    // console.log(typeof amount);
    const convertedAmount =parseFloat(amount);

    const pin =document.getElementById('password').value;
    const convertedPin =parseInt(pin);

    const totalBalance =document.getElementById('main-balance').innerText;
    // console.log(typeof totalBalance);
    const convertedTotalBalance =parseFloat(totalBalance);


    if(convertedPin === 1234){
        const sum =convertedAmount + convertedTotalBalance;
        document.getElementById('main-balance').innerText = sum;
        // console.log(sum);
    } 
    else{
        console.log('pin is incorrect');
    }
})