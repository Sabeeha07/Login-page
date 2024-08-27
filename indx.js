document.getElementById('login').
addEventListener('submit',
function (event) {
    event.preventDefault();

    const username = document.getElementById('uname').value;
    const password = document.getElementById('psw').value;
   

    if(username=='admin' && password==123456)
    {
        document.getElementById('message').innerText="Login Successfull, redirecting ...";
        setTimeout(function(){
            window.location.href=`bill.html?username=${encodeURIComponent(username)}`;},2000);
            // window.location.assign('bill.html');

        
        
    
    }
else{
alert('Wrong Entry')
document.getElementById('message').innerText="Login details Wrong";

}
}
);