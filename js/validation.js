
var nameError = document.getElementById('name-error');
var lastNameError = document.getElementById('last-name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

var name,lastName,email,phone,message;
function validateName(){
    var name=document.getElementById('name').value.trim();

    if(name.length==0 || name.length<2){
        nameError.innerHTML='Enter minimum 2 characters';
        nameError.style.color='red'
        return false;
    }
    if (!name.match(/^[A-Za-z ]*$/)){
        nameError.innerHTML='Enter a valid Name';
        nameError.style.color='red'
        return false;
    }
    nameError.innerHTML='Name is valid';
    nameError.style.color='green'
    return true;
}

function validateLastName(){
    var lastName=document.getElementById('lastName').value.trim();

    if(lastName.length==0 || lastName.length<2){
        lastNameError.innerHTML='Last name is required';
        lastNameError.style.color='red'
        return false;
    }
    if (!lastName.match(/^[A-Za-z ]*$/)){
        lastNameError.innerHTML='Enter a valid Name';
        lastNameError.style.color='red'
        return false;
    }
    lastNameError.innerHTML='Name is valid';
    lastNameError.style.color='green'
    return true;
}

function validateEmail(){
    var email = document.getElementById('email').value.trim();

    if (email.length==0) {
        emailError.innerHTML='Email is Required';
        emailError.style.color='red'
        return false;
    }

    if (!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError.innerHTML='Email is Invalid';
        emailError.style.color='red'
        return false;
    }
    emailError.innerHTML='Email is valid';
    emailError.style.color='green'
    return true;
}

function validatePhone() {
    var phone =document.getElementById('phone').value.trim();
    
        if(phone.match(/^[0-9]+$/) &&  phone.length==10)
        {
            phoneError.innerHTML='Valid';
            phoneError.style.color='green'
            return true;
        }

        else{
            phoneError.innerHTML ='Mobile Number is Required';
            phoneError.style.color='red'
            return false;
        }
    }

    function validateMsg() {
        var message =document.getElementById('message').value.trim();
        
        if(message.length==0 || message.length<10){
            messageError.innerHTML ='More character Required';
            messageError.style.color='red'
            return false;
        }
        messageError.innerHTML='Message is valid';
        messageError.style.color='green'
        return true;   
    }