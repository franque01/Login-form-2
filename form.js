const registerform = document.querySelector('.registerform');
const loginform = document.querySelector('.loginform');
const loginBtn = document.getElementById('login');
const registerBtn = document.getElementById('register');
const btn = document.getElementsByClassName('btn');
const subBody = document.querySelector('#sub-body');



loginBtn.addEventListener('click', function (){
    registerform.style.opacity = "0";
    registerform.style.display = "none";
    loginform.style.opacity = "1";
    loginform.style.display = "block";

})
registerBtn.addEventListener('click', function (){
    registerform.style.opacity = "1";
    registerform.style.display = "block";
    loginform.style.display = "none";
    loginform.style.opacity = "0";

})
