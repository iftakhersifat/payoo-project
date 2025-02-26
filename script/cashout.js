document.getElementById('cashOut-btn').addEventListener('click', function (event) {
    event.preventDefault();

    // Get input values
    const pinNumber = document.getElementById('pins').value;
    const convertedPinNumber = parseInt(pinNumber);

    const cashOutAmount = document.getElementById('cashOut-amount').value;
    const convertedCashOutAmount = parseFloat(cashOutAmount);

    const totalBalance = document.getElementById('main-balance').innerText;
    const convertedTotalBalance = parseFloat(totalBalance);

    const accountNumber = document.getElementById('mobile-number').value;
    // console.log(typeof account);
    // const convertedAccount =parseInt(account);
    
        if (convertedPinNumber === 1234) {
            // Prevent negative balance
            if (convertedCashOutAmount > convertedTotalBalance) {
                console.log('Insufficient balance.');
                return;
            }

            const withDraw = convertedTotalBalance - convertedCashOutAmount;
            document.getElementById('main-balance').innerText = withDraw;

            // Add transaction log
            const container = document.getElementById('transaction-container');
            // const p = document.createElement('p');
            // p.innerText = `Withdrawn ${cashOutAmount} from ${accountNumber} account number`;
            // container.appendChild(p);

            const div =document.createElement('div');
            div.classList.add('border-[#DAA520]', 'border-2', 'rounded-2xl', 'bg-white' , 'p-4', 'bg-gray-50', 'mt-5');
            div.innerHTML=`
             <div class="flex items-center gap-4">
            <img class="rounded-full bg-gray-100 w-[80px] p-3" src="assets/purse1.png" alt="">

            <div class="flex flex-col">
            <h1 class="font-semibold">Withdrawn ${cashOutAmount} amount</h1>
            <h1 class="text-sm text-gray-600">Account Number:</h1>
            <h1 class="text-sm">${accountNumber}</h1>
        </div>
    </div>
            `
            container.appendChild(div);

        } else {
            console.log('Pin incorrect');
        }
    
});
