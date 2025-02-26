document.getElementById('sendMoney-btn').addEventListener('click', function(event){
    event.preventDefault();

    const userAccount =document.getElementById('user-account').value;
    const sendMoneyAmount =document.getElementById('sendMoney-amount').value;
    const sendMoneyPin =document.getElementById('sendMoney-pin').value;

    const totalBalance = document.getElementById('main-balance').innerText;
    const convertedTotalBalance = parseFloat(totalBalance);

    

    if(userAccount.length === 11){
        if(sendMoneyPin.length===4){
            const sendMoneyCalculation = convertedTotalBalance - sendMoneyAmount;
            document.getElementById('main-balance').innerText=sendMoneyCalculation;

            const container =document.getElementById('transaction-container');
            const div = document.createElement('div');
            div.classList.add('border-[#DAA520]', 'border-2', 'rounded-2xl', 'bg-white' , 'p-4', 'bg-gray-50', 'mt-5');
            div.innerHTML =`
            <div class="flex items-center gap-4">
            <img class="rounded-full bg-gray-100 w-[80px] p-3" src="assets/purse1.png" alt="">

            <div class="flex flex-col">
            <h1 class="font-semibold">Send Money ${sendMoneyAmount} amount</h1>
            <h1 class="text-sm text-gray-600">Account Number:</h1>
            <h1 class="text-sm">${userAccount}</h1>
        </div>
    </div>`
            container.appendChild(div);
            alert(`Successfully sent ${sendMoneyAmount} to ${userAccount}!`);

        } else{
            alert('bkash theke nahid bolse');
        }
        
    } else{
        alert('hacker hain vai hacker')
    }
});