//step-1 add event handlar with the submit button
document.getElementById('btn-submit').addEventListener('click', function() {
    // step-2 get the emeail address
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step-3 get passoward
    const passwoardField = document.getElementById('user-password');
    const passwoard = passwoardField.value;
    if (email === 'sohaghossain2052@gmail.com' && passwoard === '1020304050') {
        window.location.href = 'bank.html';
    } else {
        alert('Tui passwoard vule gesos!! Tor kobor ase');
    }
})