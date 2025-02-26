document.getElementById('payBill-btn').addEventListener('click', function(event){
    event.preventDefault();
    const selectBank =document.getElementById('bankSelect-for-payBill').value;
    console.log(selectBank);

    const payBillMobileNumber = document.getElementById("payBill-mobile-number").value;

    const payBillPinNumber =document.getElementById("payBill-pin").value;

    const payBillAmountValue =document.getElementById("payBill-amount").value;

    const totalBalance = document.getElementById('main-balance').innerText;
    const convertedTotalBalance = parseFloat(totalBalance);

    if(totalBalance <= 0){
        alert('age tk bor');
        return;
    }
    
    if(payBillMobileNumber.length === 11){
        if(payBillPinNumber.length === 4){
            if (payBillAmountValue > convertedTotalBalance) {
                alert('Insufficient balance!');
                return;
            }
            const payBillCalculation =convertedTotalBalance - payBillAmountValue;
            document.getElementById('main-balance').innerText = payBillCalculation;

            const container = document.getElementById('transaction-container');
            const div =document.createElement('div');
            div.classList.add('border-[#DAA520]', 'border-2', 'rounded-2xl', 'bg-white' , 'p-4', 'bg-gray-50', 'mt-5');
            div.innerHTML=`
             <div class="flex items-center gap-4">
            <img class="rounded-full bg-gray-100 w-[80px] p-3" src="assets/purse1.png" alt="">

            <div class="flex flex-col">
            <h1 class="font-semibold">Pay Bill from ${selectBank}</h1>
            <h1 class="text-lg font-bold">${payBillAmountValue}</h1>
            <h1 class="text-sm text-gray-600">Account number: ${payBillMobileNumber}</h1>
            </div>
            </div>
            `
            container.appendChild(div);

            alert(`✅ Bill paid successfully from ${selectBank}. Amount: ${payBillAmountValue}`);
        }
        else{
            console.log("pin is incorrect");
        }
        
    }
    else{
        alert("Please input a valid number");
    }

})