var yourNameInput = document.getElementById("yourName");
var yourEmailInput = document.getElementById("yourEmail");
var yourPasswordInput = document.getElementById("yourPassword");
var loginBtn = document.getElementById("loginBtn");
var signUpBtn = document.getElementById("signUpBtn");
var signInLink = document.getElementById("signInLink");
var signUpLink = document.getElementById("signUpLink");
var loginPage = document.getElementById("loginPage");
var homePage = document.getElementById("homePage");
var textName = document.getElementById("textName");
var validStat = document.getElementById("validStat");

var data = [];

if (localStorage.getItem("userData") !== null) {
    data = JSON.parse(localStorage.getItem("userData"));
}

function login(){
    if (mailTrue()!=false) {
        goToHome()
        textName.innerText = `hello ${mailTrue()}`
    } else {
    console.log('incorrect');
        alert('user name or password is not correct')
}
 
}

function signup() {
    if (isExisted() == true) {
        console.log("acccount existed");
    } else {
        validation()
        var user = {
            name: yourNameInput.value,
            Email: yourEmailInput.value,
            Password: yourPasswordInput.value,
        };
        data.push(user);
        localStorage.setItem("userData", JSON.stringify(data));
        console.log(data);
    }
}

function isExisted() {
    for (i = 0; i < data.length; i++) {
        if (data[i].name.toLowerCase() == yourNameInput.value.toLowerCase()) {
            console.log("no");
            return true
        }
    }
    return false
}

function mailTrue() {
    for ( i = 0; i < data.length; i++) {
       if (data[i].Email.toLowerCase()==yourEmailInput.value.toLowerCase()  &&
            data[i].Password==yourPasswordInput.value) {
                return data[i].name
            } 
        }
        console.log('bye');
    return false
}


function clearData() {
    yourNameInput.value = null;
    yourEmailInput.value = null;
    yourPasswordInput.value = null;
}

function goToSignin() {
    signInLink.classList.remove("d-none");
    signUpLink.classList.add("d-none");
    yourNameInput.classList.add("d-none");
    loginBtn.classList.remove("d-none");
    signUpBtn.classList.add("d-none");
}

function goToSignup() {
    signInLink.classList.add("d-none");
    signUpLink.classList.remove("d-none");
    yourNameInput.classList.remove("d-none");
    loginBtn.classList.add("d-none");
    signUpBtn.classList.remove("d-none");
}

function goToHome() {
    loginPage.classList.add('d-none')
    homePage.classList.remove('d-none')
}

function goToLogin() {
    loginPage.classList.remove('d-none')
    homePage.classList.add('d-none')
    
}

const nameRegex = /^.{4,}$/;
const mailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
const passwordRegex = /^.{4,}$/;




function validation() {
    if (nameRegex.test(yourNameInput.value) &&
        mailRegex.test(yourEmailInput.value) &&
        passwordRegex.test(yourPasswordInput.value)
    ) {
        validStat.innerText = 'sucess'
        validStat.classList.add('text-success')
        validStat.classList.remove('text-danger')
    } else{
        console.log('in-valid');
        validStat.innerText = 'you don`t match requirments'
        validStat.classList.add('text-danger')
        validStat.classList.remove('text-success')
    }
}



function typing(input,regx) {
    if (regx.test(input.value))
        {
            input.classList.add('is-valid')
            input.classList.remove('is-invalid')
        } else {
            input.classList.add('is-invalid')
            input.classList.remove('is-valid')
        }
}
