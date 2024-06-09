//* =============== global variables
var userEmail = document.getElementById('userEmail')
var userPassword = document.getElementById('userPassword')
var userEmailError = document.getElementById('userEmailError')
var userPasswordError = document.getElementById('userPasswordError')
var loginBtn = document.getElementById('loginBtn')
// var inputInCorrect = document.getElementById('inputInCorrect')




//* ======== Get data from local storage
var data = [];
if (localStorage.getItem('userData') != null) {
    data = JSON.parse(localStorage.getItem('userData'))
}

var nameHome 


//* ============= Event listner moves user to other page 
signInLink.addEventListener('click' , function(){window.location='./signUp.html'} )
loginBtn.addEventListener('click' , login )



//* ========= Login function transfer user to home page
function login() {
    if (accountData() != false) {
        loginBtn.addEventListener('click',  window.location = './welcome.html')
    }
}



//* ====== function to make sure that user email and password are correct
function accountData() {
    for ( i = 0; i < data.length; i++) {
        if (data[i].email.toLowerCase()==userEmail.value.toLowerCase() &&
            data[i].password.toLowerCase()==userPassword.value.toLowerCase()) {
                nameHome=data[i].name
                localStorage.setItem('name' , JSON.stringify(nameHome))
            return data[i].name
        } else {
            alert('user name or password is incorrect')
            clearData()
        }
    }

    return false
}


//* ============ clear user inputs value and validation
function clearData() {
    userEmail.value = null
    userPassword.value = null;
    userEmail.classList.remove('is-valid')
    userEmail.classList.remove('is-invalid')
    userPassword.classList.remove('is-valid')
    userPassword.classList.remove('is-invalid')
}

// * =================  Validation of user inputs to make sure it fit the requirments
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

