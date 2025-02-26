document.getElementById("bonus-btn").addEventListener("click", function(event) {
    event.preventDefault();
    
    const bonusInput = document.getElementById("bonus-input").value;
    let totalBalance = parseFloat(document.getElementById("main-balance").innerText);

    let bonus = 0;

    if (bonusInput === "Bonus100") {
        bonus = totalBalance * 0.80; // 80% bonus
    } else if (bonusInput === "Ramadan25") {
        bonus = totalBalance * 0.50; // 50% bonus
    } else {
        alert("❌ Invalid coupon code!");
        return;
    }

    const totalBonus = totalBalance + bonus;
    document.getElementById("main-balance").innerText = totalBonus;

    alert(`🎉 Coupon applied! You received ${bonus.toFixed(2)} bonus.`);
    
});
