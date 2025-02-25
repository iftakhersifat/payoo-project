document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();

    const mobile = document.getElementById('mobile-number').value;
    const pass = document.getElementById('password').value;
    console.log(mobile,pass);
    if(mobile.length === 11 ){
        if(pass.length === 4){
            window.location.href = "./second.html";
        }
        else{
            alert('error');
        }
    }
    else{
        alert('put valid number');
    }
})