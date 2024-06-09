
//* =============== global variables
var textName =document.getElementById('textName')
var logOut =document.getElementById('logOut')


//* ======== Get data from local storage


var nameHome = JSON.parse(localStorage.getItem('name'))
console.log(nameHome);

//* ============= Event listner moves user to other page 
logOut.addEventListener('click', function () { window.location = './index.html' })




textName.innerHTML= `Hello ${nameHome} You have the power to choose your own path and to create the life you want for yourself, and you deserve to have the best that life has to offer.`