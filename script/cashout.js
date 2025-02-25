document.getElementById('cashOut-btn').addEventListener('click', function (event){
    event.preventDefault();
    const pinNumber =document.getElementById('pins').value;
    const convertedPinNumber =parseInt(pinNumber);

    const cashOutAmount =document.getElementById('cashOut-amount').value;
    const convertedCahOutAmount =parseFloat(cashOutAmount);

    const totalBalance =document.getElementById('main-balance').innerText;
    const convertedTotalBalance =parseFloat(totalBalance);

    if(convertedPinNumber=== 1234){
        const withDraw = convertedTotalBalance - convertedCahOutAmount;
        document.getElementById('main-balance').innerText = withDraw;
        
    }
    else{
        console.log('pin incorrect');
    }
})
