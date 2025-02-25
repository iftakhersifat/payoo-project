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

    // Validate account number length
    
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
            const p = document.createElement('p');
            p.innerText = `Withdrawn ${cashOutAmount} from ${accountNumber} account number`;
            container.appendChild(p);
        } else {
            console.log('Pin incorrect');
        }
    
});
