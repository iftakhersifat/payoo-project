document.getElementById('add-money-btn').addEventListener('click', function(event) {
    event.preventDefault();

    // Get input values
    const amount = document.getElementById('amount-to-add').value;
    const convertedAmount = parseFloat(amount);

    const pin = document.getElementById('password').value;
    const convertedPin = parseInt(pin);

    const totalBalance = document.getElementById('main-balance').innerText;
    const convertedTotalBalance = parseFloat(totalBalance);

    // Get bank account number correctly
    const account = document.getElementById('mobile-number').value;
    
    const selectBank =document.getElementById('bank-select').value;
    console.log(selectBank);



    if (account.length === 11) {
        if (convertedPin === 1234) {
            const sum = convertedAmount + convertedTotalBalance;
            document.getElementById('main-balance').innerText = sum;

            const container = document.getElementById('transaction-container');
            // const p = document.createElement('p');
            // p.innerText = `Added ${amount} from this ${account} account number`;
            // container.appendChild(p);
            const div =document.createElement('div');
            div.classList.add('border-[#DAA520]', 'border-2', 'rounded-2xl', 'bg-white' , 'p-4', 'bg-gray-50', 'mb-5');
            div.innerHTML=`
             <div class="flex items-center gap-4">
            <img class="rounded-full bg-gray-100 w-[80px] p-3" src="assets/purse1.png" alt="">

            <div class="flex flex-col">
            <h1 class="font-semibold">Add Money from ${selectBank}</h1>
            <h1 class="text-lg font-bold">${amount}</h1>
            <h1 class="text-sm text-gray-600">Account number: ${account}</h1>
        </div>
    </div>
            `
            container.appendChild(div);

        } else {
            console.log('Pin is incorrect');
        }
    } else {
        console.log('Invalid account number. Must be 11 digits.');
    }
});
