
var yourNameInput =document.getElementById("yourName")
var yourEmailInput =document.getElementById("yourEmail")
var yourPasswordInput =document.getElementById("yourPassword")
var loginBtn =document.getElementById("loginBtn")
var signUpBtn =document.getElementById("signUpBtn")
var signInLink =document.getElementById("signInLink")
var signUpLink =document.getElementById("signUpLink")

var data =[]



// function login(){
//     var user = {
//         name : yourNameInput.value ,
//         Email : yourEmailInput.value ,
//         Password : yourPasswordInput.value ,
//     }

//     if (Email==yourEmailInput && Password==yourPasswordInput) {
//         alert('hi')
//     } else {
//         alert('you don`t have account please sign up')
//     }


// }


function signup() {
    var user = {
        name : yourNameInput.value ,
        Email : yourEmailInput.value ,
        Password : yourPasswordInput.value ,
    }

    data.push(user)
    console.log(data);
    localStorage.setItem('userData' , JSON.stringify(data))
}


function clearData() {
    yourNameInput.value =null;
    yourEmailInput.value =null;
    yourPasswordInput.value =null;
}

function goToSignin() {
    signInLink.classList.remove('d-none')
    signUpLink.classList.add('d-none')
    yourNameInput.classList.add('d-none')
    loginBtn.classList.remove('d-none')
    signUpBtn.classList.add('d-none')
}

function goToSignup() {
    signInLink.classList.add('d-none')
    signUpLink.classList.remove('d-none')
    yourNameInput.classList.remove('d-none')
    loginBtn.classList.add('d-none')
    signUpBtn.classList.remove('d-none')
}



// const urlRegex = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/;
// const nameRegex = /^[a-zA-Z]{3,}$/;


// function typing(input,regx) {
//     if (regx.test(input.value))
//         {
//             input.classList.add('is-valid')
//             input.classList.remove('is-invalid')
//         } else {
            
//             input.classList.add('is-invalid')
//             input.classList.remove('is-valid')
//         }
// }