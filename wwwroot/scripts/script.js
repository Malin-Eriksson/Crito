//Validation for message. Set to atleast 10 characters. 

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

//Validation for name, set to atleast two characters. 

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


// Validation for email

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
                        