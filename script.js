
const cardRegister = document.getElementById("card-register");
const btnRegister = document.getElementById("btn-daftar");
const btnLogin = document.getElementById("btn-login");
const cardLogin = document.getElementById("card-login");

const formRegister = document.getElementById("form-register");
const formLogin = document.getElementById("form-login");


    cardRegister.hidden = true;
    document.getElementById('btn-daftars').addEventListener("click", function () {
        cardLogin.hidden = true;
        cardRegister.hidden = false;

    });
    document.getElementById('btn-logins').addEventListener("click", function () {
        cardLogin.hidden = false;
        cardRegister.hidden = true;
    });


//proses login/register
//membuat variable
const formControl = document.getElementsByTagName("input");
const bodyInput = document.getElementsByClassName("pesan");

//variable kebutuhan login
const usernames = document.getElementById("username");
const passwords = document.getElementById("password");

//variable kebutuhan register
const usernameReg = document.getElementById("username_register");
const passwordReg = document.getElementById("password_register");
const email = document.getElementById("email");
const passwordConfirm = document.getElementById("password_confirm");

const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");

//login
usernames.addEventListener("keyup", function (event) {
    event.preventDefault();
    const xhttp = new XMLHttpRequest();
    var username = document.getElementById("username").value;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 & this.status == 200) {
            if (this.responseText == "success") {
                formControl[0].classList.add('benar');
                formControl[0].classList.remove('error');
                formControl[0].classList.remove('form-control');
                bodyInput[0].innerHTML = "Oke datalu ada";
            }
            else if (username === "") {
                formControl[0].classList.remove('error');
                formControl[0].classList.add('form-control');
                formControl[0].classList.remove('benar');
                bodyInput[0].innerHTML = "";
            }


            else {
                formControl[0].classList.add('error');
                formControl[0].classList.remove('form-control');
                formControl[0].classList.remove('benar');
                bodyInput[0].innerHTML = "Salah bos, datalu gadak didatabase";

            }
        }
    }
    xhttp.open("GET", "http://localhost/loginregister/proses-login/cek-username.php?username=" + username, true);
    xhttp.send();

});

passwords.addEventListener("keyup", function (event) {
    event.preventDefault();

    //proses
    var password = document.getElementById("password").value;
    var username = document.getElementById("username").value;
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {

            if (xhttp.responseText == 'success') {
                formControl[1].classList.add('benar');
                formControl[1].classList.remove('error');
                formControl[1].classList.remove('form-control');
                bodyInput[1].innerHTML = "Oke password lu sesuai";
                btnLogin.classList.remove('disabled');
            }
            else if (password === "") {
                formControl[1].classList.remove('error');
                formControl[1].classList.add('form-control');
                formControl[1].classList.remove('benar');
                bodyInput[1].innerHTML = "";
                btnLogin.classList.remove('disabled');
            }

            else {
                formControl[1].classList.add('error');
                formControl[1].classList.remove('form-control');
                formControl[1].classList.remove('benar');
                bodyInput[1].innerHTML = "Salah bos, password lu tidak sesuai";
                btnLogin.classList.add('disabled');
            }
        }
    }
    xhttp.open("GET", "http://localhost/loginregister/proses-login/cek-password.php?username=" + username + "&password=" + password, true);
    xhttp.send();


});

formLogin.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    let data = "username=" + username + "&password=" + password;
   btnLogin.innerText = 'Loading..';
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const respon = JSON.parse(this.responseText);
            if(respon.status == 'success'){
                setTimeout(function () {
                    btnLogin.innerText = 'Login Success';
                window.location = 'dashboard/index.php';
                }, 2000);
            }
        }
    }
    xhttp.open("POST", "proses-login/proses.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(data);

});


//register
usernameReg.addEventListener("keyup", function (event) {
    event.preventDefault();
    var username = document.getElementById("username_register").value;
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var respon = JSON.parse(this.responseText);

            if (username === "") {
                formControl[2].classList.remove('error');
                formControl[2].classList.add('form-control');
                formControl[2].classList.remove('benar');
                bodyInput[2].innerHTML = "";

            }

            else if (respon.status == 'success') {
                formControl[2].classList.add('benar');
                formControl[2].classList.remove('error');
                formControl[2].classList.remove('form-control');
                bodyInput[2].innerHTML = respon.pesan;
            }
            else if (respon.status == 'error') {
                formControl[2].classList.add('error');
                formControl[2].classList.remove('form-control');
                formControl[2].classList.remove('benar');
                bodyInput[2].innerHTML = respon.pesan;
            }

        }
    }
    xhttp.open("GET", "http://localhost/loginregister/proses-register/cek-username.php?username=" + username, true);
    xhttp.send();

});

email.addEventListener("keyup", function (event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var respon = JSON.parse(this.responseText);

            if (email === "") {
                formControl[3].classList.remove('error');
                formControl[3].classList.add('form-control');
                formControl[3].classList.remove('benar');
                bodyInput[3].innerHTML = "";

            }

            else if (respon.status == 'success') {
                formControl[3].classList.add('benar');
                formControl[3].classList.remove('error');
                formControl[3].classList.remove('form-control');
                bodyInput[3].innerHTML = respon.pesan;
            }
            else if (respon.status == 'error') {
                formControl[3].classList.add('error');
                formControl[3].classList.remove('form-control');
                formControl[3].classList.remove('benar');
                bodyInput[3].innerHTML = respon.pesan;
            }

        }
    }
    xhttp.open("GET", "http://localhost/loginregister/proses-register/cek-email.php?email=" + email, true);
    xhttp.send();

});

//pesan password dihilangkan
bodyInput[4].hidden = true;

//jika diklik maka pesan akan muncul
passwordReg.onfocus = function () {
    bodyInput[4].hidden = false;
}

//jika ditinggalkan maka pesan akan hilang
passwordReg.onblur = function () {
    bodyInput[4].hidden = true;
}
passwordReg.addEventListener("keyup", function (event) {
    event.preventDefault();
    let password = document.getElementById("password_register").value;

    let lowerCase = /[a-z]/g;
    //validasi lowercase
    if (password.match(lowerCase)) {
        letter.classList.remove('invalid');
        letter.classList.add('valid');
    }
    else {
        letter.classList.add('invalid');
        letter.classList.remove('valid');
    }

    let upperCaseLetter = /[A-Z]/g;
    //validasi upperCase
    if (password.match(upperCaseLetter)) {
        capital.classList.remove('invalid');
        capital.classList.add('valid');
    }
    else {
        capital.classList.add('invalid');
        capital.classList.remove('valid');
    }

    let cekNumber = /[0-9]/g;
    //validasi number
    if (password.match(cekNumber)) {
        number.classList.remove('invalid');
        number.classList.add('valid');
    }
    else {
        number.classList.add('invalid');
        number.classList.remove('valid');
    }

    //validasi panjang karakter password
    if (password.length > 7) {
        length.classList.remove('invalid');
        length.classList.add('valid');
    }
    else {
        length.classList.add('invalid');
        length.classList.remove('valid');
    }

});

passwordConfirm.addEventListener('keyup', function (e) {
    e.preventDefault();

    const password = document.getElementById("password_register").value;

    if (this.value === "") {
        formControl[5].classList.remove('error');
        formControl[5].classList.add('form-control');
        formControl[5].classList.remove('benar');
        bodyInput[5].innerHTML = "";
        btnRegister.classList.remove('disabled');
    }
    else if (password !== this.value) {
        formControl[5].classList.add('error');
        formControl[5].classList.remove('form-control');
        formControl[5].classList.remove('benar');
        bodyInput[5].innerHTML = "Password Konfirmasi berbeda dengan Password";
        btnRegister.classList.add('disabled');
    }
    else {
        formControl[5].classList.remove('error');
        formControl[5].classList.remove('form-control');
        formControl[5].classList.add('benar');
        bodyInput[5].innerHTML = "Password Konfirmasi sama dengan Password";
        btnRegister.classList.remove('disabled');
    }
})

formRegister.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username_register").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password_register").value;
    let data = "username_register=" + username + "&email="+email+ "&password_register=" + password;

    btnRegister.innerText = 'Loading..';
    
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const respon = JSON.parse(this.responseText);
            if(respon.status == 'success'){
                setTimeout(function () {
                btnRegister.innerText = 'Register Success';
                window.location = 'index.php';
                }, 2000);
            }
        }
    }
    xhttp.open("POST", "proses-register/proses.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(data);

});










