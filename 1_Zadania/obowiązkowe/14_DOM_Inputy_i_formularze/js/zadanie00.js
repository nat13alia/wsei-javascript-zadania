document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('form');
    const email = document.getElementById('email');
    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const pass1 = document.getElementById('pass1');
    const pass2 = document.getElementById('pass2');
    const agree = document.getElementById('agree');

    const errorMessage = document.querySelector('.error-message');
    const successMessage = document.querySelector('.success-message');

    form.addEventListener('submit', function(e) {
        errorMessage.innerHTML = '';

        if (!checkEmail(email.value)) {
            errorMessage.innerHTML += 'Email musi posiadać znak @<br>';
        }

        if (!checkName(name.value)) {
            errorMessage.innerHTML += 'Twoje imię jest za krótkie<br>';
        }

        if (!checkName(surname.value)) {
            errorMessage.innerHTML += 'Twoje nazwisko jest za krótkie<br>';
        }

        if (!checkPasswords(pass1.value, pass2.value)) {
            errorMessage.innerHTML += 'Hasła nie są takie same lub puste<br>';
        }

        if (!agree.checked) {
            errorMessage.innerHTML += 'Musisz zaakceptować warunki<br>';
        }

        if (errorMessage.innerHTML !== '') {
            e.preventDefault();
        }
        
    });

    function checkEmail(email) {
        if (email.includes("@")) {
            return true;
        } else {
            return false;
        }
    }

    function checkName(name) {
        if (name.length <= 6) {
            return false;
        } else {
            return true;
        }
    }

    function checkPasswords(pass1, pass2) {
        if (pass1.length > 0 && pass2.length > 0 && (pass1 === pass2)) {
            return true;
        } else {
            return false;
        }
    }

});