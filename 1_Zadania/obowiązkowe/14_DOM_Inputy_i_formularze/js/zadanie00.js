document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('form');

    const email = document.querySelector('#email').value;

    const name = document.querySelector('#name').value;

    const surname = document.querySelector('#surname').value;

    const pass1 = document.querySelector('#pass1').value;

    const pass2 = document.querySelector('#pass2').value;

    const agree = document.querySelector('#agree');

    const errorMessage = document.querySelector('.error-message');

    const successMessage = document.querySelector('.success-message');

    form.addEventListener('submit', function(e) {
        errorMessage.innerHTML = '';

        if (!checkEmail(email)) {
            errorMessage.innerHTML += 'Email musi posiadać znak @';
            e.preventDefault();
            return false;
        }

        if (!checkName(name)) {
            errorMessage.innerHTML += 'Twoje imię jest za krótkie';
            e.preventDefault();
            return false;
        }

        if (!checkName(surname)) {
            errorMessage.innerHTML += 'Twoje nazwisko jest za krótkie';
            e.preventDefault();
            return false;
        }

        if (!checkPasswords(pass1, pass2)) {
            errorMessage.innerHTML += 'Hasła nie są takie same lub puste';
            e.preventDefault();
            return false;
        }

        if (!agree.checked) {
            errorMessage.innerHTML += 'Musisz zaakceptować warunki';
            e.preventDefault();
            return false;
        }

        if (errorMessage.innerHTML !== '') {
            e.preventDefault();
            return false;
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
        if (pass1 == '' || pass2 == '') {
            return false;
        } else {
            return pass1 == pass2;
        }
    }

});
