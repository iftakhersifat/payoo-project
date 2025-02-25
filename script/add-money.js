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
    

    // Validate account number length
    if (account.length === 11) {
        // Validate PIN
        if (convertedPin === 1234) {
            const sum = convertedAmount + convertedTotalBalance;
            document.getElementById('main-balance').innerText = sum;

            // Add transaction log
            const container = document.getElementById('transaction-container');
            const p = document.createElement('p');
            p.innerText = `Added ${amount} from this ${account} account number`;
            container.appendChild(p);

        } else {
            console.log('Pin is incorrect');
        }
    } else {
        console.log('Invalid account number. Must be 11 digits.');
    }
});
