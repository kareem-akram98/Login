
//* =============== global variables
var userName = document.getElementById('userName')
var userEmail = document.getElementById('userEmail')
var userPassword = document.getElementById('userPassword')
var signInLink = document.getElementById('signInLink')
var signUpBtn = document.getElementById('signUpBtn')
var userNameError = document.getElementById('userNameError')
var userEmailError = document.getElementById('userEmailError')
var userPasswordError = document.getElementById('userPasswordError')



var data = [];
if (localStorage.getItem('userData') != null) {
    data = JSON.parse(localStorage.getItem('userData'))
}


//* ============= Event listner moves user to other page 
signInLink.addEventListener('click', function () { window.location = './index.html' })
signUpBtn.addEventListener('click', signUp)




//* ===== Function to make sure that all inputs is true the transfer user to login page
function signUp() {
    if (isExisted() == false && userNameValidation() == true &&
        userEmailValidation() == true && userPasswordValidation() == true) {
        var user = {
            name: userName.value,
            email: userEmail.value,
            password: userPassword.value
        }
        data.push(user)
        localStorage.setItem('userData', JSON.stringify(data))
        signUpBtn.addEventListener('click', window.location = './index.html')
        clearData()
    } else if (isExisted() == true) {

        clearData()
        alert('this mail used before')
    }
}


//* ============ clear user inputs value and validation
function clearData() {
    userName.value = null;
    userEmail.value = null
    userPassword.value = null;
    userName.classList.remove('is-valid')
    userName.classList.remove('is-invalid')
    userEmail.classList.remove('is-valid')
    userEmail.classList.remove('is-invalid')
    userPassword.classList.remove('is-valid')
    userPassword.classList.remove('is-invalid')
}


//* ============== function to make sure that user email did`t used before
function isExisted() {
    for (i = 0; i < data.length; i++) {
        if (data[i].email.toLowerCase() == userEmail.value.toLowerCase()) {
            console.log('this mail used before');
            return true
        }
    }
    return false
}


// * =================  Validation of user inputs to make sure it fit the requirments
userName.addEventListener('input', userNameValidation)
function userNameValidation() {
    const nameRegex = /^.{4,}$/;
    if (nameRegex.test(userName.value) == true) {
        userName.classList.add('is-valid')
        userName.classList.remove('is-invalid')
        userNameError.classList.add('d-none')
        return true
    } else {
        userName.classList.remove('is-valid')
        userName.classList.add('is-invalid')
        userNameError.classList.remove('d-none')
        return false
    }
}

userEmail.addEventListener('input', userEmailValidation)
function userEmailValidation() {
    const mailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (mailRegex.test(userEmail.value) == true) {
        userEmail.classList.add('is-valid')
        userEmail.classList.remove('is-invalid')
        userEmailError.classList.add('d-none')
        return true
    } else {
        userEmail.classList.remove('is-valid')
        userEmail.classList.add('is-invalid')
        userEmailError.classList.remove('d-none')
        return false
    }
}

userPassword.addEventListener('input', userPasswordValidation)
function userPasswordValidation() {
    const passwordRegex = /^.{4,}$/;
    if (passwordRegex.test(userPassword.value) == true) {
        userPassword.classList.add('is-valid')
        userPassword.classList.remove('is-invalid')
        userPasswordError.classList.add('d-none')
        return true
    } else {
        userPassword.classList.remove('is-valid')
        userPassword.classList.add('is-invalid')
        userPasswordError.classList.remove('d-none')
        return false
    }
}

