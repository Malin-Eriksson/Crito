/*const validateText = (event) => {
    if (event.target.value.length >= 2) {
        document.querySelector(`[data-valmsg-for="${event.target.id}"]`).innerHTML = ""
    } else {
        document.querySelector(`[data-valmsg-for="${event.target.id}"]`).innerHTML = "invalid length"
    }      
    
}*/

/*const validateEmail = (event) => {

    const regEx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

    if (regEx.test(event.target.value)) {
        document.querySelector(`[data-valmsg-for="${event.target.id}"]`).innerHTML = ""
    } else {
        document.querySelector(`[data-valmsg-for="${event.target.id}"]`).innerHTML = "invalid email address"
    }
}*/



var textError = document.getElementById("text-error");

function validateText() {
    var textField = document.getElementById("text-field").value;

    if (textField.length >= 10) {
        textError.innerHTML = "";
        return false;
    }
    else {
        textError.innerHTML = "Invalid length";
        return true;
    }
}

var nameError = document.getElementById("name-error");

function validateName() {
    var nameField = document.getElementById("name-field").value;

    if (nameField.length >= 2) {
        nameError.innerHTML = "";
        return false;
    }
    else {
        nameError.innerHTML = "Invalid length";
        return true;
    }
}




var emailField = document.getElementById("email-field");
var emailError = document.getElementById("email-error");

function validateEmail() {
    if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Please enter a valid email address";
        return false;
    }

    emailError.innerHTML = "";
    return true;
}
                        