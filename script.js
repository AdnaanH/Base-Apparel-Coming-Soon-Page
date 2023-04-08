const email = document.getElementById('email');
const errorMessage = document.getElementsByClassName('error-msg')
const form = document.getElementById("form")
function ValidateEmail(){
    var mail = email.value;
    var validMail = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    if(!validMail(mail)){
        form.classList.add('error');
        form.classList.remove('hidden');
        return false;
    } else {
        form.classList.remove('error');
        form.classList.add('hidden');
        return true;
    }
}

